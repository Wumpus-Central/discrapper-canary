n.d(t, { Z: () => s });
var r = n(822632),
    i = n(554684),
    a = n(765859);
let o = 27,
    s = {
        read: l,
        SHOT_INFO_AUTO_ROTATE: 27,
    };
function l(e, t, n, o, s) {
    let l = (0, i.N)(e, a.lh, t, t + n, o, s);
    return l.ShotInfo && ((l = (0, r.wB)({}, l, c(l.ShotInfo.value))), delete l.ShotInfo), l;
}
function c(e) {
    let t = {};
    return (
        void 0 !== e[o] &&
            (t.AutoRotate = {
                value: e[o],
                description: u(e[o]),
            }),
        t
    );
}
function u(e) {
    return 0 === e ? "None" : 1 === e ? "Rotate 90 CW" : 2 === e ? "Rotate 180" : 3 === e ? "Rotate 270 CW" : "Unknown";
}
