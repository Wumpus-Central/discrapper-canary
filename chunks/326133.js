var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(91192),
    c = r(442837),
    d = r(481060),
    f = r(595519),
    p = r(317381),
    h = r(16609),
    _ = r(588468),
    m = r(30465),
    g = r(313201),
    E = r(314910),
    v = r(549006),
    y = r(430824),
    b = r(436896),
    I = r(590921),
    T = r(606992),
    S = r(51062),
    A = r(918559),
    C = r(144685);
let N = 490,
    R = 490,
    O = 245,
    D = 200,
    x = 175;
n.Z = o.forwardRef(function (e, n) {
    var r, i, s, L, w;
    let { channel: P, type: M, editorHeight: k, onVisibilityChange: U } = e,
        B = (0, g.Dt)(),
        G = (0, c.e7)(
            [y.Z],
            () => {
                var e;
                return null !== (e = y.Z.getGuild(P.guild_id)) && void 0 !== e ? e : null;
            },
            [P.guild_id]
        ),
        Z = o.useRef(),
        [F, V, j] = (0, S.Z)(
            {
                ...e,
                guild: G
            },
            n,
            Z
        ),
        H = (null === (r = M.autocomplete) || void 0 === r ? void 0 : r.forceChatLayer) ? v.ZP : E.ZP,
        Y = (0, _.DJ)(F.selectedIndex);
    (0, m.KR)(B, F.isVisible, Y), b.Z.trackExposure({ location: '6e9811_1' });
    let { usePopoutAutocomplete: W } = b.Z.useExperiment({ location: '6e9811_2' }, { autoTrackExposure: !1 }),
        K = (0, T.Z)({
            editorHeight: k,
            type: M,
            state: F,
            isInPopoutExperiment: W
        }),
        z = (0, c.e7)(
            [p.ZP],
            () => {
                let e = p.ZP.getSelfEmbeddedActivityForChannel(P.id),
                    n = p.ZP.getActivityPanelMode();
                return (0, f.l5)(P) && null != e && (0, h.p)(e.location) === P.id && n === A.Ez.PANEL;
            },
            [P]
        ),
        q = o.useMemo(() => ((null == K ? void 0 : K.top) == null && (null == K ? void 0 : K.left) == null && (null == K ? void 0 : K.bottom) == null && (null == K ? void 0 : K.right) == null ? '' : String(Date.now())), [null == K ? void 0 : K.top, null == K ? void 0 : K.left, null == K ? void 0 : K.bottom, null == K ? void 0 : K.right]);
    if (
        (o.useEffect(() => {
            U(F.isVisible);
        }, [U, F.isVisible]),
        !F.isVisible || null == F.query || void 0 === K)
    )
        return null;
    let Q =
        null !==
            (i = F.query.typeInfo.renderResults({
                results: F.query.results,
                selectedIndex: F.selectedIndex,
                channel: P,
                guild: G,
                query: F.query.queryText,
                options: F.query.options,
                onHover: (e) => V.onResultHover(e),
                onClick: (e) => V.onResultClick(e)
            })) && void 0 !== i
            ? i
            : null;
    if (null == Q) return null;
    let X = {
            [C.autocompleteAttached]: null == K,
            [C.autocompletePopout]: null != K,
            [C.bottom]: null == K && 'bottom' === e.position,
            [C.autocompleteTop]: z
        },
        J = N;
    null != K && (J = (null === (s = M.autocomplete) || void 0 === s ? void 0 : s.small) ? D : (null === (L = F.query) || void 0 === L ? void 0 : L.type) === I.eq.EMOJIS_AND_STICKERS ? R : O), (J = Math.min(window.innerHeight - x, J));
    let $ = (0, a.jsx)(_.ZP, {
        id: B,
        className: l()(C.autocomplete, X),
        innerClassName: C.autocompleteInner,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsx)(u.bG, {
            navigator: j,
            children: (0, a.jsx)(u.SJ, {
                children: (e) => {
                    let { ref: n, ...r } = e;
                    return (0, a.jsx)(d.AdvancedScrollerThin, {
                        id: B,
                        ref: (e) => {
                            var r;
                            (n.current = null !== (r = null == e ? void 0 : e.getScrollerNode()) && void 0 !== r ? r : null), (Z.current = e);
                        },
                        ...r,
                        className: C.scroller,
                        style: { maxHeight: J },
                        role: 'listbox',
                        'aria-labelledby': (0, _.rp)(B),
                        children: Q
                    });
                }
            })
        })
    });
    return null != K
        ? (0, a.jsx)(H, {
              children: (0, a.jsx)(d.ReferencePositionLayer, {
                  targetRef: e.targetRef,
                  overrideTargetRect: K,
                  positionKey: q,
                  position: null !== (w = e.position) && void 0 !== w ? w : 'top',
                  align: 'left',
                  spacing: 8,
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  children: () => $
              })
          })
        : $;
});
