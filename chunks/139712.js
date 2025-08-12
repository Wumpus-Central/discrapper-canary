n.d(t, { Z: () => b }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(755721),
    a = n(481060),
    s = n(482241),
    l = n(124165),
    c = n(765305),
    u = n(388032),
    d = n(907052);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    var { event: t, recurrenceId: n, guildId: f, onRsvp: p } = e,
        g = m(e, ["event", "recurrenceId", "guildId", "onRsvp"]);
    let [E, b] = i.useState(l.KX.SERIES),
        y = (0, l.X2)(t.id, null),
        O = (null == y ? void 0 : y.response) === c.gv.INTERESTED ? c.gv.UNINTERESTED : c.gv.INTERESTED,
        v = O === c.gv.INTERESTED ? u.intl.string(u.t.WtOReX) : u.intl.string(u.t["8MPCVl"]),
        I = () => {
            E === l.KX.SERIES ? s.Z.updateRsvp(t.id, null, f, O) : s.Z.updateRsvp(t.id, n, f, O),
                null == p || p(),
                g.onClose();
        };
    return (0, r.jsx)(
        a.ConfirmModal,
        h(_({}, g), {
            header: v,
            confirmText: u.intl.string(u.t.TyCVIi),
            cancelText: u.intl.string(u.t["ETE/oK"]),
            onConfirm: I,
            confirmButtonColor: o.zx.Colors.BRAND,
            children: (0, r.jsx)(a.FXm, {
                className: d.responseOptions,
                value: E,
                options: (0, l.pF)(),
                onChange: (e) => b(e.value),
            }),
        }),
    );
}
function b(e, t, n, i) {
    let o = (e, t) => {
        (0, a.ZDy)(() =>
            Promise.resolve((o) =>
                (0, r.jsx)(
                    E,
                    h(_({}, o), {
                        event: e,
                        recurrenceId: t,
                        guildId: n,
                        onRsvp: i,
                    }),
                ),
            ),
        );
    };
    (0, l.cg)({
        eventId: e,
        recurrenceId: t,
        guildId: n,
        updateRsvp: (t, r, i, o) => s.Z.updateRsvp(e, r, n, o),
        openRsvpPicker: o,
        onRsvp: i,
    });
}
