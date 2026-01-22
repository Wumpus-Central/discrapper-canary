n.d(t, {
    default: () => f,
}),
    n(896048);
var r = n(627968),
    o = n(64700),
    l = n(158954),
    i = n(817281),
    a = n(964486),
    c = n(47167),
    s = n(954571),
    u = n(652215),
    p = n(985018);
let f = (e) => {
    let { onConfirm: t, channel: n, onClose: f, transitionState: y } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, n = Reflect.ownKeys(e); o < n.length; o++)
                    (r = n[o]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                    (r = n[o]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["onConfirm", "channel", "onClose", "transitionState"]),
        O = (0, c.Ay)(n),
        [d, g] = o.useState(!1);
    return ((0, a.Ay)(() => {
        s.default.track(u.HAw.OPEN_MODAL, {
            type: "Voice channel change confirmation",
            channel_id: n.id,
        });
    }),
    null == O)
        ? null
        : (0, r.jsx)(
              l.Modal,
              (function (e) {
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
              })(
                  {
                      title: p.intl.string(p.t["0LZN5F"]),
                      subtitle: p.intl.format(p.t["vA+uEs"], {
                          channel: O,
                      }),
                      transitionState: y,
                      size: "md",
                      onClose: f,
                      actionBarInput: (0, r.jsx)(l.Sc0, {
                          checked: d,
                          onChange: (e) => {
                              i.Ay.updatedUnsyncedSettings({
                                  disableVoiceChannelChangeAlert: e,
                              }),
                                  g(e);
                          },
                          label: p.intl.string(p.t["JdIQ/Y"]),
                      }),
                      actions: [
                          {
                              variant: "secondary",
                              text: p.intl.string(p.t["ETE/oC"]),
                              onClick: f,
                          },
                          {
                              variant: "primary",
                              text: p.intl.string(p.t["cY+Oob"]),
                              onClick: () => {
                                  t(), f();
                              },
                          },
                      ],
                  },
                  b,
              ),
          );
};
