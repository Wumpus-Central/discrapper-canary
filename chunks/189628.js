"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(147421),
    g = n(71393),
    A = n(690521),
    I = n(723702),
    T = n(692092),
    S = n(985018),
    y = n(351341);
let v = (e, t) => `${e}:${t}`,
    N = i.forwardRef(function (e, t) {
        let {
                emoji: n,
                isFavorite: i,
                isLargeSize: s,
                isMediumSize: l,
                isInspected: c,
                isDisabled: d,
                showPulse: _,
                columnIndex: p,
                rowIndex: m,
                size: E,
                surrogateCodePoint: I,
                allowAnimatedEmoji: v,
                selectedItemClassName: N,
                inNitroLockedSection: C,
                ...b
            } = e,
            R = (0, o.bG)([g.A], () => (n.type === f.i.GUILD ? g.A.getGuild(n.guildId) : void 0), [n]),
            O = () => {
                let e = (0, A.N)(n);
                return (R?.name != null &&
                    (e = S.intl.formatToPlainString(S.t["nXv4/B"], { names: e, guildName: R.name })),
                i)
                    ? S.intl.formatToPlainString(S.t["9FI9Z0"], { names: e })
                    : e;
            },
            D = d && !C;
        return (0, r.jsx)(u.vN3, {
            children: (0, r.jsx)("button", {
                ...b,
                className: a()(y._X, { [y.lG]: s, [y.Lh]: l, [y.Bx]: c, [N ?? ""]: c, [y.TV]: _ }),
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
                    size: E,
                    surrogateCodePoint: I,
                    allowAnimatedEmoji: v,
                    isLocked: D,
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
            selectedItemClassName: b,
            getEmojiItemProps: R,
            isMediumSize: O,
            isLargeSize: D,
            pulseItemKey: L,
            allowAnimatedEmoji: w,
            setPulseItemKey: x,
            messageId: M,
            isBurstReaction: P,
            rowPosition: k,
            inNitroLockedSection: U,
        } = e,
        [G, F] = i.useState(""),
        V = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        B = (0, o.bG)([_.Ay], () => _.Ay.getDisambiguatedEmojiContext(f), [f]),
        H = i.useRef(null),
        { emoji: j, size: Y, isDisabled: W, columnIndex: K } = t,
        z = (e) => {
            if ((e.stopPropagation(), A.current || T.current)) return;
            let n = e.altKey;
            n && !_.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(j) && x(s),
                (0, m.sF)(m._2.FAVORITE_EMOJI_TOOLTIP),
                g(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
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
        { ref: Z, tabIndex: X, onFocus: Q, ...J } = R(K, u) ?? {},
        ee =
            G !== v(K, u)
                ? (0, r.jsx)(N, {
                      ref: Z,
                      emoji: j,
                      isFavorite: B.isFavoriteEmojiWithoutFetchingLatest(j),
                      isLargeSize: D,
                      isMediumSize: O,
                      isInspected: a,
                      isDisabled: W,
                      showPulse: L === s,
                      allowAnimatedEmoji: w,
                      onFocus: Q ?? $,
                      onMouseMove: $,
                      onClick: (e) => {
                          if (
                              null != H.current &&
                              null != k &&
                              null != M &&
                              !e.shiftKey &&
                              null != j.name &&
                              P &&
                              !V &&
                              w
                          ) {
                              let e = null == j.id ? p.Ay.convertNameToSurrogate(j.name) : j.name,
                                  t = H.current.getBoundingClientRect();
                              (t.x = k.x + (K + 1) * Y), F(v(K, u)), (0, E.h)(M, e, j.id, t);
                          }
                          z(e);
                      },
                      onContextMenu: q,
                      tabIndex: X,
                      columnIndex: K,
                      rowIndex: u,
                      size: Y,
                      surrogateCodePoint: C,
                      selectedItemClassName: b,
                      inNitroLockedSection: U,
                  })
                : null;
    return (0, i.createElement)(
        "li",
        { ...J, key: s, ref: H },
        y
            ? (0, r.jsx)(l.m_, {
                  text: S.intl.formatToPlainString(S.t.glqNsf, { key: (0, I.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: ee,
              })
            : ee,
    );
}
