l.d(t, {
    E: () => x,
}),
    l(896048),
    l(638769);
var n = l(627968),
    a = l(64700),
    r = l(735438),
    i = l.n(r),
    s = l(311907),
    o = l(118356),
    u = l(397927),
    c = l(287809),
    d = l(690521),
    m = l(562153),
    h = l(372684),
    p = l(429364),
    v = l(731854),
    f = l(845397);

function b(e, t, l) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = l),
        e
    );
}
let g = new o.Vy("ClipsSpeakingOverlay");
class j {
    getSoundboardKey(e, t) {
        return "".concat(e, ":").concat(t);
    }
    processSpeakingEvent(e) {
        !this.userSpeakingStates.has(e.userId) &&
            0 === e.speakingFlags &&
            (this.userSpeakingStates.set(e.userId, !0),
            this.timeline.has(0) || this.timeline.set(0, this.getCurrentSnapshot())),
            this.userSpeakingStates.set(e.userId, (e.speakingFlags & v.ME.VOICE) === v.ME.VOICE);
    }
    processSoundboardEvent(e) {
        var t;
        let l = this.getSoundboardKey(e.soundboardId, e.userId),
            n = null != (t = this.soundboardPlayCounts.get(l)) ? t : 0;
        if (
            (0 === n &&
                !e.playing &&
                (this.soundboardPlayCounts.set(l, 1),
                this.activeSoundboards.set(l, {
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
            this.soundboardPlayCounts.set(l, n + 1),
                this.activeSoundboards.set(l, {
                    soundboardId: e.soundboardId,
                    name: e.name,
                    userId: e.userId,
                    emojiId: e.emojiId,
                    emojiName: e.emojiName,
                    emojiAnimated: e.emojiAnimated,
                });
        else {
            let e = Math.max(0, n - 1);
            this.soundboardPlayCounts.set(l, e), 0 === e && this.activeSoundboards.delete(l);
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
            let r = Math.floor((l + n) / 2);
            t[r] <= e ? ((a = r), (l = r + 1)) : (n = r - 1);
        }
        if (-1 === a)
            return {
                speakingUserIds: [],
                activeSoundboards: [],
            };
        let r = this.timeline.get(t[a]);
        return null != r
            ? r
            : {
                  speakingUserIds: [],
                  activeSoundboards: [],
              };
    }
    constructor(e) {
        for (const t of (b(this, "timeline", void 0),
        b(this, "userSpeakingStates", void 0),
        b(this, "activeSoundboards", void 0),
        b(this, "soundboardPlayCounts", void 0),
        (this.timeline = new Map()),
        (this.userSpeakingStates = new Map()),
        (this.activeSoundboards = new Map()),
        (this.soundboardPlayCounts = new Map()),
        [...e].sort((e, t) => e.timestamp - t.timestamp)))
            t.signal.type === h.Gy.SPEAKING
                ? this.processSpeakingEvent(t.signal)
                : t.signal.type === h.Gy.SOUNDBOARD && this.processSoundboardEvent(t.signal),
                this.timeline.set(t.timestamp, this.getCurrentSnapshot());
    }
}

function x(e) {
    var t, l;
    let { clip: r, soundboardAudioEnabled: o, voiceAudioEnabled: h } = e,
        { useCurrentTime: v, subscribe: b } = (0, p.T)(),
        x = v(),
        y = null != (t = null == (l = r.decision) ? void 0 : l.timestamp) ? t : 0,
        [C] = a.useState(() => {
            var e;
            return new j(null != (e = r.timeline) ? e : []);
        }),
        k = y - r.length,
        N = a.useCallback(
            (e) => {
                let t = 1e3 * i().round(e, 3),
                    l = C.getEventsAtTimestamp(k + t);
                return {
                    speakingUserIds: i().sortBy(l.speakingUserIds),
                    activeSoundboards: i().sortBy(l.activeSoundboards, "soundboardId"),
                };
            },
            [C, k],
        ),
        [E, S] = a.useState(() => N(x)),
        w = (0, s.cf)([c.default], () => i().pick(c.default.getUsers(), r.users));
    return (a.useEffect(
        () =>
            b({
                onTimeUpdate: (e) => {
                    let t = N(e);
                    S((e) =>
                        i().isEqual(t, e)
                            ? e
                            : (g.info("Event snapshot changed", {
                                  newEventSnapshot: t,
                                  currentEventSnapshot: e,
                              }),
                              t),
                    );
                },
            }),
        [b, N],
    ),
    null == y)
        ? null
        : (0, n.jsxs)("div", {
              className: f.h8,
              children: [
                  h &&
                      E.speakingUserIds.map((e) => {
                          let t = w[e];
                          if (null == t) return null;
                          let l = (0, m.mG)(r.guildId, r.channelId, t);
                          return (0, n.jsxs)(
                              "div",
                              {
                                  className: f.q7,
                                  children: [
                                      (0, n.jsx)(u.euF, {
                                          "aria-label": l,
                                          size: u._3J.SIZE_24,
                                          src: t.getAvatarURL(null, 24, !1),
                                      }),
                                      (0, n.jsx)(u.Text, {
                                          className: f.Xh,
                                          color: "always-white",
                                          variant: "text-sm/normal",
                                          children: l,
                                      }),
                                  ],
                              },
                              e,
                          );
                      }),
                  o &&
                      E.activeSoundboards.map((e) => {
                          var t, l;
                          let a = w[e.userId];
                          return null == a
                              ? null
                              : (0, n.jsxs)(
                                    "div",
                                    {
                                        className: f.q7,
                                        children: [
                                            (0, n.jsx)(u.euF, {
                                                "aria-label": a.username,
                                                size: u._3J.SIZE_24,
                                                src: a.getAvatarURL(null, 24, !1),
                                            }),
                                            null != e.emojiId || null != e.emojiName
                                                ? (0, n.jsx)("img", {
                                                      alt: e.name,
                                                      className: f.g8,
                                                      src: (0, d.Ez)(
                                                          {
                                                              id: e.emojiId,
                                                              name: null != (t = e.emojiName) ? t : "",
                                                              animated: null != (l = e.emojiAnimated) && l,
                                                          },
                                                          24,
                                                      ),
                                                  })
                                                : null,
                                            (0, n.jsx)(u.Text, {
                                                className: f.Xh,
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
