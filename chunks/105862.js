n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    o = n(780384),
    a = n(481060),
    s = n(410030),
    l = n(782568),
    c = n(63063),
    u = n(827498),
    d = n(888617),
    f = n(981631),
    _ = n(388032),
    p = n(434666),
    h = n(983008),
    m = n(478408);
function g(e) {
    let { showImage: t = !0, padding: n = !1 } = e,
        g = (0, s.ZP)(),
        E = (0, o.ap)(g) ? m : h,
        b = i.useCallback(() => {
            (0, l.Z)(c.Z.getAppsSupportURL(f.BhN.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: y } = (0, d.Z)({
            sectionName: u.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1,
        });
    return (0, r.jsx)("div", {
        className: n ? p.containerPadding : void 0,
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                y.current = e;
            },
            className: p.container,
            children: [
                t &&
                    (0, r.jsx)("img", {
                        className: p.image,
                        src: E,
                        alt: "",
                        "aria-hidden": !0,
                    }),
                (0, r.jsxs)("div", {
                    className: p.body,
                    children: [
                        (0, r.jsx)(a.X6q, {
                            variant: "heading-lg/bold",
                            color: "header-primary",
                            children: _.intl.string(_.t["kw8/ER"]),
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: _.intl.string(_.t.GZoV1N),
                        }),
                    ],
                }),
                (0, r.jsx)(a.zxk, {
                    variant: "primary",
                    text: _.intl.string(_.t.Ye51oa),
                    "aria-label": _.intl.formatToPlainString(_.t.xx5Sur, {
                        sectionTitle: _.intl.string(_.t["kw8/ER"]),
                        sectionBody: _.intl.string(_.t.GZoV1N),
                    }),
                    onClick: b,
                }),
            ],
        }),
    });
}
