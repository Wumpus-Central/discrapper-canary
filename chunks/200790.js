n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(421380),
    r = n(397927),
    o = n(688810),
    c = n(507698),
    d = n(954921),
    u = n(354328),
    _ = n(405810),
    m = n(919395),
    A = n(128450),
    g = n(985018),
    h = n(223772);
function x(e) {
    let { user: t, guild: n, className: s, sectionTitle: _, forcedDivider: x = !1, withTutorial: E = !1 } = e,
        { analyticsLocations: C } = (0, o.Ay)(),
        T = (0, u.A)("enable_avatar_decoration_uploads"),
        S = (0, m.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: I, errors: f } = (0, m.CP)(n?.id),
        N = E ? r.wLn : l.$n;
    return (0, i.jsxs)(A.A, {
        className: s,
        forcedDivider: x,
        hasBackground: !0,
        title: _,
        errors: f,
        children: [
            (0, i.jsxs)("div", {
                className: h.NC,
                children: [
                    (0, i.jsx)(N, {
                        size: l.$n.Sizes.SMALL,
                        onClick: () => {
                            (0, d.L)({ analyticsLocations: C, guild: n });
                        },
                        className: a()({ [h.yj]: E }),
                        children: g.intl.string(g.t.BVcYCx),
                    }),
                    (void 0 === I ? null != S : null != I) &&
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: h.DT,
                            children: (0, i.jsx)(r.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: (0, c.uZ)(t, n) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
                                onClick: () => {
                                    (0, m.Dx)(null, n?.id);
                                },
                            }),
                        }),
                ],
            }),
            t.isStaff() && T && (0, i.jsx)(p, { user: t }),
        ],
    });
}
let p = (e) => {
    let { user: t } = e;
    return (0, i.jsxs)("div", {
        className: h.J_,
        children: [
            (0, i.jsx)(r.Text, {
                variant: "text-xs/bold",
                children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app.",
            }),
            (0, i.jsx)(_.A, {
                onChange: (e) => {
                    null != e && (t.avatarDecoration = { asset: e, skuID: "PALUE000000001" });
                },
                size: "sm",
                variant: "primary",
                text: g.intl.string(g.t.a9F1Qu),
            }),
        ],
    });
};
