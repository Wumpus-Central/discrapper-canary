t.d(n, { Z: () => _ }), t(47120);
var i = t(200651),
    l = t(192379),
    a = t(481060),
    r = t(482241),
    d = t(124165),
    s = t(765305),
    o = t(388032),
    c = t(917493);
function u(e) {
    let { event: n, recurrenceId: t, guildId: u, onRsvp: _, ...m } = e,
        [g, p] = l.useState(d.KX.SERIES),
        v = (0, d.X2)(n.id, null),
        h = (null == v ? void 0 : v.response) === s.gv.INTERESTED ? s.gv.UNINTERESTED : s.gv.INTERESTED,
        I = h === s.gv.INTERESTED ? o.intl.string(o.t.WtOReX) : o.intl.string(o.t['8MPCVl']);
    return (0, i.jsx)(a.ConfirmModal, {
        ...m,
        header: I,
        confirmText: o.intl.string(o.t.TyCVIi),
        cancelText: o.intl.string(o.t['ETE/oK']),
        onConfirm: () => {
            g === d.KX.SERIES ? r.Z.updateRsvp(n.id, null, u, h) : r.Z.updateRsvp(n.id, t, u, h), null == _ || _(), m.onClose();
        },
        confirmButtonColor: a.zxk.Colors.BRAND,
        children: (0, i.jsx)(a.FXm, {
            className: c.responseOptions,
            value: g,
            options: (0, d.pF)(),
            onChange: (e) => p(e.value)
        })
    });
}
function _(e, n, t, l) {
    (0, d.cg)({
        eventId: e,
        recurrenceId: n,
        guildId: t,
        updateRsvp: (n, i, l, a) => r.Z.updateRsvp(e, i, t, a),
        openRsvpPicker: (e, n) => {
            (0, a.ZDy)(() =>
                Promise.resolve((a) =>
                    (0, i.jsx)(u, {
                        ...a,
                        event: e,
                        recurrenceId: n,
                        guildId: t,
                        onRsvp: l
                    })
                )
            );
        },
        onRsvp: l
    });
}
