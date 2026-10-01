n.d(t, { A: () => x });
var i = n(477900),
    l = n(582128),
    s = n(922016),
    a = n(939249),
    r = n(307301),
    o = n(834730);
n(321073);
var d = n(477782),
    c = n(980707),
    u = n(753437),
    g = n(375708),
    m = n(382701);
let f = l.memo(function (e) {
    let { currentTags: t, onTagSelect: n, onNoneSelect: l, onClose: s } = e;
    return (0, i.jsx)(c.W, {
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
                            (0, i.jsx)(
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
                                      (0, i.jsx)(
                                          d.iD,
                                          {
                                              id: e,
                                              group: a,
                                              label: l.getText(),
                                              checked: t.includes(e),
                                              action: () => n(e, !0),
                                          },
                                          e,
                                      ),
                                  )
                                : s.push(
                                      (0, i.jsx)(
                                          d.sL,
                                          { id: e, label: l.getText(), checked: t.includes(e), action: () => n(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    s);
            return (0, i.jsx)(d.rX, { label: r.getLabel(), children: o }, a);
        }),
    });
});
function x(e) {
    let { tags: t, onTagsChange: n, onOpen: d, onClose: c, variant: x = "default", ref: h } = e,
        p = "filled" === x,
        I = (0, l.useRef)(null),
        E = (0, l.useMemo)(() => (null != t ? t : []), [t]),
        A = (0, l.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = new Set(E),
                    l = "added";
                if (t) {
                    let t = Object.values(u.Pb).find((t) => t.tags.includes(e));
                    if (null == t) return;
                    (t.tags.forEach((e) => {
                        i.delete(e);
                    }),
                        i.add(e));
                } else i.has(e) ? (i.delete(e), (l = "removed")) : i.add(e);
                n(Array.from(i), l);
            },
            [E, n],
        ),
        j = (0, l.useCallback)(
            (e) => {
                let t = new Set(E);
                (e.forEach((e) => {
                    t.delete(e);
                }),
                    n(Array.from(t), "removed"));
            },
            [E, n],
        );
    return (0, i.jsx)(s.Y, {
        targetElementRef: I,
        position: "right",
        align: "top",
        onRequestOpen: d,
        onRequestClose: c,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(f, { currentTags: E, onTagSelect: A, onNoneSelect: j, onClose: t });
        },
        children: (e) =>
            (0, i.jsx)("div", {
                ref: (e) => (
                    null != e && ((I.current = e), (h.current = e)),
                    () => {
                        ((I.current = null), (h.current = null));
                    }
                ),
                children: (0, i.jsxs)(a.D, {
                    ...e,
                    className: p ? m._m : m.c9,
                    "aria-label": g.intl.string(g.t.r6EJOu),
                    children: [
                        p && (0, i.jsx)(r.j, { size: "xxs", color: "currentColor" }),
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
