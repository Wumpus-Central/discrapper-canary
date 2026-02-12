"use strict";
n.r(t), n.d(t, { default: () => m });
var r = n(627968);
n(64700);
var a = n(311907),
    s = n(397927),
    i = n(976860),
    d = n(961350),
    o = n(207913),
    c = n(210742),
    _ = n(239093),
    l = n(652215),
    u = n(985018),
    p = n(90344);
function f() {
    return (0, r.jsxs)(s.$Td, {
        color: s.Hv$.DANGER,
        className: p.aL,
        children: [
            (0, r.jsx)(s.Text, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: u.intl.string(u.t["MG+Bzb"]),
            }),
            (0, r.jsx)(s.eCN, {
                noticeType: l.kqX.SAFETY_SUSPENDED_USER_WARNING,
                href: _.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "always-white",
                    children: u.intl.string(u.t["9JceHN"]),
                }),
            }),
        ],
    });
}
function x(e) {
    let {} = e,
        t = (0, a.bG)([o.A], () => o.A.getAgeCheckStatus());
    return t === _.qN.NONE
        ? null
        : t === _.qN.SUCCESS
          ? (0, r.jsx)(s.po8, { messageType: s.YCn.POSITIVE, children: u.intl.format(u.t.maZDL6, { login: "/login" }) })
          : t === _.qN.ERROR
            ? (0, r.jsx)(s.po8, { messageType: s.YCn.ERROR, children: u.intl.string(u.t["4sILBU"]) })
            : t === _.qN.FAILURE
              ? (0, r.jsx)(s.po8, { messageType: s.YCn.ERROR, children: u.intl.string(u.t["40R63o"]) })
              : (0, r.jsx)(s.po8, { messageType: s.YCn.INFO, children: u.intl.string(u.t["nhhy/R"]) });
}
function h() {
    return (0, r.jsxs)("div", { className: p.$$, children: [(0, r.jsx)(x, {}), (0, r.jsx)(c.A, {})] });
}
function m() {
    return (
        null == (0, a.bG)([d.default], () => d.default.getSuspendedUserToken()) &&
            (0, i.pX)(l.BVt.LOGIN, { source: "suspended_user_safety_hub_page" }),
        (0, r.jsxs)("div", { className: p.kL, children: [(0, r.jsx)(f, {}), (0, r.jsx)(h, {})] })
    );
}
