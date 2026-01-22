n.d(t, {
    az: () => s,
});
var r = n(693198);
let i = "⁨",
    a = "⁩";

function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t &&
        !r._.getConfig({
            location: "isolateForNotification",
        }).isolateMentionsInNotifications
        ? e
        : i + e + a;
}
