A.d(t, { V: () => o });
var n = A(54381);
A(473749);
var r = A(952265),
    a = A(871388),
    l = A(981631),
    i = A(388032);
function o(e, t, o) {
    var s, d;
    switch (e.code) {
        case l.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
            (0, a.B)(i.intl.string(i.t["04e8bO"]), i.t.uVN1Y5);
            break;
        case l.evJ.TWO_FA_NOT_ENABLED:
            (0, a.B)(i.intl.string(i.t["/yBjZy"]), i.t.kZ6Tgg);
            break;
        case l.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
            (0, a.B)(i.intl.string(i.t.MeXDxg), i.t["5q146K"]);
            break;
        case l.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
            (0, r.openModalLazy)(async () => {
                let { default: e } = await A.e("31835").then(A.bind(A, 393809));
                return (A) =>
                    (0, n.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var A = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(A);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(A).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(A, e).enumerable;
                                        }),
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = A[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({ guildId: t }, A),
                    );
            });
            break;
        case l.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
            (0, a.B)(i.intl.string(i.t["4hWo0C"]), i.t.Zkhwex);
            break;
        case l.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
            let c, u;
            null != o ? ((c = i.t.j2VMk6), (u = { url: l.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(o) })) : (c = i.t.ZVV1gg),
                (0, a.B)(i.intl.string(i.t["+CT/gV"]), c, u);
            break;
        default:
            let f =
                null != (d = e.getFirstFieldErrorMessage(["published"]))
                    ? d
                    : (null == (s = e.hasFieldErrors) ? void 0 : s.call(e))
                      ? void 0
                      : e.message;
            null != f && (0, a.B)(i.intl.string(i.t.bvWf8T), f);
    }
}
