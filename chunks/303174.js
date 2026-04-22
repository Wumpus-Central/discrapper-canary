"use strict";
r.r(t), r.d(t, { default: () => N });
var n = r(627968);
r(64700);
var s = r(311907),
    i = r(417098),
    a = r(834730),
    l = r(512950),
    c = r(976860),
    o = r(961350),
    _ = r(207913),
    d = r(210742),
    u = r(239093),
    f = r(652215),
    C = r(985018),
    h = r(280741);
function p() {
    return (0, n.jsxs)(i.$T, {
        color: i.Hv.DANGER,
        className: h.aL,
        children: [
            (0, n.jsx)(a.E, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: C.intl.string(C.t["MG+Bzb"]),
            }),
            (0, n.jsx)(i.eC, {
                noticeType: f.kqX.SAFETY_SUSPENDED_USER_WARNING,
                href: u.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, n.jsx)(a.E, {
                    variant: "text-md/normal",
                    color: "always-white",
                    children: C.intl.string(C.t["9JceHN"]),
                }),
            }),
        ],
    });
}
function x(e) {
    let {} = e,
        t = (0, s.bG)([_.A], () => _.A.getAgeCheckStatus());
    return t === u.qN.NONE
        ? null
        : t === u.qN.SUCCESS
          ? (0, n.jsx)(l.p, { messageType: l.Y.POSITIVE, children: C.intl.format(C.t.maZDL6, { login: "/login" }) })
          : t === u.qN.ERROR
            ? (0, n.jsx)(l.p, { messageType: l.Y.ERROR, children: C.intl.string(C.t["4sILBU"]) })
            : t === u.qN.FAILURE
              ? (0, n.jsx)(l.p, { messageType: l.Y.ERROR, children: C.intl.string(C.t["40R63o"]) })
              : (0, n.jsx)(l.p, { messageType: l.Y.INFO, children: C.intl.string(C.t["nhhy/R"]) });
}
function m() {
    return (0, n.jsxs)("div", { className: h.$$, children: [(0, n.jsx)(x, {}), (0, n.jsx)(d.A, {})] });
}
function N() {
    return (
        null == (0, s.bG)([o.default], () => o.default.getSuspendedUserToken()) &&
            (0, c.pX)(f.BVt.LOGIN, { source: "suspended_user_safety_hub_page" }),
        (0, n.jsxs)("div", { className: h.kL, children: [(0, n.jsx)(p, {}), (0, n.jsx)(m, {})] })
    );
}
