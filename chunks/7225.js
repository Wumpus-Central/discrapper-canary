r.d(e, { default: () => v }), r(388685);
var s = r(255367),
    a = r(73800),
    i = r(541822),
    n = r(442837),
    o = r(755721),
    c = r(481060),
    l = r(728345),
    p = r(812206),
    d = r(600164),
    u = r(886176),
    _ = r(572004),
    f = r(504211),
    m = r(283836),
    x = r(507608),
    h = r(533159),
    S = r(981631),
    g = r(979007),
    j = r(388032),
    C = r(969878);
function v(t) {
    let { onClose: e, transitionState: r, appId: v, guildId: N } = t,
        b = (0, n.e7)([p.Z], () => p.Z.getApplication(v), [v]),
        [A, T] = a.useState(() => (p.Z.isFetchingApplication(v) ? { status: 1 } : { status: 0 }));
    a.useEffect(() => {
        0 === A.status &&
            (T({ status: 1 }),
            l.ZP.fetchApplication(v)
                .then(() => {
                    T({ status: 2 });
                })
                .catch((t) => {
                    T({
                        status: 3,
                        error: t.message,
                    });
                }));
    }, [v, A.status]);
    let { subscriptions: Z, otps: w } = (0, m.q)(v);
    if (null == b) return null;
    let P = j.intl.formatToPlainString(j.t.XDRjs7, { appName: b.name });
    return (0, s.jsxs)(c.Y0X, {
        transitionState: r,
        "aria-label": P,
        size: c.CgR.DYNAMIC,
        className: C.modal,
        parentComponent: "AppStorefrontModal",
        children: [
            (0, s.jsxs)(c.xBx, {
                className: C.modalHeader,
                children: [
                    (0, s.jsxs)("div", {
                        className: C.modalTitle,
                        children: [
                            (0, s.jsx)(u.Z, {}),
                            (0, s.jsx)(c.X6q, {
                                variant: "heading-md/semibold",
                                children: P,
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: C.modalHeaderLinks,
                        children: [
                            _.wS &&
                                (0, s.jsx)(o.zx, {
                                    look: o.iL.BLANK,
                                    size: o.Ph.ICON,
                                    color: o.Tt.TRANSPARENT,
                                    "aria-label": j.intl.string(j.t.WqhZsr),
                                    onClick: () => {
                                        let t = ""
                                            .concat(location.protocol, "//")
                                            .concat(location.host)
                                            .concat(
                                                S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                                    v,
                                                    g.GlobalDiscoveryAppsSections.STORE,
                                                ),
                                            );
                                        (0, _.JG)(t, () =>
                                            (0, c.showToast)(
                                                (0, c.createToast)(j.intl.string(j.t["L/PwZW"]), c.ToastType.SUCCESS),
                                            ),
                                        ),
                                            (0, f.X)(v, f.B.STORE_MODAL);
                                    },
                                    children: (0, s.jsx)(c.xPt, { size: "sm" }),
                                }),
                            (0, s.jsx)(c.olH, {
                                onClick: e,
                                className: C.modalCloseBtn,
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: C.scrollerWrapper,
                children: (0, s.jsx)(i.Z, {
                    className: C.scroller,
                    children: (0, s.jsx)(x.AF, {
                        app: b,
                        guildId: N,
                        subscriptions: Z,
                        otps: w,
                    }),
                }),
            }),
            (0, s.jsx)(c.mzw, {
                justify: d.Z.Justify.END,
                children: (0, s.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children:
                        null != b.termsOfServiceUrl || null != b.privacyPolicyUrl
                            ? (0, s.jsx)(h.Z, {
                                  termsOfServiceUrl: b.termsOfServiceUrl,
                                  privacyPolicyUrl: b.privacyPolicyUrl,
                              })
                            : j.intl.string(j.t["3ZY+0N"]),
                }),
            }),
        ],
    });
}
