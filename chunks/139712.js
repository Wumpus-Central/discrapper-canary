(n.d(t, { Z: () => v }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(755721),
    a = n(481060),
    s = n(482241),
    c = n(124165),
    o = n(765305),
    u = n(388032),
    d = n(976988);
function p(e) {
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
function m(e, t) {
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
function f(e) {
    var { event: t, recurrenceId: n, guildId: f, onRsvp: v } = e,
        g = (function (e, t) {
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
    let [b, h] = l.useState(c.KX.SERIES),
        j = (0, c.X2)(t.id, null),
        O = (null == j ? void 0 : j.response) === o.gv.INTERESTED ? o.gv.UNINTERESTED : o.gv.INTERESTED,
        y = O === o.gv.INTERESTED ? u.intl.string(u.t.WtOReX) : u.intl.string(u.t['8MPCVl']);
    return (0, r.jsx)(
        a.ConfirmModal,
        m(p({}, g), {
            header: y,
            confirmText: u.intl.string(u.t.TyCVIi),
            cancelText: u.intl.string(u.t['ETE/oK']),
            onConfirm: () => {
                (b === c.KX.SERIES ? s.Z.updateRsvp(t.id, null, f, O) : s.Z.updateRsvp(t.id, n, f, O), null == v || v(), g.onClose());
            },
            confirmButtonColor: i.zx.Colors.BRAND,
            children: (0, r.jsx)(a.FXm, {
                className: d.responseOptions,
                value: b,
                options: (0, c.pF)(),
                onChange: (e) => h(e.value)
            })
        })
    );
}
function v(e, t, n, l) {
    (0, c.cg)({
        eventId: e,
        recurrenceId: t,
        guildId: n,
        updateRsvp: (t, r, l, i) => s.Z.updateRsvp(e, r, n, i),
        openRsvpPicker: (e, t) => {
            (0, a.ZDy)(() =>
                Promise.resolve((i) =>
                    (0, r.jsx)(
                        f,
                        m(p({}, i), {
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
