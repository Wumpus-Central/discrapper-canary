n.d(t, {
    A: () => E,
}),
    n(747238),
    n(812715);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    o = n(397927),
    a = n(554375),
    c = n(212245),
    s = n(822123),
    d = n(508675),
    u = n(7584),
    f = n(60587),
    g = n(631576),
    p = n(891090),
    b = n(256449),
    m = n(679382),
    y = n(378058),
    O = n(652215),
    A = n(985018);

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

function h(e) {
    return u.Ay.getByName(e.replace(/(^:|:$)/g, ""));
}

function E(e) {
    let { type: t, id: n, name: E, isInExpressionPicker: S = !1 } = e,
        { location: _ } = (0, c.p)(),
        D = l.useMemo(
            () =>
                j(v({}, _), {
                    section: S ? O.JJy.EXPRESSION_PICKER : O.JJy.CONTEXT_MENU,
                }),
            [_, S],
        ),
        I = (0, b.ln)(),
        P = (0, i.bG)([m.A], () => (t === f.g.STICKER && null != n ? m.A.getStickerById(n) : null)),
        T = null != P && I.includes(P.id),
        w = (0, i.bG)([d.Ay], () => {
            if (t === f.g.EMOJI) {
                if (null != n) return d.Ay.getDisambiguatedEmojiContext().getById(n);
                else if (null != E) {
                    var e;
                    return null != (e = h(E)) ? e : h(u.Ay.convertSurrogateToName(E));
                }
            }
        }),
        x = (0, s.O7)(null, w);
    return null != P && t === f.g.STICKER
        ? (0, y.Xw)(P) && !(0, y.Y4)(P)
            ? null
            : T
              ? (0, r.jsx)(o.Drp, {
                    id: "unfavorite",
                    action: () => (0, g.vr)(P.id),
                    label: A.intl.string(A.t.XhzKyF),
                })
              : (0, r.jsx)(o.Drp, {
                    id: "favorite",
                    action: () => {
                        (0, p.Dt)({
                            sticker: P,
                            location: j(v({}, D), {
                                object: O.ZSU.STICKER,
                            }),
                        }),
                            (0, g.uK)(null == P ? void 0 : P.id);
                    },
                    label: A.intl.string(A.t.kWmiPW),
                })
        : null != w && t === f.g.EMOJI
          ? x
              ? (0, r.jsx)(o.Drp, {
                    id: "unfavorite",
                    action: () => (0, a.Sw)(w),
                    label: A.intl.string(A.t.Ay49KA),
                })
              : (0, r.jsx)(o.Drp, {
                    id: "favorite",
                    action: () => {
                        (0, s.C5)({
                            emoji: w,
                            location: j(v({}, D), {
                                object: O.ZSU.EMOJI,
                            }),
                        }),
                            (0, a.V4)(w);
                    },
                    label: A.intl.string(A.t.nNsr67),
                })
          : void 0;
}
