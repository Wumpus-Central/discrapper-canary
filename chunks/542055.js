n.d(t, { default: () => N }), n(388685), n(781311), n(642613);
var l = n(951288),
    r = n(647438),
    a = n(658722),
    i = n.n(a),
    o = n(392711),
    c = n.n(o),
    s = n(990547),
    u = n(442837),
    d = n(952265),
    p = n(481060),
    m = n(100527),
    f = n(906732),
    b = n(213609),
    g = n(709054),
    h = n(435064),
    y = n(39604),
    x = n(680056),
    j = n(10217),
    v = n(410426),
    O = n(207346),
    _ = n(356659),
    C = n(862220);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let { channelId: t, onClose: a, transitionState: o } = e,
        [N, E] = r.useState(""),
        [S, I] = r.useState("descending"),
        [T, k] = r.useState(!0),
        [D, Z] = r.useState(null),
        L = r.useDeferredValue(N),
        M = (0, u.e7)([h.Z], () => h.Z.getClips()),
        R = (0, u.e7)([h.Z], () => h.Z.getPendingClips()),
        B = (0, u.e7)([h.Z], () => h.Z.getSettings().storageLocation),
        A = (0, u.Wu)([h.Z], () => h.Z.getNewClipIds()),
        { analyticsLocations: H } = (0, f.ZP)(m.Z.CLIPS_GALLERY),
        z = r.useMemo(() => [...R, ...M], [M, R]);
    (0, b.Z)(
        {
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: z.length },
        },
        { disableTrack: T },
        [z.length, T],
    ),
        r.useEffect(
            () => (
                (0, y.eL)(),
                () => {
                    (0, y.eL)(), (0, y.zq)();
                }
            ),
            [],
        );
    let V = r.useMemo(
        () =>
            c()(z)
                .filter((e) => {
                    if ("" === L.trim()) return !0;
                    let t = L.toLowerCase();
                    return (
                        (null != e.name && "" !== e.name && i()(t, e.name.toLowerCase())) ||
                        i()(t, e.applicationName.toLowerCase())
                    );
                })
                .sort((e, t) =>
                    "ascending" === S
                        ? g.default.compare(e.id, t.id)
                        : "descending" === S
                          ? g.default.compare(t.id, e.id)
                          : 0,
                )
                .chunk(3)
                .value(),
        [z, L, S],
    );
    r.useEffect(() => {
        !(async function () {
            k(!0);
            try {
                await y.jv(B);
            } finally {
                k(!1);
            }
        })();
    }, [B]);
    let F = r.useCallback(
            (e) => {
                (0, p.ZDy)(
                    async () => {
                        let { default: r } = await n.e("61526").then(n.bind(n, 22989));
                        return (n) =>
                            (0, l.jsx)(
                                r,
                                w(P({}, n), {
                                    channelId: t,
                                    clip: e,
                                }),
                            );
                    },
                    { modalKey: _.Ut },
                );
            },
            [t],
        ),
        { onShareClick: G } = (0, x.Z)({
            channelId: t,
            setExporting: Z,
        }),
        K = r.useCallback((e, t) => {
            (0, p.ZDy)(async () => {
                let { default: r } = await n.e("15915").then(n.bind(n, 799677));
                return (n) =>
                    (0, l.jsx)(
                        r,
                        w(P({ clip: e }, n), {
                            onBeforeDelete: t,
                            onAfterDelete: () => n.onClose(),
                        }),
                    );
            });
        }, []),
        Y = r.useCallback(
            (e) => {
                let { row: t } = e,
                    n = V[t];
                return (0, l.jsx)(
                    "div",
                    {
                        className: C.clipsRow,
                        children: n.map((e) => {
                            let t = 0 === e.length;
                            return (0, l.jsx)(
                                j.Z,
                                {
                                    actionsDisabled: null != D || t,
                                    exporting: D === e.id,
                                    isNew: A.includes(e.id),
                                    onDelete: K,
                                    onEdit: F,
                                    onShare: (e) =>
                                        G({
                                            clip: e,
                                            onShareComplete: () => d.Mr(_.Qr),
                                        }),
                                    clip: e,
                                },
                                e.id,
                            );
                        }),
                    },
                    "clips-gallery-".concat(t),
                );
            },
            [V, A, D, G, K, F],
        ),
        U =
            T || 0 !== V.length
                ? T
                    ? (0, l.jsx)("div", {
                          className: C.spinnerContainer,
                          children: (0, l.jsx)(p.$jN, {}),
                      })
                    : (0, l.jsx)(p.aVo, {
                          className: C.clipGrid,
                          sections: [V.length],
                          sectionHeight: 0,
                          rowHeight: 328.25,
                          renderRow: Y,
                      })
                : (0, l.jsx)(v.Z, {
                      isEmptyBecauseQuery: z.length > 0,
                      closePopout: a,
                  });
    return (0, l.jsx)(p.Y0X, {
        size: p.CgR.DYNAMIC,
        transitionState: o,
        className: C.root,
        parentComponent: "ClipsGalleryModal",
        children: (0, l.jsxs)(f.Gt, {
            value: H,
            children: [
                (0, l.jsx)(O.Z, {
                    onClose: a,
                    filterQuery: N,
                    setFilterQuery: E,
                    sortOrder: S,
                    setSortOrder: I,
                }),
                U,
            ],
        }),
    });
}
