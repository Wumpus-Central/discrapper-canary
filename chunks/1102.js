n.d(t, { default: () => w });
var i = n(627968),
    r = n(64700),
    a = n(17928),
    l = n(935462),
    s = n(289873),
    d = n(534514),
    g = n(682618),
    c = n(228366);
let o = new Map();
class u extends a.Ay.Store {
    static displayName = "BadgeDirectoryStore";
    getBadges() {
        return Array.from(o.values());
    }
    getBadgeById(e) {
        return o.get(e);
    }
    getSingleRequirementProgress(e) {
        let t = o.get(e)?.progress;
        if (null != t && 0 !== t.length) return t[0];
    }
    getCurrentTier(e) {
        let t = o.get(e);
        if (t?.current_tier != null) return t.tiers.find((e) => e.key === t.current_tier);
    }
    getNextTier(e) {
        let t = o.get(e);
        if (t?.next_tier != null) return t.tiers.find((e) => e.key === t.next_tier);
    }
    getRemainingToNextTier(e) {
        let t = this.getNextTier(e),
            n = this.getSingleRequirementProgress(e);
        return null == t || null == n ? 0 : Math.max(0, (t?.requirements[0]?.threshold ?? 0) - n.current);
    }
}
let m = new u(c.h, {
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { badges: t } = e;
        o = new Map(t.map((e) => [e.badge_id, e]));
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { badge: t } = e,
            n = new Map(o);
        n.set(t.badge_id, t), (o = n);
    },
    LOGOUT: function () {
        o = new Map();
    },
});
n(321073);
var h = n(503698),
    x = n.n(h),
    b = n(837381),
    p = n(741918),
    j = n(939249),
    f = n(707554),
    _ = n(834730),
    S = n(260762),
    N = n(518477),
    v = n(985018),
    B = n(490308);
function y(e) {
    let { badge: t, isSelected: n, onSelect: r, itemId: a } = e,
        l = (0, b.rm)(a);
    return (0, i.jsx)(j.D, {
        ...l,
        "aria-label": t.name,
        "aria-current": n ? "true" : void 0,
        className: x()(B.oL, n && B.xO),
        onFocus: () => {
            l.onFocus(), r();
        },
        onClick: r,
        children:
            "" !== t.simple_icon &&
            (0, i.jsx)("img", { src: (0, N.L7)(t.simple_icon), alt: "", "aria-hidden": !0, className: B.pW }),
    });
}
function I(e) {
    let { heading: t, headingId: n, badges: r, selectedBadgeId: a, onSelectBadge: l, getItemId: s } = e;
    return (0, i.jsxs)("div", {
        className: B.zE,
        role: "group",
        "aria-labelledby": n,
        children: [
            (0, i.jsx)(d.D, { id: n, variant: "heading-sm/medium", color: "text-default", children: t }),
            (0, i.jsx)("div", {
                className: B.yq,
                children: r.map((e) =>
                    (0, i.jsx)(
                        y,
                        { itemId: s(e), badge: e, isSelected: e.badge_id === a, onSelect: () => l(e.badge_id) },
                        e.badge_id,
                    ),
                ),
            }),
        ],
    });
}
function C(e) {
    let t = [],
        n = [];
    for (let i of e) i.owned ? n.push(i) : i.is_earnable && t.push(i);
    return { earnable: t, owned: n };
}
function E(e) {
    let { selectedBadgeId: t, onSelectBadge: n } = e,
        l = (0, a.bG)([m], () => m.getBadges()),
        s = (0, S.A)("badge-directory", p.Gl.HORIZONTAL),
        { earnable: g, owned: c } = r.useMemo(() => C(l), [l]),
        o = r.useMemo(() => [...g, ...c], [g, c]),
        u = r.useMemo(() => {
            let e = new Map();
            return o.forEach((t, n) => e.set(t.badge_id, `item-${n}`)), e;
        }, [o]),
        h = r.useCallback((e) => u.get(e.badge_id) ?? "item-0", [u]);
    return (0, i.jsx)("div", {
        className: B.ws,
        children: (0, i.jsx)(f.F, {
            component: (0, i.jsxs)("div", {
                className: B.NG,
                children: [
                    (0, i.jsx)(d.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: v.intl.string(v.t.sl2irJ),
                    }),
                    (0, i.jsx)(_.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: v.intl.string(v.t["62xU4E"]),
                    }),
                ],
            }),
            children: (0, i.jsx)(b.hD, {
                navigator: s,
                children: (0, i.jsx)(b.PR, {
                    children: (e) =>
                        (0, i.jsxs)("div", {
                            ...e,
                            ref: e.ref,
                            className: B.hG,
                            children: [
                                g.length > 0 &&
                                    (0, i.jsx)(I, {
                                        heading: v.intl.string(v.t["0YzU//"]),
                                        headingId: "badge-directory-section-earnable",
                                        badges: g,
                                        selectedBadgeId: t,
                                        onSelectBadge: n,
                                        getItemId: h,
                                    }),
                                c.length > 0 &&
                                    (0, i.jsx)(I, {
                                        heading: v.intl.string(v.t.UqnlQF),
                                        headingId: "badge-directory-section-owned",
                                        badges: c,
                                        selectedBadgeId: t,
                                        onSelectBadge: n,
                                        getItemId: h,
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
        [n, c] = r.useState(null),
        o = (0, a.bG)([m], () => m.getBadges());
    r.useEffect(() => {
        (0, g.R)();
    }, []);
    let u = r.useMemo(() => {
            let { earnable: e, owned: t } = C(o);
            return e[0]?.badge_id ?? t[0]?.badge_id ?? null;
        }, [o]),
        h = n ?? u,
        x = null != h ? m.getBadgeById(h) : void 0,
        b = 0 === o.length;
    return (0, i.jsx)(l.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": v.intl.string(v.t.PEjP4L),
        transitionState: t,
        size: l.rI.DYNAMIC,
        hideShadow: !0,
        className: B.CR,
        children: (0, i.jsx)(l.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: B.jE,
            children: b
                ? (0, i.jsx)("div", { className: B.Lq, children: (0, i.jsx)(s.y, {}) })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(E, { selectedBadgeId: h, onSelectBadge: c }),
                          (0, i.jsx)("div", {
                              className: B.SV,
                              children:
                                  null != x &&
                                  (0, i.jsx)(d.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: x.name,
                                  }),
                          }),
                      ],
                  }),
        }),
    });
}
