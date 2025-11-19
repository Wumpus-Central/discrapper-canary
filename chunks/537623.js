n.d(e, { default: () => O }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(793030),
    a = n(481060),
    o = n(367907),
    s = n(369994),
    u = n(681678),
    c = n(177862),
    d = n(981631),
    _ = n(484710),
    p = n(388032),
    b = n(673471);
function O(t) {
    let { guildId: e, messageId: n, transitionState: O, onClose: f } = t,
        [I, A] = l.useState([]),
        [E, y] = l.useState(),
        g = l.useCallback(() => {
            let t = {
                raid_alert_type: c.wR.JOIN_RAID,
                raid_alert_id: n,
                false_alarm_type: I.map((t) => t.toString()),
                false_alarm_other_reason: E,
                guild_id: e,
            };
            (0, o.yw)(d.rMx.GUILD_RAID_FEEDBACK, t),
                (0, s.Fi)(e, n, (0, c.J$)(I)),
                f(),
                u.Z.showSuccessToast(_.wQ.SAFETY_FEEDBACK_SUCCESS);
        }, [f, n, e, E, I]),
        h = [
            {
                label: p.intl.string(p.t.yeaXw5),
                value: c.$l.LEGITIMATE_ACTIVITY,
            },
            {
                label: p.intl.string(p.t["o++3B8"]),
                value: c.$l.DM_SPAM,
            },
            {
                label: p.intl.string(p.t.UfHAwZ),
                value: c.$l.JOIN_RAID,
            },
            {
                label: p.intl.string(p.t.K3UWeR),
                value: c.$l.OTHER,
            },
        ],
        D = l.useCallback((t) => {
            A(t);
        }, []);
    return (0, r.jsx)(i.Modal, {
        onClose: f,
        transitionState: O,
        title: p.intl.string(p.t["1zmw/H"]),
        subtitle: p.intl.string(p.t.nF79oO),
        actions: [
            {
                text: p.intl.string(p.t["ETE/oC"]),
                onClick: f,
                variant: "secondary",
            },
            {
                text: p.intl.string(p.t.Gh3A0O),
                onClick: g,
            },
        ],
        children: (0, r.jsxs)("div", {
            className: b.options,
            children: [
                (0, r.jsx)(a.cOn, {
                    selectedValues: I,
                    onChange: D,
                    options: h,
                }),
                I.includes(c.$l.OTHER) &&
                    (0, r.jsx)("div", {
                        className: b.textboxContainer,
                        children: (0, r.jsx)(a.Kx8, {
                            placeholder: p.intl.string(p.t["PAM+JR"]),
                            onChange: y,
                            value: E,
                            autoFocus: !0,
                        }),
                    }),
            ],
        }),
    });
}
