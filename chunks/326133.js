n.d(t, { Z: () => j }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(442837),
    c = n(481060),
    u = n(595519),
    d = n(317381),
    f = n(16609),
    p = n(588468),
    _ = n(30465),
    m = n(313201),
    h = n(314910),
    g = n(549006),
    E = n(430824),
    b = n(590921),
    y = n(606992),
    O = n(51062),
    v = n(918559),
    S = n(671982);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
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
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = 490,
    w = 490,
    D = 245,
    x = 200,
    L = 120,
    j = i.forwardRef(function (e, t) {
        var n, a, I, A, P, j, M, k, U;
        let { channel: G, type: Z, editorHeight: B, onVisibilityChange: F, editorScrollerRef: V, barsHeight: H } = e,
            Y = (0, m.Dt)(),
            W = (0, l.e7)([E.Z], () => {
                var e;
                return null != (e = E.Z.getGuild(G.guild_id)) ? e : null;
            }, [G.guild_id]),
            K = i.useRef(null),
            [z, q, X] = (0, O.Z)(C(T({}, e), { guild: W }), t, K),
            Q = (null == (n = Z.autocomplete) ? void 0 : n.forceChatLayer) ? g.ZP : h.ZP,
            J = (0, p.DJ)(z.selectedIndex);
        (0, _.KR)(Y, z.isVisible, J);
        let $ = (0, y.Z)({
                editorHeight: B,
                type: Z,
                state: z,
            }),
            ee = (0, l.e7)([d.ZP], () => {
                let e = d.ZP.getSelfEmbeddedActivityForChannel(G.id),
                    t = d.ZP.getActivityPanelMode();
                return (0, u.l5)(G) && null != e && (0, f.p)(e.location) === G.id && t === v.Ez.PANEL;
            }, [G]),
            et = i.useMemo(
                () =>
                    (null == $ ? void 0 : $.top) == null &&
                    (null == $ ? void 0 : $.left) == null &&
                    (null == $ ? void 0 : $.bottom) == null &&
                    (null == $ ? void 0 : $.right) == null
                        ? ""
                        : String(Date.now()),
                [
                    null == $ ? void 0 : $.top,
                    null == $ ? void 0 : $.left,
                    null == $ ? void 0 : $.bottom,
                    null == $ ? void 0 : $.right,
                ],
            );
        if (
            (i.useEffect(() => {
                var e, t;
                F(z.isVisible, null != (t = null == (e = z.query) ? void 0 : e.type) ? t : null);
            }, [F, z.isVisible, null == (a = z.query) ? void 0 : a.type]),
            !z.isVisible || null == z.query || void 0 === $)
        )
            return null;
        let en =
            null !=
            (P = z.query.typeInfo.renderResults({
                results: z.query.results,
                selectedIndex: z.selectedIndex,
                channel: G,
                guild: W,
                query: z.query.queryText,
                options: z.query.options,
                onHover: (e) => q.onResultHover(e),
                onClick: (e) => q.onResultClick(e),
            }))
                ? P
                : null;
        if (null == en) return null;
        let er = {
                [S.autocompleteAttached]: null == $,
                [S.autocompletePopout]: null != $,
                [S.bottom]: null == $ && "bottom" === e.position,
                [S.autocompleteTop]: ee,
                [S.minimal]: (null == (I = z.query) ? void 0 : I.type) === b.eq.MENTION_SUGGESTIONS,
            },
            ei = R;
        null != $ &&
            (ei = (null == (j = Z.autocomplete) ? void 0 : j.small)
                ? x
                : (null == (M = z.query) ? void 0 : M.type) === b.eq.EMOJIS_AND_STICKERS
                  ? w
                  : D);
        let ea = Math.max(B, null != (k = null == V || null == (A = V.current) ? void 0 : A.clientHeight) ? k : 0),
            eo = Math.min(0.5 * window.innerHeight, ea);
        ei = Math.min(window.innerHeight - L - eo - (null != H ? H : 0), ei);
        let es = (0, r.jsx)(p.ZP, {
            id: Y,
            className: o()(S.autocomplete, er),
            innerClassName: S.autocompleteInner,
            onMouseDown: (e) => e.preventDefault(),
            children: (0, r.jsx)(s.bG, {
                navigator: X,
                children: (0, r.jsx)(s.SJ, {
                    children: (e) => {
                        var { ref: t } = e,
                            n = N(e, ["ref"]);
                        return (0, r.jsx)(
                            c.h21,
                            C(
                                T(
                                    {
                                        id: Y,
                                        ref: (e) => {
                                            var n;
                                            (t.current =
                                                null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null),
                                                (K.current = e);
                                        },
                                        orientation: "vertical",
                                        overflow: "auto",
                                    },
                                    n,
                                ),
                                {
                                    className: S.scroller,
                                    style: { maxHeight: ei },
                                    role: "listbox",
                                    "aria-labelledby": (0, p.rp)(Y),
                                    children: en,
                                },
                            ),
                        );
                    },
                }),
            }),
        });
        return null != $
            ? (0, r.jsx)(Q, {
                  children: (0, r.jsx)(c.jRF, {
                      targetRef: e.targetRef,
                      overrideTargetRect: $,
                      positionKey: et,
                      position: null != (U = e.position) ? U : "top",
                      align: "left",
                      spacing: 8,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      children: () => es,
                  }),
              })
            : es;
    });
