s.r(t), s.d(t, { default: () => j });
var n = s(627968);
s(64700);
var r = s(17928),
    i = s(417098),
    l = s(834730),
    a = s(512950),
    c = s(976860),
    d = s(280450),
    o = s(207913),
    u = s(855267),
    h = s(239093),
    p = s(652215),
    N = s(375708),
    g = s(280741);
function x() {
    return (0, n.jsxs)(i.$T, {
        color: i.Hv.DANGER,
        className: g.aL,
        children: [
            (0, n.jsx)(l.E, {
                tag: "span",
                color: "text-overlay-light",
                variant: "text-md/normal",
                children: N.intl.string(N.t["MG+Bzb"]),
            }),
            (0, n.jsx)(i.eC, {
                noticeType: p.kqX.SAFETY_SUSPENDED_USER_WARNING,
                href: h.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, n.jsx)(l.E, {
                    variant: "text-md/normal",
                    color: "text-overlay-light",
                    children: N.intl.string(N.t["9JceHN"]),
                }),
            }),
        ],
    });
}
function E(e) {
    let {} = e,
        t = (0, r.bG)([o.A], () => o.A.getAgeCheckStatus());
    return t === h.qN.NONE
        ? null
        : t === h.qN.SUCCESS
          ? (0, n.jsx)(a.p, { messageType: a.Y.POSITIVE, children: N.intl.format(N.t.maZDL6, { login: "/login" }) })
          : t === h.qN.ERROR
            ? (0, n.jsx)(a.p, { messageType: a.Y.ERROR, children: N.intl.string(N.t["4sILBU"]) })
            : t === h.qN.FAILURE
              ? (0, n.jsx)(a.p, { messageType: a.Y.ERROR, children: N.intl.string(N.t["40R63o"]) })
              : (0, n.jsx)(a.p, { messageType: a.Y.INFO, children: N.intl.string(N.t["nhhy/R"]) });
}
function R() {
    return (0, n.jsxs)("div", { className: g.$$, children: [(0, n.jsx)(E, {}), (0, n.jsx)(u.A, {})] });
}
function j() {
    return (
        null == (0, r.bG)([d.default], () => d.default.getSuspendedUserToken()) &&
            (0, c.pX)(p.BVt.LOGIN, { source: "suspended_user_safety_hub_page" }),
        (0, n.jsxs)("div", { className: g.kL, children: [(0, n.jsx)(x, {}), (0, n.jsx)(R, {})] })
    );
}
