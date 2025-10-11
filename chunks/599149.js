n.d(t, { KM: () => o });
var r = n(569504);
let i = "\u2068",
    a = "\u2069";
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t && !r.Y.getConfig({ location: "isolateForNotification" }).isolateMentionsInNotifications ? e : i + e + a;
}
