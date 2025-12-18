a.d(t, { h: () => p }), a(388685);
var n = a(54381),
    r = a(473749),
    i = a(512722),
    l = a.n(i),
    s = a(481060),
    o = a(457330),
    c = a(600164),
    d = a(710845),
    u = a(69580),
    x = a(424071),
    m = a(388032),
    h = a(926375);
let N = new d.Z("TwoWayLinkDiscordConsentWeb");
function p(e) {
    let {
            platformType: t,
            clientId: a,
            scopes: i,
            authToken: d,
            onContinue: p,
            onError: g,
            onClose: C,
            redirectUri: j,
        } = e,
        [v, f] = r.useState(!1),
        b = r.useCallback(
            async (e) => {
                let a,
                    n,
                    { location: r } = e,
                    { callbackCode: i, callbackState: l } = d;
                try {
                    a = await o.Z.completeTwoWayLink(t, r, i, l);
                } catch (e) {
                    var s;
                    N.error("".concat(t, " link error:"), e), (n = null == (s = e.body) ? void 0 : s.code);
                }
                null != a ? p() : g(n);
            },
            [t, d, p, g],
        ),
        {
            header: k,
            body: E,
            appDetails: T,
            sendAuthorize: O,
        } = (0, u.useOAuth2AuthorizeForm)({
            clientId: a,
            scopes: i,
            responseType: "code",
            callback: b,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: j,
            isTwoWayLinkDiscordConsent: !0,
        }),
        R = r.useCallback(() => {
            l()(null != O, "sendAuthorize not available"), f(!0), O(!0);
        }, [O]);
    return (0, n.jsxs)(x.Z, {
        children: [
            (0, n.jsxs)(s.xBx, {
                "data-migration-pending": !0,
                direction: c.Z.Direction.VERTICAL,
                className: h.header,
                separator: !1,
                children: [
                    (0, n.jsx)(s.Text, {
                        className: h.stepHeader,
                        variant: "text-xs/bold",
                        color: "text-default",
                        children: m.intl.format(m.t.fHz6eR, {
                            number: 2,
                            total: 2,
                        }),
                    }),
                    null != C &&
                        (0, n.jsx)(s.olH, {
                            className: h.closeButton,
                            onClick: C,
                        }),
                ],
            }),
            (0, n.jsxs)(s.hzk, {
                "data-migration-pending": !0,
                className: h.consentContent,
                paddingFix: !1,
                children: [
                    (0, n.jsx)("div", {
                        className: h.consentHeader,
                        children: k,
                    }),
                    E,
                    T,
                ],
            }),
            (0, n.jsx)(s.mzw, {
                "data-migration-pending": !0,
                className: h.footer,
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: h.footerButton,
                    children: (0, n.jsx)(s.Button, {
                        variant: "primary",
                        text: m.intl.string(m.t.ZN4hkc),
                        loading: v,
                        onClick: R,
                    }),
                }),
            }),
        ],
    });
}
