n.d(t, { A: () => D }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(435371),
    c = n(397927),
    u = n(442433),
    d = n(775602),
    f = n(508675),
    p = n(770335),
    _ = n(7584),
    h = n(60587),
    m = n(450510),
    g = n(147421),
    E = n(71393),
    b = n(690521),
    y = n(723702),
    O = n(692092),
    A = n(985018),
    v = n(351341);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = R(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let w = (e, t) => "".concat(e, ":").concat(t),
    P = i.forwardRef(function (e, t) {
        let [n, ...i] = [e, t],
            {
                emoji: a,
                isFavorite: l,
                isLargeSize: u,
                isMediumSize: d,
                isInspected: f,
                isDisabled: _,
                showPulse: m,
                columnIndex: g,
                rowIndex: y,
                size: S,
                surrogateCodePoint: T,
                allowAnimatedEmoji: R,
                selectedItemClassName: w,
                inNitroLockedSection: P,
            } = n,
            D = N(n, [
                "emoji",
                "isFavorite",
                "isLargeSize",
                "isMediumSize",
                "isInspected",
                "isDisabled",
                "showPulse",
                "columnIndex",
                "rowIndex",
                "size",
                "surrogateCodePoint",
                "allowAnimatedEmoji",
                "selectedItemClassName",
                "inNitroLockedSection",
            ]),
            [x] = i,
            L = (0, o.bG)([E.A], () => (a.type === p.i.GUILD ? E.A.getGuild(a.guildId) : void 0), [a]),
            j = () => {
                let e = (0, b.N)(a);
                return ((null == L ? void 0 : L.name) != null &&
                    (e = A.intl.formatToPlainString(A.t["nXv4/B"], {
                        names: e,
                        guildName: L.name,
                    })),
                l)
                    ? A.intl.formatToPlainString(A.t["9FI9Z0"], { names: e })
                    : e;
            },
            M = _ && !P;
        return (0, r.jsx)(c.vN3, {
            children: (0, r.jsx)(
                "button",
                C(I({}, D), {
                    className: s()(v._X, {
                        [v.lG]: u,
                        [v.Lh]: d,
                        [v.Bx]: f,
                        [null != w ? w : ""]: f,
                        [v.TV]: m,
                    }),
                    "data-type": h.g.EMOJI,
                    "data-id": a.id,
                    "data-name": a.name,
                    "data-surrogates": "surrogates" in a ? a.surrogates : null,
                    "data-animated": a.animated ? "true" : null,
                    ref: x,
                    children: (0, r.jsx)(O.A, {
                        "aria-label": j(),
                        columnIndex: g,
                        rowIndex: y,
                        emoji: a,
                        size: S,
                        surrogateCodePoint: T,
                        allowAnimatedEmoji: R,
                        isLocked: M,
                    }),
                }),
            ),
        });
    });
function D(e) {
    var t;
    let {
            descriptor: a,
            emojiItemKey: s,
            isInspected: c,
            rowIndex: p,
            channelGuildId: h,
            onInspect: E,
            onSelect: b,
            isScrolling: O,
            isUsingKeyboardNavigation: v,
            showEmojiFavoriteTooltip: S,
            surrogateCodePoint: T,
            selectedItemClassName: R,
            getEmojiItemProps: D,
            isMediumSize: x,
            isLargeSize: L,
            pulseItemKey: j,
            allowAnimatedEmoji: M,
            setPulseItemKey: k,
            messageId: U,
            isBurstReaction: G,
            rowPosition: V,
            inNitroLockedSection: F,
        } = e,
        [B, H] = i.useState(""),
        Y = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        W = (0, o.bG)([f.Ay], () => f.Ay.getDisambiguatedEmojiContext(h), [h]),
        K = i.useRef(null),
        { emoji: z, size: q, isDisabled: X, columnIndex: Z } = a,
        Q = (e) => {
            if ((e.stopPropagation(), O.current || v.current)) return;
            let t = e.altKey;
            t && !f.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(z) && k(s),
                (0, m.sF)(m._2.FAVORITE_EMOJI_TOOLTIP),
                b(a, {
                    isFinalSelection: !e.shiftKey,
                    toggleFavorite: t,
                });
        },
        $ = () => {
            O.current || v.current || E(a);
        },
        J = (e) => {
            (0, u.L3)(e, async () => {
                let { default: e } = await n.e("46132").then(n.bind(n, 233503));
                return (t) => (0, r.jsx)(e, I({}, t));
            });
        },
        ee = null != (t = D(Z, p)) ? t : {},
        { ref: et, tabIndex: en, onFocus: er } = ee,
        ei = N(ee, ["ref", "tabIndex", "onFocus"]),
        ea =
            B !== w(Z, p)
                ? (0, r.jsx)(P, {
                      ref: et,
                      emoji: z,
                      isFavorite: W.isFavoriteEmojiWithoutFetchingLatest(z),
                      isLargeSize: L,
                      isMediumSize: x,
                      isInspected: c,
                      isDisabled: X,
                      showPulse: j === s,
                      allowAnimatedEmoji: M,
                      onFocus: null != er ? er : $,
                      onMouseMove: $,
                      onClick: (e) => {
                          if (
                              null != K.current &&
                              null != V &&
                              null != U &&
                              !e.shiftKey &&
                              null != z.name &&
                              G &&
                              !Y &&
                              M
                          ) {
                              let e = null == z.id ? _.Ay.convertNameToSurrogate(z.name) : z.name,
                                  t = K.current.getBoundingClientRect();
                              (t.x = V.x + (Z + 1) * q), H(w(Z, p)), (0, g.h)(U, e, z.id, t);
                          }
                          Q(e);
                      },
                      onContextMenu: J,
                      tabIndex: en,
                      columnIndex: Z,
                      rowIndex: p,
                      size: q,
                      surrogateCodePoint: T,
                      selectedItemClassName: R,
                      inNitroLockedSection: F,
                  })
                : null;
    return (0, i.createElement)(
        "li",
        C(I({}, ei), {
            key: s,
            ref: K,
        }),
        S
            ? (0, r.jsx)(l.m_, {
                  text: A.intl.formatToPlainString(A.t.glqNsf, { key: (0, y.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: ea,
              })
            : ea,
    );
}
