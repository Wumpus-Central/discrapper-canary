t.r(n), t.d(n, { default: () => _ });
var s = t(54381);
t(473749);
var a = t(442837),
    r = t(481060),
    i = t(703656),
    l = t(314897),
    c = t(236289),
    o = t(518560),
    d = t(800530),
    u = t(981631),
    g = t(388032),
    h = t(468050);
function p() {
    return (0, s.jsxs)(r.qXd, {
        color: r.DM8.DANGER,
        className: h.nagbar,
        children: [
            (0, s.jsx)(r.Text, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: g.intl.string(g.t["MG+Bzb"]),
            }),
            (0, s.jsx)(r.u3T, {
                noticeType: u.kVF.SAFETY_SUSPENDED_USER_WARNING,
                href: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, s.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "always-white",
                    children: g.intl.string(g.t["9JceHN"]),
                }),
            }),
        ],
    });
}
function E(e) {
    let {} = e,
        n = (0, a.e7)([c.Z], () => c.Z.getAgeCheckStatus());
    return n === d.oE.NONE
        ? null
        : n === d.oE.SUCCESS
          ? (0, s.jsx)(r.Wn, {
                messageType: r.QYI.POSITIVE,
                children: g.intl.format(g.t.maZDL6, { login: "/login" }),
            })
          : n === d.oE.ERROR
            ? (0, s.jsx)(r.Wn, {
                  messageType: r.QYI.ERROR,
                  children: g.intl.string(g.t["4sILBU"]),
              })
            : n === d.oE.FAILURE
              ? (0, s.jsx)(r.Wn, {
                    messageType: r.QYI.ERROR,
                    children: g.intl.string(g.t["40R63o"]),
                })
              : (0, s.jsx)(r.Wn, {
                    messageType: r.QYI.INFO,
                    children: g.intl.string(g.t["nhhy/R"]),
                });
}
function x() {
    return (0, s.jsxs)("div", {
        className: h.pageContainer,
        children: [(0, s.jsx)(E, {}), (0, s.jsx)(o.Z, {})],
    });
}
function _() {
    return (
        null == (0, a.e7)([l.default], () => l.default.getSuspendedUserToken()) &&
            (0, i.uL)(u.Z5c.LOGIN, { source: "suspended_user_safety_hub_page" }),
        (0, s.jsxs)("div", {
            className: h.container,
            children: [(0, s.jsx)(p, {}), (0, s.jsx)(x, {})],
        })
    );
}
