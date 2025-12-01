n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(782568),
    s = n(63063),
    l = n(827498),
    c = n(888617),
    u = n(981631),
    d = n(388032),
    f = n(431048);
function p(e) {
    let { padding: t = !1 } = e,
        n = i.useCallback(() => {
            (0, o.Z)(s.Z.getAppsSupportURL(u.BhN.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: p } = (0, c.Z)({
            sectionName: l.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1,
        });
    return (0, r.jsx)("div", {
        className: t ? f.containerPadding : void 0,
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                p.current = e;
            },
            className: f.container,
            children: [
                (0, r.jsxs)("div", {
                    className: f.body,
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-lg/bold",
                            color: "header-primary",
                            children: d.intl.string(d.t["kw8/Ec"]),
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: d.intl.string(d.t.GZoV1O),
                        }),
                    ],
                }),
                (0, r.jsx)(a.Button, {
                    variant: "primary",
                    text: d.intl.string(d.t.Ye51oT),
                    "aria-label": d.intl.formatToPlainString(d.t.xx5Sug, {
                        sectionTitle: d.intl.string(d.t["kw8/Ec"]),
                        sectionBody: d.intl.string(d.t.GZoV1O),
                    }),
                    onClick: n,
                }),
            ],
        }),
    });
}
