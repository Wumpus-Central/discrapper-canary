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
    p = n(926491),
    b = n(378233),
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
function j(e) {
    return d.ZP.getByName(e.replace(/(^:|:$)/g, ''));
}
function S(e) {
    let { type: t, id: n, name: S, isInExpressionPicker: _ = !1 } = e,
        { location: P } = (0, s.O)(),
        N = r.useMemo(() => v(y({}, P), { section: _ ? O.jXE.EXPRESSION_PICKER : O.jXE.CONTEXT_MENU }), [P, _]),
        I = (0, h.Go)(),
        Z = (0, l.e7)([p.Z], () => (t === f.S.STICKER && null != n ? p.Z.getStickerById(n) : null)),
        x = null != Z && I.includes(Z.id),
        D = (0, l.e7)([u.ZP], () => {
            if (t === f.S.EMOJI) {
                if (null != n) return u.ZP.getDisambiguatedEmojiContext().getById(n);
                else if (null != S) {
                    var e;
                    return null != (e = j(S)) ? e : j(d.ZP.convertSurrogateToName(S));
                }
            }
        }),
        T = (0, c.C1)(null, D);
    return null != Z && t === f.S.STICKER
        ? (0, b.J8)(Z) && !(0, b.V9)(Z)
            ? null
            : x
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
                            location: v(y({}, N), { object: O.qAy.STICKER })
                        }),
                            (0, g.SA)(null == Z ? void 0 : Z.id);
                    },
                    label: E.intl.string(E.t.kWmiPT)
                })
        : null != D && t === f.S.EMOJI
          ? T
              ? (0, i.jsx)(a.sNh, {
                    id: 'unfavorite',
                    action: () => (0, o.Xe)(D),
                    label: E.intl.string(E.t.Ay49KC)
                })
              : (0, i.jsx)(a.sNh, {
                    id: 'favorite',
                    action: () => {
                        (0, c.J1)({
                            emoji: D,
                            location: v(y({}, N), { object: O.qAy.EMOJI })
                        }),
                            (0, o.$K)(D);
                    },
                    label: E.intl.string(E.t['nNsr6+'])
                })
          : void 0;
}
