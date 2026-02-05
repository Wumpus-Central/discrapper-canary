"use strict";
var n = r(64700),
    o = r(655972),
    a = r.n(o),
    i = r(205662),
    l = r(920385),
    s = r(708005),
    u = r(660851),
    c = r(79575),
    p = r(33349),
    d = function (e) {
        var t = e.width,
            r = e.onChange,
            o = e.rgb,
            a = e.hsl,
            d = e.hsv,
            f = e.hex,
            h = e.header,
            b = e.styles,
            v = e.className,
            g = (0, i.default)(
                (0, l.A)(
                    {
                        default: {
                            picker: {
                                width: t,
                                background: "#fff",
                                border: "1px solid #dfe1e5",
                                boxSizing: "initial",
                                display: "flex",
                                flexWrap: "wrap",
                                borderRadius: "8px 8px 0px 0px",
                            },
                            head: {
                                height: "57px",
                                width: "100%",
                                paddingTop: "16px",
                                paddingBottom: "16px",
                                paddingLeft: "16px",
                                fontSize: "20px",
                                boxSizing: "border-box",
                                fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif",
                            },
                            saturation: { width: "70%", padding: "0px", position: "relative", overflow: "hidden" },
                            swatch: {
                                width: "30%",
                                height: "228px",
                                padding: "0px",
                                background: "rgba(" + o.r + ", " + o.g + ", " + o.b + ", 1)",
                                position: "relative",
                                overflow: "hidden",
                            },
                            body: { margin: "auto", width: "95%" },
                            controls: { display: "flex", boxSizing: "border-box", height: "52px", paddingTop: "22px" },
                            color: { width: "32px" },
                            hue: { height: "8px", position: "relative", margin: "0px 16px 0px 16px", width: "100%" },
                            Hue: { radius: "2px" },
                        },
                    },
                    void 0 === b ? {} : b,
                ),
            );
        return n.createElement(
            "div",
            { style: g.picker, className: "google-picker " + (void 0 === v ? "" : v) },
            n.createElement("div", { style: g.head }, h),
            n.createElement("div", { style: g.swatch }),
            n.createElement(
                "div",
                { style: g.saturation },
                n.createElement(s.VI, { hsl: a, hsv: d, pointer: u.A, onChange: r }),
            ),
            n.createElement(
                "div",
                { style: g.body },
                n.createElement(
                    "div",
                    { style: g.controls, className: "flexbox-fix" },
                    n.createElement(
                        "div",
                        { style: g.hue },
                        n.createElement(s.RG, { style: g.Hue, hsl: a, radius: "4px", pointer: c.A, onChange: r }),
                    ),
                ),
                n.createElement(p.A, { rgb: o, hsl: a, hex: f, hsv: d, onChange: r }),
            ),
        );
    };
(d.propTypes = { width: a().oneOfType([a().string, a().number]), styles: a().object, header: a().string }),
    (d.defaultProps = { width: 652, styles: {}, header: "Color picker" }),
    (0, s.Q$)(d);
