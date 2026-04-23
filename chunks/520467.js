l.d(t, { A: () => c });
var n = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(460890),
    r = l(939249),
    d = l(834730),
    o = l(505244);
function c(e) {
    let { steps: t, stepIndex: l, onClick: i } = e,
        { i18n: c } = (0, a.G9)();
    return (0, n.jsx)("div", {
        className: o.kL,
        role: "tablist",
        children: t.map((e, a) => {
            let u = l === a;
            return (0, n.jsxs)(
                r.D,
                {
                    onClick: () => i(a),
                    className: o._h,
                    role: "tab",
                    "aria-selected": u,
                    "aria-label": `${c.STEP_INDICATOR(a + 1, t.length)}: ${e}`,
                    "aria-current": u ? "step" : void 0,
                    children: [
                        (0, n.jsx)("div", { className: s()(o.hr, { [o.YD]: u }) }),
                        (0, n.jsx)(d.E, {
                            color: u ? "text-brand" : "text-muted",
                            variant: "text-xs/normal",
                            children: e,
                        }),
                    ],
                },
                e,
            );
        }),
    });
}
