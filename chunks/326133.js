var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(91192),
    c = r(442837),
    d = r(481060),
    f = r(595519),
    _ = r(317381),
    h = r(16609),
    p = r(588468),
    m = r(30465),
    g = r(313201),
    E = r(314910),
    v = r(549006),
    I = r(430824),
    T = r(436896),
    b = r(590921),
    y = r(606992),
    S = r(51062),
    A = r(918559),
    N = r(144685);
let C = 490,
    R = 490,
    O = 245,
    D = 200,
    L = 175;
n.Z = s.forwardRef(function (e, n) {
    var r, i, o, x, w;
    let { channel: P, type: M, editorHeight: k, onVisibilityChange: U } = e,
        B = (0, g.Dt)(),
        G = (0, c.e7)(
            [I.Z],
            () => {
                var e;
                return null !== (e = I.Z.getGuild(P.guild_id)) && void 0 !== e ? e : null;
            },
            [P.guild_id]
        ),
        Z = s.useRef(),
        [F, V, j] = (0, S.Z)(
            {
                ...e,
                guild: G
            },
            n,
            Z
        ),
        H = (null === (r = M.autocomplete) || void 0 === r ? void 0 : r.forceChatLayer) ? v.ZP : E.ZP,
        Y = (0, p.DJ)(F.selectedIndex);
    (0, m.KR)(B, F.isVisible, Y), T.Z.trackExposure({ location: '6e9811_1' });
    let { usePopoutAutocomplete: W } = T.Z.useExperiment({ location: '6e9811_2' }, { autoTrackExposure: !1 }),
        K = (0, y.Z)({
            editorHeight: k,
            type: M,
            state: F,
            isInPopoutExperiment: W
        }),
        z = (0, c.e7)(
            [_.ZP],
            () => {
                let e = _.ZP.getSelfEmbeddedActivityForChannel(P.id),
                    n = _.ZP.getActivityPanelMode();
                return (0, f.l5)(P) && null != e && (0, h.p)(e.location) === P.id && n === A.Ez.PANEL;
            },
            [P]
        ),
        q = s.useMemo(() => ((null == K ? void 0 : K.top) == null && (null == K ? void 0 : K.left) == null && (null == K ? void 0 : K.bottom) == null && (null == K ? void 0 : K.right) == null ? '' : String(Date.now())), [null == K ? void 0 : K.top, null == K ? void 0 : K.left, null == K ? void 0 : K.bottom, null == K ? void 0 : K.right]);
    if (
        (s.useEffect(() => {
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
            [N.autocompleteAttached]: null == K,
            [N.autocompletePopout]: null != K,
            [N.bottom]: null == K && 'bottom' === e.position,
            [N.autocompleteTop]: z
        },
        J = C;
    null != K && (J = (null === (o = M.autocomplete) || void 0 === o ? void 0 : o.small) ? D : (null === (x = F.query) || void 0 === x ? void 0 : x.type) === b.eq.EMOJIS_AND_STICKERS ? R : O), (J = Math.min(window.innerHeight - L, J));
    let $ = (0, a.jsx)(p.ZP, {
        id: B,
        className: l()(N.autocomplete, X),
        innerClassName: N.autocompleteInner,
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
                        className: N.scroller,
                        style: { maxHeight: J },
                        role: 'listbox',
                        'aria-labelledby': (0, p.rp)(B),
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
