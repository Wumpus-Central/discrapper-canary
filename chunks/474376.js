n.d(t, { g: () => _ }), n(539854);
var a = n(951288);
n(647438);
var i = n(442837),
    r = n(780384),
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
    g = n(251423),
    f = n(383832),
    b = n(981631),
    v = n(388032),
    j = n(681285);
function _(e) {
    let t = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        n = (0, i.e7)([d.Z], () => d.Z.hidePersonalInformation),
        _ = (0, i.e7)([o.Z], () => (0, r.wj)(o.Z.theme)),
        { multiAccountUsers: y } = (0, g.L)(),
        C = y.map((i) => {
            let r = new c.Z(i),
                o = r.id === (null == t ? void 0 : t.id),
                d = i.tokenStatus === x.q.INVALID,
                u = n ? null : "#".concat(r.discriminator);
            return (0, a.jsx)(
                l.sNh,
                {
                    id: r.id,
                    focusedClassName: j.focused,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, a.jsxs)("div", {
                            className: j.userMenuItem,
                            children: [
                                (0, a.jsx)(l.qEK, {
                                    src: r.getAvatarURL(void 0, 40),
                                    size: l.EFr.SIZE_24,
                                    "aria-label": i.username,
                                }),
                                (0, a.jsxs)("div", {
                                    className: j.userMenuUsername,
                                    children: [
                                        (0, a.jsx)(l.Text, {
                                            className: j.userMenuText,
                                            variant: "text-sm/normal",
                                            children: p.ZP.getUserTag(r, {
                                                mode: "username",
                                                identifiable: n ? "never" : "always",
                                            }),
                                        }),
                                        !r.hasUniqueUsername() &&
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
                                        color: (0, s.Lq)(t ? b.Ilk.WHITE_500 : b.Ilk.BRAND_500),
                                        secondaryColor: (0, s.Lq)(
                                            (t && _) || (t && !_) ? b.Ilk.BRAND_500 : b.Ilk.WHITE_500,
                                        ),
                                        className: j.activeIcon,
                                    }),
                                d &&
                                    (0, a.jsx)(l.Mgn, {
                                        color: (0, s.Lq)(b.Ilk.RED_400),
                                        secondaryColor: (0, s.Lq)(
                                            (t && _) || (t && !_) ? b.Ilk.BRAND_500 : b.Ilk.WHITE_500,
                                        ),
                                        size: "xs",
                                        className: j.activeIcon,
                                    }),
                            ],
                        });
                    },
                    action: () => {
                        if ((null == e || e(), d)) (0, f.Z)();
                        else {
                            var n;
                            (n = r.id) !== (null == t ? void 0 : t.id) &&
                                (m.default.track(b.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                    location: { section: b.jXE.USER_PROFILE },
                                }),
                                h.yD(n));
                        }
                    },
                },
                r.id,
            );
        });
    return (
        C.push(
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(l.Clw, {}),
                    (0, a.jsx)(l.sNh, {
                        id: "manage-accounts",
                        label: v.intl.string(v.t.WbFpq4),
                        action: () => {
                            null == e || e(), (0, f.Z)();
                        },
                    }),
                ],
            }),
        ),
        C
    );
}
