"use strict";
n.d(t, { Ay: () => N, LF: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(417597),
    o = n(990078),
    c = n(939249),
    u = n(983851),
    d = n(565645),
    h = n(864145),
    m = n(704591),
    p = n(470020),
    f = n(105713),
    g = n(586583),
    _ = n(209932),
    x = n(807348),
    A = n(69217),
    C = n(253932),
    E = n(734057),
    I = n(985018),
    v = n(720417);
function y(e) {
    let { playSound: t } = e;
    return (0, i.jsxs)(c.D, {
        title: "Risky Click",
        tag: "span",
        onClick: t,
        className: v.Ls,
        children: [
            (0, i.jsx)(u.H, { size: "md", color: "currentColor", className: v.uA }),
            (0, i.jsx)("span", { children: "Unknown" }),
        ],
    });
}
function S(e) {
    let { soundId: t } = e,
        n = (0, a.bG)([_.A], () => _.A.getSoundById(t)),
        l = (0, m.tj)({ location: "SoundboardMentionInline" }),
        { isPlaying: s, playSound: r } = (0, g.A)(n);
    return l
        ? null == n
            ? (0, i.jsx)(y, {})
            : (0, i.jsx)(b, { className: v.wg, isPlaying: s, playSound: r, sound: n })
        : null;
}
function b(e) {
    let { className: t, sound: n, playSound: l, isPlaying: s } = e,
        a = n?.emojiId != null || n?.emojiName != null,
        o = I.intl.formatToPlainString(I.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, h.X)({ location: "SoundboardMentionInline" })
        ? (0, i.jsxs)(c.D, {
              "aria-label": o,
              tag: "span",
              onClick: l,
              className: r()(v.Ls, v.oR, { [v.he]: !0 === s }, t),
              children: [
                  a && (0, i.jsx)(d.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: v.JS }),
                  (0, i.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let N = function (e) {
    let { channelId: t, messageId: n, soundId: s, messageSounds: r, jumbo: c = !1 } = e,
        u = C.hH.useSetting(),
        d = (0, a.bG)([_.A], () => _.A.getSoundById(s), [s]),
        m = l.useMemo(() => (0, p.A)(t, n, s, r) ?? d, [t, n, s, r, d]),
        I = (0, a.bG)([E.A], () => E.A.getChannel(t)),
        S = (0, h.X)({ location: "SoundboardMention" }),
        N = l.useRef(null),
        { isPlaying: T, playSound: j } = (0, g.A)(m, I),
        R = l.useCallback(async () => {
            (await j()) && N.current?.addAnimation();
        }, [j]);
    return S
        ? null == m
            ? (0, i.jsx)(y, { playSound: R })
            : c && !u
              ? (0, i.jsx)(
                    A.Ay,
                    {
                        containerClassName: v.Ti,
                        className: v.UX,
                        sound: m,
                        channel: I,
                        onSelectItem: R,
                        isPlayingSoundOverride: T,
                        isSoundmoji: !0,
                        buttonOverlay: x.If.SOUNDMOJI,
                        tooltipClassName: v.YL,
                        tooltipContentClassName: v.R3,
                        tooltipOverride: (0, i.jsx)(f.WE, { sound: m }),
                        soundmojiVisualEffectRef: N,
                    },
                    `${m.soundId}`,
                )
              : (0, i.jsx)(o.m, {
                    "aria-label": m.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, i.jsx)(f.WE, { sound: m }),
                    position: "top",
                    delay: 500,
                    children: (0, i.jsx)("span", { children: (0, i.jsx)(b, { sound: m, playSound: R, isPlaying: T }) }),
                })
        : null;
};
