s.d(e, { default: () => v }), s(47120);
var r = s(200651),
    i = s(192379),
    a = s(541822),
    n = s(442837),
    o = s(481060),
    c = s(728345),
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
    g = s(388032),
    j = s(354276);
function v(t) {
    let { onClose: e, transitionState: s, appId: v, guildId: C } = t,
        N = (0, n.e7)([l.Z], () => l.Z.getApplication(v), [v]),
        [b, T] = i.useState(() => (l.Z.isFetchingApplication(v) ? { status: 1 } : { status: 0 }));
    i.useEffect(() => {
        0 === b.status &&
            (T({ status: 1 }),
            c.ZP.fetchApplication(v)
                .then(() => {
                    T({ status: 2 });
                })
                .catch((t) => {
                    T({
                        status: 3,
                        error: t.message
                    });
                }));
    }, [v, b.status]);
    let { subscriptions: Z, otps: w } = (0, f.q)(v);
    if (null == N) return null;
    let A = g.intl.formatToPlainString(g.t.XDRjs7, { appName: N.name });
    return (0, r.jsxs)(o.Y0X, {
        transitionState: s,
        'aria-label': A,
        size: o.CgR.DYNAMIC,
        className: j.modal,
        children: [
            (0, r.jsxs)(o.xBx, {
                className: j.modalHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: j.modalTitle,
                        children: [
                            (0, r.jsx)(p.Z, {}),
                            (0, r.jsx)(o.X6q, {
                                variant: 'heading-md/semibold',
                                children: A
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
                                        let t = ''.concat(location.protocol, '//').concat(location.host).concat(h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(v, S.GlobalDiscoveryAppsSections.STORE));
                                        (0, u.JG)(t), (0, o.showToast)((0, o.createToast)(g.intl.string(g.t['L/PwZW']), o.ToastType.SUCCESS)), (0, _.X)(v, _.B.STORE_MODAL);
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
                children: (0, r.jsx)(a.Z, {
                    className: j.scroller,
                    children: (0, r.jsx)(m.AF, {
                        app: N,
                        guildId: C,
                        subscriptions: Z,
                        otps: w
                    })
                })
            }),
            (0, r.jsx)(o.mzw, {
                justify: d.Z.Justify.END,
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
