"use strict";
n.d(t, { Ay: () => b, LF: () => v });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(417597),
    l = n(990078),
    u = n(397927),
    c = n(565645),
    d = n(864145),
    _ = n(704591),
    f = n(470020),
    p = n(105713),
    h = n(586583),
    m = n(209932),
    g = n(807348),
    E = n(69217),
    A = n(253932),
    I = n(734057),
    T = n(985018),
    y = n(543218);
function S(e) {
    let { playSound: t } = e;
    return (0, r.jsxs)(u.DUT, {
        title: "Risky Click",
        tag: "span",
        onClick: t,
        className: y.Ls,
        children: [
            (0, r.jsx)(u.HKD, { size: "md", color: "currentColor", className: y.uA }),
            (0, r.jsx)("span", { children: "Unknown" }),
        ],
    });
}
function v(e) {
    let { soundId: t } = e,
        n = (0, o.bG)([m.A], () => m.A.getSoundById(t)),
        i = (0, _.tj)({ location: "SoundboardMentionInline" }),
        { isPlaying: a, playSound: s } = (0, h.A)(n);
    return i
        ? null == n
            ? (0, r.jsx)(S, {})
            : (0, r.jsx)(C, { className: y.wg, isPlaying: a, playSound: s, sound: n })
        : null;
}
function C(e) {
    let { className: t, sound: n, playSound: i, isPlaying: a } = e,
        o = n?.emojiId != null || n?.emojiName != null,
        l = T.intl.formatToPlainString(T.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, d.X9)({ location: "SoundboardMentionInline" })
        ? (0, r.jsxs)(u.DUT, {
              "aria-label": l,
              tag: "span",
              onClick: i,
              className: s()(y.Ls, y.oR, { [y.he]: !0 === a }, t),
              children: [
                  o && (0, r.jsx)(c.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: y.JS }),
                  (0, r.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let b = function (e) {
    let { channelId: t, messageId: n, soundId: a, messageSounds: s, jumbo: u = !1 } = e,
        c = A.hH.useSetting(),
        _ = (0, o.bG)([m.A], () => m.A.getSoundById(a), [a]),
        T = i.useMemo(() => (0, f.A)(t, n, a, s) ?? _, [t, n, a, s, _]),
        v = (0, o.bG)([I.A], () => I.A.getChannel(t)),
        b = (0, d.X9)({ location: "SoundboardMention" }),
        N = i.useRef(null),
        { isPlaying: R, playSound: O } = (0, h.A)(T, v),
        D = i.useCallback(async () => {
            (await O()) && N.current?.addAnimation();
        }, [O]);
    return b
        ? null == T
            ? (0, r.jsx)(S, { playSound: D })
            : u && !c
              ? (0, r.jsx)(
                    E.Ay,
                    {
                        containerClassName: y.Ti,
                        className: y.UX,
                        sound: T,
                        channel: v,
                        onSelectItem: D,
                        isPlayingSoundOverride: R,
                        isSoundmoji: !0,
                        buttonOverlay: g.If.SOUNDMOJI,
                        tooltipClassName: y.YL,
                        tooltipContentClassName: y.R3,
                        tooltipOverride: (0, r.jsx)(p.WE, { sound: T }),
                        soundmojiVisualEffectRef: N,
                    },
                    `${T.soundId}`,
                )
              : (0, r.jsx)(l.m, {
                    "aria-label": T.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, r.jsx)(p.WE, { sound: T }),
                    position: "top",
                    delay: 500,
                    children: (0, r.jsx)("span", { children: (0, r.jsx)(C, { sound: T, playSound: D, isPlaying: R }) }),
                })
        : null;
};
