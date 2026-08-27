"use strict";
n.d(t, { A: () => E });
var i = n(477900),
    r = n(113325),
    a = n(7807),
    s = n(661531),
    l = n(834730),
    o = n(123292),
    d = n(793574),
    c = n(688810),
    u = n(375708),
    _ = n(454992);
function E(e) {
    let { openFullPicker: t } = e,
        { analyticsLocations: n } = (0, c.Ay)(d.A.SOUNDBOARD_QUICK_ACCESS_POPOUT);
    return (0, i.jsx)(c.f5, {
        value: n,
        children: (0, i.jsx)(r.lG, {
            className: _.kL,
            children: (0, i.jsxs)("div", {
                className: _.N1,
                children: [
                    (0, i.jsxs)("div", {
                        className: _.TK,
                        children: [
                            (0, i.jsx)(a.J, { size: "xs", color: s.A.colors.ICON_MUTED }),
                            (0, i.jsx)(l.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: u.intl.string(u.t["1a/hIV"]),
                            }),
                        ],
                    }),
                    (0, i.jsx)(o.Q, {
                        text: u.intl.string(u.t.hmBVph),
                        onClick: t,
                        size: "sm",
                        variant: "primary",
                        textVariant: "text-sm/medium",
                    }),
                ],
            }),
        }),
    });
}
