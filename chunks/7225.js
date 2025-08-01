(s.d(e, { default: () => v }), s(388685));
var r = s(255367),
    a = s(73800),
    i = s(541822),
    n = s(442837),
    o = s(755721),
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
    C = s(969878);
function v(t) {
    let { onClose: e, transitionState: s, appId: v, guildId: N } = t,
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
                        error: t.message
                    });
                }));
    }, [v, A.status]);
    let { subscriptions: Z, otps: w } = (0, m.q)(v);
    if (null == b) return null;
    let P = j.intl.formatToPlainString(j.t.XDRjs7, { appName: b.name });
    return (0, r.jsxs)(c.Y0X, {
        transitionState: s,
        'aria-label': P,
        size: c.CgR.DYNAMIC,
        className: C.modal,
        parentComponent: 'AppStorefrontModal',
        children: [
            (0, r.jsxs)(c.xBx, {
                className: C.modalHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: C.modalTitle,
                        children: [
                            (0, r.jsx)(u.Z, {}),
                            (0, r.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: P
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: C.modalHeaderLinks,
                        children: [
                            _.wS &&
                                (0, r.jsx)(o.zx, {
                                    look: o.iL.BLANK,
                                    size: o.Ph.ICON,
                                    color: o.Tt.TRANSPARENT,
                                    'aria-label': j.intl.string(j.t.WqhZsr),
                                    onClick: () => {
                                        let t = ''.concat(location.protocol, '//').concat(location.host).concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(v, g.GlobalDiscoveryAppsSections.STORE));
                                        ((0, _.JG)(t, () => (0, c.showToast)((0, c.createToast)(j.intl.string(j.t['L/PwZW']), c.ToastType.SUCCESS))), (0, f.X)(v, f.B.STORE_MODAL));
                                    },
                                    children: (0, r.jsx)(c.xPt, { size: 'sm' })
                                }),
                            (0, r.jsx)(c.olH, {
                                onClick: e,
                                className: C.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: C.scrollerWrapper,
                children: (0, r.jsx)(i.Z, {
                    className: C.scroller,
                    children: (0, r.jsx)(x.AF, {
                        app: b,
                        guildId: N,
                        subscriptions: Z,
                        otps: w
                    })
                })
            }),
            (0, r.jsx)(c.mzw, {
                justify: d.Z.Justify.END,
                children: (0, r.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children:
                        null != b.termsOfServiceUrl || null != b.privacyPolicyUrl
                            ? (0, r.jsx)(h.Z, {
                                  termsOfServiceUrl: b.termsOfServiceUrl,
                                  privacyPolicyUrl: b.privacyPolicyUrl
                              })
                            : j.intl.string(j.t['3ZY+0N'])
                })
            })
        ]
    });
}
