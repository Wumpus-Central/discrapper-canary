i.d(e, { default: () => w }), i(388685);
var n = i(951288),
    r = i(647438),
    c = i(442837),
    s = i(312568),
    o = i(257465),
    a = i(213734),
    l = i(37148),
    p = i(481060),
    d = i(728345),
    u = i(812206),
    _ = i(886176),
    x = i(572004),
    f = i(504211),
    h = i(283836),
    S = i(507608),
    g = i(533159),
    m = i(981631),
    b = i(979007),
    j = i(388032),
    v = i(465103),
    C = i(525751);
function w(t) {
    let { onClose: e, transitionState: i, appId: w, guildId: Z } = t,
        y = (0, c.e7)([u.Z], () => u.Z.getApplication(w), [w]),
        [O, P] = r.useState(() => (u.Z.isFetchingApplication(w) ? { status: 1 } : { status: 0 }));
    r.useEffect(() => {
        0 === O.status &&
            (P({ status: 1 }),
            d.ZP.fetchApplication(w)
                .then(() => {
                    P({ status: 2 });
                })
                .catch((t) => {
                    P({
                        status: 3,
                        error: t.message,
                    });
                }));
    }, [w, O.status]);
    let { subscriptions: T, otps: A } = (0, h.q)(w);
    if (null == y) return null;
    let I = j.intl.formatToPlainString(j.t.XDRjs7, { appName: y.name }),
        U = (0, n.jsx)("div", {
            className: v.icon,
            children: (0, n.jsx)(_.Z, {}),
        }),
        k = x.wS
            ? (0, n.jsx)(p.hU, {
                  "aria-label": j.intl.string(j.t.WqhZsr),
                  icon: () => (0, n.jsx)(p.xPt, { size: "sm" }),
                  onClick: () => {
                      let t = ""
                          .concat(location.protocol, "//")
                          .concat(location.host)
                          .concat(m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(w, b.GlobalDiscoveryAppsSections.STORE));
                      (0, x.JG)(t, () =>
                          (0, p.showToast)((0, p.createToast)(j.intl.string(j.t["L/PwZW"]), p.ToastType.SUCCESS)),
                      ),
                          (0, f.X)(w, f.B.STORE_MODAL);
                  },
                  variant: "icon-only",
              })
            : void 0;
    return (0, n.jsxs)(o.IX, {
        transitionState: i,
        "aria-label": I,
        onClose: e,
        size: "xl",
        children: [
            (0, n.jsx)(l.x, {
                leading: U,
                title: I,
                trailing: k,
            }),
            (0, n.jsx)(s.Z, {
                children: (0, n.jsx)("main", {
                    className: C.bodyInner,
                    children: (0, n.jsx)(S.AF, {
                        app: y,
                        guildId: Z,
                        subscriptions: T,
                        otps: A,
                    }),
                }),
            }),
            (0, n.jsx)(a.m, {
                children: (0, n.jsx)(p.Text, {
                    variant: "text-md/normal",
                    children:
                        null != y.termsOfServiceUrl || null != y.privacyPolicyUrl
                            ? (0, n.jsx)(g.Z, {
                                  termsOfServiceUrl: y.termsOfServiceUrl,
                                  privacyPolicyUrl: y.privacyPolicyUrl,
                              })
                            : j.intl.string(j.t["3ZY+0N"]),
                }),
            }),
        ],
    });
}
