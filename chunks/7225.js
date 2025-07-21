(r.d(t, { default: () => O }), r(388685));
var i = r(255367),
    n = r(73800),
    o = r(541822),
    s = r(442837),
    a = r(755721),
    l = r(481060),
    c = r(728345),
    d = r(812206),
    p = r(600164),
    u = r(886176),
    f = r(572004),
    _ = r(504211),
    C = r(283836),
    m = r(507608),
    b = r(533159),
    h = r(981631),
    g = r(979007),
    x = r(388032),
    S = r(969878);
function O(e) {
    let { onClose: t, transitionState: r, appId: O, guildId: j } = e,
        y = (0, s.e7)([d.Z], () => d.Z.getApplication(O), [O]),
        [v, L] = n.useState(() => (d.Z.isFetchingApplication(O) ? { status: 1 } : { status: 0 }));
    n.useEffect(() => {
        0 === v.status &&
            (L({ status: 1 }),
            c.ZP.fetchApplication(O)
                .then(() => {
                    L({ status: 2 });
                })
                .catch((e) => {
                    L({
                        status: 3,
                        error: e.message
                    });
                }));
    }, [O, v.status]);
    let { subscriptions: w, otps: P } = (0, C.q)(O);
    if (null == y) return null;
    let N = x.intl.formatToPlainString(x.t.XDRjs7, { appName: y.name });
    return (0, i.jsxs)(l.Y0X, {
        transitionState: r,
        'aria-label': N,
        size: l.CgR.DYNAMIC,
        className: S.modal,
        parentComponent: 'AppStorefrontModal',
        children: [
            (0, i.jsxs)(l.xBx, {
                className: S.modalHeader,
                children: [
                    (0, i.jsxs)('div', {
                        className: S.modalTitle,
                        children: [
                            (0, i.jsx)(u.Z, {}),
                            (0, i.jsx)(l.X6q, {
                                variant: 'heading-md/semibold',
                                children: N
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: S.modalHeaderLinks,
                        children: [
                            f.wS &&
                                (0, i.jsx)(a.zx, {
                                    look: a.iL.BLANK,
                                    size: a.Ph.ICON,
                                    color: a.Tt.TRANSPARENT,
                                    'aria-label': x.intl.string(x.t.WqhZsr),
                                    onClick: () => {
                                        let e = ''.concat(location.protocol, '//').concat(location.host).concat(h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(O, g.GlobalDiscoveryAppsSections.STORE));
                                        ((0, f.JG)(e, () => (0, l.showToast)((0, l.createToast)(x.intl.string(x.t['L/PwZW']), l.ToastType.SUCCESS))), (0, _.X)(O, _.B.STORE_MODAL));
                                    },
                                    children: (0, i.jsx)(l.xPt, { size: 'sm' })
                                }),
                            (0, i.jsx)(l.olH, {
                                onClick: t,
                                className: S.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: S.scrollerWrapper,
                children: (0, i.jsx)(o.Z, {
                    className: S.scroller,
                    children: (0, i.jsx)(m.AF, {
                        app: y,
                        guildId: j,
                        subscriptions: w,
                        otps: P
                    })
                })
            }),
            (0, i.jsx)(l.mzw, {
                justify: p.Z.Justify.END,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children:
                        null != y.termsOfServiceUrl || null != y.privacyPolicyUrl
                            ? (0, i.jsx)(b.Z, {
                                  termsOfServiceUrl: y.termsOfServiceUrl,
                                  privacyPolicyUrl: y.privacyPolicyUrl
                              })
                            : x.intl.string(x.t['3ZY+0N'])
                })
            })
        ]
    });
}
