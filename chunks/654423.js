(s.r(e), s.d(e, { default: () => M }));
var n = s(477900),
    l = s(582128),
    i = s(17928),
    r = s(417098),
    a = s(834730),
    o = s(683071),
    c = s(830215),
    u = s(277861),
    g = s(976860),
    d = s(280450),
    E = s(67521),
    h = s(207913),
    x = s(73153),
    N = s(462714),
    p = s(482876),
    A = s(855267),
    j = s(239093),
    m = s(652215),
    f = s(660183),
    I = s(400514);
function _() {
    return (0, i.bG)([h.A], () => h.A.getAgeCheckStatus()) === j.qN.VERIFIED
        ? null
        : (0, n.jsxs)(r.$T, {
              color: r.Hv.DANGER,
              className: I.aL,
              children: [
                  (0, n.jsx)(a.E, {
                      tag: "span",
                      color: "text-overlay-light",
                      variant: "text-md/normal",
                      children: f.intl.string(f.t["MG+Bzb"]),
                  }),
                  (0, n.jsx)(r.eC, {
                      noticeType: m.kqX.SAFETY_SUSPENDED_USER_WARNING,
                      href: j.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                      children: (0, n.jsx)(a.E, {
                          variant: "text-md/normal",
                          color: "text-overlay-light",
                          children: f.intl.string(f.t["9JceHN"]),
                      }),
                  }),
              ],
          });
}
function R() {
    c.A.closeSuspendedUser();
}
function S() {
    E.A.openV2("");
}
function C() {
    (0, u.Vq)();
}
function y() {
    return (0, n.jsx)(o.w, {
        type: "critical",
        message: f.intl.string(f.t.dqbMbn),
        role: "alert",
        action: { text: f.intl.string(f.t.IcA9iD), onClick: S },
    });
}
function k() {
    let t = (0, i.bG)([h.A], () => h.A.getIsExpressiveModalV2Enabled());
    return (0, n.jsx)(o.w, { type: "info", message: f.intl.string(t ? f.t.PU8nMu : f.t["nhhy/R"]), role: "status" });
}
function G() {
    let { methods: t, loading: e } = (function () {
        let [t, e] = l.useState({ methods: null, loading: !0 });
        return (
            l.useEffect(() => {
                let t = !1;
                return (
                    (0, p.j)()
                        .then(
                            (t) => (
                                x.h.dispatch({
                                    type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
                                    methods: t.methods,
                                    footerMessage: t.footerMessage,
                                    outageBannerMessage: t.outageBannerMessage,
                                }),
                                (0, N.Y)(t.methods)
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
        ? (0, n.jsx)(k, {})
        : null == t || 0 === t.length
          ? (0, n.jsx)(o.w, {
                type: "critical",
                message: f.intl.string(f.t.VTgFYh),
                role: "alert",
                action: { text: f.intl.string(f.t.NkTGsC), onClick: C },
            })
          : (0, n.jsx)(y, {});
}
function q(t) {
    let {} = t,
        e = (0, i.bG)([h.A], () => h.A.getAgeCheckStatus());
    return e === j.qN.NONE
        ? null
        : e === j.qN.SUCCESS
          ? (0, n.jsx)(o.w, {
                type: "success",
                message: f.intl.format(f.t.maZDL6, { login: "/login" }),
                role: "status",
            })
          : e === j.qN.VERIFIED
            ? (0, n.jsx)(o.w, {
                  type: "success",
                  message: f.intl.string(f.t["2Qe65J"]),
                  role: "status",
                  action: { text: f.intl.string(f.t["2jvQ6K"]), onClick: R },
                  iconAlign: "center",
              })
            : e === j.qN.VERIFIED_OTHER_VIOLATIONS_REMAIN
              ? (0, n.jsx)(o.w, { type: "success", message: f.intl.string(f.t.Ie7p1Q), role: "status" })
              : e === j.qN.ERROR
                ? (0, n.jsx)(o.w, { type: "critical", message: f.intl.string(f.t["4sILBU"]), role: "alert" })
                : e === j.qN.FAILURE
                  ? (0, n.jsx)(o.w, { type: "critical", message: f.intl.string(f.t["40R63o"]), role: "alert" })
                  : e === j.qN.UNDERAGE
                    ? (0, n.jsx)(y, {})
                    : e === j.qN.UNDERAGE_MANUAL_REVIEW
                      ? (0, n.jsx)(G, {})
                      : (0, n.jsx)(k, {});
}
function D() {
    return (0, n.jsxs)("div", { className: I.$$, children: [(0, n.jsx)(q, {}), (0, n.jsx)(A.A, {})] });
}
function M() {
    return (
        null == (0, i.bG)([d.default], () => d.default.getSuspendedUserToken()) &&
            (0, g.pX)(m.BVt.LOGIN, { source: "suspended_user_safety_hub_page" }),
        (0, n.jsxs)("div", { className: I.kL, children: [(0, n.jsx)(_, {}), (0, n.jsx)(D, {})] })
    );
}
