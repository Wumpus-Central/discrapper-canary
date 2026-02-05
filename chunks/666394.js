l.d(t, { A: () => x });
var n = l(627968),
    s = l(64700),
    i = l(158954),
    a = l(397927),
    r = l(496092),
    c = l(929267),
    u = l(988794),
    d = l(985018),
    o = l(217528);
function m(e) {
    let { event: t, recurrenceId: l, guildId: m, onRsvp: x, ...v } = e,
        [h, N] = s.useState(c.yS.SERIES),
        g = (0, c.TS)(t.id, null),
        p = g?.response === u.Qi.INTERESTED ? u.Qi.UNINTERESTED : u.Qi.INTERESTED,
        j = p === u.Qi.INTERESTED ? d.intl.string(d.t.WtORed) : d.intl.string(d.t["8MPCVr"]);
    return (0, n.jsx)(i.ConfirmModal, {
        ...v,
        title: j,
        confirmText: d.intl.string(d.t.TyCVIq),
        cancelText: d.intl.string(d.t["ETE/oC"]),
        onConfirm: () => {
            h === c.yS.SERIES ? r.A.updateRsvp(t.id, null, m, p) : r.A.updateRsvp(t.id, l, m, p), x?.(), v.onClose();
        },
        variant: "primary",
        children: (0, n.jsx)("div", {
            className: o.E,
            children: (0, n.jsx)(a.z6M, { value: h, options: (0, c.ko)(), onChange: (e) => N(e) }),
        }),
    });
}
function x(e, t, l, s) {
    (0, c.QC)({
        eventId: e,
        recurrenceId: t,
        guildId: l,
        updateRsvp: (t, n, s, i) => r.A.updateRsvp(e, n, l, i),
        openRsvpPicker: (e, t) => {
            (0, a.mMO)(() =>
                Promise.resolve((i) => (0, n.jsx)(m, { ...i, event: e, recurrenceId: t, guildId: l, onRsvp: s })),
            );
        },
        onRsvp: s,
    });
}
