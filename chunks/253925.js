n.d(i, { A: () => x });
var e = n(627968),
    l = n(64700),
    a = n(17928),
    r = n(477782),
    o = n(505930),
    s = n(27232),
    u = n(554375),
    c = n(212245),
    d = n(822123),
    g = n(159273),
    y = n(7584),
    p = n(60587),
    b = n(631576),
    A = n(891090),
    E = n(256449),
    I = n(750385),
    f = n(68935),
    C = n(652215),
    m = n(985018);
function S(t) {
    return y.Ay.getByName(t.replace(/(^:|:$)/g, ""));
}
function x(t) {
    let { type: i, id: n, name: x, isInExpressionPicker: j = !1 } = t,
        { location: v } = (0, c.p)(),
        k = l.useMemo(() => ({ ...v, section: j ? C.JJy.EXPRESSION_PICKER : C.JJy.CONTEXT_MENU }), [v, j]),
        J = (0, E.ln)(),
        h = (0, a.bG)([I.A], () => (i === p.g.STICKER && null != n ? I.A.getStickerById(n) : null)),
        K = null != h && J.includes(h.id),
        D = (0, a.bG)([g.Ay], () => {
            if (i === p.g.EMOJI) {
                if (null != n) return g.Ay.getDisambiguatedEmojiContext().getById(n);
                else if (null != x) return S(x) ?? S(y.Ay.convertSurrogateToName(x));
            }
        }),
        N = (0, d.O7)(null, D);
    return null != h && i === p.g.STICKER
        ? (0, f.Xw)(h) && !(0, f.Y4)(h)
            ? null
            : K
              ? (0, e.jsx)(r.Dr, {
                    id: "unfavorite",
                    action: () => (0, b.vr)(h.id),
                    label: m.intl.string(m.t.XhzKyF),
                    leadingAccessory: { type: "icon", icon: o.y },
                })
              : (0, e.jsx)(r.Dr, {
                    id: "favorite",
                    action: () => {
                        (0, A.Dt)({ sticker: h, location: { ...k, object: C.ZSU.STICKER } }), (0, b.uK)(h?.id);
                    },
                    label: m.intl.string(m.t.kWmiPW),
                    leadingAccessory: { type: "icon", icon: s.G },
                })
        : null != D && i === p.g.EMOJI
          ? N
              ? (0, e.jsx)(r.Dr, {
                    id: "unfavorite",
                    action: () => (0, u.Sw)(D),
                    label: m.intl.string(m.t.Ay49KA),
                    leadingAccessory: { type: "icon", icon: o.y },
                })
              : (0, e.jsx)(r.Dr, {
                    id: "favorite",
                    action: () => {
                        (0, d.C5)({ emoji: D, location: { ...k, object: C.ZSU.EMOJI } }), (0, u.V4)(D);
                    },
                    label: m.intl.string(m.t.nNsr67),
                    leadingAccessory: { type: "icon", icon: s.G },
                })
          : void 0;
}
