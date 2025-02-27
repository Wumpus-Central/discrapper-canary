r.d(t, { V: () => s });
var A = r(200651);
r(192379);
var n = r(952265),
    o = r(776045),
    a = r(871388),
    l = r(981631),
    i = r(388032);
function s(e, t, s) {
    var c, d;
    switch (e.code) {
        case l.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
            (0, a.B)(i.NW.string(i.t['04e8bG']), i.t.uVN1Y2, o.A.DANGER);
            break;
        case l.evJ.TWO_FA_NOT_ENABLED:
            (0, a.B)(i.NW.string(i.t['/yBjZ2']), i.t.kZ6Tgo, o.A.WARNING);
            break;
        case l.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
            (0, a.B)(i.NW.string(i.t.MeXDxs), i.t['5q146O'], o.A.WARNING);
            break;
        case l.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
            (0, n.ZD)(async () => {
                let { default: e } = await r.e('31835').then(r.bind(r, 393809));
                return (r) =>
                    (0, A.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    A = Object.keys(r);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (A = A.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    A.forEach(function (t) {
                                        var A;
                                        (A = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: A,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = A);
                                    });
                            }
                            return e;
                        })({ guildId: t }, r)
                    );
            });
            break;
        case l.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
            (0, a.B)(i.NW.string(i.t['4hWo0N']), i.t.Zkhwe3, o.A.WARNING);
            break;
        case l.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
            let u, f;
            null != s ? ((u = i.t.j2VMk5), (f = { url: l.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s) })) : (u = i.t.ZVV1go), (0, a.B)(i.NW.string(i.t['+CT/gY']), u, o.A.WARNING, f);
            break;
        default:
            let g = null !== (d = e.getFirstFieldErrorMessage(['published'])) && void 0 !== d ? d : (null === (c = e.hasFieldErrors) || void 0 === c ? void 0 : c.call(e)) ? void 0 : e.message;
            null != g && (0, a.B)(i.NW.string(i.t.bvWf8f), g, o.A.WARNING);
    }
}
