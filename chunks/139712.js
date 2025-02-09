n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(482241),
    s = n(124165),
    o = n(765305),
    c = n(388032),
    d = n(502328);
function u(e) {
    let { event: t, recurrenceId: n, guildId: u, onRsvp: m, ..._ } = e,
        [h, p] = l.useState(s.KX.SERIES),
        g = (0, s.X2)(t.id, null),
        f = (null == g ? void 0 : g.response) === o.gv.INTERESTED ? o.gv.UNINTERESTED : o.gv.INTERESTED,
        x = f === o.gv.INTERESTED ? c.intl.string(c.t.WtOReX) : c.intl.string(c.t['8MPCVl']);
    return (0, i.jsx)(a.ConfirmModal, {
        ..._,
        header: x,
        confirmText: c.intl.string(c.t.TyCVIi),
        cancelText: c.intl.string(c.t['ETE/oK']),
        onConfirm: () => {
            h === s.KX.SERIES ? r.Z.updateRsvp(t.id, null, u, f) : r.Z.updateRsvp(t.id, n, u, f), null == m || m(), _.onClose();
        },
        confirmButtonColor: a.zxk.Colors.BRAND,
        children: (0, i.jsx)(a.FXm, {
            className: d.responseOptions,
            value: h,
            options: (0, s.pF)(),
            onChange: (e) => p(e.value)
        })
    });
}
function m(e, t, n, l) {
    (0, s.cg)({
        eventId: e,
        recurrenceId: t,
        guildId: n,
        updateRsvp: (t, i, l, a) => r.Z.updateRsvp(e, i, n, a),
        openRsvpPicker: (e, t) => {
            (0, a.ZDy)(() =>
                Promise.resolve((a) =>
                    (0, i.jsx)(u, {
                        ...a,
                        event: e,
                        recurrenceId: t,
                        guildId: n,
                        onRsvp: l
                    })
                )
            );
        },
        onRsvp: l
    });
}
