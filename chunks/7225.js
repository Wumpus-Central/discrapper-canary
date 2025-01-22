e.r(n),
    e.d(n, {
        default: function () {
            return h;
        }
    }),
    e(47120);
var i,
    r,
    a = e(200651),
    s = e(192379),
    o = e(541822),
    l = e(442837),
    c = e(481060),
    d = e(728345),
    u = e(812206),
    p = e(600164),
    _ = e(886176),
    C = e(572004),
    S = e(504211),
    f = e(283836),
    I = e(507608),
    T = e(533159),
    E = e(981631),
    N = e(979007),
    L = e(388032),
    b = e(671702);
function h(t) {
    let { onClose: n, transitionState: e, appId: i, guildId: r } = t,
        h = (0, l.e7)([u.Z], () => u.Z.getApplication(i), [i]),
        [m, g] = s.useState(() => (u.Z.isFetchingApplication(i) ? { status: 1 } : { status: 0 }));
    s.useEffect(() => {
        0 === m.status &&
            (g({ status: 1 }),
            d.ZP.fetchApplication(i)
                .then(() => {
                    g({ status: 2 });
                })
                .catch((t) => {
                    g({
                        status: 3,
                        error: t.message
                    });
                }));
    }, [i, m.status]);
    let { subscriptions: P, otps: O } = (0, f.q)(i);
    if (null == h) return null;
    let A = L.intl.formatToPlainString(L.t.XDRjs7, { appName: h.name });
    return (0, a.jsxs)(c.ModalRoot, {
        transitionState: e,
        'aria-label': A,
        size: c.ModalSize.DYNAMIC,
        className: b.modal,
        children: [
            (0, a.jsxs)(c.ModalHeader, {
                className: b.modalHeader,
                children: [
                    (0, a.jsxs)('div', {
                        className: b.modalTitle,
                        children: [
                            (0, a.jsx)(_.Z, {}),
                            (0, a.jsx)(c.Heading, {
                                variant: 'heading-md/semibold',
                                children: A
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: b.modalHeaderLinks,
                        children: [
                            C.wS &&
                                (0, a.jsx)(c.Button, {
                                    look: c.ButtonLooks.BLANK,
                                    size: c.ButtonSizes.ICON,
                                    color: c.ButtonColors.TRANSPARENT,
                                    'aria-label': L.intl.string(L.t.WqhZsr),
                                    onClick: () => {
                                        let t = ''.concat(location.protocol, '//').concat(location.host).concat(E.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(i, N.GlobalDiscoveryAppsSections.STORE));
                                        (0, C.JG)(t), (0, c.showToast)((0, c.createToast)(L.intl.string(L.t['L/PwZW']), c.ToastType.SUCCESS)), (0, S.X)(i, S.B.STORE_MODAL);
                                    },
                                    children: (0, a.jsx)(c.LinkIcon, { size: 'sm' })
                                }),
                            (0, a.jsx)(c.ModalCloseButton, {
                                onClick: n,
                                className: b.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: b.scrollerWrapper,
                children: (0, a.jsx)(o.Z, {
                    className: b.scroller,
                    children: (0, a.jsx)(I.AF, {
                        app: h,
                        guildId: r,
                        subscriptions: P,
                        otps: O
                    })
                })
            }),
            (0, a.jsx)(c.ModalFooter, {
                justify: p.Z.Justify.END,
                children: (0, a.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children:
                        null != h.termsOfServiceUrl || null != h.privacyPolicyUrl
                            ? (0, a.jsx)(T.Z, {
                                  termsOfServiceUrl: h.termsOfServiceUrl,
                                  privacyPolicyUrl: h.privacyPolicyUrl
                              })
                            : L.intl.string(L.t['3ZY+0N'])
                })
            })
        ]
    });
}
((r = i || (i = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED'), (r[(r.ERROR = 3)] = 'ERROR');
