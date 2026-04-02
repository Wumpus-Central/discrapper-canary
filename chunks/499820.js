"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(397927),
    o = n(652215),
    d = n(985018),
    c = n(92056),
    u = n(153335);
let h = 0,
    p = (e) => {
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
    f = [o.G6Q.DISABLED, o.G6Q.TOP_LEFT, o.G6Q.TOP_RIGHT, o.G6Q.BOTTOM_LEFT, o.G6Q.BOTTOM_RIGHT];
function _(e) {
    let { position: t, onChange: n } = e,
        [a] = s.useState(() => `notification-position-selector-${h++}`),
        _ =
            t === o.G6Q.DISABLED
                ? d.intl.string(d.t.R6LxVf)
                : d.intl.formatToPlainString(d.t["XXHDM/"], { position: p(t) });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(r.vN3, {
                within: !0,
                offset: -2,
                children: (0, i.jsx)("div", {
                    className: l()(c.iE, { [c.wX]: t === o.G6Q.DISABLED }),
                    children: f.map((e) =>
                        (0, i.jsxs)(
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
                                    p(e),
                                    e === o.G6Q.DISABLED
                                        ? (0, i.jsx)(r.KTN, { size: "md", color: "currentColor", className: c.WO })
                                        : null,
                                    (0, i.jsx)("input", {
                                        type: "radio",
                                        name: a,
                                        value: e,
                                        onChange: (t) => n(t, e),
                                        className: c.hH,
                                    }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            }),
            (0, i.jsx)(r.Text, { variant: "text-sm/normal", className: u.Ot, children: _ }),
        ],
    });
}
_.Positions = o.G6Q;
let A = _;
