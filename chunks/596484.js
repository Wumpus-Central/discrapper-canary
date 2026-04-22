n.d(t, { z: () => c });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(990078),
    a = n(939249),
    o = n(834730),
    d = n(807573);
function c(e) {
    let { pills: t, pillClassName: n } = e;
    return (0, i.jsx)("div", {
        className: d.kL,
        children: t.map((e) =>
            (0, i.jsx)(
                r.m,
                {
                    __unsupportedReactNodeAsText: e.tooltipText,
                    shouldShow: null != e.tooltipText,
                    children: (0, i.jsx)(a.D, {
                        className: s()(d.Io, { [d.r9]: e.disabled }, n),
                        onClick: e.disabled ? void 0 : e.onClick,
                        children: (0, i.jsx)(o.E, {
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
