n.d(t, { A: () => f });
var i = n(477900),
    l = n(582128),
    a = n(922016),
    s = n(939249),
    r = n(307301),
    d = n(834730);
n(321073);
var o = n(477782),
    c = n(980707),
    u = n(753437),
    m = n(375708),
    g = n(382701);
let x = l.memo(function (e) {
    let { currentTags: t, onTagSelect: n, onNoneSelect: l, onClose: a } = e;
    return (0, i.jsx)(c.W, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": m.intl.string(m.t.r6EJOu),
        onClose: a,
        onSelect: () => {},
        className: g.X2,
        children: Object.entries(u.Pb).map((e) => {
            let a,
                [s, r] = e,
                d =
                    ((a = []),
                    r.type === u.me.RADIO &&
                        a.push(
                            (0, i.jsx)(
                                o.iD,
                                {
                                    id: `${s}-none`,
                                    group: s,
                                    label: m.intl.string(m.t.PoWNfe),
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
                                ? a.push(
                                      (0, i.jsx)(
                                          o.iD,
                                          {
                                              id: e,
                                              group: s,
                                              label: l.getText(),
                                              checked: t.includes(e),
                                              action: () => n(e, !0),
                                          },
                                          e,
                                      ),
                                  )
                                : a.push(
                                      (0, i.jsx)(
                                          o.sL,
                                          { id: e, label: l.getText(), checked: t.includes(e), action: () => n(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    a);
            return (0, i.jsx)(o.rX, { label: r.getLabel(), children: d }, s);
        }),
    });
});
function f(e) {
    let { tags: t, onTagsChange: n, onOpen: o, onClose: c, variant: f = "default", ref: h } = e,
        p = "filled" === f,
        j = (0, l.useRef)(null),
        I = (0, l.useMemo)(() => (null != t ? t : []), [t]),
        E = (0, l.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = new Set(I),
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
            [I, n],
        ),
        v = (0, l.useCallback)(
            (e) => {
                let t = new Set(I);
                (e.forEach((e) => {
                    t.delete(e);
                }),
                    n(Array.from(t), "removed"));
            },
            [I, n],
        );
    return (0, i.jsx)(a.Y, {
        targetElementRef: j,
        position: "right",
        align: "top",
        onRequestOpen: o,
        onRequestClose: c,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(x, { currentTags: I, onTagSelect: E, onNoneSelect: v, onClose: t });
        },
        children: (e) =>
            (0, i.jsx)("div", {
                ref: (e) => (
                    null != e && ((j.current = e), (h.current = e)),
                    () => {
                        ((j.current = null), (h.current = null));
                    }
                ),
                children: (0, i.jsxs)(s.D, {
                    ...e,
                    className: p ? g._m : g.c9,
                    "aria-label": m.intl.string(m.t.r6EJOu),
                    children: [
                        p && (0, i.jsx)(r.j, { size: "xxs", color: "currentColor" }),
                        (0, i.jsx)(d.E, {
                            variant: "text-xxs/medium",
                            color: "none",
                            children: p ? m.intl.string(m.t.DccrfU) : m.intl.string(m.t.fZSejy),
                        }),
                    ],
                }),
            }),
    });
}
