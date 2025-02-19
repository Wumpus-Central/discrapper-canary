n.d(t, {
    ZP: () => R,
    ku: () => A
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(399606),
    l = n(481060),
    c = n(596454),
    u = n(722932),
    d = n(125900),
    f = n(801606),
    p = n(409700),
    _ = n(321889),
    h = n(763296),
    m = n(697426),
    g = n(409673),
    E = n(695346),
    v = n(592125),
    b = n(388032),
    y = n(55572);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let { playSound: t } = e;
    return (0, r.jsxs)(l.P3F, {
        title: 'Risky Click',
        tag: 'span',
        onClick: t,
        className: y.inlineContainer,
        children: [
            (0, r.jsx)(l.gj8, {
                size: 'md',
                color: 'currentColor',
                className: y.unknownSound
            }),
            (0, r.jsx)('span', { children: 'Unknown' })
        ]
    });
}
function A(e) {
    let { soundId: t } = e,
        n = (0, s.e7)([h.Z], () => h.Z.getSoundById(t)),
        i = (0, d.V2)({ location: 'SoundboardMentionInline' }),
        { isPlaying: o, playSound: a } = (0, _.Z)(n);
    return i
        ? null == n
            ? (0, r.jsx)(N, {})
            : (0, r.jsx)(C, {
                  className: y.inlineTextArea,
                  isPlaying: o,
                  playSound: a,
                  sound: n
              })
        : null;
}
function C(e) {
    let { className: t, sound: n, playSound: i, isPlaying: o } = e,
        s = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        d = b.NW.formatToPlainString(b.t.tuMUJy, {
            emojiName: null == n ? void 0 : n.emojiName,
            soundName: null == n ? void 0 : n.name
        });
    return (0, u.X0)({ location: 'SoundboardMentionInline' })
        ? (0, r.jsxs)(l.P3F, {
              'aria-label': d,
              tag: 'span',
              onClick: i,
              className: a()(y.inlineContainer, y.inlineButton, { [y.playing]: !0 === o }, t),
              children: [
                  s &&
                      (0, r.jsx)(c.Z, {
                          emojiId: null == n ? void 0 : n.emojiId,
                          emojiName: null == n ? void 0 : n.emojiName,
                          className: y.soundmojiEmoji
                      }),
                  (0, r.jsx)('span', { children: ' '.concat(null == n ? void 0 : n.name, ' ') })
              ]
          })
        : null;
}
let R = function (e) {
    let { channelId: t, messageId: n, soundId: o, messageSounds: a, jumbo: c = !1 } = e,
        d = E.jU.useSetting(),
        b = (0, s.e7)([h.Z], () => h.Z.getSoundById(o), [o]),
        O = i.useMemo(() => {
            var e;
            return null !== (e = (0, f.Z)(t, n, o, a)) && void 0 !== e ? e : b;
        }, [t, n, o, a, b]),
        I = (0, s.e7)([v.Z], () => v.Z.getChannel(t)),
        A = (0, u.X0)({ location: 'SoundboardMention' }),
        R = i.useRef(null),
        { isPlaying: P, playSound: w } = (0, _.Z)(O, I),
        D = i.useCallback(() => {
            if (w()) {
                var e;
                null === (e = R.current) || void 0 === e || e.addAnimation();
            }
        }, [w]);
    return A
        ? null == O
            ? (0, r.jsx)(N, { playSound: D })
            : c && !d
              ? (0, r.jsx)(
                    g.ZP,
                    {
                        containerClassName: y.jumboContainer,
                        className: y.jumboButton,
                        sound: O,
                        channel: I,
                        refreshEnabled: !0,
                        onSelectItem: D,
                        isPlayingSoundOverride: P,
                        isSoundmoji: !0,
                        buttonOverlay: m.Pb.SOUNDMOJI,
                        tooltipClassName: y.tooltip,
                        tooltipContentClassName: y.tooltipContainer,
                        tooltipOverride: (0, r.jsx)(p.Dp, { sound: O }),
                        soundmojiVisualEffectRef: R
                    },
                    ''.concat(O.soundId)
                )
              : (0, r.jsx)(l.ua7, {
                    'aria-label': O.name,
                    text: (0, r.jsx)(p.Dp, { sound: O }),
                    tooltipClassName: y.tooltip,
                    tooltipContentClassName: y.tooltipContainer,
                    position: 'top',
                    delay: 500,
                    children: (e) =>
                        (0, r.jsx)(
                            'span',
                            T(S({}, e), {
                                children: (0, r.jsx)(C, {
                                    sound: O,
                                    playSound: D,
                                    isPlaying: P
                                })
                            })
                        )
                })
        : null;
};
