t.d(e, { W: () => C });
var n = t(627968),
    r = t(64700),
    s = t(284009),
    i = t.n(s),
    l = t(935462),
    c = t(834730),
    o = t(821609),
    d = t(77468),
    m = t(235986),
    x = t(626584),
    u = t(200330),
    N = t(141241),
    h = t(985018),
    p = t(974651);
let j = new x.A("TwoWayLinkDiscordConsentWeb");
function C(a) {
    let {
            platformType: e,
            clientId: t,
            scopes: s,
            authToken: x,
            onContinue: C,
            onError: g,
            onClose: b,
            redirectUri: v,
        } = a,
        [E, k] = r.useState(!1),
        A = r.useCallback(
            async (a) => {
                let t,
                    n,
                    { location: r } = a,
                    { callbackCode: s, callbackState: i } = x;
                try {
                    t = await d.A.completeTwoWayLink(e, r, s, i);
                } catch (a) {
                    j.error(`${e} link error:`, a), (n = a.body?.code);
                }
                null != t ? C() : g(n);
            },
            [e, x, C, g],
        ),
        {
            header: f,
            body: w,
            appDetails: D,
            sendAuthorize: _,
        } = (0, u.useOAuth2AuthorizeForm)({
            clientId: t,
            scopes: s,
            responseType: "code",
            callback: A,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: v,
            isTwoWayLinkDiscordConsent: !0,
        }),
        L = r.useCallback(() => {
            i()(null != _, "sendAuthorize not available"), k(!0), _(!0);
        }, [_]);
    return (0, n.jsxs)(N.A, {
        children: [
            (0, n.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: m.A.Direction.VERTICAL,
                className: p.wx,
                separator: !1,
                children: [
                    (0, n.jsx)(c.E, {
                        className: p.u1,
                        variant: "text-xs/bold",
                        color: "text-default",
                        children: h.intl.format(h.t.fHz6eR, { number: 2, total: 2 }),
                    }),
                    null != b && (0, n.jsx)(l.s_, { className: p.b, onClick: b }),
                ],
            }),
            (0, n.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: p.mB,
                paddingFix: !1,
                children: [(0, n.jsx)("div", { className: p.a8, children: f }), w, D],
            }),
            (0, n.jsx)(l.jl, {
                "data-migration-pending": !0,
                className: p.qr,
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: p.wC,
                    children: (0, n.jsx)(o.$, {
                        variant: "primary",
                        text: h.intl.string(h.t.ZN4hkc),
                        loading: E,
                        onClick: L,
                    }),
                }),
            }),
        ],
    });
}
