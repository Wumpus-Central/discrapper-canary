r.d(t, { V: () => s });
var n = r(200651);
r(192379);
var A = r(952265),
    a = r(776045),
    o = r(871388),
    l = r(981631),
    i = r(388032);
function s(e, t, s) {
    var c, d;
    switch (e.code) {
        case l.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
            (0, o.B)(i.NW.string(i.t['04e8bG']), i.t.uVN1Y2, a.A.DANGER);
            break;
        case l.evJ.TWO_FA_NOT_ENABLED:
            (0, o.B)(i.NW.string(i.t['/yBjZ2']), i.t.kZ6Tgo, a.A.WARNING);
            break;
        case l.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
            (0, o.B)(i.NW.string(i.t.MeXDxs), i.t['5q146O'], a.A.WARNING);
            break;
        case l.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
            (0, A.ZD)(async () => {
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
        case l.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
            (0, o.B)(i.NW.string(i.t['4hWo0N']), i.t.Zkhwe3, a.A.WARNING);
            break;
        case l.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
            let u, g;
            null != s ? ((u = i.t.j2VMk5), (g = { url: l.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s) })) : (u = i.t.ZVV1go), (0, o.B)(i.NW.string(i.t['+CT/gY']), u, a.A.WARNING, g);
            break;
        default:
            let f = null != (d = e.getFirstFieldErrorMessage(['published'])) ? d : (null == (c = e.hasFieldErrors) ? void 0 : c.call(e)) ? void 0 : e.message;
            null != f && (0, o.B)(i.NW.string(i.t.bvWf8f), f, a.A.WARNING);
    }
}
