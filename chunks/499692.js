n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(535655),
    o = n(973693),
    c = n(912370),
    d = n(873199),
    u = n(442837),
    m = n(481060),
    h = n(434650),
    p = n(674588),
    g = n(368862),
    _ = n(125909),
    x = n(857192),
    C = n(881294),
    v = n(797908),
    f = n(292191),
    I = n(981631),
    b = n(318708);
let j = o.Y.APPLICATION_DIRECTORY;
function S(e) {
    let { collection: t, index: n, onSelectApplication: r } = e,
        s = (function (e) {
            let { collectionId: t, index: n } = e,
                [i, r] = a.useState(!1),
                l = (0, h.O)((e) => {
                    e && r(!0);
                });
            return (
                a.useEffect(() => {
                    i &&
                        (0, C.zZ)(I.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
                            collection_id: t,
                            collection_position: n
                        });
                }, [i, t, n]),
                l
            );
        })({
            collectionId: t.id,
            index: n
        }),
        o = a.useCallback(
            (e, i) => {
                (0, C.zZ)(I.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: i,
                    collection_position: n,
                    application_id: e
                }),
                    r(e);
            },
            [t.id, n, r]
        );
    return (0, i.jsxs)('div', {
        ref: s,
        children: [
            (0, i.jsx)(m.X6q, {
                className: l()(b.sectionTitle, { [b.titleExtraPadding]: 0 === n }),
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: t.title
            }),
            (0, i.jsx)('div', {
                className: b.content,
                children: t.application_directory_collection_items.map((e, t) =>
                    e.type !== c.C.APPLICATION || null == e.application
                        ? null
                        : (0, i.jsx)(
                              v.Z,
                              {
                                  application: e.application,
                                  onSelectApplication: () => o(e.application.id, t),
                                  showCategory: !0
                              },
                              e.id
                          )
                )
            })
        ]
    });
}
let N = function (e) {
    let { onSelectApplication: t } = e,
        n = (0, u.e7)([x.default], () => x.default.onlyShowPreviewAppCollections) ? s.E.PREVIEW : s.E.ACTIVE,
        r = (0, u.e7)([g.Z], () =>
            g.Z.getFetchState({
                surface: j,
                activeState: n
            })
        ),
        l = (0, u.e7)([g.Z], () =>
            g.Z.getCollections({
                surface: j,
                activeState: n
            })
        );
    a.useEffect(() => {
        p.XK({
            surface: j,
            activeState: n
        });
    }, [n]);
    let o = a.useMemo(() => (null == l ? void 0 : l.filter((e) => e.type !== d.o.GALLERY)), [l]);
    return r === g.M.ERROR
        ? (0, i.jsx)('div', {
              className: b.errorContainer,
              children: (0, i.jsx)(f.Z, { className: b.error })
          })
        : (0, i.jsx)(_.Z, {
              loading: r === g.M.FETCHING,
              children:
                  null == o
                      ? void 0
                      : o.map((e, n) =>
                            (0, i.jsx)(
                                S,
                                {
                                    collection: e,
                                    index: n,
                                    onSelectApplication: t
                                },
                                n
                            )
                        )
          });
};
