n.d(t, {
    A: () => b,
}),
    n(638769),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(669550),
    s = n(963935),
    o = n(921854),
    c = n(522958),
    d = n(983078),
    u = n(159452);

function m(e) {
    if (
        (e.type === s.Z6.PANEL && null != e.StronglyDiscouragedCustomComponent) ||
        ((0, s.nW)(e) &&
            e.type === s.Z6.SIDEBAR_ITEM &&
            e.layout.some((e) => (null == e ? void 0 : e.StronglyDiscouragedCustomComponent) != null))
    )
        return !0;
    if ((0, s.nW)(e) && 0 === e.layout.length) {
        var t, n, a;
        if (
            null !=
            (null == (a = e.parent) || null == (n = a.parent) || null == (t = n.getLegacySearchKey)
                ? void 0
                : t.call(n))
        )
            return !0;
    }
    return !1;
}

function p(e) {
    return !!m(e) || (!!(0, s.nW)(e) && e.layout.some((e) => p(e)));
}

function h(e) {
    var t;
    let { setting: n, depth: i, highlightMode: r } = e,
        s = null == (t = l.useContext(x)) ? void 0 : t.get(n),
        o = null;
    return (
        null != s &&
            s.length > 0 &&
            (o = s
                .sort((e, t) => e.localeCompare(t))
                .map((e) =>
                    (0, a.jsx)(
                        h,
                        {
                            setting: e,
                            depth: i + 1,
                            highlightMode: r,
                        },
                        e,
                    ),
                )),
        (0, a.jsx)(c.n, {
            title: n,
            initExpanded: i <= 2,
            highlightMode: r,
            children: o,
        })
    );
}

function f(e) {
    let { setting: t, depth: n, inheritedHighlightMode: l } = e,
        i = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case s.Z6.ROOT:
                    return p(e) ? "root" : "migrated-root";
                case s.Z6.SECTION:
                    return p(e) ? "none" : "migrated";
                case s.Z6.PANEL:
                case s.Z6.SIDEBAR_ITEM:
                    return m(e) ? "legacy" : "migrated";
                default:
                    return null != t ? t : "migrated";
            }
        })(t, l),
        r = "migrated" === i ? "migrated" : void 0,
        o = null;
    if ((0, s.nW)(t)) {
        var d, u, x;
        let e =
            null == (x = t.parent) || null == (u = x.parent) || null == (d = u.getLegacySearchKey) ? void 0 : d.call(u);
        0 === t.layout.length && null != e
            ? (o = (0, a.jsx)(h, {
                  setting: e,
                  depth: n + 1,
                  highlightMode: null != r ? r : "legacy",
              }))
            : t.layout.length > 0 &&
              (o = t.layout.map((e) =>
                  (0, a.jsx)(
                      f,
                      {
                          setting: e,
                          depth: n + 1,
                          inheritedHighlightMode: r,
                      },
                      e.key,
                  ),
              ));
    }
    return (0, a.jsx)(c.n, {
        title: t.key,
        initExpanded: n <= 2,
        highlightMode: i,
        children: o,
    });
}
let x = l.createContext(null);

function b() {
    let [e, t] = l.useState(!1),
        { legacySettingDirectory: n } = (0, d.B)(),
        { node: s } = (0, r.Ay)(o.D, ""),
        c = (0, r.KA)();
    return (0, a.jsxs)(i.nVY, {
        label: "Settings Tree",
        children: [
            (0, a.jsx)(i.dOG, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: c,
                onChange: r.jL,
            }),
            (0, a.jsx)(i.dOG, {
                checked: e,
                onChange: (e) => t(e),
                label: "Show Legacy Settings Tree",
            }),
            (0, a.jsx)(x.Provider, {
                value: n,
                children: (0, a.jsxs)("div", {
                    className: u.B2,
                    children: [
                        e &&
                            (0, a.jsx)(
                                h,
                                {
                                    setting: "root",
                                    depth: 1,
                                },
                                "root",
                            ),
                        !e &&
                            (0, a.jsx)(
                                f,
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
