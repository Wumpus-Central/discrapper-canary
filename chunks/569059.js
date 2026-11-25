var t = l(582128),
    a = l(688810),
    r = l(468450),
    i = l(339984);
let s = [{ name: "gif, webp", extensions: ["gif", "webp"] }];
function u(e) {
    let { uploadType: n, guildId: l, isPremiumTryItOut: i = !1, returnRef: s, filters: u } = e,
        { newestAnalyticsLocation: o } = (0, a.Ay)();
    return t.useCallback(
        () =>
            (0, r.XD)({
                uploadType: n,
                analyticsSource: o,
                filters: u,
                guildId: l ?? void 0,
                isTryItOut: i,
                stackingBehavior: "stack",
                returnRef: s,
            }),
        [n, l, i, o, s, u],
    );
}
l.d(
    n,
    {},
    {
        P: function (e) {
            return u({ ...e, uploadType: i.HL.BANNER });
        },
        _: function (e) {
            let { isPremiumTryItOut: n, ...l } = e;
            return u({ ...l, uploadType: i.HL.AVATAR, isPremiumTryItOut: n, filters: n ? s : void 0 });
        },
    },
);
