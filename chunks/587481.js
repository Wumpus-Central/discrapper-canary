var a = s(506774),
    i = s(824744);
let n = "MediaPlayerVolume";
function l() {
    let { volume: e } = a.w.get(n) ?? {};
    return ("number" != typeof e && (e = 1), (e = Math.min(1, Math.max(0, e))));
}
function r(e) {
    a.w.set(n, { volume: e, muted: o() });
}
function o() {
    let { muted: e } = a.w.get(n) ?? {};
    return ("boolean" != typeof e && (e = !1), e);
}
s.d(
    t,
    {},
    {
        GD: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return (0, i.M)(l(), e);
        },
        ls: r,
        oc: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            r((0, i.w)(e, t));
        },
        uj: o,
        v1: l,
        y5: function (e) {
            a.w.set(n, { volume: l(), muted: e });
        },
    },
);
