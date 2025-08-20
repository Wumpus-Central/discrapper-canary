n.d(t, { Z: () => f }), n(388685), n(642613), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(772848),
    o = n(481060),
    s = n(259580),
    l = n(991346),
    c = n(321523);
function u(e) {
    let { setting: t, hasChildren: n } = e;
    return (0, r.jsx)(o.Text, {
        variant: n ? "text-md/bold" : "text-md/normal",
        children: t,
    });
}
function d(e) {
    let { setting: t, children: n, depth: l } = e,
        [f, _] = i.useState(1 === l),
        p = i.useCallback(() => {
            _(!f);
        }, [f, _]);
    if (0 === n.length)
        return (0, r.jsx)(
            "div",
            {
                style: { marginLeft: 8 * l },
                className: c.settingNode,
                children: (0, r.jsx)(u, {
                    setting: t,
                    hasChildren: !1,
                }),
            },
            (0, a.Z)(),
        );
    let h = f
        ? (0, r.jsx)("div", {
              className: c.settingNodeChildren,
              children: n
                  .sort((e, t) => e.setting.localeCompare(t.setting))
                  .sort((e, t) => e.children.length - t.children.length)
                  .map((e) =>
                      (0, r.jsx)(
                          d,
                          {
                              setting: e.setting,
                              children: e.children,
                              depth: l + 1,
                          },
                          (0, a.Z)(),
                      ),
                  ),
          })
        : null;
    return (0, r.jsxs)(
        "div",
        {
            style: { marginLeft: 8 * l },
            className: c.settingNode,
            children: [
                (0, r.jsxs)(o.P3F, {
                    className: c.headerBar,
                    onClick: p,
                    children: [
                        (0, r.jsx)(u, {
                            setting: t,
                            hasChildren: n.length > 0,
                        }),
                        (0, r.jsx)(s.Z, {
                            direction: f ? s.Z.Directions.DOWN : s.Z.Directions.RIGHT,
                            className: c.headerCaret,
                        }),
                    ],
                }),
                h,
            ],
        },
        (0, a.Z)(),
    );
}
function f() {
    let e = (0, l.Pt)(),
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
    let i = [...t];
    for (; i.length > 0; ) {
        let e = i.shift();
        if (null == e) continue;
        let t = n
            .filter((t) => t.parent === e.setting)
            .map((e) => ({
                setting: e.setting,
                children: [],
            }));
        (e.children = t), i.push(...t);
    }
    return (0, r.jsxs)("div", {
        className: c.root,
        children: [
            (0, r.jsx)(o.X6q, {
                variant: "heading-lg/bold",
                children: "Settings Tree",
            }),
            (0, r.jsx)("div", {
                className: c.tree,
                children: t
                    .sort((e, t) => e.setting.localeCompare(t.setting))
                    .map((e) =>
                        (0, r.jsx)(
                            d,
                            {
                                setting: e.setting,
                                children: e.children,
                                depth: 1,
                            },
                            (0, a.Z)(),
                        ),
                    ),
            }),
        ],
    });
}
