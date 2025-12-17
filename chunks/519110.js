n.d(t, { Z: () => E }), n(704826), n(35282);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(80932),
    c = n(2052),
    s = n(543241),
    u = n(339085),
    d = n(633302),
    f = n(691251),
    g = n(268350),
    b = n(217590),
    p = n(453070),
    O = n(926491),
    y = n(378233),
    m = n(981631),
    v = n(388032);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
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
function S(e) {
    return d.ZP.getByName(e.replace(/(^:|:$)/g, ""));
}
function E(e) {
    let { type: t, id: n, name: E, isInExpressionPicker: P = !1 } = e,
        { location: T } = (0, c.O)(),
        _ = i.useMemo(() => j(h({}, T), { section: P ? m.jXE.EXPRESSION_PICKER : m.jXE.CONTEXT_MENU }), [T, P]),
        I = (0, p.Go)(),
        Z = (0, l.e7)([O.Z], () => (t === f.S.STICKER && null != n ? O.Z.getStickerById(n) : null)),
        w = null != Z && I.includes(Z.id),
        A = (0, l.e7)([u.ZP], () => {
            if (t === f.S.EMOJI) {
                if (null != n) return u.ZP.getDisambiguatedEmojiContext().getById(n);
                else if (null != E) {
                    var e;
                    return null != (e = S(E)) ? e : S(d.ZP.convertSurrogateToName(E));
                }
            }
        }),
        N = (0, s.C1)(null, A);
    return null != Z && t === f.S.STICKER
        ? (0, y.J8)(Z) && !(0, y.V9)(Z)
            ? null
            : w
              ? (0, r.jsx)(o.sNh, {
                    id: "unfavorite",
                    action: () => (0, g.hW)(Z.id),
                    label: v.intl.string(v.t.XhzKyF),
                })
              : (0, r.jsx)(o.sNh, {
                    id: "favorite",
                    action: () => {
                        (0, b.cQ)({
                            sticker: Z,
                            location: j(h({}, _), { object: m.qAy.STICKER }),
                        }),
                            (0, g.SA)(null == Z ? void 0 : Z.id);
                    },
                    label: v.intl.string(v.t.kWmiPW),
                })
        : null != A && t === f.S.EMOJI
          ? N
              ? (0, r.jsx)(o.sNh, {
                    id: "unfavorite",
                    action: () => (0, a.Xe)(A),
                    label: v.intl.string(v.t.Ay49KA),
                })
              : (0, r.jsx)(o.sNh, {
                    id: "favorite",
                    action: () => {
                        (0, s.J1)({
                            emoji: A,
                            location: j(h({}, _), { object: m.qAy.EMOJI }),
                        }),
                            (0, a.$K)(A);
                    },
                    label: v.intl.string(v.t.nNsr67),
                })
          : void 0;
}
