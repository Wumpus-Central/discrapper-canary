e.d(a, { default: () => g });
var l = e(477900),
    s = e(582128),
    n = e(189213),
    i = e(167417),
    r = e(103557),
    o = e(666860),
    c = e(462116),
    u = e(662502),
    d = e(615550),
    _ = e(652215),
    h = e(835002),
    A = e(105292),
    C = e(719908);
function g(t) {
    let { guildId: a, messageId: e, transitionState: g, onClose: E } = t,
        [p, S] = s.useState([]),
        [T, b] = s.useState(),
        [I, f] = s.useState(!1),
        v = s.useCallback(async () => {
            if (I) return;
            f(!0);
            let t = {
                raid_alert_type: d.TF.JOIN_RAID,
                raid_alert_id: e,
                false_alarm_type: p.map((t) => t.toString()),
                false_alarm_other_reason: T,
                guild_id: a,
            };
            (0, o.zV)(_.HAw.GUILD_RAID_FEEDBACK, t);
            try {
                (await (0, c.xE)(a, e, (0, d.W_)(p)), E(), u.A.showSuccessToast(h.OB.SAFETY_FEEDBACK_SUCCESS));
            } catch {
                u.A.showFailedToast();
            } finally {
                f(!1);
            }
        }, [E, e, a, T, p, I]),
        w = [
            { label: A.intl.string(A.t.yeaXw5), value: d.no.LEGITIMATE_ACTIVITY },
            { label: A.intl.string(A.t["o++3B8"]), value: d.no.DM_SPAM },
            { label: A.intl.string(A.t.UfHAwZ), value: d.no.JOIN_RAID },
            { label: A.intl.string(A.t.K3UWeR), value: d.no.OTHER },
        ],
        k = s.useCallback((t) => {
            S(t);
        }, []);
    return (0, l.jsx)(n.a, {
        onClose: E,
        transitionState: g,
        title: A.intl.string(A.t["1zmw/H"]),
        subtitle: A.intl.string(A.t.nF79oO),
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), onClick: E, variant: "secondary" },
            { text: A.intl.string(A.t.Gh3A0O), onClick: v, disabled: I },
        ],
        children: (0, l.jsxs)("div", {
            className: C.fF,
            children: [
                (0, l.jsx)(i.$, { selectedValues: p, onChange: k, options: w }),
                p.includes(d.no.OTHER) &&
                    (0, l.jsx)("div", {
                        className: C.Q8,
                        children: (0, l.jsx)(r.f, {
                            placeholder: A.intl.string(A.t["PAM+JR"]),
                            onChange: b,
                            value: T,
                            autoFocus: !0,
                        }),
                    }),
            ],
        }),
    });
}
