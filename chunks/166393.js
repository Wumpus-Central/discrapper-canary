n.d(t, {
    A: () => S,
}),
    n(896048);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(172218),
    c = n(724002),
    o = n(287174),
    d = n(487899),
    u = n(239314),
    p = n(311907),
    h = n(397927),
    m = n(111162),
    b = n(354138),
    f = n(111042),
    g = n(412461),
    x = n(867333),
    v = n(487953),
    j = n(111737),
    A = n(652215),
    _ = n(789113);
let y = o.K.APPLICATION_DIRECTORY;

function O(e) {
    let { collection: t, index: n, onSelectApplication: r } = e,
        c = (function (e) {
            let { collectionId: t, index: n } = e,
                [l, r] = a.useState(!1),
                i = (0, s.K)((e) => {
                    e && r(!0);
                });
            return (
                a.useEffect(() => {
                    l &&
                        (0, g.TR)(A.HAw.APP_DIRECTORY_COLLECTION_VIEWED, {
                            collection_id: t,
                            collection_position: n,
                        });
                }, [l, t, n]),
                i
            );
        })({
            collectionId: t.id,
            index: n,
        }),
        o = a.useCallback(
            (e, l) => {
                (0, g.TR)(A.HAw.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: l,
                    collection_position: n,
                    application_id: e,
                }),
                    r(e);
            },
            [t.id, n, r],
        );
    return (0, l.jsxs)("div", {
        ref: c,
        children: [
            (0, l.jsx)(h.Heading, {
                className: i()(_.Gf, {
                    [_.SH]: 0 === n,
                }),
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: t.title,
            }),
            (0, l.jsx)("div", {
                className: _.Qs,
                children: t.application_directory_collection_items.map((e, t) =>
                    e.type !== d.L.APPLICATION || null == e.application
                        ? null
                        : (0, l.jsx)(
                              v.A,
                              {
                                  application: e.application,
                                  onSelectApplication: () => o(e.application.id, t),
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
        n = (0, p.bG)([m.default], () => m.default.onlyShowPreviewAppCollections) ? c.W.PREVIEW : c.W.ACTIVE,
        r = (0, p.bG)([f.A], () =>
            f.A.getFetchState({
                surface: y,
                activeState: n,
            }),
        ),
        i = (0, p.bG)([f.A], () =>
            f.A.getCollections({
                surface: y,
                activeState: n,
            }),
        );
    a.useEffect(() => {
        b.An({
            surface: y,
            activeState: n,
        });
    }, [n]);
    let s = a.useMemo(() => (null == i ? void 0 : i.filter((e) => e.type !== u.Y.GALLERY)), [i]);
    return r === f.e.ERROR
        ? (0, l.jsx)("div", {
              className: _.Un,
              children: (0, l.jsx)(j.A, {
                  className: _.z3,
              }),
          })
        : (0, l.jsx)(x.A, {
              loading: r === f.e.FETCHING,
              children:
                  null == s
                      ? void 0
                      : s.map((e, n) =>
                            (0, l.jsx)(
                                O,
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
