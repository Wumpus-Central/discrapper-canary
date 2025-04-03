r.d(a, { h: () => C }), r(47120);
var s = r(200651),
    t = r(192379),
    l = r(512722),
    n = r.n(l),
    o = r(481060),
    c = r(457330),
    i = r(600164),
    d = r(710845),
    x = r(69580),
    u = r(424071),
    h = r(388032),
    N = r(475286);
let m = new d.Z('TwoWayLinkDiscordConsentWeb');
function C(e) {
    let { platformType: a, clientId: r, scopes: l, authToken: d, onContinue: C, onError: j, onClose: k, redirectUri: v } = e,
        [p, f] = t.useState(!1),
        b = t.useCallback(
            async (e) => {
                let r,
                    s,
                    { location: t } = e,
                    { callbackCode: l, callbackState: n } = d;
                try {
                    r = await c.Z.completeTwoWayLink(a, t, l, n);
                } catch (e) {
                    var o;
                    m.error(''.concat(a, ' link error:'), e), (s = null == (o = e.body) ? void 0 : o.code);
                }
                null != r ? C() : j(s);
            },
            [a, d, C, j]
        ),
        {
            header: E,
            body: T,
            appDetails: g,
            sendAuthorize: O
        } = (0, x.useOAuth2AuthorizeForm)({
            clientId: r,
            scopes: l,
            responseType: 'code',
            callback: b,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: v
        }),
        R = t.useCallback(() => {
            n()(null != O, 'sendAuthorize not available'), f(!0), O(!0);
        }, [O]);
    return (0, s.jsxs)(u.Z, {
        children: [
            (0, s.jsxs)(o.xBx, {
                direction: i.Z.Direction.VERTICAL,
                className: N.header,
                separator: !1,
                children: [
                    (0, s.jsx)(o.Text, {
                        className: N.stepHeader,
                        variant: 'text-xs/bold',
                        color: 'header-secondary',
                        children: h.NW.format(h.t.fHz6eX, {
                            number: 2,
                            total: 2
                        })
                    }),
                    null != k &&
                        (0, s.jsx)(o.olH, {
                            className: N.closeButton,
                            onClick: k
                        })
                ]
            }),
            (0, s.jsxs)(o.hzk, {
                className: N.consentContent,
                paddingFix: !1,
                children: [E, T, g]
            }),
            (0, s.jsx)(o.mzw, {
                className: N.footer,
                children: (0, s.jsx)(o.zxk, {
                    className: N.footerButton,
                    color: o.zxk.Colors.BRAND,
                    submitting: p,
                    onClick: R,
                    children: h.NW.string(h.t.ZN4hkZ)
                })
            })
        ]
    });
}
