"use strict";
n.d(t, { Ay: () => O, LF: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(417597),
    l = n(990078),
    u = n(939249),
    c = n(983851),
    d = n(565645),
    _ = n(864145),
    f = n(704591),
    p = n(470020),
    h = n(105713),
    E = n(586583),
    m = n(209932),
    g = n(807348),
    A = n(69217),
    I = n(253932),
    T = n(734057),
    S = n(985018),
    y = n(720417);
function N(e) {
    let { playSound: t } = e;
    return (0, r.jsxs)(u.D, {
        title: "Risky Click",
        tag: "span",
        onClick: t,
        className: y.Ls,
        children: [
            (0, r.jsx)(c.H, { size: "md", color: "currentColor", className: y.uA }),
            (0, r.jsx)("span", { children: "Unknown" }),
        ],
    });
}
function v(e) {
    let { soundId: t } = e,
        n = (0, o.bG)([m.A], () => m.A.getSoundById(t)),
        i = (0, f.tj)({ location: "SoundboardMentionInline" }),
        { isPlaying: s, playSound: a } = (0, E.A)(n);
    return i
        ? null == n
            ? (0, r.jsx)(N, {})
            : (0, r.jsx)(C, { className: y.wg, isPlaying: s, playSound: a, sound: n })
        : null;
}
function C(e) {
    let { className: t, sound: n, playSound: i, isPlaying: s } = e,
        o = n?.emojiId != null || n?.emojiName != null,
        l = S.intl.formatToPlainString(S.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, _.X)({ location: "SoundboardMentionInline" })
        ? (0, r.jsxs)(u.D, {
              "aria-label": l,
              tag: "span",
              onClick: i,
              className: a()(y.Ls, y.oR, { [y.he]: !0 === s }, t),
              children: [
                  o && (0, r.jsx)(d.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: y.JS }),
                  (0, r.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let O = function (e) {
    let { channelId: t, messageId: n, soundId: s, messageSounds: a, jumbo: u = !1 } = e,
        c = I.hH.useSetting(),
        d = (0, o.bG)([m.A], () => m.A.getSoundById(s), [s]),
        f = i.useMemo(() => (0, p.A)(t, n, s, a) ?? d, [t, n, s, a, d]),
        S = (0, o.bG)([T.A], () => T.A.getChannel(t)),
        v = (0, _.X)({ location: "SoundboardMention" }),
        O = i.useRef(null),
        { isPlaying: R, playSound: b } = (0, E.A)(f, S),
        D = i.useCallback(async () => {
            (await b()) && O.current?.addAnimation();
        }, [b]);
    return v
        ? null == f
            ? (0, r.jsx)(N, { playSound: D })
            : u && !c
              ? (0, r.jsx)(
                    A.Ay,
                    {
                        containerClassName: y.Ti,
                        className: y.UX,
                        sound: f,
                        channel: S,
                        onSelectItem: D,
                        isPlayingSoundOverride: R,
                        isSoundmoji: !0,
                        buttonOverlay: g.If.SOUNDMOJI,
                        tooltipClassName: y.YL,
                        tooltipContentClassName: y.R3,
                        tooltipOverride: (0, r.jsx)(h.WE, { sound: f }),
                        soundmojiVisualEffectRef: O,
                    },
                    `${f.soundId}`,
                )
              : (0, r.jsx)(l.m, {
                    "aria-label": f.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, r.jsx)(h.WE, { sound: f }),
                    position: "top",
                    delay: 500,
                    children: (0, r.jsx)("span", { children: (0, r.jsx)(C, { sound: f, playSound: D, isPlaying: R }) }),
                })
        : null;
};
