(t.d(a, { h: () => C }), t(388685));
var r = t(255367),
    s = t(73800),
    l = t(512722),
    n = t.n(l),
    i = t(481060),
    o = t(457330),
    c = t(600164),
    d = t(710845),
    x = t(69580),
    u = t(424071),
    h = t(388032),
    m = t(475286);
let N = new d.Z('TwoWayLinkDiscordConsentWeb');
function C(e) {
    let { platformType: a, clientId: t, scopes: l, authToken: d, onContinue: C, onError: j, onClose: p, redirectUri: v } = e,
        [k, f] = s.useState(!1),
        b = s.useCallback(
            async (e) => {
                let t,
                    r,
                    { location: s } = e,
                    { callbackCode: l, callbackState: n } = d;
                try {
                    t = await o.Z.completeTwoWayLink(a, s, l, n);
                } catch (e) {
                    var i;
                    (N.error(''.concat(a, ' link error:'), e), (r = null == (i = e.body) ? void 0 : i.code));
                }
                null != t ? C() : j(r);
            },
            [a, d, C, j]
        ),
        {
            header: E,
            body: T,
            appDetails: g,
            sendAuthorize: O
        } = (0, x.useOAuth2AuthorizeForm)({
            clientId: t,
            scopes: l,
            responseType: 'code',
            callback: b,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: v
        }),
        y = s.useCallback(() => {
            (n()(null != O, 'sendAuthorize not available'), f(!0), O(!0));
        }, [O]);
    return (0, r.jsxs)(u.Z, {
        children: [
            (0, r.jsxs)(i.xBx, {
                direction: c.Z.Direction.VERTICAL,
                className: m.header,
                separator: !1,
                children: [
                    (0, r.jsx)(i.Text, {
                        className: m.stepHeader,
                        variant: 'text-xs/bold',
                        color: 'header-secondary',
                        children: h.intl.format(h.t.fHz6eX, {
                            number: 2,
                            total: 2
                        })
                    }),
                    null != p &&
                        (0, r.jsx)(i.olH, {
                            className: m.closeButton,
                            onClick: p
                        })
                ]
            }),
            (0, r.jsxs)(i.hzk, {
                className: m.consentContent,
                paddingFix: !1,
                children: [E, T, g]
            }),
            (0, r.jsx)(i.mzw, {
                className: m.footer,
                children: (0, r.jsx)('div', {
                    'data-button-hoisted-classname-wrapper': !0,
                    className: m.footerButton,
                    children: (0, r.jsx)(i.zxk, {
                        variant: 'primary',
                        text: h.intl.string(h.t.ZN4hkZ),
                        loading: k,
                        onClick: y
                    })
                })
            })
        ]
    });
}
