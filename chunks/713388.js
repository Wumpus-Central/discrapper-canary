n.d(t, { Z: () => x }), n(642613), n(388685);
var a = n(54381),
    l = n(473749),
    r = n(481060),
    i = n(131051),
    s = n(28682),
    o = n(920952),
    c = n(206412),
    d = n(617810),
    u = n(211339);
function m(e) {
    var t;
    let { setting: n, depth: r, highlight: i } = e,
        s = null == (t = l.useContext(h)) ? void 0 : t.get(n),
        o = null;
    return (
        null != s &&
            s.length > 0 &&
            (o = s
                .sort((e, t) => e.localeCompare(t))
                .map((e) =>
                    (0, a.jsx)(
                        m,
                        {
                            setting: e,
                            depth: r + 1,
                            highlight: i,
                        },
                        e,
                    ),
                )),
        (0, a.jsx)(c.r, {
            title: n,
            initExpanded: r <= 2,
            highlight: i,
            children: o,
        })
    );
}
function p(e) {
    let { setting: t, depth: n } = e,
        l =
            (0, s.L)(t) &&
            ((t.type === s.J.SIDEBAR_ITEM &&
                t.layout.some((e) => (null == e ? void 0 : e.layout.some((e) => null != e.render)))) ||
                (t.type === s.J.PANEL && t.layout.some((e) => null != e.render)) ||
                (t.type === s.J.PANE && null != t.render)),
        r = null;
    if ((0, s.L)(t)) {
        var i, o, d;
        let e =
            null == (d = t.parent) || null == (o = d.parent) || null == (i = o.getLegacySearchKey) ? void 0 : i.call(o);
        0 === t.layout.length && null != e
            ? (r = (0, a.jsx)(m, {
                  setting: e,
                  depth: n + 1,
                  highlight: !0,
              }))
            : t.layout.length > 0 &&
              (r = t.layout.map((e) =>
                  (0, a.jsx)(
                      p,
                      {
                          setting: e,
                          depth: n + 1,
                      },
                      e.key,
                  ),
              ));
    }
    return (0, a.jsx)(c.r, {
        title: t.key,
        initExpanded: n <= 2,
        highlight: l,
        children: r,
    });
}
let h = l.createContext(null);
function x() {
    let [e, t] = l.useState(!1),
        { legacySettingDirectory: n } = (0, d.q)(),
        { node: s } = (0, i.ZP)(o.E, ""),
        c = (0, i.ZA)();
    return (0, a.jsxs)(r.C3N, {
        label: "Settings Tree",
        children: [
            (0, a.jsx)(r.rsf, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: c,
                onChange: i.go,
            }),
            (0, a.jsx)(r.rsf, {
                checked: e,
                onChange: (e) => t(e),
                label: "Show Legacy Settings Tree",
            }),
            (0, a.jsx)(h.Provider, {
                value: n,
                children: (0, a.jsxs)("div", {
                    className: u.tree,
                    children: [
                        e &&
                            (0, a.jsx)(
                                m,
                                {
                                    setting: "root",
                                    depth: 1,
                                },
                                "root",
                            ),
                        !e &&
                            (0, a.jsx)(
                                p,
                                {
                                    setting: s,
                                    depth: 1,
                                },
                                s.key,
                            ),
                    ],
                }),
            }),
        ],
    });
}
