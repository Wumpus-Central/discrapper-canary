n.d(t, { Z: () => m }), n(388685);
var i = n(54381),
    r = n(473749),
    o = n(120356),
    l = n.n(o),
    s = n(481060),
    a = n(981631),
    c = n(388032),
    d = n(244033),
    u = n(10198);
let h = 0,
    p = (e) => {
        switch (e) {
            case a._vf.TOP_LEFT:
                return c.intl.string(c.t.xlchpU);
            case a._vf.TOP_RIGHT:
                return c.intl.string(c.t["4uHRHH"]);
            case a._vf.BOTTOM_LEFT:
                return c.intl.string(c.t.ovWFnD);
            case a._vf.BOTTOM_RIGHT:
                return c.intl.string(c.t["M/9V75"]);
            default:
                return c.intl.string(c.t.AlY4Za);
        }
    },
    f = [a._vf.DISABLED, a._vf.TOP_LEFT, a._vf.TOP_RIGHT, a._vf.BOTTOM_LEFT, a._vf.BOTTOM_RIGHT];
function g(e) {
    let { position: t, onChange: n } = e,
        [o] = r.useState(() => "notification-position-selector-".concat(h++)),
        g =
            t === a._vf.DISABLED
                ? c.intl.string(c.t.R6LxVf)
                : c.intl.formatToPlainString(c.t["XXHDM/"], { position: p(t) });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(s.tEY, {
                within: !0,
                offset: -2,
                children: (0, i.jsx)("div", {
                    className: l()(d.wrapper, { [d.disabledSelected]: t === a._vf.DISABLED }),
                    children: f.map((e) =>
                        (0, i.jsxs)(
                            "label",
                            {
                                className: l()({
                                    [d.selected]: e === t,
                                    [d.disabled]: e === a._vf.DISABLED,
                                    [d.topRight]: e === a._vf.TOP_RIGHT,
                                    [d.topLeft]: e === a._vf.TOP_LEFT,
                                    [d.bottomRight]: e === a._vf.BOTTOM_RIGHT,
                                    [d.bottomLeft]: e === a._vf.BOTTOM_LEFT,
                                }),
                                children: [
                                    p(e),
                                    e === a._vf.DISABLED
                                        ? (0, i.jsx)(s.t6m, {
                                              size: "md",
                                              color: "currentColor",
                                              className: d.disabledIcon,
                                          })
                                        : null,
                                    (0, i.jsx)("input", {
                                        type: "radio",
                                        name: o,
                                        value: e,
                                        onChange: (t) => n(t, e),
                                        className: d.hiddenInput,
                                    }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                className: u.marginTop8,
                children: g,
            }),
        ],
    });
}
g.Positions = a._vf;
let m = g;
