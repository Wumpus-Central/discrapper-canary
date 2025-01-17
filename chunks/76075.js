t.r(o);
var e = t(200651);
t(192379);
var i = t(442837),
    a = t(481060),
    l = t(100527),
    r = t(970606),
    s = t(313201),
    c = t(271383),
    d = t(430824),
    u = t(594174),
    f = t(693546),
    m = t(305325),
    b = t(937111),
    _ = t(702286),
    p = t(523924),
    g = t(981631),
    C = t(388032);
o.default = function (n) {
    let { guildId: o, transitionState: t, ...h } = n,
        j = (0, s.Dt)(),
        v = (0, i.e7)([b.Z], () => b.Z.getRequest(o), [o]),
        B = (0, i.e7)([d.Z], () => d.Z.getGuild(o), [o]),
        R = (0, i.e7)([u.default], () => {
            var n;
            return null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
        }),
        x = (0, i.e7)([c.ZP], () => (null != R ? c.ZP.getMember(o, R) : null), [R, o]),
        I = async () => {
            var n;
            if (
                (null !== (n = null == B ? void 0 : B.hasFeature(g.oNc.CLAN)) &&
                    void 0 !== n &&
                    n &&
                    (0, r.Vr)({
                        guildId: o,
                        source: l.Z.CLAN_REAPPLY
                    }),
                null == x ? void 0 : x.isPending)
            ) {
                try {
                    await f.Z.removeGuildJoinRequest(o);
                } catch (n) {
                    throw n;
                }
                h.onClose(), (0, m.hk)(o);
            } else f.Z.resetGuildJoinRequest(o);
        };
    return (0, e.jsx)(a.ModalRoot, {
        size: a.ModalSize.DYNAMIC,
        transitionState: t,
        'aria-labelledby': j,
        children: (0, e.jsx)(p.Z, {
            ...h,
            headerId: j,
            reapplyText: C.intl.string(C.t.I1LYVl),
            onReapply: I,
            confirmText: C.intl.string(C.t.BddRzc),
            onWithdrawApplication: () => {
                h.onClose(), null == x && (0, _.Z)();
            },
            rejectionReason: null == v ? void 0 : v.rejectionReason,
            guild: B
        })
    });
};
