n.d(t, { A: () => g }), n(896048);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(397927),
    a = n(652215),
    c = n(985018),
    d = n(291358),
    u = n(473169);
let h = 0,
    p = (e) => {
        switch (e) {
            case a.G6Q.TOP_LEFT:
                return c.intl.string(c.t.xlchpU);
            case a.G6Q.TOP_RIGHT:
                return c.intl.string(c.t["4uHRHH"]);
            case a.G6Q.BOTTOM_LEFT:
                return c.intl.string(c.t.ovWFnD);
            case a.G6Q.BOTTOM_RIGHT:
                return c.intl.string(c.t["M/9V75"]);
            default:
                return c.intl.string(c.t.AlY4Za);
        }
    },
    f = [a.G6Q.DISABLED, a.G6Q.TOP_LEFT, a.G6Q.TOP_RIGHT, a.G6Q.BOTTOM_LEFT, a.G6Q.BOTTOM_RIGHT];
function b(e) {
    let { position: t, onChange: n } = e,
        [s] = r.useState(() => "notification-position-selector-".concat(h++)),
        b =
            t === a.G6Q.DISABLED
                ? c.intl.string(c.t.R6LxVf)
                : c.intl.formatToPlainString(c.t["XXHDM/"], { position: p(t) });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(o.vN3, {
                within: !0,
                offset: -2,
                children: (0, i.jsx)("div", {
                    className: l()(d.iE, { [d.wX]: t === a.G6Q.DISABLED }),
                    children: f.map((e) =>
                        (0, i.jsxs)(
                            "label",
                            {
                                className: l()({
                                    [d.wH]: e === t,
                                    [d.r9]: e === a.G6Q.DISABLED,
                                    [d.O3]: e === a.G6Q.TOP_RIGHT,
                                    [d.lA]: e === a.G6Q.TOP_LEFT,
                                    [d.oF]: e === a.G6Q.BOTTOM_RIGHT,
                                    [d.RV]: e === a.G6Q.BOTTOM_LEFT,
                                }),
                                children: [
                                    p(e),
                                    e === a.G6Q.DISABLED
                                        ? (0, i.jsx)(o.KTN, {
                                              size: "md",
                                              color: "currentColor",
                                              className: d.WO,
                                          })
                                        : null,
                                    (0, i.jsx)("input", {
                                        type: "radio",
                                        name: s,
                                        value: e,
                                        onChange: (t) => n(t, e),
                                        className: d.hH,
                                    }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            }),
            (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                className: u.Ot,
                children: b,
            }),
        ],
    });
}
b.Positions = a.G6Q;
let g = b;
