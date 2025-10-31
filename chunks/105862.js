n.d(t, { Z: () => y });
var i = n(951288),
    l = n(647438),
    r = n(780384),
    a = n(481060),
    o = n(410030),
    s = n(782568),
    c = n(63063),
    u = n(827498),
    d = n(888617),
    p = n(981631),
    m = n(388032),
    f = n(431048),
    h = n(983008),
    v = n(478408);
function y(e) {
    let { showImage: t = !0, padding: n = !1 } = e,
        y = (0, o.ZP)(),
        g = (0, r.ap)(y) ? v : h,
        x = l.useCallback(() => {
            (0, s.Z)(c.Z.getAppsSupportURL(p.BhN.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: b } = (0, d.Z)({
            sectionName: u.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1,
        });
    return (0, i.jsx)("div", {
        className: n ? f.containerPadding : void 0,
        children: (0, i.jsxs)("div", {
            ref: (e) => {
                b.current = e;
            },
            className: f.container,
            children: [
                t &&
                    (0, i.jsx)("img", {
                        className: f.image,
                        src: g,
                        alt: "",
                        "aria-hidden": !0,
                    }),
                (0, i.jsxs)("div", {
                    className: f.body,
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: "heading-lg/bold",
                            color: "header-primary",
                            children: m.intl.string(m.t["kw8/Ec"]),
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: m.intl.string(m.t.GZoV1O),
                        }),
                    ],
                }),
                (0, i.jsx)(a.Button, {
                    variant: "primary",
                    text: m.intl.string(m.t.Ye51oT),
                    "aria-label": m.intl.formatToPlainString(m.t.xx5Sug, {
                        sectionTitle: m.intl.string(m.t["kw8/Ec"]),
                        sectionBody: m.intl.string(m.t.GZoV1O),
                    }),
                    onClick: x,
                }),
            ],
        }),
    });
}
