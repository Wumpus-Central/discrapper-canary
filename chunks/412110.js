r.d(t, { V: () => s });
var n = r(255367);
r(73800);
var i = r(952265),
    a = r(776045),
    l = r(871388),
    o = r(981631),
    A = r(388032);
function s(e, t, s) {
    var c, d;
    switch (e.code) {
        case o.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
            (0, l.B)(A.intl.string(A.t['04e8bG']), A.t.uVN1Y2, a.A.DANGER);
            break;
        case o.evJ.TWO_FA_NOT_ENABLED:
            (0, l.B)(A.intl.string(A.t['/yBjZ2']), A.t.kZ6Tgo, a.A.WARNING);
            break;
        case o.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
            (0, l.B)(A.intl.string(A.t.MeXDxs), A.t['5q146O'], a.A.WARNING);
            break;
        case o.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
            (0, i.ZD)(async () => {
                let { default: e } = await r.e('31835').then(r.bind(r, 393809));
                return (r) =>
                    (0, n.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({ guildId: t }, r)
                    );
            });
            break;
        case o.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
            (0, l.B)(A.intl.string(A.t['4hWo0N']), A.t.Zkhwe3, a.A.WARNING);
            break;
        case o.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
            let u, f;
            null != s ? ((u = A.t.j2VMk5), (f = { url: o.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s) })) : (u = A.t.ZVV1go), (0, l.B)(A.intl.string(A.t['+CT/gY']), u, a.A.WARNING, f);
            break;
        default:
            let g = null != (d = e.getFirstFieldErrorMessage(['published'])) ? d : (null == (c = e.hasFieldErrors) ? void 0 : c.call(e)) ? void 0 : e.message;
            null != g && (0, l.B)(A.intl.string(A.t.bvWf8f), g, a.A.WARNING);
    }
}
