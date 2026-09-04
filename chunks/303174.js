n.r(t), n.d(t, { default: () => S });
var s = n(477900);
n(582128);
var i = n(17928),
    r = n(417098),
    l = n(834730),
    a = n(512950),
    c = n(821609),
    d = n(830215),
    o = n(976860),
    E = n(280450),
    g = n(67521),
    p = n(207913),
    N = n(855267),
    R = n(239093),
    u = n(652215),
    x = n(375708),
    h = n(400514);
function I() {
    return (0, i.bG)([p.A], () => p.A.getAgeCheckStatus()) === R.qN.VERIFIED
        ? null
        : (0, s.jsxs)(r.$T, {
              color: r.Hv.DANGER,
              className: h.aL,
              children: [
                  (0, s.jsx)(l.E, {
                      tag: "span",
                      color: "text-overlay-light",
                      variant: "text-md/normal",
                      children: x.intl.string(x.t["MG+Bzb"]),
                  }),
                  (0, s.jsx)(r.eC, {
                      noticeType: u.kqX.SAFETY_SUSPENDED_USER_WARNING,
                      href: R.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                      children: (0, s.jsx)(l.E, {
                          variant: "text-md/normal",
                          color: "text-overlay-light",
                          children: x.intl.string(x.t["9JceHN"]),
                      }),
                  }),
              ],
          });
}
function A() {
    d.A.closeSuspendedUser();
}
function j() {
    g.A.openV2("");
}
function T(e) {
    let {} = e,
        t = (0, i.bG)([p.A], () => p.A.getAgeCheckStatus()),
        n = (0, i.bG)([p.A], () => p.A.getIsExpressiveModalV2Enabled());
    return t === R.qN.NONE
        ? null
        : t === R.qN.SUCCESS
          ? (0, s.jsx)(a.p, { messageType: a.Y.POSITIVE, children: x.intl.format(x.t.maZDL6, { login: "/login" }) })
          : t === R.qN.VERIFIED
            ? (0, s.jsx)(a.p, {
                  messageType: a.Y.POSITIVE,
                  iconAlign: "center",
                  action: (0, s.jsx)(c.$, {
                      variant: "secondary",
                      size: "sm",
                      text: x.intl.string(x.t["2jvQ6K"]),
                      onClick: A,
                  }),
                  children: x.intl.string(x.t["2Qe65J"]),
              })
            : t === R.qN.VERIFIED_OTHER_VIOLATIONS_REMAIN
              ? (0, s.jsx)(a.p, { messageType: a.Y.POSITIVE, children: x.intl.string(x.t.Ie7p1Q) })
              : t === R.qN.ERROR
                ? (0, s.jsx)(a.p, { messageType: a.Y.ERROR, children: x.intl.string(x.t["4sILBU"]) })
                : t === R.qN.FAILURE
                  ? (0, s.jsx)(a.p, { messageType: a.Y.ERROR, children: x.intl.string(x.t["40R63o"]) })
                  : t === R.qN.UNDERAGE
                    ? (0, s.jsx)(a.p, {
                          messageType: a.Y.ERROR,
                          action: (0, s.jsx)(c.$, {
                              variant: "secondary",
                              size: "sm",
                              text: x.intl.string(x.t.IcA9iD),
                              onClick: j,
                          }),
                          children: x.intl.string(x.t.dqbMbn),
                      })
                    : t === R.qN.UNDERAGE_MANUAL_REVIEW
                      ? (0, s.jsx)(a.p, {
                            messageType: a.Y.ERROR,
                            action: (0, s.jsx)(c.$, {
                                variant: "secondary",
                                size: "sm",
                                text: x.intl.string(x.t.NkTGsC),
                                onClick: j,
                            }),
                            children: x.intl.string(x.t.VTgFYh),
                        })
                      : (0, s.jsx)(a.p, {
                            messageType: a.Y.INFO,
                            children: x.intl.string(n ? x.t.PU8nMu : x.t["nhhy/R"]),
                        });
}
function m() {
    return (0, s.jsxs)("div", { className: h.$$, children: [(0, s.jsx)(T, {}), (0, s.jsx)(N.A, {})] });
}
function S() {
    return (
        null == (0, i.bG)([E.default], () => E.default.getSuspendedUserToken()) &&
            (0, o.pX)(u.BVt.LOGIN, { source: "suspended_user_safety_hub_page" }),
        (0, s.jsxs)("div", { className: h.kL, children: [(0, s.jsx)(I, {}), (0, s.jsx)(m, {})] })
    );
}
