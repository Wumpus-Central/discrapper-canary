n.d(e, { Z: () => P }), n(757143), n(301563);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    l = n(481060),
    a = n(80932),
    c = n(2052),
    u = n(543241),
    s = n(339085),
    b = n(633302),
    d = n(691251),
    p = n(268350),
    g = n(217590),
    f = n(453070),
    O = n(926491),
    y = n(378233),
    j = n(981631),
    S = n(388032);
function v(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r);
            });
    }
    return t;
}
function E(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function N(t) {
    return b.ZP.getByName(t.replace(/(^:|:$)/g, ''));
}
function P(t) {
    let { type: e, id: n, name: P, isInExpressionPicker: h = !1 } = t,
        { location: m } = (0, c.O)(),
        I = i.useMemo(() => E(v({}, m), { section: h ? j.jXE.EXPRESSION_PICKER : j.jXE.CONTEXT_MENU }), [m, h]),
        w = (0, f.Go)(),
        C = (0, o.e7)([O.Z], () => (e === d.S.STICKER && null != n ? O.Z.getStickerById(n) : null)),
        k = null != C && w.includes(C.id),
        x = (0, o.e7)([s.ZP], () => {
            if (e === d.S.EMOJI) {
                if (null != n) return s.ZP.getDisambiguatedEmojiContext().getById(n);
                else if (null != P) {
                    var t;
                    return null != (t = N(P)) ? t : N(b.ZP.convertSurrogateToName(P));
                }
            }
        }),
        A = (0, u.C1)(null, x);
    return null != C && e === d.S.STICKER
        ? (0, y.J8)(C) && !(0, y.V9)(C)
            ? null
            : k
              ? (0, r.jsx)(l.sNh, {
                    id: 'unfavorite',
                    action: () => (0, p.hW)(C.id),
                    label: S.NW.string(S.t.XhzKyM)
                })
              : (0, r.jsx)(l.sNh, {
                    id: 'favorite',
                    action: () => {
                        (0, g.cQ)({
                            sticker: C,
                            location: E(v({}, I), { object: j.qAy.STICKER })
                        }),
                            (0, p.SA)(null == C ? void 0 : C.id);
                    },
                    label: S.NW.string(S.t.kWmiPT)
                })
        : null != x && e === d.S.EMOJI
          ? A
              ? (0, r.jsx)(l.sNh, {
                    id: 'unfavorite',
                    action: () => (0, a.Xe)(x),
                    label: S.NW.string(S.t.Ay49KC)
                })
              : (0, r.jsx)(l.sNh, {
                    id: 'favorite',
                    action: () => {
                        (0, u.J1)({
                            emoji: x,
                            location: E(v({}, I), { object: j.qAy.EMOJI })
                        }),
                            (0, a.$K)(x);
                    },
                    label: S.NW.string(S.t['nNsr6+'])
                })
          : void 0;
}
