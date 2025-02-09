n.d(t, { Z: () => D }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(442837),
    u = n(481060),
    c = n(595519),
    d = n(317381),
    f = n(16609),
    _ = n(588468),
    p = n(30465),
    h = n(313201),
    m = n(314910),
    g = n(549006),
    E = n(430824),
    v = n(436896),
    y = n(590921),
    I = n(606992),
    T = n(51062),
    b = n(918559),
    S = n(807534);
let A = 490,
    N = 490,
    C = 245,
    R = 200,
    O = 175,
    D = r.forwardRef(function (e, t) {
        var n, a, D, L, x;
        let { channel: w, type: P, editorHeight: M, onVisibilityChange: k } = e,
            U = (0, h.Dt)(),
            G = (0, l.e7)(
                [E.Z],
                () => {
                    var e;
                    return null !== (e = E.Z.getGuild(w.guild_id)) && void 0 !== e ? e : null;
                },
                [w.guild_id]
            ),
            B = r.useRef(),
            [Z, F, V] = (0, T.Z)(
                {
                    ...e,
                    guild: G
                },
                t,
                B
            ),
            j = (null === (n = P.autocomplete) || void 0 === n ? void 0 : n.forceChatLayer) ? g.ZP : m.ZP,
            H = (0, _.DJ)(Z.selectedIndex);
        (0, p.KR)(U, Z.isVisible, H), v.Z.trackExposure({ location: '6e9811_1' });
        let { usePopoutAutocomplete: Y } = v.Z.useExperiment({ location: '6e9811_2' }, { autoTrackExposure: !1 }),
            W = (0, I.Z)({
                editorHeight: M,
                type: P,
                state: Z,
                isInPopoutExperiment: Y
            }),
            K = (0, l.e7)(
                [d.ZP],
                () => {
                    let e = d.ZP.getSelfEmbeddedActivityForChannel(w.id),
                        t = d.ZP.getActivityPanelMode();
                    return (0, c.l5)(w) && null != e && (0, f.p)(e.location) === w.id && t === b.Ez.PANEL;
                },
                [w]
            ),
            z = r.useMemo(() => ((null == W ? void 0 : W.top) == null && (null == W ? void 0 : W.left) == null && (null == W ? void 0 : W.bottom) == null && (null == W ? void 0 : W.right) == null ? '' : String(Date.now())), [null == W ? void 0 : W.top, null == W ? void 0 : W.left, null == W ? void 0 : W.bottom, null == W ? void 0 : W.right]);
        if (
            (r.useEffect(() => {
                k(Z.isVisible);
            }, [k, Z.isVisible]),
            !Z.isVisible || null == Z.query || void 0 === W)
        )
            return null;
        let q =
            null !==
                (a = Z.query.typeInfo.renderResults({
                    results: Z.query.results,
                    selectedIndex: Z.selectedIndex,
                    channel: w,
                    guild: G,
                    query: Z.query.queryText,
                    options: Z.query.options,
                    onHover: (e) => F.onResultHover(e),
                    onClick: (e) => F.onResultClick(e)
                })) && void 0 !== a
                ? a
                : null;
        if (null == q) return null;
        let Q = {
                [S.autocompleteAttached]: null == W,
                [S.autocompletePopout]: null != W,
                [S.bottom]: null == W && 'bottom' === e.position,
                [S.autocompleteTop]: K
            },
            X = A;
        null != W && (X = (null === (D = P.autocomplete) || void 0 === D ? void 0 : D.small) ? R : (null === (L = Z.query) || void 0 === L ? void 0 : L.type) === y.eq.EMOJIS_AND_STICKERS ? N : C), (X = Math.min(window.innerHeight - O, X));
        let J = (0, i.jsx)(_.ZP, {
            id: U,
            className: s()(S.autocomplete, Q),
            innerClassName: S.autocompleteInner,
            onMouseDown: (e) => e.preventDefault(),
            children: (0, i.jsx)(o.bG, {
                navigator: V,
                children: (0, i.jsx)(o.SJ, {
                    children: (e) => {
                        let { ref: t, ...n } = e;
                        return (0, i.jsx)(u.h21, {
                            id: U,
                            ref: (e) => {
                                var n;
                                (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null), (B.current = e);
                            },
                            ...n,
                            className: S.scroller,
                            style: { maxHeight: X },
                            role: 'listbox',
                            'aria-labelledby': (0, _.rp)(U),
                            children: q
                        });
                    }
                })
            })
        });
        return null != W
            ? (0, i.jsx)(j, {
                  children: (0, i.jsx)(u.jRF, {
                      targetRef: e.targetRef,
                      overrideTargetRect: W,
                      positionKey: z,
                      position: null !== (x = e.position) && void 0 !== x ? x : 'top',
                      align: 'left',
                      spacing: 8,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      children: () => J
                  })
              })
            : J;
    });
