n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    s = n(907331),
    o = n(535655),
    c = n(973693),
    d = n(912370),
    u = n(873199),
    p = n(442837),
    m = n(481060),
    h = n(857192),
    g = n(471518),
    f = n(425986),
    _ = n(881294),
    b = n(523311),
    x = n(797908),
    v = n(292191),
    C = n(981631),
    j = n(74021);
let y = c.Y.APPLICATION_DIRECTORY;
function I(e) {
    let { collection: t, index: n, onSelectApplication: a } = e,
        o = (function (e) {
            let { collectionId: t, index: n } = e,
                [r, a] = i.useState(!1),
                l = (0, s.O)((e) => {
                    e && a(!0);
                });
            return (
                i.useEffect(() => {
                    r &&
                        (0, _.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
                            collection_id: t,
                            collection_position: n,
                        });
                }, [r, t, n]),
                l
            );
        })({
            collectionId: t.id,
            index: n,
        }),
        c = i.useCallback(
            (e, r) => {
                (0, _.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: r,
                    collection_position: n,
                    application_id: e,
                }),
                    a(e);
            },
            [t.id, n, a],
        );
    return (0, r.jsxs)("div", {
        ref: o,
        children: [
            (0, r.jsx)(m.Heading, {
                className: l()(j.sectionTitle, { [j.titleExtraPadding]: 0 === n }),
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: t.title,
            }),
            (0, r.jsx)("div", {
                className: j.content,
                children: t.application_directory_collection_items.map((e, t) =>
                    e.type !== d.C.APPLICATION || null == e.application
                        ? null
                        : (0, r.jsx)(
                              x.Z,
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
        a = (0, p.e7)([f.Z], () =>
            f.Z.getFetchState({
                surface: y,
                activeState: n,
            }),
        ),
        l = (0, p.e7)([f.Z], () =>
            f.Z.getCollections({
                surface: y,
                activeState: n,
            }),
        );
    i.useEffect(() => {
        g.XK({
            surface: y,
            activeState: n,
        });
    }, [n]);
    let s = i.useMemo(() => (null == l ? void 0 : l.filter((e) => e.type !== u.o.GALLERY)), [l]);
    return a === f.M.ERROR
        ? (0, r.jsx)("div", {
              className: j.errorContainer,
              children: (0, r.jsx)(v.Z, { className: j.error }),
          })
        : (0, r.jsx)(b.Z, {
              loading: a === f.M.FETCHING,
              children:
                  null == s
                      ? void 0
                      : s.map((e, n) =>
                            (0, r.jsx)(
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
