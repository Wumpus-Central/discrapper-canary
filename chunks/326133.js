n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
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
    I = n(826191);
function T(e, t, n) {
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
function S(e) {
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
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
    j = i.forwardRef(function (e, t) {
        var n, a, T, A, R, j, M, k;
        let { channel: U, type: G, editorHeight: B, onVisibilityChange: Z, editorScrollerRef: F, barsHeight: V } = e,
            H = (0, h.Dt)(),
            Y = (0, l.e7)([E.Z], () => {
                var e;
                return null != (e = E.Z.getGuild(U.guild_id)) ? e : null;
            }, [U.guild_id]),
            W = i.useRef(null),
            [K, z, q] = (0, O.Z)(C(S({}, e), { guild: Y }), t, W),
            X = (null == (n = G.autocomplete) ? void 0 : n.forceChatLayer) ? g.ZP : m.ZP,
            Q = (0, _.DJ)(K.selectedIndex);
        (0, p.KR)(H, K.isVisible, Q);
        let J = (0, y.Z)({
                editorHeight: B,
                type: G,
                state: K,
            }),
            $ = (0, l.e7)([d.ZP], () => {
                let e = d.ZP.getSelfEmbeddedActivityForChannel(U.id),
                    t = d.ZP.getActivityPanelMode();
                return (0, u.l5)(U) && null != e && (0, f.p)(e.location) === U.id && t === v.Ez.PANEL;
            }, [U]),
            ee = i.useMemo(
                () =>
                    (null == J ? void 0 : J.top) == null &&
                    (null == J ? void 0 : J.left) == null &&
                    (null == J ? void 0 : J.bottom) == null &&
                    (null == J ? void 0 : J.right) == null
                        ? ""
                        : String(Date.now()),
                [
                    null == J ? void 0 : J.top,
                    null == J ? void 0 : J.left,
                    null == J ? void 0 : J.bottom,
                    null == J ? void 0 : J.right,
                ],
            );
        if (
            (i.useEffect(() => {
                Z(K.isVisible);
            }, [Z, K.isVisible]),
            !K.isVisible || null == K.query || void 0 === J)
        )
            return null;
        let et =
            null !=
            (A = K.query.typeInfo.renderResults({
                results: K.query.results,
                selectedIndex: K.selectedIndex,
                channel: U,
                guild: Y,
                query: K.query.queryText,
                options: K.query.options,
                onHover: (e) => z.onResultHover(e),
                onClick: (e) => z.onResultClick(e),
            }))
                ? A
                : null;
        if (null == et) return null;
        let en = {
                [I.autocompleteAttached]: null == J,
                [I.autocompletePopout]: null != J,
                [I.bottom]: null == J && "bottom" === e.position,
                [I.autocompleteTop]: $,
                [I.minimal]: (null == (a = K.query) ? void 0 : a.type) === b.eq.MENTION_SUGGESTIONS,
            },
            er = P;
        null != J &&
            (er = (null == (R = G.autocomplete) ? void 0 : R.small)
                ? L
                : (null == (j = K.query) ? void 0 : j.type) === b.eq.EMOJIS_AND_STICKERS
                  ? w
                  : D);
        let ei = Math.max(B, null != (M = null == F || null == (T = F.current) ? void 0 : T.clientHeight) ? M : 0),
            ea = Math.min(0.5 * window.innerHeight, ei);
        er = Math.min(window.innerHeight - x - ea - (null != V ? V : 0), er);
        let eo = (0, r.jsx)(_.ZP, {
            id: H,
            className: o()(I.autocomplete, en),
            innerClassName: I.autocompleteInner,
            onMouseDown: (e) => e.preventDefault(),
            children: (0, r.jsx)(s.bG, {
                navigator: q,
                children: (0, r.jsx)(s.SJ, {
                    children: (e) => {
                        var { ref: t } = e,
                            n = N(e, ["ref"]);
                        return (0, r.jsx)(
                            c.h21,
                            C(
                                S(
                                    {
                                        id: H,
                                        ref: (e) => {
                                            var n;
                                            (t.current =
                                                null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null),
                                                (W.current = e);
                                        },
                                        orientation: "vertical",
                                        overflow: "auto",
                                    },
                                    n,
                                ),
                                {
                                    className: I.scroller,
                                    style: { maxHeight: er },
                                    role: "listbox",
                                    "aria-labelledby": (0, _.rp)(H),
                                    children: et,
                                },
                            ),
                        );
                    },
                }),
            }),
        });
        return null != J
            ? (0, r.jsx)(X, {
                  children: (0, r.jsx)(c.jRF, {
                      targetRef: e.targetRef,
                      overrideTargetRect: J,
                      positionKey: ee,
                      position: null != (k = e.position) ? k : "top",
                      align: "left",
                      spacing: 8,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      children: () => eo,
                  }),
              })
            : eo;
    });
