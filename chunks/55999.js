n.d(t, { A: () => h });
var l = n(477900),
    i = n(582128),
    a = n(265872),
    s = n(939249),
    r = n(307301),
    d = n(834730),
    o = n(126601);
n(321073);
var c = n(477782),
    u = n(165862),
    g = n(394245),
    m = n(792996),
    x = n(382701);
let f = i.memo(function (e) {
    let { currentTags: t, onTagSelect: n, onNoneSelect: i, onClose: a } = e;
    return (0, l.jsx)(u.W, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": m.intl.string(m.t.r6EJOu),
        onClose: a,
        onSelect: () => {},
        className: x.X2,
        children: Object.entries(o.Pb).map((e) => {
            let a,
                [s, r] = e,
                d =
                    ((a = []),
                    r.type === o.me.RADIO &&
                        a.push(
                            (0, l.jsx)(
                                c.iD,
                                {
                                    id: `${s}-none`,
                                    group: s,
                                    label: m.intl.string(m.t.PoWNfe),
                                    checked: !r.tags.some((e) => t.includes(e)),
                                    action: () => i(r.tags),
                                },
                                "none",
                            ),
                        ),
                    r.tags.forEach((e) => {
                        let i = g.P[e];
                        null != i &&
                            (r.type === o.me.RADIO
                                ? a.push(
                                      (0, l.jsx)(
                                          c.iD,
                                          {
                                              id: e,
                                              group: s,
                                              label: i.getText(),
                                              checked: t.includes(e),
                                              action: () => n(e, !0),
                                          },
                                          e,
                                      ),
                                  )
                                : a.push(
                                      (0, l.jsx)(
                                          c.sL,
                                          { id: e, label: i.getText(), checked: t.includes(e), action: () => n(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    a);
            return (0, l.jsx)(c.rX, { label: r.getLabel(), children: d }, s);
        }),
    });
});
function h(e) {
    let { tags: t, onTagsChange: n, onOpen: c, onClose: u, variant: g = "default", ref: h } = e,
        I = "filled" === g,
        p = (0, i.useRef)(null),
        j = (0, i.useMemo)(() => (null != t ? t : []), [t]),
        E = (0, i.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    l = !t && j.includes(e) ? "removed" : "added";
                n((0, o.pK)(j, e), l);
            },
            [j, n],
        ),
        A = (0, i.useCallback)(
            (e) => {
                n((0, o.LQ)(j, e), "removed");
            },
            [j, n],
        );
    return (0, l.jsx)(a.Y, {
        targetElementRef: p,
        position: "right",
        align: "top",
        onRequestOpen: c,
        onRequestClose: u,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(f, { currentTags: j, onTagSelect: E, onNoneSelect: A, onClose: t });
        },
        children: (e) =>
            (0, l.jsx)("div", {
                ref: (e) => (
                    null != e && ((p.current = e), (h.current = e)),
                    () => {
                        ((p.current = null), (h.current = null));
                    }
                ),
                children: (0, l.jsxs)(s.D, {
                    ...e,
                    className: I ? x._m : x.c9,
                    "aria-label": m.intl.string(m.t.r6EJOu),
                    children: [
                        I && (0, l.jsx)(r.PlusSmallIcon, { size: "xxs", color: "currentColor" }),
                        (0, l.jsx)(d.E, {
                            variant: "footnote/medium",
                            color: "none",
                            children: I ? m.intl.string(m.t.DccrfU) : m.intl.string(m.t.fZSejy),
                        }),
                    ],
                }),
            }),
    });
}
