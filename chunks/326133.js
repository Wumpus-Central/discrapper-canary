n.d(t, { Z: () => k }), n(388685);
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
let P = 490,
    w = 490,
    D = 245,
    L = 200,
    x = 120,
    k = i.forwardRef(function (e, t) {
        var n, a, T, A, R;
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
            V = i.useRef(null),
            [F, Z, H] = (0, O.Z)(N(S({}, e), { guild: B }), t, V),
            Y = (null == (n = M.autocomplete) ? void 0 : n.forceChatLayer) ? g.ZP : m.ZP,
            W = (0, _.DJ)(F.selectedIndex);
        (0, p.KR)(G, F.isVisible, W);
        let K = (0, y.Z)({
                editorHeight: j,
                type: M,
                state: F
            }),
            z = (0, l.e7)(
                [d.ZP],
                () => {
                    let e = d.ZP.getSelfEmbeddedActivityForChannel(k.id),
                        t = d.ZP.getActivityPanelMode();
                    return (0, u.l5)(k) && null != e && (0, f.p)(e.location) === k.id && t === v.Ez.PANEL;
                },
                [k]
            ),
            q = i.useMemo(() => ((null == K ? void 0 : K.top) == null && (null == K ? void 0 : K.left) == null && (null == K ? void 0 : K.bottom) == null && (null == K ? void 0 : K.right) == null ? '' : String(Date.now())), [null == K ? void 0 : K.top, null == K ? void 0 : K.left, null == K ? void 0 : K.bottom, null == K ? void 0 : K.right]);
        if (
            (i.useEffect(() => {
                U(F.isVisible);
            }, [U, F.isVisible]),
            !F.isVisible || null == F.query || void 0 === K)
        )
            return null;
        let X =
            null !=
            (a = F.query.typeInfo.renderResults({
                results: F.query.results,
                selectedIndex: F.selectedIndex,
                channel: k,
                guild: B,
                query: F.query.queryText,
                options: F.query.options,
                onHover: (e) => Z.onResultHover(e),
                onClick: (e) => Z.onResultClick(e)
            }))
                ? a
                : null;
        if (null == X) return null;
        let Q = {
                [I.autocompleteAttached]: null == K,
                [I.autocompletePopout]: null != K,
                [I.bottom]: null == K && 'bottom' === e.position,
                [I.autocompleteTop]: z
            },
            J = P;
        null != K && (J = (null == (T = M.autocomplete) ? void 0 : T.small) ? L : (null == (A = F.query) ? void 0 : A.type) === b.eq.EMOJIS_AND_STICKERS ? w : D);
        let $ = Math.min(0.5 * window.innerHeight, j);
        J = Math.min(window.innerHeight - x - $, J);
        let ee = (0, r.jsx)(_.ZP, {
            id: G,
            className: o()(I.autocomplete, Q),
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
                                S(
                                    {
                                        id: G,
                                        ref: (e) => {
                                            var n;
                                            (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null), (V.current = e);
                                        }
                                    },
                                    n
                                ),
                                {
                                    className: I.scroller,
                                    style: { maxHeight: J },
                                    role: 'listbox',
                                    'aria-labelledby': (0, _.rp)(G),
                                    children: X
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
                      position: null != (R = e.position) ? R : 'top',
                      align: 'left',
                      spacing: 8,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      children: () => ee
                  })
              })
            : ee;
    });
