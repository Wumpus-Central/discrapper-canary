n.d(t, {
    A: () => a,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(239705),
    s = n(300328);

function a(e) {
    var t;
    let { action: n, actionType: a, triggerType: c } = e,
        o = (0, l.x)(null != (t = null == n ? void 0 : n.type) ? t : a, n, c);
    if (null == o) return null;
    let { headerText: d, helperText: u, icon: f } = o;
    return (0, r.jsxs)("div", {
        className: s.Ik,
        children: [
            (0, r.jsx)("div", {
                className: s.TV,
                children: (0, r.jsx)(f, {
                    size: "custom",
                    color: "currentColor",
                    width: 14,
                    height: 14,
                    className: s.gE,
                }),
            }),
            (0, r.jsx)("div", {
                className: s.xj,
                children: (0, r.jsxs)(i.Text, {
                    className: s.XX,
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: [
                        d,
                        null != u &&
                            (0, r.jsx)(i.Text, {
                                className: s.KE,
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "span",
                                children: u,
                            }),
                    ],
                }),
            }),
        ],
    });
}
