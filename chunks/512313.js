n.d(t, { Z: () => x }), n(642613), n(388685);
var a = n(951288),
    i = n(647438),
    r = n(481060),
    l = n(131051),
    s = n(28682),
    o = n(920952),
    c = n(544651),
    d = n(546697),
    u = n(547481);
function m(e) {
    var t;
    let { setting: n, depth: r, highlight: l } = e,
        s = null == (t = i.useContext(h)) ? void 0 : t.get(n),
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
                            highlight: l,
                        },
                        e,
                    ),
                )),
        (0, a.jsx)(c.r, {
            title: n,
            initExpanded: r <= 2,
            highlight: l,
            children: o,
        })
    );
}
function p(e) {
    let { setting: t, depth: n } = e,
        i =
            (0, s.Lk)(t) &&
            ((t.type === s.Jq.SIDEBAR_ITEM &&
                t.layout.some((e) => (null == e ? void 0 : e.layout.some((e) => null != e.render)))) ||
                (t.type === s.Jq.PANEL && t.layout.some((e) => null != e.render)) ||
                (t.type === s.Jq.PANE && null != t.render)),
        r = null;
    if ((0, s.Lk)(t)) {
        var l, o, d;
        let e =
            null == (d = t.parent) || null == (o = d.parent) || null == (l = o.getLegacySearchKey) ? void 0 : l.call(o);
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
        highlight: i,
        children: r,
    });
}
let h = i.createContext(null);
function x() {
    let [e, t] = i.useState(!1),
        { legacySettingDirectory: n } = (0, d.q)(),
        { node: s } = (0, l.Z)(o.Z, "");
    return (0, a.jsxs)(r.zJl, {
        className: u.root,
        children: [
            (0, a.jsx)(r.Heading, {
                variant: "heading-lg/bold",
                children: "Settings Tree",
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
