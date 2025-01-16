n.d(t, {
    h: function () {
        return C;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    l = n(512722),
    o = n.n(l),
    s = n(481060),
    c = n(457330),
    i = n(600164),
    d = n(710845),
    u = n(69580),
    x = n(424071),
    h = n(388032),
    N = n(38920);
let m = new d.Z('TwoWayLinkDiscordConsentWeb');
function C(e) {
    let { platformType: t, clientId: n, scopes: l, authToken: d, onContinue: C, onError: j, onClose: f, redirectUri: v } = e,
        [p, b] = r.useState(!1),
        E = r.useCallback(
            async (e) => {
                let n,
                    a,
                    { location: r } = e,
                    { callbackCode: l, callbackState: o } = d;
                try {
                    n = await c.Z.completeTwoWayLink(t, r, l, o);
                } catch (e) {
                    var s;
                    m.error(''.concat(t, ' link error:'), e), (a = null === (s = e.body) || void 0 === s ? void 0 : s.code);
                }
                null != n ? C() : j(a);
            },
            [t, d, C, j]
        ),
        {
            header: g,
            body: k,
            appDetails: T,
            sendAuthorize: B
        } = (0, u.useOAuth2AuthorizeForm)({
            clientId: n,
            scopes: l,
            responseType: 'code',
            callback: E,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: v
        }),
        O = r.useCallback(() => {
            o()(null != B, 'sendAuthorize not available'), b(!0), B(!0);
        }, [B]);
    return (0, a.jsxs)(x.Z, {
        children: [
            (0, a.jsxs)(s.ModalHeader, {
                direction: i.Z.Direction.VERTICAL,
                className: N.header,
                separator: !1,
                children: [
                    (0, a.jsx)(s.Text, {
                        className: N.stepHeader,
                        variant: 'text-xs/bold',
                        color: 'header-secondary',
                        children: h.intl.format(h.t.fHz6eX, {
                            number: 2,
                            total: 2
                        })
                    }),
                    null != f &&
                        (0, a.jsx)(s.ModalCloseButton, {
                            className: N.closeButton,
                            onClick: f
                        })
                ]
            }),
            (0, a.jsxs)(s.ModalContent, {
                className: N.consentContent,
                paddingFix: !1,
                children: [g, k, T]
            }),
            (0, a.jsx)(s.ModalFooter, {
                className: N.footer,
                children: (0, a.jsx)(s.Button, {
                    className: N.footerButton,
                    color: s.Button.Colors.BRAND,
                    submitting: p,
                    onClick: O,
                    children: h.intl.string(h.t.ZN4hkZ)
                })
            })
        ]
    });
}
