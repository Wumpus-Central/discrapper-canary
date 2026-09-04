n.d(t, { A: () => x });
var i = n(477900),
    l = n(582128),
    s = n(922016),
    r = n(939249),
    a = n(307301),
    o = n(834730);
n(321073);
var d = n(477782),
    u = n(980707),
    c = n(753437),
    g = n(375708),
    m = n(382701);
let f = l.memo(function (e) {
    let { currentTags: t, onTagSelect: n, onNoneSelect: l, onClose: s } = e;
    return (0, i.jsx)(u.W, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": g.intl.string(g.t.r6EJOu),
        onClose: s,
        onSelect: () => {},
        className: m.X2,
        children: Object.entries(c.Pb).map((e) => {
            let s,
                [r, a] = e,
                o =
                    ((s = []),
                    a.type === c.me.RADIO &&
                        s.push(
                            (0, i.jsx)(
                                d.iD,
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
                        let l = c.PT[e];
                        null != l &&
                            (a.type === c.me.RADIO
                                ? s.push(
                                      (0, i.jsx)(
                                          d.iD,
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
                                          d.sL,
                                          { id: e, label: l.getText(), checked: t.includes(e), action: () => n(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    s);
            return (0, i.jsx)(d.rX, { label: a.getLabel(), children: o }, r);
        }),
    });
});
function x(e) {
    let { tags: t, onTagsChange: n, onOpen: d, onClose: u, variant: x = "default", ref: h } = e,
        I = "filled" === x,
        p = (0, l.useRef)(null),
        A = (0, l.useMemo)(() => (null != t ? t : []), [t]),
        j = (0, l.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = new Set(A),
                    l = "added";
                if (t) {
                    let t = Object.values(c.Pb).find((t) => t.tags.includes(e));
                    if (null == t) return;
                    t.tags.forEach((e) => {
                        i.delete(e);
                    }),
                        i.add(e);
                } else i.has(e) ? (i.delete(e), (l = "removed")) : i.add(e);
                n(Array.from(i), l);
            },
            [A, n],
        ),
        E = (0, l.useCallback)(
            (e) => {
                let t = new Set(A);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    n(Array.from(t), "removed");
            },
            [A, n],
        );
    return (0, i.jsx)(s.Y, {
        targetElementRef: p,
        position: "right",
        align: "top",
        onRequestOpen: d,
        onRequestClose: u,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(f, { currentTags: A, onTagSelect: j, onNoneSelect: E, onClose: t });
        },
        children: (e) =>
            (0, i.jsx)("div", {
                ref: (e) => (
                    null != e && ((p.current = e), (h.current = e)),
                    () => {
                        (p.current = null), (h.current = null);
                    }
                ),
                children: (0, i.jsxs)(r.D, {
                    ...e,
                    className: I ? m._m : m.c9,
                    "aria-label": g.intl.string(g.t.r6EJOu),
                    children: [
                        I && (0, i.jsx)(a.j, { size: "xxs", color: "currentColor" }),
                        (0, i.jsx)(o.E, {
                            variant: "text-xxs/medium",
                            color: "none",
                            children: I ? g.intl.string(g.t.DccrfU) : g.intl.string(g.t.fZSejy),
                        }),
                    ],
                }),
            }),
    });
}
