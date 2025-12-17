t.r(n), t.d(n, { default: () => R });
var a = t(54381);
t(473749);
var s = t(442837),
    r = t(481060),
    i = t(703656),
    d = t(314897),
    l = t(236289),
    c = t(518560),
    o = t(800530),
    u = t(981631),
    g = t(388032),
    h = t(367337);
function p() {
    return (0, a.jsxs)(r.qXd, {
        color: r.DM8.DANGER,
        className: h.nagbar,
        children: [
            (0, a.jsx)(r.Text, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: g.intl.string(g.t["MG+Bzb"]),
            }),
            (0, a.jsx)(r.u3T, {
                noticeType: u.kVF.SAFETY_SUSPENDED_USER_WARNING,
                href: o.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, a.jsx)(r.Text, {
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
        n = (0, s.e7)([l.Z], () => l.Z.getAgeCheckStatus());
    return n === o.oE.NONE
        ? null
        : n === o.oE.SUCCESS
          ? (0, a.jsx)(r.Wn, {
                messageType: r.QYI.POSITIVE,
                children: g.intl.format(g.t.maZDL6, { login: "/login" }),
            })
          : n === o.oE.ERROR
            ? (0, a.jsx)(r.Wn, {
                  messageType: r.QYI.ERROR,
                  children: g.intl.string(g.t["4sILBU"]),
              })
            : n === o.oE.FAILURE
              ? (0, a.jsx)(r.Wn, {
                    messageType: r.QYI.ERROR,
                    children: g.intl.string(g.t["40R63o"]),
                })
              : (0, a.jsx)(r.Wn, {
                    messageType: r.QYI.INFO,
                    children: g.intl.string(g.t["nhhy/R"]),
                });
}
function x() {
    return (0, a.jsxs)("div", {
        className: h.pageContainer,
        children: [(0, a.jsx)(E, {}), (0, a.jsx)(c.Z, {})],
    });
}
function R() {
    return (
        null == (0, s.e7)([d.default], () => d.default.getSuspendedUserToken()) &&
            (0, i.uL)(u.Z5c.LOGIN, { source: "suspended_user_safety_hub_page" }),
        (0, a.jsxs)("div", {
            className: h.container,
            children: [(0, a.jsx)(p, {}), (0, a.jsx)(x, {})],
        })
    );
}
