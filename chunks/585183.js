a.d(t, { h: () => C }), a(388685);
var l = a(54381),
    n = a(473749),
    s = a(512722),
    r = a.n(s),
    i = a(481060),
    o = a(457330),
    c = a(600164),
    d = a(710845),
    u = a(69580),
    x = a(424071),
    m = a(388032),
    h = a(771831);
let N = new d.Z("TwoWayLinkDiscordConsentWeb");
function C(e) {
    let {
            platformType: t,
            clientId: a,
            scopes: s,
            authToken: d,
            onContinue: C,
            onError: j,
            onClose: p,
            redirectUri: v,
        } = e,
        [f, b] = n.useState(!1),
        k = n.useCallback(
            async (e) => {
                let a,
                    l,
                    { location: n } = e,
                    { callbackCode: s, callbackState: r } = d;
                try {
                    a = await o.Z.completeTwoWayLink(t, n, s, r);
                } catch (e) {
                    var i;
                    N.error("".concat(t, " link error:"), e), (l = null == (i = e.body) ? void 0 : i.code);
                }
                null != a ? C() : j(l);
            },
            [t, d, C, j],
        ),
        {
            header: g,
            body: E,
            appDetails: T,
            sendAuthorize: O,
        } = (0, u.useOAuth2AuthorizeForm)({
            clientId: a,
            scopes: s,
            responseType: "code",
            callback: k,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: v,
            isTwoWayLinkDiscordConsent: !0,
        }),
        R = n.useCallback(() => {
            r()(null != O, "sendAuthorize not available"), b(!0), O(!0);
        }, [O]);
    return (0, l.jsxs)(x.Z, {
        children: [
            (0, l.jsxs)(i.xBx, {
                direction: c.Z.Direction.VERTICAL,
                className: h.header,
                separator: !1,
                children: [
                    (0, l.jsx)(i.Text, {
                        className: h.stepHeader,
                        variant: "text-xs/bold",
                        color: "text-default",
                        children: m.intl.format(m.t.fHz6eR, {
                            number: 2,
                            total: 2,
                        }),
                    }),
                    null != p &&
                        (0, l.jsx)(i.olH, {
                            className: h.closeButton,
                            onClick: p,
                        }),
                ],
            }),
            (0, l.jsxs)(i.hzk, {
                className: h.consentContent,
                paddingFix: !1,
                children: [
                    (0, l.jsx)("div", {
                        className: h.consentHeader,
                        children: g,
                    }),
                    E,
                    T,
                ],
            }),
            (0, l.jsx)(i.mzw, {
                className: h.footer,
                children: (0, l.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: h.footerButton,
                    children: (0, l.jsx)(i.Button, {
                        variant: "primary",
                        text: m.intl.string(m.t.ZN4hkc),
                        loading: f,
                        onClick: R,
                    }),
                }),
            }),
        ],
    });
}
