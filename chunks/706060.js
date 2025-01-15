n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    s = n(772848),
    a = n(481060),
    l = n(259580),
    o = n(991346),
    c = n(306280);
function d(e) {
    let { setting: t, hasChildren: n } = e;
    return (0, i.jsx)(a.Text, {
        variant: n ? 'text-md/bold' : 'text-md/normal',
        children: t
    });
}
function u(e) {
    let { setting: t, children: n, depth: o } = e,
        [m, g] = r.useState(1 === o),
        h = r.useCallback(() => {
            g(!m);
        }, [m, g]);
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
            (0, s.Z)()
        );
    let p = m
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
                          (0, s.Z)()
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
                (0, i.jsxs)(a.Clickable, {
                    className: c.headerBar,
                    onClick: h,
                    children: [
                        (0, i.jsx)(d, {
                            setting: t,
                            hasChildren: n.length > 0
                        }),
                        (0, i.jsx)(l.Z, {
                            direction: m ? l.Z.Directions.DOWN : l.Z.Directions.RIGHT,
                            className: c.headerCaret
                        })
                    ]
                }),
                p
            ]
        },
        (0, s.Z)()
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
    let r = [...t];
    for (; r.length > 0; ) {
        let e = r.shift();
        if (null == e) continue;
        let t = n
            .filter((t) => t.parent === e.setting)
            .map((e) => ({
                setting: e.setting,
                children: []
            }));
        (e.children = t), r.push(...t);
    }
    return (0, i.jsxs)('div', {
        className: c.root,
        children: [
            (0, i.jsx)(a.Heading, {
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
                            (0, s.Z)()
                        )
                    )
            })
        ]
    });
}
