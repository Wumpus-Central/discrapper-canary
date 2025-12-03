e.d(t, { default: () => _ });
var i = e(54381),
    o = e(473749),
    l = e(793030),
    a = e(442837),
    r = e(481060),
    s = e(271383),
    u = e(430824),
    c = e(594174),
    d = e(693546),
    m = e(305325),
    p = e(937111),
    f = e(702286),
    g = e(388032),
    v = e(394121);
let _ = function (n) {
    let { guildId: t, transitionState: e, onClose: _ } = n,
        h = (0, a.e7)([p.Z], () => p.Z.getRequest(t), [t]),
        x = (0, a.e7)([u.Z], () => u.Z.getGuild(t), [t]),
        C = (0, a.e7)([c.default], () => {
            var n;
            return null == (n = c.default.getCurrentUser()) ? void 0 : n.id;
        }),
        R = (0, a.e7)([s.ZP], () => (null != C ? s.ZP.getMember(t, C) : null), [C, t]),
        k = o.useCallback(() => {
            _(), null == R && (0, f.Z)();
        }, [R, _]),
        Z = o.useCallback(async () => {
            if (null == R ? void 0 : R.isPending) {
                try {
                    await d.Z.removeGuildJoinRequest(t);
                } catch (n) {
                    throw n;
                }
                _(), (0, m.hk)(t);
            } else d.Z.resetGuildJoinRequest(t);
        }, [t, null == R ? void 0 : R.isPending, _]),
        j = o.useMemo(
            () => [
                {
                    text: g.intl.string(g.t.I1LYVk),
                    variant: "secondary",
                    onClick: Z,
                },
                {
                    text: g.intl.string(g.t.BddRzS),
                    variant: "critical-primary",
                    onClick: k,
                },
            ],
            [Z, k],
        );
    return (0, i.jsx)(l.Modal, {
        transitionState: e,
        onClose: _,
        title:
            (null == x ? void 0 : x.name) != null
                ? g.intl.formatToPlainString(g.t["P+/gzA"], { guildName: x.name })
                : g.intl.string(g.t.gBPcuP),
        actions: j,
        children:
            (null == h ? void 0 : h.rejectionReason) != null && (null == h ? void 0 : h.rejectionReason) !== ""
                ? (0, i.jsxs)(r.Text, {
                      variant: "text-md/medium",
                      color: "text-default",
                      children: [
                          (0, i.jsx)("span", {
                              className: v.rejectionReasonLabel,
                              children: g.intl.string(g.t.cf1psW),
                          }),
                          (0, i.jsx)("span", { children: null == h ? void 0 : h.rejectionReason }),
                      ],
                  })
                : null,
    });
};
