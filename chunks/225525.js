r.d(e, { default: () => l }), r(47120);
var n = r(200651),
    o = r(192379),
    a = r(481060),
    c = r(841183),
    i = r(388032),
    s = r(182300);
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
        { avatarSrc: g, eventHandlers: j } = (0, c.Z)({
            avatarId: l,
            storageHash: f,
            size: a.EFr.SIZE_120
        }),
        { onMouseEnter: m, onMouseLeave: v } = j,
        x = 'en-US' === i.NW.currentLocale || 'en-GB' === i.NW.currentLocale;
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
                header: x ? i.NW.string(i.t.rfaLTE) : i.NW.string(i.t.C8qfkp),
                confirmText: x ? i.NW.string(i.t.Lh0uy8) : i.NW.string(i.t.lAU5jI),
                cancelText: i.NW.string(i.t['ETE/oK']),
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
                        children: x ? i.NW.string(i.t.EKmxKS) : i.NW.string(i.t.CbTIEh)
                    }),
                    (0, n.jsx)('div', {
                        onMouseEnter: m,
                        onMouseLeave: v,
                        className: s.avatarContainer,
                        children: (0, n.jsx)('img', {
                            src: g,
                            alt: u,
                            className: s.avatar
                        })
                    }),
                    x &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(a.Text, {
                                    variant: 'eyebrow',
                                    color: 'text-positive',
                                    children: i.NW.string(i.t['2Ld8DA'])
                                }),
                                (0, n.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-secondary',
                                    children: i.NW.string(i.t.Oe0xqq)
                                })
                            ]
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
