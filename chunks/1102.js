n.d(t, { default: () => w });
var d = n(627968),
    a = n(64700),
    i = n(17928),
    r = n(935462),
    l = n(289873),
    s = n(534514),
    o = n(682618),
    c = n(228366);
let g = new Map();
class u extends i.Ay.Store {
    static displayName = "BadgeDirectoryStore";
    getBadges() {
        return Array.from(g.values());
    }
    getBadgeById(e) {
        return g.get(e);
    }
    getSingleRequirementProgress(e) {
        let t = g.get(e)?.progress;
        if (null != t && 0 !== t.length) return t[0];
    }
    getCurrentTier(e) {
        let t = g.get(e);
        if (t?.current_tier != null) return t.tiers.find((e) => e.key === t.current_tier);
    }
    getNextTier(e) {
        let t = g.get(e);
        if (t?.next_tier != null) return t.tiers.find((e) => e.key === t.next_tier);
    }
}
let b = new u(c.h, {
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { badges: t } = e;
        g = new Map(t.map((e) => [e.badge_id, e]));
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { badge: t } = e,
            n = new Map(g);
        n.set(t.badge_id, t), (g = n);
    },
    LOGOUT: function () {
        g = new Map();
    },
});
n(321073);
var m = n(503698),
    _ = n.n(m),
    h = n(837381),
    x = n(741918),
    p = n(939249),
    j = n(707554),
    S = n(834730),
    f = n(260762),
    y = n(518477),
    C = n(985018),
    v = n(490308);
function B(e) {
    let { badge: t, isSelected: n, onSelect: a, itemId: i } = e,
        r = (0, h.rm)(i);
    return (0, d.jsx)(p.D, {
        ...r,
        "aria-label": t.name,
        "aria-current": n ? "true" : void 0,
        className: _()(v.oL, n && v.xO),
        onFocus: () => {
            r.onFocus(), a();
        },
        onClick: a,
        children:
            "" !== t.simple_icon &&
            (0, d.jsx)("img", { src: (0, y.L7)(t.simple_icon), alt: "", "aria-hidden": !0, className: v.pW }),
    });
}
function E(e) {
    let { heading: t, headingId: n, badges: a, selectedBadgeId: i, onSelectBadge: r, getItemId: l } = e;
    return (0, d.jsxs)("div", {
        className: v.zE,
        role: "group",
        "aria-labelledby": n,
        children: [
            (0, d.jsx)(s.D, { id: n, variant: "heading-sm/medium", color: "text-default", children: t }),
            (0, d.jsx)("div", {
                className: v.yq,
                children: a.map((e) =>
                    (0, d.jsx)(
                        B,
                        { itemId: l(e), badge: e, isSelected: e.badge_id === i, onSelect: () => r(e.badge_id) },
                        e.badge_id,
                    ),
                ),
            }),
        ],
    });
}
function I(e) {
    let t = [],
        n = [];
    for (let d of e) d.owned ? n.push(d) : d.is_earnable && t.push(d);
    return { earnable: t, owned: n };
}
function N(e) {
    let { selectedBadgeId: t, onSelectBadge: n } = e,
        r = (0, i.bG)([b], () => b.getBadges()),
        l = (0, f.A)("badge-directory", x.Gl.HORIZONTAL),
        { earnable: o, owned: c } = a.useMemo(() => I(r), [r]),
        g = a.useMemo(() => [...o, ...c], [o, c]),
        u = a.useMemo(() => {
            let e = new Map();
            return g.forEach((t, n) => e.set(t.badge_id, `item-${n}`)), e;
        }, [g]),
        m = a.useCallback((e) => u.get(e.badge_id) ?? "item-0", [u]);
    return (0, d.jsx)("div", {
        className: v.ws,
        children: (0, d.jsx)(j.F, {
            component: (0, d.jsxs)("div", {
                className: v.NG,
                children: [
                    (0, d.jsx)(s.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: C.intl.string(C.t.sl2irJ),
                    }),
                    (0, d.jsx)(S.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: C.intl.string(C.t["62xU4E"]),
                    }),
                ],
            }),
            children: (0, d.jsx)(h.hD, {
                navigator: l,
                children: (0, d.jsx)(h.PR, {
                    children: (e) =>
                        (0, d.jsxs)("div", {
                            ...e,
                            ref: e.ref,
                            className: v.hG,
                            children: [
                                o.length > 0 &&
                                    (0, d.jsx)(E, {
                                        heading: C.intl.string(C.t["0YzU//"]),
                                        headingId: "badge-directory-section-earnable",
                                        badges: o,
                                        selectedBadgeId: t,
                                        onSelectBadge: n,
                                        getItemId: m,
                                    }),
                                c.length > 0 &&
                                    (0, d.jsx)(E, {
                                        heading: C.intl.string(C.t.UqnlQF),
                                        headingId: "badge-directory-section-owned",
                                        badges: c,
                                        selectedBadgeId: t,
                                        onSelectBadge: n,
                                        getItemId: m,
                                    }),
                            ],
                        }),
                }),
            }),
        }),
    });
}
function w(e) {
    let { transitionState: t } = e,
        [n, c] = a.useState(null),
        g = (0, i.bG)([b], () => b.getBadges());
    a.useEffect(() => {
        (0, o.R)();
    }, []);
    let u = a.useMemo(() => {
            let { earnable: e, owned: t } = I(g);
            return e[0]?.badge_id ?? t[0]?.badge_id ?? null;
        }, [g]),
        m = n ?? u,
        _ = null != m ? b.getBadgeById(m) : void 0,
        h = 0 === g.length;
    return (0, d.jsx)(r.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": C.intl.string(C.t.PEjP4L),
        transitionState: t,
        size: r.rI.DYNAMIC,
        hideShadow: !0,
        className: v.CR,
        children: (0, d.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: v.jE,
            children: h
                ? (0, d.jsx)("div", { className: v.Lq, children: (0, d.jsx)(l.y, {}) })
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(N, { selectedBadgeId: m, onSelectBadge: c }),
                          (0, d.jsx)("div", {
                              className: v.SV,
                              children:
                                  null != _ &&
                                  (0, d.jsx)(s.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: _.name,
                                  }),
                          }),
                      ],
                  }),
        }),
    });
}
