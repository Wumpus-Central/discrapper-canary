n.r(t),
    n.d(t, {
        default: function () {
            return I;
        }
    }),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(658722),
    o = n.n(i),
    s = n(392711),
    r = n.n(s),
    c = n(990547),
    d = n(442837),
    u = n(952265),
    m = n(481060),
    p = n(100527),
    v = n(906732),
    h = n(213609),
    x = n(709054),
    g = n(435064),
    C = n(39604),
    f = n(680056),
    j = n(10217),
    N = n(410426),
    E = n(207346),
    b = n(356659),
    L = n(436898);
function I(e) {
    let { channelId: t, onClose: i, transitionState: s } = e,
        [I, S] = a.useState(''),
        [Z, k] = a.useState('descending'),
        [T, y] = a.useState(!0),
        [M, B] = a.useState(null),
        D = a.useDeferredValue(I),
        _ = (0, d.e7)([g.Z], () => g.Z.getClips()),
        H = (0, d.e7)([g.Z], () => g.Z.getPendingClips()),
        P = (0, d.e7)([g.Z], () => g.Z.getSettings().storageLocation),
        R = (0, d.Wu)([g.Z], () => g.Z.getNewClipIds()),
        { analyticsLocations: w } = (0, v.ZP)(p.Z.CLIPS_GALLERY),
        A = a.useMemo(() => [...H, ..._], [_, H]);
    (0, h.Z)(
        {
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: A.length }
        },
        { disableTrack: T },
        [A.length, T]
    ),
        a.useEffect(
            () => (
                (0, C.eL)(),
                () => {
                    (0, C.eL)(), (0, C.zq)();
                }
            ),
            []
        );
    let V = a.useMemo(
        () =>
            r()(A)
                .filter((e) => {
                    if ('' === D.trim()) return !0;
                    let t = D.toLowerCase();
                    return (null != e.name && '' !== e.name && o()(t, e.name.toLowerCase())) || o()(t, e.applicationName.toLowerCase());
                })
                .sort((e, t) => ('ascending' === Z ? x.default.compare(e.id, t.id) : 'descending' === Z ? x.default.compare(t.id, e.id) : 0))
                .chunk(3)
                .value(),
        [A, D, Z]
    );
    a.useEffect(() => {
        (async function e() {
            y(!0);
            try {
                await C.jv(P);
            } finally {
                y(!1);
            }
        })();
    }, [P]);
    let z = a.useCallback(
            (e) => {
                (0, m.openModalLazy)(
                    async () => {
                        let { default: a } = await n.e('61526').then(n.bind(n, 22989));
                        return (n) =>
                            (0, l.jsx)(a, {
                                ...n,
                                channelId: t,
                                clip: e
                            });
                    },
                    { modalKey: b.Ut }
                );
            },
            [t]
        ),
        { onShareClick: F } = (0, f.Z)({
            channelId: t,
            setExporting: B
        }),
        O = a.useCallback((e, t) => {
            (0, m.openModalLazy)(async () => {
                let { default: a } = await n.e('15915').then(n.bind(n, 799677));
                return (n) =>
                    (0, l.jsx)(a, {
                        clip: e,
                        ...n,
                        onBeforeDelete: t,
                        onAfterDelete: () => n.onClose()
                    });
            });
        }, []),
        G = a.useCallback(
            (e) => {
                let { row: t } = e,
                    n = V[t];
                return (0, l.jsx)(
                    'div',
                    {
                        className: L.clipsRow,
                        children: n.map((e) => {
                            let t = 0 === e.length;
                            return (0, l.jsx)(
                                j.Z,
                                {
                                    actionsDisabled: null != M || t,
                                    exporting: M === e.id,
                                    isNew: R.includes(e.id),
                                    onDelete: O,
                                    onEdit: z,
                                    onShare: (e) =>
                                        F({
                                            clip: e,
                                            onShareComplete: () => u.Mr(b.Qr)
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
            [V, R, M, F, O, z]
        ),
        K =
            T || 0 !== V.length
                ? T
                    ? (0, l.jsx)('div', {
                          className: L.spinnerContainer,
                          children: (0, l.jsx)(m.Spinner, {})
                      })
                    : (0, l.jsx)(m.List, {
                          className: L.clipGrid,
                          sections: [V.length],
                          sectionHeight: 0,
                          rowHeight: 328.25,
                          renderRow: G
                      })
                : (0, l.jsx)(N.Z, {
                      isEmptyBecauseQuery: A.length > 0,
                      closePopout: i
                  });
    return (0, l.jsx)(m.ModalRoot, {
        size: m.ModalSize.DYNAMIC,
        transitionState: s,
        className: L.root,
        children: (0, l.jsxs)(v.Gt, {
            value: w,
            children: [
                (0, l.jsx)(E.Z, {
                    onClose: i,
                    filterQuery: I,
                    setFilterQuery: S,
                    sortOrder: Z,
                    setSortOrder: k
                }),
                K
            ]
        })
    });
}
