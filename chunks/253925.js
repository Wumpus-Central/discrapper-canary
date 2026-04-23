n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(477782),
    s = n(505930),
    o = n(27232),
    d = n(554375),
    c = n(212245),
    u = n(822123),
    g = n(508675),
    A = n(7584),
    h = n(60587),
    m = n(631576),
    f = n(891090),
    p = n(256449),
    E = n(679382),
    y = n(378058),
    v = n(652215),
    _ = n(985018);
function S(e) {
    return A.Ay.getByName(e.replace(/(^:|:$)/g, ""));
}
function I(e) {
    let { type: t, id: n, name: I, isInExpressionPicker: x = !1 } = e,
        { location: b } = (0, c.p)(),
        T = l.useMemo(() => ({ ...b, section: x ? v.JJy.EXPRESSION_PICKER : v.JJy.CONTEXT_MENU }), [b, x]),
        M = (0, p.ln)(),
        C = (0, a.bG)([E.A], () => (t === h.g.STICKER && null != n ? E.A.getStickerById(n) : null)),
        D = null != C && M.includes(C.id),
        j = (0, a.bG)([g.Ay], () => {
            if (t === h.g.EMOJI) {
                if (null != n) return g.Ay.getDisambiguatedEmojiContext().getById(n);
                else if (null != I) return S(I) ?? S(A.Ay.convertSurrogateToName(I));
            }
        }),
        N = (0, u.O7)(null, j);
    return null != C && t === h.g.STICKER
        ? (0, y.Xw)(C) && !(0, y.Y4)(C)
            ? null
            : D
              ? (0, i.jsx)(r.Dr, {
                    id: "unfavorite",
                    action: () => (0, m.vr)(C.id),
                    label: _.intl.string(_.t.XhzKyF),
                    leadingAccessory: { type: "icon", icon: s.y },
                })
              : (0, i.jsx)(r.Dr, {
                    id: "favorite",
                    action: () => {
                        (0, f.Dt)({ sticker: C, location: { ...T, object: v.ZSU.STICKER } }), (0, m.uK)(C?.id);
                    },
                    label: _.intl.string(_.t.kWmiPW),
                    leadingAccessory: { type: "icon", icon: o.G },
                })
        : null != j && t === h.g.EMOJI
          ? N
              ? (0, i.jsx)(r.Dr, {
                    id: "unfavorite",
                    action: () => (0, d.Sw)(j),
                    label: _.intl.string(_.t.Ay49KA),
                    leadingAccessory: { type: "icon", icon: s.y },
                })
              : (0, i.jsx)(r.Dr, {
                    id: "favorite",
                    action: () => {
                        (0, u.C5)({ emoji: j, location: { ...T, object: v.ZSU.EMOJI } }), (0, d.V4)(j);
                    },
                    label: _.intl.string(_.t.nNsr67),
                    leadingAccessory: { type: "icon", icon: o.G },
                })
          : void 0;
}
