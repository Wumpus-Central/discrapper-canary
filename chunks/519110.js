n.d(t, { Z: () => E }), n(704826), n(35282);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(80932),
    s = n(2052),
    c = n(543241),
    u = n(339085),
    d = n(633302),
    f = n(691251),
    g = n(268350),
    b = n(217590),
    p = n(453070),
    m = n(926491),
    O = n(378233),
    v = n(981631),
    y = n(388032);
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
        { location: I } = (0, s.O)(),
        _ = i.useMemo(() => j(h({}, I), { section: P ? v.jXE.EXPRESSION_PICKER : v.jXE.CONTEXT_MENU }), [I, P]),
        T = (0, p.Go)(),
        Z = (0, l.e7)([m.Z], () => (t === f.S.STICKER && null != n ? m.Z.getStickerById(n) : null)),
        N = null != Z && T.includes(Z.id),
        w = (0, l.e7)([u.ZP], () => {
            if (t === f.S.EMOJI) {
                if (null != n) return u.ZP.getDisambiguatedEmojiContext().getById(n);
                else if (null != E) {
                    var e;
                    return null != (e = S(E)) ? e : S(d.ZP.convertSurrogateToName(E));
                }
            }
        }),
        A = (0, c.C1)(null, w);
    return null != Z && t === f.S.STICKER
        ? (0, O.J8)(Z) && !(0, O.V9)(Z)
            ? null
            : N
              ? (0, r.jsx)(o.sNh, {
                    id: "unfavorite",
                    action: () => (0, g.hW)(Z.id),
                    label: y.intl.string(y.t.XhzKyF),
                })
              : (0, r.jsx)(o.sNh, {
                    id: "favorite",
                    action: () => {
                        (0, b.cQ)({
                            sticker: Z,
                            location: j(h({}, _), { object: v.qAy.STICKER }),
                        }),
                            (0, g.SA)(null == Z ? void 0 : Z.id);
                    },
                    label: y.intl.string(y.t.kWmiPW),
                })
        : null != w && t === f.S.EMOJI
          ? A
              ? (0, r.jsx)(o.sNh, {
                    id: "unfavorite",
                    action: () => (0, a.Xe)(w),
                    label: y.intl.string(y.t.Ay49KA),
                })
              : (0, r.jsx)(o.sNh, {
                    id: "favorite",
                    action: () => {
                        (0, c.J1)({
                            emoji: w,
                            location: j(h({}, _), { object: v.qAy.EMOJI }),
                        }),
                            (0, a.$K)(w);
                    },
                    label: y.intl.string(y.t.nNsr67),
                })
          : void 0;
}
