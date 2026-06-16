l.d(e, { default: () => g });
var a = l(627968),
    n = l(64700),
    s = l(189213),
    i = l(167417),
    o = l(260598),
    r = l(95561),
    c = l(462116),
    u = l(381689),
    d = l(615550),
    _ = l(652215),
    C = l(835002),
    h = l(375708),
    A = l(74117);
function g(t) {
    let { guildId: e, messageId: l, transitionState: g, onClose: E } = t,
        [p, I] = n.useState([]),
        [S, T] = n.useState(),
        b = n.useCallback(() => {
            let t = {
                raid_alert_type: d.TF.JOIN_RAID,
                raid_alert_id: l,
                false_alarm_type: p.map((t) => t.toString()),
                false_alarm_other_reason: S,
                guild_id: e,
            };
            (0, r.zV)(_.HAw.GUILD_RAID_FEEDBACK, t),
                (0, c.xE)(e, l, (0, d.W_)(p)),
                E(),
                u.A.showSuccessToast(C.OB.SAFETY_FEEDBACK_SUCCESS);
        }, [E, l, e, S, p]),
        v = [
            { label: h.intl.string(h.t.yeaXw5), value: d.no.LEGITIMATE_ACTIVITY },
            { label: h.intl.string(h.t["o++3B8"]), value: d.no.DM_SPAM },
            { label: h.intl.string(h.t.UfHAwZ), value: d.no.JOIN_RAID },
            { label: h.intl.string(h.t.K3UWeR), value: d.no.OTHER },
        ],
        k = n.useCallback((t) => {
            I(t);
        }, []);
    return (0, a.jsx)(s.Modal, {
        onClose: E,
        transitionState: g,
        title: h.intl.string(h.t["1zmw/H"]),
        subtitle: h.intl.string(h.t.nF79oO),
        actions: [
            { text: h.intl.string(h.t["ETE/oC"]), onClick: E, variant: "secondary" },
            { text: h.intl.string(h.t.Gh3A0O), onClick: b },
        ],
        children: (0, a.jsxs)("div", {
            className: A.fF,
            children: [
                (0, a.jsx)(i.$, { selectedValues: p, onChange: k, options: v }),
                p.includes(d.no.OTHER) &&
                    (0, a.jsx)("div", {
                        className: A.Q8,
                        children: (0, a.jsx)(o.f, {
                            placeholder: h.intl.string(h.t["PAM+JR"]),
                            onChange: T,
                            value: S,
                            autoFocus: !0,
                        }),
                    }),
            ],
        }),
    });
}
