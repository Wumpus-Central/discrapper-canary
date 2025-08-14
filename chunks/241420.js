t.d(n, { default: () => p });
var i = t(255367);
t(73800);
var o = t(481060),
    r = t(546957),
    a = t(190014),
    c = t(301812),
    l = t(988043),
    s = t(919539),
    d = t(526761),
    _ = t(388032),
    u = t(942465);
function f(e) {
    let { guildId: n } = e;
    return (0, i.jsxs)(r.Z, {
        children: [
            (0, i.jsx)(l.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n,
            }),
            (0, i.jsx)(s.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n,
            }),
            (0, i.jsx)(c.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n,
            }),
            (0, i.jsx)(a.Z, {
                ingress: d.f4.SERVER_PRIVACY_MODAL,
                guildId: n,
            }),
            (0, i.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: _.intl.format(_.t.LNsV09, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function p(e) {
    let { guild: n, transitionState: t, onClose: r } = e,
        a = "".concat(_.intl.string(_.t.BayiAg), "\u2014").concat(null != n ? n.name : "??");
    return (0, i.jsxs)(o.Y0X, {
        transitionState: t,
        size: o.CgR.SMALL,
        "aria-label": a,
        parentComponent: "PrivacySettings",
        children: [
            (0, i.jsx)(o.xBx, {
                children: (0, i.jsx)(o.X6q, {
                    variant: "heading-lg/semibold",
                    children: a,
                }),
            }),
            (0, i.jsx)(o.hzk, {
                className: u.content,
                children: (0, i.jsx)(f, { guildId: n.id }),
            }),
            (0, i.jsx)(o.mzw, {
                children: (0, i.jsx)(o.zxk, {
                    variant: "primary",
                    text: _.intl.string(_.t.i4jeWV),
                    onClick: () => r(),
                }),
            }),
        ],
    });
}
