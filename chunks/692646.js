t.d(A, { Z: () => s });
var r = t(627968);
t(64700);
var n = t(192308),
    l = t(575077),
    a = t(652215),
    i = t(985018);
function s(e, A, s) {
    var o, d;
    switch (e.code) {
        case a.t02.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
            (0, l.p)(i.intl.string(i.t["04e8bO"]), i.t.uVN1Y5);
            break;
        case a.t02.TWO_FA_NOT_ENABLED:
            (0, l.p)(i.intl.string(i.t["/yBjZy"]), i.t.kZ6Tgg);
            break;
        case a.t02.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
            (0, l.p)(i.intl.string(i.t.MeXDxg), i.t["5q146K"]);
            break;
        case a.t02.MONETIZATION_TERMS_NOT_ACCEPTED:
            (0, n.openModalLazy)(async () => {
                let { default: e } = await t.e("91826").then(t.bind(t, 431913));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
                            for (var A = 1; A < arguments.length; A++) {
                                var t = null != arguments[A] ? arguments[A] : {},
                                    r = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (A) {
                                        var r;
                                        (r = t[A]),
                                            A in e
                                                ? Object.defineProperty(e, A, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[A] = r);
                                    });
                            }
                            return e;
                        })({ guildId: A }, t),
                    );
            });
            break;
        case a.t02.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
            (0, l.p)(i.intl.string(i.t["4hWo0C"]), i.t.Zkhwex);
            break;
        case a.t02.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
            let c, u;
            null != s ? ((c = i.t.j2VMk6), (u = { url: a.X7G.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s) })) : (c = i.t.ZVV1gg),
                (0, l.p)(i.intl.string(i.t["+CT/gV"]), c, u);
            break;
        default:
            let g =
                null != (o = e.getFirstFieldErrorMessage(["published"]))
                    ? o
                    : (null == (d = e.hasFieldErrors) ? void 0 : d.call(e))
                      ? void 0
                      : e.message;
            null != g && (0, l.p)(i.intl.string(i.t.bvWf8T), g);
    }
}
