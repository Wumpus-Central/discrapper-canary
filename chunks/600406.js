n.r(t), n.d(t, { PlaygroundEmbed: () => v }), n(35282), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(657707),
    a = n(793030),
    i = n(442837),
    c = n(756715),
    u = n(993365),
    s = n(51251),
    d = n(159691),
    f = n(37234),
    b = n(456116),
    p = n(594174),
    g = n(997612),
    y = n(316686),
    m = n(981631),
    h = n(567);
let j = {
    mana: {
        name: "Mana",
        icon: o.hh5,
        config: s.g,
        layer: m.S9g.MANA_PLAYGROUND,
        defaultSubtitle: "Explore the Mana Design System",
    },
    revenue: {
        name: "Revenue",
        icon: o.uMN,
        config: b.$L,
        layer: m.S9g.REVENUE_PLAYGROUND,
        defaultSubtitle: "Explore Revenue Components",
    },
};
function v(e) {
    var t;
    let n = (0, i.e7)([p.default], () => {
            let e = p.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        o = l.useMemo(
            () =>
                (function (e) {
                    let t = e.match(y.u);
                    return null == t || null == t[1] ? null : t[1].toLowerCase();
                })(e.url),
            [e.url],
        ),
        s = null != o ? j[o] : null,
        b = l.useMemo(() => {
            if (null == s) return;
            let t = (function (e) {
                var t;
                let n = e.match(y.u);
                return null == n ? null : null != (t = n[3]) ? t : null;
            })(e.url);
            for (let e of s.config.collections) {
                let n = e.groups.find((e) => e.stories.some((e) => e.id === t));
                if (null != n) return n.stories.find((e) => e.id === t);
            }
        }, [e.url, s]),
        m = null != (t = null == b ? void 0 : b.name) ? t : null != s ? "".concat(s.name, " Playground") : "Playground",
        v =
            null != b && null != b.docs
                ? (0, r.jsx)(c.Anchor, {
                      href: b.docs,
                      children: "Documentation",
                  })
                : null != s
                  ? s.defaultSubtitle
                  : "Explore Components",
        O = l.useCallback(() => {
            if (null == s) return;
            let e = s.config;
            if (null != b) {
                for (let t of e.collections)
                    if (t.groups.some((e) => e.stories.some((e) => e.id === b.id))) {
                        g.$.setState({
                            selectedCollection: t.id,
                            selectedStory: b.id,
                        });
                        break;
                    }
            } else
                g.$.setState({
                    selectedCollection: null,
                    selectedStory: null,
                });
            (0, f.jN)(s.layer);
        }, [b, s]);
    if (!n || null == s) return null;
    let _ = s.icon;
    return (0, r.jsx)("div", {
        className: h.root,
        "data-has-story": null != b,
        children: (0, r.jsxs)(a.Kqy, {
            direction: null == b ? "vertical" : "horizontal",
            align: null == b ? "start" : "center",
            gap: 12,
            justify: null == b ? "end" : "space-between",
            children: [
                (0, r.jsx)("div", {
                    className: h.header,
                    children: (0, r.jsxs)(a.Kqy, {
                        direction: "horizontal",
                        align: "start",
                        gap: 8,
                        children: [
                            (0, r.jsx)(_, { size: "lg" }),
                            (0, r.jsxs)(a.Kqy, {
                                direction: "vertical",
                                gap: 0,
                                children: [
                                    (0, r.jsx)(u.x, {
                                        variant: "text-md/semibold",
                                        children: m,
                                    }),
                                    (0, r.jsx)(u.x, {
                                        variant: "text-sm/normal",
                                        children: v,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(d.zxk, {
                    size: "sm",
                    onClick: O,
                    text: "Open Playground",
                    fullWidth: null == b,
                }),
            ],
        }),
    });
}
