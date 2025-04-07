n.d(t, { Z: () => j }), n(704826), n(35282);
var r = n(200651),
    i = n(192379),
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
    b = n(453070),
    p = n(926491),
    h = n(378233),
    y = n(981631),
    N = n(388032);
function O(e) {
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
function E(e, t) {
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
        Z = i.useMemo(() => E(O({}, P), { section: S ? y.jXE.EXPRESSION_PICKER : y.jXE.CONTEXT_MENU }), [P, S]),
        I = (0, b.Go)(),
        x = (0, l.e7)([p.Z], () => (t === f.S.STICKER && null != n ? p.Z.getStickerById(n) : null)),
        _ = null != x && I.includes(x.id),
        T = (0, l.e7)([u.ZP], () => {
            if (t === f.S.EMOJI) {
                if (null != n) return u.ZP.getDisambiguatedEmojiContext().getById(n);
                else if (null != j) {
                    var e;
                    return null != (e = v(j)) ? e : v(d.ZP.convertSurrogateToName(j));
                }
            }
        }),
        M = (0, c.C1)(null, T);
    return null != x && t === f.S.STICKER
        ? (0, h.J8)(x) && !(0, h.V9)(x)
            ? null
            : _
              ? (0, r.jsx)(a.sNh, {
                    id: 'unfavorite',
                    action: () => (0, g.hW)(x.id),
                    label: N.NW.string(N.t.XhzKyM)
                })
              : (0, r.jsx)(a.sNh, {
                    id: 'favorite',
                    action: () => {
                        (0, m.cQ)({
                            sticker: x,
                            location: E(O({}, Z), { object: y.qAy.STICKER })
                        }),
                            (0, g.SA)(null == x ? void 0 : x.id);
                    },
                    label: N.NW.string(N.t.kWmiPT)
                })
        : null != T && t === f.S.EMOJI
          ? M
              ? (0, r.jsx)(a.sNh, {
                    id: 'unfavorite',
                    action: () => (0, o.Xe)(T),
                    label: N.NW.string(N.t.Ay49KC)
                })
              : (0, r.jsx)(a.sNh, {
                    id: 'favorite',
                    action: () => {
                        (0, c.J1)({
                            emoji: T,
                            location: E(O({}, Z), { object: y.qAy.EMOJI })
                        }),
                            (0, o.$K)(T);
                    },
                    label: N.NW.string(N.t['nNsr6+'])
                })
          : void 0;
}
