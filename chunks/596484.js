"use strict";
n.d(t, { z: () => d });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(990078),
    a = n(397927),
    o = n(958178);
function d(e) {
    let { pills: t, pillClassName: n } = e;
    return (0, i.jsx)("div", {
        className: o.kL,
        children: t.map((e) =>
            (0, i.jsx)(
                r.m,
                {
                    __unsupportedReactNodeAsText: e.tooltipText,
                    shouldShow: null != e.tooltipText,
                    children: (0, i.jsx)(a.DUT, {
                        className: l()(o.Io, { [o.r9]: e.disabled }, n),
                        onClick: e.disabled ? void 0 : e.onClick,
                        children: (0, i.jsx)(a.Text, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "interactive-text-default",
                            children: e.text,
                        }),
                    }),
                },
                e.text,
            ),
        ),
    });
}
