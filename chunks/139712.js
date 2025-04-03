n.d(t, { Z: () => v }), n(47120);
var r = n(200651),
    l = n(192379),
    s = n(481060),
    a = n(482241),
    i = n(124165),
    o = n(765305),
    c = n(388032),
    u = n(976988);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
    var { event: t, recurrenceId: n, guildId: m, onRsvp: v } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['event', 'recurrenceId', 'guildId', 'onRsvp']);
    let [g, h] = l.useState(i.KX.SERIES),
        j = (0, i.X2)(t.id, null),
        b = (null == j ? void 0 : j.response) === o.gv.INTERESTED ? o.gv.UNINTERESTED : o.gv.INTERESTED,
        N = b === o.gv.INTERESTED ? c.NW.string(c.t.WtOReX) : c.NW.string(c.t['8MPCVl']);
    return (0, r.jsx)(
        s.ConfirmModal,
        p(d({}, f), {
            header: N,
            confirmText: c.NW.string(c.t.TyCVIi),
            cancelText: c.NW.string(c.t['ETE/oK']),
            onConfirm: () => {
                g === i.KX.SERIES ? a.Z.updateRsvp(t.id, null, m, b) : a.Z.updateRsvp(t.id, n, m, b), null == v || v(), f.onClose();
            },
            confirmButtonColor: s.zxk.Colors.BRAND,
            children: (0, r.jsx)(s.FXm, {
                className: u.responseOptions,
                value: g,
                options: (0, i.pF)(),
                onChange: (e) => h(e.value)
            })
        })
    );
}
function v(e, t, n, l) {
    (0, i.cg)({
        eventId: e,
        recurrenceId: t,
        guildId: n,
        updateRsvp: (t, r, l, s) => a.Z.updateRsvp(e, r, n, s),
        openRsvpPicker: (e, t) => {
            (0, s.ZDy)(() =>
                Promise.resolve((s) =>
                    (0, r.jsx)(
                        m,
                        p(d({}, s), {
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
