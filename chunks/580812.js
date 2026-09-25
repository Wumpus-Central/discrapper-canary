a.d(e, { default: () => g });
var l = a(477900),
    n = a(582128),
    s = a(189213),
    i = a(167417),
    r = a(103557),
    o = a(95561),
    c = a(462116),
    u = a(381689),
    _ = a(615550),
    d = a(652215),
    C = a(835002),
    h = a(375708),
    A = a(719908);
function g(t) {
    let { guildId: e, messageId: a, transitionState: g, onClose: E } = t,
        [p, I] = n.useState([]),
        [S, T] = n.useState(),
        b = n.useCallback(() => {
            let t = {
                raid_alert_type: _.TF.JOIN_RAID,
                raid_alert_id: a,
                false_alarm_type: p.map((t) => t.toString()),
                false_alarm_other_reason: S,
                guild_id: e,
            };
            ((0, o.zV)(d.HAw.GUILD_RAID_FEEDBACK, t),
                (0, c.xE)(e, a, (0, _.W_)(p)),
                E(),
                u.A.showSuccessToast(C.OB.SAFETY_FEEDBACK_SUCCESS));
        }, [E, a, e, S, p]),
        v = [
            { label: h.intl.string(h.t.yeaXw5), value: _.no.LEGITIMATE_ACTIVITY },
            { label: h.intl.string(h.t["o++3B8"]), value: _.no.DM_SPAM },
            { label: h.intl.string(h.t.UfHAwZ), value: _.no.JOIN_RAID },
            { label: h.intl.string(h.t.K3UWeR), value: _.no.OTHER },
        ],
        k = n.useCallback((t) => {
            I(t);
        }, []);
    return (0, l.jsx)(s.a, {
        onClose: E,
        transitionState: g,
        title: h.intl.string(h.t["1zmw/H"]),
        subtitle: h.intl.string(h.t.nF79oO),
        actions: [
            { text: h.intl.string(h.t["ETE/oC"]), onClick: E, variant: "secondary" },
            { text: h.intl.string(h.t.Gh3A0O), onClick: b },
        ],
        children: (0, l.jsxs)("div", {
            className: A.fF,
            children: [
                (0, l.jsx)(i.$, { selectedValues: p, onChange: k, options: v }),
                p.includes(_.no.OTHER) &&
                    (0, l.jsx)("div", {
                        className: A.Q8,
                        children: (0, l.jsx)(r.f, {
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
