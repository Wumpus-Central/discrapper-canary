n.d(t, { Z: () => x }), n(642613), n(388685);
var a = n(54381),
    l = n(473749),
    i = n(481060),
    r = n(131051),
    s = n(28682),
    o = n(920952),
    c = n(206412),
    d = n(617810),
    u = n(211339);
function m(e) {
    var t;
    let { setting: n, depth: i, highlight: r } = e,
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
                            depth: i + 1,
                            highlight: r,
                        },
                        e,
                    ),
                )),
        (0, a.jsx)(c.r, {
            title: n,
            initExpanded: i <= 2,
            highlight: r,
            children: o,
        })
    );
}
function p(e) {
    let { setting: t, depth: n } = e,
        l =
            (0, s.Lk)(t) &&
            ((t.type === s.Jq.SIDEBAR_ITEM &&
                t.layout.some((e) => (null == e ? void 0 : e.layout.some((e) => null != e.render)))) ||
                (t.type === s.Jq.PANEL && t.layout.some((e) => null != e.render)) ||
                (t.type === s.Jq.PANE && null != t.render)),
        i = null;
    if ((0, s.Lk)(t)) {
        var r, o, d;
        let e =
            null == (d = t.parent) || null == (o = d.parent) || null == (r = o.getLegacySearchKey) ? void 0 : r.call(o);
        0 === t.layout.length && null != e
            ? (i = (0, a.jsx)(m, {
                  setting: e,
                  depth: n + 1,
                  highlight: !0,
              }))
            : t.layout.length > 0 &&
              (i = t.layout.map((e) =>
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
        children: i,
    });
}
let h = l.createContext(null);
function x() {
    let [e, t] = l.useState(!1),
        { legacySettingDirectory: n } = (0, d.q)(),
        { node: s } = (0, r.ZP)(o.Z, ""),
        c = (0, r.ZA)();
    return (0, a.jsxs)(i.C3N, {
        label: "Settings Tree",
        children: [
            (0, a.jsx)(i.rsf, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: c,
                onChange: r.go,
            }),
            (0, a.jsx)(i.rsf, {
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
