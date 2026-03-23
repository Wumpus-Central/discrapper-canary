"use strict";
n.r(t), n.d(t, { default: () => m });
var a = n(627968);
n(64700);
var s = n(311907),
    i = n(397927),
    r = n(976860),
    d = n(961350),
    _ = n(207913),
    o = n(210742),
    c = n(239093),
    l = n(652215),
    p = n(985018),
    f = n(90344);
function u() {
    return (0, a.jsxs)(i.$Td, {
        color: i.Hv$.DANGER,
        className: f.aL,
        children: [
            (0, a.jsx)(i.Text, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: p.intl.string(p.t["MG+Bzb"]),
            }),
            (0, a.jsx)(i.eCN, {
                noticeType: l.kqX.SAFETY_SUSPENDED_USER_WARNING,
                href: c.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, a.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "always-white",
                    children: p.intl.string(p.t["9JceHN"]),
                }),
            }),
        ],
    });
}
function h(e) {
    let {} = e,
        t = (0, s.bG)([_.A], () => _.A.getAgeCheckStatus());
    return t === c.qN.NONE
        ? null
        : t === c.qN.SUCCESS
          ? (0, a.jsx)(i.po8, { messageType: i.YCn.POSITIVE, children: p.intl.format(p.t.maZDL6, { login: "/login" }) })
          : t === c.qN.ERROR
            ? (0, a.jsx)(i.po8, { messageType: i.YCn.ERROR, children: p.intl.string(p.t["4sILBU"]) })
            : t === c.qN.FAILURE
              ? (0, a.jsx)(i.po8, { messageType: i.YCn.ERROR, children: p.intl.string(p.t["40R63o"]) })
              : (0, a.jsx)(i.po8, { messageType: i.YCn.INFO, children: p.intl.string(p.t["nhhy/R"]) });
}
function x() {
    return (0, a.jsxs)("div", { className: f.$$, children: [(0, a.jsx)(h, {}), (0, a.jsx)(o.A, {})] });
}
function m() {
    return (
        null == (0, s.bG)([d.default], () => d.default.getSuspendedUserToken()) &&
            (0, r.pX)(l.BVt.LOGIN, { source: "suspended_user_safety_hub_page" }),
        (0, a.jsxs)("div", { className: f.kL, children: [(0, a.jsx)(u, {}), (0, a.jsx)(x, {})] })
    );
}
