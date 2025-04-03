r.d(e, { default: () => l }), r(47120);
var n = r(200651),
    o = r(192379),
    a = r(481060),
    i = r(841183),
    c = r(388032),
    s = r(336372);
function l(t) {
    var e,
        r,
        { avatarId: l, storageHash: f, avatarDescription: u, onConfirmDelete: p, onClose: b } = t,
        y = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        o = {},
                        a = Object.keys(t);
                    for (n = 0; n < a.length; n++) (r = a[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (n = 0; n < a.length; n++) (r = a[n]), !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            }
            return o;
        })(t, ['avatarId', 'storageHash', 'avatarDescription', 'onConfirmDelete', 'onClose']);
    let [d, O] = o.useState(!1),
        { avatarSrc: m, eventHandlers: v } = (0, i.Z)({
            avatarId: l,
            storageHash: f,
            size: a.EFr.SIZE_120
        }),
        { onMouseEnter: j, onMouseLeave: g } = v;
    return (0, n.jsxs)(
        a.ConfirmModal,
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
                bodyClassName: s.modalContent,
                header: c.NW.string(c.t.rfaLTE),
                confirmText: c.NW.string(c.t.Lh0uy8),
                cancelText: c.NW.string(c.t['ETE/oK']),
                confirmButtonColor: a.zxk.Colors.RED,
                loading: d,
                onConfirm: async () => {
                    O(!0);
                    try {
                        await p();
                    } catch (t) {
                    } finally {
                        O(!1);
                    }
                    b();
                },
                onClose: b
            },
            y
        )),
        (r = r =
            {
                children: [
                    (0, n.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: c.NW.string(c.t.EKmxKS)
                    }),
                    (0, n.jsx)('div', {
                        onMouseEnter: j,
                        onMouseLeave: g,
                        className: s.avatarContainer,
                        children: (0, n.jsx)('img', {
                            src: m,
                            alt: u,
                            className: s.avatar
                        })
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: 'eyebrow',
                        color: 'text-positive',
                        children: c.NW.string(c.t['2Ld8DA'])
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-secondary',
                        children: c.NW.string(c.t.Oe0xqq)
                    })
                ]
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
}
