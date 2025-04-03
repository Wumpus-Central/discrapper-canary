n.d(t, {
    C: () => j,
    h: () => _
}),
    n(47120),
    n(411104);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(913527),
    s = n.n(l),
    c = n(481060),
    d = n(239091),
    u = n(598077),
    m = n(768581),
    p = n(693546),
    f = n(246364),
    x = n(388032),
    h = n(766879);
function b(e) {
    let { icon: t, onClick: n, submitting: a, disabled: i } = e;
    return (0, r.jsx)(c.P3F, {
        className: o()(h.actionIconContainer, { [h.disabled]: i || a }),
        onClick: n,
        children: a
            ? (0, r.jsx)(c.bbz, {
                  className: h.icon,
                  dotRadius: 2,
                  themed: !0
              })
            : (0, r.jsx)(t, {
                  className: h.icon,
                  size: 'xxs',
                  color: 'currentColor'
              })
    });
}
function j(e) {
    let { applicationStatus: t, guild: i, guildJoinRequest: l, className: j, onClick: _, atMaxMemberCapacity: g } = e,
        [v, C] = a.useState(null),
        { user: y, createdAt: N } = l;
    if (null == y) throw Error('Missing user on this guild join request!');
    let T = a.useMemo(() => new u.Z(y), [y]),
        I = m.ZP.getUserAvatarURL(T),
        w = t === f.wB.SUBMITTED,
        O = a.useCallback(
            async (e, t) => {
                let { guildId: n, userId: r } = e;
                if (null == v) {
                    C(t);
                    try {
                        await p.Z.updateGuildJoinRequest(n, r, l.joinRequestId, t);
                    } catch (e) {
                        (0, c.showToast)((0, c.createToast)(x.NW.string(x.t.R0RpRU), c.ToastType.FAILURE)), C(null);
                    }
                }
            },
            [v, l.joinRequestId]
        ),
        P = async () => {
            await O(l, f.wB.APPROVED);
        },
        R = async () => {
            await O(l, f.wB.REJECTED);
        };
    return (0, r.jsxs)(c.P3F, {
        className: o()(h.container, j),
        onClick: _,
        children: [
            (0, r.jsx)(c.qEK, {
                src: I,
                size: c.EFr.SIZE_40,
                'aria-label': y.username,
                className: h.__invalid_spacer
            }),
            (0, r.jsxs)('div', {
                className: h.userDetails,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: y.username
                    }),
                    (0, r.jsx)(c.Text, {
                        className: h.createdAt,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: s()(N).format('lll')
                    })
                ]
            }),
            w &&
                !g &&
                (0, r.jsx)(b, {
                    icon: c.dz2,
                    onClick: P,
                    submitting: v === f.wB.APPROVED,
                    disabled: null != v && v !== f.wB.APPROVED
                }),
            w &&
                (0, r.jsx)(b, {
                    icon: c.Dio,
                    onClick: R,
                    submitting: v === f.wB.REJECTED,
                    disabled: null != v && v !== f.wB.REJECTED
                }),
            (0, r.jsx)(c.P3F, {
                className: o()(h.overflowMenuContainer, { [h.disabled]: null != v }),
                onClick: (e) => {
                    (0, d.jW)(
                        e,
                        async () => {
                            let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                            return (t) => {
                                var n, a;
                                return (0, r.jsx)(
                                    e,
                                    ((n = (function (e) {
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
                                    })({}, t)),
                                    (a = a =
                                        {
                                            guild: i,
                                            user: T
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(a)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                                          }),
                                    n)
                                );
                            };
                        },
                        {
                            position: 'bottom',
                            align: 'right'
                        }
                    );
                },
                children: (0, r.jsx)(c.xhG, {
                    size: 'custom',
                    color: 'currentColor',
                    className: h.icon,
                    width: 18
                })
            })
        ]
    });
}
function _() {
    let e = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
        t = ''.concat(Math.floor(25 * Math.random()) + 50, 'px');
    return (0, r.jsxs)('div', {
        className: h.placeholder,
        children: [
            (0, r.jsx)('div', { className: h.placeholderAvatar }),
            (0, r.jsxs)('div', {
                className: h.userDetails,
                children: [
                    (0, r.jsx)('div', {
                        className: h.placeholderUsername,
                        style: { maxWidth: e }
                    }),
                    (0, r.jsx)('div', {
                        className: h.placeholderCreatedAt,
                        style: { maxWidth: t }
                    })
                ]
            })
        ]
    });
}
