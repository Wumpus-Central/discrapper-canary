n.d(t, { Z: () => k }), n(47120);
var r = n(200651),
    i = n(192379),
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
    b = n(436896),
    y = n(590921),
    v = n(606992),
    O = n(51062),
    I = n(918559),
    S = n(504573);
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
function N(e) {
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
function C(e, t) {
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
function R(e, t) {
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
let w = 490,
    D = 490,
    L = 245,
    x = 200,
    M = 175,
    k = i.forwardRef(function (e, t) {
        var n, o, T, A, P;
        let { channel: k, type: j, editorHeight: U, onVisibilityChange: G } = e,
            B = (0, h.Dt)(),
            F = (0, l.e7)(
                [E.Z],
                () => {
                    var e;
                    return null != (e = E.Z.getGuild(k.guild_id)) ? e : null;
                },
                [k.guild_id]
            ),
            V = i.useRef(),
            [Z, H, W] = (0, O.Z)(C(N({}, e), { guild: F }), t, V),
            Y = (null == (n = j.autocomplete) ? void 0 : n.forceChatLayer) ? g.ZP : m.ZP,
            K = (0, _.DJ)(Z.selectedIndex);
        (0, p.KR)(B, Z.isVisible, K), b.Z.trackExposure({ location: '6e9811_1' });
        let { usePopoutAutocomplete: z } = b.Z.useExperiment({ location: '6e9811_2' }, { autoTrackExposure: !1 }),
            q = (0, v.Z)({
                editorHeight: U,
                type: j,
                state: Z,
                isInPopoutExperiment: z
            }),
            Q = (0, l.e7)(
                [d.ZP],
                () => {
                    let e = d.ZP.getSelfEmbeddedActivityForChannel(k.id),
                        t = d.ZP.getActivityPanelMode();
                    return (0, u.l5)(k) && null != e && (0, f.pY)(e.location) === k.id && t === I.Ez.PANEL;
                },
                [k]
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
            (o = Z.query.typeInfo.renderResults({
                results: Z.query.results,
                selectedIndex: Z.selectedIndex,
                channel: k,
                guild: F,
                query: Z.query.queryText,
                options: Z.query.options,
                onHover: (e) => H.onResultHover(e),
                onClick: (e) => H.onResultClick(e)
            }))
                ? o
                : null;
        if (null == J) return null;
        let $ = {
                [S.autocompleteAttached]: null == q,
                [S.autocompletePopout]: null != q,
                [S.bottom]: null == q && 'bottom' === e.position,
                [S.autocompleteTop]: Q
            },
            ee = w;
        null != q && (ee = (null == (T = j.autocomplete) ? void 0 : T.small) ? x : (null == (A = Z.query) ? void 0 : A.type) === y.eq.EMOJIS_AND_STICKERS ? D : L), (ee = Math.min(window.innerHeight - M, ee));
        let et = (0, r.jsx)(_.ZP, {
            id: B,
            className: a()(S.autocomplete, $),
            innerClassName: S.autocompleteInner,
            onMouseDown: (e) => e.preventDefault(),
            children: (0, r.jsx)(s.bG, {
                navigator: W,
                children: (0, r.jsx)(s.SJ, {
                    children: (e) => {
                        var { ref: t } = e,
                            n = R(e, ['ref']);
                        return (0, r.jsx)(
                            c.h21,
                            C(
                                N(
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
            ? (0, r.jsx)(Y, {
                  children: (0, r.jsx)(c.jRF, {
                      targetRef: e.targetRef,
                      overrideTargetRect: q,
                      positionKey: X,
                      position: null != (P = e.position) ? P : 'top',
                      align: 'left',
                      spacing: 8,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      children: () => et
                  })
              })
            : et;
    });
