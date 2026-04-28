t.d(d, { default: () => w });
var a = t(627968),
    n = t(64700),
    i = t(17928),
    l = t(935462),
    s = t(289873),
    r = t(534514),
    o = t(682618),
    c = t(228366);
let g = new Map();
class b extends i.Ay.Store {
    static displayName = "BadgeDirectoryStore";
    getBadges() {
        return Array.from(g.values());
    }
    getBadgeById(e) {
        return g.get(e);
    }
}
let m = new b(c.h, {
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { badges: d } = e;
        g = new Map(d.map((e) => [e.badge_id, e]));
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { badge: d } = e,
            t = new Map(g);
        t.set(d.badge_id, d), (g = t);
    },
    LOGOUT: function () {
        g = new Map();
    },
});
t(321073);
var u = t(503698),
    h = t.n(u),
    _ = t(837381),
    x = t(741918),
    p = t(939249),
    j = t(707554),
    S = t(834730),
    f = t(260762),
    y = t(518477),
    v = t(985018),
    B = t(490308);
function C(e) {
    let { badge: d, isSelected: t, onSelect: n, itemId: i } = e,
        l = (0, _.rm)(i);
    return (0, a.jsx)(p.D, {
        ...l,
        "aria-label": d.name,
        "aria-current": t ? "true" : void 0,
        className: h()(B.oL, t && B.xO),
        onFocus: () => {
            l.onFocus(), n();
        },
        onClick: n,
        children:
            "" !== d.simple_icon &&
            (0, a.jsx)("img", { src: (0, y.L7)(d.simple_icon), alt: "", "aria-hidden": !0, className: B.pW }),
    });
}
function E(e) {
    let { heading: d, headingId: t, badges: n, selectedBadgeId: i, onSelectBadge: l, getItemId: s } = e;
    return (0, a.jsxs)("div", {
        className: B.zE,
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(r.D, { id: t, variant: "heading-sm/medium", color: "text-default", children: d }),
            (0, a.jsx)("div", {
                className: B.yq,
                children: n.map((e) =>
                    (0, a.jsx)(
                        C,
                        { itemId: s(e), badge: e, isSelected: e.badge_id === i, onSelect: () => l(e.badge_id) },
                        e.badge_id,
                    ),
                ),
            }),
        ],
    });
}
function I(e) {
    let d = [],
        t = [];
    for (let a of e) a.owned ? t.push(a) : a.is_earnable && d.push(a);
    return { earnable: d, owned: t };
}
function N(e) {
    let { selectedBadgeId: d, onSelectBadge: t } = e,
        l = (0, i.bG)([m], () => m.getBadges()),
        s = (0, f.A)("badge-directory", x.Gl.HORIZONTAL),
        { earnable: o, owned: c } = n.useMemo(() => I(l), [l]),
        g = n.useMemo(() => [...o, ...c], [o, c]),
        b = n.useMemo(() => {
            let e = new Map();
            return g.forEach((d, t) => e.set(d.badge_id, `item-${t}`)), e;
        }, [g]),
        u = n.useCallback((e) => b.get(e.badge_id) ?? "item-0", [b]);
    return (0, a.jsx)("div", {
        className: B.ws,
        children: (0, a.jsx)(j.F, {
            component: (0, a.jsxs)("div", {
                className: B.NG,
                children: [
                    (0, a.jsx)(r.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: v.intl.string(v.t.sl2irJ),
                    }),
                    (0, a.jsx)(S.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: v.intl.string(v.t["62xU4E"]),
                    }),
                ],
            }),
            children: (0, a.jsx)(_.hD, {
                navigator: s,
                children: (0, a.jsx)(_.PR, {
                    children: (e) =>
                        (0, a.jsxs)("div", {
                            ...e,
                            ref: e.ref,
                            className: B.hG,
                            children: [
                                o.length > 0 &&
                                    (0, a.jsx)(E, {
                                        heading: v.intl.string(v.t["0YzU//"]),
                                        headingId: "badge-directory-section-earnable",
                                        badges: o,
                                        selectedBadgeId: d,
                                        onSelectBadge: t,
                                        getItemId: u,
                                    }),
                                c.length > 0 &&
                                    (0, a.jsx)(E, {
                                        heading: v.intl.string(v.t.UqnlQF),
                                        headingId: "badge-directory-section-owned",
                                        badges: c,
                                        selectedBadgeId: d,
                                        onSelectBadge: t,
                                        getItemId: u,
                                    }),
                            ],
                        }),
                }),
            }),
        }),
    });
}
function w(e) {
    let { transitionState: d } = e,
        [t, c] = n.useState(null),
        g = (0, i.bG)([m], () => m.getBadges());
    n.useEffect(() => {
        (0, o.R)();
    }, []);
    let b = n.useMemo(() => {
            let { earnable: e, owned: d } = I(g);
            return e[0]?.badge_id ?? d[0]?.badge_id ?? null;
        }, [g]),
        u = t ?? b,
        h = null != u ? m.getBadgeById(u) : void 0,
        _ = 0 === g.length;
    return (0, a.jsx)(l.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": v.intl.string(v.t.PEjP4L),
        transitionState: d,
        size: l.rI.DYNAMIC,
        hideShadow: !0,
        className: B.CR,
        children: (0, a.jsx)(l.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: B.jE,
            children: _
                ? (0, a.jsx)("div", { className: B.Lq, children: (0, a.jsx)(s.y, {}) })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(N, { selectedBadgeId: u, onSelectBadge: c }),
                          (0, a.jsx)("div", {
                              className: B.SV,
                              children:
                                  null != h &&
                                  (0, a.jsx)(r.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: h.name,
                                  }),
                          }),
                      ],
                  }),
        }),
    });
}
