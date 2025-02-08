o.d(e, { default: () => h });
var t = o(200651);
o(192379);
var i = o(442837),
    l = o(481060),
    c = o(100527),
    a = o(970606),
    d = o(313201),
    r = o(271383),
    s = o(430824),
    u = o(594174),
    b = o(693546),
    m = o(305325),
    p = o(937111),
    _ = o(702286),
    f = o(523924),
    C = o(981631),
    g = o(388032);
let h = function (n) {
    let { guildId: e, transitionState: o, ...h } = n,
        x = (0, d.Dt)(),
        v = (0, i.e7)([p.Z], () => p.Z.getRequest(e), [e]),
        j = (0, i.e7)([s.Z], () => s.Z.getGuild(e), [e]),
        k = (0, i.e7)([u.default], () => {
            var n;
            return null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
        }),
        R = (0, i.e7)([r.ZP], () => (null != k ? r.ZP.getMember(e, k) : null), [k, e]),
        I = async () => {
            var n;
            if (
                (null !== (n = null == j ? void 0 : j.hasFeature(C.oNc.CLAN)) &&
                    void 0 !== n &&
                    n &&
                    (0, a.Vr)({
                        guildId: e,
                        source: c.Z.CLAN_REAPPLY
                    }),
                null == R ? void 0 : R.isPending)
            ) {
                try {
                    await b.Z.removeGuildJoinRequest(e);
                } catch (n) {
                    throw n;
                }
                h.onClose(), (0, m.hk)(e);
            } else b.Z.resetGuildJoinRequest(e);
        };
    return (0, t.jsx)(l.Y0X, {
        size: l.CgR.DYNAMIC,
        transitionState: o,
        'aria-labelledby': x,
        children: (0, t.jsx)(f.Z, {
            ...h,
            headerId: x,
            reapplyText: g.intl.string(g.t.I1LYVl),
            onReapply: I,
            confirmText: g.intl.string(g.t.BddRzc),
            onWithdrawApplication: () => {
                h.onClose(), null == R && (0, _.Z)();
            },
            rejectionReason: null == v ? void 0 : v.rejectionReason,
            guild: j
        })
    });
};
