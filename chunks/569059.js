var t = l(582128),
    i = l(688810),
    a = l(468450),
    r = l(339984);
let s = [{ name: "gif, webp", extensions: ["gif", "webp"] }];
function u(e) {
    let { uploadType: n, guildId: l, isPremiumTryItOut: r = !1, returnRef: s, filters: u } = e,
        { newestAnalyticsLocation: d } = (0, i.Ay)();
    return t.useCallback(
        () =>
            (0, a.XD)({
                uploadType: n,
                analyticsSource: d,
                filters: u,
                guildId: l ?? void 0,
                isTryItOut: r,
                stackingBehavior: "stack",
                returnRef: s,
            }),
        [n, l, r, d, s, u],
    );
}
l.d(
    n,
    {},
    {
        P: function (e) {
            return u({ ...e, uploadType: r.HL.BANNER });
        },
        _: function (e) {
            let { isPremiumTryItOut: n, ...l } = e;
            return u({ ...l, uploadType: r.HL.AVATAR, isPremiumTryItOut: n, filters: n ? s : void 0 });
        },
    },
);
