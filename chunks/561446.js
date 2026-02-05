n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(990078),
    s = n(397927),
    r = n(58736),
    o = n(657331),
    c = n(498642),
    d = n(71393),
    u = n(576705),
    h = n(661191),
    m = n(844944),
    A = n(513461),
    p = n(123393),
    g = n(652215),
    f = n(985018),
    _ = n(116228);
function E(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: E = !1 } = e,
        C = h.default.cast(t),
        {
            joinRequest: x,
            isModmin: S,
            guildId: T,
            maxMembers: I,
        } = (0, l.cf)([m.A, d.A, u.A], () => {
            let e = m.A.getRequest(C),
                t = d.A.getGuild(e?.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && u.A.can(g.xBc.KICK_MEMBERS, t),
                guildId: t?.id,
                maxMembers: t?.maxMembers,
            };
        }),
        N = (0, l.bG)([c.A], () => (null != T ? c.A.getMemberCount(T) : 0)),
        v = null != I && (N ?? 0) >= I,
        { approveRequest: y, rejectRequest: b, submitting: R } = (0, p.W)(x?.guildId, x?.userId, x?.joinRequestId);
    return null != x && x.applicationStatus === A.B5.SUBMITTED && S
        ? (0, i.jsxs)("div", {
              className: _.U,
              children: [
                  (0, i.jsx)(a.m, {
                      text: f.intl.string(f.t.cdPGbE),
                      shouldShow: v,
                      children: (0, i.jsx)(s.Button, {
                          variant: "active",
                          size: "sm",
                          text: f.intl.string(f.t.BzjDQJ),
                          loading: R,
                          onClick: y,
                          disabled: v,
                      }),
                  }),
                  (0, i.jsx)(s.Button, {
                      variant: "critical-primary",
                      size: "sm",
                      text: f.intl.string(f.t.hDtbsz),
                      onClick: b,
                      disabled: R || x.applicationStatus !== A.B5.SUBMITTED,
                  }),
                  n &&
                      (0, i.jsx)(s.Button, {
                          onClick: () => {
                              (0, o.openUserProfileModal)({ userId: x.userId, guildId: x.guildId });
                          },
                          variant: "secondary",
                          size: "sm",
                          text: f.intl.string(f.t.iXAna6),
                      }),
                  E && (0, i.jsx)(r.Ay.Divider, {}),
              ],
          })
        : null;
}
