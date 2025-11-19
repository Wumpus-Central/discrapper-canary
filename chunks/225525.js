r.d(e, { default: () => f }), r(388685);
var n = r(54381),
    o = r(473749),
    a = r(755721),
    i = r(481060),
    c = r(841183),
    s = r(388032),
    l = r(848000);
function f(t) {
    var e,
        r,
        { avatarId: f, storageHash: u, avatarDescription: p, onConfirmDelete: b, onClose: y } = t,
        d = (function (t, e) {
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
                for (n = 0; n < a.length; n++)
                    (r = a[n]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            }
            return o;
        })(t, ["avatarId", "storageHash", "avatarDescription", "onConfirmDelete", "onClose"]);
    let [O, m] = o.useState(!1),
        { avatarSrc: v, eventHandlers: j } = (0, c.Z)({
            avatarId: f,
            storageHash: u,
            size: i.EFr.SIZE_120,
        }),
        { onMouseEnter: g, onMouseLeave: x } = j;
    return (0, n.jsxs)(
        i.ConfirmModal,
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                        }),
                    )),
                    n.forEach(function (e) {
                        var n;
                        (n = r[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[e] = n);
                    });
            }
            return t;
        })(
            {
                bodyClassName: l.modalContent,
                header: s.intl.string(s.t.rfaLTH),
                confirmText: s.intl.string(s.t.Lh0uyy),
                cancelText: s.intl.string(s.t["ETE/oC"]),
                confirmButtonColor: a.zx.Colors.RED,
                loading: O,
                onConfirm: async () => {
                    m(!0);
                    try {
                        await b();
                    } catch (t) {
                    } finally {
                        m(!1);
                    }
                    y();
                },
                onClose: y,
            },
            d,
        )),
        (r = r =
            {
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: s.intl.string(s.t.EKmxKc),
                    }),
                    (0, n.jsx)("div", {
                        onMouseEnter: g,
                        onMouseLeave: x,
                        className: l.avatarContainer,
                        children: (0, n.jsx)("img", {
                            src: v,
                            alt: p,
                            className: l.avatar,
                        }),
                    }),
                    (0, n.jsx)(i.Text, {
                        variant: "eyebrow",
                        color: "text-feedback-positive",
                        children: s.intl.string(s.t["2Ld8DM"]),
                    }),
                    (0, n.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-secondary",
                        children: s.intl.string(s.t.Oe0xqt),
                    }),
                ],
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
        e),
    );
}
