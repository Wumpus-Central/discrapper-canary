"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(187322),
    o = n(428678),
    d = n(834730),
    c = n(652215),
    u = n(985018),
    h = n(110649),
    p = n(818050);
let A = 0,
    f = (e) => {
        switch (e) {
            case c.G6Q.TOP_LEFT:
                return u.intl.string(u.t.xlchpU);
            case c.G6Q.TOP_RIGHT:
                return u.intl.string(u.t["4uHRHH"]);
            case c.G6Q.BOTTOM_LEFT:
                return u.intl.string(u.t.ovWFnD);
            case c.G6Q.BOTTOM_RIGHT:
                return u.intl.string(u.t["M/9V75"]);
            default:
                return u.intl.string(u.t.AlY4Za);
        }
    },
    _ = [c.G6Q.DISABLED, c.G6Q.TOP_LEFT, c.G6Q.TOP_RIGHT, c.G6Q.BOTTOM_LEFT, c.G6Q.BOTTOM_RIGHT];
function g(e) {
    let { position: t, onChange: n } = e,
        [l] = s.useState(() => `notification-position-selector-${A++}`),
        g =
            t === c.G6Q.DISABLED
                ? u.intl.string(u.t.R6LxVf)
                : u.intl.formatToPlainString(u.t["XXHDM/"], { position: f(t) });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(r.vN, {
                within: !0,
                offset: -2,
                children: (0, i.jsx)("div", {
                    className: a()(h.iE, { [h.wX]: t === c.G6Q.DISABLED }),
                    children: _.map((e) =>
                        (0, i.jsxs)(
                            "label",
                            {
                                className: a()({
                                    [h.wH]: e === t,
                                    [h.r9]: e === c.G6Q.DISABLED,
                                    [h.O3]: e === c.G6Q.TOP_RIGHT,
                                    [h.lA]: e === c.G6Q.TOP_LEFT,
                                    [h.oF]: e === c.G6Q.BOTTOM_RIGHT,
                                    [h.RV]: e === c.G6Q.BOTTOM_LEFT,
                                }),
                                children: [
                                    f(e),
                                    e === c.G6Q.DISABLED
                                        ? (0, i.jsx)(o.K, { size: "md", color: "currentColor", className: h.WO })
                                        : null,
                                    (0, i.jsx)("input", {
                                        type: "radio",
                                        name: l,
                                        value: e,
                                        onChange: (t) => n(t, e),
                                        className: h.hH,
                                    }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            }),
            (0, i.jsx)(d.E, { variant: "text-sm/normal", className: p.Ot, children: g }),
        ],
    });
}
g.Positions = c.G6Q;
let m = g;
