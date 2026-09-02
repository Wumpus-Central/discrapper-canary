t.r(s), t.d(s, { default: () => y });
var n = t(477900);
t(582128);
var i = t(17928),
    r = t(417098),
    l = t(834730),
    a = t(512950),
    c = t(821609),
    o = t(830215),
    d = t(976860),
    E = t(280450),
    p = t(67521),
    g = t(207913),
    N = t(855267),
    R = t(239093),
    x = t(652215),
    h = t(375708),
    u = t(400514);
function I() {
    return (0, n.jsxs)(r.$T, {
        color: r.Hv.DANGER,
        className: u.aL,
        children: [
            (0, n.jsx)(l.E, {
                tag: "span",
                color: "text-overlay-light",
                variant: "text-md/normal",
                children: h.intl.string(h.t["MG+Bzb"]),
            }),
            (0, n.jsx)(r.eC, {
                noticeType: x.kqX.SAFETY_SUSPENDED_USER_WARNING,
                href: R.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, n.jsx)(l.E, {
                    variant: "text-md/normal",
                    color: "text-overlay-light",
                    children: h.intl.string(h.t["9JceHN"]),
                }),
            }),
        ],
    });
}
function j() {
    o.A.closeSuspendedUser();
}
function T() {
    p.A.openV2("");
}
function m(e) {
    let {} = e,
        s = (0, i.bG)([g.A], () => g.A.getAgeCheckStatus()),
        t = (0, i.bG)([g.A], () => g.A.getIsExpressiveModalV2Enabled());
    return s === R.qN.NONE
        ? null
        : s === R.qN.SUCCESS
          ? (0, n.jsx)(a.p, { messageType: a.Y.POSITIVE, children: h.intl.format(h.t.maZDL6, { login: "/login" }) })
          : s === R.qN.VERIFIED
            ? (0, n.jsx)(a.p, {
                  messageType: a.Y.POSITIVE,
                  action: (0, n.jsx)(c.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: h.intl.string(h.t["2jvQ6K"]),
                      onClick: j,
                  }),
                  children: h.intl.string(h.t["2Qe65J"]),
              })
            : s === R.qN.VERIFIED_OTHER_VIOLATIONS_REMAIN
              ? (0, n.jsx)(a.p, { messageType: a.Y.POSITIVE, children: h.intl.string(h.t.Ie7p1Q) })
              : s === R.qN.ERROR
                ? (0, n.jsx)(a.p, { messageType: a.Y.ERROR, children: h.intl.string(h.t["4sILBU"]) })
                : s === R.qN.FAILURE
                  ? (0, n.jsx)(a.p, { messageType: a.Y.ERROR, children: h.intl.string(h.t["40R63o"]) })
                  : s === R.qN.UNDERAGE
                    ? (0, n.jsx)(a.p, {
                          messageType: a.Y.ERROR,
                          action: (0, n.jsx)(c.$, {
                              variant: "overlay-secondary",
                              size: "sm",
                              text: h.intl.string(h.t.IcA9iD),
                              onClick: T,
                          }),
                          children: h.intl.string(h.t.dqbMbn),
                      })
                    : s === R.qN.UNDERAGE_MANUAL_REVIEW
                      ? (0, n.jsx)(a.p, {
                            messageType: a.Y.ERROR,
                            action: (0, n.jsx)(c.$, {
                                variant: "overlay-secondary",
                                size: "sm",
                                text: h.intl.string(h.t.NkTGsC),
                                onClick: T,
                            }),
                            children: h.intl.string(h.t.VTgFYh),
                        })
                      : (0, n.jsx)(a.p, {
                            messageType: a.Y.INFO,
                            children: h.intl.string(t ? h.t.PU8nMu : h.t["nhhy/R"]),
                        });
}
function A() {
    return (0, n.jsxs)("div", { className: u.$$, children: [(0, n.jsx)(m, {}), (0, n.jsx)(N.A, {})] });
}
function y() {
    return (
        null == (0, i.bG)([E.default], () => E.default.getSuspendedUserToken()) &&
            (0, d.pX)(x.BVt.LOGIN, { source: "suspended_user_safety_hub_page" }),
        (0, n.jsxs)("div", { className: u.kL, children: [(0, n.jsx)(I, {}), (0, n.jsx)(A, {})] })
    );
}
