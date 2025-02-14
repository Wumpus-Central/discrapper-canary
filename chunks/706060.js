n.d(t, { Z: () => m }), n(47120), n(653041);
var i = n(200651),
    s = n(192379),
    r = n(772848),
    l = n(481060),
    a = n(259580),
    o = n(991346),
    c = n(101896);
function d(e) {
    let { setting: t, hasChildren: n } = e;
    return (0, i.jsx)(l.Text, {
        variant: n ? 'text-md/bold' : 'text-md/normal',
        children: t
    });
}
function u(e) {
    let { setting: t, children: n, depth: o } = e,
        [m, h] = s.useState(1 === o),
        g = s.useCallback(() => {
            h(!m);
        }, [m, h]);
    if (0 === n.length)
        return (0, i.jsx)(
            'div',
            {
                style: { marginLeft: 8 * o },
                className: c.settingNode,
                children: (0, i.jsx)(d, {
                    setting: t,
                    hasChildren: !1
                })
            },
            (0, r.Z)()
        );
    let x = m
        ? (0, i.jsx)('div', {
              className: c.settingNodeChildren,
              children: n
                  .sort((e, t) => e.setting.localeCompare(t.setting))
                  .sort((e, t) => e.children.length - t.children.length)
                  .map((e) =>
                      (0, i.jsx)(
                          u,
                          {
                              setting: e.setting,
                              children: e.children,
                              depth: o + 1
                          },
                          (0, r.Z)()
                      )
                  )
          })
        : null;
    return (0, i.jsxs)(
        'div',
        {
            style: { marginLeft: 8 * o },
            className: c.settingNode,
            children: [
                (0, i.jsxs)(l.P3F, {
                    className: c.headerBar,
                    onClick: g,
                    children: [
                        (0, i.jsx)(d, {
                            setting: t,
                            hasChildren: n.length > 0
                        }),
                        (0, i.jsx)(a.Z, {
                            direction: m ? a.Z.Directions.DOWN : a.Z.Directions.RIGHT,
                            className: c.headerCaret
                        })
                    ]
                }),
                x
            ]
        },
        (0, r.Z)()
    );
}
function m() {
    let e = (0, o.Pt)(),
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
                    parent: null !== (n = e[t].parent) && void 0 !== n ? n : null
                };
            });
    n.filter((e) => null === e.parent).forEach((e) => {
        t.push({
            setting: e.setting,
            children: []
        });
    });
    let s = [...t];
    for (; s.length > 0; ) {
        let e = s.shift();
        if (null == e) continue;
        let t = n
            .filter((t) => t.parent === e.setting)
            .map((e) => ({
                setting: e.setting,
                children: []
            }));
        (e.children = t), s.push(...t);
    }
    return (0, i.jsxs)('div', {
        className: c.root,
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'heading-lg/bold',
                children: 'Settings Tree'
            }),
            (0, i.jsx)('div', {
                className: c.tree,
                children: t
                    .sort((e, t) => e.setting.localeCompare(t.setting))
                    .map((e) =>
                        (0, i.jsx)(
                            u,
                            {
                                setting: e.setting,
                                children: e.children,
                                depth: 1
                            },
                            (0, r.Z)()
                        )
                    )
            })
        ]
    });
}
