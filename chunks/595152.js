"use strict";
var n = r(64700),
    o = r(655972),
    a = r.n(o),
    i = r(205662),
    l = r(920385),
    s = r(717519),
    u = r(708005),
    c = r(120512),
    p = function (e) {
        var t = e.onChange,
            r = e.onSwatchHover,
            o = e.hex,
            a = e.colors,
            p = e.width,
            d = e.triangle,
            f = e.styles,
            h = e.className,
            b = "transparent" === o,
            v = function (e, r) {
                s.qt(e) && t({ hex: e, source: "hex" }, r);
            },
            g = (0, i.default)(
                (0, l.A)(
                    {
                        default: {
                            card: {
                                width: p,
                                background: "#fff",
                                boxShadow: "0 1px rgba(0,0,0,.1)",
                                borderRadius: "6px",
                                position: "relative",
                            },
                            head: {
                                height: "110px",
                                background: o,
                                borderRadius: "6px 6px 0 0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                            },
                            body: { padding: "10px" },
                            label: { fontSize: "18px", color: s.OB(o), position: "relative" },
                            triangle: {
                                width: "0px",
                                height: "0px",
                                borderStyle: "solid",
                                borderWidth: "0 10px 10px 10px",
                                borderColor: "transparent transparent " + o + " transparent",
                                position: "absolute",
                                top: "-10px",
                                left: "50%",
                                marginLeft: "-10px",
                            },
                            input: {
                                width: "100%",
                                fontSize: "12px",
                                color: "#666",
                                border: "0px",
                                outline: "none",
                                height: "22px",
                                boxShadow: "inset 0 0 0 1px #ddd",
                                borderRadius: "4px",
                                padding: "0 7px",
                                boxSizing: "border-box",
                            },
                        },
                        "hide-triangle": { triangle: { display: "none" } },
                    },
                    void 0 === f ? {} : f,
                ),
                { "hide-triangle": "hide" === d },
            );
        return n.createElement(
            "div",
            { style: g.card, className: "block-picker " + (void 0 === h ? "" : h) },
            n.createElement("div", { style: g.triangle }),
            n.createElement(
                "div",
                { style: g.head },
                b && n.createElement(u.xu, { borderRadius: "6px 6px 0 0" }),
                n.createElement("div", { style: g.label }, o),
            ),
            n.createElement(
                "div",
                { style: g.body },
                n.createElement(c.A, { colors: a, onClick: v, onSwatchHover: r }),
                n.createElement(u.jc, { style: { input: g.input }, value: o, onChange: v }),
            ),
        );
    };
(p.propTypes = {
    width: a().oneOfType([a().string, a().number]),
    colors: a().arrayOf(a().string),
    triangle: a().oneOf(["top", "hide"]),
    styles: a().object,
}),
    (p.defaultProps = {
        width: 170,
        colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
        triangle: "top",
        styles: {},
    }),
    (0, u.Q$)(p);
