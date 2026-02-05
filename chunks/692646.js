t.d(e, { Z: () => s });
var n = t(627968);
t(64700);
var a = t(192308),
    r = t(575077),
    i = t(652215),
    l = t(985018);
function s(A, e, s) {
    switch (A.code) {
        case i.t02.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
            (0, r.p)(l.intl.string(l.t["04e8bO"]), l.t.uVN1Y5);
            break;
        case i.t02.TWO_FA_NOT_ENABLED:
            (0, r.p)(l.intl.string(l.t["/yBjZy"]), l.t.kZ6Tgg);
            break;
        case i.t02.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
            (0, r.p)(l.intl.string(l.t.MeXDxg), l.t["5q146K"]);
            break;
        case i.t02.MONETIZATION_TERMS_NOT_ACCEPTED:
            (0, a.openModalLazy)(async () => {
                let { default: A } = await t.e("91826").then(t.bind(t, 431913));
                return (t) => (0, n.jsx)(A, { guildId: e, ...t });
            });
            break;
        case i.t02.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
            (0, r.p)(l.intl.string(l.t["4hWo0C"]), l.t.Zkhwex);
            break;
        case i.t02.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
            let o, d;
            null != s ? ((o = l.t.j2VMk6), (d = { url: i.X7G.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s) })) : (o = l.t.ZVV1gg),
                (0, r.p)(l.intl.string(l.t["+CT/gV"]), o, d);
            break;
        default:
            let u = A.getFirstFieldErrorMessage(["published"]) ?? (A.hasFieldErrors?.() ? void 0 : A.message);
            null != u && (0, r.p)(l.intl.string(l.t.bvWf8T), u);
    }
}
