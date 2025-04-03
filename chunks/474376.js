n.d(t, { g: () => j }), n(653041);
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(780384),
    a = n(481060),
    l = n(44315),
    o = n(540059),
    c = n(210887),
    d = n(598077),
    u = n(246946),
    m = n(594174),
    g = n(626135),
    p = n(51144),
    h = n(480387),
    f = n(726745),
    b = n(251423),
    N = n(383832),
    x = n(981631),
    _ = n(388032),
    E = n(965695);
function j(e) {
    let t = (0, i.e7)([m.default], () => m.default.getCurrentUser()),
        n = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        j = (0, i.e7)([c.Z], () => (0, s.wj)(c.Z.theme)),
        O = (0, o.R6)('useMultiAccountMenuItems'),
        { multiAccountUsers: C } = (0, b.L)(),
        S = (e) => {
            e !== (null == t ? void 0 : t.id) && (g.default.track(x.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: x.jXE.USER_PROFILE } }), h.yD(e));
        },
        v = C.map((i) => {
            let s = new d.Z(i),
                o = s.id === (null == t ? void 0 : t.id),
                c = i.tokenStatus === f.q.INVALID,
                u = n ? null : '#'.concat(s.discriminator);
            return (0, r.jsx)(
                a.sNh,
                {
                    id: s.id,
                    focusedClassName: E.focused,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, r.jsxs)('div', {
                            className: E.userMenuItem,
                            children: [
                                (0, r.jsx)(a.qEK, {
                                    src: s.getAvatarURL(void 0, 40),
                                    size: a.EFr.SIZE_24,
                                    'aria-label': i.username
                                }),
                                (0, r.jsxs)('div', {
                                    className: E.userMenuUsername,
                                    children: [
                                        (0, r.jsx)(a.Text, {
                                            className: E.userMenuText,
                                            variant: 'text-sm/normal',
                                            children: p.ZP.getUserTag(s, {
                                                mode: 'username',
                                                identifiable: n ? 'never' : 'always'
                                            })
                                        }),
                                        !s.isPomelo() &&
                                            (0, r.jsx)(a.Text, {
                                                className: E.userMenuDiscriminator,
                                                variant: 'text-sm/normal',
                                                children: u
                                            })
                                    ]
                                }),
                                o &&
                                    (0, r.jsx)(a.owK, {
                                        size: 'sm',
                                        color: (0, l.Lq)(t ? x.Ilk.WHITE_500 : x.Ilk.BRAND_500),
                                        secondaryColor: (0, l.Lq)((t && j) || (t && !O && !j) ? x.Ilk.BRAND_500 : x.Ilk.WHITE_500),
                                        className: E.activeIcon
                                    }),
                                c &&
                                    (0, r.jsx)(a.P4T, {
                                        color: (0, l.Lq)(x.Ilk.RED_400),
                                        secondaryColor: (0, l.Lq)((t && j) || (t && !O && !j) ? x.Ilk.BRAND_500 : x.Ilk.WHITE_500),
                                        size: 'xs',
                                        className: E.activeIcon
                                    })
                            ]
                        });
                    },
                    action: () => {
                        null == e || e(), c ? (0, N.Z)() : S(s.id);
                    }
                },
                s.id
            );
        });
    return (
        v.push(
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.Clw, {}),
                    (0, r.jsx)(a.sNh, {
                        id: 'manage-accounts',
                        label: _.NW.string(_.t.WbFpq6),
                        action: () => {
                            null == e || e(), (0, N.Z)();
                        }
                    })
                ]
            })
        ),
        v
    );
}
