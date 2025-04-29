r.d(e, { default: () => s }), r(388685);
var n = r(255367),
    o = r(73800),
    i = r(481060),
    c = r(668781),
    l = r(787014),
    a = r(388032);
let s = function (t) {
    var e,
        r,
        { channelId: s, application: p, onClose: b } = t,
        u = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++) (r = i[n]), !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            }
            return o;
        })(t, ['channelId', 'application', 'onClose']);
    let [f, O] = o.useState(!1),
        y = async () => {
            try {
                O(!0), await l.ZP.removeLinkedLobby(s), b();
            } catch (t) {
                O(!1),
                    c.Z.show({
                        title: a.intl.string(a.t.vFzPFh),
                        body: a.intl.string(a.t['6D5WVl'])
                    });
            }
        };
    return (0, n.jsx)(
        i.ConfirmModal,
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                        })
                    )),
                    n.forEach(function (e) {
                        var n;
                        (n = r[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = n);
                    });
            }
            return t;
        })(
            {
                header: a.intl.string(a.t.JmUENj),
                confirmText: a.intl.string(a.t['cY+Ooa']),
                cancelText: a.intl.string(a.t['ETE/oK']),
                confirmButtonColor: i.zxk.Colors.BRAND,
                onConfirm: y,
                loading: f,
                onClose: b
            },
            u
        )),
        (r = r =
            {
                children: (0, n.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    children: a.intl.format(a.t['6l2osr'], { applicationName: p.name })
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              }),
        e)
    );
};
