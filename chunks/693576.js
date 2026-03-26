t.d(e, { W: () => p });
var n = t(627968),
    r = t(64700),
    s = t(284009),
    i = t.n(s),
    l = t(397927),
    c = t(77468),
    o = t(235986),
    d = t(626584),
    x = t(200330),
    m = t(141241),
    u = t(985018),
    N = t(58123);
let h = new d.A("TwoWayLinkDiscordConsentWeb");
function p(a) {
    let {
            platformType: e,
            clientId: t,
            scopes: s,
            authToken: d,
            onContinue: p,
            onError: j,
            onClose: C,
            redirectUri: g,
        } = a,
        [b, v] = r.useState(!1),
        E = r.useCallback(
            async (a) => {
                let t,
                    n,
                    { location: r } = a,
                    { callbackCode: s, callbackState: i } = d;
                try {
                    t = await c.A.completeTwoWayLink(e, r, s, i);
                } catch (a) {
                    h.error(`${e} link error:`, a), (n = a.body?.code);
                }
                null != t ? p() : j(n);
            },
            [e, d, p, j],
        ),
        {
            header: f,
            body: k,
            appDetails: A,
            sendAuthorize: T,
        } = (0, x.useOAuth2AuthorizeForm)({
            clientId: t,
            scopes: s,
            responseType: "code",
            callback: E,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: g,
            isTwoWayLinkDiscordConsent: !0,
        }),
        w = r.useCallback(() => {
            i()(null != T, "sendAuthorize not available"), v(!0), T(!0);
        }, [T]);
    return (0, n.jsxs)(m.A, {
        children: [
            (0, n.jsxs)(l.rQ0, {
                "data-migration-pending": !0,
                direction: o.A.Direction.VERTICAL,
                className: N.wx,
                separator: !1,
                children: [
                    (0, n.jsx)(l.Text, {
                        className: N.u1,
                        variant: "text-xs/bold",
                        color: "text-default",
                        children: u.intl.format(u.t.fHz6eR, { number: 2, total: 2 }),
                    }),
                    null != C && (0, n.jsx)(l.s_y, { className: N.b, onClick: C }),
                ],
            }),
            (0, n.jsxs)(l.$mQ, {
                "data-migration-pending": !0,
                className: N.mB,
                paddingFix: !1,
                children: [(0, n.jsx)("div", { className: N.a8, children: f }), k, A],
            }),
            (0, n.jsx)(l.jlY, {
                "data-migration-pending": !0,
                className: N.qr,
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: N.wC,
                    children: (0, n.jsx)(l.Button, {
                        variant: "primary",
                        text: u.intl.string(u.t.ZN4hkc),
                        loading: b,
                        onClick: w,
                    }),
                }),
            }),
        ],
    });
}
