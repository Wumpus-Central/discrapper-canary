n.d(t, {
    C: function () {
        return C;
    },
    h: function () {
        return _;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(913527),
    c = n.n(l),
    s = n(481060),
    d = n(239091),
    u = n(598077),
    m = n(768581),
    f = n(693546),
    x = n(246364),
    b = n(388032),
    h = n(372819);
function p(e) {
    let { icon: t, onClick: n, submitting: r, disabled: a } = e;
    return (0, i.jsx)(s.Clickable, {
        className: o()(h.actionIconContainer, { [h.disabled]: a || r }),
        onClick: n,
        children: r
            ? (0, i.jsx)(s.Dots, {
                  className: h.icon,
                  dotRadius: 2,
                  themed: !0
              })
            : (0, i.jsx)(t, {
                  className: h.icon,
                  size: 'xxs',
                  color: 'currentColor'
              })
    });
}
function C(e) {
    let { applicationStatus: t, guild: a, guildJoinRequest: l, className: C, onClick: _, atMaxMemberCapacity: g } = e,
        [v, j] = r.useState(null),
        { user: I, createdAt: T } = l;
    if (null == I) throw Error('Missing user on this guild join request!');
    let R = r.useMemo(() => new u.Z(I), [I]),
        E = m.ZP.getUserAvatarURL(R),
        S = t === x.wB.SUBMITTED,
        A = r.useCallback(
            async (e, t) => {
                let { guildId: n, userId: i } = e;
                if (null == v) {
                    j(t);
                    try {
                        await f.Z.updateGuildJoinRequest(n, i, l.joinRequestId, t);
                    } catch (e) {
                        (0, s.showToast)((0, s.createToast)(b.intl.string(b.t.R0RpRU), s.ToastType.FAILURE)), j(null);
                    }
                }
            },
            [v, l.joinRequestId]
        ),
        w = async () => {
            await A(l, x.wB.APPROVED);
        },
        N = async () => {
            await A(l, x.wB.REJECTED);
        };
    return (0, i.jsxs)(s.Clickable, {
        className: o()(h.container, C),
        onClick: _,
        children: [
            (0, i.jsx)(s.Avatar, {
                src: E,
                size: s.AvatarSizes.SIZE_40,
                'aria-label': I.username,
                className: h.__invalid_spacer
            }),
            (0, i.jsxs)('div', {
                className: h.userDetails,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: I.username
                    }),
                    (0, i.jsx)(s.Text, {
                        className: h.createdAt,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: c()(T).format('lll')
                    })
                ]
            }),
            S &&
                !g &&
                (0, i.jsx)(p, {
                    icon: s.CheckmarkLargeIcon,
                    onClick: w,
                    submitting: v === x.wB.APPROVED,
                    disabled: null != v && v !== x.wB.APPROVED
                }),
            S &&
                (0, i.jsx)(p, {
                    icon: s.XSmallIcon,
                    onClick: N,
                    submitting: v === x.wB.REJECTED,
                    disabled: null != v && v !== x.wB.REJECTED
                }),
            (0, i.jsx)(s.Clickable, {
                className: o()(h.overflowMenuContainer, { [h.disabled]: null != v }),
                onClick: (e) => {
                    (0, d.jW)(
                        e,
                        async () => {
                            let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    guild: a,
                                    user: R
                                });
                        },
                        {
                            position: 'bottom',
                            align: 'right'
                        }
                    );
                },
                children: (0, i.jsx)(s.MoreHorizontalIcon, {
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
    return (0, i.jsxs)('div', {
        className: h.placeholder,
        children: [
            (0, i.jsx)('div', { className: o()(h.placeholderAvatar) }),
            (0, i.jsxs)('div', {
                className: h.userDetails,
                children: [
                    (0, i.jsx)('div', {
                        className: h.placeholderUsername,
                        style: { maxWidth: e }
                    }),
                    (0, i.jsx)('div', {
                        className: h.placeholderCreatedAt,
                        style: { maxWidth: t }
                    })
                ]
            })
        ]
    });
}
