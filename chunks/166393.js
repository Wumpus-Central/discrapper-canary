a.d(t, { A: () => E });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(172218),
    o = a(724002),
    c = a(287174),
    d = a(487899),
    u = a(239314),
    h = a(311907),
    m = a(397927),
    p = a(111162),
    _ = a(354138),
    g = a(111042),
    x = a(412461),
    A = a(867333),
    C = a(487953),
    b = a(111737),
    v = a(652215),
    f = a(789113);
let j = c.K.APPLICATION_DIRECTORY;
function I(e) {
    let { collection: t, index: a, onSelectApplication: s } = e,
        o = (function (e) {
            let { collectionId: t, index: a } = e,
                [n, s] = i.useState(!1),
                l = (0, r.K)((e) => {
                    e && s(!0);
                });
            return (
                i.useEffect(() => {
                    n && (0, x.TR)(v.HAw.APP_DIRECTORY_COLLECTION_VIEWED, { collection_id: t, collection_position: a });
                }, [n, t, a]),
                l
            );
        })({ collectionId: t.id, index: a }),
        c = i.useCallback(
            (e, n) => {
                (0, x.TR)(v.HAw.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: n,
                    collection_position: a,
                    application_id: e,
                }),
                    s(e);
            },
            [t.id, a, s],
        );
    return (0, n.jsxs)("div", {
        ref: o,
        children: [
            (0, n.jsx)(m.Heading, {
                className: l()(f.Gf, { [f.SH]: 0 === a }),
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: t.title,
            }),
            (0, n.jsx)("div", {
                className: f.Qs,
                children: t.application_directory_collection_items.map((e, t) =>
                    e.type !== d.L.APPLICATION || null == e.application
                        ? null
                        : (0, n.jsx)(
                              C.A,
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
        s = (0, h.bG)([g.A], () => g.A.getFetchState({ surface: j, activeState: a })),
        l = (0, h.bG)([g.A], () => g.A.getCollections({ surface: j, activeState: a }));
    i.useEffect(() => {
        _.An({ surface: j, activeState: a });
    }, [a]);
    let r = i.useMemo(() => l?.filter((e) => e.type !== u.Y.GALLERY), [l]);
    return s === g.e.ERROR
        ? (0, n.jsx)("div", { className: f.Un, children: (0, n.jsx)(b.A, { className: f.z3 }) })
        : (0, n.jsx)(A.A, {
              loading: s === g.e.FETCHING,
              children: r?.map((e, a) => (0, n.jsx)(I, { collection: e, index: a, onSelectApplication: t }, a)),
          });
};
