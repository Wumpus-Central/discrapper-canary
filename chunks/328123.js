l.d(t, { F6: () => A, gO: () => _, OY: () => g });
var n = l(582128),
    a = l(855986),
    s = l(554146),
    i = l(220839),
    r = l(898660),
    o = l(385345),
    c = l(617617),
    h = l(188275),
    d = l(355097),
    u = l(312653);
let m = "2026-11-23T17:00:00Z",
    C = "2026-12-01T07:59:00Z",
    _ = {
        experiment: o.A,
        dismissibleContent: s.M.ORB_WALLET_BLACK_FRIDAY_RUST_PROMO,
        promotionId: "1569772120823693393",
        applicationId: h.IG,
        startsAt: m,
        endsAt: C,
        title: u.default.XgfZ0E,
        body: u.default.mPf8Wg,
        cta: u.default.dnqFO2,
        artUrl: "https://cdn.discordapp.com/assets/content/492f3b6b6422d7262f401adcad0aa7cabcc8fa2a1f8aa1dcc5d109893fa0ee19.png",
    },
    A = {
        experiment: o.V,
        dismissibleContent: s.M.ORB_WALLET_BLACK_FRIDAY_BLOONS_PROMO,
        promotionId: "1569773021273657476",
        applicationId: h.S3,
        startsAt: m,
        endsAt: C,
        title: u.default.UEMMJO,
        body: u.default.mPf8Wg,
        cta: u.default["72cAX3"],
        artUrl: "https://cdn.discordapp.com/assets/content/011c03cac9aa90208279e1ab95b2beb0ce5b90543ca646dc80a910ba56f8ece0.png",
    };
function g(e, t) {
    let l = (0, a.bG)([c.A], () =>
            (0, r.z)(
                { kind: "single_use", content: e.dismissibleContent, scope: {} },
                { dismissedContents: c.A.settings.userContent?.dismissedContents },
                c.A.hasLoaded(d.oD.PRELOADED_USER_SETTINGS),
            ),
        ),
        s = (function (e, t) {
            let [l, a] = n.useState(Date.now),
                s = Date.parse(e),
                r = Date.parse(t),
                o = null;
            return (
                l < s ? (o = s) : l <= r && (o = r + 1),
                (0, i.A)(() => a(Date.now()), null == o ? null : Math.min(o - l, 0x7fffffff)),
                l >= s && l <= r
            );
        })(e.startsAt, e.endsAt),
        o = t && l && s,
        { enabled: h } = e.experiment.useConfig({ location: "OrbWalletBlackFridayPromo" }, { autoTrackExposure: o });
    return o && h;
}
