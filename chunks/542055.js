n.d(t, { default: () => w }), n(47120), n(566702), n(230036);
var r = n(200651),
    l = n(192379),
    a = n(658722),
    i = n.n(a),
    o = n(392711),
    s = n.n(o),
    c = n(990547),
    u = n(442837),
    d = n(952265),
    p = n(481060),
    m = n(100527),
    f = n(906732),
    b = n(213609),
    g = n(709054),
    j = n(435064),
    h = n(39604),
    y = n(680056),
    x = n(10217),
    v = n(410426),
    O = n(207346),
    C = n(356659),
    N = n(684668);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let { channelId: t, onClose: a, transitionState: o } = e,
        [w, E] = l.useState(''),
        [S, Z] = l.useState('descending'),
        [D, L] = l.useState(!0),
        [I, T] = l.useState(null),
        M = l.useDeferredValue(w),
        _ = (0, u.e7)([j.Z], () => j.Z.getClips()),
        z = (0, u.e7)([j.Z], () => j.Z.getPendingClips()),
        R = (0, u.e7)([j.Z], () => j.Z.getSettings().storageLocation),
        A = (0, u.Wu)([j.Z], () => j.Z.getNewClipIds()),
        { analyticsLocations: H } = (0, f.ZP)(m.Z.CLIPS_GALLERY),
        V = l.useMemo(() => [...z, ..._], [_, z]);
    (0, b.Z)(
        {
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: V.length }
        },
        { disableTrack: D },
        [V.length, D]
    ),
        l.useEffect(
            () => (
                (0, h.eL)(),
                () => {
                    (0, h.eL)(), (0, h.zq)();
                }
            ),
            []
        );
    let W = l.useMemo(
        () =>
            s()(V)
                .filter((e) => {
                    if ('' === M.trim()) return !0;
                    let t = M.toLowerCase();
                    return (null != e.name && '' !== e.name && i()(t, e.name.toLowerCase())) || i()(t, e.applicationName.toLowerCase());
                })
                .sort((e, t) => ('ascending' === S ? g.default.compare(e.id, t.id) : 'descending' === S ? g.default.compare(t.id, e.id) : 0))
                .chunk(3)
                .value(),
        [V, M, S]
    );
    l.useEffect(() => {
        !(async function () {
            L(!0);
            try {
                await h.jv(R);
            } finally {
                L(!1);
            }
        })();
    }, [R]);
    let B = l.useCallback(
            (e) => {
                (0, p.ZDy)(
                    async () => {
                        let { default: l } = await n.e('61526').then(n.bind(n, 22989));
                        return (n) =>
                            (0, r.jsx)(
                                l,
                                k(P({}, n), {
                                    channelId: t,
                                    clip: e
                                })
                            );
                    },
                    { modalKey: C.Ut }
                );
            },
            [t]
        ),
        { onShareClick: F } = (0, y.Z)({
            channelId: t,
            setExporting: T
        }),
        Y = l.useCallback((e, t) => {
            (0, p.ZDy)(async () => {
                let { default: l } = await n.e('15915').then(n.bind(n, 799677));
                return (n) =>
                    (0, r.jsx)(
                        l,
                        k(P({ clip: e }, n), {
                            onBeforeDelete: t,
                            onAfterDelete: () => n.onClose()
                        })
                    );
            });
        }, []),
        G = l.useCallback(
            (e) => {
                let { row: t } = e,
                    n = W[t];
                return (0, r.jsx)(
                    'div',
                    {
                        className: N.clipsRow,
                        children: n.map((e) => {
                            let t = 0 === e.length;
                            return (0, r.jsx)(
                                x.Z,
                                {
                                    actionsDisabled: null != I || t,
                                    exporting: I === e.id,
                                    isNew: A.includes(e.id),
                                    onDelete: Y,
                                    onEdit: B,
                                    onShare: (e) =>
                                        F({
                                            clip: e,
                                            onShareComplete: () => d.Mr(C.Qr)
                                        }),
                                    clip: e
                                },
                                e.id
                            );
                        })
                    },
                    'clips-gallery-'.concat(t)
                );
            },
            [W, A, I, F, Y, B]
        ),
        K =
            D || 0 !== W.length
                ? D
                    ? (0, r.jsx)('div', {
                          className: N.spinnerContainer,
                          children: (0, r.jsx)(p.$jN, {})
                      })
                    : (0, r.jsx)(p.aVo, {
                          className: N.clipGrid,
                          sections: [W.length],
                          sectionHeight: 0,
                          rowHeight: 328.25,
                          renderRow: G
                      })
                : (0, r.jsx)(v.Z, {
                      isEmptyBecauseQuery: V.length > 0,
                      closePopout: a
                  });
    return (0, r.jsx)(p.Y0X, {
        size: p.CgR.DYNAMIC,
        transitionState: o,
        className: N.root,
        children: (0, r.jsxs)(f.Gt, {
            value: H,
            children: [
                (0, r.jsx)(O.Z, {
                    onClose: a,
                    filterQuery: w,
                    setFilterQuery: E,
                    sortOrder: S,
                    setSortOrder: Z
                }),
                K
            ]
        })
    });
}
