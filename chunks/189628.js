"use strict";
n.d(t, { A: () => N });
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
    h = n(7584),
    p = n(60587),
    g = n(450510),
    E = n(147421),
    A = n(71393),
    I = n(690521),
    T = n(723702),
    y = n(692092),
    S = n(985018),
    v = n(351341);
let C = (e, t) => `${e}:${t}`,
    b = i.forwardRef(function (e, t) {
        let {
                emoji: n,
                isFavorite: i,
                isLargeSize: a,
                isMediumSize: l,
                isInspected: c,
                isDisabled: d,
                showPulse: _,
                columnIndex: h,
                rowIndex: g,
                size: E,
                surrogateCodePoint: T,
                allowAnimatedEmoji: C,
                selectedItemClassName: b,
                inNitroLockedSection: N,
                ...R
            } = e,
            O = (0, o.bG)([A.A], () => (n.type === f.i.GUILD ? A.A.getGuild(n.guildId) : void 0), [n]),
            D = () => {
                let e = (0, I.N)(n);
                return (O?.name != null &&
                    (e = S.intl.formatToPlainString(S.t["nXv4/B"], { names: e, guildName: O.name })),
                i)
                    ? S.intl.formatToPlainString(S.t["9FI9Z0"], { names: e })
                    : e;
            },
            L = d && !N;
        return (0, r.jsx)(u.vN3, {
            children: (0, r.jsx)("button", {
                ...R,
                className: s()(v._X, { [v.lG]: a, [v.Lh]: l, [v.Bx]: c, [b ?? ""]: c, [v.TV]: _ }),
                "data-type": p.g.EMOJI,
                "data-id": n.id,
                "data-name": n.name,
                "data-surrogates": "surrogates" in n ? n.surrogates : null,
                "data-animated": n.animated ? "true" : null,
                ref: t,
                children: (0, r.jsx)(y.A, {
                    "aria-label": D(),
                    columnIndex: h,
                    rowIndex: g,
                    emoji: n,
                    size: E,
                    surrogateCodePoint: T,
                    allowAnimatedEmoji: C,
                    isLocked: L,
                }),
            }),
        });
    });
function N(e) {
    let {
            descriptor: t,
            emojiItemKey: a,
            isInspected: s,
            rowIndex: u,
            channelGuildId: f,
            onInspect: p,
            onSelect: A,
            isScrolling: I,
            isUsingKeyboardNavigation: y,
            showEmojiFavoriteTooltip: v,
            surrogateCodePoint: N,
            selectedItemClassName: R,
            getEmojiItemProps: O,
            isMediumSize: D,
            isLargeSize: L,
            pulseItemKey: w,
            allowAnimatedEmoji: x,
            setPulseItemKey: P,
            messageId: M,
            isBurstReaction: k,
            rowPosition: U,
            inNitroLockedSection: G,
        } = e,
        [F, V] = i.useState(""),
        B = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        j = (0, o.bG)([_.Ay], () => _.Ay.getDisambiguatedEmojiContext(f), [f]),
        H = i.useRef(null),
        { emoji: Y, size: W, isDisabled: K, columnIndex: $ } = t,
        z = (e) => {
            if ((e.stopPropagation(), I.current || y.current)) return;
            let n = e.altKey;
            n && !_.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(Y) && P(a),
                (0, g.sF)(g._2.FAVORITE_EMOJI_TOOLTIP),
                A(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
        },
        q = () => {
            I.current || y.current || p(t);
        },
        X = (e) => {
            (0, c.L3)(e, async () => {
                let { default: e } = await n.e("46132").then(n.bind(n, 233503));
                return (t) => (0, r.jsx)(e, { ...t });
            });
        },
        { ref: Z, tabIndex: Q, onFocus: J, ...ee } = O($, u) ?? {},
        et =
            F !== C($, u)
                ? (0, r.jsx)(b, {
                      ref: Z,
                      emoji: Y,
                      isFavorite: j.isFavoriteEmojiWithoutFetchingLatest(Y),
                      isLargeSize: L,
                      isMediumSize: D,
                      isInspected: s,
                      isDisabled: K,
                      showPulse: w === a,
                      allowAnimatedEmoji: x,
                      onFocus: J ?? q,
                      onMouseMove: q,
                      onClick: (e) => {
                          if (
                              null != H.current &&
                              null != U &&
                              null != M &&
                              !e.shiftKey &&
                              null != Y.name &&
                              k &&
                              !B &&
                              x
                          ) {
                              let e = null == Y.id ? h.Ay.convertNameToSurrogate(Y.name) : Y.name,
                                  t = H.current.getBoundingClientRect();
                              (t.x = U.x + ($ + 1) * W), V(C($, u)), (0, E.h)(M, e, Y.id, t);
                          }
                          z(e);
                      },
                      onContextMenu: X,
                      tabIndex: Q,
                      columnIndex: $,
                      rowIndex: u,
                      size: W,
                      surrogateCodePoint: N,
                      selectedItemClassName: R,
                      inNitroLockedSection: G,
                  })
                : null;
    return (0, i.createElement)(
        "li",
        { ...ee, key: a, ref: H },
        v
            ? (0, r.jsx)(l.m_, {
                  text: S.intl.formatToPlainString(S.t.glqNsf, { key: (0, T.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: et,
              })
            : et,
    );
}
