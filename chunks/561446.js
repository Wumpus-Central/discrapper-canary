n.d(t, { A: () => x });
var l = n(627968);
n(64700);
var i = n(17928),
    s = n(990078),
    a = n(821609),
    r = n(58736),
    o = n(975732),
    c = n(498642),
    d = n(71393),
    u = n(576705),
    h = n(935208),
    m = n(844944),
    g = n(513461),
    p = n(123393),
    A = n(652215),
    f = n(375708),
    C = n(782329);
function x(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: x = !1 } = e,
        E = h.default.cast(t),
        {
            joinRequest: S,
            isModmin: _,
            guildId: I,
            maxMembers: j,
        } = (0, i.cf)([m.A, d.A, u.A], () => {
            let e = m.A.getRequest(E),
                t = d.A.getGuild(e?.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && u.A.can(A.xBc.KICK_MEMBERS, t),
                guildId: t?.id,
                maxMembers: t?.maxMembers,
            };
        }),
        y = (0, i.bG)([c.A], () => (null != I ? c.A.getMemberCount(I) : 0)),
        N = null != j && (y ?? 0) >= j,
        { approveRequest: T, rejectRequest: b, submitting: v } = (0, p.W)(S?.guildId, S?.userId, S?.joinRequestId);
    return null != S && S.applicationStatus === g.B5.SUBMITTED && _
        ? (0, l.jsxs)("div", {
              className: C.U,
              children: [
                  (0, l.jsx)(s.m, {
                      text: f.intl.string(f.t.cdPGbE),
                      shouldShow: N,
                      children: (0, l.jsx)(a.$, {
                          variant: "active",
                          size: "sm",
                          text: f.intl.string(f.t.BzjDQJ),
                          loading: v,
                          onClick: T,
                          disabled: N,
                      }),
                  }),
                  (0, l.jsx)(a.$, {
                      variant: "critical-primary",
                      size: "sm",
                      text: f.intl.string(f.t.hDtbsz),
                      onClick: b,
                      disabled: v || S.applicationStatus !== g.B5.SUBMITTED,
                  }),
                  n &&
                      (0, l.jsx)(a.$, {
                          onClick: () => {
                              (0, o.openUserProfileModal)({ userId: S.userId, guildId: S.guildId });
                          },
                          variant: "secondary",
                          size: "sm",
                          text: f.intl.string(f.t.iXAna6),
                      }),
                  x && (0, l.jsx)(r.Ay.Divider, {}),
              ],
          })
        : null;
}
