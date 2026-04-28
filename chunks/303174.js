t.r(s), t.d(s, { default: () => j });
var n = t(627968);
t(64700);
var r = t(17928),
    i = t(417098),
    a = t(834730),
    l = t(512950),
    c = t(976860),
    d = t(495544),
    u = t(207913),
    h = t(855267),
    o = t(239093),
    p = t(652215),
    N = t(985018),
    E = t(280741);
function R() {
    return (0, n.jsxs)(i.$T, {
        color: i.Hv.DANGER,
        className: E.aL,
        children: [
            (0, n.jsx)(a.E, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: N.intl.string(N.t["MG+Bzb"]),
            }),
            (0, n.jsx)(i.eC, {
                noticeType: p.kqX.SAFETY_SUSPENDED_USER_WARNING,
                href: o.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, n.jsx)(a.E, {
                    variant: "text-md/normal",
                    color: "always-white",
                    children: N.intl.string(N.t["9JceHN"]),
                }),
            }),
        ],
    });
}
function g(e) {
    let {} = e,
        s = (0, r.bG)([u.A], () => u.A.getAgeCheckStatus());
    return s === o.qN.NONE
        ? null
        : s === o.qN.SUCCESS
          ? (0, n.jsx)(l.p, { messageType: l.Y.POSITIVE, children: N.intl.format(N.t.maZDL6, { login: "/login" }) })
          : s === o.qN.ERROR
            ? (0, n.jsx)(l.p, { messageType: l.Y.ERROR, children: N.intl.string(N.t["4sILBU"]) })
            : s === o.qN.FAILURE
              ? (0, n.jsx)(l.p, { messageType: l.Y.ERROR, children: N.intl.string(N.t["40R63o"]) })
              : (0, n.jsx)(l.p, { messageType: l.Y.INFO, children: N.intl.string(N.t["nhhy/R"]) });
}
function x() {
    return (0, n.jsxs)("div", { className: E.$$, children: [(0, n.jsx)(g, {}), (0, n.jsx)(h.A, {})] });
}
function j() {
    return (
        null == (0, r.bG)([d.default], () => d.default.getSuspendedUserToken()) &&
            (0, c.pX)(p.BVt.LOGIN, { source: "suspended_user_safety_hub_page" }),
        (0, n.jsxs)("div", { className: E.kL, children: [(0, n.jsx)(R, {}), (0, n.jsx)(x, {})] })
    );
}
