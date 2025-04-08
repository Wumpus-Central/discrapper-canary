n.d(t, { Z: () => j }), n(704826), n(35282);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(80932),
    s = n(2052),
    c = n(543241),
    u = n(339085),
    d = n(633302),
    f = n(691251),
    g = n(268350),
    m = n(217590),
    b = n(453070),
    h = n(926491),
    p = n(378233),
    O = n(981631),
    y = n(388032);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    return d.ZP.getByName(e.replace(/(^:|:$)/g, ''));
}
function j(e) {
    let { type: t, id: n, name: j, isInExpressionPicker: S = !1 } = e,
        { location: P } = (0, s.O)(),
        _ = i.useMemo(() => N(E({}, P), { section: S ? O.jXE.EXPRESSION_PICKER : O.jXE.CONTEXT_MENU }), [P, S]),
        Z = (0, b.Go)(),
        I = (0, a.e7)([h.Z], () => (t === f.S.STICKER && null != n ? h.Z.getStickerById(n) : null)),
        x = null != I && Z.includes(I.id),
        T = (0, a.e7)([u.ZP], () => {
            if (t === f.S.EMOJI) {
                if (null != n) return u.ZP.getDisambiguatedEmojiContext().getById(n);
                else if (null != j) {
                    var e;
                    return null != (e = v(j)) ? e : v(d.ZP.convertSurrogateToName(j));
                }
            }
        }),
        A = (0, c.C1)(null, T);
    return null != I && t === f.S.STICKER
        ? (0, p.J8)(I) && !(0, p.V9)(I)
            ? null
            : x
              ? (0, r.jsx)(l.sNh, {
                    id: 'unfavorite',
                    action: () => (0, g.hW)(I.id),
                    label: y.NW.string(y.t.XhzKyM)
                })
              : (0, r.jsx)(l.sNh, {
                    id: 'favorite',
                    action: () => {
                        (0, m.cQ)({
                            sticker: I,
                            location: N(E({}, _), { object: O.qAy.STICKER })
                        }),
                            (0, g.SA)(null == I ? void 0 : I.id);
                    },
                    label: y.NW.string(y.t.kWmiPT)
                })
        : null != T && t === f.S.EMOJI
          ? A
              ? (0, r.jsx)(l.sNh, {
                    id: 'unfavorite',
                    action: () => (0, o.Xe)(T),
                    label: y.NW.string(y.t.Ay49KC)
                })
              : (0, r.jsx)(l.sNh, {
                    id: 'favorite',
                    action: () => {
                        (0, c.J1)({
                            emoji: T,
                            location: N(E({}, _), { object: O.qAy.EMOJI })
                        }),
                            (0, o.$K)(T);
                    },
                    label: y.NW.string(y.t['nNsr6+'])
                })
          : void 0;
}
