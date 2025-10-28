n.d(t, { Z: () => s });
var r = n(951288),
    i = n(681715),
    l = n(481060),
    a = n(239990);
function s(e) {
    let {
            onCardClick: t,
            tooltipText: n,
            shouldScalePreview: s = !0,
            renderPreview: o,
            showMoreOverlay: c = !1,
            moreCount: d = 0,
        } = e,
        u = s ? a.cardPreview : a.cardPreviewNoScale;
    return (0, r.jsx)(i.u, {
        text: n,
        position: "top",
        children: (0, r.jsx)(l.P3F, {
            onClick: t,
            className: a.card,
            "aria-label": n,
            children: (0, r.jsxs)("div", {
                className: a.cardContent,
                children: [
                    (0, r.jsx)("div", {
                        className: a.cardPreviewWrapper,
                        children: (0, r.jsx)("div", {
                            className: u,
                            children: o(),
                        }),
                    }),
                    c &&
                        (0, r.jsx)("div", {
                            className: a.moreOverlay,
                            children: (0, r.jsxs)(l.Text, {
                                variant: "text-xs/medium",
                                color: "always-white",
                                children: ["+", d],
                            }),
                        }),
                ],
            }),
        }),
    });
}
