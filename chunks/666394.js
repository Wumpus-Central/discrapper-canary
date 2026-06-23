n.d(t, { A: () => v });
var i = n(627968),
    r = n(64700),
    a = n(732159),
    l = n(773812),
    s = n(192308),
    o = n(496092),
    d = n(929267),
    u = n(988794),
    p = n(375708),
    c = n(874327);
function E(e) {
    let { event: t, recurrenceId: n, guildId: s, onRsvp: E, ...v } = e,
        [R, S] = r.useState(d.yS.SERIES),
        T = (0, d.TS)(t.id, null),
        C = T?.response === u.Qi.INTERESTED ? u.Qi.UNINTERESTED : u.Qi.INTERESTED,
        f = C === u.Qi.INTERESTED ? p.intl.string(p.t.WtORed) : p.intl.string(p.t["8MPCVr"]);
    return (0, i.jsx)(a.ConfirmModal, {
        ...v,
        title: f,
        confirmText: p.intl.string(p.t.TyCVIq),
        cancelText: p.intl.string(p.t["ETE/oC"]),
        onConfirm: () => {
            R === d.yS.SERIES ? o.default.updateRsvp(t.id, null, s, C) : o.default.updateRsvp(t.id, n, s, C),
                E?.(),
                v.onClose();
        },
        variant: "primary",
        children: (0, i.jsx)("div", {
            className: c.E,
            children: (0, i.jsx)(l.z, { value: R, options: (0, d.ko)(), onChange: (e) => S(e) }),
        }),
    });
}
function v(e, t, n, r) {
    (0, d.QC)({
        eventId: e,
        recurrenceId: t,
        guildId: n,
        updateRsvp: (t, i, r, a) => o.default.updateRsvp(e, i, n, a),
        openRsvpPicker: function (e, t) {
            (0, s.openModalLazy)(() =>
                Promise.resolve((a) => (0, i.jsx)(E, { ...a, event: e, recurrenceId: t, guildId: n, onRsvp: r })),
            );
        },
        onRsvp: r,
    });
}
