a.d(t, { t: () => k }), a(415506);
var r = a(255367),
    l = a(73800),
    s = a(512722),
    n = a.n(s),
    o = a(478677),
    c = a(481060),
    i = a(570140),
    d = a(275759),
    x = a(202120),
    u = a(600164),
    h = a(710845),
    m = a(424071),
    N = a(388032),
    C = a(475286);
let j = new h.Z('TwoWayLink');
function k(e) {
    let { platformType: t, isWaitingForConnection: a, onWaitingForConnection: s, expectedCallbackState: h, onAuthToken: k, onError: v, onClose: p, img: f, title: b, body: E, redirectDestination: T } = e,
        g = l.useCallback(async () => {
            let e;
            try {
                if (((e = await (0, x.H)(t, { twoWayLinkType: o.g.DESKTOP })), null == e)) throw Error('missing authorizeURL');
            } catch (e) {
                j.error('Error opening provider authorize page', e), v();
                return;
            }
            let { state: a } = (0, d.xp)(e);
            n()(null != a, 'Authorize URL state query parameter must be present'), null == s || s(a);
        }, [t, v, s]),
        O = l.useCallback(
            (e) => {
                let { callbackCode: a, callbackState: r } = e;
                if (r !== h) return void j.warn(''.concat(t, ' link: received mismatching callback state!'));
                k({
                    callbackCode: a,
                    callbackState: r
                });
            },
            [t, h, k]
        );
    return (
        l.useEffect(
            () => (
                i.Z.subscribe('USER_CONNECTIONS_LINK_CALLBACK', O),
                () => {
                    i.Z.unsubscribe('USER_CONNECTIONS_LINK_CALLBACK', O);
                }
            ),
            [O]
        ),
        (0, r.jsxs)(m.Z, {
            children: [
                (0, r.jsxs)(c.xBx, {
                    direction: u.Z.Direction.VERTICAL,
                    className: C.header,
                    separator: !1,
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: C.stepHeader,
                            variant: 'text-xs/bold',
                            color: 'header-secondary',
                            children: N.intl.format(N.t.fHz6eX, {
                                number: 1,
                                total: 2
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: C.illustration,
                            children: [f, ' ']
                        }),
                        (0, r.jsx)(c.X6q, {
                            className: C.title,
                            variant: 'heading-xl/extrabold',
                            children: b
                        }),
                        null != p &&
                            (0, r.jsx)(c.olH, {
                                className: C.closeButton,
                                onClick: p
                            })
                    ]
                }),
                (0, r.jsxs)(c.hzk, {
                    className: C.body,
                    paddingFix: !1,
                    children: [
                        (0, r.jsx)(c.Text, {
                            tag: 'p',
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: E
                        }),
                        !a &&
                            null != T &&
                            (0, r.jsx)(c.Text, {
                                tag: 'p',
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: N.intl.format(N.t.XhlYYm, { redirectUrl: T })
                            })
                    ]
                }),
                (0, r.jsx)(c.mzw, {
                    className: C.footer,
                    children: (0, r.jsxs)(c.zxk, {
                        className: C.footerButton,
                        color: a ? c.zxk.Colors.PRIMARY : c.zxk.Colors.BRAND,
                        onClick: g,
                        children: [
                            a ? N.intl.string(N.t['5911LS']) : N.intl.string(N.t['3PatS0']),
                            (0, r.jsx)(c.rgF, {
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
