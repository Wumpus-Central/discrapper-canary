n.d(t, { g: () => y }), n(539854);
var a = n(54381);
n(473749);
var r = n(442837),
    l = n(692547),
    i = n(780384),
    s = n(481060),
    o = n(210887),
    c = n(598077),
    d = n(246946),
    u = n(594174),
    m = n(626135),
    p = n(51144),
    h = n(480387),
    f = n(726745),
    x = n(251423),
    b = n(383832),
    g = n(981631),
    v = n(388032),
    j = n(608125);
function y(e) {
    let t = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        n = (0, r.e7)([d.Z], () => d.Z.hidePersonalInformation),
        y = (0, r.e7)([o.Z], () => (0, i.wj)(o.Z.theme)),
        { multiAccountUsers: C } = (0, x.L)(),
        _ = C.map((r) => {
            let i = new c.Z(r),
                o = i.id === (null == t ? void 0 : t.id),
                d = r.tokenStatus === f.q.INVALID,
                u = n ? null : "#".concat(i.discriminator);
            return (0, a.jsx)(
                s.sNh,
                {
                    id: i.id,
                    focusedClassName: j.focused,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, a.jsxs)("div", {
                            className: j.userMenuItem,
                            children: [
                                (0, a.jsx)(s.qEK, {
                                    src: i.getAvatarURL(void 0, 40),
                                    size: s.EFr.SIZE_24,
                                    "aria-label": r.username,
                                }),
                                (0, a.jsxs)("div", {
                                    className: j.userMenuUsername,
                                    children: [
                                        (0, a.jsx)(s.Text, {
                                            className: j.userMenuText,
                                            variant: "text-sm/normal",
                                            children: p.ZP.getUserTag(i, {
                                                mode: "username",
                                                identifiable: n ? "never" : "always",
                                            }),
                                        }),
                                        !i.hasUniqueUsername() &&
                                            (0, a.jsx)(s.Text, {
                                                className: j.userMenuDiscriminator,
                                                variant: "text-sm/normal",
                                                children: u,
                                            }),
                                    ],
                                }),
                                o &&
                                    (0, a.jsx)(s.owK, {
                                        size: "sm",
                                        color: t
                                            ? l.Z.unsafe_rawColors.WHITE_500.css
                                            : l.Z.unsafe_rawColors.BRAND_500.css,
                                        secondaryColor:
                                            (t && y) || (t && !y)
                                                ? l.Z.unsafe_rawColors.BRAND_500.css
                                                : l.Z.unsafe_rawColors.WHITE_500.css,
                                        className: j.activeIcon,
                                    }),
                                d &&
                                    (0, a.jsx)(s.Mgn, {
                                        color: l.Z.unsafe_rawColors.RED_400.css,
                                        secondaryColor:
                                            (t && y) || (t && !y)
                                                ? l.Z.unsafe_rawColors.BRAND_500.css
                                                : l.Z.unsafe_rawColors.WHITE_500.css,
                                        size: "xs",
                                        className: j.activeIcon,
                                    }),
                            ],
                        });
                    },
                    action: () => {
                        if ((null == e || e(), d)) (0, b.Z)();
                        else {
                            var n;
                            (n = i.id) !== (null == t ? void 0 : t.id) &&
                                (m.default.track(g.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                    location: { section: g.jXE.USER_PROFILE },
                                }),
                                h.yD(n));
                        }
                    },
                },
                i.id,
            );
        });
    return (
        _.push(
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(s.Clw, {}),
                    (0, a.jsx)(s.sNh, {
                        id: "manage-accounts",
                        label: v.intl.string(v.t.WbFpq4),
                        action: () => {
                            null == e || e(), (0, b.Z)();
                        },
                    }),
                ],
            }),
        ),
        _
    );
}
