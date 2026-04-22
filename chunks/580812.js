l.d(t, { default: () => _ });
var a = l(627968),
    n = l(64700),
    r = l(189213),
    i = l(167417),
    o = l(260598),
    s = l(58149),
    d = l(554113),
    u = l(662502),
    c = l(615550),
    g = l(652215),
    h = l(835002),
    p = l(985018),
    b = l(74117);
function _(e) {
    let { guildId: t, messageId: l, transitionState: _, onClose: x } = e,
        [v, m] = n.useState([]),
        [A, I] = n.useState(),
        f = n.useCallback(() => {
            let e = {
                raid_alert_type: c.TF.JOIN_RAID,
                raid_alert_id: l,
                false_alarm_type: v.map((e) => e.toString()),
                false_alarm_other_reason: A,
                guild_id: t,
            };
            (0, s.zV)(g.HAw.GUILD_RAID_FEEDBACK, e),
                (0, d.xE)(t, l, (0, c.W_)(v)),
                x(),
                u.A.showSuccessToast(h.OB.SAFETY_FEEDBACK_SUCCESS);
        }, [x, l, t, A, v]),
        y = [
            { label: p.intl.string(p.t.yeaXw5), value: c.no.LEGITIMATE_ACTIVITY },
            { label: p.intl.string(p.t["o++3B8"]), value: c.no.DM_SPAM },
            { label: p.intl.string(p.t.UfHAwZ), value: c.no.JOIN_RAID },
            { label: p.intl.string(p.t.K3UWeR), value: c.no.OTHER },
        ],
        C = n.useCallback((e) => {
            m(e);
        }, []);
    return (0, a.jsx)(r.Modal, {
        onClose: x,
        transitionState: _,
        title: p.intl.string(p.t["1zmw/H"]),
        subtitle: p.intl.string(p.t.nF79oO),
        actions: [
            { text: p.intl.string(p.t["ETE/oC"]), onClick: x, variant: "secondary" },
            { text: p.intl.string(p.t.Gh3A0O), onClick: f },
        ],
        children: (0, a.jsxs)("div", {
            className: b.fF,
            children: [
                (0, a.jsx)(i.$, { selectedValues: v, onChange: C, options: y }),
                v.includes(c.no.OTHER) &&
                    (0, a.jsx)("div", {
                        className: b.Q8,
                        children: (0, a.jsx)(o.f, {
                            placeholder: p.intl.string(p.t["PAM+JR"]),
                            onChange: I,
                            value: A,
                            autoFocus: !0,
                        }),
                    }),
            ],
        }),
    });
}
