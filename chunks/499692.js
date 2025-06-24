n.d(t, { Z: () => O }), n(388685);
var r = n(255367),
    a = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(535655),
    o = n(973693),
    c = n(912370),
    d = n(873199),
    u = n(442837),
    p = n(481060),
    m = n(434650),
    h = n(857192),
    g = n(471518),
    f = n(425986),
    _ = n(881294),
    b = n(523311),
    x = n(797908),
    v = n(292191),
    C = n(981631),
    j = n(537833);
let y = o.Y.APPLICATION_DIRECTORY;
function I(e) {
    let { collection: t, index: n, onSelectApplication: i } = e,
        s = (function (e) {
            let { collectionId: t, index: n } = e,
                [r, i] = a.useState(!1),
                l = (0, m.O)((e) => {
                    e && i(!0);
                });
            return (
                a.useEffect(() => {
                    r &&
                        (0, _.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
                            collection_id: t,
                            collection_position: n
                        });
                }, [r, t, n]),
                l
            );
        })({
            collectionId: t.id,
            index: n
        }),
        o = a.useCallback(
            (e, r) => {
                (0, _.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: r,
                    collection_position: n,
                    application_id: e
                }),
                    i(e);
            },
            [t.id, n, i]
        );
    return (0, r.jsxs)('div', {
        ref: s,
        children: [
            (0, r.jsx)(p.X6q, {
                className: l()(j.sectionTitle, { [j.titleExtraPadding]: 0 === n }),
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: t.title
            }),
            (0, r.jsx)('div', {
                className: j.content,
                children: t.application_directory_collection_items.map((e, t) =>
                    e.type !== c.C.APPLICATION || null == e.application
                        ? null
                        : (0, r.jsx)(
                              x.Z,
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
let O = function (e) {
    let { onSelectApplication: t } = e,
        n = (0, u.e7)([h.default], () => h.default.onlyShowPreviewAppCollections) ? s.E.PREVIEW : s.E.ACTIVE,
        i = (0, u.e7)([f.Z], () =>
            f.Z.getFetchState({
                surface: y,
                activeState: n
            })
        ),
        l = (0, u.e7)([f.Z], () =>
            f.Z.getCollections({
                surface: y,
                activeState: n
            })
        );
    a.useEffect(() => {
        g.XK({
            surface: y,
            activeState: n
        });
    }, [n]);
    let o = a.useMemo(() => (null == l ? void 0 : l.filter((e) => e.type !== d.o.GALLERY)), [l]);
    return i === f.M.ERROR
        ? (0, r.jsx)('div', {
              className: j.errorContainer,
              children: (0, r.jsx)(v.Z, { className: j.error })
          })
        : (0, r.jsx)(b.Z, {
              loading: i === f.M.FETCHING,
              children:
                  null == o
                      ? void 0
                      : o.map((e, n) =>
                            (0, r.jsx)(
                                I,
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
