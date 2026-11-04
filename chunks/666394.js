var i = n(477900),
    r = n(582128),
    s = n(732159),
    a = n(771871),
    l = n(192308),
    o = n(496092),
    u = n(929267),
    d = n(988794),
    c = n(792996),
    p = n(759558);
function E(e) {
    let { event: t, recurrenceId: n, guildId: l, onRsvp: E, ...v } = e,
        [R, S] = r.useState(u.yS.SERIES),
        T = (0, u.TS)(t.id, null),
        f = T?.response === d.Qi.INTERESTED ? d.Qi.UNINTERESTED : d.Qi.INTERESTED,
        h = f === d.Qi.INTERESTED ? c.intl.string(c.t.WtORed) : c.intl.string(c.t["8MPCVr"]);
    return (0, i.jsx)(s.u, {
        ...v,
        title: h,
        confirmText: c.intl.string(c.t.TyCVIq),
        cancelText: c.intl.string(c.t["ETE/oC"]),
        onConfirm: function () {
            (R === u.yS.SERIES ? o.default.updateRsvp(t.id, null, l, f) : o.default.updateRsvp(t.id, n, l, f),
                E?.(),
                v.onClose());
        },
        variant: "primary",
        children: (0, i.jsx)("div", {
            className: p.E,
            children: (0, i.jsx)(a.z, { value: R, options: (0, u.ko)(), onChange: (e) => S(e) }),
        }),
    });
}
n.d(
    t,
    {},
    {
        A: function (e, t, n, r) {
            (0, u.QC)({
                eventId: e,
                recurrenceId: t,
                guildId: n,
                updateRsvp: (t, i, r, s) => o.default.updateRsvp(e, i, n, s),
                openRsvpPicker: function (e, t) {
                    (0, l.mM)(() =>
                        Promise.resolve((s) =>
                            (0, i.jsx)(E, { ...s, event: e, recurrenceId: t, guildId: n, onRsvp: r }),
                        ),
                    );
                },
                onRsvp: r,
            });
        },
    },
);
