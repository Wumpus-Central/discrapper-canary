n.d(t, { Z: () => m }), n(388685), n(642613), n(539854);
var a = n(951288),
    r = n(647438),
    i = n(772848),
    l = n(481060),
    s = n(991346),
    o = n(259580),
    c = n(547481);
function d(e) {
    let { setting: t, hasChildren: n } = e;
    return (0, a.jsx)(l.Text, {
        variant: n ? "text-md/bold" : "text-md/normal",
        children: t,
    });
}
function u(e) {
    let { setting: t, children: n, depth: s } = e,
        [m, h] = r.useState(1 === s),
        p = r.useCallback(() => {
            h(!m);
        }, [m, h]);
    if (0 === n.length)
        return (0, a.jsx)(
            "div",
            {
                style: { marginLeft: 8 * s },
                className: c.settingNode,
                children: (0, a.jsx)(d, {
                    setting: t,
                    hasChildren: !1,
                }),
            },
            (0, i.Z)(),
        );
    let x = m
        ? (0, a.jsx)("div", {
              className: c.settingNodeChildren,
              children: n
                  .sort((e, t) => e.setting.localeCompare(t.setting))
                  .sort((e, t) => e.children.length - t.children.length)
                  .map((e) =>
                      (0, a.jsx)(
                          u,
                          {
                              setting: e.setting,
                              children: e.children,
                              depth: s + 1,
                          },
                          (0, i.Z)(),
                      ),
                  ),
          })
        : null;
    return (0, a.jsxs)(
        "div",
        {
            style: { marginLeft: 8 * s },
            className: c.settingNode,
            children: [
                (0, a.jsxs)(l.P3F, {
                    className: c.headerBar,
                    onClick: p,
                    children: [
                        (0, a.jsx)(d, {
                            setting: t,
                            hasChildren: n.length > 0,
                        }),
                        (0, a.jsx)(o.Z, {
                            direction: m ? o.Z.Directions.DOWN : o.Z.Directions.RIGHT,
                            className: c.headerCaret,
                        }),
                    ],
                }),
                x,
            ],
        },
        (0, i.Z)(),
    );
}
function m() {
    let e = (0, s.Pt)(),
        t = [],
        n = Object.keys(e)
            .filter((t) => {
                let n = e[t];
                return null == n.predicate || (null != n.predicate && n.predicate());
            })
            .map((t) => {
                var n;
                return {
                    setting: t,
                    parent: null != (n = e[t].parent) ? n : null,
                };
            });
    n.filter((e) => null === e.parent).forEach((e) => {
        t.push({
            setting: e.setting,
            children: [],
        });
    });
    let r = [...t];
    for (; r.length > 0; ) {
        let e = r.shift();
        if (null == e) continue;
        let t = n
            .filter((t) => t.parent === e.setting)
            .map((e) => ({
                setting: e.setting,
                children: [],
            }));
        (e.children = t), r.push(...t);
    }
    return (0, a.jsxs)(l.zJl, {
        className: c.root,
        children: [
            (0, a.jsx)(l.X6q, {
                variant: "heading-lg/bold",
                children: "Settings Tree",
            }),
            (0, a.jsx)("div", {
                className: c.tree,
                children: t
                    .sort((e, t) => e.setting.localeCompare(t.setting))
                    .map((e) =>
                        (0, a.jsx)(
                            u,
                            {
                                setting: e.setting,
                                children: e.children,
                                depth: 1,
                            },
                            (0, i.Z)(),
                        ),
                    ),
            }),
        ],
    });
}
