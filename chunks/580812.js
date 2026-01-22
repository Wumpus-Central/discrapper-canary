n.d(t, {
    default: () => p,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    a = n(158954),
    i = n(397927),
    s = n(58149),
    o = n(554113),
    u = n(662502),
    c = n(615550),
    d = n(652215),
    _ = n(835002),
    b = n(985018),
    O = n(383110);

function p(e) {
    let { guildId: t, messageId: n, transitionState: p, onClose: A } = e,
        [f, I] = l.useState([]),
        [E, h] = l.useState(),
        g = l.useCallback(() => {
            let e = {
                raid_alert_type: c.TF.JOIN_RAID,
                raid_alert_id: n,
                false_alarm_type: f.map((e) => e.toString()),
                false_alarm_other_reason: E,
                guild_id: t,
            };
            (0, s.zV)(d.HAw.GUILD_RAID_FEEDBACK, e),
                (0, o.xE)(t, n, (0, c.W_)(f)),
                A(),
                u.A.showSuccessToast(_.OB.SAFETY_FEEDBACK_SUCCESS);
        }, [A, n, t, E, f]),
        y = [
            {
                label: b.intl.string(b.t.yeaXw5),
                value: c.no.LEGITIMATE_ACTIVITY,
            },
            {
                label: b.intl.string(b.t["o++3B8"]),
                value: c.no.DM_SPAM,
            },
            {
                label: b.intl.string(b.t.UfHAwZ),
                value: c.no.JOIN_RAID,
            },
            {
                label: b.intl.string(b.t.K3UWeR),
                value: c.no.OTHER,
            },
        ],
        D = l.useCallback((e) => {
            I(e);
        }, []);
    return (0, r.jsx)(a.Modal, {
        onClose: A,
        transitionState: p,
        title: b.intl.string(b.t["1zmw/H"]),
        subtitle: b.intl.string(b.t.nF79oO),
        actions: [
            {
                text: b.intl.string(b.t["ETE/oC"]),
                onClick: A,
                variant: "secondary",
            },
            {
                text: b.intl.string(b.t.Gh3A0O),
                onClick: g,
            },
        ],
        children: (0, r.jsxs)("div", {
            className: O.fF,
            children: [
                (0, r.jsx)(i.$QX, {
                    selectedValues: f,
                    onChange: D,
                    options: y,
                }),
                f.includes(c.no.OTHER) &&
                    (0, r.jsx)("div", {
                        className: O.Q8,
                        children: (0, r.jsx)(i.fs1, {
                            placeholder: b.intl.string(b.t["PAM+JR"]),
                            onChange: h,
                            value: E,
                            autoFocus: !0,
                        }),
                    }),
            ],
        }),
    });
}
