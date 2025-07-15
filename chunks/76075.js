e.d(t, { default: () => v });
var i = e(255367);
e(73800);
var l = e(442837),
    a = e(82659),
    o = e(481060),
    r = e(313201),
    s = e(724723),
    c = e(271383),
    d = e(430824),
    u = e(594174),
    m = e(693546),
    f = e(305325),
    x = e(937111),
    h = e(702286),
    p = e(523924),
    g = e(388032),
    j = e(568410);
let v = function (n) {
    let { guildId: t, transitionState: e, onClose: v } = n,
        R = (0, s.q)('MemberVerificationRejectedModal'),
        C = (0, r.Dt)(),
        _ = (0, l.e7)([x.Z], () => x.Z.getRequest(t), [t]),
        b = (0, l.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        Z = (0, l.e7)([u.default], () => {
            var n;
            return null == (n = u.default.getCurrentUser()) ? void 0 : n.id;
        }),
        T = (0, l.e7)([c.ZP], () => (null != Z ? c.ZP.getMember(t, Z) : null), [Z, t]),
        y = () => {
            (v(), null == T && (0, h.Z)());
        },
        P = async () => {
            if (null == T ? void 0 : T.isPending) {
                try {
                    await m.Z.removeGuildJoinRequest(t);
                } catch (n) {
                    throw n;
                }
                (v(), (0, f.hk)(t));
            } else m.Z.resetGuildJoinRequest(t);
        };
    return R
        ? (0, i.jsx)(a.u, {
              transitionState: e,
              onClose: v,
              title: (null == b ? void 0 : b.name) != null ? g.intl.formatToPlainString(g.t['P+/gzM'], { guildName: b.name }) : g.intl.string(g.t.gBPcuL),
              actions: [
                  {
                      text: g.intl.string(g.t.I1LYVl),
                      variant: 'secondary',
                      onClick: P
                  },
                  {
                      text: g.intl.string(g.t.BddRzc),
                      variant: 'critical-primary',
                      onClick: y
                  }
              ],
              children:
                  (null == _ ? void 0 : _.rejectionReason) != null && (null == _ ? void 0 : _.rejectionReason) !== ''
                      ? (0, i.jsxs)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: [
                                (0, i.jsx)('span', {
                                    className: j.rejectionReasonLabel,
                                    children: g.intl.string(g.t.cf1psb)
                                }),
                                (0, i.jsx)('span', { children: null == _ ? void 0 : _.rejectionReason })
                            ]
                        })
                      : null
          })
        : (0, i.jsx)(o.Y0X, {
              size: o.CgR.DYNAMIC,
              transitionState: e,
              'aria-labelledby': C,
              parentComponent: 'MemberVerificationRejectedModal',
              children: (0, i.jsx)(p.Z, {
                  headerId: C,
                  reapplyText: g.intl.string(g.t.I1LYVl),
                  onReapply: P,
                  confirmText: g.intl.string(g.t.BddRzc),
                  onWithdrawApplication: y,
                  rejectionReason: null == _ ? void 0 : _.rejectionReason,
                  guild: b
              })
          });
};
