(n.r(t), n.d(t, { default: () => G }));
var s = n(477900),
    i = n(582128),
    r = n(17928),
    l = n(417098),
    a = n(834730),
    c = n(512950),
    o = n(821609),
    d = n(830215),
    u = n(277861),
    g = n(976860),
    E = n(280450),
    h = n(67521),
    p = n(207913),
    x = n(228366),
    N = n(462714),
    R = n(482876),
    I = n(855267),
    j = n(239093),
    A = n(652215),
    m = n(375708),
    T = n(400514);
function S() {
    return (0, r.bG)([p.A], () => p.A.getAgeCheckStatus()) === j.qN.VERIFIED
        ? null
        : (0, s.jsxs)(l.$T, {
              color: l.Hv.DANGER,
              className: T.aL,
              children: [
                  (0, s.jsx)(a.E, {
                      tag: "span",
                      color: "text-overlay-light",
                      variant: "text-md/normal",
                      children: m.intl.string(m.t["MG+Bzb"]),
                  }),
                  (0, s.jsx)(l.eC, {
                      noticeType: A.kqX.SAFETY_SUSPENDED_USER_WARNING,
                      href: j.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                      children: (0, s.jsx)(a.E, {
                          variant: "text-md/normal",
                          color: "text-overlay-light",
                          children: m.intl.string(m.t["9JceHN"]),
                      }),
                  }),
              ],
          });
}
function _() {
    d.A.closeSuspendedUser();
}
function f() {
    h.A.openV2("");
}
function y() {
    (0, u.Vq)();
}
function O() {
    return (0, s.jsx)(c.p, {
        messageType: c.Y.ERROR,
        action: (0, s.jsx)(o.$, { variant: "secondary", size: "sm", text: m.intl.string(m.t.IcA9iD), onClick: f }),
        children: m.intl.string(m.t.dqbMbn),
    });
}
function C() {
    let e = (0, r.bG)([p.A], () => p.A.getIsExpressiveModalV2Enabled());
    return (0, s.jsx)(c.p, { messageType: c.Y.INFO, children: m.intl.string(e ? m.t.PU8nMu : m.t["nhhy/R"]) });
}
function V() {
    let { methods: e, loading: t } = (function () {
        let [e, t] = i.useState({ methods: null, loading: !0 });
        return (
            i.useEffect(() => {
                let e = !1;
                return (
                    (0, R.j)()
                        .then(
                            (e) => (
                                x.h.dispatch({
                                    type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
                                    methods: e.methods,
                                    footerMessage: e.footerMessage,
                                    outageBannerMessage: e.outageBannerMessage,
                                }),
                                (0, N.Y)(e.methods)
                            ),
                        )
                        .then((n) => {
                            e || t({ methods: n, loading: !1 });
                        })
                        .catch(() => {
                            e || t({ methods: null, loading: !1 });
                        }),
                    () => {
                        e = !0;
                    }
                );
            }, []),
            e
        );
    })();
    return t
        ? (0, s.jsx)(C, {})
        : null == e || 0 === e.length
          ? (0, s.jsx)(c.p, {
                messageType: c.Y.ERROR,
                action: (0, s.jsx)(o.$, {
                    variant: "secondary",
                    size: "sm",
                    text: m.intl.string(m.t.NkTGsC),
                    onClick: y,
                }),
                children: m.intl.string(m.t.VTgFYh),
            })
          : (0, s.jsx)(O, {});
}
function k(e) {
    let {} = e,
        t = (0, r.bG)([p.A], () => p.A.getAgeCheckStatus());
    return t === j.qN.NONE
        ? null
        : t === j.qN.SUCCESS
          ? (0, s.jsx)(c.p, { messageType: c.Y.POSITIVE, children: m.intl.format(m.t.maZDL6, { login: "/login" }) })
          : t === j.qN.VERIFIED
            ? (0, s.jsx)(c.p, {
                  messageType: c.Y.POSITIVE,
                  iconAlign: "center",
                  action: (0, s.jsx)(o.$, {
                      variant: "secondary",
                      size: "sm",
                      text: m.intl.string(m.t["2jvQ6K"]),
                      onClick: _,
                  }),
                  children: m.intl.string(m.t["2Qe65J"]),
              })
            : t === j.qN.VERIFIED_OTHER_VIOLATIONS_REMAIN
              ? (0, s.jsx)(c.p, { messageType: c.Y.POSITIVE, children: m.intl.string(m.t.Ie7p1Q) })
              : t === j.qN.ERROR
                ? (0, s.jsx)(c.p, { messageType: c.Y.ERROR, children: m.intl.string(m.t["4sILBU"]) })
                : t === j.qN.FAILURE
                  ? (0, s.jsx)(c.p, { messageType: c.Y.ERROR, children: m.intl.string(m.t["40R63o"]) })
                  : t === j.qN.UNDERAGE
                    ? (0, s.jsx)(O, {})
                    : t === j.qN.UNDERAGE_MANUAL_REVIEW
                      ? (0, s.jsx)(V, {})
                      : (0, s.jsx)(C, {});
}
function v() {
    return (0, s.jsxs)("div", { className: T.$$, children: [(0, s.jsx)(k, {}), (0, s.jsx)(I.A, {})] });
}
function G() {
    return (
        null == (0, r.bG)([E.default], () => E.default.getSuspendedUserToken()) &&
            (0, g.pX)(A.BVt.LOGIN, { source: "suspended_user_safety_hub_page" }),
        (0, s.jsxs)("div", { className: T.kL, children: [(0, s.jsx)(S, {}), (0, s.jsx)(v, {})] })
    );
}
