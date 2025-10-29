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
            moreCount: c,
            isSingleCard: d = !1,
        } = e,
        u = s ? a.cardPreview : a.cardPreviewNoScale,
        h = d ? a.cardSingle : a.card;
    return (0, r.jsx)(i.u, {
        text: n,
        position: "top",
        children: (0, r.jsxs)(l.P3F, {
            onClick: t,
            className: h,
            "aria-label": n,
            children: [
                (0, r.jsx)("div", {
                    className: u,
                    children: o(),
                }),
                null != c &&
                    c > 0 &&
                    (0, r.jsx)("div", {
                        className: a.moreOverlay,
                        children: (0, r.jsxs)(l.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", c],
                        }),
                    }),
            ],
        }),
    });
}
