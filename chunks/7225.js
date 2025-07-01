(s.d(e, { default: () => C }), s(388685));
var r = s(255367),
    a = s(73800),
    i = s(541822),
    n = s(442837),
    o = s(481060),
    c = s(728345),
    l = s(812206),
    p = s(600164),
    d = s(886176),
    u = s(572004),
    _ = s(504211),
    f = s(283836),
    m = s(507608),
    x = s(533159),
    h = s(981631),
    S = s(979007),
    g = s(388032),
    j = s(969878);
function C(t) {
    let { onClose: e, transitionState: s, appId: C, guildId: v } = t,
        N = (0, n.e7)([l.Z], () => l.Z.getApplication(C), [C]),
        [b, A] = a.useState(() => (l.Z.isFetchingApplication(C) ? { status: 1 } : { status: 0 }));
    a.useEffect(() => {
        0 === b.status &&
            (A({ status: 1 }),
            c.ZP.fetchApplication(C)
                .then(() => {
                    A({ status: 2 });
                })
                .catch((t) => {
                    A({
                        status: 3,
                        error: t.message
                    });
                }));
    }, [C, b.status]);
    let { subscriptions: T, otps: Z } = (0, f.q)(C);
    if (null == N) return null;
    let w = g.intl.formatToPlainString(g.t.XDRjs7, { appName: N.name });
    return (0, r.jsxs)(o.Y0X, {
        transitionState: s,
        'aria-label': w,
        size: o.CgR.DYNAMIC,
        className: j.modal,
        parentComponent: 'AppStorefrontModal',
        children: [
            (0, r.jsxs)(o.xBx, {
                className: j.modalHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: j.modalTitle,
                        children: [
                            (0, r.jsx)(d.Z, {}),
                            (0, r.jsx)(o.X6q, {
                                variant: 'heading-md/semibold',
                                children: w
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: j.modalHeaderLinks,
                        children: [
                            u.wS &&
                                (0, r.jsx)(o.zxk, {
                                    look: o.iLD.BLANK,
                                    size: o.PhG.ICON,
                                    color: o.Ttl.TRANSPARENT,
                                    'aria-label': g.intl.string(g.t.WqhZsr),
                                    onClick: () => {
                                        let t = ''.concat(location.protocol, '//').concat(location.host).concat(h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(C, S.GlobalDiscoveryAppsSections.STORE));
                                        ((0, u.JG)(t, () => (0, o.showToast)((0, o.createToast)(g.intl.string(g.t['L/PwZW']), o.ToastType.SUCCESS))), (0, _.X)(C, _.B.STORE_MODAL));
                                    },
                                    children: (0, r.jsx)(o.xPt, { size: 'sm' })
                                }),
                            (0, r.jsx)(o.olH, {
                                onClick: e,
                                className: j.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: j.scrollerWrapper,
                children: (0, r.jsx)(i.Z, {
                    className: j.scroller,
                    children: (0, r.jsx)(m.AF, {
                        app: N,
                        guildId: v,
                        subscriptions: T,
                        otps: Z
                    })
                })
            }),
            (0, r.jsx)(o.mzw, {
                justify: p.Z.Justify.END,
                children: (0, r.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children:
                        null != N.termsOfServiceUrl || null != N.privacyPolicyUrl
                            ? (0, r.jsx)(x.Z, {
                                  termsOfServiceUrl: N.termsOfServiceUrl,
                                  privacyPolicyUrl: N.privacyPolicyUrl
                              })
                            : g.intl.string(g.t['3ZY+0N'])
                })
            })
        ]
    });
}
