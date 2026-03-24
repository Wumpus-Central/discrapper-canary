"use strict";
n.d(t, { Ay: () => C, LF: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(807348),
    g = n(69217),
    A = n(253932),
    I = n(734057),
    T = n(985018),
    S = n(543218);
function y(e) {
    let { playSound: t } = e;
    return (0, r.jsxs)(u.DUT, {
        title: "Risky Click",
        tag: "span",
        onClick: t,
        className: S.Ls,
        children: [
            (0, r.jsx)(u.HKD, { size: "md", color: "currentColor", className: S.uA }),
            (0, r.jsx)("span", { children: "Unknown" }),
        ],
    });
}
function v(e) {
    let { soundId: t } = e,
        n = (0, o.bG)([m.A], () => m.A.getSoundById(t)),
        i = (0, _.tj)({ location: "SoundboardMentionInline" }),
        { isPlaying: s, playSound: a } = (0, h.A)(n);
    return i
        ? null == n
            ? (0, r.jsx)(y, {})
            : (0, r.jsx)(N, { className: S.wg, isPlaying: s, playSound: a, sound: n })
        : null;
}
function N(e) {
    let { className: t, sound: n, playSound: i, isPlaying: s } = e,
        o = n?.emojiId != null || n?.emojiName != null,
        l = T.intl.formatToPlainString(T.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, d.X)({ location: "SoundboardMentionInline" })
        ? (0, r.jsxs)(u.DUT, {
              "aria-label": l,
              tag: "span",
              onClick: i,
              className: a()(S.Ls, S.oR, { [S.he]: !0 === s }, t),
              children: [
                  o && (0, r.jsx)(c.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: S.JS }),
                  (0, r.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let C = function (e) {
    let { channelId: t, messageId: n, soundId: s, messageSounds: a, jumbo: u = !1 } = e,
        c = A.hH.useSetting(),
        _ = (0, o.bG)([m.A], () => m.A.getSoundById(s), [s]),
        T = i.useMemo(() => (0, f.A)(t, n, s, a) ?? _, [t, n, s, a, _]),
        v = (0, o.bG)([I.A], () => I.A.getChannel(t)),
        C = (0, d.X)({ location: "SoundboardMention" }),
        R = i.useRef(null),
        { isPlaying: O, playSound: b } = (0, h.A)(T, v),
        D = i.useCallback(async () => {
            (await b()) && R.current?.addAnimation();
        }, [b]);
    return C
        ? null == T
            ? (0, r.jsx)(y, { playSound: D })
            : u && !c
              ? (0, r.jsx)(
                    g.Ay,
                    {
                        containerClassName: S.Ti,
                        className: S.UX,
                        sound: T,
                        channel: v,
                        onSelectItem: D,
                        isPlayingSoundOverride: O,
                        isSoundmoji: !0,
                        buttonOverlay: E.If.SOUNDMOJI,
                        tooltipClassName: S.YL,
                        tooltipContentClassName: S.R3,
                        tooltipOverride: (0, r.jsx)(p.WE, { sound: T }),
                        soundmojiVisualEffectRef: R,
                    },
                    `${T.soundId}`,
                )
              : (0, r.jsx)(l.m, {
                    "aria-label": T.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, r.jsx)(p.WE, { sound: T }),
                    position: "top",
                    delay: 500,
                    children: (0, r.jsx)("span", { children: (0, r.jsx)(N, { sound: T, playSound: D, isPlaying: O }) }),
                })
        : null;
};
