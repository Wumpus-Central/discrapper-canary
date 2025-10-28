n.d(t, { g: () => _ }), n(539854);
var a = n(951288);
n(647438);
var r = n(442837),
    l = n(780384),
    i = n(481060),
    o = n(44315),
    s = n(210887),
    c = n(598077),
    d = n(246946),
    u = n(594174),
    m = n(626135),
    p = n(51144),
    h = n(480387),
    x = n(726745),
    f = n(251423),
    b = n(383832),
    g = n(981631),
    v = n(388032),
    j = n(681285);
function _(e) {
    let t = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        n = (0, r.e7)([d.Z], () => d.Z.hidePersonalInformation),
        _ = (0, r.e7)([s.Z], () => (0, l.wj)(s.Z.theme)),
        { multiAccountUsers: y } = (0, f.L)(),
        C = y.map((r) => {
            let l = new c.Z(r),
                s = l.id === (null == t ? void 0 : t.id),
                d = r.tokenStatus === x.q.INVALID,
                u = n ? null : "#".concat(l.discriminator);
            return (0, a.jsx)(
                i.sNh,
                {
                    id: l.id,
                    focusedClassName: j.focused,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, a.jsxs)("div", {
                            className: j.userMenuItem,
                            children: [
                                (0, a.jsx)(i.qEK, {
                                    src: l.getAvatarURL(void 0, 40),
                                    size: i.EFr.SIZE_24,
                                    "aria-label": r.username,
                                }),
                                (0, a.jsxs)("div", {
                                    className: j.userMenuUsername,
                                    children: [
                                        (0, a.jsx)(i.Text, {
                                            className: j.userMenuText,
                                            variant: "text-sm/normal",
                                            children: p.ZP.getUserTag(l, {
                                                mode: "username",
                                                identifiable: n ? "never" : "always",
                                            }),
                                        }),
                                        !l.hasUniqueUsername() &&
                                            (0, a.jsx)(i.Text, {
                                                className: j.userMenuDiscriminator,
                                                variant: "text-sm/normal",
                                                children: u,
                                            }),
                                    ],
                                }),
                                s &&
                                    (0, a.jsx)(i.owK, {
                                        size: "sm",
                                        color: (0, o.Lq)(t ? g.Ilk.WHITE_500 : g.Ilk.BRAND_500),
                                        secondaryColor: (0, o.Lq)(
                                            (t && _) || (t && !_) ? g.Ilk.BRAND_500 : g.Ilk.WHITE_500,
                                        ),
                                        className: j.activeIcon,
                                    }),
                                d &&
                                    (0, a.jsx)(i.Mgn, {
                                        color: (0, o.Lq)(g.Ilk.RED_400),
                                        secondaryColor: (0, o.Lq)(
                                            (t && _) || (t && !_) ? g.Ilk.BRAND_500 : g.Ilk.WHITE_500,
                                        ),
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
                                h.yD(n));
                        }
                    },
                },
                l.id,
            );
        });
    return (
        C.push(
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(i.Clw, {}),
                    (0, a.jsx)(i.sNh, {
                        id: "manage-accounts",
                        label: v.intl.string(v.t.WbFpq4),
                        action: () => {
                            null == e || e(), (0, b.Z)();
                        },
                    }),
                ],
            }),
        ),
        C
    );
}
