l.d(n, {
    Z: function () {
        return m;
    }
}),
    l(47120);
var t = l(200651),
    i = l(192379),
    s = l(481060),
    a = l(482241),
    r = l(124165),
    o = l(765305),
    u = l(388032),
    c = l(145655);
function d(e) {
    let { event: n, recurrenceId: l, guildId: d, onRsvp: m, ...v } = e,
        [p, C] = i.useState(r.KX.SERIES),
        N = (0, r.X2)(n.id, null),
        h = (null == N ? void 0 : N.response) === o.gv.INTERESTED ? o.gv.UNINTERESTED : o.gv.INTERESTED,
        g = h === o.gv.INTERESTED ? u.intl.string(u.t.WtOReX) : u.intl.string(u.t['8MPCVl']);
    return (0, t.jsx)(s.ConfirmModal, {
        ...v,
        header: g,
        confirmText: u.intl.string(u.t.TyCVIi),
        cancelText: u.intl.string(u.t['ETE/oK']),
        onConfirm: () => {
            p === r.KX.SERIES ? a.Z.updateRsvp(n.id, null, d, h) : a.Z.updateRsvp(n.id, l, d, h), null == m || m(), v.onClose();
        },
        confirmButtonColor: s.Button.Colors.BRAND,
        children: (0, t.jsx)(s.RadioGroup, {
            className: c.responseOptions,
            value: p,
            options: (0, r.pF)(),
            onChange: (e) => C(e.value)
        })
    });
}
function m(e, n, l, i) {
    (0, r.cg)({
        eventId: e,
        recurrenceId: n,
        guildId: l,
        updateRsvp: (n, t, i, s) => a.Z.updateRsvp(e, t, l, s),
        openRsvpPicker: (e, n) => {
            (0, s.openModalLazy)(() =>
                Promise.resolve((s) =>
                    (0, t.jsx)(d, {
                        ...s,
                        event: e,
                        recurrenceId: n,
                        guildId: l,
                        onRsvp: i
                    })
                )
            );
        },
        onRsvp: i
    });
}
