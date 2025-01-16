i.d(t, {
    Z: function () {
        return I;
    }
}),
    i(411104);
var n = i(200651),
    a = i(192379),
    r = i(120356),
    o = i.n(r),
    l = i(535655),
    c = i(973693),
    s = i(873199),
    d = i(442837),
    u = i(857192),
    _ = i(674588),
    p = i(368862),
    h = i(927356),
    m = i(125909),
    f = i(185156),
    g = i(87528),
    x = i(57348),
    C = i(288321);
let b = c.Y.APPLICATION_DIRECTORY;
function I() {
    let e = (0, d.e7)([u.default], () => u.default.onlyShowPreviewAppCollections) ? l.E.PREVIEW : l.E.ACTIVE,
        t = (0, d.e7)([p.Z], () =>
            p.Z.getFetchState({
                surface: b,
                activeState: e
            })
        ),
        i = (0, d.e7)([p.Z], () =>
            p.Z.getCollections({
                surface: b,
                activeState: e
            })
        );
    return (a.useEffect(() => {
        _.XK({
            surface: b,
            activeState: e
        });
    }, [e]),
    t === p.M.ERROR)
        ? (0, n.jsx)(h.Z, {})
        : (0, n.jsx)(m.Z, {
              loading: t === p.M.FETCHING,
              children:
                  null == i
                      ? void 0
                      : i.map((e, t) => {
                            let a;
                            let r = t > 0 && i[t - 1].type !== s.o.GALLERY;
                            switch (e.type) {
                                case s.o.LIST:
                                    a = (0, n.jsx)(g.Z, { collection: e });
                                    break;
                                case s.o.LIST_WITH_IMAGE:
                                    a = (0, n.jsx)(x.Z, { collection: e });
                                    break;
                                case s.o.GALLERY:
                                    a = (0, n.jsx)(f.Z, { collection: e });
                                    break;
                                default:
                                    return null;
                            }
                            return (0, n.jsx)(
                                'div',
                                {
                                    className: o()({ [C.topMargin]: r }),
                                    children: a
                                },
                                e.id
                            );
                        })
          });
}
