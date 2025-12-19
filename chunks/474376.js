n.d(t, { g: () => C }), n(539854);
var a = n(54381);
n(473749);
var r = n(442837),
    i = n(692547),
    l = n(780384),
    s = n(481060),
    o = n(210887),
    c = n(598077),
    d = n(246946),
    u = n(594174),
    m = n(626135),
    p = n(51144),
    f = n(480387),
    h = n(726745),
    x = n(251423),
    b = n(383832),
    g = n(981631),
    v = n(388032),
    j = n(608125);
function C(e) {
    let t = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        n = (0, r.e7)([d.Z], () => d.Z.hidePersonalInformation),
        C = (0, r.e7)([o.Z], () => (0, l.wj)(o.Z.theme)),
        { multiAccountUsers: y } = (0, x.L)(),
        _ = y.map((r) => {
            let l = new c.Z(r),
                o = l.id === (null == t ? void 0 : t.id),
                d = r.tokenStatus === h.q.INVALID,
                u = n ? null : "#".concat(l.discriminator);
            return (0, a.jsx)(
                s.sNh,
                {
                    id: l.id,
                    focusedClassName: j.focused,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, a.jsxs)("div", {
                            className: j.userMenuItem,
                            children: [
                                (0, a.jsx)(s.qEK, {
                                    src: l.getAvatarURL(void 0, 40),
                                    size: s.EFr.SIZE_24,
                                    "aria-label": r.username,
                                }),
                                (0, a.jsxs)("div", {
                                    className: j.userMenuUsername,
                                    children: [
                                        (0, a.jsx)(s.Text, {
                                            className: j.userMenuText,
                                            variant: "text-sm/normal",
                                            children: p.ZP.getUserTag(l, {
                                                mode: "username",
                                                identifiable: n ? "never" : "always",
                                            }),
                                        }),
                                        !l.hasUniqueUsername() &&
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
                                        color: t ? i.Z.unsafe_rawColors.WHITE.css : i.Z.unsafe_rawColors.BRAND_500.css,
                                        secondaryColor:
                                            (t && C) || (t && !C)
                                                ? i.Z.unsafe_rawColors.BRAND_500.css
                                                : i.Z.unsafe_rawColors.WHITE.css,
                                        className: j.activeIcon,
                                    }),
                                d &&
                                    (0, a.jsx)(s.Mgn, {
                                        color: i.Z.unsafe_rawColors.RED_400.css,
                                        secondaryColor:
                                            (t && C) || (t && !C)
                                                ? i.Z.unsafe_rawColors.BRAND_500.css
                                                : i.Z.unsafe_rawColors.WHITE.css,
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
                            (n = l.id) !== (null == t ? void 0 : t.id) &&
                                (m.default.track(g.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                    location: { section: g.jXE.USER_PROFILE },
                                }),
                                f.yD(n));
                        }
                    },
                },
                l.id,
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
