n.d(t, { Z: () => M }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(442837),
    c = n(481060),
    u = n(595519),
    d = n(317381),
    f = n(16609),
    _ = n(588468),
    p = n(30465),
    h = n(313201),
    m = n(314910),
    g = n(549006),
    E = n(430824),
    b = n(436896),
    y = n(590921),
    O = n(606992),
    v = n(51062),
    I = n(918559),
    S = n(791831);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let w = 490,
    D = 490,
    L = 245,
    x = 200,
    k = 120,
    M = i.forwardRef(function (e, t) {
        var n, a, T, N, R;
        let { channel: M, type: j, editorHeight: U, onVisibilityChange: G } = e,
            B = (0, h.Dt)(),
            F = (0, l.e7)(
                [E.Z],
                () => {
                    var e;
                    return null != (e = E.Z.getGuild(M.guild_id)) ? e : null;
                },
                [M.guild_id]
            ),
            V = i.useRef(null),
            [Z, H, Y] = (0, v.Z)(C(A({}, e), { guild: F }), t, V),
            W = (null == (n = j.autocomplete) ? void 0 : n.forceChatLayer) ? g.ZP : m.ZP,
            K = (0, _.DJ)(Z.selectedIndex);
        (0, p.KR)(B, Z.isVisible, K), b.Z.trackExposure({ location: '6e9811_1' });
        let { usePopoutAutocomplete: z } = b.Z.useExperiment({ location: '6e9811_2' }, { autoTrackExposure: !1 }),
            q = (0, O.Z)({
                editorHeight: U,
                type: j,
                state: Z,
                isInPopoutExperiment: z
            }),
            Q = (0, l.e7)(
                [d.ZP],
                () => {
                    let e = d.ZP.getSelfEmbeddedActivityForChannel(M.id),
                        t = d.ZP.getActivityPanelMode();
                    return (0, u.l5)(M) && null != e && (0, f.pY)(e.location) === M.id && t === I.Ez.PANEL;
                },
                [M]
            ),
            X = i.useMemo(() => ((null == q ? void 0 : q.top) == null && (null == q ? void 0 : q.left) == null && (null == q ? void 0 : q.bottom) == null && (null == q ? void 0 : q.right) == null ? '' : String(Date.now())), [null == q ? void 0 : q.top, null == q ? void 0 : q.left, null == q ? void 0 : q.bottom, null == q ? void 0 : q.right]);
        if (
            (i.useEffect(() => {
                G(Z.isVisible);
            }, [G, Z.isVisible]),
            !Z.isVisible || null == Z.query || void 0 === q)
        )
            return null;
        let J =
            null !=
            (a = Z.query.typeInfo.renderResults({
                results: Z.query.results,
                selectedIndex: Z.selectedIndex,
                channel: M,
                guild: F,
                query: Z.query.queryText,
                options: Z.query.options,
                onHover: (e) => H.onResultHover(e),
                onClick: (e) => H.onResultClick(e)
            }))
                ? a
                : null;
        if (null == J) return null;
        let $ = {
                [S.autocompleteAttached]: null == q,
                [S.autocompletePopout]: null != q,
                [S.bottom]: null == q && 'bottom' === e.position,
                [S.autocompleteTop]: Q
            },
            ee = w;
        null != q && (ee = (null == (T = j.autocomplete) ? void 0 : T.small) ? x : (null == (N = Z.query) ? void 0 : N.type) === y.eq.EMOJIS_AND_STICKERS ? D : L);
        let et = Math.min(0.5 * window.innerHeight, U);
        ee = Math.min(window.innerHeight - k - et, ee);
        let en = (0, r.jsx)(_.ZP, {
            id: B,
            className: o()(S.autocomplete, $),
            innerClassName: S.autocompleteInner,
            onMouseDown: (e) => e.preventDefault(),
            children: (0, r.jsx)(s.bG, {
                navigator: Y,
                children: (0, r.jsx)(s.SJ, {
                    children: (e) => {
                        var { ref: t } = e,
                            n = P(e, ['ref']);
                        return (0, r.jsx)(
                            c.h21,
                            C(
                                A(
                                    {
                                        id: B,
                                        ref: (e) => {
                                            var n;
                                            (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null), (V.current = e);
                                        }
                                    },
                                    n
                                ),
                                {
                                    className: S.scroller,
                                    style: { maxHeight: ee },
                                    role: 'listbox',
                                    'aria-labelledby': (0, _.rp)(B),
                                    children: J
                                }
                            )
                        );
                    }
                })
            })
        });
        return null != q
            ? (0, r.jsx)(W, {
                  children: (0, r.jsx)(c.jRF, {
                      targetRef: e.targetRef,
                      overrideTargetRect: q,
                      positionKey: X,
                      position: null != (R = e.position) ? R : 'top',
                      align: 'left',
                      spacing: 8,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      children: () => en
                  })
              })
            : en;
    });
