"use strict";
var n = r(64700),
    o = r(205662),
    a = r(920385),
    i = r(717519),
    l = r(708005);
(0, l.Q$)(function (e) {
    var t = e.onChange,
        r = e.hex,
        s = e.rgb,
        u = e.styles,
        c = void 0 === u ? {} : u,
        p = e.className,
        d = (0, o.default)(
            (0, a.A)(
                {
                    default: {
                        material: { width: "98px", height: "98px", padding: "16px", fontFamily: "Roboto" },
                        HEXwrap: { position: "relative" },
                        HEXinput: {
                            width: "100%",
                            marginTop: "12px",
                            fontSize: "15px",
                            color: "#333",
                            padding: "0px",
                            border: "0px",
                            borderBottom: "2px solid " + r,
                            outline: "none",
                            height: "30px",
                        },
                        HEXlabel: {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            fontSize: "11px",
                            color: "#999999",
                            textTransform: "capitalize",
                        },
                        Hex: { style: {} },
                        RGBwrap: { position: "relative" },
                        RGBinput: {
                            width: "100%",
                            marginTop: "12px",
                            fontSize: "15px",
                            color: "#333",
                            padding: "0px",
                            border: "0px",
                            borderBottom: "1px solid #eee",
                            outline: "none",
                            height: "30px",
                        },
                        RGBlabel: {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            fontSize: "11px",
                            color: "#999999",
                            textTransform: "capitalize",
                        },
                        split: { display: "flex", marginRight: "-10px", paddingTop: "11px" },
                        third: { flex: "1", paddingRight: "10px" },
                    },
                },
                c,
            ),
        ),
        f = function (e, r) {
            e.hex
                ? i.qt(e.hex) && t({ hex: e.hex, source: "hex" }, r)
                : (e.r || e.g || e.b) && t({ r: e.r || s.r, g: e.g || s.g, b: e.b || s.b, source: "rgb" }, r);
        };
    return n.createElement(
        l.H1,
        { styles: c },
        n.createElement(
            "div",
            { style: d.material, className: "material-picker " + (void 0 === p ? "" : p) },
            n.createElement(l.jc, {
                style: { wrap: d.HEXwrap, input: d.HEXinput, label: d.HEXlabel },
                label: "hex",
                value: r,
                onChange: f,
            }),
            n.createElement(
                "div",
                { style: d.split, className: "flexbox-fix" },
                n.createElement(
                    "div",
                    { style: d.third },
                    n.createElement(l.jc, {
                        style: { wrap: d.RGBwrap, input: d.RGBinput, label: d.RGBlabel },
                        label: "r",
                        value: s.r,
                        onChange: f,
                    }),
                ),
                n.createElement(
                    "div",
                    { style: d.third },
                    n.createElement(l.jc, {
                        style: { wrap: d.RGBwrap, input: d.RGBinput, label: d.RGBlabel },
                        label: "g",
                        value: s.g,
                        onChange: f,
                    }),
                ),
                n.createElement(
                    "div",
                    { style: d.third },
                    n.createElement(l.jc, {
                        style: { wrap: d.RGBwrap, input: d.RGBinput, label: d.RGBlabel },
                        label: "b",
                        value: s.b,
                        onChange: f,
                    }),
                ),
            ),
        ),
    );
});
