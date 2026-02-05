l.d(t, { E: () => b });
var a = l(627968),
    n = l(64700),
    s = l(735438),
    i = l.n(s),
    r = l(311907),
    o = l(118356),
    u = l(397927),
    c = l(287809),
    d = l(690521),
    m = l(562153),
    h = l(372684),
    p = l(429364),
    f = l(731854),
    g = l(845397);
let v = new o.Vy("ClipsSpeakingOverlay");
class x {
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
            t.signal.type === h.Gy.SPEAKING
                ? this.processSpeakingEvent(t.signal)
                : t.signal.type === h.Gy.SOUNDBOARD && this.processSoundboardEvent(t.signal),
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
            this.userSpeakingStates.set(e.userId, (e.speakingFlags & f.ME.VOICE) === f.ME.VOICE);
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
            a = t.length - 1,
            n = -1;
        for (; l <= a; ) {
            let s = Math.floor((l + a) / 2);
            t[s] <= e ? ((n = s), (l = s + 1)) : (a = s - 1);
        }
        return -1 === n
            ? { speakingUserIds: [], activeSoundboards: [] }
            : (this.timeline.get(t[n]) ?? { speakingUserIds: [], activeSoundboards: [] });
    }
}
function b(e) {
    let { clip: t, soundboardAudioEnabled: l, voiceAudioEnabled: s } = e,
        { useCurrentTime: o, subscribe: h } = (0, p.T)(),
        f = o(),
        b = t.decision?.timestamp ?? 0,
        [j] = n.useState(() => new x(t.timeline ?? [])),
        C = b - t.length,
        N = n.useCallback(
            (e) => {
                let t = 1e3 * i().round(e, 3),
                    l = j.getEventsAtTimestamp(C + t);
                return {
                    speakingUserIds: i().sortBy(l.speakingUserIds),
                    activeSoundboards: i().sortBy(l.activeSoundboards, "soundboardId"),
                };
            },
            [j, C],
        ),
        [k, y] = n.useState(() => N(f)),
        E = (0, r.cf)([c.default], () => i().pick(c.default.getUsers(), t.users));
    return (n.useEffect(
        () =>
            h({
                onTimeUpdate: (e) => {
                    let t = N(e);
                    y((e) =>
                        i().isEqual(t, e)
                            ? e
                            : (v.info("Event snapshot changed", { newEventSnapshot: t, currentEventSnapshot: e }), t),
                    );
                },
            }),
        [h, N],
    ),
    null == b)
        ? null
        : (0, a.jsxs)("div", {
              className: g.h8,
              children: [
                  s &&
                      k.speakingUserIds.map((e) => {
                          let l = E[e];
                          if (null == l) return null;
                          let n = (0, m.mG)(t.guildId, t.channelId, l);
                          return (0, a.jsxs)(
                              "div",
                              {
                                  className: g.q7,
                                  children: [
                                      (0, a.jsx)(u.euF, {
                                          "aria-label": n,
                                          size: u._3J.SIZE_24,
                                          src: l.getAvatarURL(null, 24, !1),
                                      }),
                                      (0, a.jsx)(u.Text, {
                                          className: g.Xh,
                                          color: "always-white",
                                          variant: "text-sm/normal",
                                          children: n,
                                      }),
                                  ],
                              },
                              e,
                          );
                      }),
                  l &&
                      k.activeSoundboards.map((e) => {
                          let t = E[e.userId];
                          return null == t
                              ? null
                              : (0, a.jsxs)(
                                    "div",
                                    {
                                        className: g.q7,
                                        children: [
                                            (0, a.jsx)(u.euF, {
                                                "aria-label": t.username,
                                                size: u._3J.SIZE_24,
                                                src: t.getAvatarURL(null, 24, !1),
                                            }),
                                            null != e.emojiId || null != e.emojiName
                                                ? (0, a.jsx)("img", {
                                                      alt: e.name,
                                                      className: g.g8,
                                                      src: (0, d.Ez)(
                                                          {
                                                              id: e.emojiId,
                                                              name: e.emojiName ?? "",
                                                              animated: e.emojiAnimated ?? !1,
                                                          },
                                                          24,
                                                      ),
                                                  })
                                                : null,
                                            (0, a.jsx)(u.Text, {
                                                className: g.Xh,
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
