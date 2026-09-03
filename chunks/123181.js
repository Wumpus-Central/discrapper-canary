n.d(t, { A: () => f });
var i = n(477900),
    l = n(582128),
    s = n(922016),
    r = n(939249),
    a = n(307301),
    o = n(834730);
n(321073);
var c = n(477782),
    d = n(980707),
    u = n(753437),
    g = n(375708),
    m = n(382701);
let x = l.memo(function (e) {
    let { currentTags: t, onTagSelect: n, onNoneSelect: l, onClose: s } = e;
    return (0, i.jsx)(d.W, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": g.intl.string(g.t.r6EJOu),
        onClose: s,
        onSelect: () => {},
        className: m.X2,
        children: Object.entries(u.Pb).map((e) => {
            let s,
                [r, a] = e,
                o =
                    ((s = []),
                    a.type === u.me.RADIO &&
                        s.push(
                            (0, i.jsx)(
                                c.iD,
                                {
                                    id: `${r}-none`,
                                    group: r,
                                    label: g.intl.string(g.t.PoWNfe),
                                    checked: !a.tags.some((e) => t.includes(e)),
                                    action: () => l(a.tags),
                                },
                                "none",
                            ),
                        ),
                    a.tags.forEach((e) => {
                        let l = u.PT[e];
                        null != l &&
                            (a.type === u.me.RADIO
                                ? s.push(
                                      (0, i.jsx)(
                                          c.iD,
                                          {
                                              id: e,
                                              group: r,
                                              label: l.getText(),
                                              checked: t.includes(e),
                                              action: () => n(e, !0),
                                          },
                                          e,
                                      ),
                                  )
                                : s.push(
                                      (0, i.jsx)(
                                          c.sL,
                                          { id: e, label: l.getText(), checked: t.includes(e), action: () => n(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    s);
            return (0, i.jsx)(c.rX, { label: a.getLabel(), children: o }, r);
        }),
    });
});
function f(e) {
    let { tags: t, onTagsChange: n, onOpen: c, onClose: d, variant: f = "default", ref: h } = e,
        p = "filled" === f,
        I = (0, l.useRef)(null),
        j = (0, l.useMemo)(() => (null != t ? t : []), [t]),
        A = (0, l.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = new Set(j),
                    l = "added";
                if (t) {
                    let t = Object.values(u.Pb).find((t) => t.tags.includes(e));
                    if (null == t) return;
                    t.tags.forEach((e) => {
                        i.delete(e);
                    }),
                        i.add(e);
                } else i.has(e) ? (i.delete(e), (l = "removed")) : i.add(e);
                n(Array.from(i), l);
            },
            [j, n],
        ),
        E = (0, l.useCallback)(
            (e) => {
                let t = new Set(j);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    n(Array.from(t), "removed");
            },
            [j, n],
        );
    return (0, i.jsx)(s.Y, {
        targetElementRef: I,
        position: "right",
        align: "top",
        onRequestOpen: c,
        onRequestClose: d,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(x, { currentTags: j, onTagSelect: A, onNoneSelect: E, onClose: t });
        },
        children: (e) =>
            (0, i.jsx)("div", {
                ref: (e) => (
                    null != e && ((I.current = e), (h.current = e)),
                    () => {
                        (I.current = null), (h.current = null);
                    }
                ),
                children: (0, i.jsxs)(r.D, {
                    ...e,
                    className: p ? m._m : m.c9,
                    "aria-label": g.intl.string(g.t.r6EJOu),
                    children: [
                        p && (0, i.jsx)(a.j, { size: "xxs", color: "currentColor" }),
                        (0, i.jsx)(o.E, {
                            variant: "text-xxs/medium",
                            color: "none",
                            children: p ? g.intl.string(g.t.DccrfU) : g.intl.string(g.t.fZSejy),
                        }),
                    ],
                }),
            }),
    });
}
