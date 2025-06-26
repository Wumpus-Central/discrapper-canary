a.d(t, { h: () => C }), a(388685);
var l = a(255367),
    r = a(73800),
    s = a(512722),
    n = a.n(s),
    o = a(481060),
    c = a(457330),
    i = a(600164),
    d = a(710845),
    x = a(69580),
    u = a(424071),
    h = a(388032),
    m = a(475286);
let N = new d.Z('TwoWayLinkDiscordConsentWeb');
function C(e) {
    let { platformType: t, clientId: a, scopes: s, authToken: d, onContinue: C, onError: j, onClose: k, redirectUri: v } = e,
        [p, f] = r.useState(!1),
        b = r.useCallback(
            async (e) => {
                let a,
                    l,
                    { location: r } = e,
                    { callbackCode: s, callbackState: n } = d;
                try {
                    a = await c.Z.completeTwoWayLink(t, r, s, n);
                } catch (e) {
                    var o;
                    N.error(''.concat(t, ' link error:'), e), (l = null == (o = e.body) ? void 0 : o.code);
                }
                null != a ? C() : j(l);
            },
            [t, d, C, j]
        ),
        {
            header: E,
            body: T,
            appDetails: g,
            sendAuthorize: O
        } = (0, x.useOAuth2AuthorizeForm)({
            clientId: a,
            scopes: s,
            responseType: 'code',
            callback: b,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: v
        }),
        R = r.useCallback(() => {
            n()(null != O, 'sendAuthorize not available'), f(!0), O(!0);
        }, [O]);
    return (0, l.jsxs)(u.Z, {
        children: [
            (0, l.jsxs)(o.xBx, {
                direction: i.Z.Direction.VERTICAL,
                className: m.header,
                separator: !1,
                children: [
                    (0, l.jsx)(o.Text, {
                        className: m.stepHeader,
                        variant: 'text-xs/bold',
                        color: 'header-secondary',
                        children: h.intl.format(h.t.fHz6eX, {
                            number: 2,
                            total: 2
                        })
                    }),
                    null != k &&
                        (0, l.jsx)(o.olH, {
                            className: m.closeButton,
                            onClick: k
                        })
                ]
            }),
            (0, l.jsxs)(o.hzk, {
                className: m.consentContent,
                paddingFix: !1,
                children: [E, T, g]
            }),
            (0, l.jsx)(o.mzw, {
                className: m.footer,
                children: (0, l.jsx)(o.zxk, {
                    className: m.footerButton,
                    color: o.zxk.Colors.BRAND,
                    submitting: p,
                    onClick: R,
                    children: h.intl.string(h.t.ZN4hkZ)
                })
            })
        ]
    });
}
