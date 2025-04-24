n.d(t, { g: () => j }), n(539854);
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(780384),
    l = n(481060),
    a = n(44315),
    o = n(540059),
    c = n(210887),
    d = n(598077),
    u = n(246946),
    m = n(594174),
    p = n(626135),
    g = n(51144),
    h = n(480387),
    f = n(726745),
    b = n(251423),
    _ = n(383832),
    x = n(981631),
    E = n(388032),
    C = n(965695);
function j(e) {
    let t = (0, r.e7)([m.default], () => m.default.getCurrentUser()),
        n = (0, r.e7)([u.Z], () => u.Z.hidePersonalInformation),
        j = (0, r.e7)([c.Z], () => (0, s.wj)(c.Z.theme)),
        O = (0, o.R6)('useMultiAccountMenuItems'),
        { multiAccountUsers: S } = (0, b.L)(),
        v = (e) => {
            e !== (null == t ? void 0 : t.id) && (p.default.track(x.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: x.jXE.USER_PROFILE } }), h.yD(e));
        },
        T = S.map((r) => {
            let s = new d.Z(r),
                o = s.id === (null == t ? void 0 : t.id),
                c = r.tokenStatus === f.q.INVALID,
                u = n ? null : '#'.concat(s.discriminator);
            return (0, i.jsx)(
                l.sNh,
                {
                    id: s.id,
                    focusedClassName: C.focused,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, i.jsxs)('div', {
                            className: C.userMenuItem,
                            children: [
                                (0, i.jsx)(l.qEK, {
                                    src: s.getAvatarURL(void 0, 40),
                                    size: l.EFr.SIZE_24,
                                    'aria-label': r.username
                                }),
                                (0, i.jsxs)('div', {
                                    className: C.userMenuUsername,
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            className: C.userMenuText,
                                            variant: 'text-sm/normal',
                                            children: g.ZP.getUserTag(s, {
                                                mode: 'username',
                                                identifiable: n ? 'never' : 'always'
                                            })
                                        }),
                                        !s.isPomelo() &&
                                            (0, i.jsx)(l.Text, {
                                                className: C.userMenuDiscriminator,
                                                variant: 'text-sm/normal',
                                                children: u
                                            })
                                    ]
                                }),
                                o &&
                                    (0, i.jsx)(l.owK, {
                                        size: 'sm',
                                        color: (0, a.Lq)(t ? x.Ilk.WHITE_500 : x.Ilk.BRAND_500),
                                        secondaryColor: (0, a.Lq)((t && j) || (t && !O && !j) ? x.Ilk.BRAND_500 : x.Ilk.WHITE_500),
                                        className: C.activeIcon
                                    }),
                                c &&
                                    (0, i.jsx)(l.P4T, {
                                        color: (0, a.Lq)(x.Ilk.RED_400),
                                        secondaryColor: (0, a.Lq)((t && j) || (t && !O && !j) ? x.Ilk.BRAND_500 : x.Ilk.WHITE_500),
                                        size: 'xs',
                                        className: C.activeIcon
                                    })
                            ]
                        });
                    },
                    action: () => {
                        null == e || e(), c ? (0, _.Z)() : v(s.id);
                    }
                },
                s.id
            );
        });
    return (
        T.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(l.Clw, {}),
                    (0, i.jsx)(l.sNh, {
                        id: 'manage-accounts',
                        label: E.intl.string(E.t.WbFpq6),
                        action: () => {
                            null == e || e(), (0, _.Z)();
                        }
                    })
                ]
            })
        ),
        T
    );
}
