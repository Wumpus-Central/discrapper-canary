(n.d(t, { Z: () => k }), n(388685));
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
    b = n(590921),
    y = n(606992),
    O = n(51062),
    v = n(918559),
    I = n(504573);
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
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            }));
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let R = 490,
    P = 490,
    D = 245,
    L = 200,
    x = 120,
    k = i.forwardRef(function (e, t) {
        var n, a, T, A, w, k, j;
        let { channel: M, type: U, editorHeight: G, onVisibilityChange: B, editorScrollerRef: Z, barsHeight: F } = e,
            V = (0, h.Dt)(),
            H = (0, l.e7)(
                [E.Z],
                () => {
                    var e;
                    return null != (e = E.Z.getGuild(M.guild_id)) ? e : null;
                },
                [M.guild_id]
            ),
            Y = i.useRef(null),
            [W, K, z] = (0, O.Z)(N(S({}, e), { guild: H }), t, Y),
            q = (null == (n = U.autocomplete) ? void 0 : n.forceChatLayer) ? g.ZP : m.ZP,
            $ = (0, _.DJ)(W.selectedIndex);
        (0, p.KR)(V, W.isVisible, $);
        let X = (0, y.Z)({
                editorHeight: G,
                type: U,
                state: W
            }),
            Q = (0, l.e7)(
                [d.ZP],
                () => {
                    let e = d.ZP.getSelfEmbeddedActivityForChannel(M.id),
                        t = d.ZP.getActivityPanelMode();
                    return (0, u.l5)(M) && null != e && (0, f.p)(e.location) === M.id && t === v.Ez.PANEL;
                },
                [M]
            ),
            J = i.useMemo(() => ((null == X ? void 0 : X.top) == null && (null == X ? void 0 : X.left) == null && (null == X ? void 0 : X.bottom) == null && (null == X ? void 0 : X.right) == null ? '' : String(Date.now())), [null == X ? void 0 : X.top, null == X ? void 0 : X.left, null == X ? void 0 : X.bottom, null == X ? void 0 : X.right]);
        if (
            (i.useEffect(() => {
                B(W.isVisible);
            }, [B, W.isVisible]),
            !W.isVisible || null == W.query || void 0 === X)
        )
            return null;
        let ee =
            null !=
            (T = W.query.typeInfo.renderResults({
                results: W.query.results,
                selectedIndex: W.selectedIndex,
                channel: M,
                guild: H,
                query: W.query.queryText,
                options: W.query.options,
                onHover: (e) => K.onResultHover(e),
                onClick: (e) => K.onResultClick(e)
            }))
                ? T
                : null;
        if (null == ee) return null;
        let et = {
                [I.autocompleteAttached]: null == X,
                [I.autocompletePopout]: null != X,
                [I.bottom]: null == X && 'bottom' === e.position,
                [I.autocompleteTop]: Q
            },
            en = R;
        null != X && (en = (null == (A = U.autocomplete) ? void 0 : A.small) ? L : (null == (w = W.query) ? void 0 : w.type) === b.eq.EMOJIS_AND_STICKERS ? P : D);
        let er = Math.max(G, null != (k = null == Z || null == (a = Z.current) ? void 0 : a.clientHeight) ? k : 0),
            ei = Math.min(0.5 * window.innerHeight, er);
        en = Math.min(window.innerHeight - x - ei - (null != F ? F : 0), en);
        let ea = (0, r.jsx)(_.ZP, {
            id: V,
            className: o()(I.autocomplete, et),
            innerClassName: I.autocompleteInner,
            onMouseDown: (e) => e.preventDefault(),
            children: (0, r.jsx)(s.bG, {
                navigator: z,
                children: (0, r.jsx)(s.SJ, {
                    children: (e) => {
                        var { ref: t } = e,
                            n = C(e, ['ref']);
                        return (0, r.jsx)(
                            c.h21,
                            N(
                                S(
                                    {
                                        id: V,
                                        ref: (e) => {
                                            var n;
                                            ((t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null), (Y.current = e));
                                        }
                                    },
                                    n
                                ),
                                {
                                    className: I.scroller,
                                    style: { maxHeight: en },
                                    role: 'listbox',
                                    'aria-labelledby': (0, _.rp)(V),
                                    children: ee
                                }
                            )
                        );
                    }
                })
            })
        });
        return null != X
            ? (0, r.jsx)(q, {
                  children: (0, r.jsx)(c.jRF, {
                      targetRef: e.targetRef,
                      overrideTargetRect: X,
                      positionKey: J,
                      position: null != (j = e.position) ? j : 'top',
                      align: 'left',
                      spacing: 8,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      children: () => ea
                  })
              })
            : ea;
    });
