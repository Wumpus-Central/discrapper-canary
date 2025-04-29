n.d(t, { Z: () => E }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(692547),
    a = n(481060),
    o = n(596454),
    c = n(594174),
    d = n(74538),
    u = n(242291),
    m = n(830253),
    p = n(792165),
    g = n(603074),
    h = n(294206),
    f = n(388032),
    b = n(517058);
function _(e) {
    let { onSelect: t } = e,
        [n, l] = r.useState(!1),
        o = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        u = d.ZP.canUseCustomCallSounds(o);
    function m(e) {
        u && (l(!1), null == t || t(e));
    }
    return (0, i.jsx)(a.yRy, {
        shouldShow: n,
        position: 'left',
        onRequestClose: () => l(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(a.VqE, {
                children: (0, i.jsx)(g.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: m,
                    gridNotice: u ? null : (0, i.jsx)(p.o, {}),
                    analyticsSource: 'call sounds edit setting'
                })
            });
        },
        children: (e) => {
            var t, r;
            return (0, i.jsx)(
                h.hU,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, e)),
                (r = r =
                    {
                        onClick: () => {
                            l(!n);
                        },
                        text: f.intl.string(f.t.uOe0Aw),
                        children: (0, i.jsx)(a.vdY, {
                            size: 'md',
                            color: 'currentColor',
                            className: b.secondaryIcon
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                t)
            );
        }
    });
}
function x(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, m.Z)(t, null),
        r =
            0 === (0, u.pI)()
                ? f.intl.string(f.t.OASXjo)
                : f.intl.formatToPlainString(f.t['/8fYOz'], {
                      emojiName: t.emojiName,
                      soundName: t.name
                  });
    return (0, i.jsx)(h.hU, {
        onClick: n,
        text: r,
        children: (0, i.jsx)(a.gj8, {
            size: 'md',
            color: 'currentColor',
            className: b.secondaryIconActive
        })
    });
}
function E(e) {
    let { sound: t, isGlobal: n, onSelect: r } = e,
        s = null != t,
        c = null == t ? void 0 : t.emojiId,
        d = null == t ? void 0 : t.emojiName,
        u = s && (null != d || null != c);
    return (0, i.jsxs)('div', {
        className: b.soundButtonSettingContainer,
        children: [
            (0, i.jsxs)('div', {
                className: b.container,
                children: [
                    u &&
                        (0, i.jsx)(o.Z, {
                            emojiId: c,
                            emojiName: d,
                            className: b.emoji
                        }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        className: b.soundText,
                        children:
                            null == t
                                ? f.intl.string(f.t.PoWNfX)
                                : n
                                  ? f.intl.format(f.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: (e) =>
                                            (0, i.jsx)(a.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'header-secondary',
                                                tag: 'span',
                                                children: e
                                            })
                                    })
                                  : t.name
                    }),
                    s
                        ? (0, i.jsx)(x, { sound: t })
                        : (0, i.jsx)(a.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: b.secondaryIconDisabled
                          })
                ]
            }),
            (0, i.jsxs)('div', {
                className: b.container,
                children: [
                    (0, i.jsx)(_, { onSelect: r }),
                    s &&
                        !n &&
                        (0, i.jsx)(h.hU, {
                            onClick: () => r(null),
                            text: f.intl.string(f.t.jmtcGB),
                            children: (0, i.jsx)(a.XHJ, {
                                size: 'md',
                                color: l.Z.unsafe_rawColors.RED_400.css,
                                className: b.secondaryIcon
                            })
                        })
                ]
            })
        ]
    });
}
