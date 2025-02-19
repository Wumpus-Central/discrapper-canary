r.d(t, { default: () => s }), r(47120);
var n = r(200651),
    o = r(192379),
    c = r(481060),
    i = r(668781),
    a = r(787014),
    l = r(388032);
let s = function (e) {
    var t,
        r,
        { channelId: s, application: p, onClose: b } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++) (r = c[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['channelId', 'application', 'onClose']);
    let [f, O] = o.useState(!1),
        y = async () => {
            try {
                O(!0), await a.ZP.removeLinkedLobby(s), b();
            } catch (e) {
                O(!1),
                    i.Z.show({
                        title: l.NW.string(l.t.vFzPFh),
                        body: l.NW.string(l.t['6D5WVl'])
                    });
            }
        };
    return (0, n.jsx)(
        c.ConfirmModal,
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
                header: l.NW.string(l.t.JmUENj),
                confirmText: l.NW.string(l.t['cY+Ooa']),
                cancelText: l.NW.string(l.t['ETE/oK']),
                confirmButtonColor: c.zxk.Colors.BRAND,
                onConfirm: y,
                loading: f,
                onClose: b
            },
            u
        )),
        (r = r =
            {
                children: (0, n.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: l.NW.format(l.t['6l2osr'], { applicationName: p.name })
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
