A.d(t, { V: () => s });
var n = A(255367);
A(73800);
var r = A(952265),
    a = A(776045),
    l = A(871388),
    i = A(981631),
    o = A(388032);
function s(e, t, s) {
    var c, d;
    switch (e.code) {
        case i.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
            (0, l.B)(o.intl.string(o.t['04e8bG']), o.t.uVN1Y2, a.A.DANGER);
            break;
        case i.evJ.TWO_FA_NOT_ENABLED:
            (0, l.B)(o.intl.string(o.t['/yBjZ2']), o.t.kZ6Tgo, a.A.WARNING);
            break;
        case i.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
            (0, l.B)(o.intl.string(o.t.MeXDxs), o.t['5q146O'], a.A.WARNING);
            break;
        case i.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
            (0, r.ZD)(async () => {
                let { default: e } = await A.e('31835').then(A.bind(A, 393809));
                return (A) =>
                    (0, n.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var A = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(A);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(A).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(A, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        ((n = A[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n));
                                    }));
                            }
                            return e;
                        })({ guildId: t }, A)
                    );
            });
            break;
        case i.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
            (0, l.B)(o.intl.string(o.t['4hWo0N']), o.t.Zkhwe3, a.A.WARNING);
            break;
        case i.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
            let u, f;
            (null != s ? ((u = o.t.j2VMk5), (f = { url: i.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s) })) : (u = o.t.ZVV1go), (0, l.B)(o.intl.string(o.t['+CT/gY']), u, a.A.WARNING, f));
            break;
        default:
            let g = null != (d = e.getFirstFieldErrorMessage(['published'])) ? d : (null == (c = e.hasFieldErrors) ? void 0 : c.call(e)) ? void 0 : e.message;
            null != g && (0, l.B)(o.intl.string(o.t.bvWf8f), g, a.A.WARNING);
    }
}
