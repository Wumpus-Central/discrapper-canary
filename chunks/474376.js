n.d(t, {
    g: function () {
        return N;
    }
}),
    n(653041);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(780384),
    a = n(481060),
    s = n(44315),
    o = n(540059),
    c = n(210887),
    d = n(598077),
    u = n(246946),
    h = n(594174),
    m = n(626135),
    p = n(51144),
    g = n(480387),
    f = n(726745),
    _ = n(251423),
    E = n(383832),
    I = n(981631),
    C = n(388032),
    v = n(543395);
function N(e) {
    let t = (0, r.e7)([h.default], () => h.default.getCurrentUser()),
        n = (0, r.e7)([u.Z], () => u.Z.hidePersonalInformation),
        N = (0, r.e7)([c.Z], () => (0, l.wj)(c.Z.theme)),
        T = (0, o.R6)('useMultiAccountMenuItems'),
        { multiAccountUsers: S } = (0, _.L)(),
        b = (e) => {
            if (e !== (null == t ? void 0 : t.id)) m.default.track(I.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: I.jXE.USER_PROFILE } }), g.yD(e);
        },
        A = S.map((r) => {
            let l = new d.Z(r),
                o = l.id === (null == t ? void 0 : t.id),
                c = r.tokenStatus === f.q.INVALID,
                u = n ? null : '#'.concat(l.discriminator);
            return (0, i.jsx)(
                a.MenuItem,
                {
                    id: l.id,
                    focusedClassName: v.focused,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, i.jsxs)('div', {
                            className: v.userMenuItem,
                            children: [
                                (0, i.jsx)(a.Avatar, {
                                    src: l.getAvatarURL(void 0, 40),
                                    size: a.AvatarSizes.SIZE_24,
                                    'aria-label': r.username
                                }),
                                (0, i.jsxs)('div', {
                                    className: v.userMenuUsername,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            className: v.userMenuText,
                                            variant: 'text-sm/normal',
                                            children: p.ZP.getUserTag(l, {
                                                mode: 'username',
                                                identifiable: n ? 'never' : 'always'
                                            })
                                        }),
                                        !l.isPomelo() &&
                                            (0, i.jsx)(a.Text, {
                                                className: v.userMenuDiscriminator,
                                                variant: 'text-sm/normal',
                                                children: u
                                            })
                                    ]
                                }),
                                o &&
                                    (0, i.jsx)(a.CircleCheckIcon, {
                                        size: 'sm',
                                        color: (0, s.Lq)(t ? I.Ilk.WHITE_500 : I.Ilk.BRAND_500),
                                        secondaryColor: (0, s.Lq)((t && N) || (t && !T && !N) ? I.Ilk.BRAND_500 : I.Ilk.WHITE_500),
                                        className: v.activeIcon
                                    }),
                                c &&
                                    (0, i.jsx)(a.CircleWarningIcon, {
                                        color: (0, s.Lq)(I.Ilk.RED_400),
                                        secondaryColor: (0, s.Lq)((t && N) || (t && !T && !N) ? I.Ilk.BRAND_500 : I.Ilk.WHITE_500),
                                        size: 'xs',
                                        className: v.activeIcon
                                    })
                            ]
                        });
                    },
                    action: () => {
                        null == e || e(), c ? (0, E.Z)() : b(l.id);
                    }
                },
                l.id
            );
        });
    return (
        A.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.MenuSeparator, {}),
                    (0, i.jsx)(a.MenuItem, {
                        id: 'manage-accounts',
                        label: C.intl.string(C.t.WbFpq6),
                        action: () => {
                            null == e || e(), (0, E.Z)();
                        }
                    })
                ]
            })
        ),
        A
    );
}
