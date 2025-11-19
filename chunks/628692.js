n.d(t, {
    ZP: () => A,
    ku: () => T,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(399606),
    l = n(28664),
    c = n(481060),
    u = n(596454),
    d = n(722932),
    f = n(125900),
    _ = n(801606),
    p = n(409700),
    h = n(321889),
    m = n(763296),
    g = n(697426),
    E = n(294206),
    b = n(695346),
    y = n(592125),
    O = n(388032),
    v = n(766106);
function I(e) {
    let { playSound: t } = e;
    return (0, r.jsxs)(c.P3F, {
        title: "Risky Click",
        tag: "span",
        onClick: t,
        className: v.inlineContainer,
        children: [
            (0, r.jsx)(c.gj8, {
                size: "md",
                color: "currentColor",
                className: v.unknownSound,
            }),
            (0, r.jsx)("span", { children: "Unknown" }),
        ],
    });
}
function T(e) {
    let { soundId: t } = e,
        n = (0, s.e7)([m.Z], () => m.Z.getSoundById(t)),
        i = (0, f.V2)({ location: "SoundboardMentionInline" }),
        { isPlaying: a, playSound: o } = (0, h.Z)(n);
    return i
        ? null == n
            ? (0, r.jsx)(I, {})
            : (0, r.jsx)(S, {
                  className: v.inlineTextArea,
                  isPlaying: a,
                  playSound: o,
                  sound: n,
              })
        : null;
}
function S(e) {
    let { className: t, sound: n, playSound: i, isPlaying: a } = e,
        s = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        l = O.intl.formatToPlainString(O.t.tuMUJ2, {
            emojiName: null == n ? void 0 : n.emojiName,
            soundName: null == n ? void 0 : n.name,
        });
    return (0, d.X0)({ location: "SoundboardMentionInline" })
        ? (0, r.jsxs)(c.P3F, {
              "aria-label": l,
              tag: "span",
              onClick: i,
              className: o()(v.inlineContainer, v.inlineButton, { [v.playing]: !0 === a }, t),
              children: [
                  s &&
                      (0, r.jsx)(u.Z, {
                          emojiId: null == n ? void 0 : n.emojiId,
                          emojiName: null == n ? void 0 : n.emojiName,
                          className: v.soundmojiEmoji,
                      }),
                  (0, r.jsx)("span", { children: " ".concat(null == n ? void 0 : n.name, " ") }),
              ],
          })
        : null;
}
let A = function (e) {
    let { channelId: t, messageId: n, soundId: a, messageSounds: o, jumbo: c = !1 } = e,
        u = b.jU.useSetting(),
        f = (0, s.e7)([m.Z], () => m.Z.getSoundById(a), [a]),
        O = i.useMemo(() => {
            var e;
            return null != (e = (0, _.Z)(t, n, a, o)) ? e : f;
        }, [t, n, a, o, f]),
        T = (0, s.e7)([y.Z], () => y.Z.getChannel(t)),
        A = (0, d.X0)({ location: "SoundboardMention" }),
        C = i.useRef(null),
        { isPlaying: N, playSound: R } = (0, h.Z)(O, T),
        P = i.useCallback(async () => {
            if (await R()) {
                var e;
                null == (e = C.current) || e.addAnimation();
            }
        }, [R]);
    return A
        ? null == O
            ? (0, r.jsx)(I, { playSound: P })
            : c && !u
              ? (0, r.jsx)(
                    E.ZP,
                    {
                        containerClassName: v.jumboContainer,
                        className: v.jumboButton,
                        sound: O,
                        channel: T,
                        onSelectItem: P,
                        isPlayingSoundOverride: N,
                        isSoundmoji: !0,
                        buttonOverlay: g.Pb.SOUNDMOJI,
                        tooltipClassName: v.tooltip,
                        tooltipContentClassName: v.tooltipContainer,
                        tooltipOverride: (0, r.jsx)(p.Dp, { sound: O }),
                        soundmojiVisualEffectRef: C,
                    },
                    "".concat(O.soundId),
                )
              : (0, r.jsx)(l.u, {
                    "aria-label": O.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, r.jsx)(p.Dp, { sound: O }),
                    position: "top",
                    delay: 500,
                    children: (0, r.jsx)("span", {
                        children: (0, r.jsx)(S, {
                            sound: O,
                            playSound: P,
                            isPlaying: N,
                        }),
                    }),
                })
        : null;
};
