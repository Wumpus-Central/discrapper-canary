(n.d(t, { g: () => C }), n(539854));
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(780384),
    a = n(481060),
    l = n(44315),
    o = n(210887),
    c = n(598077),
    d = n(246946),
    u = n(594174),
    m = n(626135),
    p = n(51144),
    g = n(480387),
    h = n(726745),
    f = n(251423),
    b = n(383832),
    x = n(981631),
    _ = n(388032),
    j = n(965695);
function C(e) {
    let t = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        n = (0, r.e7)([d.Z], () => d.Z.hidePersonalInformation),
        C = (0, r.e7)([o.Z], () => (0, s.wj)(o.Z.theme)),
        { multiAccountUsers: E } = (0, f.L)(),
        O = (e) => {
            e !== (null == t ? void 0 : t.id) && (m.default.track(x.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: x.jXE.USER_PROFILE } }), g.yD(e));
        },
        v = E.map((r) => {
            let s = new c.Z(r),
                o = s.id === (null == t ? void 0 : t.id),
                d = r.tokenStatus === h.q.INVALID,
                u = n ? null : '#'.concat(s.discriminator);
            return (0, i.jsx)(
                a.sNh,
                {
                    id: s.id,
                    focusedClassName: j.focused,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, i.jsxs)('div', {
                            className: j.userMenuItem,
                            children: [
                                (0, i.jsx)(a.qEK, {
                                    src: s.getAvatarURL(void 0, 40),
                                    size: a.EFr.SIZE_24,
                                    'aria-label': r.username
                                }),
                                (0, i.jsxs)('div', {
                                    className: j.userMenuUsername,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            className: j.userMenuText,
                                            variant: 'text-sm/normal',
                                            children: p.ZP.getUserTag(s, {
                                                mode: 'username',
                                                identifiable: n ? 'never' : 'always'
                                            })
                                        }),
                                        !s.hasUniqueUsername() &&
                                            (0, i.jsx)(a.Text, {
                                                className: j.userMenuDiscriminator,
                                                variant: 'text-sm/normal',
                                                children: u
                                            })
                                    ]
                                }),
                                o &&
                                    (0, i.jsx)(a.owK, {
                                        size: 'sm',
                                        color: (0, l.Lq)(t ? x.Ilk.WHITE_500 : x.Ilk.BRAND_500),
                                        secondaryColor: (0, l.Lq)((t && C) || (t && !C) ? x.Ilk.BRAND_500 : x.Ilk.WHITE_500),
                                        className: j.activeIcon
                                    }),
                                d &&
                                    (0, i.jsx)(a.Mgn, {
                                        color: (0, l.Lq)(x.Ilk.RED_400),
                                        secondaryColor: (0, l.Lq)((t && C) || (t && !C) ? x.Ilk.BRAND_500 : x.Ilk.WHITE_500),
                                        size: 'xs',
                                        className: j.activeIcon
                                    })
                            ]
                        });
                    },
                    action: () => {
                        (null == e || e(), d ? (0, b.Z)() : O(s.id));
                    }
                },
                s.id
            );
        });
    return (
        v.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.Clw, {}),
                    (0, i.jsx)(a.sNh, {
                        id: 'manage-accounts',
                        label: _.intl.string(_.t.WbFpq6),
                        action: () => {
                            (null == e || e(), (0, b.Z)());
                        }
                    })
                ]
            })
        ),
        v
    );
}
