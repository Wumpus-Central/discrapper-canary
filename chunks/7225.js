i.r(n),
    i.d(n, {
        default: function () {
            return h;
        }
    }),
    i(47120);
var e,
    r,
    a = i(200651),
    o = i(192379),
    s = i(541822),
    l = i(442837),
    c = i(481060),
    d = i(728345),
    u = i(812206),
    p = i(600164),
    _ = i(886176),
    C = i(572004),
    S = i(504211),
    f = i(283836),
    I = i(507608),
    T = i(533159),
    N = i(981631),
    E = i(272242),
    L = i(388032),
    b = i(671702);
function h(t) {
    let { onClose: n, transitionState: i, appId: e, guildId: r } = t,
        h = (0, l.e7)([u.Z], () => u.Z.getApplication(e), [e]),
        [m, g] = o.useState(() => (u.Z.isFetchingApplication(e) ? { status: 1 } : { status: 0 }));
    o.useEffect(() => {
        0 === m.status &&
            (g({ status: 1 }),
            d.ZP.fetchApplication(e)
                .then(() => {
                    g({ status: 2 });
                })
                .catch((t) => {
                    g({
                        status: 3,
                        error: t.message
                    });
                }));
    }, [e, m.status]);
    let { subscriptions: P, otps: O } = (0, f.q)(e);
    if (null == h) return null;
    let A = L.intl.formatToPlainString(L.t.XDRjs7, { appName: h.name });
    return (0, a.jsxs)(c.ModalRoot, {
        transitionState: i,
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
                                        let t = ''.concat(location.protocol, '//').concat(location.host).concat(N.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(e, E.ApplicationDirectoryProfileSections.STORE));
                                        (0, C.JG)(t), (0, c.showToast)((0, c.createToast)(L.intl.string(L.t['L/PwZW']), c.ToastType.SUCCESS)), (0, S.X)(e, S.B.STORE_MODAL);
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
                children: (0, a.jsx)(s.Z, {
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
((r = e || (e = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED'), (r[(r.ERROR = 3)] = 'ERROR');
