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
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let P = 490,
    w = 490,
    D = 245,
    L = 200,
    x = 120,
    k = i.forwardRef(function (e, t) {
        var n, a, T, A, R, k, M;
        let { channel: j, type: U, editorHeight: G, onVisibilityChange: B, editorScrollerRef: V, barsHeight: F } = e,
            Z = (0, h.Dt)(),
            H = (0, l.e7)(
                [E.Z],
                () => {
                    var e;
                    return null != (e = E.Z.getGuild(j.guild_id)) ? e : null;
                },
                [j.guild_id]
            ),
            Y = i.useRef(null),
            [W, K, z] = (0, O.Z)(N(S({}, e), { guild: H }), t, Y),
            q = (null == (n = U.autocomplete) ? void 0 : n.forceChatLayer) ? g.ZP : m.ZP,
            X = (0, _.DJ)(W.selectedIndex);
        (0, p.KR)(Z, W.isVisible, X);
        let Q = (0, y.Z)({
                editorHeight: G,
                type: U,
                state: W
            }),
            J = (0, l.e7)(
                [d.ZP],
                () => {
                    let e = d.ZP.getSelfEmbeddedActivityForChannel(j.id),
                        t = d.ZP.getActivityPanelMode();
                    return (0, u.l5)(j) && null != e && (0, f.p)(e.location) === j.id && t === v.Ez.PANEL;
                },
                [j]
            ),
            $ = i.useMemo(() => ((null == Q ? void 0 : Q.top) == null && (null == Q ? void 0 : Q.left) == null && (null == Q ? void 0 : Q.bottom) == null && (null == Q ? void 0 : Q.right) == null ? '' : String(Date.now())), [null == Q ? void 0 : Q.top, null == Q ? void 0 : Q.left, null == Q ? void 0 : Q.bottom, null == Q ? void 0 : Q.right]);
        if (
            (i.useEffect(() => {
                B(W.isVisible);
            }, [B, W.isVisible]),
            !W.isVisible || null == W.query || void 0 === Q)
        )
            return null;
        let ee =
            null !=
            (T = W.query.typeInfo.renderResults({
                results: W.query.results,
                selectedIndex: W.selectedIndex,
                channel: j,
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
                [I.autocompleteAttached]: null == Q,
                [I.autocompletePopout]: null != Q,
                [I.bottom]: null == Q && 'bottom' === e.position,
                [I.autocompleteTop]: J
            },
            en = P;
        null != Q && (en = (null == (A = U.autocomplete) ? void 0 : A.small) ? L : (null == (R = W.query) ? void 0 : R.type) === b.eq.EMOJIS_AND_STICKERS ? w : D);
        let er = Math.max(G, null != (k = null == V || null == (a = V.current) ? void 0 : a.clientHeight) ? k : 0),
            ei = Math.min(0.5 * window.innerHeight, er);
        en = Math.min(window.innerHeight - x - ei - (null != F ? F : 0), en);
        let ea = (0, r.jsx)(_.ZP, {
            id: Z,
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
                                        id: Z,
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
                                    'aria-labelledby': (0, _.rp)(Z),
                                    children: ee
                                }
                            )
                        );
                    }
                })
            })
        });
        return null != Q
            ? (0, r.jsx)(q, {
                  children: (0, r.jsx)(c.jRF, {
                      targetRef: e.targetRef,
                      overrideTargetRect: Q,
                      positionKey: $,
                      position: null != (M = e.position) ? M : 'top',
                      align: 'left',
                      spacing: 8,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      children: () => ea
                  })
              })
            : ea;
    });
