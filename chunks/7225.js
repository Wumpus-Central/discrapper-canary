i.d(e, { default: () => h }), i(47120);
var n = i(200651),
    r = i(192379),
    s = i(541822),
    l = i(442837),
    a = i(481060),
    o = i(728345),
    c = i(812206),
    d = i(600164),
    _ = i(886176),
    u = i(572004),
    p = i(504211),
    S = i(283836),
    C = i(507608),
    I = i(533159),
    T = i(981631),
    f = i(979007),
    N = i(388032),
    L = i(671702);
function h(t) {
    let { onClose: e, transitionState: i, appId: h, guildId: m } = t,
        E = (0, l.e7)([c.Z], () => c.Z.getApplication(h), [h]),
        [g, P] = r.useState(() => (c.Z.isFetchingApplication(h) ? { status: 1 } : { status: 0 }));
    r.useEffect(() => {
        0 === g.status &&
            (P({ status: 1 }),
            o.ZP.fetchApplication(h)
                .then(() => {
                    P({ status: 2 });
                })
                .catch((t) => {
                    P({
                        status: 3,
                        error: t.message
                    });
                }));
    }, [h, g.status]);
    let { subscriptions: A, otps: O } = (0, S.q)(h);
    if (null == E) return null;
    let v = N.intl.formatToPlainString(N.t.XDRjs7, { appName: E.name });
    return (0, n.jsxs)(a.Y0X, {
        transitionState: i,
        'aria-label': v,
        size: a.CgR.DYNAMIC,
        className: L.modal,
        children: [
            (0, n.jsxs)(a.xBx, {
                className: L.modalHeader,
                children: [
                    (0, n.jsxs)('div', {
                        className: L.modalTitle,
                        children: [
                            (0, n.jsx)(_.Z, {}),
                            (0, n.jsx)(a.X6q, {
                                variant: 'heading-md/semibold',
                                children: v
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: L.modalHeaderLinks,
                        children: [
                            u.wS &&
                                (0, n.jsx)(a.zxk, {
                                    look: a.iLD.BLANK,
                                    size: a.PhG.ICON,
                                    color: a.Ttl.TRANSPARENT,
                                    'aria-label': N.intl.string(N.t.WqhZsr),
                                    onClick: () => {
                                        let t = ''.concat(location.protocol, '//').concat(location.host).concat(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(h, f.GlobalDiscoveryAppsSections.STORE));
                                        (0, u.JG)(t), (0, a.showToast)((0, a.createToast)(N.intl.string(N.t['L/PwZW']), a.ToastType.SUCCESS)), (0, p.X)(h, p.B.STORE_MODAL);
                                    },
                                    children: (0, n.jsx)(a.xPt, { size: 'sm' })
                                }),
                            (0, n.jsx)(a.olH, {
                                onClick: e,
                                className: L.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: L.scrollerWrapper,
                children: (0, n.jsx)(s.Z, {
                    className: L.scroller,
                    children: (0, n.jsx)(C.AF, {
                        app: E,
                        guildId: m,
                        subscriptions: A,
                        otps: O
                    })
                })
            }),
            (0, n.jsx)(a.mzw, {
                justify: d.Z.Justify.END,
                children: (0, n.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children:
                        null != E.termsOfServiceUrl || null != E.privacyPolicyUrl
                            ? (0, n.jsx)(I.Z, {
                                  termsOfServiceUrl: E.termsOfServiceUrl,
                                  privacyPolicyUrl: E.privacyPolicyUrl
                              })
                            : N.intl.string(N.t['3ZY+0N'])
                })
            })
        ]
    });
}
