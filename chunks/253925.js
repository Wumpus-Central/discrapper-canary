t.d(n, { A: () => j });
var e = t(477900),
    l = t(582128),
    o = t(17928),
    c = t(477782),
    r = t(505930),
    a = t(27232),
    s = t(554375),
    u = t(212245),
    d = t(822123),
    y = t(236285),
    g = t(7584),
    p = t(60587),
    A = t(631576),
    E = t(891090),
    I = t(256449),
    S = t(750385),
    b = t(68935),
    f = t(652215),
    C = t(375708);
function v(i) {
    return g.Ay.getByName(i.replace(/(^:|:$)/g, ""));
}
function j(i) {
    let { type: n, id: t, name: j, isInExpressionPicker: J = !1 } = i,
        { location: K } = (0, u.p)(),
        h = l.useMemo(() => ({ ...K, section: J ? f.JJy.EXPRESSION_PICKER : f.JJy.CONTEXT_MENU }), [K, J]),
        k = (0, I.ln)(),
        m = (0, o.bG)([S.A], () => (n === p.g.STICKER && null != t ? S.A.getStickerById(t) : null)),
        D = null != m && k.includes(m.id),
        N = (0, o.bG)([y.Ay], () => {
            if (n === p.g.EMOJI) {
                if (null != t) return y.Ay.getDisambiguatedEmojiContext().getById(t);
                else if (null != j) return v(j) ?? v(g.Ay.convertSurrogateToName(j));
            }
        }),
        O = (0, d.O7)(null, N);
    return null != m && n === p.g.STICKER
        ? (0, b.Xw)(m) && !(0, b.Y4)(m)
            ? null
            : D
              ? (0, e.jsx)(c.Dr, {
                    id: "unfavorite",
                    action: () => (0, A.vr)(m.id),
                    label: C.intl.string(C.t.XhzKyF),
                    leadingAccessory: { type: "icon", icon: r.y },
                })
              : (0, e.jsx)(c.Dr, {
                    id: "favorite",
                    action: () => {
                        (0, E.Dt)({ sticker: m, location: { ...h, object: f.ZSU.STICKER } }), (0, A.uK)(m?.id);
                    },
                    label: C.intl.string(C.t.kWmiPW),
                    leadingAccessory: { type: "icon", icon: a.StarIcon },
                })
        : null != N && n === p.g.EMOJI
          ? O
              ? (0, e.jsx)(c.Dr, {
                    id: "unfavorite",
                    action: () => (0, s.Sw)(N),
                    label: C.intl.string(C.t.Ay49KA),
                    leadingAccessory: { type: "icon", icon: r.y },
                })
              : (0, e.jsx)(c.Dr, {
                    id: "favorite",
                    action: () => {
                        (0, d.C5)({ emoji: N, location: { ...h, object: f.ZSU.EMOJI } }), (0, s.V4)(N);
                    },
                    label: C.intl.string(C.t.nNsr67),
                    leadingAccessory: { type: "icon", icon: a.StarIcon },
                })
          : void 0;
}
