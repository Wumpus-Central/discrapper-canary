i.d(t, {
    Z: function () {
        return x;
    }
}),
    i(411104);
var n = i(200651),
    r = i(192379),
    a = i(120356),
    o = i.n(a),
    l = i(873199),
    c = i(442837),
    s = i(857192),
    d = i(674588),
    u = i(368862),
    h = i(927356),
    _ = i(125909),
    p = i(185156),
    m = i(87528),
    f = i(57348),
    g = i(288321);
function x() {
    let e = (0, c.e7)([s.default], () => s.default.appDirectoryIncludesInactiveCollections),
        t = (0, c.e7)([u.Z], () => u.Z.getFetchState({ includesInactive: e })),
        i = (0, c.e7)([u.Z], () => u.Z.getCollections({ includesInactive: e }));
    return (r.useEffect(() => {
        d.bG({ includesInactive: e });
    }, [e]),
    t === u.M.ERROR)
        ? (0, n.jsx)(h.Z, {})
        : (0, n.jsx)(_.Z, {
              loading: t === u.M.FETCHING,
              children:
                  null == i
                      ? void 0
                      : i.map((e, t) => {
                            let r;
                            let a = t > 0 && i[t - 1].type !== l.o.GALLERY;
                            switch (e.type) {
                                case l.o.LIST:
                                    r = (0, n.jsx)(m.Z, { collection: e });
                                    break;
                                case l.o.LIST_WITH_IMAGE:
                                    r = (0, n.jsx)(f.Z, { collection: e });
                                    break;
                                case l.o.GALLERY:
                                    r = (0, n.jsx)(p.Z, { collection: e });
                                    break;
                                default:
                                    return null;
                            }
                            return (0, n.jsx)(
                                'div',
                                {
                                    className: o()({ [g.topMargin]: a }),
                                    children: r
                                },
                                e.id
                            );
                        })
          });
}
