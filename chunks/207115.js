n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(157559),
    c = n(969632),
    s = n(649963),
    d = n(406704),
    u = n(576705),
    g = n(486020),
    p = n(690521),
    f = n(652215),
    y = n(985018);

function b(e, t) {
    let { reducedMotion: n } = i.useContext(a.CZY),
        g = (0, d.Id)(t),
        b = (0, l.bG)([u.A], () => u.A.can(f.xBc.MANAGE_MESSAGES, t) && g, [t, g]),
        m = e.reactions.reduce((e, t) => {
            var n;
            return (null == (n = t.count_details) ? void 0 : n.vote) != null ||
                null != e.find((e) => (null != e.id && e.id === t.emoji.id) || e.name === t.emoji.name)
                ? e
                : [...e, t.emoji];
        }, []);
    return !b || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, c.Gh)(e))
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "remove-emoji-reactions",
              label: y.intl.string(y.t["zx/e4P"]),
              leadingAccessory: {
                  type: "icon",
                  icon: a.tjR,
              },
              color: "danger",
              children: m.map((i) => {
                  var l, c, d;
                  return (0, r.jsx)(
                      a.Drp,
                      {
                          id: "remove-emoji-reactions-".concat(null != (l = i.name) ? l : i.id),
                          label: null == i.id ? i.name : ":".concat(i.name, ":"),
                          action: (n) => {
                              n.shiftKey
                                  ? (0, s.Jf)(t.id, e.id, i)
                                  : o.A.show({
                                        title: y.intl.string(y.t["73GqTz"]),
                                        body: y.intl.string(y.t.dmy5bn),
                                        confirmText: y.intl.string(y.t.p89ACt),
                                        confirmVariant: "critical-primary",
                                        cancelText: y.intl.string(y.t.gm1Vej),
                                        onConfirm: () => {
                                            (0, s.Jf)(t.id, e.id, i);
                                        },
                                    });
                          },
                          leadingAccessory: {
                              type: "emoji",
                              emojiId: i.id,
                              src: null == i.id ? p.Ay.getURL(null != (c = i.name) ? c : "") : void 0,
                              animated: i.animated,
                          },
                          icon: (e) => {
                              var t, l;
                              return (0, r.jsx)(
                                  A,
                                  ((t = (function (e) {
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
                                  })({}, e)),
                                  (l = l =
                                      {
                                          reducedMotionEnabled: n.enabled,
                                          emoji: i,
                                      }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r);
                                            }
                                            return n;
                                        })(Object(l)).forEach(function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                                        }),
                                  t),
                              );
                          },
                          dontCloseOnActionIfHoldingShiftKey: !0,
                      },
                      null != (d = i.name) ? d : i.id,
                  );
              }),
          });
}

function A(e) {
    var t;
    let { emoji: n, reducedMotionEnabled: i, className: l = "", isFocused: a = !1 } = e;
    return (0, r.jsx)("img", {
        className: l,
        src:
            null != n.id
                ? g.Ay.getEmojiURL({
                      id: n.id,
                      animated: n.animated && (!i || a),
                      size: 18,
                  })
                : p.Ay.getURL(null != (t = n.name) ? t : ""),
        alt: "",
    });
}
