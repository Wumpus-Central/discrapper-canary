n.d(t, { Z: () => x }), n(642613), n(388685);
var a = n(951288),
    i = n(647438),
    l = n(481060),
    r = n(131051),
    s = n(28682),
    o = n(920952),
    c = n(544651),
    d = n(546697),
    u = n(547481);
function m(e) {
    var t;
    let { setting: n, depth: l, highlight: r } = e,
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
                            depth: l + 1,
                            highlight: r,
                        },
                        e,
                    ),
                )),
        (0, a.jsx)(c.r, {
            title: n,
            initExpanded: l <= 2,
            highlight: r,
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
        l = null;
    if ((0, s.Lk)(t)) {
        var r, o;
        0 === t.layout.length && (null == (o = t.parent) || null == (r = o.parent) ? void 0 : r.legacySearchKey) != null
            ? (l = (0, a.jsx)(m, {
                  setting: t.parent.parent.legacySearchKey,
                  depth: n + 1,
                  highlight: !0,
              }))
            : t.layout.length > 0 &&
              (l = t.layout.map((e) =>
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
        children: l,
    });
}
let h = i.createContext(null);
function x() {
    let [e, t] = i.useState(!1),
        { legacySettingDirectory: n } = (0, d.q)(),
        { node: s } = (0, r.Z)(o.Z, "");
    return (0, a.jsxs)(l.zJl, {
        className: u.root,
        children: [
            (0, a.jsx)(l.Heading, {
                variant: "heading-lg/bold",
                children: "Settings Tree",
            }),
            (0, a.jsx)(l.rsf, {
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
