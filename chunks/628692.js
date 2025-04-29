n.d(t, {
    ZP: () => R,
    ku: () => N
});
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(399606),
    l = n(481060),
    c = n(596454),
    u = n(722932),
    d = n(125900),
    f = n(801606),
    _ = n(409700),
    p = n(321889),
    h = n(763296),
    m = n(697426),
    g = n(294206),
    E = n(695346),
    b = n(592125),
    y = n(388032),
    O = n(71979);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let { playSound: t } = e;
    return (0, r.jsxs)(l.P3F, {
        title: 'Risky Click',
        tag: 'span',
        onClick: t,
        className: O.inlineContainer,
        children: [
            (0, r.jsx)(l.gj8, {
                size: 'md',
                color: 'currentColor',
                className: O.unknownSound
            }),
            (0, r.jsx)('span', { children: 'Unknown' })
        ]
    });
}
function N(e) {
    let { soundId: t } = e,
        n = (0, s.e7)([h.Z], () => h.Z.getSoundById(t)),
        i = (0, d.V2)({ location: 'SoundboardMentionInline' }),
        { isPlaying: o, playSound: a } = (0, p.Z)(n);
    return i
        ? null == n
            ? (0, r.jsx)(A, {})
            : (0, r.jsx)(C, {
                  className: O.inlineTextArea,
                  isPlaying: o,
                  playSound: a,
                  sound: n
              })
        : null;
}
function C(e) {
    let { className: t, sound: n, playSound: i, isPlaying: o } = e,
        s = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        d = y.intl.formatToPlainString(y.t.tuMUJy, {
            emojiName: null == n ? void 0 : n.emojiName,
            soundName: null == n ? void 0 : n.name
        });
    return (0, u.X0)({ location: 'SoundboardMentionInline' })
        ? (0, r.jsxs)(l.P3F, {
              'aria-label': d,
              tag: 'span',
              onClick: i,
              className: a()(O.inlineContainer, O.inlineButton, { [O.playing]: !0 === o }, t),
              children: [
                  s &&
                      (0, r.jsx)(c.Z, {
                          emojiId: null == n ? void 0 : n.emojiId,
                          emojiName: null == n ? void 0 : n.emojiName,
                          className: O.soundmojiEmoji
                      }),
                  (0, r.jsx)('span', { children: ' '.concat(null == n ? void 0 : n.name, ' ') })
              ]
          })
        : null;
}
let R = function (e) {
    let { channelId: t, messageId: n, soundId: o, messageSounds: a, jumbo: c = !1 } = e,
        d = E.jU.useSetting(),
        y = (0, s.e7)([h.Z], () => h.Z.getSoundById(o), [o]),
        v = i.useMemo(() => {
            var e;
            return null != (e = (0, f.Z)(t, n, o, a)) ? e : y;
        }, [t, n, o, a, y]),
        S = (0, s.e7)([b.Z], () => b.Z.getChannel(t)),
        N = (0, u.X0)({ location: 'SoundboardMention' }),
        R = i.useRef(null),
        { isPlaying: P, playSound: w } = (0, p.Z)(v, S),
        D = i.useCallback(async () => {
            if (await w()) {
                var e;
                null == (e = R.current) || e.addAnimation();
            }
        }, [w]);
    return N
        ? null == v
            ? (0, r.jsx)(A, { playSound: D })
            : c && !d
              ? (0, r.jsx)(
                    g.ZP,
                    {
                        containerClassName: O.jumboContainer,
                        className: O.jumboButton,
                        sound: v,
                        channel: S,
                        refreshEnabled: !0,
                        onSelectItem: D,
                        isPlayingSoundOverride: P,
                        isSoundmoji: !0,
                        buttonOverlay: m.Pb.SOUNDMOJI,
                        tooltipClassName: O.tooltip,
                        tooltipContentClassName: O.tooltipContainer,
                        tooltipOverride: (0, r.jsx)(_.Dp, { sound: v }),
                        soundmojiVisualEffectRef: R
                    },
                    ''.concat(v.soundId)
                )
              : (0, r.jsx)(l.ua7, {
                    'aria-label': v.name,
                    text: (0, r.jsx)(_.Dp, { sound: v }),
                    tooltipClassName: O.tooltip,
                    tooltipContentClassName: O.tooltipContainer,
                    position: 'top',
                    delay: 500,
                    children: (e) =>
                        (0, r.jsx)(
                            'span',
                            T(I({}, e), {
                                children: (0, r.jsx)(C, {
                                    sound: v,
                                    playSound: D,
                                    isPlaying: P
                                })
                            })
                        )
                })
        : null;
};
