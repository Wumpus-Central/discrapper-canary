i.d(t, { A: () => a });
var n = i(643479),
    r = i(801765),
    o = i(105423);
let a = {
    read: function (e, t, i, a, s) {
        var l, u;
        let c,
            d = (0, r.y)(e, o.lt, t, t + i, a, s);
        return (
            d.ShotInfo &&
                ((d = (0, n.dP)(
                    {},
                    d,
                    ((l = d.ShotInfo.value),
                    (c = {}),
                    void 0 !== l[27] &&
                        (c.AutoRotate = {
                            value: l[27],
                            description:
                                0 === (u = l[27])
                                    ? "None"
                                    : 1 === u
                                      ? "Rotate 90 CW"
                                      : 2 === u
                                        ? "Rotate 180"
                                        : 3 === u
                                          ? "Rotate 270 CW"
                                          : "Unknown",
                        }),
                    c),
                )),
                delete d.ShotInfo),
            d
        );
    },
    SHOT_INFO_AUTO_ROTATE: 27,
};
