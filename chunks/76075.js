e.d(t, { default: () => h });
var i = e(54381),
    a = e(473749),
    o = e(793030),
    l = e(442837),
    d = e(481060),
    r = e(271383),
    c = e(430824),
    s = e(594174),
    u = e(693546),
    f = e(305325),
    m = e(937111),
    p = e(702286),
    g = e(388032),
    v = e(871612);
let h = function (n) {
    let { guildId: t, transitionState: e, onClose: h } = n,
        x = (0, l.e7)([m.Z], () => m.Z.getRequest(t), [t]),
        C = (0, l.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        R = (0, l.e7)([s.default], () => {
            var n;
            return null == (n = s.default.getCurrentUser()) ? void 0 : n.id;
        }),
        k = (0, l.e7)([r.ZP], () => (null != R ? r.ZP.getMember(t, R) : null), [R, t]),
        Z = a.useCallback(() => {
            h(), null == k && (0, p.Z)();
        }, [k, h]),
        j = a.useCallback(async () => {
            if (null == k ? void 0 : k.isPending) {
                try {
                    await u.Z.removeGuildJoinRequest(t);
                } catch (n) {
                    throw n;
                }
                h(), (0, f.hk)(t);
            } else u.Z.resetGuildJoinRequest(t);
        }, [t, null == k ? void 0 : k.isPending, h]),
        b = a.useMemo(
            () => [
                {
                    text: g.intl.string(g.t.I1LYVk),
                    variant: "secondary",
                    onClick: j,
                },
                {
                    text: g.intl.string(g.t.BddRzS),
                    variant: "critical-primary",
                    onClick: Z,
                },
            ],
            [j, Z],
        );
    return (0, i.jsx)(o.Modal, {
        transitionState: e,
        onClose: h,
        title:
            (null == C ? void 0 : C.name) != null
                ? g.intl.formatToPlainString(g.t["P+/gzA"], { guildName: C.name })
                : g.intl.string(g.t.gBPcuP),
        actions: b,
        children:
            (null == x ? void 0 : x.rejectionReason) != null && (null == x ? void 0 : x.rejectionReason) !== ""
                ? (0, i.jsxs)(d.Text, {
                      variant: "text-md/medium",
                      color: "text-default",
                      children: [
                          (0, i.jsx)("span", {
                              className: v.rejectionReasonLabel,
                              children: g.intl.string(g.t.cf1psW),
                          }),
                          (0, i.jsx)("span", { children: null == x ? void 0 : x.rejectionReason }),
                      ],
                  })
                : null,
    });
};
