n.d(t, { Z: () => f }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(981631),
    c = n(388032),
    d = n(379249),
    u = n(197571);
let m = 0,
    p = (e) => {
        switch (e) {
            case o._vf.TOP_LEFT:
                return c.intl.string(c.t.xlchpa);
            case o._vf.TOP_RIGHT:
                return c.intl.string(c.t["4uHRHB"]);
            case o._vf.BOTTOM_LEFT:
                return c.intl.string(c.t.ovWFnJ);
            case o._vf.BOTTOM_RIGHT:
                return c.intl.string(c.t["M/9V7+"]);
            default:
                return c.intl.string(c.t.AlY4ZW);
        }
    },
    g = [o._vf.DISABLED, o._vf.TOP_LEFT, o._vf.TOP_RIGHT, o._vf.BOTTOM_LEFT, o._vf.BOTTOM_RIGHT];
function h(e) {
    let { position: t, onChange: n } = e,
        [s] = r.useState(() => "notification-position-selector-".concat(m++)),
        h =
            t === o._vf.DISABLED
                ? c.intl.string(c.t.R6LxVV)
                : c.intl.formatToPlainString(c.t.XXHDMz, { position: p(t) });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(l.tEY, {
                within: !0,
                offset: -2,
                children: (0, i.jsx)("div", {
                    className: a()(d.wrapper, { [d.disabledSelected]: t === o._vf.DISABLED }),
                    children: g.map((e) =>
                        (0, i.jsxs)(
                            "label",
                            {
                                className: a()({
                                    [d.selected]: e === t,
                                    [d.disabled]: e === o._vf.DISABLED,
                                    [d.topRight]: e === o._vf.TOP_RIGHT,
                                    [d.topLeft]: e === o._vf.TOP_LEFT,
                                    [d.bottomRight]: e === o._vf.BOTTOM_RIGHT,
                                    [d.bottomLeft]: e === o._vf.BOTTOM_LEFT,
                                }),
                                children: [
                                    p(e),
                                    e === o._vf.DISABLED
                                        ? (0, i.jsx)(l.t6m, {
                                              size: "md",
                                              color: "currentColor",
                                              className: d.disabledIcon,
                                          })
                                        : null,
                                    (0, i.jsx)("input", {
                                        type: "radio",
                                        name: s,
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
            (0, i.jsx)(l.R94, {
                type: l.geA.DESCRIPTION,
                className: u.marginTop8,
                children: h,
            }),
        ],
    });
}
h.Positions = o._vf;
let f = h;
