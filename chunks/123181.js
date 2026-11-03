n.d(t, { A: () => h });
var i = n(477900),
    l = n(582128),
    a = n(265872),
    s = n(939249),
    r = n(307301),
    o = n(834730),
    d = n(126601);
n(321073);
var c = n(477782),
    u = n(980707),
    m = n(394245),
    g = n(105292),
    x = n(382701);
let f = l.memo(function (e) {
    let { currentTags: t, onTagSelect: n, onNoneSelect: l, onClose: a } = e;
    return (0, i.jsx)(u.W, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": g.intl.string(g.t.r6EJOu),
        onClose: a,
        onSelect: () => {},
        className: x.X2,
        children: Object.entries(d.Pb).map((e) => {
            let a,
                [s, r] = e,
                o =
                    ((a = []),
                    r.type === d.me.RADIO &&
                        a.push(
                            (0, i.jsx)(
                                c.iD,
                                {
                                    id: `${s}-none`,
                                    group: s,
                                    label: g.intl.string(g.t.PoWNfe),
                                    checked: !r.tags.some((e) => t.includes(e)),
                                    action: () => l(r.tags),
                                },
                                "none",
                            ),
                        ),
                    r.tags.forEach((e) => {
                        let l = m.P[e];
                        null != l &&
                            (r.type === d.me.RADIO
                                ? a.push(
                                      (0, i.jsx)(
                                          c.iD,
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
                                          c.sL,
                                          { id: e, label: l.getText(), checked: t.includes(e), action: () => n(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    a);
            return (0, i.jsx)(c.rX, { label: r.getLabel(), children: o }, s);
        }),
    });
});
function h(e) {
    let { tags: t, onTagsChange: n, onOpen: c, onClose: u, variant: m = "default", ref: h } = e,
        p = "filled" === m,
        j = (0, l.useRef)(null),
        I = (0, l.useMemo)(() => (null != t ? t : []), [t]),
        E = (0, l.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = !t && I.includes(e) ? "removed" : "added";
                n((0, d.pK)(I, e), i);
            },
            [I, n],
        ),
        v = (0, l.useCallback)(
            (e) => {
                n((0, d.LQ)(I, e), "removed");
            },
            [I, n],
        );
    return (0, i.jsx)(a.Y, {
        targetElementRef: j,
        position: "right",
        align: "top",
        onRequestOpen: c,
        onRequestClose: u,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(f, { currentTags: I, onTagSelect: E, onNoneSelect: v, onClose: t });
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
                    className: p ? x._m : x.c9,
                    "aria-label": g.intl.string(g.t.r6EJOu),
                    children: [
                        p && (0, i.jsx)(r.j, { size: "xxs", color: "currentColor" }),
                        (0, i.jsx)(o.E, {
                            variant: "footnote/medium",
                            color: "none",
                            children: p ? g.intl.string(g.t.DccrfU) : g.intl.string(g.t.fZSejy),
                        }),
                    ],
                }),
            }),
    });
}
