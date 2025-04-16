i.d(e, { default: () => P }), i(388685);
var n = i(200651),
    r = i(192379),
    s = i(541822),
    o = i(442837),
    l = i(481060),
    a = i(728345),
    c = i(812206),
    p = i(600164),
    u = i(886176),
    _ = i(572004),
    d = i(504211),
    S = i(283836),
    C = i(507608),
    f = i(533159),
    I = i(981631),
    T = i(979007),
    N = i(388032),
    g = i(969878);
function P(t) {
    let { onClose: e, transitionState: i, appId: P, guildId: O } = t,
        b = (0, o.e7)([c.Z], () => c.Z.getApplication(P), [P]),
        [m, h] = r.useState(() => (c.Z.isFetchingApplication(P) ? { status: 1 } : { status: 0 }));
    r.useEffect(() => {
        0 === m.status &&
            (h({ status: 1 }),
            a.ZP.fetchApplication(P)
                .then(() => {
                    h({ status: 2 });
                })
                .catch((t) => {
                    h({
                        status: 3,
                        error: t.message
                    });
                }));
    }, [P, m.status]);
    let { subscriptions: L, otps: E } = (0, S.q)(P);
    if (null == b) return null;
    let y = N.NW.formatToPlainString(N.t.XDRjs7, { appName: b.name });
    return (0, n.jsxs)(l.Y0X, {
        transitionState: i,
        'aria-label': y,
        size: l.CgR.DYNAMIC,
        className: g.modal,
        children: [
            (0, n.jsxs)(l.xBx, {
                className: g.modalHeader,
                children: [
                    (0, n.jsxs)('div', {
                        className: g.modalTitle,
                        children: [
                            (0, n.jsx)(u.Z, {}),
                            (0, n.jsx)(l.X6q, {
                                variant: 'heading-md/semibold',
                                children: y
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: g.modalHeaderLinks,
                        children: [
                            _.wS &&
                                (0, n.jsx)(l.zxk, {
                                    look: l.iLD.BLANK,
                                    size: l.PhG.ICON,
                                    color: l.Ttl.TRANSPARENT,
                                    'aria-label': N.NW.string(N.t.WqhZsr),
                                    onClick: () => {
                                        let t = ''.concat(location.protocol, '//').concat(location.host).concat(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(P, T.GlobalDiscoveryAppsSections.STORE));
                                        (0, _.JG)(t, () => (0, l.showToast)((0, l.createToast)(N.NW.string(N.t['L/PwZW']), l.ToastType.SUCCESS))), (0, d.X)(P, d.B.STORE_MODAL);
                                    },
                                    children: (0, n.jsx)(l.xPt, { size: 'sm' })
                                }),
                            (0, n.jsx)(l.olH, {
                                onClick: e,
                                className: g.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: g.scrollerWrapper,
                children: (0, n.jsx)(s.Z, {
                    className: g.scroller,
                    children: (0, n.jsx)(C.AF, {
                        app: b,
                        guildId: O,
                        subscriptions: L,
                        otps: E
                    })
                })
            }),
            (0, n.jsx)(l.mzw, {
                justify: p.Z.Justify.END,
                children: (0, n.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children:
                        null != b.termsOfServiceUrl || null != b.privacyPolicyUrl
                            ? (0, n.jsx)(f.Z, {
                                  termsOfServiceUrl: b.termsOfServiceUrl,
                                  privacyPolicyUrl: b.privacyPolicyUrl
                              })
                            : N.NW.string(N.t['3ZY+0N'])
                })
            })
        ]
    });
}
