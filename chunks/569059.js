l.d(n, { P: () => d, _: () => o });
var t = l(582128),
    a = l(688810),
    r = l(252732),
    i = l(339984);
let s = [{ name: "gif", extensions: ["gif"] }];
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
function o(e) {
    let { isPremiumTryItOut: n, ...l } = e;
    return u({ ...l, uploadType: i.HL.AVATAR, isPremiumTryItOut: n, filters: n ? s : void 0 });
}
function d(e) {
    return u({ ...e, uploadType: i.HL.BANNER });
}
