n.d(t, { default: () => m });
var a = n(951288);
n(647438);
var o = n(481060),
    i = n(546957),
    c = n(190014),
    r = n(301812),
    s = n(988043),
    l = n(919539),
    d = n(526761),
    _ = n(388032),
    p = n(942465);
function u(e) {
    let { guildId: t } = e;
    return (0, a.jsxs)(i.Z, {
        children: [
            (0, a.jsx)(s.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t,
            }),
            (0, a.jsx)(l.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t,
            }),
            (0, a.jsx)(r.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t,
            }),
            (0, a.jsx)(c.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: t,
            }),
            (0, a.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: _.intl.format(_.t.LNsV09, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function m(e) {
    let { guild: t, transitionState: n, onClose: i } = e,
        c = "".concat(_.intl.string(_.t.BayiAg), "\u2014").concat(null != t ? t.name : "??");
    return (0, a.jsxs)(o.Y0X, {
        transitionState: n,
        size: o.CgR.SMALL,
        "aria-label": c,
        parentComponent: "PrivacySettings",
        children: [
            (0, a.jsx)(o.xBx, {
                children: (0, a.jsx)(o.X6q, {
                    variant: "heading-lg/semibold",
                    children: c,
                }),
            }),
            (0, a.jsx)(o.hzk, {
                className: p.content,
                children: (0, a.jsx)(u, { guildId: t.id }),
            }),
            (0, a.jsx)(o.mzw, {
                children: (0, a.jsx)(o.zxk, {
                    variant: "primary",
                    text: _.intl.string(_.t.i4jeWV),
                    onClick: () => i(),
                }),
            }),
        ],
    });
}
