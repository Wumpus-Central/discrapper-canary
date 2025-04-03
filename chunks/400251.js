n.d(t, {
    Z: () => T,
    m: () => S
}),
    n(47120),
    n(266796);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(749210),
    d = n(686546),
    p = n(951394),
    h = n(565138),
    f = n(372769),
    m = n(134432),
    g = n(769654),
    b = n(601964),
    _ = n(430824),
    C = n(768581),
    y = n(683818),
    x = n(16853),
    v = n(981631),
    j = n(388032),
    O = n(901593),
    E = n(883760);
function N(e) {
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
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let S = (e) => {
    let { onClick: t } = e;
    return (0, r.jsxs)(s.P3F, {
        onClick: t,
        className: O.addEntryCard,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: E
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                className: O.addServerText,
                children: j.NW.string(j.t.H9jxS0)
            })
        ]
    });
};
function Z(e) {
    let { entry: t } = e,
        [l, a] = i.useState(!1),
        c = i.useRef(null),
        { canEdit: u } = (0, y.Z)(t);
    return (0, r.jsx)('div', {
        className: o()(O.actionButtonsContainer, { [O.forceButtonsShow]: l }),
        children: (0, r.jsxs)(p.ZP, {
            children: [
                u
                    ? (0, r.jsx)(s.ua7, {
                          text: j.NW.string(j.t.XnuOvL),
                          hideOnClick: !0,
                          children: (e) => {
                              var { onClick: i } = e,
                                  l = P(e, ['onClick']);
                              return (0, r.jsx)(
                                  p.zx,
                                  I(N({}, l), {
                                      onClick: () => {
                                          null == i || i(),
                                              (0, s.ZDy)(async () => {
                                                  let { default: e } = await n.e('34191').then(n.bind(n, 303647));
                                                  return (n) => (0, r.jsx)(e, I(N({}, n), { entry: t }));
                                              });
                                      },
                                      'aria-label': j.NW.string(j.t.XnuOvL),
                                      children: (0, r.jsx)(s.vdY, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: O.overflowIcon
                                      })
                                  })
                              );
                          }
                      })
                    : null,
                (0, r.jsx)(x.Z, {
                    targetElementRef: c,
                    onRequestOpen: () => a(!0),
                    onRequestClose: () => a(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        var { onClick: t } = e,
                            n = P(e, ['onClick']);
                        return (0, r.jsx)(s.ua7, {
                            text: j.NW.string(j.t.UKOtz8),
                            hideOnClick: !0,
                            children: (e) => {
                                var { onClick: i } = e,
                                    l = P(e, ['onClick']);
                                return (0, r.jsx)(
                                    p.zx,
                                    I(N({}, n, l), {
                                        ref: c,
                                        onClick: (e) => {
                                            null == i || i(), t(e);
                                        },
                                        'aria-label': j.NW.string(j.t.UKOtz8),
                                        children: (0, r.jsx)(s.xhG, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: O.overflowIcon
                                        })
                                    })
                                );
                            }
                        });
                    }
                })
            ]
        })
    });
}
let T = (e) => {
    var t;
    let { entry: l } = e,
        [o, p] = i.useState(!1),
        y = null != (0, a.e7)([_.Z], () => _.Z.getGuild(l.guildId)),
        x = async () => {
            p(!0);
            try {
                y ? (0, g.X)(l.guildId) : await u.Z.joinGuild(l.guildId, { source: v.vtS.DIRECTORY_ENTRY });
            } finally {
                p(!1);
            }
        },
        E = C.ZP.getGuildSplashURL({
            id: l.guildId,
            splash: l.splash,
            size: 300 * (0, m.x_)()
        }),
        P =
            null !=
            (t = C.ZP.getGuildIconURL({
                id: l.guildId,
                icon: l.icon,
                size: 40
            }))
                ? t
                : void 0,
        S = j.NW.string(j.t.VJlc0d);
    return (
        y && (S = j.NW.string(j.t.cqWE2d)),
        (0, r.jsxs)('div', {
            className: O.card,
            onContextMenu: (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 643560));
                    return (t) => (0, r.jsx)(e, I(N({}, t), { entry: l }));
                });
            },
            children: [
                (0, r.jsxs)('div', {
                    className: O.cardHeader,
                    children: [
                        (0, r.jsx)('div', {
                            className: O.splash,
                            children:
                                null != E &&
                                (0, r.jsx)('img', {
                                    src: E,
                                    alt: '',
                                    className: O.splashImage
                                })
                        }),
                        (0, r.jsx)('div', {
                            className: O.guildIcon,
                            children: (0, r.jsx)(d.ZP, {
                                mask: d.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, r.jsx)('div', {
                                    className: O.iconMask,
                                    children: (0, r.jsx)(h.Z, {
                                        className: O.icon,
                                        iconSrc: P,
                                        guild: new b.ZP(l),
                                        size: h.Z.Sizes.MEDIUM,
                                        active: !0
                                    })
                                })
                            })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: O.guildInfo,
                    children: [
                        (0, r.jsxs)('div', {
                            className: O.title,
                            children: [
                                (0, r.jsx)(f.Z, {
                                    className: O.guildBadge,
                                    guild: l,
                                    tooltipColor: s.ua7.Colors.PRIMARY
                                }),
                                (0, r.jsx)(s.Text, {
                                    className: O.guildName,
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: l.name
                                })
                            ]
                        }),
                        (0, r.jsx)(s.Text, {
                            className: O.description,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: l.description
                        }),
                        (0, r.jsxs)('div', {
                            className: O.memberInfo,
                            children: [
                                null != l.approximatePresenceCount &&
                                    (0, r.jsxs)('div', {
                                        className: O.memberCount,
                                        children: [
                                            (0, r.jsx)('div', { className: O.dotOnline }),
                                            (0, r.jsx)(s.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: j.NW.format(j.t['LC+S+v'], { membersOnline: l.approximatePresenceCount })
                                            })
                                        ]
                                    }),
                                null != l.approximateMemberCount &&
                                    (0, r.jsxs)('div', {
                                        className: O.memberCount,
                                        children: [
                                            (0, r.jsx)('div', { className: O.dotOffline }),
                                            (0, r.jsx)(s.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: j.NW.format(j.t.zRl6XV, { count: l.approximateMemberCount })
                                            })
                                        ]
                                    })
                            ]
                        }),
                        (0, r.jsx)(s.zxk, {
                            submitting: o,
                            className: O.joinButton,
                            color: y ? s.zxk.Colors.PRIMARY : s.zxk.Colors.GREEN,
                            onClick: x,
                            children: S
                        })
                    ]
                }),
                (0, r.jsx)(Z, { entry: l })
            ]
        })
    );
};
