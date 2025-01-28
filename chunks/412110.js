A.d(t, {
    V: function () {
        return s;
    }
});
var n = A(200651);
A(192379);
var r = A(952265),
    a = A(776045),
    i = A(871388),
    l = A(981631),
    o = A(388032);
function s(e, t, s) {
    var d, c, u;
    switch (e.code) {
        case l.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
            (0, i.B)(o.intl.string(o.t['04e8bG']), o.t.uVN1Y2, a.IconVariant.DANGER);
            break;
        case l.evJ.TWO_FA_NOT_ENABLED:
            (0, i.B)(o.intl.string(o.t['/yBjZ2']), o.t.kZ6Tgo, a.IconVariant.WARNING);
            break;
        case l.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
            (0, i.B)(o.intl.string(o.t.MeXDxs), o.t['5q146O'], a.IconVariant.WARNING);
            break;
        case l.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
            (d = t),
                (0, r.ZD)(async () => {
                    let { default: e } = await A.e('31835').then(A.bind(A, 393809));
                    return (t) =>
                        (0, n.jsx)(e, {
                            guildId: d,
                            ...t
                        });
                });
            break;
        case l.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
            (0, i.B)(o.intl.string(o.t['4hWo0N']), o.t.Zkhwe3, a.IconVariant.WARNING);
            break;
        case l.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
            let g, h;
            null != s ? ((g = o.t.j2VMk5), (h = { url: l.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s) })) : (g = o.t.ZVV1go), (0, i.B)(o.intl.string(o.t['+CT/gY']), g, a.IconVariant.WARNING, h);
            break;
        default:
            let p = null !== (u = e.getFirstFieldErrorMessage(['published'])) && void 0 !== u ? u : (null === (c = e.hasFieldErrors) || void 0 === c ? void 0 : c.call(e)) ? void 0 : e.message;
            if (null != p) (0, i.B)(o.intl.string(o.t.bvWf8f), p, a.IconVariant.WARNING);
    }
}
