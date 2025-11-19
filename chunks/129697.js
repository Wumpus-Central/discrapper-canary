n.d(t, { i: () => x }), n(388685), n(642613);
var l = n(54381),
    a = n(473749),
    i = n(392711),
    r = n.n(i),
    s = n(442837),
    o = n(579092),
    u = n(481060),
    c = n(594174),
    d = n(176354),
    m = n(5192),
    h = n(894694),
    p = n(115559),
    f = n(65154),
    v = n(549650);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let b = new o.Yd("ClipsSpeakingOverlay");
class j {
    getSoundboardKey(e, t) {
        return "".concat(e, ":").concat(t);
    }
    processSpeakingEvent(e) {
        !this.userSpeakingStates.has(e.userId) &&
            0 === e.speakingFlags &&
            (this.userSpeakingStates.set(e.userId, !0),
            this.timeline.has(0) || this.timeline.set(0, this.getCurrentSnapshot())),
            this.userSpeakingStates.set(e.userId, (e.speakingFlags & f.Dg.VOICE) === f.Dg.VOICE);
    }
    processSoundboardEvent(e) {
        var t;
        let n = this.getSoundboardKey(e.soundboardId, e.userId),
            l = null != (t = this.soundboardPlayCounts.get(n)) ? t : 0;
        if (
            (0 === l &&
                !e.playing &&
                (this.soundboardPlayCounts.set(n, 1),
                this.activeSoundboards.set(n, {
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
            this.soundboardPlayCounts.set(n, l + 1),
                this.activeSoundboards.set(n, {
                    soundboardId: e.soundboardId,
                    name: e.name,
                    userId: e.userId,
                    emojiId: e.emojiId,
                    emojiName: e.emojiName,
                    emojiAnimated: e.emojiAnimated,
                });
        else {
            let e = Math.max(0, l - 1);
            this.soundboardPlayCounts.set(n, e), 0 === e && this.activeSoundboards.delete(n);
        }
    }
    getCurrentSnapshot() {
        return {
            speakingUserIds: Array.from(this.userSpeakingStates.entries())
                .filter((e) => {
                    let [t, n] = e;
                    return n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return t;
                }),
            activeSoundboards: Array.from(this.activeSoundboards.values()),
        };
    }
    getEventsAtTimestamp(e) {
        let t = Array.from(this.timeline.keys()).sort((e, t) => e - t),
            n = 0,
            l = t.length - 1,
            a = -1;
        for (; n <= l; ) {
            let i = Math.floor((n + l) / 2);
            t[i] <= e ? ((a = i), (n = i + 1)) : (l = i - 1);
        }
        if (-1 === a)
            return {
                speakingUserIds: [],
                activeSoundboards: [],
            };
        let i = this.timeline.get(t[a]);
        return null != i
            ? i
            : {
                  speakingUserIds: [],
                  activeSoundboards: [],
              };
    }
    constructor(e) {
        for (let t of (g(this, "timeline", void 0),
        g(this, "userSpeakingStates", void 0),
        g(this, "activeSoundboards", void 0),
        g(this, "soundboardPlayCounts", void 0),
        (this.timeline = new Map()),
        (this.userSpeakingStates = new Map()),
        (this.activeSoundboards = new Map()),
        (this.soundboardPlayCounts = new Map()),
        [...e].sort((e, t) => e.timestamp - t.timestamp)))
            t.signal.type === h.Bs.SPEAKING
                ? this.processSpeakingEvent(t.signal)
                : t.signal.type === h.Bs.SOUNDBOARD && this.processSoundboardEvent(t.signal),
                this.timeline.set(t.timestamp, this.getCurrentSnapshot());
    }
}
function x(e) {
    var t, n;
    let { clip: i, soundboardAudioEnabled: o, voiceAudioEnabled: h } = e,
        { useCurrentTime: f, subscribe: g } = (0, p.D)(),
        x = f(),
        y = null != (n = null == (t = i.decision) ? void 0 : t.timestamp) ? n : 0,
        [C] = a.useState(() => {
            var e;
            return new j(null != (e = i.timeline) ? e : []);
        }),
        k = y - i.length,
        N = a.useCallback(
            (e) => {
                let t = 1000 * r().round(e, 3),
                    n = C.getEventsAtTimestamp(k + t);
                return {
                    speakingUserIds: r().sortBy(n.speakingUserIds),
                    activeSoundboards: r().sortBy(n.activeSoundboards, "soundboardId"),
                };
            },
            [C, k],
        ),
        [E, w] = a.useState(() => N(x)),
        S = (0, s.cj)([c.default], () => r().pick(c.default.getUsers(), i.users));
    return (a.useEffect(
        () =>
            g({
                onTimeUpdate: (e) => {
                    let t = N(e);
                    w((e) =>
                        r().isEqual(t, e)
                            ? e
                            : (b.info("Event snapshot changed", {
                                  newEventSnapshot: t,
                                  currentEventSnapshot: e,
                              }),
                              t),
                    );
                },
            }),
        [g, N],
    ),
    null == y)
        ? null
        : (0, l.jsxs)("div", {
              className: v.voiceUserContainer,
              children: [
                  h &&
                      E.speakingUserIds.map((e) => {
                          let t = S[e];
                          if (null == t) return null;
                          let n = (0, m.oY)(i.guildId, i.channelId, t);
                          return (0, l.jsxs)(
                              "div",
                              {
                                  className: v.voiceUser,
                                  children: [
                                      (0, l.jsx)(u.qEK, {
                                          "aria-label": n,
                                          size: u.EFr.SIZE_24,
                                          src: t.getAvatarURL(null, 24, !1),
                                      }),
                                      (0, l.jsx)(u.Text, {
                                          className: v.username,
                                          color: "always-white",
                                          variant: "text-sm/normal",
                                          children: n,
                                      }),
                                  ],
                              },
                              e,
                          );
                      }),
                  o &&
                      E.activeSoundboards.map((e) => {
                          var t, n;
                          let a = S[e.userId];
                          return null == a
                              ? null
                              : (0, l.jsxs)(
                                    "div",
                                    {
                                        className: v.voiceUser,
                                        children: [
                                            (0, l.jsx)(u.qEK, {
                                                "aria-label": a.username,
                                                size: u.EFr.SIZE_24,
                                                src: a.getAvatarURL(null, 24, !1),
                                            }),
                                            null != e.emojiId || null != e.emojiName
                                                ? (0, l.jsx)("img", {
                                                      alt: e.name,
                                                      className: v.soundboardEmoji,
                                                      src: (0, d.qc)(
                                                          {
                                                              id: e.emojiId,
                                                              name: null != (t = e.emojiName) ? t : "",
                                                              animated: null != (n = e.emojiAnimated) && n,
                                                          },
                                                          24,
                                                      ),
                                                  })
                                                : null,
                                            (0, l.jsx)(u.Text, {
                                                className: v.username,
                                                color: "always-white",
                                                variant: "text-sm/normal",
                                                children: e.name,
                                            }),
                                        ],
                                    },
                                    "".concat(e.soundboardId, ":").concat(e.userId),
                                );
                      }),
              ],
          });
}
