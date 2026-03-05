n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(421380),
    r = n(397927),
    o = n(688810),
    d = n(507698),
    c = n(954921),
    u = n(354328),
    _ = n(405810),
    g = n(919395),
    m = n(128450),
    A = n(985018),
    h = n(6022);
function p(e) {
    let { user: t, guild: n, className: s, sectionTitle: _, forcedDivider: p = !1, withTutorial: E = !1 } = e,
        { analyticsLocations: T } = (0, o.Ay)(),
        S = (0, u.A)("enable_avatar_decoration_uploads"),
        C = (0, g.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: f, errors: I } = (0, g.CP)(n?.id),
        b = E ? r.wLn : a.$n;
    return (0, i.jsxs)(m.A, {
        className: s,
        forcedDivider: p,
        hasBackground: !0,
        title: _,
        errors: I,
        children: [
            (0, i.jsxs)("div", {
                className: h.NC,
                children: [
                    (0, i.jsx)(b, {
                        size: a.$n.Sizes.SMALL,
                        onClick: () => {
                            (0, c.L)({ analyticsLocations: T, guild: n });
                        },
                        className: l()({ [h.yj]: E }),
                        children: A.intl.string(A.t.BVcYCx),
                    }),
                    (void 0 === f ? null != C : null != f) &&
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: h.DT,
                            children: (0, i.jsx)(r.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: (0, d.uZ)(t, n) ? A.intl.string(A.t.CHf9iJ) : A.intl.string(A.t.OrokWm),
                                onClick: () => {
                                    (0, g.Dx)(null, n?.id);
                                },
                            }),
                        }),
                ],
            }),
            t.isStaff() && S && (0, i.jsx)(x, { user: t }),
        ],
    });
}
let x = (e) => {
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
                text: A.intl.string(A.t.a9F1Qu),
            }),
        ],
    });
};
