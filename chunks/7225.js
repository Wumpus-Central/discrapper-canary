s.d(e, { default: () => N }), s(388685);
var r = s(951288),
    a = s(647438),
    i = s(541822),
    o = s(442837),
    n = s(755721),
    c = s(481060),
    l = s(728345),
    p = s(812206),
    d = s(600164),
    u = s(886176),
    _ = s(572004),
    f = s(504211),
    m = s(283836),
    x = s(507608),
    h = s(533159),
    S = s(981631),
    g = s(979007),
    j = s(388032),
    C = s(465103);
function N(t) {
    let { onClose: e, transitionState: s, appId: N, guildId: b } = t,
        v = (0, o.e7)([p.Z], () => p.Z.getApplication(N), [N]),
        [A, T] = a.useState(() => (p.Z.isFetchingApplication(N) ? { status: 1 } : { status: 0 }));
    a.useEffect(() => {
        0 === A.status &&
            (T({ status: 1 }),
            l.ZP.fetchApplication(N)
                .then(() => {
                    T({ status: 2 });
                })
                .catch((t) => {
                    T({
                        status: 3,
                        error: t.message,
                    });
                }));
    }, [N, A.status]);
    let { subscriptions: w, otps: P } = (0, m.q)(N);
    if (null == v) return null;
    let Z = j.intl.formatToPlainString(j.t.XDRjs7, { appName: v.name });
    return (0, r.jsxs)(c.Y0X, {
        transitionState: s,
        "aria-label": Z,
        size: c.CgR.DYNAMIC,
        className: C.modal,
        parentComponent: "AppStorefrontModal",
        children: [
            (0, r.jsxs)(c.xBx, {
                className: C.modalHeader,
                children: [
                    (0, r.jsxs)("div", {
                        className: C.modalTitle,
                        children: [
                            (0, r.jsx)(u.Z, {}),
                            (0, r.jsx)(c.X6q, {
                                variant: "heading-md/semibold",
                                children: Z,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: C.modalHeaderLinks,
                        children: [
                            _.wS &&
                                (0, r.jsx)(n.zx, {
                                    look: n.iL.BLANK,
                                    size: n.Ph.ICON,
                                    color: n.Tt.TRANSPARENT,
                                    "aria-label": j.intl.string(j.t.WqhZsr),
                                    onClick: () => {
                                        let t = ""
                                            .concat(location.protocol, "//")
                                            .concat(location.host)
                                            .concat(
                                                S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                                    N,
                                                    g.GlobalDiscoveryAppsSections.STORE,
                                                ),
                                            );
                                        (0, _.JG)(t, () =>
                                            (0, c.showToast)(
                                                (0, c.createToast)(j.intl.string(j.t["L/PwZW"]), c.ToastType.SUCCESS),
                                            ),
                                        ),
                                            (0, f.X)(N, f.B.STORE_MODAL);
                                    },
                                    children: (0, r.jsx)(c.xPt, { size: "sm" }),
                                }),
                            (0, r.jsx)(c.olH, {
                                onClick: e,
                                className: C.modalCloseBtn,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: C.scrollerWrapper,
                children: (0, r.jsx)(i.Z, {
                    className: C.scroller,
                    children: (0, r.jsx)(x.AF, {
                        app: v,
                        guildId: b,
                        subscriptions: w,
                        otps: P,
                    }),
                }),
            }),
            (0, r.jsx)(c.mzw, {
                justify: d.Z.Justify.END,
                children: (0, r.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children:
                        null != v.termsOfServiceUrl || null != v.privacyPolicyUrl
                            ? (0, r.jsx)(h.Z, {
                                  termsOfServiceUrl: v.termsOfServiceUrl,
                                  privacyPolicyUrl: v.privacyPolicyUrl,
                              })
                            : j.intl.string(j.t["3ZY+0N"]),
                }),
            }),
        ],
    });
}
