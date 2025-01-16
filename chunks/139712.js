e.d(t, {
    Z: function () {
        return s;
    }
}),
    e(47120);
var i = e(200651),
    r = e(192379),
    l = e(481060),
    a = e(482241),
    d = e(124165),
    c = e(765305),
    u = e(388032),
    o = e(917493);
function _(n) {
    let { event: t, recurrenceId: e, guildId: _, onRsvp: s, ...E } = n,
        [p, I] = r.useState(d.KX.SERIES),
        T = (0, d.X2)(t.id, null),
        g = (null == T ? void 0 : T.response) === c.gv.INTERESTED ? c.gv.UNINTERESTED : c.gv.INTERESTED,
        C = g === c.gv.INTERESTED ? u.intl.string(u.t.WtOReX) : u.intl.string(u.t['8MPCVl']);
    return (0, i.jsx)(l.ConfirmModal, {
        ...E,
        header: C,
        confirmText: u.intl.string(u.t.TyCVIi),
        cancelText: u.intl.string(u.t['ETE/oK']),
        onConfirm: () => {
            p === d.KX.SERIES ? a.Z.updateRsvp(t.id, null, _, g) : a.Z.updateRsvp(t.id, e, _, g), null == s || s(), E.onClose();
        },
        confirmButtonColor: l.Button.Colors.BRAND,
        children: (0, i.jsx)(l.RadioGroup, {
            className: o.responseOptions,
            value: p,
            options: (0, d.pF)(),
            onChange: (n) => I(n.value)
        })
    });
}
function s(n, t, e, r) {
    (0, d.cg)({
        eventId: n,
        recurrenceId: t,
        guildId: e,
        updateRsvp: (t, i, r, l) => a.Z.updateRsvp(n, i, e, l),
        openRsvpPicker: (n, t) => {
            (0, l.openModalLazy)(() =>
                Promise.resolve((l) =>
                    (0, i.jsx)(_, {
                        ...l,
                        event: n,
                        recurrenceId: t,
                        guildId: e,
                        onRsvp: r
                    })
                )
            );
        },
        onRsvp: r
    });
}
