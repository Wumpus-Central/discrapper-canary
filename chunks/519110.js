n.d(t, { Z: () => E }), n(704826), n(35282);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(80932),
    s = n(2052),
    c = n(543241),
    u = n(339085),
    d = n(633302),
    f = n(691251),
    g = n(268350),
    b = n(217590),
    p = n(453070),
    m = n(926491),
    y = n(378233),
    O = n(981631),
    h = n(388032);
function v(e) {
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
        { location: Z } = (0, s.O)(),
        _ = i.useMemo(() => j(v({}, Z), { section: P ? O.jXE.EXPRESSION_PICKER : O.jXE.CONTEXT_MENU }), [Z, P]),
        I = (0, p.Go)(),
        T = (0, l.e7)([m.Z], () => (t === f.S.STICKER && null != n ? m.Z.getStickerById(n) : null)),
        N = null != T && I.includes(T.id),
        w = (0, l.e7)([u.ZP], () => {
            if (t === f.S.EMOJI) {
                if (null != n) return u.ZP.getDisambiguatedEmojiContext().getById(n);
                else if (null != E) {
                    var e;
                    return null != (e = S(E)) ? e : S(d.ZP.convertSurrogateToName(E));
                }
            }
        }),
        M = (0, c.C1)(null, w);
    return null != T && t === f.S.STICKER
        ? (0, y.J8)(T) && !(0, y.V9)(T)
            ? null
            : N
              ? (0, r.jsx)(a.sNh, {
                    id: "unfavorite",
                    action: () => (0, g.hW)(T.id),
                    label: h.intl.string(h.t.XhzKyF),
                })
              : (0, r.jsx)(a.sNh, {
                    id: "favorite",
                    action: () => {
                        (0, b.cQ)({
                            sticker: T,
                            location: j(v({}, _), { object: O.qAy.STICKER }),
                        }),
                            (0, g.SA)(null == T ? void 0 : T.id);
                    },
                    label: h.intl.string(h.t.kWmiPW),
                })
        : null != w && t === f.S.EMOJI
          ? M
              ? (0, r.jsx)(a.sNh, {
                    id: "unfavorite",
                    action: () => (0, o.Xe)(w),
                    label: h.intl.string(h.t.Ay49KA),
                })
              : (0, r.jsx)(a.sNh, {
                    id: "favorite",
                    action: () => {
                        (0, c.J1)({
                            emoji: w,
                            location: j(v({}, _), { object: O.qAy.EMOJI }),
                        }),
                            (0, o.$K)(w);
                    },
                    label: h.intl.string(h.t.nNsr67),
                })
          : void 0;
}
