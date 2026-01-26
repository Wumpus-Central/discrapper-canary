n.d(t, {
    A: () => E,
}),
    n(747238),
    n(812715);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(554375),
    c = n(212245),
    s = n(822123),
    d = n(508675),
    u = n(7584),
    g = n(60587),
    p = n(631576),
    f = n(891090),
    y = n(256449),
    b = n(679382),
    A = n(378058),
    m = n(652215),
    O = n(985018);

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
        D = i.useMemo(
            () =>
                j(v({}, _), {
                    section: S ? m.JJy.EXPRESSION_PICKER : m.JJy.CONTEXT_MENU,
                }),
            [_, S],
        ),
        P = (0, y.ln)(),
        T = (0, l.bG)([b.A], () => (t === g.g.STICKER && null != n ? b.A.getStickerById(n) : null)),
        I = null != T && P.includes(T.id),
        x = (0, l.bG)([d.Ay], () => {
            if (t === g.g.EMOJI) {
                if (null != n) return d.Ay.getDisambiguatedEmojiContext().getById(n);
                else if (null != E) {
                    var e;
                    return null != (e = h(E)) ? e : h(u.Ay.convertSurrogateToName(E));
                }
            }
        }),
        w = (0, s.O7)(null, x);
    return null != T && t === g.g.STICKER
        ? (0, A.Xw)(T) && !(0, A.Y4)(T)
            ? null
            : I
              ? (0, r.jsx)(a.Drp, {
                    id: "unfavorite",
                    action: () => (0, p.vr)(T.id),
                    label: O.intl.string(O.t.XhzKyF),
                    leadingAccessory: {
                        type: "icon",
                        icon: a.Gg5,
                    },
                })
              : (0, r.jsx)(a.Drp, {
                    id: "favorite",
                    action: () => {
                        (0, f.Dt)({
                            sticker: T,
                            location: j(v({}, D), {
                                object: m.ZSU.STICKER,
                            }),
                        }),
                            (0, p.uK)(null == T ? void 0 : T.id);
                    },
                    label: O.intl.string(O.t.kWmiPW),
                    leadingAccessory: {
                        type: "icon",
                        icon: a.Gg5,
                    },
                })
        : null != x && t === g.g.EMOJI
          ? w
              ? (0, r.jsx)(a.Drp, {
                    id: "unfavorite",
                    action: () => (0, o.Sw)(x),
                    label: O.intl.string(O.t.Ay49KA),
                    leadingAccessory: {
                        type: "icon",
                        icon: a.Gg5,
                    },
                })
              : (0, r.jsx)(a.Drp, {
                    id: "favorite",
                    action: () => {
                        (0, s.C5)({
                            emoji: x,
                            location: j(v({}, D), {
                                object: m.ZSU.EMOJI,
                            }),
                        }),
                            (0, o.V4)(x);
                    },
                    label: O.intl.string(O.t.nNsr67),
                    leadingAccessory: {
                        type: "icon",
                        icon: a.Gg5,
                    },
                })
          : void 0;
}
