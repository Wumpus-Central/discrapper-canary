t.d(a, { h: () => C }), t(388685);
var n = t(54381),
    r = t(473749),
    s = t(512722),
    l = t.n(s),
    i = t(481060),
    o = t(457330),
    c = t(600164),
    d = t(710845),
    x = t(69580),
    u = t(424071),
    h = t(388032),
    m = t(200025);
let N = new d.Z("TwoWayLinkDiscordConsentWeb");
function C(e) {
    let {
            platformType: a,
            clientId: t,
            scopes: s,
            authToken: d,
            onContinue: C,
            onError: j,
            onClose: p,
            redirectUri: v,
        } = e,
        [b, f] = r.useState(!1),
        k = r.useCallback(
            async (e) => {
                let t,
                    n,
                    { location: r } = e,
                    { callbackCode: s, callbackState: l } = d;
                try {
                    t = await o.Z.completeTwoWayLink(a, r, s, l);
                } catch (e) {
                    var i;
                    N.error("".concat(a, " link error:"), e), (n = null == (i = e.body) ? void 0 : i.code);
                }
                null != t ? C() : j(n);
            },
            [a, d, C, j],
        ),
        {
            header: g,
            body: E,
            appDetails: T,
            sendAuthorize: O,
        } = (0, x.useOAuth2AuthorizeForm)({
            clientId: t,
            scopes: s,
            responseType: "code",
            callback: k,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: v,
            isTwoWayLinkDiscordConsent: !0,
        }),
        R = r.useCallback(() => {
            l()(null != O, "sendAuthorize not available"), f(!0), O(!0);
        }, [O]);
    return (0, n.jsxs)(u.Z, {
        children: [
            (0, n.jsxs)(i.xBx, {
                direction: c.Z.Direction.VERTICAL,
                className: m.header,
                separator: !1,
                children: [
                    (0, n.jsx)(i.Text, {
                        className: m.stepHeader,
                        variant: "text-xs/bold",
                        color: "header-secondary",
                        children: h.intl.format(h.t.fHz6eR, {
                            number: 2,
                            total: 2,
                        }),
                    }),
                    null != p &&
                        (0, n.jsx)(i.olH, {
                            className: m.closeButton,
                            onClick: p,
                        }),
                ],
            }),
            (0, n.jsxs)(i.hzk, {
                className: m.consentContent,
                paddingFix: !1,
                children: [
                    (0, n.jsx)("div", {
                        className: m.consentHeader,
                        children: g,
                    }),
                    E,
                    T,
                ],
            }),
            (0, n.jsx)(i.mzw, {
                className: m.footer,
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: m.footerButton,
                    children: (0, n.jsx)(i.Button, {
                        variant: "primary",
                        text: h.intl.string(h.t.ZN4hkc),
                        loading: b,
                        onClick: R,
                    }),
                }),
            }),
        ],
    });
}
