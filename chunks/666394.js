n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(421380),
    s = n(397927),
    o = n(496092),
    l = n(929267),
    c = n(988794),
    u = n(985018),
    d = n(217528);

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

function p(e) {
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

function _(e, t) {
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
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = g(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function E(e) {
    let { event: t, recurrenceId: n, guildId: f, onRsvp: _ } = e,
        g = m(e, ["event", "recurrenceId", "guildId", "onRsvp"]),
        [E, b] = i.useState(l.yS.SERIES),
        y = (0, l.TS)(t.id, null),
        O = (null == y ? void 0 : y.response) === c.Qi.INTERESTED ? c.Qi.UNINTERESTED : c.Qi.INTERESTED,
        A = O === c.Qi.INTERESTED ? u.intl.string(u.t.WtORed) : u.intl.string(u.t["8MPCVr"]),
        v = () => {
            E === l.yS.SERIES ? o.A.updateRsvp(t.id, null, f, O) : o.A.updateRsvp(t.id, n, f, O),
                null == _ || _(),
                g.onClose();
        };
    return (0, r.jsx)(
        s.VoidConfirmModal,
        h(p({}, g), {
            header: A,
            confirmText: u.intl.string(u.t.TyCVIq),
            cancelText: u.intl.string(u.t["ETE/oC"]),
            onConfirm: v,
            confirmButtonColor: a.$n.Colors.BRAND,
            children: (0, r.jsx)("div", {
                className: d.E,
                children: (0, r.jsx)(s.z6M, {
                    value: E,
                    options: (0, l.ko)(),
                    onChange: (e) => b(e),
                }),
            }),
        }),
    );
}

function b(e, t, n, i) {
    let a = (e, t) => {
        (0, s.mMO)(() =>
            Promise.resolve((a) =>
                (0, r.jsx)(
                    E,
                    h(p({}, a), {
                        event: e,
                        recurrenceId: t,
                        guildId: n,
                        onRsvp: i,
                    }),
                ),
            ),
        );
    };
    (0, l.QC)({
        eventId: e,
        recurrenceId: t,
        guildId: n,
        updateRsvp: (t, r, i, a) => o.A.updateRsvp(e, r, n, a),
        openRsvpPicker: a,
        onRsvp: i,
    });
}
