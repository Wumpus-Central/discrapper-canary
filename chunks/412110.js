A.d(t, { V: () => o });
var n = A(951288);
A(647438);
var r = A(952265),
    a = A(871388),
    i = A(981631),
    l = A(388032);
function o(e, t, o) {
    var s, d;
    switch (e.code) {
        case i.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
            (0, a.B)(l.intl.string(l.t["04e8bG"]), l.t.uVN1Y2);
            break;
        case i.evJ.TWO_FA_NOT_ENABLED:
            (0, a.B)(l.intl.string(l.t["/yBjZ2"]), l.t.kZ6Tgo);
            break;
        case i.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
            (0, a.B)(l.intl.string(l.t.MeXDxs), l.t["5q146O"]);
            break;
        case i.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
            (0, r.ZD)(async () => {
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
        case i.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
            (0, a.B)(l.intl.string(l.t["4hWo0N"]), l.t.Zkhwe3);
            break;
        case i.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
            let u, c;
            null != o ? ((u = l.t.j2VMk5), (c = { url: i.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(o) })) : (u = l.t.ZVV1go),
                (0, a.B)(l.intl.string(l.t["+CT/gY"]), u, c);
            break;
        default:
            let g =
                null != (d = e.getFirstFieldErrorMessage(["published"]))
                    ? d
                    : (null == (s = e.hasFieldErrors) ? void 0 : s.call(e))
                      ? void 0
                      : e.message;
            null != g && (0, a.B)(l.intl.string(l.t.bvWf8f), g);
    }
}
