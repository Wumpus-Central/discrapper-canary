"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(652215),
    d = n(985018),
    c = n(672073),
    u = n(885106);
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
function A(e) {
    let { position: t, onChange: n } = e,
        [l] = s.useState(() => `notification-position-selector-${h++}`),
        A =
            t === o.G6Q.DISABLED
                ? d.intl.string(d.t.R6LxVf)
                : d.intl.formatToPlainString(d.t["XXHDM/"], { position: p(t) });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(r.vN3, {
                within: !0,
                offset: -2,
                children: (0, i.jsx)("div", {
                    className: a()(c.iE, { [c.wX]: t === o.G6Q.DISABLED }),
                    children: f.map((e) =>
                        (0, i.jsxs)(
                            "label",
                            {
                                className: a()({
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
                                        name: l,
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
            (0, i.jsx)(r.Text, { variant: "text-sm/normal", className: u.Ot, children: A }),
        ],
    });
}
A.Positions = o.G6Q;
let _ = A;
