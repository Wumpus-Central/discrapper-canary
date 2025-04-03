n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(692547),
    l = n(481060),
    o = n(596454),
    c = n(594174),
    d = n(74538),
    u = n(242291),
    m = n(830253),
    g = n(792165),
    p = n(603074),
    h = n(294206),
    f = n(388032),
    b = n(517058);
function N(e) {
    let { onSelect: t } = e,
        [n, a] = i.useState(!1),
        o = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        u = d.ZP.canUseCustomCallSounds(o);
    function m(e) {
        u && (a(!1), null == t || t(e));
    }
    return (0, r.jsx)(l.yRy, {
        shouldShow: n,
        position: 'left',
        onRequestClose: () => a(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(l.VqE, {
                children: (0, r.jsx)(p.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: m,
                    gridNotice: u ? null : (0, r.jsx)(g.o, {}),
                    analyticsSource: 'call sounds edit setting'
                })
            });
        },
        children: (e) => {
            var t, i;
            return (0, r.jsx)(
                h.hU,
                ((t = (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (i = i =
                    {
                        onClick: () => {
                            a(!n);
                        },
                        text: f.NW.string(f.t.uOe0Aw),
                        children: (0, r.jsx)(l.vdY, {
                            size: 'md',
                            color: 'currentColor',
                            className: b.secondaryIcon
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                t)
            );
        }
    });
}
function x(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, m.Z)(t, null),
        i =
            0 === (0, u.pI)()
                ? f.NW.string(f.t.OASXjo)
                : f.NW.formatToPlainString(f.t['/8fYOz'], {
                      emojiName: t.emojiName,
                      soundName: t.name
                  });
    return (0, r.jsx)(h.hU, {
        onClick: n,
        text: i,
        children: (0, r.jsx)(l.gj8, {
            size: 'md',
            color: 'currentColor',
            className: b.secondaryIconActive
        })
    });
}
function _(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        s = null != t,
        c = null == t ? void 0 : t.emojiId,
        d = null == t ? void 0 : t.emojiName,
        u = s && (null != d || null != c);
    return (0, r.jsxs)('div', {
        className: b.soundButtonSettingContainer,
        children: [
            (0, r.jsxs)('div', {
                className: b.container,
                children: [
                    u &&
                        (0, r.jsx)(o.Z, {
                            emojiId: c,
                            emojiName: d,
                            className: b.emoji
                        }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        className: b.soundText,
                        children:
                            null == t
                                ? f.NW.string(f.t.PoWNfX)
                                : n
                                  ? f.NW.format(f.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: (e) =>
                                            (0, r.jsx)(l.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'header-secondary',
                                                tag: 'span',
                                                children: e
                                            })
                                    })
                                  : t.name
                    }),
                    s
                        ? (0, r.jsx)(x, { sound: t })
                        : (0, r.jsx)(l.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: b.secondaryIconDisabled
                          })
                ]
            }),
            (0, r.jsxs)('div', {
                className: b.container,
                children: [
                    (0, r.jsx)(N, { onSelect: i }),
                    s &&
                        !n &&
                        (0, r.jsx)(h.hU, {
                            onClick: () => i(null),
                            text: f.NW.string(f.t.jmtcGB),
                            children: (0, r.jsx)(l.XHJ, {
                                size: 'md',
                                color: a.Z.unsafe_rawColors.RED_400.css,
                                className: b.secondaryIcon
                            })
                        })
                ]
            })
        ]
    });
}
