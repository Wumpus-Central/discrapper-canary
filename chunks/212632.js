n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(981631),
    c = n(388032),
    u = n(244033),
    d = n(10198);
let f = 0,
    _ = () => "notification-position-selector-".concat(f++),
    p = (e) => {
        switch (e) {
            case l._vf.TOP_LEFT:
                return c.intl.string(c.t.xlchpa);
            case l._vf.TOP_RIGHT:
                return c.intl.string(c.t["4uHRHB"]);
            case l._vf.BOTTOM_LEFT:
                return c.intl.string(c.t.ovWFnJ);
            case l._vf.BOTTOM_RIGHT:
                return c.intl.string(c.t["M/9V7+"]);
            default:
                return c.intl.string(c.t.AlY4ZW);
        }
    },
    h = [l._vf.DISABLED, l._vf.TOP_LEFT, l._vf.TOP_RIGHT, l._vf.BOTTOM_LEFT, l._vf.BOTTOM_RIGHT];
function m(e) {
    let { position: t, onChange: n } = e,
        [a] = i.useState(() => _()),
        f =
            t === l._vf.DISABLED
                ? c.intl.string(c.t.R6LxVV)
                : c.intl.formatToPlainString(c.t.XXHDMz, { position: p(t) });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.tEY, {
                within: !0,
                offset: -2,
                children: (0, r.jsx)("div", {
                    className: o()(u.wrapper, { [u.disabledSelected]: t === l._vf.DISABLED }),
                    children: h.map((e) =>
                        (0, r.jsxs)(
                            "label",
                            {
                                className: o()({
                                    [u.selected]: e === t,
                                    [u.disabled]: e === l._vf.DISABLED,
                                    [u.topRight]: e === l._vf.TOP_RIGHT,
                                    [u.topLeft]: e === l._vf.TOP_LEFT,
                                    [u.bottomRight]: e === l._vf.BOTTOM_RIGHT,
                                    [u.bottomLeft]: e === l._vf.BOTTOM_LEFT,
                                }),
                                children: [
                                    p(e),
                                    e === l._vf.DISABLED
                                        ? (0, r.jsx)(s.t6m, {
                                              size: "md",
                                              color: "currentColor",
                                              className: u.disabledIcon,
                                          })
                                        : null,
                                    (0, r.jsx)("input", {
                                        type: "radio",
                                        name: a,
                                        value: e,
                                        onChange: (t) => n(t, e),
                                        className: u.hiddenInput,
                                    }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            }),
            (0, r.jsx)(s.R94, {
                type: s.geA.DESCRIPTION,
                className: d.marginTop8,
                children: f,
            }),
        ],
    });
}
m.Positions = l._vf;
let g = m;
