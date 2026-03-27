"use strict";
i.d(t, { A: () => m });
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    r = i(397927),
    o = i(652215),
    d = i(985018),
    c = i(92056),
    u = i(153335);
let h = 0,
    _ = (e) => {
        switch (e) {
            case o.G6Q.TOP_LEFT:
                return d.intl.string(d.t.xlchpU);
            case o.G6Q.TOP_RIGHT:
                return d.intl.string(d.t["4uHRHH"]);
            case o.G6Q.BOTTOM_LEFT:
                return d.intl.string(d.t.ovWFnD);
            case o.G6Q.BOTTOM_RIGHT:
                return d.intl.string(d.t["M/9V75"]);
            default:
                return d.intl.string(d.t.AlY4Za);
        }
    },
    p = [o.G6Q.DISABLED, o.G6Q.TOP_LEFT, o.G6Q.TOP_RIGHT, o.G6Q.BOTTOM_LEFT, o.G6Q.BOTTOM_RIGHT];
function f(e) {
    let { position: t, onChange: i } = e,
        [a] = s.useState(() => `notification-position-selector-${h++}`),
        f =
            t === o.G6Q.DISABLED
                ? d.intl.string(d.t.R6LxVf)
                : d.intl.formatToPlainString(d.t["XXHDM/"], { position: _(t) });
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(r.vN3, {
                within: !0,
                offset: -2,
                children: (0, n.jsx)("div", {
                    className: l()(c.iE, { [c.wX]: t === o.G6Q.DISABLED }),
                    children: p.map((e) =>
                        (0, n.jsxs)(
                            "label",
                            {
                                className: l()({
                                    [c.wH]: e === t,
                                    [c.r9]: e === o.G6Q.DISABLED,
                                    [c.O3]: e === o.G6Q.TOP_RIGHT,
                                    [c.lA]: e === o.G6Q.TOP_LEFT,
                                    [c.oF]: e === o.G6Q.BOTTOM_RIGHT,
                                    [c.RV]: e === o.G6Q.BOTTOM_LEFT,
                                }),
                                children: [
                                    _(e),
                                    e === o.G6Q.DISABLED
                                        ? (0, n.jsx)(r.KTN, { size: "md", color: "currentColor", className: c.WO })
                                        : null,
                                    (0, n.jsx)("input", {
                                        type: "radio",
                                        name: a,
                                        value: e,
                                        onChange: (t) => i(t, e),
                                        className: c.hH,
                                    }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            }),
            (0, n.jsx)(r.Text, { variant: "text-sm/normal", className: u.Ot, children: f }),
        ],
    });
}
f.Positions = o.G6Q;
let m = f;
