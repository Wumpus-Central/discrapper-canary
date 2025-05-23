a.d(t, { h: () => C }), a(388685);
var r = a(255367),
    l = a(73800),
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
        [p, f] = l.useState(!1),
        b = l.useCallback(
            async (e) => {
                let a,
                    r,
                    { location: l } = e,
                    { callbackCode: s, callbackState: n } = d;
                try {
                    a = await c.Z.completeTwoWayLink(t, l, s, n);
                } catch (e) {
                    var o;
                    N.error(''.concat(t, ' link error:'), e), (r = null == (o = e.body) ? void 0 : o.code);
                }
                null != a ? C() : j(r);
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
        R = l.useCallback(() => {
            n()(null != O, 'sendAuthorize not available'), f(!0), O(!0);
        }, [O]);
    return (0, r.jsxs)(u.Z, {
        children: [
            (0, r.jsxs)(o.xBx, {
                direction: i.Z.Direction.VERTICAL,
                className: m.header,
                separator: !1,
                children: [
                    (0, r.jsx)(o.Text, {
                        className: m.stepHeader,
                        variant: 'text-xs/bold',
                        color: 'header-secondary',
                        children: h.intl.format(h.t.fHz6eX, {
                            number: 2,
                            total: 2
                        })
                    }),
                    null != k &&
                        (0, r.jsx)(o.olH, {
                            className: m.closeButton,
                            onClick: k
                        })
                ]
            }),
            (0, r.jsxs)(o.hzk, {
                className: m.consentContent,
                paddingFix: !1,
                children: [E, T, g]
            }),
            (0, r.jsx)(o.mzw, {
                className: m.footer,
                children: (0, r.jsx)(o.zxk, {
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
