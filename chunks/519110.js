n.d(t, { Z: () => S }), n(704826), n(35282);
var r = n(951288),
    i = n(647438),
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
    O = n(926491),
    y = n(378233),
    m = n(981631),
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
function E(e) {
    return d.ZP.getByName(e.replace(/(^:|:$)/g, ""));
}
function S(e) {
    let { type: t, id: n, name: S, isInExpressionPicker: P = !1 } = e,
        { location: _ } = (0, s.O)(),
        T = i.useMemo(() => j(v({}, _), { section: P ? m.jXE.EXPRESSION_PICKER : m.jXE.CONTEXT_MENU }), [_, P]),
        Z = (0, p.Go)(),
        w = (0, l.e7)([O.Z], () => (t === f.S.STICKER && null != n ? O.Z.getStickerById(n) : null)),
        I = null != w && Z.includes(w.id),
        N = (0, l.e7)([u.ZP], () => {
            if (t === f.S.EMOJI) {
                if (null != n) return u.ZP.getDisambiguatedEmojiContext().getById(n);
                else if (null != S) {
                    var e;
                    return null != (e = E(S)) ? e : E(d.ZP.convertSurrogateToName(S));
                }
            }
        }),
        A = (0, c.C1)(null, N);
    return null != w && t === f.S.STICKER
        ? (0, y.J8)(w) && !(0, y.V9)(w)
            ? null
            : I
              ? (0, r.jsx)(a.sNh, {
                    id: "unfavorite",
                    action: () => (0, g.hW)(w.id),
                    label: h.intl.string(h.t.XhzKyF),
                })
              : (0, r.jsx)(a.sNh, {
                    id: "favorite",
                    action: () => {
                        (0, b.cQ)({
                            sticker: w,
                            location: j(v({}, T), { object: m.qAy.STICKER }),
                        }),
                            (0, g.SA)(null == w ? void 0 : w.id);
                    },
                    label: h.intl.string(h.t.kWmiPW),
                })
        : null != N && t === f.S.EMOJI
          ? A
              ? (0, r.jsx)(a.sNh, {
                    id: "unfavorite",
                    action: () => (0, o.Xe)(N),
                    label: h.intl.string(h.t.Ay49KA),
                })
              : (0, r.jsx)(a.sNh, {
                    id: "favorite",
                    action: () => {
                        (0, c.J1)({
                            emoji: N,
                            location: j(v({}, T), { object: m.qAy.EMOJI }),
                        }),
                            (0, o.$K)(N);
                    },
                    label: h.intl.string(h.t.nNsr67),
                })
          : void 0;
}
