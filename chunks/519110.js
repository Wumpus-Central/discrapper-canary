i.d(n, { Z: () => j }), i(757143);
var e = i(200651),
    l = i(192379),
    a = i(442837),
    r = i(481060),
    o = i(80932),
    s = i(2052),
    u = i(543241),
    c = i(339085),
    d = i(633302),
    g = i(691251),
    S = i(268350),
    b = i(217590),
    E = i(453070),
    v = i(926491),
    p = i(378233),
    I = i(981631),
    f = i(388032);
function h(t) {
    return d.ZP.getByName(t.replace(/(^:|:$)/g, ''));
}
function j(t) {
    let { type: n, id: i, name: j, isInExpressionPicker: C = !1 } = t,
        { location: N } = (0, s.O)(),
        x = l.useMemo(
            () => ({
                ...N,
                section: C ? I.jXE.EXPRESSION_PICKER : I.jXE.CONTEXT_MENU
            }),
            [N, C]
        ),
        m = (0, E.Go)(),
        y = (0, a.e7)([v.Z], () => (n === g.S.STICKER && null != i ? v.Z.getStickerById(i) : null)),
        A = null != y && m.includes(y.id),
        Z = (0, a.e7)([c.ZP], () => {
            if (n === g.S.EMOJI) {
                if (null != i) return c.ZP.getDisambiguatedEmojiContext().getById(i);
                if (null != j) {
                    var t;
                    return null !== (t = h(j)) && void 0 !== t ? t : h(d.ZP.convertSurrogateToName(j));
                }
            }
        }),
        k = (0, u.C1)(null, Z);
    return null != y && n === g.S.STICKER
        ? (0, p.J8)(y) && !(0, p.V9)(y)
            ? null
            : A
              ? (0, e.jsx)(r.sNh, {
                    id: 'unfavorite',
                    action: () => (0, S.hW)(y.id),
                    label: f.intl.string(f.t.XhzKyM)
                })
              : (0, e.jsx)(r.sNh, {
                    id: 'favorite',
                    action: () => {
                        (0, b.cQ)({
                            sticker: y,
                            location: {
                                ...x,
                                object: I.qAy.STICKER
                            }
                        }),
                            (0, S.SA)(null == y ? void 0 : y.id);
                    },
                    label: f.intl.string(f.t.kWmiPT)
                })
        : null != Z && n === g.S.EMOJI
          ? k
              ? (0, e.jsx)(r.sNh, {
                    id: 'unfavorite',
                    action: () => (0, o.Xe)(Z),
                    label: f.intl.string(f.t.Ay49KC)
                })
              : (0, e.jsx)(r.sNh, {
                    id: 'favorite',
                    action: () => {
                        (0, u.J1)({
                            emoji: Z,
                            location: {
                                ...x,
                                object: I.qAy.EMOJI
                            }
                        }),
                            (0, o.$K)(Z);
                    },
                    label: f.intl.string(f.t['nNsr6+'])
                })
          : void 0;
}
