(n.d(t, { Z: () => f }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(481060),
    a = n(482241),
    s = n(124165),
    c = n(765305),
    o = n(388032),
    u = n(976988);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function p(e, t) {
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
function m(e) {
    var { event: t, recurrenceId: n, guildId: m, onRsvp: f } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
            }
            return l;
        })(e, ['event', 'recurrenceId', 'guildId', 'onRsvp']);
    let [g, b] = l.useState(s.KX.SERIES),
        h = (0, s.X2)(t.id, null),
        j = (null == h ? void 0 : h.response) === c.gv.INTERESTED ? c.gv.UNINTERESTED : c.gv.INTERESTED,
        O = j === c.gv.INTERESTED ? o.intl.string(o.t.WtOReX) : o.intl.string(o.t['8MPCVl']);
    return (0, r.jsx)(
        i.ConfirmModal,
        p(d({}, v), {
            header: O,
            confirmText: o.intl.string(o.t.TyCVIi),
            cancelText: o.intl.string(o.t['ETE/oK']),
            onConfirm: () => {
                (g === s.KX.SERIES ? a.Z.updateRsvp(t.id, null, m, j) : a.Z.updateRsvp(t.id, n, m, j), null == f || f(), v.onClose());
            },
            confirmButtonColor: i.zxk.Colors.BRAND,
            children: (0, r.jsx)(i.FXm, {
                className: u.responseOptions,
                value: g,
                options: (0, s.pF)(),
                onChange: (e) => b(e.value)
            })
        })
    );
}
function f(e, t, n, l) {
    (0, s.cg)({
        eventId: e,
        recurrenceId: t,
        guildId: n,
        updateRsvp: (t, r, l, i) => a.Z.updateRsvp(e, r, n, i),
        openRsvpPicker: (e, t) => {
            (0, i.ZDy)(() =>
                Promise.resolve((i) =>
                    (0, r.jsx)(
                        m,
                        p(d({}, i), {
                            event: e,
                            recurrenceId: t,
                            guildId: n,
                            onRsvp: l
                        })
                    )
                )
            );
        },
        onRsvp: l
    });
}
