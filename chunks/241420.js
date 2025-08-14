e.d(n, { default: () => _ });
var i = e(255367);
e(73800);
var l = e(481060),
    a = e(546957),
    r = e(190014),
    s = e(301812),
    u = e(988043),
    c = e(919539),
    o = e(526761),
    d = e(388032),
    g = e(942465);
function f(t) {
    let { guildId: n } = t;
    return (0, i.jsxs)(a.Z, {
        children: [
            (0, i.jsx)(u.Z, {
                ingress: o.f4.SERVER_PRIVACY_MODAL,
                guildId: n,
            }),
            (0, i.jsx)(c.Z, {
                ingress: o.f4.SERVER_PRIVACY_MODAL,
                guildId: n,
            }),
            (0, i.jsx)(s.Z, {
                ingress: o.f4.SERVER_PRIVACY_MODAL,
                guildId: n,
            }),
            (0, i.jsx)(r.Z, {
                ingress: o.f4.SERVER_PRIVACY_MODAL,
                guildId: n,
            }),
            (0, i.jsx)(l.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: d.intl.format(d.t.LNsV09, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function _(t) {
    let { guild: n, transitionState: e, onClose: a } = t,
        r = "".concat(d.intl.string(d.t.BayiAg), "\u2014").concat(null != n ? n.name : "??");
    return (0, i.jsxs)(l.Y0X, {
        transitionState: e,
        size: l.CgR.SMALL,
        "aria-label": r,
        parentComponent: "PrivacySettings",
        children: [
            (0, i.jsx)(l.xBx, {
                children: (0, i.jsx)(l.X6q, {
                    variant: "heading-lg/semibold",
                    children: r,
                }),
            }),
            (0, i.jsx)(l.hzk, {
                className: g.content,
                children: (0, i.jsx)(f, { guildId: n.id }),
            }),
            (0, i.jsx)(l.mzw, {
                children: (0, i.jsx)(l.zxk, {
                    variant: "primary",
                    text: d.intl.string(d.t.i4jeWV),
                    onClick: () => a(),
                }),
            }),
        ],
    });
}
