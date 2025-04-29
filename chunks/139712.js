n.d(t, { Z: () => v }), n(388685);
var l = n(255367),
    r = n(73800),
    s = n(481060),
    a = n(482241),
    i = n(124165),
    o = n(765305),
    c = n(388032),
    u = n(976988);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
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
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    var { event: t, recurrenceId: n, guildId: m, onRsvp: v } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        s = Object.keys(e);
                    for (l = 0; l < s.length; l++) (n = s[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (l = 0; l < s.length; l++) (n = s[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['event', 'recurrenceId', 'guildId', 'onRsvp']);
    let [g, h] = r.useState(i.KX.SERIES),
        j = (0, i.X2)(t.id, null),
        b = (null == j ? void 0 : j.response) === o.gv.INTERESTED ? o.gv.UNINTERESTED : o.gv.INTERESTED,
        y = b === o.gv.INTERESTED ? c.intl.string(c.t.WtOReX) : c.intl.string(c.t['8MPCVl']);
    return (0, l.jsx)(
        s.ConfirmModal,
        p(d({}, f), {
            header: y,
            confirmText: c.intl.string(c.t.TyCVIi),
            cancelText: c.intl.string(c.t['ETE/oK']),
            onConfirm: () => {
                g === i.KX.SERIES ? a.Z.updateRsvp(t.id, null, m, b) : a.Z.updateRsvp(t.id, n, m, b), null == v || v(), f.onClose();
            },
            confirmButtonColor: s.zxk.Colors.BRAND,
            children: (0, l.jsx)(s.FXm, {
                className: u.responseOptions,
                value: g,
                options: (0, i.pF)(),
                onChange: (e) => h(e.value)
            })
        })
    );
}
function v(e, t, n, r) {
    (0, i.cg)({
        eventId: e,
        recurrenceId: t,
        guildId: n,
        updateRsvp: (t, l, r, s) => a.Z.updateRsvp(e, l, n, s),
        openRsvpPicker: (e, t) => {
            (0, s.ZDy)(() =>
                Promise.resolve((s) =>
                    (0, l.jsx)(
                        m,
                        p(d({}, s), {
                            event: e,
                            recurrenceId: t,
                            guildId: n,
                            onRsvp: r
                        })
                    )
                )
            );
        },
        onRsvp: r
    });
}
