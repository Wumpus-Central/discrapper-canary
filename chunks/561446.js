var l = n(477900);
n(582128);
var i = n(855986),
    s = n(866665),
    a = n(821609),
    r = n(58736),
    o = n(702476),
    c = n(498642),
    d = n(71393),
    u = n(576705),
    h = n(811091),
    m = n(844944),
    g = n(513461),
    p = n(123393),
    A = n(652215),
    f = n(792996),
    C = n(243226);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channelId: t, showProfile: n = !1, showTrailingDivider: E = !1 } = e,
                x = h.default.cast(t),
                {
                    joinRequest: I,
                    isModmin: S,
                    guildId: y,
                    maxMembers: b,
                } = (0, i.cf)([m.A, d.A, u.A], () => {
                    let e = m.A.getRequest(x),
                        t = d.A.getGuild(e?.guildId);
                    return {
                        joinRequest: e,
                        isModmin: null != t && u.A.can(A.xBc.KICK_MEMBERS, t),
                        guildId: t?.id,
                        maxMembers: t?.maxMembers,
                    };
                }),
                _ = (0, i.bG)([c.A], () => (null != y ? c.A.getMemberCount(y) : 0)),
                j = null != b && (_ ?? 0) >= b,
                {
                    approveRequest: v,
                    rejectRequest: N,
                    submitting: T,
                } = (0, p.W)(I?.guildId, I?.userId, I?.joinRequestId);
            return null != I && I.applicationStatus === g.B5.SUBMITTED && S
                ? (0, l.jsxs)("div", {
                      className: C.U,
                      children: [
                          (0, l.jsx)(s.m, {
                              text: f.intl.string(f.t.cdPGbE),
                              shouldShow: j,
                              children: (0, l.jsx)(a.$, {
                                  variant: "active",
                                  size: "sm",
                                  text: f.intl.string(f.t.BzjDQJ),
                                  loading: T,
                                  onClick: v,
                                  disabled: j,
                              }),
                          }),
                          (0, l.jsx)(a.$, {
                              variant: "critical-primary",
                              size: "sm",
                              text: f.intl.string(f.t.hDtbsz),
                              onClick: N,
                              disabled: T,
                          }),
                          n &&
                              (0, l.jsx)(a.$, {
                                  onClick: function () {
                                      null != I &&
                                          (0, o.openUserProfileModal)({ userId: I.userId, guildId: I.guildId });
                                  },
                                  variant: "secondary",
                                  size: "sm",
                                  text: f.intl.string(f.t.iXAna6),
                              }),
                          E && (0, l.jsx)(r.Ay.Divider, {}),
                      ],
                  })
                : null;
        },
    },
);
