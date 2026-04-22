t.d(l, { A: () => v });
var n = t(627968),
    s = t(64700),
    i = t(732159),
    a = t(954197),
    r = t(192308),
    c = t(496092),
    d = t(929267),
    u = t(988794),
    o = t(985018),
    m = t(874327);
function x(e) {
    let { event: l, recurrenceId: t, guildId: r, onRsvp: x, ...v } = e,
        [h, N] = s.useState(d.yS.SERIES),
        g = (0, d.TS)(l.id, null),
        p = g?.response === u.Qi.INTERESTED ? u.Qi.UNINTERESTED : u.Qi.INTERESTED,
        j = p === u.Qi.INTERESTED ? o.intl.string(o.t.WtORed) : o.intl.string(o.t["8MPCVr"]);
    return (0, n.jsx)(i.ConfirmModal, {
        ...v,
        title: j,
        confirmText: o.intl.string(o.t.TyCVIq),
        cancelText: o.intl.string(o.t["ETE/oC"]),
        onConfirm: () => {
            h === d.yS.SERIES ? c.A.updateRsvp(l.id, null, r, p) : c.A.updateRsvp(l.id, t, r, p), x?.(), v.onClose();
        },
        variant: "primary",
        children: (0, n.jsx)("div", {
            className: m.E,
            children: (0, n.jsx)(a.z, { value: h, options: (0, d.ko)(), onChange: (e) => N(e) }),
        }),
    });
}
function v(e, l, t, s) {
    (0, d.QC)({
        eventId: e,
        recurrenceId: l,
        guildId: t,
        updateRsvp: (l, n, s, i) => c.A.updateRsvp(e, n, t, i),
        openRsvpPicker: (e, l) => {
            (0, r.openModalLazy)(() =>
                Promise.resolve((i) => (0, n.jsx)(x, { ...i, event: e, recurrenceId: l, guildId: t, onRsvp: s })),
            );
        },
        onRsvp: s,
    });
}
