n.d(t, { k: () => I });
var i = n(77729),
    r = n(311043),
    a = n(280450),
    s = n(779559),
    l = n(915725),
    o = n(439818),
    d = n(831518),
    c = n(614584),
    u = n(313465),
    _ = n(598213),
    E = n(799),
    A = n(160330),
    h = n(696016);
class I {
    gameId;
    startedAt;
    id = crypto.randomUUID();
    status = "active";
    finalization = null;
    savedClipIds = [];
    candidateClipsById = new Map();
    manualClipsSavedCount = 0;
    candidateClipsSavedCount = 0;
    candidateClipsPromotedCount = 0;
    constructor(e, t = performance.now()) {
        ((this.gameId = e), (this.startedAt = t));
    }
    get clipIds() {
        return this.savedClipIds;
    }
    get candidates() {
        return [...this.candidateClipsById.values()];
    }
    get isActive() {
        return "active" === this.status;
    }
    get hasClips() {
        return this.savedClipIds.length > 0;
    }
    get manualClipsSaved() {
        return this.manualClipsSavedCount;
    }
    get candidateClipsSaved() {
        return this.candidateClipsSavedCount;
    }
    get candidateClipsPromoted() {
        return this.candidateClipsPromotedCount;
    }
    recordSavedClip(e) {
        if (("manual" === e.clipMethod && (this.manualClipsSavedCount += 1), !0 === e.isCandidate)) {
            ((this.candidateClipsSavedCount += 1), this.candidateClipsById.set(e.id, e));
            return;
        }
        this.savedClipIds = [...this.savedClipIds, e.id];
    }
    recordPromotedClip(e) {
        ((this.candidateClipsPromotedCount += 1),
            this.removeCandidate(e.id),
            (this.savedClipIds = [...this.savedClipIds, e.id]));
    }
    removeCandidate(e) {
        this.candidateClipsById.delete(e);
    }
    getCandidate(e) {
        return this.candidateClipsById.get(e);
    }
    recordMontageClip(e) {
        this.savedClipIds = [...this.savedClipIds, e.id];
    }
    end() {
        "active" === this.status && (this.status = "ended");
    }
    finalize(e) {
        return (
            null != this.finalization ||
                ((this.status = "finalizing"),
                (this.finalization = this.runFinalization(e).finally(() => {
                    this.status = "ended";
                }))),
            this.finalization
        );
    }
    async runFinalization(e) {
        let t = this.candidates;
        if (
            (h.nx.info(
                `decider: finalizing session \u{2014} sessionId=${this.id} candidates=${t.length} autoStashEnabled=${l.Ay.isAutoStashEnabled()}`,
            ),
            l.Ay.isAutoStashEnabled())
        )
            try {
                await this.stashDeciderData(t, e);
            } catch (e) {
                h.nx.error("decider: auto-stash failed", e);
            }
        let n = (0, d.Ly)(t, e, a.default.getId(), this.gameId ?? void 0);
        h.nx.info("ranked clips:", n);
        let i = null;
        try {
            i = this.createAutoMontage(t, e);
        } catch (e) {
            h.nx.error("decider: auto-montage creation failed", e);
        }
        let r = n.selected;
        if (null != i && r.length > 2) {
            let e = i,
                t = new Map(
                    r.map((t) => [
                        t,
                        (function (e, t) {
                            let { startMs: n, endMs: i } = (0, d.tA)(e.clip),
                                r = 0;
                            for (let a of t.resolved) {
                                if (a.clip.id !== e.clip.id) continue;
                                let t = (0, _.lQ)(a.clip),
                                    s = t + a.videoStartMs;
                                r += Math.max(0, Math.min(i, t + a.videoEndMs) - Math.max(n, s));
                            }
                            return r;
                        })(t, e),
                    ]),
                ),
                n = r.reduce((e, n) => ((t.get(n) ?? 0) > (t.get(e) ?? 0) ? n : e)),
                a = t.get(n) ?? 0,
                s = a > 0 ? n : r.reduce((e, t) => (t.score < e.score ? t : e));
            ((r = r.filter((e) => e !== s)),
                h.nx.info(
                    a > 0
                        ? `decider: auto-montage replaces the selected clip it already covers most (id=${s.clip.id}, score=${s.score}, overlapMs=${a})`
                        : `decider: auto-montage replaces worst selected clip (id=${s.clip.id}, score=${s.score})`,
                ));
        }
        let s = new Set(
            r.map((e) => {
                let { clip: t } = e;
                return t.id;
            }),
        );
        await Promise.all(
            r.map(async (e) => {
                let { clip: t, score: n, audioEvents: i } = e;
                try {
                    await (0, c.K7)(t, n, this, i);
                } catch (e) {
                    h.nx.error("decider: failed to promote clip candidate", e);
                }
            }),
        );
        let o = Promise.resolve();
        if (null != i)
            try {
                let e = this.buildMontagePlaceholderClip(i, t);
                o = this.startAutoMontageRender(i, e);
            } catch (e) {
                h.nx.error("decider: failed to start the auto-montage render", e);
            }
        let u = t.filter((e) => !s.has(e.id));
        async function E() {
            await Promise.all(
                u.map(async (e) => {
                    try {
                        await (0, c.oH)(e, !1);
                    } catch (e) {
                        h.nx.error("decider: failed to delete unpromoted clip candidate", e);
                    }
                }),
            );
        }
        o.finally(E);
    }
    async stashDeciderData(e, t) {
        let n = {
                decisionSignals: t,
                clipCandidates: [...e],
                localUserId: a.default.getId(),
                gameId: this.gameId ?? void 0,
            },
            r = i.A.clips.debugStashClipDeciderData;
        if (null == r) return;
        let s = this.buildStashName();
        (await r(n, s), h.nx.info(`stashDeciderData: stashed ${e.length} candidates to ${s}`));
    }
    buildStashName() {
        let e = r.A.getGame(this.gameId)?.name,
            t = null != e ? (0, o.A)(e).slice(0, 40) : "";
        return "" !== t ? `${this.id}_${t}` : this.id;
    }
    createAutoMontage(e, t) {
        if (!s.A.getConfig({ location: "ClipsSession#createAutoMontage" }).enableAutomontage) return null;
        if (null == i.A.clips.renderMontageRecipe)
            return (
                h.nx.warn("decider: auto-montage unavailable (host is missing renderMontageRecipe) \u2014 skipping"),
                null
            );
        let n = {
                clipCandidates: e,
                decisionSignals: t,
                localUserId: a.default.getId(),
                gameId: this.gameId ?? void 0,
            },
            r = (0, u.HB)(n);
        return null == r
            ? (h.nx.info("decider: no auto-montage could be built for this session"), null)
            : (h.nx.info(
                  `decider: auto-montage built \u{2014} type=${r.type} sections=${r.resolved.length} skipped=${r.skipped.length} durationMs=${r.durationMs}`,
              ),
              r);
    }
    buildMontagePlaceholderClip(e, t) {
        let n = (0, A.A)("auto", h.nQ.CLIP, [], void 0, this.id),
            a = new Set(e.resolved.map((e) => e.clip.id)),
            s = new Set(n.users);
        for (let e of t) if (a.has(e.id)) for (let t of e.users) s.add(t);
        let o = r.A.getGame(this.gameId)?.name,
            d = i.A.fileManager.join(l.Ay.getSettings().storageLocation, `${e.type}_${n.id}.mp4`);
        return {
            ...n,
            filepath: d,
            type: h.nQ.CLIP,
            applicationName: o ?? n.applicationName,
            applicationId: this.gameId ?? n.applicationId,
            users: Array.from(s),
            length: e.durationMs,
            syncTimestamp: void 0,
            pending: !0,
        };
    }
    resolveClipPath = (e) => {
        let t = l.Ay.getClipById(e.id) ?? this.getCandidate(e.id);
        if (null == t) throw Error(`auto-montage: source clip ${e.id} is no longer in the clips store`);
        return t.filepath;
    };
    startAutoMontageRender(e, t) {
        let n = i.A.clips.renderMontageRecipe;
        return null == n
            ? (h.nx.warn(
                  "decider: auto-montage render unavailable (host is missing renderMontageRecipe) \u2014 skipping",
              ),
              Promise.resolve())
            : ((0, c.ef)(t),
              h.nx.info(
                  `decider: auto-montage render started - type=${e.type} output=${t.filepath} durationMs=${e.durationMs} sections=${e.resolved.length}`,
              ),
              (async () => {
                  try {
                      let i = await (0, E.y)(e, this.resolveClipPath);
                      (await n(JSON.stringify(i), t.filepath, (0, c.h5)(t)),
                          h.nx.info(`decider: auto-montage render succeeded \u{2014} ${t.filepath}`),
                          await (0, c.EM)(t, this));
                  } catch (e) {
                      (h.nx.error("decider: auto-montage failed", e), await (0, c.t9)(t));
                  }
              })());
    }
}
