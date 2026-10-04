n.d(t, { A: () => C });
var l = n(477900);
n(582128);
var i = n(17928),
    s = n(866665),
    a = n(821609),
    r = n(58736),
    o = n(402860),
    c = n(498642),
    d = n(71393),
    u = n(576705),
    h = n(935208),
    m = n(844944),
    g = n(513461),
    p = n(123393),
    A = n(652215),
    f = n(375708),
    x = n(243226);
function C(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: C = !1 } = e,
        E = h.default.cast(t),
        {
            joinRequest: S,
            isModmin: I,
            guildId: j,
            maxMembers: y,
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
        v = (0, i.bG)([c.A], () => (null != j ? c.A.getMemberCount(j) : 0)),
        _ = null != y && (v ?? 0) >= y,
        { approveRequest: b, rejectRequest: T, submitting: N } = (0, p.W)(S?.guildId, S?.userId, S?.joinRequestId);
    return null != S && S.applicationStatus === g.B5.SUBMITTED && I
        ? (0, l.jsxs)("div", {
              className: x.U,
              children: [
                  (0, l.jsx)(s.m, {
                      text: f.intl.string(f.t.cdPGbE),
                      shouldShow: _,
                      children: (0, l.jsx)(a.$, {
                          variant: "active",
                          size: "sm",
                          text: f.intl.string(f.t.BzjDQJ),
                          loading: N,
                          onClick: b,
                          disabled: _,
                      }),
                  }),
                  (0, l.jsx)(a.$, {
                      variant: "critical-primary",
                      size: "sm",
                      text: f.intl.string(f.t.hDtbsz),
                      onClick: T,
                      disabled: N,
                  }),
                  n &&
                      (0, l.jsx)(a.$, {
                          onClick: function () {
                              null != S && (0, o.openUserProfileModal)({ userId: S.userId, guildId: S.guildId });
                          },
                          variant: "secondary",
                          size: "sm",
                          text: f.intl.string(f.t.iXAna6),
                      }),
                  C && (0, l.jsx)(r.Ay.Divider, {}),
              ],
          })
        : null;
}
