t.d(e, { default: () => v });
var i = t(951288),
    o = t(647438),
    l = t(793030),
    a = t(442837),
    r = t(481060),
    s = t(271383),
    c = t(430824),
    u = t(594174),
    d = t(693546),
    m = t(305325),
    p = t(937111),
    g = t(702286),
    f = t(388032),
    h = t(394121);
let v = function (n) {
    let { guildId: e, transitionState: t, onClose: v } = n,
        _ = (0, a.e7)([p.Z], () => p.Z.getRequest(e), [e]),
        C = (0, a.e7)([c.Z], () => c.Z.getGuild(e), [e]),
        R = (0, a.e7)([u.default], () => {
            var n;
            return null == (n = u.default.getCurrentUser()) ? void 0 : n.id;
        }),
        x = (0, a.e7)([s.ZP], () => (null != R ? s.ZP.getMember(e, R) : null), [R, e]),
        Z = o.useCallback(() => {
            v(), null == x && (0, g.Z)();
        }, [x, v]),
        j = o.useCallback(async () => {
            if (null == x ? void 0 : x.isPending) {
                try {
                    await d.Z.removeGuildJoinRequest(e);
                } catch (n) {
                    throw n;
                }
                v(), (0, m.hk)(e);
            } else d.Z.resetGuildJoinRequest(e);
        }, [e, null == x ? void 0 : x.isPending, v]),
        k = o.useMemo(
            () => [
                {
                    text: f.intl.string(f.t.I1LYVl),
                    variant: "secondary",
                    onClick: j,
                },
                {
                    text: f.intl.string(f.t.BddRzc),
                    variant: "critical-primary",
                    onClick: Z,
                },
            ],
            [j, Z],
        );
    return (0, i.jsx)(l.Modal, {
        transitionState: t,
        onClose: v,
        title:
            (null == C ? void 0 : C.name) != null
                ? f.intl.formatToPlainString(f.t["P+/gzM"], { guildName: C.name })
                : f.intl.string(f.t.gBPcuL),
        actions: k,
        children:
            (null == _ ? void 0 : _.rejectionReason) != null && (null == _ ? void 0 : _.rejectionReason) !== ""
                ? (0, i.jsxs)(r.Text, {
                      variant: "text-md/medium",
                      color: "header-secondary",
                      children: [
                          (0, i.jsx)("span", {
                              className: h.rejectionReasonLabel,
                              children: f.intl.string(f.t.cf1psb),
                          }),
                          (0, i.jsx)("span", { children: null == _ ? void 0 : _.rejectionReason }),
                      ],
                  })
                : null,
    });
};
