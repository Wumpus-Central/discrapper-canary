l.d(t, { F6: () => E, gO: () => _, OY: () => A });
var a = l(582128),
    n = l(855986),
    s = l(554146),
    i = l(220839),
    r = l(898660),
    o = l(385345),
    c = l(617617),
    d = l(188275),
    u = l(355097),
    h = l(312653);
let m = "2026-11-23T17:00:00Z",
    C = "2026-12-01T07:59:00Z",
    _ = {
        experiment: o.A,
        dismissibleContent: s.M.ORB_WALLET_BLACK_FRIDAY_RUST_PROMO,
        promotionId: "1569772120823693393",
        applicationId: d.IG,
        startsAt: m,
        endsAt: C,
        title: h.default.XgfZ0E,
        body: h.default.mPf8Wg,
        cta: h.default.dnqFO2,
        artUrl: "https://cdn.discordapp.com/assets/content/492f3b6b6422d7262f401adcad0aa7cabcc8fa2a1f8aa1dcc5d109893fa0ee19.png",
    },
    E = {
        experiment: o.V,
        dismissibleContent: s.M.ORB_WALLET_BLACK_FRIDAY_BLOONS_PROMO,
        promotionId: "1569773021273657476",
        applicationId: d.S3,
        startsAt: m,
        endsAt: C,
        title: h.default.UEMMJO,
        body: h.default.mPf8Wg,
        cta: h.default["72cAX3"],
        artUrl: "https://cdn.discordapp.com/assets/content/011c03cac9aa90208279e1ab95b2beb0ce5b90543ca646dc80a910ba56f8ece0.png",
    };
function A(e, t) {
    let l = (0, n.bG)([c.A], () =>
            (0, r.z)(
                { kind: "single_use", content: e.dismissibleContent, scope: {} },
                { dismissedContents: c.A.settings.userContent?.dismissedContents },
                c.A.hasLoaded(u.oD.PRELOADED_USER_SETTINGS),
            ),
        ),
        s = (function (e, t) {
            let [l, n] = a.useState(Date.now),
                s = Date.parse(e),
                r = Date.parse(t),
                o = null;
            return (
                l < s ? (o = s) : l <= r && (o = r + 1),
                (0, i.A)(() => n(Date.now()), null == o ? null : Math.min(o - l, 0x7fffffff)),
                l >= s && l <= r
            );
        })(e.startsAt, e.endsAt),
        o = t && l && s,
        { enabled: d } = e.experiment.useConfig({ location: "OrbWalletBlackFridayPromo" }, { autoTrackExposure: o });
    return o && d;
}
