n.d(e, { default: () => h });
var r = n(255367),
    i = n(73800),
    o = n(990547),
    l = n(481060),
    c = n(194359),
    s = n(819557),
    a = n(138201),
    d = n(626135),
    u = n(63063),
    f = n(5192),
    O = n(478923),
    m = n(858380),
    j = n(981631),
    p = n(388032),
    x = n(111627);
function g(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r);
            });
    }
    return t;
}
function b(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function I() {
    return (0, r.jsxs)(s.z, {
        children: [
            (0, r.jsx)(s.q, {
                title: p.intl.string(p.t.ruhGkp),
                description: p.intl.string(p.t['/FWKKC']),
                icon: l.owK
            }),
            (0, r.jsx)(s.q, {
                title: p.intl.string(p.t.N9v3en),
                description: p.intl.string(p.t.ddpuJi),
                icon: l.owK
            }),
            (0, r.jsx)(s.q, {
                title: p.intl.string(p.t['4ycGEx']),
                description: p.intl.string(p.t['5yfN+v']),
                icon: l.d3s
            })
        ]
    });
}
function h(t) {
    var { user: e, guildId: n, channelId: s, onIgnore: h, onBlock: E, location: y = 'ContextMenu' } = t,
        N = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                i = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                    return i;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (r = 0; r < o.length; r++) (n = o[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
            }
            return i;
        })(t, ['user', 'guildId', 'channelId', 'onIgnore', 'onBlock', 'location']);
    return (
        i.useLayoutEffect(
            () => () => {
                d.default.track(j.rMx.USER_REMEDIATION_ACTION, {
                    action: m.l.DISMISS_IGNORE,
                    location: y
                });
            },
            [y]
        ),
        (0, r.jsx)(
            l.ConfirmModal,
            b(
                g(
                    {
                        confirmText: p.intl.string(p.t.ytCpKi),
                        cancelText: p.intl.string(p.t['ETE/oK']),
                        onConfirm: () => {
                            null == h || h(), c.Z.ignoreUser(e.id, y, null != s ? s : void 0), d.default.track(j.rMx.IGNORE_USER_CONFIRMED);
                        },
                        onCancel: () => {
                            d.default.track(j.rMx.USER_REMEDIATION_ACTION, {
                                action: m.l.CANCEL_IGNORE,
                                location: y
                            });
                        },
                        impression: { impressionName: o.ImpressionNames.IGNORE_USER_CONFIRMATION },
                        confirmButtonColor: l.zxk.Colors.BRAND
                    },
                    N
                ),
                {
                    children: (0, r.jsxs)('div', {
                        className: x.container,
                        children: [
                            (0, r.jsxs)('div', {
                                className: x.confirmationHeader,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: x.iconContainer,
                                        children: [
                                            (0, r.jsx)(l.qEK, {
                                                size: l.EFr.SIZE_56,
                                                src: e.getAvatarURL(void 0, 64),
                                                'aria-hidden': !0
                                            }),
                                            (0, r.jsx)('div', {
                                                className: x.icon,
                                                children: (0, r.jsx)(l.kZF, {})
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsx)(l.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: p.intl.format(p.t['WrQD/f'], { username: f.ZP.getName(n, s, e) })
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-secondary',
                                                children: p.intl.string(p.t.JKL1u7)
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, r.jsx)(I, {}),
                            (0, r.jsxs)('div', {
                                className: x.otherOptions,
                                children: [
                                    (0, r.jsx)(a.rT, {
                                        title: p.intl.string(p.t['1v01go']),
                                        children: (0, r.jsx)(a.ZP, {
                                            title: p.intl.string(p.t.bwxY39),
                                            description: p.intl.string(p.t.NTnf1d),
                                            titleVariant: 'text-md/medium',
                                            descriptionVariant: 'text-xs/medium',
                                            buttonText: p.intl.string(p.t.QdfUHB),
                                            buttonColor: l.Ttl.PRIMARY,
                                            onButtonPress: () => {
                                                d.default.track(j.rMx.USER_REMEDIATION_ACTION, {
                                                    action: m.l.GOTO_BLOCK,
                                                    location: y
                                                }),
                                                    (0, l.pTH)(),
                                                    (0, l.h7j)((t) =>
                                                        (0, r.jsx)(
                                                            O.default,
                                                            b(g({}, t), {
                                                                user: e,
                                                                guildId: n,
                                                                channelId: s,
                                                                onBlock: E,
                                                                onIgnore: h,
                                                                location: y
                                                            })
                                                        )
                                                    );
                                            }
                                        })
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-sm/medium',
                                        className: x.featureGuide,
                                        children: p.intl.format(p.t.Hjvqr6, { articleLink: u.Z.getArticleURL(j.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                                    })
                                ]
                            })
                        ]
                    })
                }
            )
        )
    );
}
