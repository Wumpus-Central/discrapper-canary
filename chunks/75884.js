"use strict";
var n = r(64700),
    o = r(655972),
    a = r.n(o),
    i = r(205662),
    l = r(920385),
    s = r(708005),
    u = r(370244),
    c = r(696107),
    p = function (e) {
        var t = e.hsl,
            r = e.onChange,
            o = e.pointer,
            a = e.styles,
            c = e.className,
            p = (0, i.default)(
                (0, l.A)(
                    { default: { hue: { height: "12px", position: "relative" }, Hue: { radius: "2px" } } },
                    void 0 === a ? {} : a,
                ),
            );
        return n.createElement(
            "div",
            { style: p.wrap || {}, className: "slider-picker " + (void 0 === c ? "" : c) },
            n.createElement(
                "div",
                { style: p.hue },
                n.createElement(s.RG, { style: p.Hue, hsl: t, pointer: o, onChange: r }),
            ),
            n.createElement("div", { style: p.swatches }, n.createElement(u.A, { hsl: t, onClick: r })),
        );
    };
(p.propTypes = { styles: a().object }), (p.defaultProps = { pointer: c.A, styles: {} }), (0, s.Q$)(p);
