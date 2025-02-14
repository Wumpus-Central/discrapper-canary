n.d(t, { g: () => v }), n(653041);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(780384),
    a = n(481060),
    s = n(44315),
    o = n(540059),
    d = n(210887),
    c = n(598077),
    u = n(246946),
    h = n(594174),
    m = n(626135),
    p = n(51144),
    g = n(480387),
    _ = n(726745),
    f = n(251423),
    E = n(383832),
    I = n(981631),
    C = n(388032),
    N = n(989387);
function v(e) {
    let t = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        n = (0, l.e7)([u.Z], () => u.Z.hidePersonalInformation),
        v = (0, l.e7)([d.Z], () => (0, r.wj)(d.Z.theme)),
        T = (0, o.R6)('useMultiAccountMenuItems'),
        { multiAccountUsers: S } = (0, f.L)(),
        A = (e) => {
            e !== (null == t ? void 0 : t.id) && (m.default.track(I.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: I.jXE.USER_PROFILE } }), g.yD(e));
        },
        Z = S.map((l) => {
            let r = new c.Z(l),
                o = r.id === (null == t ? void 0 : t.id),
                d = l.tokenStatus === _.q.INVALID,
                u = n ? null : '#'.concat(r.discriminator);
            return (0, i.jsx)(
                a.sNh,
                {
                    id: r.id,
                    focusedClassName: N.focused,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, i.jsxs)('div', {
                            className: N.userMenuItem,
                            children: [
                                (0, i.jsx)(a.qEK, {
                                    src: r.getAvatarURL(void 0, 40),
                                    size: a.EFr.SIZE_24,
                                    'aria-label': l.username
                                }),
                                (0, i.jsxs)('div', {
                                    className: N.userMenuUsername,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            className: N.userMenuText,
                                            variant: 'text-sm/normal',
                                            children: p.ZP.getUserTag(r, {
                                                mode: 'username',
                                                identifiable: n ? 'never' : 'always'
                                            })
                                        }),
                                        !r.isPomelo() &&
                                            (0, i.jsx)(a.Text, {
                                                className: N.userMenuDiscriminator,
                                                variant: 'text-sm/normal',
                                                children: u
                                            })
                                    ]
                                }),
                                o &&
                                    (0, i.jsx)(a.owK, {
                                        size: 'sm',
                                        color: (0, s.Lq)(t ? I.Ilk.WHITE_500 : I.Ilk.BRAND_500),
                                        secondaryColor: (0, s.Lq)((t && v) || (t && !T && !v) ? I.Ilk.BRAND_500 : I.Ilk.WHITE_500),
                                        className: N.activeIcon
                                    }),
                                d &&
                                    (0, i.jsx)(a.P4T, {
                                        color: (0, s.Lq)(I.Ilk.RED_400),
                                        secondaryColor: (0, s.Lq)((t && v) || (t && !T && !v) ? I.Ilk.BRAND_500 : I.Ilk.WHITE_500),
                                        size: 'xs',
                                        className: N.activeIcon
                                    })
                            ]
                        });
                    },
                    action: () => {
                        null == e || e(), d ? (0, E.Z)() : A(r.id);
                    }
                },
                r.id
            );
        });
    return (
        Z.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.Clw, {}),
                    (0, i.jsx)(a.sNh, {
                        id: 'manage-accounts',
                        label: C.intl.string(C.t.WbFpq6),
                        action: () => {
                            null == e || e(), (0, E.Z)();
                        }
                    })
                ]
            })
        ),
        Z
    );
}
