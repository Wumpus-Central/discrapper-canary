l.d(t, { default: () => b }), l(47120);
var a = l(200651),
    n = l(192379),
    i = l(658722),
    s = l.n(i),
    r = l(392711),
    o = l.n(r),
    c = l(990547),
    d = l(442837),
    u = l(952265),
    m = l(481060),
    p = l(100527),
    x = l(906732),
    v = l(213609),
    h = l(709054),
    g = l(435064),
    C = l(39604),
    f = l(680056),
    j = l(10217),
    N = l(410426),
    k = l(207346),
    E = l(356659),
    Z = l(740803);
function b(e) {
    let { channelId: t, onClose: i, transitionState: r } = e,
        [b, L] = n.useState(''),
        [y, I] = n.useState('descending'),
        [T, M] = n.useState(!0),
        [S, D] = n.useState(null),
        P = n.useDeferredValue(b),
        _ = (0, d.e7)([g.Z], () => g.Z.getClips()),
        z = (0, d.e7)([g.Z], () => g.Z.getPendingClips()),
        w = (0, d.e7)([g.Z], () => g.Z.getSettings().storageLocation),
        R = (0, d.Wu)([g.Z], () => g.Z.getNewClipIds()),
        { analyticsLocations: A } = (0, x.ZP)(p.Z.CLIPS_GALLERY),
        H = n.useMemo(() => [...z, ..._], [_, z]);
    (0, v.Z)(
        {
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: H.length }
        },
        { disableTrack: T },
        [H.length, T]
    ),
        n.useEffect(
            () => (
                (0, C.eL)(),
                () => {
                    (0, C.eL)(), (0, C.zq)();
                }
            ),
            []
        );
    let V = n.useMemo(
        () =>
            o()(H)
                .filter((e) => {
                    if ('' === P.trim()) return !0;
                    let t = P.toLowerCase();
                    return (null != e.name && '' !== e.name && s()(t, e.name.toLowerCase())) || s()(t, e.applicationName.toLowerCase());
                })
                .sort((e, t) => ('ascending' === y ? h.default.compare(e.id, t.id) : 'descending' === y ? h.default.compare(t.id, e.id) : 0))
                .chunk(3)
                .value(),
        [H, P, y]
    );
    n.useEffect(() => {
        !(async function () {
            M(!0);
            try {
                await C.jv(w);
            } finally {
                M(!1);
            }
        })();
    }, [w]);
    let B = n.useCallback(
            (e) => {
                (0, m.ZDy)(
                    async () => {
                        let { default: n } = await l.e('61526').then(l.bind(l, 22989));
                        return (l) =>
                            (0, a.jsx)(n, {
                                ...l,
                                channelId: t,
                                clip: e
                            });
                    },
                    { modalKey: E.Ut }
                );
            },
            [t]
        ),
        { onShareClick: F } = (0, f.Z)({
            channelId: t,
            setExporting: D
        }),
        Y = n.useCallback((e, t) => {
            (0, m.ZDy)(async () => {
                let { default: n } = await l.e('15915').then(l.bind(l, 799677));
                return (l) =>
                    (0, a.jsx)(n, {
                        clip: e,
                        ...l,
                        onBeforeDelete: t,
                        onAfterDelete: () => l.onClose()
                    });
            });
        }, []),
        O = n.useCallback(
            (e) => {
                let { row: t } = e,
                    l = V[t];
                return (0, a.jsx)(
                    'div',
                    {
                        className: Z.clipsRow,
                        children: l.map((e) => {
                            let t = 0 === e.length;
                            return (0, a.jsx)(
                                j.Z,
                                {
                                    actionsDisabled: null != S || t,
                                    exporting: S === e.id,
                                    isNew: R.includes(e.id),
                                    onDelete: Y,
                                    onEdit: B,
                                    onShare: (e) =>
                                        F({
                                            clip: e,
                                            onShareComplete: () => u.Mr(E.Qr)
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
            [V, R, S, F, Y, B]
        ),
        G =
            T || 0 !== V.length
                ? T
                    ? (0, a.jsx)('div', {
                          className: Z.spinnerContainer,
                          children: (0, a.jsx)(m.$jN, {})
                      })
                    : (0, a.jsx)(m.aVo, {
                          className: Z.clipGrid,
                          sections: [V.length],
                          sectionHeight: 0,
                          rowHeight: 328.25,
                          renderRow: O
                      })
                : (0, a.jsx)(N.Z, {
                      isEmptyBecauseQuery: H.length > 0,
                      closePopout: i
                  });
    return (0, a.jsx)(m.Y0X, {
        size: m.CgR.DYNAMIC,
        transitionState: r,
        className: Z.root,
        children: (0, a.jsxs)(x.Gt, {
            value: A,
            children: [
                (0, a.jsx)(k.Z, {
                    onClose: i,
                    filterQuery: b,
                    setFilterQuery: L,
                    sortOrder: y,
                    setSortOrder: I
                }),
                G
            ]
        })
    });
}
