i.d(t, { A: () => f });
var n = i(477900),
    l = i(582128),
    s = i(922016),
    a = i(939249),
    r = i(307301),
    o = i(834730);
i(321073);
var d = i(477782),
    c = i(980707),
    u = i(753437),
    g = i(375708),
    m = i(382701);
let x = l.memo(function (e) {
    let { currentTags: t, onTagSelect: i, onNoneSelect: l, onClose: s } = e;
    return (0, n.jsx)(c.W, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": g.intl.string(g.t.r6EJOu),
        onClose: s,
        onSelect: () => {},
        className: m.X2,
        children: Object.entries(u.Pb).map((e) => {
            let s,
                [a, r] = e,
                o =
                    ((s = []),
                    r.type === u.me.RADIO &&
                        s.push(
                            (0, n.jsx)(
                                d.iD,
                                {
                                    id: `${a}-none`,
                                    group: a,
                                    label: g.intl.string(g.t.PoWNfe),
                                    checked: !r.tags.some((e) => t.includes(e)),
                                    action: () => l(r.tags),
                                },
                                "none",
                            ),
                        ),
                    r.tags.forEach((e) => {
                        let l = u.PT[e];
                        null != l &&
                            (r.type === u.me.RADIO
                                ? s.push(
                                      (0, n.jsx)(
                                          d.iD,
                                          {
                                              id: e,
                                              group: a,
                                              label: l.getText(),
                                              checked: t.includes(e),
                                              action: () => i(e, !0),
                                          },
                                          e,
                                      ),
                                  )
                                : s.push(
                                      (0, n.jsx)(
                                          d.sL,
                                          { id: e, label: l.getText(), checked: t.includes(e), action: () => i(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    s);
            return (0, n.jsx)(d.rX, { label: r.getLabel(), children: o }, a);
        }),
    });
});
function f(e) {
    let { tags: t, onTagsChange: i, onOpen: d, onClose: c, variant: f = "default", ref: h } = e,
        I = "filled" === f,
        p = (0, l.useRef)(null),
        A = (0, l.useMemo)(() => (null != t ? t : []), [t]),
        j = (0, l.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = new Set(A),
                    l = "added";
                if (t) {
                    let t = Object.values(u.Pb).find((t) => t.tags.includes(e));
                    if (null == t) return;
                    (t.tags.forEach((e) => {
                        n.delete(e);
                    }),
                        n.add(e));
                } else n.has(e) ? (n.delete(e), (l = "removed")) : n.add(e);
                i(Array.from(n), l);
            },
            [A, i],
        ),
        E = (0, l.useCallback)(
            (e) => {
                let t = new Set(A);
                (e.forEach((e) => {
                    t.delete(e);
                }),
                    i(Array.from(t), "removed"));
            },
            [A, i],
        );
    return (0, n.jsx)(s.Y, {
        targetElementRef: p,
        position: "right",
        align: "top",
        onRequestOpen: d,
        onRequestClose: c,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(x, { currentTags: A, onTagSelect: j, onNoneSelect: E, onClose: t });
        },
        children: (e) =>
            (0, n.jsx)("div", {
                ref: (e) => (
                    null != e && ((p.current = e), (h.current = e)),
                    () => {
                        ((p.current = null), (h.current = null));
                    }
                ),
                children: (0, n.jsxs)(a.D, {
                    ...e,
                    className: I ? m._m : m.c9,
                    "aria-label": g.intl.string(g.t.r6EJOu),
                    children: [
                        I && (0, n.jsx)(r.j, { size: "xxs", color: "currentColor" }),
                        (0, n.jsx)(o.E, {
                            variant: "text-xxs/medium",
                            color: "none",
                            children: I ? g.intl.string(g.t.DccrfU) : g.intl.string(g.t.fZSejy),
                        }),
                    ],
                }),
            }),
    });
}
