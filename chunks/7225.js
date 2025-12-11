c.d(t, { default: () => v }), c(388685);
var a = c(54381),
    i = c(473749),
    n = c(374481),
    r = c(793030),
    s = c(442837),
    o = c(481060),
    l = c(728345),
    d = c(812206),
    p = c(886176),
    u = c(572004),
    f = c(504211),
    b = c(283836),
    x = c(507608),
    h = c(533159),
    S = c(981631),
    _ = c(979007),
    g = c(388032),
    m = c(426931),
    j = c(51766);
function v(e) {
    let { onClose: t, transitionState: c, appId: v, guildId: w } = e,
        C = (0, s.e7)([d.Z], () => d.Z.getApplication(v), [v]),
        [Z, y] = i.useState(() => (d.Z.isFetchingApplication(v) ? { status: 1 } : { status: 0 }));
    i.useEffect(() => {
        0 === Z.status &&
            (y({ status: 1 }),
            l.ZP.fetchApplication(v)
                .then(() => {
                    y({ status: 2 });
                })
                .catch((e) => {
                    y({
                        status: 3,
                        error: e.message,
                    });
                }));
    }, [v, Z.status]);
    let { subscriptions: O, otps: P } = (0, b.q)(v);
    if (null == C) return null;
    let T = g.intl.formatToPlainString(g.t.XDRjs5, { appName: C.name }),
        A = (0, a.jsx)("div", {
            className: m.icon,
            children: (0, a.jsx)(p.Z, {}),
        }),
        I = u.wS
            ? (0, a.jsx)(o.hU, {
                  "aria-label": g.intl.string(g.t.WqhZss),
                  icon: () => (0, a.jsx)(o.xPt, { size: "sm" }),
                  onClick: () => {
                      let e = ""
                          .concat(location.protocol, "//")
                          .concat(location.host)
                          .concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(v, _.GlobalDiscoveryAppsSections.STORE));
                      (0, u.JG)(e, () =>
                          (0, o.showToast)((0, o.createToast)(g.intl.string(g.t["L/PwZf"]), o.ToastType.SUCCESS)),
                      ),
                          (0, f.X)(v, f.B.STORE_MODAL);
                  },
                  variant: "icon-only",
              })
            : void 0;
    return (0, a.jsxs)(r.IX, {
        transitionState: c,
        "aria-label": T,
        onClose: t,
        size: "xxl",
        children: [
            (0, a.jsx)(r.xBx, {
                leading: A,
                title: T,
                trailing: I,
            }),
            (0, a.jsx)(n.Z, {
                children: (0, a.jsx)("main", {
                    className: j.bodyInner,
                    children: (0, a.jsx)(x.AF, {
                        app: C,
                        guildId: w,
                        subscriptions: O,
                        otps: P,
                    }),
                }),
            }),
            (0, a.jsx)(r.mzw, {
                children: (0, a.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children:
                        null != C.termsOfServiceUrl || null != C.privacyPolicyUrl
                            ? (0, a.jsx)(h.Z, {
                                  termsOfServiceUrl: C.termsOfServiceUrl,
                                  privacyPolicyUrl: C.privacyPolicyUrl,
                              })
                            : g.intl.string(g.t["3ZY+0D"]),
                }),
            }),
        ],
    });
}
