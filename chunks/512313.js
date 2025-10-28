n.d(t, { Z: () => x }), n(642613), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(481060),
    i = n(131051),
    o = n(28682),
    s = n(920952),
    c = n(544651),
    d = n(546697),
    u = n(547481);
function m(e) {
    var t;
    let { setting: n, depth: l, highlight: i } = e,
        o = null == (t = r.useContext(h)) ? void 0 : t.get(n),
        s = null;
    return (
        null != o &&
            o.length > 0 &&
            (s = o
                .sort((e, t) => e.localeCompare(t))
                .map((e) =>
                    (0, a.jsx)(
                        m,
                        {
                            setting: e,
                            depth: l + 1,
                            highlight: i,
                        },
                        e,
                    ),
                )),
        (0, a.jsx)(c.r, {
            title: n,
            initExpanded: l <= 2,
            highlight: i,
            children: s,
        })
    );
}
function p(e) {
    let { setting: t, depth: n } = e,
        r =
            (0, o.Lk)(t) &&
            ((t.type === o.Jq.SIDEBAR_ITEM &&
                t.layout.some((e) => (null == e ? void 0 : e.layout.some((e) => null != e.render)))) ||
                (t.type === o.Jq.PANEL && t.layout.some((e) => null != e.render)) ||
                (t.type === o.Jq.PANE && null != t.render)),
        l = null;
    if ((0, o.Lk)(t)) {
        var i, s;
        0 === t.layout.length && (null == (s = t.parent) || null == (i = s.parent) ? void 0 : i.legacySearchKey) != null
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
        highlight: r,
        children: l,
    });
}
let h = r.createContext(null);
function x() {
    let [e, t] = r.useState(!1),
        { legacySettingDirectory: n } = (0, d.q)(),
        { node: o } = (0, i.Z)(s.Z, "");
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
                                    setting: o,
                                    depth: 1,
                                },
                                o.key,
                            ),
                    ],
                }),
            }),
        ],
    });
}
