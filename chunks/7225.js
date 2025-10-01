i.d(e, { default: () => v }), i(388685);
var n = i(951288),
    r = i(647438),
    c = i(793030),
    s = i(442837),
    o = i(312568),
    a = i(481060),
    l = i(728345),
    p = i(812206),
    d = i(886176),
    u = i(572004),
    _ = i(504211),
    x = i(283836),
    f = i(507608),
    h = i(533159),
    S = i(981631),
    g = i(979007),
    m = i(388032),
    b = i(465103),
    j = i(325380);
function v(t) {
    let { onClose: e, transitionState: i, appId: v, guildId: w } = t,
        C = (0, s.e7)([p.Z], () => p.Z.getApplication(v), [v]),
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
    let T = m.intl.formatToPlainString(m.t.XDRjs7, { appName: C.name }),
        A = (0, n.jsx)("div", {
            className: b.icon,
            children: (0, n.jsx)(d.Z, {}),
        }),
        I = u.wS
            ? (0, n.jsx)(a.hU, {
                  "aria-label": m.intl.string(m.t.WqhZsr),
                  icon: () => (0, n.jsx)(a.xPt, { size: "sm" }),
                  onClick: () => {
                      let t = ""
                          .concat(location.protocol, "//")
                          .concat(location.host)
                          .concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(v, g.GlobalDiscoveryAppsSections.STORE));
                      (0, u.JG)(t, () =>
                          (0, a.showToast)((0, a.createToast)(m.intl.string(m.t["L/PwZW"]), a.ToastType.SUCCESS)),
                      ),
                          (0, _.X)(v, _.B.STORE_MODAL);
                  },
                  variant: "icon-only",
              })
            : void 0;
    return (0, n.jsxs)(c.IX, {
        transitionState: i,
        "aria-label": T,
        onClose: e,
        size: "xl",
        children: [
            (0, n.jsx)(c.xBx, {
                leading: A,
                title: T,
                trailing: I,
            }),
            (0, n.jsx)(o.Z, {
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
            (0, n.jsx)(c.mzw, {
                children: (0, n.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children:
                        null != C.termsOfServiceUrl || null != C.privacyPolicyUrl
                            ? (0, n.jsx)(h.Z, {
                                  termsOfServiceUrl: C.termsOfServiceUrl,
                                  privacyPolicyUrl: C.privacyPolicyUrl,
                              })
                            : m.intl.string(m.t["3ZY+0N"]),
                }),
            }),
        ],
    });
}
