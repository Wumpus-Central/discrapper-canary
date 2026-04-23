t.d(e, { Z: () => s });
var a = t(627968);
t(64700);
var n = t(192308),
    r = t(575077),
    l = t(652215),
    i = t(985018);
function s(A, e, s) {
    switch (A.code) {
        case l.t02.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
            (0, r.p)(i.intl.string(i.t["04e8bO"]), i.t.uVN1Y5);
            break;
        case l.t02.TWO_FA_NOT_ENABLED:
            (0, r.p)(i.intl.string(i.t["/yBjZy"]), i.t.kZ6Tgg);
            break;
        case l.t02.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
            (0, r.p)(i.intl.string(i.t.MeXDxg), i.t["5q146K"]);
            break;
        case l.t02.MONETIZATION_TERMS_NOT_ACCEPTED:
            (0, n.openModalLazy)(async () => {
                let { default: A } = await t.e("91826").then(t.bind(t, 431913));
                return (t) => (0, a.jsx)(A, { guildId: e, ...t });
            });
            break;
        case l.t02.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
            (0, r.p)(i.intl.string(i.t["4hWo0C"]), i.t.Zkhwex);
            break;
        case l.t02.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
            let o, d;
            null != s ? ((o = i.t.j2VMk6), (d = { url: l.X7G.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s) })) : (o = i.t.ZVV1gg),
                (0, r.p)(i.intl.string(i.t["+CT/gV"]), o, d);
            break;
        default:
            let c = A.getFirstFieldErrorMessage(["published"]) ?? (A.hasFieldErrors?.() ? void 0 : A.message);
            null != c && (0, r.p)(i.intl.string(i.t.bvWf8T), c);
    }
}
