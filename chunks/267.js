n.d(t, { default: () => A });
var i = n(477900),
    l = n(582128),
    a = n(855986),
    s = n(189213),
    r = n(834730),
    c = n(696451),
    u = n(71393),
    o = n(287809),
    d = n(624458),
    g = n(202384),
    h = n(212455),
    m = n(976860),
    p = n(652215),
    b = n(792996),
    k = n(449341);
let A = function (e) {
    let { guildId: t, transitionState: n, onClose: A } = e,
        f = (0, a.bG)([h.A], () => h.A.getRequest(t), [t]),
        j = (0, a.bG)([u.A], () => u.A.getGuild(t), [t]),
        C = (0, a.bG)([o.default], () => o.default.getCurrentUser()?.id),
        x = (0, a.bG)([c.Ay], () => (null != C ? c.Ay.getMember(t, C) : null), [C, t]),
        y = l.useCallback(() => {
            let e;
            (A(), null == x && ((e = (0, m.JK)()).length > 0 ? e.goBack() : (0, m.pX)(p.BVt.ME)));
        }, [x, A]),
        G = l.useCallback(async () => {
            if (x?.isPending) {
                try {
                    await d.A.removeGuildJoinRequest(t);
                } catch (e) {
                    throw e;
                }
                (A(), (0, g.Ze)(t));
            } else d.A.resetGuildJoinRequest(t);
        }, [t, x?.isPending, A]),
        R = l.useMemo(
            () => [
                { text: b.intl.string(b.t.I1LYVk), variant: "secondary", onClick: G },
                { text: b.intl.string(b.t.BddRzS), variant: "critical-primary", onClick: y },
            ],
            [G, y],
        );
    return (0, i.jsx)(s.a, {
        transitionState: n,
        onClose: A,
        title:
            j?.name != null
                ? b.intl.formatToPlainString(b.t["P+/gzA"], { guildName: j.name })
                : b.intl.string(b.t.gBPcuP),
        actions: R,
        children:
            f?.rejectionReason != null && f?.rejectionReason !== ""
                ? (0, i.jsxs)(r.E, {
                      variant: "body-md/medium",
                      color: "text-default",
                      children: [
                          (0, i.jsx)("span", { className: k.Wj, children: b.intl.string(b.t.cf1psW) }),
                          (0, i.jsx)("span", { children: f?.rejectionReason }),
                      ],
                  })
                : null,
    });
};
