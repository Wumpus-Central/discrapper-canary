i.d(t, { A: () => u });
var n = i(890167),
    r = i(643479),
    o = i(801765),
    a = i(105423);
let s = { K3_III: 78420 },
    l = { CAMERA_ORIENTATION: 1, ROLL_ANGLE: 3, PITCH_ANGLE: 5 },
    u = {
        read: function (e, t, i, u) {
            var c;
            let d = n.A.getByteOrder(e, t + i + 8),
                f = t + i,
                p = (0, o.y)(e, a.SI, f, f + 10, d, u, !0);
            return (
                (c = p).PentaxModelID &&
                    c.PentaxModelID.value === s.K3_III &&
                    c.LevelInfo &&
                    ((p = (0, r.dP)(
                        {},
                        p,
                        (function (e, t, i) {
                            var r;
                            let o = {};
                            if (t + 7 > e.byteLength) return o;
                            let a = e.getInt8(t + l.CAMERA_ORIENTATION);
                            o.CameraOrientation = {
                                value: a,
                                description:
                                    0 === (r = a)
                                        ? "Horizontal (normal)"
                                        : 1 === r
                                          ? "Rotate 270 CW"
                                          : 2 === r
                                            ? "Rotate 180"
                                            : 3 === r
                                              ? "Rotate 90 CW"
                                              : 4 === r
                                                ? "Upwards"
                                                : 5 === r
                                                  ? "Downwards"
                                                  : "Unknown",
                            };
                            let s = e.getInt16(t + l.ROLL_ANGLE, i === n.A.LITTLE_ENDIAN);
                            o.RollAngle = { value: s, description: "" + -0.5 * s };
                            let u = e.getInt16(t + l.PITCH_ANGLE, i === n.A.LITTLE_ENDIAN);
                            return (o.PitchAngle = { value: u, description: "" + -0.5 * u }), o;
                        })(e, f + p.LevelInfo.__offset, d),
                    )),
                    delete p.LevelInfo),
                p
            );
        },
        PENTAX_IFD_OFFSET: 10,
        MODEL_ID: s,
        LIK3III: l,
    };
