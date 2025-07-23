(n.d(i, { default: () => C }), n(539854));
var a = n(255367),
    c = n(73800),
    r = n(82659),
    e = n(481060),
    l = n(434404),
    o = n(703656),
    s = n(246364),
    u = n(981631),
    x = n(176505),
    d = n(388032),
    p = n(367503);
let C = function (t) {
    let { guildId: i, submittedGuildJoinRequestsCount: n, onClose: C, transitionState: k, onConfirm: E } = t,
        f = c.useCallback(
            (t) => {
                (C(), E(t));
            },
            [C, E]
        ),
        h = c.useCallback(() => {
            (C(), l.Z.close(), (0, o.uL)(u.Z5c.CHANNEL(i, x.oC.MEMBER_SAFETY)));
        }, [i, C]),
        T = n > 200,
        g = [
            {
                text: d.intl.string(d.t['ETE/oK']),
                onClick: C,
                variant: 'secondary'
            },
            {
                text: d.intl.string(d.t.Gfg0ra),
                onClick: () => f(s.wB.REJECTED),
                variant: 'critical-primary'
            }
        ];
    return (
        T ||
            g.push({
                text: d.intl.string(d.t.VWqCvL),
                onClick: () => f(s.wB.APPROVED),
                variant: 'primary'
            }),
        (0, a.jsx)(r.Modal, {
            title: d.intl.formatToPlainString(d.t.chV4JS, { count: n }),
            onClose: C,
            subtitle: T ? d.intl.string(d.t.EPoNRk) : d.intl.string(d.t['8+nq/P']),
            transitionState: k,
            actions: g,
            children: (0, a.jsx)(e.P3F, {
                className: p.actionText,
                onClick: h,
                children: (0, a.jsx)(e.Text, {
                    variant: 'text-md/normal',
                    color: 'text-link',
                    children: d.intl.string(d.t.szESVF)
                })
            })
        })
    );
};
