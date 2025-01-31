t.d(e, { V: () => s });
var n = t(200651);
t(192379);
var a = t(952265),
    l = t(776045),
    r = t(871388),
    i = t(981631),
    o = t(388032);
function s(A, e, s) {
    var d, c;
    switch (A.code) {
        case i.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
            (0, r.B)(o.intl.string(o.t['04e8bG']), o.t.uVN1Y2, l.A.DANGER);
            break;
        case i.evJ.TWO_FA_NOT_ENABLED:
            (0, r.B)(o.intl.string(o.t['/yBjZ2']), o.t.kZ6Tgo, l.A.WARNING);
            break;
        case i.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
            (0, r.B)(o.intl.string(o.t.MeXDxs), o.t['5q146O'], l.A.WARNING);
            break;
        case i.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
            (0, a.ZD)(async () => {
                let { default: A } = await t.e('31835').then(t.bind(t, 393809));
                return (t) =>
                    (0, n.jsx)(A, {
                        guildId: e,
                        ...t
                    });
            });
            break;
        case i.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
            (0, r.B)(o.intl.string(o.t['4hWo0N']), o.t.Zkhwe3, l.A.WARNING);
            break;
        case i.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
            let u, g;
            null != s ? ((u = o.t.j2VMk5), (g = { url: i.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s) })) : (u = o.t.ZVV1go), (0, r.B)(o.intl.string(o.t['+CT/gY']), u, l.A.WARNING, g);
            break;
        default:
            let m = null !== (c = A.getFirstFieldErrorMessage(['published'])) && void 0 !== c ? c : (null === (d = A.hasFieldErrors) || void 0 === d ? void 0 : d.call(A)) ? void 0 : A.message;
            null != m && (0, r.B)(o.intl.string(o.t.bvWf8f), m, l.A.WARNING);
    }
}
