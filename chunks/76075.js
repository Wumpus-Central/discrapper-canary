t.d(e, { default: () => v });
var i = t(54381),
    o = t(473749),
    l = t(793030),
    a = t(442837),
    r = t(481060),
    s = t(271383),
    u = t(430824),
    c = t(594174),
    d = t(693546),
    m = t(305325),
    p = t(937111),
    g = t(702286),
    f = t(388032),
    h = t(394121);
let v = function (n) {
    let { guildId: e, transitionState: t, onClose: v } = n,
        _ = (0, a.e7)([p.Z], () => p.Z.getRequest(e), [e]),
        C = (0, a.e7)([u.Z], () => u.Z.getGuild(e), [e]),
        R = (0, a.e7)([c.default], () => {
            var n;
            return null == (n = c.default.getCurrentUser()) ? void 0 : n.id;
        }),
        k = (0, a.e7)([s.ZP], () => (null != R ? s.ZP.getMember(e, R) : null), [R, e]),
        x = o.useCallback(() => {
            v(), null == k && (0, g.Z)();
        }, [k, v]),
        Z = o.useCallback(async () => {
            if (null == k ? void 0 : k.isPending) {
                try {
                    await d.Z.removeGuildJoinRequest(e);
                } catch (n) {
                    throw n;
                }
                v(), (0, m.hk)(e);
            } else d.Z.resetGuildJoinRequest(e);
        }, [e, null == k ? void 0 : k.isPending, v]),
        j = o.useMemo(
            () => [
                {
                    text: f.intl.string(f.t.I1LYVk),
                    variant: "secondary",
                    onClick: Z,
                },
                {
                    text: f.intl.string(f.t.BddRzS),
                    variant: "critical-primary",
                    onClick: x,
                },
            ],
            [Z, x],
        );
    return (0, i.jsx)(l.Modal, {
        transitionState: t,
        onClose: v,
        title:
            (null == C ? void 0 : C.name) != null
                ? f.intl.formatToPlainString(f.t["P+/gzA"], { guildName: C.name })
                : f.intl.string(f.t.gBPcuP),
        actions: j,
        children:
            (null == _ ? void 0 : _.rejectionReason) != null && (null == _ ? void 0 : _.rejectionReason) !== ""
                ? (0, i.jsxs)(r.Text, {
                      variant: "text-md/medium",
                      color: "header-secondary",
                      children: [
                          (0, i.jsx)("span", {
                              className: h.rejectionReasonLabel,
                              children: f.intl.string(f.t.cf1psW),
                          }),
                          (0, i.jsx)("span", { children: null == _ ? void 0 : _.rejectionReason }),
                      ],
                  })
                : null,
    });
};
