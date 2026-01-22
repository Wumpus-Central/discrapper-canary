n.d(t, { A: () => d });
var r = n(890167),
    i = n(643479),
    a = n(801765),
    s = n(105423);
let o = 8,
    l = 10,
    c = { K3_III: 78420 },
    u = {
        CAMERA_ORIENTATION: 1,
        ROLL_ANGLE: 3,
        PITCH_ANGLE: 5,
    },
    d = {
        read: f,
        PENTAX_IFD_OFFSET: 10,
        MODEL_ID: c,
        LIK3III: u,
    };
function f(e, t, n, c) {
    let u = r.A.getByteOrder(e, t + n + o),
        d = t + n,
        f = (0, a.y)(e, s.SI, d, d + l, u, c, !0);
    return p(f) && ((f = (0, i.dP)({}, f, _(e, d + f.LevelInfo.__offset, u))), delete f.LevelInfo), f;
}
function p(e) {
    return e.PentaxModelID && e.PentaxModelID.value === c.K3_III && e.LevelInfo;
}
function _(e, t, n) {
    let i = {};
    if (t + 7 > e.byteLength) return i;
    let a = e.getInt8(t + u.CAMERA_ORIENTATION);
    i.CameraOrientation = {
        value: a,
        description: h(a),
    };
    let s = e.getInt16(t + u.ROLL_ANGLE, n === r.A.LITTLE_ENDIAN);
    i.RollAngle = {
        value: s,
        description: m(s),
    };
    let o = e.getInt16(t + u.PITCH_ANGLE, n === r.A.LITTLE_ENDIAN);
    return (
        (i.PitchAngle = {
            value: o,
            description: g(o),
        }),
        i
    );
}
function h(e) {
    return 0 === e
        ? "Horizontal (normal)"
        : 1 === e
          ? "Rotate 270 CW"
          : 2 === e
            ? "Rotate 180"
            : 3 === e
              ? "Rotate 90 CW"
              : 4 === e
                ? "Upwards"
                : 5 === e
                  ? "Downwards"
                  : "Unknown";
}
function m(e) {
    return "" + -0.5 * e;
}
function g(e) {
    return "" + -0.5 * e;
}
