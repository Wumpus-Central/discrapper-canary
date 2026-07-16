n.d(t, { A: () => v });
var i = n(627968),
    r = n(64700),
    a = n(732159),
    l = n(144228),
    s = n(192308),
    o = n(496092),
    d = n(929267),
    u = n(988794),
    c = n(375708),
    p = n(874327);
function E(e) {
    let { event: t, recurrenceId: n, guildId: s, onRsvp: E, ...v } = e,
        [R, S] = r.useState(d.yS.SERIES),
        T = (0, d.TS)(t.id, null),
        f = T?.response === u.Qi.INTERESTED ? u.Qi.UNINTERESTED : u.Qi.INTERESTED,
        C = f === u.Qi.INTERESTED ? c.intl.string(c.t.WtORed) : c.intl.string(c.t["8MPCVr"]);
    return (0, i.jsx)(a.ConfirmModal, {
        ...v,
        title: C,
        confirmText: c.intl.string(c.t.TyCVIq),
        cancelText: c.intl.string(c.t["ETE/oC"]),
        onConfirm: function () {
            R === d.yS.SERIES ? o.default.updateRsvp(t.id, null, s, f) : o.default.updateRsvp(t.id, n, s, f),
                E?.(),
                v.onClose();
        },
        variant: "primary",
        children: (0, i.jsx)("div", {
            className: p.E,
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
