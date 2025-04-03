r.d(t, { default: () => u }), r(47120);
var n = r(200651),
    c = r(192379),
    o = r(481060),
    i = r(693546),
    a = r(246364),
    s = r(388032);
let u = (e) => {
    var t, r;
    let { guildId: u, userId: p, guildJoinRequestId: l, onConfirm: b, onError: O, modalProps: f } = e,
        [y, j] = c.useState(),
        g = async () => {
            try {
                await i.Z.updateGuildJoinRequest(u, p, l, a.wB.REJECTED, y), null == b || b();
            } catch (e) {
                null == O || O();
            }
        };
    return (0, n.jsx)(
        o.ConfirmModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                header: s.NW.string(s.t['mFP/q6']),
                cancelText: s.NW.string(s.t['ETE/oK']),
                confirmText: s.NW.string(s.t.hDtbs7),
                onConfirm: g
            },
            f
        )),
        (r = r =
            {
                children: (0, n.jsx)(o.Kx8, {
                    value: y,
                    onChange: j,
                    maxLength: 160
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
};
