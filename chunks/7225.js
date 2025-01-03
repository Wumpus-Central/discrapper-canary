n.r(e),
    n.d(e, {
        default: function () {
            return E;
        }
    }),
    n(47120);
var i,
    r,
    a = n(200651),
    o = n(192379),
    c = n(541822),
    s = n(442837),
    l = n(481060),
    d = n(728345),
    u = n(812206),
    _ = n(600164),
    f = n(886176),
    p = n(572004),
    C = n(504211),
    S = n(283836),
    I = n(507608),
    T = n(533159),
    b = n(981631),
    m = n(272242),
    N = n(388032),
    h = n(671702);
function E(t) {
    let { onClose: e, transitionState: n, appId: i, guildId: r } = t,
        E = (0, s.e7)([u.Z], () => u.Z.getApplication(i), [i]),
        [L, g] = o.useState(() => (u.Z.isFetchingApplication(i) ? { status: 1 } : { status: 0 }));
    o.useEffect(() => {
        0 === L.status &&
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
    }, [i, L.status]);
    let { subscriptions: P, otps: O } = (0, S.q)(i);
    if (null == E) return null;
    let v = N.intl.formatToPlainString(N.t.XDRjs7, { appName: E.name });
    return (0, a.jsxs)(l.ModalRoot, {
        transitionState: n,
        'aria-label': v,
        size: l.ModalSize.DYNAMIC,
        className: h.modal,
        children: [
            (0, a.jsxs)(l.ModalHeader, {
                className: h.modalHeader,
                children: [
                    (0, a.jsxs)('div', {
                        className: h.modalTitle,
                        children: [
                            (0, a.jsx)(f.Z, {}),
                            (0, a.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                children: v
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: h.modalHeaderLinks,
                        children: [
                            p.wS &&
                                (0, a.jsx)(l.Button, {
                                    look: l.ButtonLooks.BLANK,
                                    size: l.ButtonSizes.ICON,
                                    color: l.ButtonColors.TRANSPARENT,
                                    'aria-label': N.intl.string(N.t.WqhZsr),
                                    onClick: () => {
                                        let t = ''.concat(location.protocol, '//').concat(location.host).concat(b.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(i, m.ApplicationDirectoryProfileSections.STORE));
                                        (0, p.JG)(t), (0, l.showToast)((0, l.createToast)(N.intl.string(N.t['L/PwZW']), l.ToastType.SUCCESS)), (0, C.X)(i, C.B.STORE_MODAL);
                                    },
                                    children: (0, a.jsx)(l.LinkIcon, { size: 'sm' })
                                }),
                            (0, a.jsx)(l.ModalCloseButton, {
                                onClick: e,
                                className: h.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: h.scrollerWrapper,
                children: (0, a.jsx)(c.Z, {
                    className: h.scroller,
                    children: (0, a.jsx)(I.AF, {
                        app: E,
                        guildId: r,
                        subscriptions: P,
                        otps: O
                    })
                })
            }),
            (0, a.jsx)(l.ModalFooter, {
                justify: _.Z.Justify.END,
                children: (0, a.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children:
                        null != E.termsOfServiceUrl || null != E.privacyPolicyUrl
                            ? (0, a.jsx)(T.Z, {
                                  termsOfServiceUrl: E.termsOfServiceUrl,
                                  privacyPolicyUrl: E.privacyPolicyUrl
                              })
                            : N.intl.string(N.t['3ZY+0N'])
                })
            })
        ]
    });
}
((r = i || (i = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED'), (r[(r.ERROR = 3)] = 'ERROR');
