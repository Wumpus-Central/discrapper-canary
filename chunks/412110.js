t.d(A, { V: () => i });
var r = t(951288);
t(647438);
var n = t(952265),
    l = t(871388),
    a = t(981631),
    o = t(388032);
function i(e, A, i) {
    var s, d;
    switch (e.code) {
        case a.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
            (0, l.B)(o.intl.string(o.t["04e8bG"]), o.t.uVN1Y2);
            break;
        case a.evJ.TWO_FA_NOT_ENABLED:
            (0, l.B)(o.intl.string(o.t["/yBjZ2"]), o.t.kZ6Tgo);
            break;
        case a.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
            (0, l.B)(o.intl.string(o.t.MeXDxs), o.t["5q146O"]);
            break;
        case a.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
            (0, n.ZD)(async () => {
                let { default: e } = await t.e("31835").then(t.bind(t, 393809));
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
        case a.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
            (0, l.B)(o.intl.string(o.t["4hWo0N"]), o.t.Zkhwe3);
            break;
        case a.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
            let c, u;
            null != i ? ((c = o.t.j2VMk5), (u = { url: a.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i) })) : (c = o.t.ZVV1go),
                (0, l.B)(o.intl.string(o.t["+CT/gY"]), c, u);
            break;
        default:
            let f =
                null != (d = e.getFirstFieldErrorMessage(["published"]))
                    ? d
                    : (null == (s = e.hasFieldErrors) ? void 0 : s.call(e))
                      ? void 0
                      : e.message;
            null != f && (0, l.B)(o.intl.string(o.t.bvWf8f), f);
    }
}
