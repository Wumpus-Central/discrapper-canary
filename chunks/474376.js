n.d(t, { g: () => _ }), n(539854);
var a = n(951288);
n(647438);
var r = n(442837),
    i = n(780384),
    l = n(481060),
    s = n(44315),
    o = n(210887),
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
    j = n(125086);
function _(e) {
    let t = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        n = (0, r.e7)([d.Z], () => d.Z.hidePersonalInformation),
        _ = (0, r.e7)([o.Z], () => (0, i.wj)(o.Z.theme)),
        { multiAccountUsers: y } = (0, f.L)(),
        C = y.map((r) => {
            let i = new c.Z(r),
                o = i.id === (null == t ? void 0 : t.id),
                d = r.tokenStatus === x.q.INVALID,
                u = n ? null : "#".concat(i.discriminator);
            return (0, a.jsx)(
                l.sNh,
                {
                    id: i.id,
                    focusedClassName: j.focused,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, a.jsxs)("div", {
                            className: j.userMenuItem,
                            children: [
                                (0, a.jsx)(l.qEK, {
                                    src: i.getAvatarURL(void 0, 40),
                                    size: l.EFr.SIZE_24,
                                    "aria-label": r.username,
                                }),
                                (0, a.jsxs)("div", {
                                    className: j.userMenuUsername,
                                    children: [
                                        (0, a.jsx)(l.Text, {
                                            className: j.userMenuText,
                                            variant: "text-sm/normal",
                                            children: p.ZP.getUserTag(i, {
                                                mode: "username",
                                                identifiable: n ? "never" : "always",
                                            }),
                                        }),
                                        !i.hasUniqueUsername() &&
                                            (0, a.jsx)(l.Text, {
                                                className: j.userMenuDiscriminator,
                                                variant: "text-sm/normal",
                                                children: u,
                                            }),
                                    ],
                                }),
                                o &&
                                    (0, a.jsx)(l.owK, {
                                        size: "sm",
                                        color: (0, s.Lq)(t ? g.Ilk.WHITE_500 : g.Ilk.BRAND_500),
                                        secondaryColor: (0, s.Lq)(
                                            (t && _) || (t && !_) ? g.Ilk.BRAND_500 : g.Ilk.WHITE_500,
                                        ),
                                        className: j.activeIcon,
                                    }),
                                d &&
                                    (0, a.jsx)(l.Mgn, {
                                        color: (0, s.Lq)(g.Ilk.RED_400),
                                        secondaryColor: (0, s.Lq)(
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
        C.push(
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(l.Clw, {}),
                    (0, a.jsx)(l.sNh, {
                        id: "manage-accounts",
                        label: v.intl.string(v.t.WbFpq6),
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
