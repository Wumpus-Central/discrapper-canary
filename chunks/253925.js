n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(554375),
    o = n(212245),
    d = n(822123),
    c = n(508675),
    u = n(7584),
    g = n(60587),
    A = n(631576),
    p = n(891090),
    m = n(256449),
    f = n(679382),
    y = n(378058),
    h = n(652215),
    E = n(985018);
function S(e) {
    return u.Ay.getByName(e.replace(/(^:|:$)/g, ""));
}
function _(e) {
    let { type: t, id: n, name: _, isInExpressionPicker: b = !1 } = e,
        { location: v } = (0, o.p)(),
        I = l.useMemo(() => ({ ...v, section: b ? h.JJy.EXPRESSION_PICKER : h.JJy.CONTEXT_MENU }), [v, b]),
        T = (0, m.ln)(),
        x = (0, a.bG)([f.A], () => (t === g.g.STICKER && null != n ? f.A.getStickerById(n) : null)),
        D = null != x && T.includes(x.id),
        j = (0, a.bG)([c.Ay], () => {
            if (t === g.g.EMOJI) {
                if (null != n) return c.Ay.getDisambiguatedEmojiContext().getById(n);
                else if (null != _) return S(_) ?? S(u.Ay.convertSurrogateToName(_));
            }
        }),
        M = (0, d.O7)(null, j);
    return null != x && t === g.g.STICKER
        ? (0, y.Xw)(x) && !(0, y.Y4)(x)
            ? null
            : D
              ? (0, i.jsx)(r.Drp, {
                    id: "unfavorite",
                    action: () => (0, A.vr)(x.id),
                    label: E.intl.string(E.t.XhzKyF),
                    leadingAccessory: { type: "icon", icon: r.yA2 },
                })
              : (0, i.jsx)(r.Drp, {
                    id: "favorite",
                    action: () => {
                        (0, p.Dt)({ sticker: x, location: { ...I, object: h.ZSU.STICKER } }), (0, A.uK)(x?.id);
                    },
                    label: E.intl.string(E.t.kWmiPW),
                    leadingAccessory: { type: "icon", icon: r.Gg5 },
                })
        : null != j && t === g.g.EMOJI
          ? M
              ? (0, i.jsx)(r.Drp, {
                    id: "unfavorite",
                    action: () => (0, s.Sw)(j),
                    label: E.intl.string(E.t.Ay49KA),
                    leadingAccessory: { type: "icon", icon: r.yA2 },
                })
              : (0, i.jsx)(r.Drp, {
                    id: "favorite",
                    action: () => {
                        (0, d.C5)({ emoji: j, location: { ...I, object: h.ZSU.EMOJI } }), (0, s.V4)(j);
                    },
                    label: E.intl.string(E.t.nNsr67),
                    leadingAccessory: { type: "icon", icon: r.Gg5 },
                })
          : void 0;
}
