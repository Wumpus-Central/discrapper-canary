n.d(t, {
    C: () => b,
    h: () => g
}),
    n(47120),
    n(411104);
var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(913527),
    s = n.n(o),
    c = n(481060),
    d = n(239091),
    u = n(598077),
    m = n(768581),
    _ = n(693546),
    x = n(246364),
    f = n(388032),
    h = n(372819);
function p(e) {
    let { icon: t, onClick: n, submitting: i, disabled: r } = e;
    return (0, a.jsx)(c.P3F, {
        className: l()(h.actionIconContainer, { [h.disabled]: r || i }),
        onClick: n,
        children: i
            ? (0, a.jsx)(c.bbz, {
                  className: h.icon,
                  dotRadius: 2,
                  themed: !0
              })
            : (0, a.jsx)(t, {
                  className: h.icon,
                  size: 'xxs',
                  color: 'currentColor'
              })
    });
}
function b(e) {
    let { applicationStatus: t, guild: r, guildJoinRequest: o, className: b, onClick: g, atMaxMemberCapacity: C } = e,
        [v, j] = i.useState(null),
        { user: I, createdAt: T } = o;
    if (null == I) throw Error('Missing user on this guild join request!');
    let R = i.useMemo(() => new u.Z(I), [I]),
        E = m.ZP.getUserAvatarURL(R),
        P = t === x.wB.SUBMITTED,
        w = i.useCallback(
            async (e, t) => {
                let { guildId: n, userId: a } = e;
                if (null == v) {
                    j(t);
                    try {
                        await _.Z.updateGuildJoinRequest(n, a, o.joinRequestId, t);
                    } catch (e) {
                        (0, c.showToast)((0, c.createToast)(f.intl.string(f.t.R0RpRU), c.ToastType.FAILURE)), j(null);
                    }
                }
            },
            [v, o.joinRequestId]
        ),
        N = async () => {
            await w(o, x.wB.APPROVED);
        },
        S = async () => {
            await w(o, x.wB.REJECTED);
        };
    return (0, a.jsxs)(c.P3F, {
        className: l()(h.container, b),
        onClick: g,
        children: [
            (0, a.jsx)(c.qEK, {
                src: E,
                size: c.EFr.SIZE_40,
                'aria-label': I.username,
                className: h.__invalid_spacer
            }),
            (0, a.jsxs)('div', {
                className: h.userDetails,
                children: [
                    (0, a.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: I.username
                    }),
                    (0, a.jsx)(c.Text, {
                        className: h.createdAt,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: s()(T).format('lll')
                    })
                ]
            }),
            P &&
                !C &&
                (0, a.jsx)(p, {
                    icon: c.dz2,
                    onClick: N,
                    submitting: v === x.wB.APPROVED,
                    disabled: null != v && v !== x.wB.APPROVED
                }),
            P &&
                (0, a.jsx)(p, {
                    icon: c.Dio,
                    onClick: S,
                    submitting: v === x.wB.REJECTED,
                    disabled: null != v && v !== x.wB.REJECTED
                }),
            (0, a.jsx)(c.P3F, {
                className: l()(h.overflowMenuContainer, { [h.disabled]: null != v }),
                onClick: (e) => {
                    (0, d.jW)(
                        e,
                        async () => {
                            let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    ...t,
                                    guild: r,
                                    user: R
                                });
                        },
                        {
                            position: 'bottom',
                            align: 'right'
                        }
                    );
                },
                children: (0, a.jsx)(c.xhG, {
                    size: 'custom',
                    color: 'currentColor',
                    className: h.icon,
                    width: 18
                })
            })
        ]
    });
}
function g() {
    let e = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
        t = ''.concat(Math.floor(25 * Math.random()) + 50, 'px');
    return (0, a.jsxs)('div', {
        className: h.placeholder,
        children: [
            (0, a.jsx)('div', { className: l()(h.placeholderAvatar) }),
            (0, a.jsxs)('div', {
                className: h.userDetails,
                children: [
                    (0, a.jsx)('div', {
                        className: h.placeholderUsername,
                        style: { maxWidth: e }
                    }),
                    (0, a.jsx)('div', {
                        className: h.placeholderCreatedAt,
                        style: { maxWidth: t }
                    })
                ]
            })
        ]
    });
}
