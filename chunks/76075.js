e.d(t, { default: () => h });
var i = e(255367),
    o = e(73800),
    a = e(442837),
    l = e(82659),
    r = e(481060),
    s = e(271383),
    c = e(430824),
    u = e(594174),
    d = e(693546),
    m = e(305325),
    p = e(937111),
    f = e(702286),
    g = e(388032),
    _ = e(568410);
let h = function (n) {
    let { guildId: t, transitionState: e, onClose: h } = n,
        v = (0, a.e7)([p.Z], () => p.Z.getRequest(t), [t]),
        C = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        R = (0, a.e7)([u.default], () => {
            var n;
            return null == (n = u.default.getCurrentUser()) ? void 0 : n.id;
        }),
        x = (0, a.e7)([s.ZP], () => (null != R ? s.ZP.getMember(t, R) : null), [R, t]),
        Z = o.useCallback(() => {
            (h(), null == x && (0, f.Z)());
        }, [x, h]),
        j = o.useCallback(async () => {
            if (null == x ? void 0 : x.isPending) {
                try {
                    await d.Z.removeGuildJoinRequest(t);
                } catch (n) {
                    throw n;
                }
                (h(), (0, m.hk)(t));
            } else d.Z.resetGuildJoinRequest(t);
        }, [t, null == x ? void 0 : x.isPending, h]),
        k = o.useMemo(
            () => [
                {
                    text: g.intl.string(g.t.I1LYVl),
                    variant: 'secondary',
                    onClick: j
                },
                {
                    text: g.intl.string(g.t.BddRzc),
                    variant: 'critical-primary',
                    onClick: Z
                }
            ],
            [j, Z]
        );
    return (0, i.jsx)(l.Modal, {
        transitionState: e,
        onClose: h,
        title: (null == C ? void 0 : C.name) != null ? g.intl.formatToPlainString(g.t['P+/gzM'], { guildName: C.name }) : g.intl.string(g.t.gBPcuL),
        actions: k,
        children:
            (null == v ? void 0 : v.rejectionReason) != null && (null == v ? void 0 : v.rejectionReason) !== ''
                ? (0, i.jsxs)(r.Text, {
                      variant: 'text-md/medium',
                      color: 'header-secondary',
                      children: [
                          (0, i.jsx)('span', {
                              className: _.rejectionReasonLabel,
                              children: g.intl.string(g.t.cf1psb)
                          }),
                          (0, i.jsx)('span', { children: null == v ? void 0 : v.rejectionReason })
                      ]
                  })
                : null
    });
};
