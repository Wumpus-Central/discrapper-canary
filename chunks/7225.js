s.d(e, { default: () => j }), s(47120);
var r = s(200651),
    a = s(192379),
    i = s(541822),
    o = s(442837),
    c = s(481060),
    n = s(728345),
    l = s(812206),
    d = s(600164),
    p = s(886176),
    u = s(572004),
    _ = s(504211),
    f = s(283836),
    m = s(507608),
    x = s(533159),
    h = s(981631),
    S = s(979007),
    N = s(388032),
    g = s(969878);
function j(t) {
    let { onClose: e, transitionState: s, appId: j, guildId: v } = t,
        C = (0, o.e7)([l.Z], () => l.Z.getApplication(j), [j]),
        [b, T] = a.useState(() => (l.Z.isFetchingApplication(j) ? { status: 1 } : { status: 0 }));
    a.useEffect(() => {
        0 === b.status &&
            (T({ status: 1 }),
            n.ZP.fetchApplication(j)
                .then(() => {
                    T({ status: 2 });
                })
                .catch((t) => {
                    T({
                        status: 3,
                        error: t.message
                    });
                }));
    }, [j, b.status]);
    let { subscriptions: Z, otps: w } = (0, f.q)(j);
    if (null == C) return null;
    let A = N.NW.formatToPlainString(N.t.XDRjs7, { appName: C.name });
    return (0, r.jsxs)(c.Y0X, {
        transitionState: s,
        'aria-label': A,
        size: c.CgR.DYNAMIC,
        className: g.modal,
        children: [
            (0, r.jsxs)(c.xBx, {
                className: g.modalHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: g.modalTitle,
                        children: [
                            (0, r.jsx)(p.Z, {}),
                            (0, r.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: A
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: g.modalHeaderLinks,
                        children: [
                            u.wS &&
                                (0, r.jsx)(c.zxk, {
                                    look: c.iLD.BLANK,
                                    size: c.PhG.ICON,
                                    color: c.Ttl.TRANSPARENT,
                                    'aria-label': N.NW.string(N.t.WqhZsr),
                                    onClick: () => {
                                        let t = ''.concat(location.protocol, '//').concat(location.host).concat(h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(j, S.GlobalDiscoveryAppsSections.STORE));
                                        (0, u.JG)(t), (0, c.showToast)((0, c.createToast)(N.NW.string(N.t['L/PwZW']), c.ToastType.SUCCESS)), (0, _.X)(j, _.B.STORE_MODAL);
                                    },
                                    children: (0, r.jsx)(c.xPt, { size: 'sm' })
                                }),
                            (0, r.jsx)(c.olH, {
                                onClick: e,
                                className: g.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: g.scrollerWrapper,
                children: (0, r.jsx)(i.Z, {
                    className: g.scroller,
                    children: (0, r.jsx)(m.AF, {
                        app: C,
                        guildId: v,
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
                        null != C.termsOfServiceUrl || null != C.privacyPolicyUrl
                            ? (0, r.jsx)(x.Z, {
                                  termsOfServiceUrl: C.termsOfServiceUrl,
                                  privacyPolicyUrl: C.privacyPolicyUrl
                              })
                            : N.NW.string(N.t['3ZY+0N'])
                })
            })
        ]
    });
}
