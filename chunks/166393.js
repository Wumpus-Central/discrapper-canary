a.d(t, { A: () => E });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(172218),
    o = a(724002),
    c = a(287174),
    d = a(487899),
    u = a(239314),
    h = a(311907),
    m = a(534514),
    p = a(111162),
    _ = a(354138),
    g = a(111042),
    x = a(412461),
    A = a(867333),
    f = a(487953),
    C = a(111737),
    v = a(652215),
    b = a(242552);
let j = c.K.APPLICATION_DIRECTORY;
function I(e) {
    let { collection: t, index: a, onSelectApplication: i } = e,
        o = (function (e) {
            let { collectionId: t, index: a } = e,
                [n, i] = l.useState(!1),
                s = (0, r.K)((e) => {
                    e && i(!0);
                });
            return (
                l.useEffect(() => {
                    n && (0, x.TR)(v.HAw.APP_DIRECTORY_COLLECTION_VIEWED, { collection_id: t, collection_position: a });
                }, [n, t, a]),
                s
            );
        })({ collectionId: t.id, index: a }),
        c = l.useCallback(
            (e, n) => {
                (0, x.TR)(v.HAw.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: n,
                    collection_position: a,
                    application_id: e,
                }),
                    i(e);
            },
            [t.id, a, i],
        );
    return (0, n.jsxs)("div", {
        ref: o,
        children: [
            (0, n.jsx)(m.D, {
                className: s()(b.Gf, { [b.SH]: 0 === a }),
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: t.title,
            }),
            (0, n.jsx)("div", {
                className: b.Qs,
                children: t.application_directory_collection_items.map((e, t) =>
                    e.type !== d.L.APPLICATION || null == e.application
                        ? null
                        : (0, n.jsx)(
                              f.A,
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
let E = function (e) {
    let { onSelectApplication: t } = e,
        a = (0, h.bG)([p.default], () => p.default.onlyShowPreviewAppCollections) ? o.W.PREVIEW : o.W.ACTIVE,
        i = (0, h.bG)([g.A], () => g.A.getFetchState({ surface: j, activeState: a })),
        s = (0, h.bG)([g.A], () => g.A.getCollections({ surface: j, activeState: a }));
    l.useEffect(() => {
        _.An({ surface: j, activeState: a });
    }, [a]);
    let r = l.useMemo(() => s?.filter((e) => e.type !== u.Y.GALLERY), [s]);
    return i === g.e.ERROR
        ? (0, n.jsx)("div", { className: b.Un, children: (0, n.jsx)(C.A, { className: b.z3 }) })
        : (0, n.jsx)(A.A, {
              loading: i === g.e.FETCHING,
              children: r?.map((e, a) => (0, n.jsx)(I, { collection: e, index: a, onSelectApplication: t }, a)),
          });
};
