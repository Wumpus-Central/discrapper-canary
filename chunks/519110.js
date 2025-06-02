n.d(t, { Z: () => j }), n(704826), n(35282);
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
    p = n(453070),
    b = n(926491),
    h = n(378233),
    O = n(981631),
    E = n(388032);
function y(e) {
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
function S(e) {
    return d.ZP.getByName(e.replace(/(^:|:$)/g, ''));
}
function j(e) {
    let { type: t, id: n, name: j, isInExpressionPicker: _ = !1 } = e,
        { location: P } = (0, s.O)(),
        I = r.useMemo(() => v(y({}, P), { section: _ ? O.jXE.EXPRESSION_PICKER : O.jXE.CONTEXT_MENU }), [P, _]),
        N = (0, p.Go)(),
        Z = (0, l.e7)([b.Z], () => (t === f.S.STICKER && null != n ? b.Z.getStickerById(n) : null)),
        D = null != Z && N.includes(Z.id),
        T = (0, l.e7)([u.ZP], () => {
            if (t === f.S.EMOJI) {
                if (null != n) return u.ZP.getDisambiguatedEmojiContext().getById(n);
                else if (null != j) {
                    var e;
                    return null != (e = S(j)) ? e : S(d.ZP.convertSurrogateToName(j));
                }
            }
        }),
        A = (0, c.C1)(null, T);
    return null != Z && t === f.S.STICKER
        ? (0, h.J8)(Z) && !(0, h.V9)(Z)
            ? null
            : D
              ? (0, i.jsx)(a.sNh, {
                    id: 'unfavorite',
                    action: () => (0, g.hW)(Z.id),
                    label: E.intl.string(E.t.XhzKyM)
                })
              : (0, i.jsx)(a.sNh, {
                    id: 'favorite',
                    action: () => {
                        (0, m.cQ)({
                            sticker: Z,
                            location: v(y({}, I), { object: O.qAy.STICKER })
                        }),
                            (0, g.SA)(null == Z ? void 0 : Z.id);
                    },
                    label: E.intl.string(E.t.kWmiPT)
                })
        : null != T && t === f.S.EMOJI
          ? A
              ? (0, i.jsx)(a.sNh, {
                    id: 'unfavorite',
                    action: () => (0, o.Xe)(T),
                    label: E.intl.string(E.t.Ay49KC)
                })
              : (0, i.jsx)(a.sNh, {
                    id: 'favorite',
                    action: () => {
                        (0, c.J1)({
                            emoji: T,
                            location: v(y({}, I), { object: O.qAy.EMOJI })
                        }),
                            (0, o.$K)(T);
                    },
                    label: E.intl.string(E.t['nNsr6+'])
                })
          : void 0;
}
