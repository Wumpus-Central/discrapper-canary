t(47120);
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(535655),
    s = t(973693),
    c = t(912370),
    d = t(873199),
    u = t(442837),
    m = t(481060),
    p = t(434650),
    _ = t(674588),
    g = t(368862),
    f = t(125909),
    v = t(857192),
    C = t(881294),
    x = t(797908),
    h = t(292191),
    b = t(981631),
    I = t(604501);
let j = s.Y.APPLICATION_DIRECTORY;
function S(e) {
    let { collection: n, index: t, onSelectApplication: r } = e,
        o = (function (e) {
            let { collectionId: n, index: t } = e,
                [a, r] = i.useState(!1),
                l = (0, p.O)((e) => {
                    e && r(!0);
                });
            return (
                i.useEffect(() => {
                    a &&
                        (0, C.zZ)(b.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
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
                (0, C.zZ)(b.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
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
            (0, a.jsx)(m.Heading, {
                className: l()(I.sectionTitle, { [I.titleExtraPadding]: 0 === t }),
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: n.title
            }),
            (0, a.jsx)('div', {
                className: I.content,
                children: n.application_directory_collection_items.map((e, n) =>
                    e.type !== c.C.APPLICATION || null == e.application
                        ? null
                        : (0, a.jsx)(
                              x.Z,
                              {
                                  application: e.application,
                                  onSelectApplication: () => s(e.application.id, n),
                                  showCategory: !0
                              },
                              e.id
                          )
                )
            })
        ]
    });
}
n.Z = function (e) {
    let { onSelectApplication: n } = e,
        t = (0, u.e7)([v.default], () => v.default.onlyShowPreviewAppCollections) ? o.E.PREVIEW : o.E.ACTIVE,
        r = (0, u.e7)([g.Z], () =>
            g.Z.getFetchState({
                surface: j,
                activeState: t
            })
        ),
        l = (0, u.e7)([g.Z], () =>
            g.Z.getCollections({
                surface: j,
                activeState: t
            })
        );
    i.useEffect(() => {
        _.XK({
            surface: j,
            activeState: t
        });
    }, [t]);
    let s = i.useMemo(() => (null == l ? void 0 : l.filter((e) => e.type !== d.o.GALLERY)), [l]);
    return r === g.M.ERROR
        ? (0, a.jsx)('div', {
              className: I.errorContainer,
              children: (0, a.jsx)(h.Z, { className: I.error })
          })
        : (0, a.jsx)(f.Z, {
              loading: r === g.M.FETCHING,
              children:
                  null == s
                      ? void 0
                      : s.map((e, t) =>
                            (0, a.jsx)(
                                S,
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
