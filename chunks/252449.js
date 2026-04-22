l.d(t, { E: () => C });
var n = l(627968),
    a = l(64700),
    i = l(735438),
    s = l.n(i),
    r = l(311907),
    d = l(118356),
    o = l(97808),
    c = l(778712),
    u = l(834730),
    m = l(287809),
    h = l(690521),
    p = l(562153),
    f = l(372684),
    v = l(429364),
    g = l(731854),
    x = l(178420);
let j = new d.Vy("ClipsSpeakingOverlay");
class b {
    timeline;
    userSpeakingStates;
    activeSoundboards;
    soundboardPlayCounts;
    constructor(e) {
        for (const t of ((this.timeline = new Map()),
        (this.userSpeakingStates = new Map()),
        (this.activeSoundboards = new Map()),
        (this.soundboardPlayCounts = new Map()),
        [...e].sort((e, t) => e.timestamp - t.timestamp)))
            t.signal.type === f.Gy.SPEAKING
                ? this.processSpeakingEvent(t.signal)
                : t.signal.type === f.Gy.SOUNDBOARD && this.processSoundboardEvent(t.signal),
                this.timeline.set(t.timestamp, this.getCurrentSnapshot());
    }
    getSoundboardKey(e, t) {
        return `${e}:${t}`;
    }
    processSpeakingEvent(e) {
        !this.userSpeakingStates.has(e.userId) &&
            0 === e.speakingFlags &&
            (this.userSpeakingStates.set(e.userId, !0),
            this.timeline.has(0) || this.timeline.set(0, this.getCurrentSnapshot())),
            this.userSpeakingStates.set(e.userId, (e.speakingFlags & g.ME.VOICE) === g.ME.VOICE);
    }
    processSoundboardEvent(e) {
        let t = this.getSoundboardKey(e.soundboardId, e.userId),
            l = this.soundboardPlayCounts.get(t) ?? 0;
        if (
            (0 === l &&
                !e.playing &&
                (this.soundboardPlayCounts.set(t, 1),
                this.activeSoundboards.set(t, {
                    soundboardId: e.soundboardId,
                    name: e.name,
                    userId: e.userId,
                    emojiId: e.emojiId,
                    emojiName: e.emojiName,
                    emojiAnimated: e.emojiAnimated,
                }),
                this.timeline.has(0) || this.timeline.set(0, this.getCurrentSnapshot())),
            e.playing)
        )
            this.soundboardPlayCounts.set(t, l + 1),
                this.activeSoundboards.set(t, {
                    soundboardId: e.soundboardId,
                    name: e.name,
                    userId: e.userId,
                    emojiId: e.emojiId,
                    emojiName: e.emojiName,
                    emojiAnimated: e.emojiAnimated,
                });
        else {
            let e = Math.max(0, l - 1);
            this.soundboardPlayCounts.set(t, e), 0 === e && this.activeSoundboards.delete(t);
        }
    }
    getCurrentSnapshot() {
        return {
            speakingUserIds: Array.from(this.userSpeakingStates.entries())
                .filter((e) => {
                    let [t, l] = e;
                    return l;
                })
                .map((e) => {
                    let [t, l] = e;
                    return t;
                }),
            activeSoundboards: Array.from(this.activeSoundboards.values()),
        };
    }
    getEventsAtTimestamp(e) {
        let t = Array.from(this.timeline.keys()).sort((e, t) => e - t),
            l = 0,
            n = t.length - 1,
            a = -1;
        for (; l <= n; ) {
            let i = Math.floor((l + n) / 2);
            t[i] <= e ? ((a = i), (l = i + 1)) : (n = i - 1);
        }
        return -1 === a
            ? { speakingUserIds: [], activeSoundboards: [] }
            : (this.timeline.get(t[a]) ?? { speakingUserIds: [], activeSoundboards: [] });
    }
}
function C(e) {
    let { clip: t, soundboardAudioEnabled: l, voiceAudioEnabled: i } = e,
        { useCurrentTime: d, subscribe: f } = (0, v.T)(),
        g = d(),
        C = t.decision?.timestamp ?? 0,
        [y] = a.useState(() => new b(t.timeline ?? [])),
        A = C - t.length,
        N = a.useCallback(
            (e) => {
                let t = 1e3 * s().round(e, 3),
                    l = y.getEventsAtTimestamp(A + t);
                return {
                    speakingUserIds: s().sortBy(l.speakingUserIds),
                    activeSoundboards: s().sortBy(l.activeSoundboards, "soundboardId"),
                };
            },
            [y, A],
        ),
        [E, w] = a.useState(() => N(g)),
        k = (0, r.cf)([m.default], () => s().pick(m.default.getUsers(), t.users));
    return (a.useEffect(
        () =>
            f({
                onTimeUpdate: (e) => {
                    let t = N(e);
                    w((e) =>
                        s().isEqual(t, e)
                            ? e
                            : (j.info("Event snapshot changed", { newEventSnapshot: t, currentEventSnapshot: e }), t),
                    );
                },
            }),
        [f, N],
    ),
    null == C)
        ? null
        : (0, n.jsxs)("div", {
              className: x.h8,
              children: [
                  i &&
                      E.speakingUserIds.map((e) => {
                          let l = k[e];
                          if (null == l) return null;
                          let a = (0, p.mG)(t.guildId, t.channelId, l);
                          return (0, n.jsxs)(
                              "div",
                              {
                                  className: x.q7,
                                  children: [
                                      (0, n.jsx)(o.eu, {
                                          "aria-label": a,
                                          size: c._3.SIZE_24,
                                          src: l.getAvatarURL(null, 24, !1),
                                      }),
                                      (0, n.jsx)(u.E, {
                                          className: x.Xh,
                                          color: "always-white",
                                          variant: "text-sm/normal",
                                          children: a,
                                      }),
                                  ],
                              },
                              e,
                          );
                      }),
                  l &&
                      E.activeSoundboards.map((e) => {
                          let t = k[e.userId];
                          return null == t
                              ? null
                              : (0, n.jsxs)(
                                    "div",
                                    {
                                        className: x.q7,
                                        children: [
                                            (0, n.jsx)(o.eu, {
                                                "aria-label": t.username,
                                                size: c._3.SIZE_24,
                                                src: t.getAvatarURL(null, 24, !1),
                                            }),
                                            null != e.emojiId || null != e.emojiName
                                                ? (0, n.jsx)("img", {
                                                      alt: e.name,
                                                      className: x.g8,
                                                      src: (0, h.Ez)(
                                                          {
                                                              id: e.emojiId,
                                                              name: e.emojiName ?? "",
                                                              animated: e.emojiAnimated ?? !1,
                                                          },
                                                          24,
                                                      ),
                                                  })
                                                : null,
                                            (0, n.jsx)(u.E, {
                                                className: x.Xh,
                                                color: "always-white",
                                                variant: "text-sm/normal",
                                                children: e.name,
                                            }),
                                        ],
                                    },
                                    `${e.soundboardId}:${e.userId}`,
                                );
                      }),
              ],
          });
}
