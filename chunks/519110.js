n.d(t, { Z: () => S }), n(704826), n(35282);
var i = n(255367),
    r = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(80932),
    s = n(2052),
    c = n(543241),
    u = n(339085),
    d = n(633302),
    f = n(691251),
    g = n(268350),
    m = n(217590),
    h = n(453070),
    b = n(926491),
    p = n(378233),
    O = n(981631),
    y = n(388032);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    return d.ZP.getByName(e.replace(/(^:|:$)/g, ''));
}
function S(e) {
    let { type: t, id: n, name: S, isInExpressionPicker: P = !1 } = e,
        { location: _ } = (0, s.O)(),
        Z = r.useMemo(() => v(E({}, _), { section: P ? O.jXE.EXPRESSION_PICKER : O.jXE.CONTEXT_MENU }), [_, P]),
        N = (0, h.Go)(),
        I = (0, l.e7)([b.Z], () => (t === f.S.STICKER && null != n ? b.Z.getStickerById(n) : null)),
        x = null != I && N.includes(I.id),
        T = (0, l.e7)([u.ZP], () => {
            if (t === f.S.EMOJI) {
                if (null != n) return u.ZP.getDisambiguatedEmojiContext().getById(n);
                else if (null != S) {
                    var e;
                    return null != (e = j(S)) ? e : j(d.ZP.convertSurrogateToName(S));
                }
            }
        }),
        M = (0, c.C1)(null, T);
    return null != I && t === f.S.STICKER
        ? (0, p.J8)(I) && !(0, p.V9)(I)
            ? null
            : x
              ? (0, i.jsx)(a.sNh, {
                    id: 'unfavorite',
                    action: () => (0, g.hW)(I.id),
                    label: y.intl.string(y.t.XhzKyM)
                })
              : (0, i.jsx)(a.sNh, {
                    id: 'favorite',
                    action: () => {
                        (0, m.cQ)({
                            sticker: I,
                            location: v(E({}, Z), { object: O.qAy.STICKER })
                        }),
                            (0, g.SA)(null == I ? void 0 : I.id);
                    },
                    label: y.intl.string(y.t.kWmiPT)
                })
        : null != T && t === f.S.EMOJI
          ? M
              ? (0, i.jsx)(a.sNh, {
                    id: 'unfavorite',
                    action: () => (0, o.Xe)(T),
                    label: y.intl.string(y.t.Ay49KC)
                })
              : (0, i.jsx)(a.sNh, {
                    id: 'favorite',
                    action: () => {
                        (0, c.J1)({
                            emoji: T,
                            location: v(E({}, Z), { object: O.qAy.EMOJI })
                        }),
                            (0, o.$K)(T);
                    },
                    label: y.intl.string(y.t['nNsr6+'])
                })
          : void 0;
}
