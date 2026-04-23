n.d(e, { default: () => f });
var i = n(627968),
    a = n(64700),
    l = n(189213),
    r = n(17928),
    s = n(834730),
    o = n(696451),
    c = n(71393),
    d = n(287809),
    u = n(624458),
    g = n(202384),
    p = n(212455),
    m = n(976860),
    _ = n(652215),
    h = n(985018),
    b = n(146983);
let f = function (t) {
    let { guildId: e, transitionState: n, onClose: f } = t,
        j = (0, r.bG)([p.A], () => p.A.getRequest(e), [e]),
        k = (0, r.bG)([c.A], () => c.A.getGuild(e), [e]),
        x = (0, r.bG)([d.default], () => d.default.getCurrentUser()?.id),
        C = (0, r.bG)([o.Ay], () => (null != x ? o.Ay.getMember(e, x) : null), [x, e]),
        A = a.useCallback(() => {
            let t;
            f(), null == C && ((t = (0, m.JK)()).length > 0 ? t.goBack() : (0, m.pX)(_.BVt.ME));
        }, [C, f]),
        R = a.useCallback(async () => {
            if (C?.isPending) {
                try {
                    await u.A.removeGuildJoinRequest(e);
                } catch (t) {
                    throw t;
                }
                f(), (0, g.Ze)(e);
            } else u.A.resetGuildJoinRequest(e);
        }, [e, C?.isPending, f]),
        G = a.useMemo(
            () => [
                { text: h.intl.string(h.t.I1LYVk), variant: "secondary", onClick: R },
                { text: h.intl.string(h.t.BddRzS), variant: "critical-primary", onClick: A },
            ],
            [R, A],
        );
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        onClose: f,
        title:
            k?.name != null
                ? h.intl.formatToPlainString(h.t["P+/gzA"], { guildName: k.name })
                : h.intl.string(h.t.gBPcuP),
        actions: G,
        children:
            j?.rejectionReason != null && j?.rejectionReason !== ""
                ? (0, i.jsxs)(s.E, {
                      variant: "text-md/medium",
                      color: "text-default",
                      children: [
                          (0, i.jsx)("span", { className: b.Wj, children: h.intl.string(h.t.cf1psW) }),
                          (0, i.jsx)("span", { children: j?.rejectionReason }),
                      ],
                  })
                : null,
    });
};
