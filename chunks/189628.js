"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(990078),
    u = n(187322),
    c = n(442433),
    d = n(775602),
    _ = n(508675),
    f = n(770335),
    p = n(7584),
    h = n(60587),
    E = n(450510),
    m = n(147421),
    g = n(71393),
    A = n(690521),
    I = n(723702),
    T = n(692092),
    S = n(985018),
    y = n(6376);
let N = (e, t) => `${e}:${t}`,
    v = i.forwardRef(function (e, t) {
        let n,
            {
                emoji: i,
                isFavorite: s,
                isLargeSize: l,
                isMediumSize: c,
                isInspected: d,
                isDisabled: _,
                showPulse: p,
                columnIndex: E,
                rowIndex: m,
                size: I,
                surrogateCodePoint: N,
                allowAnimatedEmoji: v,
                selectedItemClassName: C,
                inNitroLockedSection: O,
                ...R
            } = e,
            b = (0, o.bG)([g.A], () => (i.type === f.i.GUILD ? g.A.getGuild(i.guildId) : void 0), [i]);
        return (0, r.jsx)(u.vN, {
            children: (0, r.jsx)("button", {
                ...R,
                className: a()(y._X, { [y.lG]: l, [y.Lh]: c, [y.Bx]: d, [C ?? ""]: d, [y.TV]: p }),
                "data-type": h.g.EMOJI,
                "data-id": i.id,
                "data-name": i.name,
                "data-surrogates": "surrogates" in i ? i.surrogates : null,
                "data-animated": i.animated ? "true" : null,
                ref: t,
                children: (0, r.jsx)(T.A, {
                    "aria-label":
                        ((n = (0, A.N)(i)),
                        (b?.name != null &&
                            (n = S.intl.formatToPlainString(S.t["nXv4/B"], { names: n, guildName: b.name })),
                        s)
                            ? S.intl.formatToPlainString(S.t["9FI9Z0"], { names: n })
                            : n),
                    columnIndex: E,
                    rowIndex: m,
                    emoji: i,
                    size: I,
                    surrogateCodePoint: N,
                    allowAnimatedEmoji: v,
                    isLocked: _ && !O,
                }),
            }),
        });
    });
function C(e) {
    let {
            descriptor: t,
            emojiItemKey: s,
            isInspected: a,
            rowIndex: u,
            channelGuildId: f,
            onInspect: h,
            onSelect: g,
            isScrolling: A,
            isUsingKeyboardNavigation: T,
            showEmojiFavoriteTooltip: y,
            surrogateCodePoint: C,
            selectedItemClassName: O,
            getEmojiItemProps: R,
            isMediumSize: b,
            isLargeSize: D,
            pulseItemKey: L,
            allowAnimatedEmoji: w,
            setPulseItemKey: M,
            messageId: P,
            isBurstReaction: x,
            rowPosition: k,
            inNitroLockedSection: U,
        } = e,
        [G, F] = i.useState(""),
        V = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        B = (0, o.bG)([_.Ay], () => _.Ay.getDisambiguatedEmojiContext(f), [f]),
        H = i.useRef(null),
        { emoji: j, size: Y, isDisabled: W, columnIndex: K } = t,
        $ = () => {
            A.current || T.current || h(t);
        },
        { ref: z, tabIndex: q, onFocus: X, ...Q } = R(K, u) ?? {},
        Z =
            G !== N(K, u)
                ? (0, r.jsx)(v, {
                      ref: z,
                      emoji: j,
                      isFavorite: B.isFavoriteEmojiWithoutFetchingLatest(j),
                      isLargeSize: D,
                      isMediumSize: b,
                      isInspected: a,
                      isDisabled: W,
                      showPulse: L === s,
                      allowAnimatedEmoji: w,
                      onFocus: X ?? $,
                      onMouseMove: $,
                      onClick: (e) => {
                          if (
                              null != H.current &&
                              null != k &&
                              null != P &&
                              !e.shiftKey &&
                              null != j.name &&
                              x &&
                              !V &&
                              w
                          ) {
                              let e = null == j.id ? p.Ay.convertNameToSurrogate(j.name) : j.name,
                                  t = H.current.getBoundingClientRect();
                              (t.x = k.x + (K + 1) * Y), F(N(K, u)), (0, m.h)(P, e, j.id, t);
                          }
                          ((e) => {
                              if ((e.stopPropagation(), A.current || T.current)) return;
                              let n = e.altKey;
                              n && !_.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(j) && M(s),
                                  (0, E.sF)(E._2.FAVORITE_EMOJI_TOOLTIP),
                                  g(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
                          })(e);
                      },
                      onContextMenu: (e) => {
                          (0, c.L3)(e, async () => {
                              let { default: e } = await n.e("23751").then(n.bind(n, 233503));
                              return (t) => (0, r.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: q,
                      columnIndex: K,
                      rowIndex: u,
                      size: Y,
                      surrogateCodePoint: C,
                      selectedItemClassName: O,
                      inNitroLockedSection: U,
                  })
                : null;
    return (0, i.createElement)(
        "li",
        { ...Q, key: s, ref: H },
        y
            ? (0, r.jsx)(l.m, {
                  text: S.intl.formatToPlainString(S.t.glqNsf, { key: (0, I.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: Z,
              })
            : Z,
    );
}
