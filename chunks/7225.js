i.d(e, { default: () => v }), i(388685);
var n = i(54381),
    r = i(473749),
    a = i(374481),
    s = i(793030),
    o = i(442837),
    c = i(481060),
    l = i(728345),
    p = i(812206),
    u = i(886176),
    d = i(572004),
    _ = i(504211),
    x = i(283836),
    f = i(507608),
    h = i(533159),
    S = i(981631),
    g = i(979007),
    m = i(388032),
    b = i(58954),
    j = i(815847);
function v(t) {
    let { onClose: e, transitionState: i, appId: v, guildId: w } = t,
        C = (0, o.e7)([p.Z], () => p.Z.getApplication(v), [v]),
        [Z, y] = r.useState(() => (p.Z.isFetchingApplication(v) ? { status: 1 } : { status: 0 }));
    r.useEffect(() => {
        0 === Z.status &&
            (y({ status: 1 }),
            l.ZP.fetchApplication(v)
                .then(() => {
                    y({ status: 2 });
                })
                .catch((t) => {
                    y({
                        status: 3,
                        error: t.message,
                    });
                }));
    }, [v, Z.status]);
    let { subscriptions: O, otps: P } = (0, x.q)(v);
    if (null == C) return null;
    let T = m.intl.formatToPlainString(m.t.XDRjs5, { appName: C.name }),
        A = (0, n.jsx)("div", {
            className: b.icon,
            children: (0, n.jsx)(u.Z, {}),
        }),
        I = d.wS
            ? (0, n.jsx)(c.hU, {
                  "aria-label": m.intl.string(m.t.WqhZss),
                  icon: () => (0, n.jsx)(c.xPt, { size: "sm" }),
                  onClick: () => {
                      let t = ""
                          .concat(location.protocol, "//")
                          .concat(location.host)
                          .concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(v, g.GlobalDiscoveryAppsSections.STORE));
                      (0, d.JG)(t, () =>
                          (0, c.showToast)((0, c.createToast)(m.intl.string(m.t["L/PwZf"]), c.ToastType.SUCCESS)),
                      ),
                          (0, _.X)(v, _.B.STORE_MODAL);
                  },
                  variant: "icon-only",
              })
            : void 0;
    return (0, n.jsxs)(s.IX, {
        transitionState: i,
        "aria-label": T,
        onClose: e,
        size: "xxl",
        children: [
            (0, n.jsx)(s.xBx, {
                leading: A,
                title: T,
                trailing: I,
            }),
            (0, n.jsx)(a.Z, {
                children: (0, n.jsx)("main", {
                    className: j.bodyInner,
                    children: (0, n.jsx)(f.AF, {
                        app: C,
                        guildId: w,
                        subscriptions: O,
                        otps: P,
                    }),
                }),
            }),
            (0, n.jsx)(s.mzw, {
                children: (0, n.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children:
                        null != C.termsOfServiceUrl || null != C.privacyPolicyUrl
                            ? (0, n.jsx)(h.Z, {
                                  termsOfServiceUrl: C.termsOfServiceUrl,
                                  privacyPolicyUrl: C.privacyPolicyUrl,
                              })
                            : m.intl.string(m.t["3ZY+0D"]),
                }),
            }),
        ],
    });
}
