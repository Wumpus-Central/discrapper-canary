n.d(t, { g: () => j }), n(539854);
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(780384),
    l = n(481060),
    a = n(44315),
    o = n(210887),
    c = n(598077),
    d = n(246946),
    u = n(594174),
    m = n(626135),
    g = n(51144),
    p = n(480387),
    h = n(726745),
    f = n(251423),
    b = n(383832),
    _ = n(981631),
    x = n(388032),
    E = n(965695);
function j(e) {
    let t = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        n = (0, r.e7)([d.Z], () => d.Z.hidePersonalInformation),
        j = (0, r.e7)([o.Z], () => (0, s.wj)(o.Z.theme)),
        { multiAccountUsers: O } = (0, f.L)(),
        C = (e) => {
            e !== (null == t ? void 0 : t.id) && (m.default.track(_.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: _.jXE.USER_PROFILE } }), p.yD(e));
        },
        S = O.map((r) => {
            let s = new c.Z(r),
                o = s.id === (null == t ? void 0 : t.id),
                d = r.tokenStatus === h.q.INVALID,
                u = n ? null : '#'.concat(s.discriminator);
            return (0, i.jsx)(
                l.sNh,
                {
                    id: s.id,
                    focusedClassName: E.focused,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, i.jsxs)('div', {
                            className: E.userMenuItem,
                            children: [
                                (0, i.jsx)(l.qEK, {
                                    src: s.getAvatarURL(void 0, 40),
                                    size: l.EFr.SIZE_24,
                                    'aria-label': r.username
                                }),
                                (0, i.jsxs)('div', {
                                    className: E.userMenuUsername,
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            className: E.userMenuText,
                                            variant: 'text-sm/normal',
                                            children: g.ZP.getUserTag(s, {
                                                mode: 'username',
                                                identifiable: n ? 'never' : 'always'
                                            })
                                        }),
                                        !s.isPomelo() &&
                                            (0, i.jsx)(l.Text, {
                                                className: E.userMenuDiscriminator,
                                                variant: 'text-sm/normal',
                                                children: u
                                            })
                                    ]
                                }),
                                o &&
                                    (0, i.jsx)(l.owK, {
                                        size: 'sm',
                                        color: (0, a.Lq)(t ? _.Ilk.WHITE_500 : _.Ilk.BRAND_500),
                                        secondaryColor: (0, a.Lq)((t && j) || (t && !j) ? _.Ilk.BRAND_500 : _.Ilk.WHITE_500),
                                        className: E.activeIcon
                                    }),
                                d &&
                                    (0, i.jsx)(l.P4T, {
                                        color: (0, a.Lq)(_.Ilk.RED_400),
                                        secondaryColor: (0, a.Lq)((t && j) || (t && !j) ? _.Ilk.BRAND_500 : _.Ilk.WHITE_500),
                                        size: 'xs',
                                        className: E.activeIcon
                                    })
                            ]
                        });
                    },
                    action: () => {
                        null == e || e(), d ? (0, b.Z)() : C(s.id);
                    }
                },
                s.id
            );
        });
    return (
        S.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(l.Clw, {}),
                    (0, i.jsx)(l.sNh, {
                        id: 'manage-accounts',
                        label: x.intl.string(x.t.WbFpq6),
                        action: () => {
                            null == e || e(), (0, b.Z)();
                        }
                    })
                ]
            })
        ),
        S
    );
}
