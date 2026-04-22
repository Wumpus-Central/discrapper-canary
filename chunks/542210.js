n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var l = n(834730),
    s = n(239705),
    r = n(365863);
function a(e) {
    let { action: t, actionType: n, triggerType: a } = e,
        o = (0, s.x)(t?.type ?? n, t, a);
    if (null == o) return null;
    let { headerText: d, helperText: c, icon: u } = o;
    return (0, i.jsxs)("div", {
        className: r.Ik,
        children: [
            (0, i.jsx)("div", {
                className: r.TV,
                children: (0, i.jsx)(u, {
                    size: "custom",
                    color: "currentColor",
                    width: 14,
                    height: 14,
                    className: r.gE,
                }),
            }),
            (0, i.jsx)("div", {
                className: r.xj,
                children: (0, i.jsxs)(l.E, {
                    className: r.XX,
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: [
                        d,
                        null != c &&
                            (0, i.jsx)(l.E, {
                                className: r.KE,
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "span",
                                children: c,
                            }),
                    ],
                }),
            }),
        ],
    });
}
