r.d(a, { t: () => k }), r(411104);
var s = r(200651),
    t = r(192379),
    l = r(512722),
    n = r.n(l),
    o = r(478677),
    c = r(481060),
    i = r(570140),
    d = r(275759),
    x = r(202120),
    u = r(600164),
    h = r(710845),
    N = r(424071),
    m = r(388032),
    C = r(475286);
let j = new h.Z('TwoWayLink');
function k(e) {
    let { platformType: a, isWaitingForConnection: r, onWaitingForConnection: l, expectedCallbackState: h, onAuthToken: k, onError: v, onClose: p, img: f, title: b, body: E, redirectDestination: T } = e,
        g = t.useCallback(async () => {
            let e;
            try {
                if (((e = await (0, x.H)(a, { twoWayLinkType: o.g.DESKTOP })), null == e)) throw Error('missing authorizeURL');
            } catch (e) {
                j.error('Error opening provider authorize page', e), v();
                return;
            }
            let { state: r } = (0, d.xp)(e);
            n()(null != r, 'Authorize URL state query parameter must be present'), null == l || l(r);
        }, [a, v, l]),
        O = t.useCallback(
            (e) => {
                let { callbackCode: r, callbackState: s } = e;
                if (s !== h) return void j.warn(''.concat(a, ' link: received mismatching callback state!'));
                k({
                    callbackCode: r,
                    callbackState: s
                });
            },
            [a, h, k]
        );
    return (
        t.useEffect(
            () => (
                i.Z.subscribe('USER_CONNECTIONS_LINK_CALLBACK', O),
                () => {
                    i.Z.unsubscribe('USER_CONNECTIONS_LINK_CALLBACK', O);
                }
            ),
            [O]
        ),
        (0, s.jsxs)(N.Z, {
            children: [
                (0, s.jsxs)(c.xBx, {
                    direction: u.Z.Direction.VERTICAL,
                    className: C.header,
                    separator: !1,
                    children: [
                        (0, s.jsx)(c.Text, {
                            className: C.stepHeader,
                            variant: 'text-xs/bold',
                            color: 'header-secondary',
                            children: m.NW.format(m.t.fHz6eX, {
                                number: 1,
                                total: 2
                            })
                        }),
                        (0, s.jsxs)('div', {
                            className: C.illustration,
                            children: [f, ' ']
                        }),
                        (0, s.jsx)(c.X6q, {
                            className: C.title,
                            variant: 'heading-xl/extrabold',
                            children: b
                        }),
                        null != p &&
                            (0, s.jsx)(c.olH, {
                                className: C.closeButton,
                                onClick: p
                            })
                    ]
                }),
                (0, s.jsxs)(c.hzk, {
                    className: C.body,
                    paddingFix: !1,
                    children: [
                        (0, s.jsx)(c.Text, {
                            tag: 'p',
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: E
                        }),
                        !r &&
                            null != T &&
                            (0, s.jsx)(c.Text, {
                                tag: 'p',
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: m.NW.format(m.t.XhlYYm, { redirectUrl: T })
                            })
                    ]
                }),
                (0, s.jsx)(c.mzw, {
                    className: C.footer,
                    children: (0, s.jsxs)(c.zxk, {
                        className: C.footerButton,
                        color: r ? c.zxk.Colors.PRIMARY : c.zxk.Colors.BRAND,
                        onClick: g,
                        children: [
                            r ? m.NW.string(m.t['5911LS']) : m.NW.string(m.t['3PatS0']),
                            (0, s.jsx)(c.rgF, {
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
