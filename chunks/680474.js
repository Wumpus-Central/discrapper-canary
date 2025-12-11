n.d(t, { Z: () => g });
var a = n(54381),
    r = n(473749),
    i = n(793030),
    l = n(823379),
    s = n(216780),
    o = n(448021),
    c = n(405411),
    d = n(215453),
    u = n(796150),
    p = n(24746),
    m = n(970731),
    h = n(388032),
    f = n(195006);
function g(e) {
    let { application: t } = e,
        n = r.useMemo(() => {
            var e, n, a;
            return null !=
                (a = (null != (n = null == (e = t.directory_entry) ? void 0 : e.carousel_items) ? n : [])
                    .map(s.RF)
                    .filter(l.lm))
                ? a
                : [];
        }, [t]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: f.aboutContainer,
                children: [
                    (0, a.jsx)(o.Z, {
                        application: t,
                        carouselItems: n,
                    }),
                    (0, a.jsx)(p.Z, { application: t }),
                    (0, a.jsx)(c.Z, { application: t }),
                    (0, a.jsx)(m.Z, { application: t }),
                    (0, a.jsx)(d.Z, { application: t }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: f.informationContainer,
                children: [
                    (0, a.jsx)("div", { className: f.divider }),
                    (0, a.jsx)(i.X6q, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: h.intl.string(h.t["mD+J/i"]),
                    }),
                    (0, a.jsx)(u.Z, {
                        application: t,
                        view: "embedded",
                    }),
                ],
            }),
        ],
    });
}
