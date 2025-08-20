n.d(t, { g: () => O }), n(539854);
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(780384),
    o = n(481060),
    s = n(44315),
    l = n(210887),
    c = n(598077),
    u = n(246946),
    d = n(594174),
    f = n(626135),
    _ = n(51144),
    p = n(480387),
    h = n(726745),
    m = n(251423),
    g = n(383832),
    E = n(981631),
    b = n(388032),
    y = n(681285);
function O(e) {
    let t = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        n = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        O = (0, i.e7)([l.Z], () => (0, a.wj)(l.Z.theme)),
        { multiAccountUsers: v } = (0, m.L)(),
        I = (e) => {
            e !== (null == t ? void 0 : t.id) &&
                (f.default.track(E.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: E.jXE.USER_PROFILE } }),
                p.yD(e));
        },
        T = v.map((i) => {
            let a = new c.Z(i),
                l = a.id === (null == t ? void 0 : t.id),
                u = i.tokenStatus === h.q.INVALID,
                d = n ? null : "#".concat(a.discriminator);
            return (0, r.jsx)(
                o.sNh,
                {
                    id: a.id,
                    focusedClassName: y.focused,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, r.jsxs)("div", {
                            className: y.userMenuItem,
                            children: [
                                (0, r.jsx)(o.qEK, {
                                    src: a.getAvatarURL(void 0, 40),
                                    size: o.EFr.SIZE_24,
                                    "aria-label": i.username,
                                }),
                                (0, r.jsxs)("div", {
                                    className: y.userMenuUsername,
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            className: y.userMenuText,
                                            variant: "text-sm/normal",
                                            children: _.ZP.getUserTag(a, {
                                                mode: "username",
                                                identifiable: n ? "never" : "always",
                                            }),
                                        }),
                                        !a.hasUniqueUsername() &&
                                            (0, r.jsx)(o.Text, {
                                                className: y.userMenuDiscriminator,
                                                variant: "text-sm/normal",
                                                children: d,
                                            }),
                                    ],
                                }),
                                l &&
                                    (0, r.jsx)(o.owK, {
                                        size: "sm",
                                        color: (0, s.Lq)(t ? E.Ilk.WHITE_500 : E.Ilk.BRAND_500),
                                        secondaryColor: (0, s.Lq)(
                                            (t && O) || (t && !O) ? E.Ilk.BRAND_500 : E.Ilk.WHITE_500,
                                        ),
                                        className: y.activeIcon,
                                    }),
                                u &&
                                    (0, r.jsx)(o.Mgn, {
                                        color: (0, s.Lq)(E.Ilk.RED_400),
                                        secondaryColor: (0, s.Lq)(
                                            (t && O) || (t && !O) ? E.Ilk.BRAND_500 : E.Ilk.WHITE_500,
                                        ),
                                        size: "xs",
                                        className: y.activeIcon,
                                    }),
                            ],
                        });
                    },
                    action: () => {
                        null == e || e(), u ? (0, g.Z)() : I(a.id);
                    },
                },
                a.id,
            );
        });
    return (
        T.push(
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(o.Clw, {}),
                    (0, r.jsx)(o.sNh, {
                        id: "manage-accounts",
                        label: b.intl.string(b.t.WbFpq6),
                        action: () => {
                            null == e || e(), (0, g.Z)();
                        },
                    }),
                ],
            }),
        ),
        T
    );
}
