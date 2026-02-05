"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(435371),
    u = n(397927),
    c = n(442433),
    d = n(775602),
    _ = n(508675),
    f = n(770335),
    p = n(7584),
    h = n(60587),
    m = n(450510),
    g = n(147421),
    E = n(71393),
    A = n(690521),
    I = n(723702),
    T = n(692092),
    y = n(985018),
    S = n(351341);
let v = (e, t) => `${e}:${t}`,
    C = i.forwardRef(function (e, t) {
        let {
                emoji: n,
                isFavorite: i,
                isLargeSize: a,
                isMediumSize: l,
                isInspected: c,
                isDisabled: d,
                showPulse: _,
                columnIndex: p,
                rowIndex: m,
                size: g,
                surrogateCodePoint: I,
                allowAnimatedEmoji: v,
                selectedItemClassName: C,
                inNitroLockedSection: b,
                ...N
            } = e,
            R = (0, o.bG)([E.A], () => (n.type === f.i.GUILD ? E.A.getGuild(n.guildId) : void 0), [n]),
            O = () => {
                let e = (0, A.N)(n);
                return (R?.name != null &&
                    (e = y.intl.formatToPlainString(y.t["nXv4/B"], { names: e, guildName: R.name })),
                i)
                    ? y.intl.formatToPlainString(y.t["9FI9Z0"], { names: e })
                    : e;
            },
            D = d && !b;
        return (0, r.jsx)(u.vN3, {
            children: (0, r.jsx)("button", {
                ...N,
                className: s()(S._X, { [S.lG]: a, [S.Lh]: l, [S.Bx]: c, [C ?? ""]: c, [S.TV]: _ }),
                "data-type": h.g.EMOJI,
                "data-id": n.id,
                "data-name": n.name,
                "data-surrogates": "surrogates" in n ? n.surrogates : null,
                "data-animated": n.animated ? "true" : null,
                ref: t,
                children: (0, r.jsx)(T.A, {
                    "aria-label": O(),
                    columnIndex: p,
                    rowIndex: m,
                    emoji: n,
                    size: g,
                    surrogateCodePoint: I,
                    allowAnimatedEmoji: v,
                    isLocked: D,
                }),
            }),
        });
    });
function b(e) {
    let {
            descriptor: t,
            emojiItemKey: a,
            isInspected: s,
            rowIndex: u,
            channelGuildId: f,
            onInspect: h,
            onSelect: E,
            isScrolling: A,
            isUsingKeyboardNavigation: T,
            showEmojiFavoriteTooltip: S,
            surrogateCodePoint: b,
            selectedItemClassName: N,
            getEmojiItemProps: R,
            isMediumSize: O,
            isLargeSize: D,
            pulseItemKey: L,
            allowAnimatedEmoji: w,
            setPulseItemKey: x,
            messageId: P,
            isBurstReaction: M,
            rowPosition: k,
            inNitroLockedSection: U,
        } = e,
        [G, V] = i.useState(""),
        F = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        B = (0, o.bG)([_.Ay], () => _.Ay.getDisambiguatedEmojiContext(f), [f]),
        j = i.useRef(null),
        { emoji: H, size: Y, isDisabled: W, columnIndex: K } = t,
        z = (e) => {
            if ((e.stopPropagation(), A.current || T.current)) return;
            let n = e.altKey;
            n && !_.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(H) && x(a),
                (0, m.sF)(m._2.FAVORITE_EMOJI_TOOLTIP),
                E(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
        },
        $ = () => {
            A.current || T.current || h(t);
        },
        q = (e) => {
            (0, c.L3)(e, async () => {
                let { default: e } = await n.e("46132").then(n.bind(n, 233503));
                return (t) => (0, r.jsx)(e, { ...t });
            });
        },
        { ref: Z, tabIndex: Q, onFocus: X, ...J } = R(K, u) ?? {},
        ee =
            G !== v(K, u)
                ? (0, r.jsx)(C, {
                      ref: Z,
                      emoji: H,
                      isFavorite: B.isFavoriteEmojiWithoutFetchingLatest(H),
                      isLargeSize: D,
                      isMediumSize: O,
                      isInspected: s,
                      isDisabled: W,
                      showPulse: L === a,
                      allowAnimatedEmoji: w,
                      onFocus: X ?? $,
                      onMouseMove: $,
                      onClick: (e) => {
                          if (
                              null != j.current &&
                              null != k &&
                              null != P &&
                              !e.shiftKey &&
                              null != H.name &&
                              M &&
                              !F &&
                              w
                          ) {
                              let e = null == H.id ? p.Ay.convertNameToSurrogate(H.name) : H.name,
                                  t = j.current.getBoundingClientRect();
                              (t.x = k.x + (K + 1) * Y), V(v(K, u)), (0, g.h)(P, e, H.id, t);
                          }
                          z(e);
                      },
                      onContextMenu: q,
                      tabIndex: Q,
                      columnIndex: K,
                      rowIndex: u,
                      size: Y,
                      surrogateCodePoint: b,
                      selectedItemClassName: N,
                      inNitroLockedSection: U,
                  })
                : null;
    return (0, i.createElement)(
        "li",
        { ...J, key: a, ref: j },
        S
            ? (0, r.jsx)(l.m_, {
                  text: y.intl.formatToPlainString(y.t.glqNsf, { key: (0, I.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: ee,
              })
            : ee,
    );
}
