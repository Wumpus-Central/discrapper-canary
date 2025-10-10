A.d(t, { V: () => o });
var r = A(951288);
A(647438);
var n = A(952265),
    a = A(871388),
    l = A(981631),
    i = A(388032);
function o(e, t, o) {
    var s, d;
    switch (e.code) {
        case l.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
            (0, a.B)(i.intl.string(i.t["04e8bG"]), i.t.uVN1Y2);
            break;
        case l.evJ.TWO_FA_NOT_ENABLED:
            (0, a.B)(i.intl.string(i.t["/yBjZ2"]), i.t.kZ6Tgo);
            break;
        case l.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
            (0, a.B)(i.intl.string(i.t.MeXDxs), i.t["5q146O"]);
            break;
        case l.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
            (0, n.ZD)(async () => {
                let { default: e } = await A.e("31835").then(A.bind(A, 393809));
                return (A) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var A = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(A);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(A).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(A, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = A[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({ guildId: t }, A),
                    );
            });
            break;
        case l.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
            (0, a.B)(i.intl.string(i.t["4hWo0N"]), i.t.Zkhwe3);
            break;
        case l.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
            let c, u;
            null != o ? ((c = i.t.j2VMk5), (u = { url: l.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(o) })) : (c = i.t.ZVV1go),
                (0, a.B)(i.intl.string(i.t["+CT/gY"]), c, u);
            break;
        default:
            let g =
                null != (d = e.getFirstFieldErrorMessage(["published"]))
                    ? d
                    : (null == (s = e.hasFieldErrors) ? void 0 : s.call(e))
                      ? void 0
                      : e.message;
            null != g && (0, a.B)(i.intl.string(i.t.bvWf8f), g);
    }
}
