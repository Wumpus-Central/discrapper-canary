var e = t(477900),
    l = t(582128),
    o = t(855986),
    c = t(477782),
    r = t(505930),
    a = t(27232),
    s = t(554375),
    u = t(212245),
    d = t(822123),
    g = t(121681),
    y = t(7584),
    I = t(60587),
    S = t(631576),
    p = t(891090),
    A = t(256449),
    E = t(898578),
    b = t(378058),
    f = t(652215),
    C = t(792996);
function v(n) {
    return y.Ay.getByName(n.replace(/(^:|:$)/g, ""));
}
t.d(
    i,
    {},
    {
        A: function (n) {
            let { type: i, id: t, name: O, isInExpressionPicker: j = !1 } = n,
                { location: J } = (0, u.p)(),
                K = l.useMemo(() => ({ ...J, section: j ? f.JJy.EXPRESSION_PICKER : f.JJy.CONTEXT_MENU }), [J, j]),
                h = (0, A.ln)(),
                k = (0, o.bG)([E.A], () => (i === I.g.STICKER && null != t ? E.A.getStickerById(t) : null)),
                m = null != k && h.includes(k.id),
                D = (0, o.bG)([g.Ay], () => {
                    if (i === I.g.EMOJI) {
                        if (null != t) return g.Ay.getDisambiguatedEmojiContext().getById(t);
                        else if (null != O) return v(O) ?? v(y.Ay.convertSurrogateToName(O));
                    }
                }),
                N = (0, d.O7)(null, D);
            return null != k && i === I.g.STICKER
                ? (0, b.Xw)(k) && !(0, b.Y4)(k)
                    ? null
                    : m
                      ? (0, e.jsx)(c.Dr, {
                            id: "unfavorite",
                            action: () => (0, S.vr)(k.id),
                            label: C.intl.string(C.t.XhzKyF),
                            leadingAccessory: { type: "icon", icon: r.StarOutlineIcon },
                        })
                      : (0, e.jsx)(c.Dr, {
                            id: "favorite",
                            action: () => {
                                ((0, p.Dt)({ sticker: k, location: { ...K, object: f.ZSU.STICKER } }),
                                    (0, S.uK)(k?.id));
                            },
                            label: C.intl.string(C.t.kWmiPW),
                            leadingAccessory: { type: "icon", icon: a.StarIcon },
                        })
                : null != D && i === I.g.EMOJI
                  ? N
                      ? (0, e.jsx)(c.Dr, {
                            id: "unfavorite",
                            action: () => (0, s.Sw)(D),
                            label: C.intl.string(C.t.Ay49KA),
                            leadingAccessory: { type: "icon", icon: r.StarOutlineIcon },
                        })
                      : (0, e.jsx)(c.Dr, {
                            id: "favorite",
                            action: () => {
                                ((0, d.C5)({ emoji: D, location: { ...K, object: f.ZSU.EMOJI } }), (0, s.V4)(D));
                            },
                            label: C.intl.string(C.t.nNsr67),
                            leadingAccessory: { type: "icon", icon: a.StarIcon },
                        })
                  : void 0;
        },
    },
);
