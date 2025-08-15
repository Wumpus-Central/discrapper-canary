a.d(t, { default: () => g });
var n = a(951288);
a(647438);
var i = a(481060),
    r = a(546957),
    c = a(190014),
    o = a(301812),
    s = a(988043),
    l = a(919539),
    d = a(526761),
    p = a(388032),
    _ = a(942465);
function u(e) {
    let { guildId: t } = e;
    return (0, n.jsxs)(r.Z, {
        children: [
            (0, n.jsx)(s.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t,
            }),
            (0, n.jsx)(l.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t,
            }),
            (0, n.jsx)(o.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t,
            }),
            (0, n.jsx)(c.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t,
            }),
            (0, n.jsx)(i.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: p.intl.format(p.t.LNsV09, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function g(e) {
    let { guild: t, transitionState: a, onClose: r } = e,
        c = "".concat(p.intl.string(p.t.BayiAg), "\u2014").concat(null != t ? t.name : "??");
    return (0, n.jsxs)(i.Y0X, {
        transitionState: a,
        size: i.CgR.SMALL,
        "aria-label": c,
        parentComponent: "PrivacySettings",
        children: [
            (0, n.jsx)(i.xBx, {
                children: (0, n.jsx)(i.X6q, {
                    variant: "heading-lg/semibold",
                    children: c,
                }),
            }),
            (0, n.jsx)(i.hzk, {
                className: _.content,
                children: (0, n.jsx)(u, { guildId: t.id }),
            }),
            (0, n.jsx)(i.mzw, {
                children: (0, n.jsx)(i.zxk, {
                    variant: "primary",
                    text: p.intl.string(p.t.i4jeWV),
                    onClick: () => r(),
                }),
            }),
        ],
    });
}
