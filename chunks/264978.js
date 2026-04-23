"use strict";
var n = r(64700),
    o = r(655972),
    a = r.n(o),
    i = r(205662),
    l = r(981735),
    s = r(920385),
    u = r(920515),
    c = r(708005),
    p = r(759551),
    d = function (e) {
        var t = e.width,
            r = e.height,
            o = e.onChange,
            a = e.onSwatchHover,
            u = e.colors,
            d = e.hex,
            f = e.styles,
            h = e.className,
            b = (0, i.default)(
                (0, s.A)(
                    {
                        default: {
                            picker: { width: t, height: r },
                            overflow: { height: r, overflowY: "scroll" },
                            body: { padding: "16px 0 6px 16px" },
                            clear: { clear: "both" },
                        },
                    },
                    void 0 === f ? {} : f,
                ),
            ),
            v = function (e, t) {
                return o({ hex: e, source: "hex" }, t);
            };
        return n.createElement(
            "div",
            { style: b.picker, className: "swatches-picker " + (void 0 === h ? "" : h) },
            n.createElement(
                c.H1,
                null,
                n.createElement(
                    "div",
                    { style: b.overflow },
                    n.createElement(
                        "div",
                        { style: b.body },
                        (0, l.A)(u, function (e) {
                            return n.createElement(p.A, {
                                key: e.toString(),
                                group: e,
                                active: d,
                                onClick: v,
                                onSwatchHover: a,
                            });
                        }),
                        n.createElement("div", { style: b.clear }),
                    ),
                ),
            ),
        );
    };
(d.propTypes = {
    width: a().oneOfType([a().string, a().number]),
    height: a().oneOfType([a().string, a().number]),
    colors: a().arrayOf(a().arrayOf(a().string)),
    styles: a().object,
}),
    (d.defaultProps = {
        width: 320,
        height: 240,
        colors: [
            [u.wv["900"], u.wv["700"], u.wv["500"], u.wv["300"], u.wv["100"]],
            [u.Vu["900"], u.Vu["700"], u.Vu["500"], u.Vu["300"], u.Vu["100"]],
            [u.Zp["900"], u.Zp["700"], u.Zp["500"], u.Zp["300"], u.Zp["100"]],
            [u.Jc["900"], u.Jc["700"], u.Jc["500"], u.Jc["300"], u.Jc["100"]],
            [u.xV["900"], u.xV["700"], u.xV["500"], u.xV["300"], u.xV["100"]],
            [u.z1["900"], u.z1["700"], u.z1["500"], u.z1["300"], u.z1["100"]],
            [u.tD["900"], u.tD["700"], u.tD["500"], u.tD["300"], u.tD["100"]],
            [u.Q_["900"], u.Q_["700"], u.Q_["500"], u.Q_["300"], u.Q_["100"]],
            [u.$S["900"], u.$S["700"], u.$S["500"], u.$S["300"], u.$S["100"]],
            ["#194D33", u.wL["700"], u.wL["500"], u.wL["300"], u.wL["100"]],
            [u.EM["900"], u.EM["700"], u.EM["500"], u.EM["300"], u.EM["100"]],
            [u.Gg["900"], u.Gg["700"], u.Gg["500"], u.Gg["300"], u.Gg["100"]],
            [u.D9["900"], u.D9["700"], u.D9["500"], u.D9["300"], u.D9["100"]],
            [u.Gi["900"], u.Gi["700"], u.Gi["500"], u.Gi["300"], u.Gi["100"]],
            [u.T_["900"], u.T_["700"], u.T_["500"], u.T_["300"], u.T_["100"]],
            [u.jr["900"], u.jr["700"], u.jr["500"], u.jr["300"], u.jr["100"]],
            [u.Xk["900"], u.Xk["700"], u.Xk["500"], u.Xk["300"], u.Xk["100"]],
            [u.U6["900"], u.U6["700"], u.U6["500"], u.U6["300"], u.U6["100"]],
            ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"],
        ],
        styles: {},
    }),
    (0, c.Q$)(d);
