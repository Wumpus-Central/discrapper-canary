"use strict";
r.r(t), r.d(t, { default: () => E });
var n = r(627968);
r(64700);
var o = r(17928),
    i = r(417098),
    _ = r(834730),
    s = r(512950),
    a = r(976860),
    l = r(495544),
    c = r(207913),
    d = r(855267),
    u = r(239093),
    f = r(652215),
    m = r(985018),
    p = r(280741);
function b() {
    return (0, n.jsxs)(i.$T, {
        color: i.Hv.DANGER,
        className: p.aL,
        children: [
            (0, n.jsx)(_.E, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: m.intl.string(m.t["MG+Bzb"]),
            }),
            (0, n.jsx)(i.eC, {
                noticeType: f.kqX.SAFETY_SUSPENDED_USER_WARNING,
                href: u.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, n.jsx)(_.E, {
                    variant: "text-md/normal",
                    color: "always-white",
                    children: m.intl.string(m.t["9JceHN"]),
                }),
            }),
        ],
    });
}
function N(e) {
    let {} = e,
        t = (0, o.bG)([c.A], () => c.A.getAgeCheckStatus());
    return t === u.qN.NONE
        ? null
        : t === u.qN.SUCCESS
          ? (0, n.jsx)(s.p, { messageType: s.Y.POSITIVE, children: m.intl.format(m.t.maZDL6, { login: "/login" }) })
          : t === u.qN.ERROR
            ? (0, n.jsx)(s.p, { messageType: s.Y.ERROR, children: m.intl.string(m.t["4sILBU"]) })
            : t === u.qN.FAILURE
              ? (0, n.jsx)(s.p, { messageType: s.Y.ERROR, children: m.intl.string(m.t["40R63o"]) })
              : (0, n.jsx)(s.p, { messageType: s.Y.INFO, children: m.intl.string(m.t["nhhy/R"]) });
}
function x() {
    return (0, n.jsxs)("div", { className: p.$$, children: [(0, n.jsx)(N, {}), (0, n.jsx)(d.A, {})] });
}
function E() {
    return (
        null == (0, o.bG)([l.default], () => l.default.getSuspendedUserToken()) &&
            (0, a.pX)(f.BVt.LOGIN, { source: "suspended_user_safety_hub_page" }),
        (0, n.jsxs)("div", { className: p.kL, children: [(0, n.jsx)(b, {}), (0, n.jsx)(x, {})] })
    );
}
