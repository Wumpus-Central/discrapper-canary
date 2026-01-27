n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(421380),
    a = n(397927),
    o = n(688810),
    c = n(507698),
    d = n(954921),
    u = n(354328),
    _ = n(405810),
    p = n(919395),
    m = n(128450),
    g = n(985018),
    A = n(223772);

function f(e) {
    let { user: t, guild: n, className: i, sectionTitle: _, forcedDivider: f = !1, withTutorial: b = !1 } = e,
        { analyticsLocations: E } = (0, o.Ay)(),
        x = (0, u.A)("enable_avatar_decoration_uploads"),
        O = (0, p.a4)({
            user: t,
            guildId: null == n ? void 0 : n.id,
        }),
        { pendingAvatarDecoration: C, errors: I } = (0, p.CP)(null == n ? void 0 : n.id),
        T = b ? a.wLn : s.$n;
    return (0, r.jsxs)(m.A, {
        className: i,
        forcedDivider: f,
        hasBackground: !0,
        title: _,
        errors: I,
        children: [
            (0, r.jsxs)("div", {
                className: A.NC,
                children: [
                    (0, r.jsx)(T, {
                        size: s.$n.Sizes.SMALL,
                        onClick: () => {
                            (0, d.L)({
                                analyticsLocations: E,
                                guild: n,
                            });
                        },
                        className: l()({
                            [A.yj]: b,
                        }),
                        children: g.intl.string(g.t.BVcYCx),
                    }),
                    (void 0 === C ? null != O : null != C) &&
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: A.DT,
                            children: (0, r.jsx)(a.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: (0, c.uZ)(t, n) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
                                onClick: () => {
                                    (0, p.Dx)(null, null == n ? void 0 : n.id);
                                },
                            }),
                        }),
                ],
            }),
            t.isStaff() &&
                x &&
                (0, r.jsx)(h, {
                    user: t,
                }),
        ],
    });
}
let h = (e) => {
    let { user: t } = e;
    return (0, r.jsxs)("div", {
        className: A.J_,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-xs/bold",
                children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app.",
            }),
            (0, r.jsx)(_.A, {
                onChange: (e) => {
                    null != e &&
                        (t.avatarDecoration = {
                            asset: e,
                            skuID: "PALUE000000001",
                        });
                },
                size: "sm",
                variant: "primary",
                text: g.intl.string(g.t.a9F1Qu),
            }),
        ],
    });
};
