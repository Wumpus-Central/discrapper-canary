n.d(t, { Z: () => S }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(907331),
    o = n(535655),
    c = n(973693),
    d = n(912370),
    u = n(873199),
    p = n(442837),
    m = n(481060),
    h = n(857192),
    f = n(471518),
    b = n(425986),
    g = n(881294),
    x = n(523311),
    v = n(797908),
    C = n(292191),
    j = n(981631),
    _ = n(551222);
let y = c.Y.APPLICATION_DIRECTORY;
function I(e) {
    let { collection: t, index: n, onSelectApplication: i } = e,
        o = (function (e) {
            let { collectionId: t, index: n } = e,
                [a, i] = r.useState(!1),
                l = (0, s.O)((e) => {
                    e && i(!0);
                });
            return (
                r.useEffect(() => {
                    a &&
                        (0, g.zZ)(j.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
                            collection_id: t,
                            collection_position: n,
                        });
                }, [a, t, n]),
                l
            );
        })({
            collectionId: t.id,
            index: n,
        }),
        c = r.useCallback(
            (e, a) => {
                (0, g.zZ)(j.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: a,
                    collection_position: n,
                    application_id: e,
                }),
                    i(e);
            },
            [t.id, n, i],
        );
    return (0, a.jsxs)("div", {
        ref: o,
        children: [
            (0, a.jsx)(m.Heading, {
                className: l()(_.sectionTitle, { [_.titleExtraPadding]: 0 === n }),
                variant: "heading-lg/semibold",
                color: "header-primary",
                children: t.title,
            }),
            (0, a.jsx)("div", {
                className: _.content,
                children: t.application_directory_collection_items.map((e, t) =>
                    e.type !== d.C.APPLICATION || null == e.application
                        ? null
                        : (0, a.jsx)(
                              v.Z,
                              {
                                  application: e.application,
                                  onSelectApplication: () => c(e.application.id, t),
                                  showCategory: !0,
                              },
                              e.id,
                          ),
                ),
            }),
        ],
    });
}
let S = function (e) {
    let { onSelectApplication: t } = e,
        n = (0, p.e7)([h.default], () => h.default.onlyShowPreviewAppCollections) ? o.E.PREVIEW : o.E.ACTIVE,
        i = (0, p.e7)([b.Z], () =>
            b.Z.getFetchState({
                surface: y,
                activeState: n,
            }),
        ),
        l = (0, p.e7)([b.Z], () =>
            b.Z.getCollections({
                surface: y,
                activeState: n,
            }),
        );
    r.useEffect(() => {
        f.XK({
            surface: y,
            activeState: n,
        });
    }, [n]);
    let s = r.useMemo(() => (null == l ? void 0 : l.filter((e) => e.type !== u.o.GALLERY)), [l]);
    return i === b.M.ERROR
        ? (0, a.jsx)("div", {
              className: _.errorContainer,
              children: (0, a.jsx)(C.Z, { className: _.error }),
          })
        : (0, a.jsx)(x.Z, {
              loading: i === b.M.FETCHING,
              children:
                  null == s
                      ? void 0
                      : s.map((e, n) =>
                            (0, a.jsx)(
                                I,
                                {
                                    collection: e,
                                    index: n,
                                    onSelectApplication: t,
                                },
                                n,
                            ),
                        ),
          });
};
