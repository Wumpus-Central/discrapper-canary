n.d(t, { Z: () => b }), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(981631),
    c = n(388032),
    d = n(856907),
    u = n(478411);
let f = 0,
    h = (e) => {
        switch (e) {
            case l._vf.TOP_LEFT:
                return c.intl.string(c.t.xlchpU);
            case l._vf.TOP_RIGHT:
                return c.intl.string(c.t["4uHRHH"]);
            case l._vf.BOTTOM_LEFT:
                return c.intl.string(c.t.ovWFnD);
            case l._vf.BOTTOM_RIGHT:
                return c.intl.string(c.t["M/9V75"]);
            default:
                return c.intl.string(c.t.AlY4Za);
        }
    },
    p = [l._vf.DISABLED, l._vf.TOP_LEFT, l._vf.TOP_RIGHT, l._vf.BOTTOM_LEFT, l._vf.BOTTOM_RIGHT];
function g(e) {
    let { position: t, onChange: n } = e,
        [a] = r.useState(() => "notification-position-selector-".concat(f++)),
        g =
            t === l._vf.DISABLED
                ? c.intl.string(c.t.R6LxVf)
                : c.intl.formatToPlainString(c.t["XXHDM/"], { position: h(t) });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(o.tEY, {
                within: !0,
                offset: -2,
                children: (0, i.jsx)("div", {
                    className: s()(d.wrapper, { [d.disabledSelected]: t === l._vf.DISABLED }),
                    children: p.map((e) =>
                        (0, i.jsxs)(
                            "label",
                            {
                                className: s()({
                                    [d.selected]: e === t,
                                    [d.disabled]: e === l._vf.DISABLED,
                                    [d.topRight]: e === l._vf.TOP_RIGHT,
                                    [d.topLeft]: e === l._vf.TOP_LEFT,
                                    [d.bottomRight]: e === l._vf.BOTTOM_RIGHT,
                                    [d.bottomLeft]: e === l._vf.BOTTOM_LEFT,
                                }),
                                children: [
                                    h(e),
                                    e === l._vf.DISABLED
                                        ? (0, i.jsx)(o.t6m, {
                                              size: "md",
                                              color: "currentColor",
                                              className: d.disabledIcon,
                                          })
                                        : null,
                                    (0, i.jsx)("input", {
                                        type: "radio",
                                        name: a,
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
            (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                className: u.marginTop8,
                children: g,
            }),
        ],
    });
}
g.Positions = l._vf;
let b = g;
