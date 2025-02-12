n.d(t, {
    C: () => C,
    h: () => j
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
    x = n(693546),
    h = n(246364),
    _ = n(388032),
    p = n(541775);
function f(e) {
    let { icon: t, onClick: n, submitting: i, disabled: r } = e;
    return (0, a.jsx)(c.P3F, {
        className: l()(p.actionIconContainer, { [p.disabled]: r || i }),
        onClick: n,
        children: i
            ? (0, a.jsx)(c.bbz, {
                  className: p.icon,
                  dotRadius: 2,
                  themed: !0
              })
            : (0, a.jsx)(t, {
                  className: p.icon,
                  size: 'xxs',
                  color: 'currentColor'
              })
    });
}
function C(e) {
    let { applicationStatus: t, guild: r, guildJoinRequest: o, className: C, onClick: j, atMaxMemberCapacity: v } = e,
        [b, g] = i.useState(null),
        { user: T, createdAt: I } = o;
    if (null == T) throw Error('Missing user on this guild join request!');
    let R = i.useMemo(() => new u.Z(T), [T]),
        N = m.ZP.getUserAvatarURL(R),
        E = t === h.wB.SUBMITTED,
        w = i.useCallback(
            async (e, t) => {
                let { guildId: n, userId: a } = e;
                if (null == b) {
                    g(t);
                    try {
                        await x.Z.updateGuildJoinRequest(n, a, o.joinRequestId, t);
                    } catch (e) {
                        (0, c.showToast)((0, c.createToast)(_.intl.string(_.t.R0RpRU), c.ToastType.FAILURE)), g(null);
                    }
                }
            },
            [b, o.joinRequestId]
        ),
        B = async () => {
            await w(o, h.wB.APPROVED);
        },
        S = async () => {
            await w(o, h.wB.REJECTED);
        };
    return (0, a.jsxs)(c.P3F, {
        className: l()(p.container, C),
        onClick: j,
        children: [
            (0, a.jsx)(c.qEK, {
                src: N,
                size: c.EFr.SIZE_40,
                'aria-label': T.username,
                className: p.__invalid_spacer
            }),
            (0, a.jsxs)('div', {
                className: p.userDetails,
                children: [
                    (0, a.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: T.username
                    }),
                    (0, a.jsx)(c.Text, {
                        className: p.createdAt,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: s()(I).format('lll')
                    })
                ]
            }),
            E &&
                !v &&
                (0, a.jsx)(f, {
                    icon: c.dz2,
                    onClick: B,
                    submitting: b === h.wB.APPROVED,
                    disabled: null != b && b !== h.wB.APPROVED
                }),
            E &&
                (0, a.jsx)(f, {
                    icon: c.Dio,
                    onClick: S,
                    submitting: b === h.wB.REJECTED,
                    disabled: null != b && b !== h.wB.REJECTED
                }),
            (0, a.jsx)(c.P3F, {
                className: l()(p.overflowMenuContainer, { [p.disabled]: null != b }),
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
                    className: p.icon,
                    width: 18
                })
            })
        ]
    });
}
function j() {
    let e = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
        t = ''.concat(Math.floor(25 * Math.random()) + 50, 'px');
    return (0, a.jsxs)('div', {
        className: p.placeholder,
        children: [
            (0, a.jsx)('div', { className: l()(p.placeholderAvatar) }),
            (0, a.jsxs)('div', {
                className: p.userDetails,
                children: [
                    (0, a.jsx)('div', {
                        className: p.placeholderUsername,
                        style: { maxWidth: e }
                    }),
                    (0, a.jsx)('div', {
                        className: p.placeholderCreatedAt,
                        style: { maxWidth: t }
                    })
                ]
            })
        ]
    });
}
