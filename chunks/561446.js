n.d(t, { A: () => y });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(990078),
    a = n(397927),
    s = n(58736),
    o = n(657331),
    c = n(498642),
    u = n(71393),
    d = n(576705),
    f = n(661191),
    p = n(844944),
    h = n(513461),
    b = n(123393),
    g = n(652215),
    m = n(985018),
    A = n(116228);
function y(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: y = !1 } = e,
        O = f.default.cast(t),
        {
            joinRequest: j,
            isModmin: v,
            guildId: x,
            maxMembers: E,
        } = (0, l.cf)([p.A, u.A, d.A], () => {
            let e = p.A.getRequest(O),
                t = u.A.getGuild(null == e ? void 0 : e.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && d.A.can(g.xBc.KICK_MEMBERS, t),
                guildId: null == t ? void 0 : t.id,
                maxMembers: null == t ? void 0 : t.maxMembers,
            };
        }),
        _ = (0, l.bG)([c.A], () => (null != x ? c.A.getMemberCount(x) : 0)),
        C = null != E && (null != _ ? _ : 0) >= E,
        {
            approveRequest: S,
            rejectRequest: I,
            submitting: N,
        } = (0, b.W)(
            null == j ? void 0 : j.guildId,
            null == j ? void 0 : j.userId,
            null == j ? void 0 : j.joinRequestId,
        );
    return null != j && j.applicationStatus === h.B5.SUBMITTED && v
        ? (0, r.jsxs)("div", {
              className: A.U,
              children: [
                  (0, r.jsx)(i.m, {
                      text: m.intl.string(m.t.cdPGbE),
                      shouldShow: C,
                      children: (0, r.jsx)(a.Button, {
                          variant: "active",
                          size: "sm",
                          text: m.intl.string(m.t.BzjDQJ),
                          loading: N,
                          onClick: S,
                          disabled: C,
                      }),
                  }),
                  (0, r.jsx)(a.Button, {
                      variant: "critical-primary",
                      size: "sm",
                      text: m.intl.string(m.t.hDtbsz),
                      onClick: I,
                      disabled: N || j.applicationStatus !== h.B5.SUBMITTED,
                  }),
                  n &&
                      (0, r.jsx)(a.Button, {
                          onClick: () => {
                              (0, o.openUserProfileModal)({
                                  userId: j.userId,
                                  guildId: j.guildId,
                              });
                          },
                          variant: "secondary",
                          size: "sm",
                          text: m.intl.string(m.t.iXAna6),
                      }),
                  y && (0, r.jsx)(s.Ay.Divider, {}),
              ],
          })
        : null;
}
