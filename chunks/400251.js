(n.d(t, {
    Z: () => A,
    m: () => N
}),
    n(388685),
    n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(239091),
    d = n(749210),
    p = n(686546),
    h = n(951394),
    f = n(565138),
    m = n(372769),
    g = n(134432),
    b = n(769654),
    _ = n(430824),
    y = n(768581),
    C = n(411198),
    x = n(683818),
    v = n(16853),
    O = n(981631),
    j = n(388032),
    E = n(901593),
    S = n(883760);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
let N = (e) => {
    let { onClick: t } = e;
    return (0, r.jsxs)(c.P3F, {
        onClick: t,
        className: E.addEntryCard,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: S
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                className: E.addServerText,
                children: j.intl.string(j.t.H9jxS0)
            })
        ]
    });
};
function T(e) {
    let { entry: t } = e,
        [l, o] = i.useState(!1),
        s = i.useRef(null),
        { canEdit: u } = (0, x.Z)(t);
    return (0, r.jsx)('div', {
        className: a()(E.actionButtonsContainer, { [E.forceButtonsShow]: l }),
        children: (0, r.jsxs)(h.ZP, {
            children: [
                u
                    ? (0, r.jsx)(c.ua7, {
                          text: j.intl.string(j.t.XnuOvL),
                          hideOnClick: !0,
                          children: (e) => {
                              var { onClick: i } = e,
                                  l = Z(e, ['onClick']);
                              return (0, r.jsx)(
                                  h.zx,
                                  I(P({}, l), {
                                      onClick: () => {
                                          (null == i || i(),
                                              (0, c.ZDy)(async () => {
                                                  let { default: e } = await n.e('34191').then(n.bind(n, 303647));
                                                  return (n) => (0, r.jsx)(e, I(P({}, n), { entry: t }));
                                              }));
                                      },
                                      'aria-label': j.intl.string(j.t.XnuOvL),
                                      children: (0, r.jsx)(c.vdY, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: E.overflowIcon
                                      })
                                  })
                              );
                          }
                      })
                    : null,
                (0, r.jsx)(v.Z, {
                    targetElementRef: s,
                    onRequestOpen: () => o(!0),
                    onRequestClose: () => o(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        var { onClick: t } = e,
                            n = Z(e, ['onClick']);
                        return (0, r.jsx)(c.ua7, {
                            text: j.intl.string(j.t.UKOtz8),
                            hideOnClick: !0,
                            children: (e) => {
                                var { onClick: i } = e,
                                    l = Z(e, ['onClick']);
                                return (0, r.jsx)(
                                    h.zx,
                                    I(P({}, n, l), {
                                        ref: s,
                                        onClick: (e) => {
                                            (null == i || i(), t(e));
                                        },
                                        'aria-label': j.intl.string(j.t.UKOtz8),
                                        children: (0, r.jsx)(c.xhG, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: E.overflowIcon
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
let A = (e) => {
    var t;
    let { entry: l } = e,
        [a, h] = i.useState(!1),
        x = null != (0, o.e7)([_.Z], () => _.Z.getGuild(l.guildId)),
        v = async () => {
            h(!0);
            try {
                x ? (0, b.X)(l.guildId) : await d.Z.joinGuild(l.guildId, { source: O.vtS.DIRECTORY_ENTRY });
            } finally {
                h(!1);
            }
        },
        S = y.ZP.getGuildSplashURL({
            id: l.guildId,
            splash: l.splash,
            size: 300 * (0, g.x_)()
        }),
        Z =
            null !=
            (t = y.ZP.getGuildIconURL({
                id: l.guildId,
                icon: l.icon,
                size: 40
            }))
                ? t
                : void 0,
        N = j.intl.string(j.t.VJlc0d);
    return (
        x && (N = j.intl.string(j.t.cqWE2d)),
        (0, r.jsxs)('div', {
            className: E.card,
            onContextMenu: (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 643560));
                    return (t) => (0, r.jsx)(e, I(P({}, t), { entry: l }));
                });
            },
            children: [
                (0, r.jsxs)('div', {
                    className: E.cardHeader,
                    children: [
                        (0, r.jsx)('div', {
                            className: E.splash,
                            children:
                                null != S &&
                                (0, r.jsx)('img', {
                                    src: S,
                                    alt: '',
                                    className: E.splashImage
                                })
                        }),
                        (0, r.jsx)('div', {
                            className: E.guildIcon,
                            children: (0, r.jsx)(p.ZP, {
                                mask: p.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, r.jsx)('div', {
                                    className: E.iconMask,
                                    children: (0, r.jsx)(f.Z, {
                                        className: E.icon,
                                        iconSrc: Z,
                                        guild: (0, C.e)(l),
                                        size: f.Z.Sizes.MEDIUM,
                                        active: !0
                                    })
                                })
                            })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: E.guildInfo,
                    children: [
                        (0, r.jsxs)('div', {
                            className: E.title,
                            children: [
                                (0, r.jsx)(m.Z, {
                                    className: E.guildBadge,
                                    guild: l,
                                    tooltipColor: c.ua7.Colors.PRIMARY
                                }),
                                (0, r.jsx)(c.Text, {
                                    className: E.guildName,
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: l.name
                                })
                            ]
                        }),
                        (0, r.jsx)(c.Text, {
                            className: E.description,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: l.description
                        }),
                        (0, r.jsxs)('div', {
                            className: E.memberInfo,
                            children: [
                                null != l.approximatePresenceCount &&
                                    (0, r.jsxs)('div', {
                                        className: E.memberCount,
                                        children: [
                                            (0, r.jsx)('div', { className: E.dotOnline }),
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: j.intl.format(j.t['LC+S+v'], { membersOnline: l.approximatePresenceCount })
                                            })
                                        ]
                                    }),
                                null != l.approximateMemberCount &&
                                    (0, r.jsxs)('div', {
                                        className: E.memberCount,
                                        children: [
                                            (0, r.jsx)('div', { className: E.dotOffline }),
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: j.intl.format(j.t.zRl6XV, { count: l.approximateMemberCount })
                                            })
                                        ]
                                    })
                            ]
                        }),
                        (0, r.jsx)(s.zx, {
                            submitting: a,
                            className: E.joinButton,
                            color: x ? s.zx.Colors.PRIMARY : s.zx.Colors.GREEN,
                            onClick: v,
                            children: N
                        })
                    ]
                }),
                (0, r.jsx)(T, { entry: l })
            ]
        })
    );
};
