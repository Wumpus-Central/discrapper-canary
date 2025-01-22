n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(535655),
    s = n(973693),
    c = n(912370),
    d = n(873199),
    u = n(442837),
    m = n(481060),
    p = n(434650),
    h = n(674588),
    g = n(368862),
    C = n(125909),
    x = n(857192),
    v = n(881294),
    _ = n(797908),
    f = n(292191),
    b = n(981631),
    I = n(318708);
let S = s.Y.APPLICATION_DIRECTORY;
function j(e) {
    let { collection: t, index: n, onSelectApplication: r } = e,
        o = (function (e) {
            let { collectionId: t, index: n } = e,
                [i, r] = a.useState(!1),
                l = (0, p.O)((e) => {
                    e && r(!0);
                });
            return (
                a.useEffect(() => {
                    i &&
                        (0, v.zZ)(b.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
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
        s = a.useCallback(
            (e, i) => {
                (0, v.zZ)(b.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
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
        ref: o,
        children: [
            (0, i.jsx)(m.Heading, {
                className: l()(I.sectionTitle, { [I.titleExtraPadding]: 0 === n }),
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: t.title
            }),
            (0, i.jsx)('div', {
                className: I.content,
                children: t.application_directory_collection_items.map((e, t) =>
                    e.type !== c.C.APPLICATION || null == e.application
                        ? null
                        : (0, i.jsx)(
                              _.Z,
                              {
                                  application: e.application,
                                  onSelectApplication: () => s(e.application.id, t),
                                  showCategory: !0
                              },
                              e.id
                          )
                )
            })
        ]
    });
}
t.Z = function (e) {
    let { onSelectApplication: t } = e,
        n = (0, u.e7)([x.default], () => x.default.onlyShowPreviewAppCollections) ? o.E.PREVIEW : o.E.ACTIVE,
        r = (0, u.e7)([g.Z], () =>
            g.Z.getFetchState({
                surface: S,
                activeState: n
            })
        ),
        l = (0, u.e7)([g.Z], () =>
            g.Z.getCollections({
                surface: S,
                activeState: n
            })
        );
    a.useEffect(() => {
        h.XK({
            surface: S,
            activeState: n
        });
    }, [n]);
    let s = a.useMemo(() => (null == l ? void 0 : l.filter((e) => e.type !== d.o.GALLERY)), [l]);
    return r === g.M.ERROR
        ? (0, i.jsx)('div', {
              className: I.errorContainer,
              children: (0, i.jsx)(f.Z, { className: I.error })
          })
        : (0, i.jsx)(C.Z, {
              loading: r === g.M.FETCHING,
              children:
                  null == s
                      ? void 0
                      : s.map((e, n) =>
                            (0, i.jsx)(
                                j,
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
