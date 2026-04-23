"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(990078),
    c = n(187322),
    u = n(442433),
    d = n(775602),
    h = n(508675),
    m = n(770335),
    p = n(7584),
    f = n(60587),
    g = n(450510),
    _ = n(147421),
    x = n(71393),
    A = n(690521),
    C = n(723702),
    E = n(692092),
    I = n(985018),
    v = n(6376);
let y = (e, t) => `${e}:${t}`,
    S = l.forwardRef(function (e, t) {
        let n,
            {
                emoji: l,
                isFavorite: s,
                isLargeSize: o,
                isMediumSize: u,
                isInspected: d,
                isDisabled: h,
                showPulse: p,
                columnIndex: g,
                rowIndex: _,
                size: C,
                surrogateCodePoint: y,
                allowAnimatedEmoji: S,
                selectedItemClassName: b,
                inNitroLockedSection: N,
                ...j
            } = e,
            T = (0, a.bG)([x.A], () => (l.type === m.i.GUILD ? x.A.getGuild(l.guildId) : void 0), [l]);
        return (0, i.jsx)(c.vN, {
            children: (0, i.jsx)("button", {
                ...j,
                className: r()(v._X, { [v.lG]: o, [v.Lh]: u, [v.Bx]: d, [b ?? ""]: d, [v.TV]: p }),
                "data-type": f.g.EMOJI,
                "data-id": l.id,
                "data-name": l.name,
                "data-surrogates": "surrogates" in l ? l.surrogates : null,
                "data-animated": l.animated ? "true" : null,
                ref: t,
                children: (0, i.jsx)(E.A, {
                    "aria-label":
                        ((n = (0, A.N)(l)),
                        (T?.name != null &&
                            (n = I.intl.formatToPlainString(I.t["nXv4/B"], { names: n, guildName: T.name })),
                        s)
                            ? I.intl.formatToPlainString(I.t["9FI9Z0"], { names: n })
                            : n),
                    columnIndex: g,
                    rowIndex: _,
                    emoji: l,
                    size: C,
                    surrogateCodePoint: y,
                    allowAnimatedEmoji: S,
                    isLocked: h && !N,
                }),
            }),
        });
    });
function b(e) {
    let {
            descriptor: t,
            emojiItemKey: s,
            isInspected: r,
            rowIndex: c,
            channelGuildId: m,
            onInspect: f,
            onSelect: x,
            isScrolling: A,
            isUsingKeyboardNavigation: E,
            showEmojiFavoriteTooltip: v,
            surrogateCodePoint: b,
            selectedItemClassName: N,
            getEmojiItemProps: j,
            isMediumSize: T,
            isLargeSize: R,
            pulseItemKey: w,
            allowAnimatedEmoji: L,
            setPulseItemKey: M,
            messageId: O,
            isBurstReaction: k,
            rowPosition: P,
            inNitroLockedSection: D,
        } = e,
        [U, V] = l.useState(""),
        G = (0, a.bG)([d.A], () => d.A.useReducedMotion),
        F = (0, a.bG)([h.Ay], () => h.Ay.getDisambiguatedEmojiContext(m), [m]),
        B = l.useRef(null),
        { emoji: H, size: W, isDisabled: K, columnIndex: z } = t,
        Z = () => {
            A.current || E.current || f(t);
        },
        { ref: q, tabIndex: Y, onFocus: J, ...$ } = j(z, c) ?? {},
        X =
            U !== y(z, c)
                ? (0, i.jsx)(S, {
                      ref: q,
                      emoji: H,
                      isFavorite: F.isFavoriteEmojiWithoutFetchingLatest(H),
                      isLargeSize: R,
                      isMediumSize: T,
                      isInspected: r,
                      isDisabled: K,
                      showPulse: w === s,
                      allowAnimatedEmoji: L,
                      onFocus: J ?? Z,
                      onMouseMove: Z,
                      onClick: (e) => {
                          if (
                              null != B.current &&
                              null != P &&
                              null != O &&
                              !e.shiftKey &&
                              null != H.name &&
                              k &&
                              !G &&
                              L
                          ) {
                              let e = null == H.id ? p.Ay.convertNameToSurrogate(H.name) : H.name,
                                  t = B.current.getBoundingClientRect();
                              (t.x = P.x + (z + 1) * W), V(y(z, c)), (0, _.h)(O, e, H.id, t);
                          }
                          ((e) => {
                              if ((e.stopPropagation(), A.current || E.current)) return;
                              let n = e.altKey;
                              n && !h.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(H) && M(s),
                                  (0, g.sF)(g._2.FAVORITE_EMOJI_TOOLTIP),
                                  x(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
                          })(e);
                      },
                      onContextMenu: (e) => {
                          (0, u.L3)(e, async () => {
                              let { default: e } = await n.e("23751").then(n.bind(n, 233503));
                              return (t) => (0, i.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: Y,
                      columnIndex: z,
                      rowIndex: c,
                      size: W,
                      surrogateCodePoint: b,
                      selectedItemClassName: N,
                      inNitroLockedSection: D,
                  })
                : null;
    return (0, l.createElement)(
        "li",
        { ...$, key: s, ref: B },
        v
            ? (0, i.jsx)(o.m, {
                  text: I.intl.formatToPlainString(I.t.glqNsf, { key: (0, C.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: X,
              })
            : X,
    );
}
