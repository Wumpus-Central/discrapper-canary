t(47120);
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(873199),
    s = t(442837),
    c = t(481060),
    d = t(434650),
    u = t(674588),
    m = t(368862),
    p = t(125909),
    _ = t(857192),
    g = t(881294),
    f = t(797908),
    v = t(292191),
    C = t(981631),
    x = t(318708);
function h(e) {
    let { collection: n, index: t, onSelectApplication: r } = e,
        o = (function (e) {
            let { collectionId: n, index: t } = e,
                [a, r] = i.useState(!1),
                l = (0, d.O)((e) => {
                    e && r(!0);
                });
            return (
                i.useEffect(() => {
                    a &&
                        (0, g.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
                            collection_id: n,
                            collection_position: t
                        });
                }, [a, n, t]),
                l
            );
        })({
            collectionId: n.id,
            index: t
        }),
        s = i.useCallback(
            (e, a) => {
                (0, g.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: n.id,
                    item_position: a,
                    collection_position: t,
                    application_id: e
                }),
                    r(e);
            },
            [n.id, t, r]
        );
    return (0, a.jsxs)('div', {
        ref: o,
        children: [
            (0, a.jsx)(c.Heading, {
                className: l()(x.sectionTitle, { [x.titleExtraPadding]: 0 === t }),
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: n.title
            }),
            (0, a.jsx)('div', {
                className: x.content,
                children: n.application_directory_collection_items.map((e, n) => {
                    let { id: t, application: i } = e;
                    return null == i
                        ? null
                        : (0, a.jsx)(
                              f.Z,
                              {
                                  application: i,
                                  onSelectApplication: () => s(i.id, n),
                                  showCategory: !0
                              },
                              t
                          );
                })
            })
        ]
    });
}
n.Z = function (e) {
    let { onSelectApplication: n } = e,
        t = (0, s.e7)([_.default], () => _.default.appDirectoryIncludesInactiveCollections),
        r = (0, s.e7)([m.Z], () => m.Z.getFetchState({ includesInactive: t })),
        l = (0, s.e7)([m.Z], () => m.Z.getCollections({ includesInactive: t }));
    i.useEffect(() => {
        u.bG({ includesInactive: t });
    }, [t]);
    let c = i.useMemo(() => (null == l ? void 0 : l.filter((e) => e.type !== o.o.GALLERY)), [l]);
    return r === m.M.ERROR
        ? (0, a.jsx)('div', {
              className: x.errorContainer,
              children: (0, a.jsx)(v.Z, { className: x.error })
          })
        : (0, a.jsx)(p.Z, {
              loading: r === m.M.FETCHING,
              children:
                  null == c
                      ? void 0
                      : c.map((e, t) =>
                            (0, a.jsx)(
                                h,
                                {
                                    collection: e,
                                    index: t,
                                    onSelectApplication: n
                                },
                                t
                            )
                        )
          });
};
