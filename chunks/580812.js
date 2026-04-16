l.d(e, { default: () => E });
var n = l(627968),
    a = l(64700),
    i = l(158954),
    s = l(397927),
    r = l(58149),
    u = l(554113),
    d = l(662502),
    o = l(615550),
    _ = l(652215),
    c = l(835002),
    A = l(985018),
    I = l(74117);
function E(t) {
    let { guildId: e, messageId: l, transitionState: E, onClose: h } = t,
        [R, C] = a.useState([]),
        [D, T] = a.useState(),
        S = a.useCallback(() => {
            let t = {
                raid_alert_type: o.TF.JOIN_RAID,
                raid_alert_id: l,
                false_alarm_type: R.map((t) => t.toString()),
                false_alarm_other_reason: D,
                guild_id: e,
            };
            (0, r.zV)(_.HAw.GUILD_RAID_FEEDBACK, t),
                (0, u.xE)(e, l, (0, o.W_)(R)),
                h(),
                d.A.showSuccessToast(c.OB.SAFETY_FEEDBACK_SUCCESS);
        }, [h, l, e, D, R]),
        g = [
            { label: A.intl.string(A.t.yeaXw5), value: o.no.LEGITIMATE_ACTIVITY },
            { label: A.intl.string(A.t["o++3B8"]), value: o.no.DM_SPAM },
            { label: A.intl.string(A.t.UfHAwZ), value: o.no.JOIN_RAID },
            { label: A.intl.string(A.t.K3UWeR), value: o.no.OTHER },
        ],
        p = a.useCallback((t) => {
            C(t);
        }, []);
    return (0, n.jsx)(i.Modal, {
        onClose: h,
        transitionState: E,
        title: A.intl.string(A.t["1zmw/H"]),
        subtitle: A.intl.string(A.t.nF79oO),
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), onClick: h, variant: "secondary" },
            { text: A.intl.string(A.t.Gh3A0O), onClick: S },
        ],
        children: (0, n.jsxs)("div", {
            className: I.fF,
            children: [
                (0, n.jsx)(s.$QX, { selectedValues: R, onChange: p, options: g }),
                R.includes(o.no.OTHER) &&
                    (0, n.jsx)("div", {
                        className: I.Q8,
                        children: (0, n.jsx)(s.fs1, {
                            placeholder: A.intl.string(A.t["PAM+JR"]),
                            onChange: T,
                            value: D,
                            autoFocus: !0,
                        }),
                    }),
            ],
        }),
    });
}
