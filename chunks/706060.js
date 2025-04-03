n.d(t, { Z: () => m }), n(47120), n(230036), n(653041);
var r = n(200651),
    i = n(192379),
    s = n(772848),
    a = n(481060),
    l = n(259580),
    o = n(991346),
    c = n(152049);
function d(e) {
    let { setting: t, hasChildren: n } = e;
    return (0, r.jsx)(a.Text, {
        variant: n ? 'text-md/bold' : 'text-md/normal',
        children: t
    });
}
function u(e) {
    let { setting: t, children: n, depth: o } = e,
        [m, g] = i.useState(1 === o),
        p = i.useCallback(() => {
            g(!m);
        }, [m, g]);
    if (0 === n.length)
        return (0, r.jsx)(
            'div',
            {
                style: { marginLeft: 8 * o },
                className: c.settingNode,
                children: (0, r.jsx)(d, {
                    setting: t,
                    hasChildren: !1
                })
            },
            (0, s.Z)()
        );
    let h = m
        ? (0, r.jsx)('div', {
              className: c.settingNodeChildren,
              children: n
                  .sort((e, t) => e.setting.localeCompare(t.setting))
                  .sort((e, t) => e.children.length - t.children.length)
                  .map((e) =>
                      (0, r.jsx)(
                          u,
                          {
                              setting: e.setting,
                              children: e.children,
                              depth: o + 1
                          },
                          (0, s.Z)()
                      )
                  )
          })
        : null;
    return (0, r.jsxs)(
        'div',
        {
            style: { marginLeft: 8 * o },
            className: c.settingNode,
            children: [
                (0, r.jsxs)(a.P3F, {
                    className: c.headerBar,
                    onClick: p,
                    children: [
                        (0, r.jsx)(d, {
                            setting: t,
                            hasChildren: n.length > 0
                        }),
                        (0, r.jsx)(l.Z, {
                            direction: m ? l.Z.Directions.DOWN : l.Z.Directions.RIGHT,
                            className: c.headerCaret
                        })
                    ]
                }),
                h
            ]
        },
        (0, s.Z)()
    );
}
function m() {
    let e = (0, o.Pt)(),
        t = { children: [] },
        n = Object.keys(e)
            .filter((t) => {
                let n = e[t];
                return null == n.predicate || (null != n.predicate && n.predicate());
            })
            .map((t) => {
                var n;
                return {
                    setting: t,
                    parent: null != (n = e[t].parent) ? n : null
                };
            });
    n.filter((e) => null === e.parent).forEach((e) => {
        t.children.push({
            setting: e.setting,
            children: []
        });
    });
    let i = [...t.children];
    for (; i.length > 0; ) {
        let e = i.shift();
        if (null == e) continue;
        let t = n
            .filter((t) => t.parent === e.setting)
            .map((e) => ({
                setting: e.setting,
                children: []
            }));
        (e.children = t), i.push(...t);
    }
    return (0, r.jsxs)('div', {
        className: c.root,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-lg/bold',
                children: 'Settings Tree'
            }),
            (0, r.jsx)('div', {
                className: c.tree,
                children: t.children
                    .sort((e, t) => e.setting.localeCompare(t.setting))
                    .map((e) =>
                        (0, r.jsx)(
                            u,
                            {
                                setting: e.setting,
                                children: e.children,
                                depth: 1
                            },
                            (0, s.Z)()
                        )
                    )
            })
        ]
    });
}
