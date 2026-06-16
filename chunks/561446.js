n.d(t, { A: () => E });
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
function E(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: E = !1 } = e,
        x = h.default.cast(t),
        {
            joinRequest: S,
            isModmin: _,
            guildId: I,
            maxMembers: j,
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
        y = (0, i.bG)([c.A], () => (null != I ? c.A.getMemberCount(I) : 0)),
        b = null != j && (y ?? 0) >= j,
        { approveRequest: T, rejectRequest: N, submitting: v } = (0, p.W)(S?.guildId, S?.userId, S?.joinRequestId);
    return null != S && S.applicationStatus === g.B5.SUBMITTED && _
        ? (0, l.jsxs)("div", {
              className: C.U,
              children: [
                  (0, l.jsx)(s.m, {
                      text: f.intl.string(f.t.cdPGbE),
                      shouldShow: b,
                      children: (0, l.jsx)(a.$, {
                          variant: "active",
                          size: "sm",
                          text: f.intl.string(f.t.BzjDQJ),
                          loading: v,
                          onClick: T,
                          disabled: b,
                      }),
                  }),
                  (0, l.jsx)(a.$, {
                      variant: "critical-primary",
                      size: "sm",
                      text: f.intl.string(f.t.hDtbsz),
                      onClick: N,
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
                  E && (0, l.jsx)(r.Ay.Divider, {}),
              ],
          })
        : null;
}
