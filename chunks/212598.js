n.d(t, {
    t: function () {
        return f;
    }
}),
    n(411104);
var a = n(200651),
    r = n(192379),
    l = n(512722),
    o = n.n(l),
    s = n(478677),
    c = n(481060),
    i = n(570140),
    d = n(275759),
    u = n(202120),
    x = n(600164),
    h = n(710845),
    N = n(424071),
    m = n(388032),
    C = n(38920);
let j = new h.Z('TwoWayLink');
function f(e) {
    let { platformType: t, isWaitingForConnection: n, onWaitingForConnection: l, expectedCallbackState: h, onAuthToken: f, onError: v, onClose: p, img: b, title: E, body: g, redirectDestination: k } = e,
        T = r.useCallback(async () => {
            let e;
            try {
                if (((e = await (0, u.H)(t, { twoWayLinkType: s.g.DESKTOP })), null == e)) throw Error('missing authorizeURL');
            } catch (e) {
                j.error('Error opening provider authorize page', e), v();
                return;
            }
            let { state: n } = (0, d.xp)(e);
            o()(null != n, 'Authorize URL state query parameter must be present'), null == l || l(n);
        }, [t, v, l]),
        B = r.useCallback(
            (e) => {
                let { callbackCode: n, callbackState: a } = e;
                if (a !== h) {
                    j.warn(''.concat(t, ' link: received mismatching callback state!'));
                    return;
                }
                f({
                    callbackCode: n,
                    callbackState: a
                });
            },
            [t, h, f]
        );
    return (
        r.useEffect(
            () => (
                i.Z.subscribe('USER_CONNECTIONS_LINK_CALLBACK', B),
                () => {
                    i.Z.unsubscribe('USER_CONNECTIONS_LINK_CALLBACK', B);
                }
            ),
            [B]
        ),
        (0, a.jsxs)(N.Z, {
            children: [
                (0, a.jsxs)(c.ModalHeader, {
                    direction: x.Z.Direction.VERTICAL,
                    className: C.header,
                    separator: !1,
                    children: [
                        (0, a.jsx)(c.Text, {
                            className: C.stepHeader,
                            variant: 'text-xs/bold',
                            color: 'header-secondary',
                            children: m.intl.format(m.t.fHz6eX, {
                                number: 1,
                                total: 2
                            })
                        }),
                        (0, a.jsxs)('div', {
                            className: C.illustration,
                            children: [b, ' ']
                        }),
                        (0, a.jsx)(c.Heading, {
                            className: C.title,
                            variant: 'heading-xl/extrabold',
                            children: E
                        }),
                        null != p &&
                            (0, a.jsx)(c.ModalCloseButton, {
                                className: C.closeButton,
                                onClick: p
                            })
                    ]
                }),
                (0, a.jsxs)(c.ModalContent, {
                    className: C.body,
                    paddingFix: !1,
                    children: [
                        (0, a.jsx)(c.Text, {
                            tag: 'p',
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: g
                        }),
                        !n &&
                            null != k &&
                            (0, a.jsx)(c.Text, {
                                tag: 'p',
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: m.intl.format(m.t.XhlYYm, { redirectUrl: k })
                            })
                    ]
                }),
                (0, a.jsx)(c.ModalFooter, {
                    className: C.footer,
                    children: (0, a.jsxs)(c.Button, {
                        className: C.footerButton,
                        color: n ? c.Button.Colors.PRIMARY : c.Button.Colors.BRAND,
                        onClick: T,
                        children: [
                            n ? m.intl.string(m.t['5911LS']) : m.intl.string(m.t['3PatS0']),
                            (0, a.jsx)(c.WindowLaunchIcon, {
                                color: 'currentColor',
                                className: C.launchIcon,
                                size: 'xs'
                            })
                        ]
                    })
                })
            ]
        })
    );
}
