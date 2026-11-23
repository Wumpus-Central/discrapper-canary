(s.r(e), s.d(e, { default: () => L }));
var n = s(477900),
    r = s(582128),
    i = s(855986),
    l = s(417098),
    a = s(834730),
    o = s(683071),
    c = s(192308),
    u = s(73153),
    E = s(830215),
    g = s(277861),
    d = s(976860),
    N = s(46653),
    h = s(67521),
    x = s(207913),
    p = s(462714),
    f = s(482876),
    j = s(37380),
    _ = s(239093),
    S = s(652215),
    A = s(792996),
    m = s(400514);
function I() {
    return (0, i.bG)([x.A], () => x.A.getAgeCheckStatus()) === _.qN.VERIFIED
        ? null
        : (0, n.jsxs)(l.$T, {
              color: l.Hv.DANGER,
              className: m.aL,
              children: [
                  (0, n.jsx)(a.E, {
                      tag: "span",
                      color: "text-overlay-light",
                      variant: "body-md/normal",
                      children: A.intl.string(A.t["MG+Bzb"]),
                  }),
                  (0, n.jsx)(l.eC, {
                      noticeType: S.kqX.SAFETY_SUSPENDED_USER_WARNING,
                      href: _.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                      children: (0, n.jsx)(a.E, {
                          variant: "body-md/normal",
                          color: "text-overlay-light",
                          children: A.intl.string(A.t["9JceHN"]),
                      }),
                  }),
              ],
          });
}
function R() {
    E.A.closeSuspendedUser();
}
function b() {
    h.A.openV2("");
}
function D() {
    (0, g.Vq)();
}
function y() {
    return (0, n.jsx)(o.w, {
        type: "critical",
        message: A.intl.string(A.t.dqbMbn),
        role: "alert",
        action: { text: A.intl.string(A.t.IcA9iD), onClick: b },
    });
}
function U() {
    let t = (0, i.bG)([x.A], () => x.A.getIsExpressiveModalV2Enabled());
    return (0, n.jsx)(o.w, { type: "info", message: A.intl.string(t ? A.t.PU8nMu : A.t["nhhy/R"]), role: "status" });
}
function k() {
    let { methods: t, loading: e } = (function () {
        let [t, e] = r.useState({ methods: null, loading: !0 });
        return (
            r.useEffect(() => {
                let t = !1;
                return (
                    (0, f.j)()
                        .then(
                            (t) => (
                                u.h.dispatch({
                                    type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
                                    methods: t.methods,
                                    footerMessage: t.footerMessage,
                                    outageBannerMessage: t.outageBannerMessage,
                                }),
                                (0, p.Y)(t.methods)
                            ),
                        )
                        .then((s) => {
                            t || e({ methods: s, loading: !1 });
                        })
                        .catch(() => {
                            t || e({ methods: null, loading: !1 });
                        }),
                    () => {
                        t = !0;
                    }
                );
            }, []),
            t
        );
    })();
    return e
        ? (0, n.jsx)(U, {})
        : null == t || 0 === t.length
          ? (0, n.jsx)(o.w, {
                type: "critical",
                message: A.intl.string(A.t.VTgFYh),
                role: "alert",
                action: { text: A.intl.string(A.t.NkTGsC), onClick: D },
            })
          : (0, n.jsx)(y, {});
}
function C() {
    return (0, n.jsx)(o.w, {
        type: "critical",
        message: A.intl.string(A.t.rL1kLX),
        role: "alert",
        action: { text: A.intl.string(A.t["SrY+jH"]), onClick: R },
    });
}
function T(t) {
    let {} = t,
        e = (0, i.bG)([x.A], () => x.A.getAgeCheckStatus());
    return e === _.qN.NONE
        ? null
        : e === _.qN.SUCCESS
          ? (0, n.jsx)(o.w, {
                type: "success",
                message: A.intl.format(A.t.maZDL6, { login: "/login" }),
                role: "status",
            })
          : e === _.qN.VERIFIED
            ? (0, n.jsx)(o.w, {
                  type: "success",
                  message: A.intl.string(A.t["2Qe65J"]),
                  role: "status",
                  action: { text: A.intl.string(A.t["2jvQ6K"]), onClick: R },
              })
            : e === _.qN.VERIFIED_OTHER_VIOLATIONS_REMAIN
              ? (0, n.jsx)(o.w, { type: "success", message: A.intl.string(A.t.Ie7p1Q), role: "status" })
              : e === _.qN.ERROR
                ? (0, n.jsx)(o.w, { type: "critical", message: A.intl.string(A.t["4sILBU"]), role: "alert" })
                : e === _.qN.FAILURE
                  ? (0, n.jsx)(o.w, { type: "critical", message: A.intl.string(A.t["40R63o"]), role: "alert" })
                  : e === _.qN.UNDERAGE
                    ? (0, n.jsx)(y, {})
                    : e === _.qN.UNDERAGE_MANUAL_REVIEW
                      ? (0, n.jsx)(k, {})
                      : (0, n.jsx)(U, {});
}
function G() {
    let t = (0, i.bG)([N.default], () => N.default.isSuspendedUserTokenExpired());
    return (0, n.jsxs)("div", {
        className: m.$$,
        children: [t ? (0, n.jsx)(C, {}) : (0, n.jsx)(T, {}), (0, n.jsx)(j.A, {})],
    });
}
function L() {
    let t = (0, i.bG)([N.default], () => N.default.getSuspendedUserToken());
    return (
        r.useEffect(() => {
            function t() {
                (0, c.s7)();
            }
            return (
                u.h.subscribe("SUSPENDED_USER_TOKEN_EXPIRED", t),
                () => {
                    u.h.unsubscribe("SUSPENDED_USER_TOKEN_EXPIRED", t);
                }
            );
        }, []),
        null == t && (0, d.pX)(S.BVt.LOGIN, { source: "suspended_user_safety_hub_page" }),
        (0, n.jsxs)("div", { className: m.kL, children: [(0, n.jsx)(I, {}), (0, n.jsx)(G, {})] })
    );
}
