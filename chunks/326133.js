n.d(t, { Z: () => k }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
function S(e, t, n) {
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
function T(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = 490,
    w = 490,
    D = 245,
    L = 200,
    x = 120,
    k = i.forwardRef(function (e, t) {
        var n, o, S, A, P;
        let { channel: k, type: M, editorHeight: j, onVisibilityChange: U } = e,
            G = (0, h.Dt)(),
            B = (0, l.e7)(
                [E.Z],
                () => {
                    var e;
                    return null != (e = E.Z.getGuild(k.guild_id)) ? e : null;
                },
                [k.guild_id]
            ),
            F = i.useRef(null),
            [V, Z, H] = (0, O.Z)(N(T({}, e), { guild: B }), t, F),
            Y = (null == (n = M.autocomplete) ? void 0 : n.forceChatLayer) ? g.ZP : m.ZP,
            W = (0, _.DJ)(V.selectedIndex);
        (0, p.KR)(G, V.isVisible, W);
        let K = (0, y.Z)({
                editorHeight: j,
                type: M,
                state: V
            }),
            z = (0, l.e7)(
                [d.ZP],
                () => {
                    let e = d.ZP.getSelfEmbeddedActivityForChannel(k.id),
                        t = d.ZP.getActivityPanelMode();
                    return (0, u.l5)(k) && null != e && (0, f.pY)(e.location) === k.id && t === v.Ez.PANEL;
                },
                [k]
            ),
            q = i.useMemo(() => ((null == K ? void 0 : K.top) == null && (null == K ? void 0 : K.left) == null && (null == K ? void 0 : K.bottom) == null && (null == K ? void 0 : K.right) == null ? '' : String(Date.now())), [null == K ? void 0 : K.top, null == K ? void 0 : K.left, null == K ? void 0 : K.bottom, null == K ? void 0 : K.right]);
        if (
            (i.useEffect(() => {
                U(V.isVisible);
            }, [U, V.isVisible]),
            !V.isVisible || null == V.query || void 0 === K)
        )
            return null;
        let Q =
            null !=
            (o = V.query.typeInfo.renderResults({
                results: V.query.results,
                selectedIndex: V.selectedIndex,
                channel: k,
                guild: B,
                query: V.query.queryText,
                options: V.query.options,
                onHover: (e) => Z.onResultHover(e),
                onClick: (e) => Z.onResultClick(e)
            }))
                ? o
                : null;
        if (null == Q) return null;
        let X = {
                [I.autocompleteAttached]: null == K,
                [I.autocompletePopout]: null != K,
                [I.bottom]: null == K && 'bottom' === e.position,
                [I.autocompleteTop]: z
            },
            J = R;
        null != K && (J = (null == (S = M.autocomplete) ? void 0 : S.small) ? L : (null == (A = V.query) ? void 0 : A.type) === b.eq.EMOJIS_AND_STICKERS ? w : D);
        let $ = Math.min(0.5 * window.innerHeight, j);
        J = Math.min(window.innerHeight - x - $, J);
        let ee = (0, r.jsx)(_.ZP, {
            id: G,
            className: a()(I.autocomplete, X),
            innerClassName: I.autocompleteInner,
            onMouseDown: (e) => e.preventDefault(),
            children: (0, r.jsx)(s.bG, {
                navigator: H,
                children: (0, r.jsx)(s.SJ, {
                    children: (e) => {
                        var { ref: t } = e,
                            n = C(e, ['ref']);
                        return (0, r.jsx)(
                            c.h21,
                            N(
                                T(
                                    {
                                        id: G,
                                        ref: (e) => {
                                            var n;
                                            (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null), (F.current = e);
                                        }
                                    },
                                    n
                                ),
                                {
                                    className: I.scroller,
                                    style: { maxHeight: J },
                                    role: 'listbox',
                                    'aria-labelledby': (0, _.rp)(G),
                                    children: Q
                                }
                            )
                        );
                    }
                })
            })
        });
        return null != K
            ? (0, r.jsx)(Y, {
                  children: (0, r.jsx)(c.jRF, {
                      targetRef: e.targetRef,
                      overrideTargetRect: K,
                      positionKey: q,
                      position: null != (P = e.position) ? P : 'top',
                      align: 'left',
                      spacing: 8,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      children: () => ee
                  })
              })
            : ee;
    });
