n.d(t, { A: () => x });
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
    A = n(123393),
    p = n(652215),
    f = n(375708),
    C = n(243226);
function x(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: x = !1 } = e,
        E = h.default.cast(t),
        {
            joinRequest: S,
            isModmin: I,
            guildId: _,
            maxMembers: j,
        } = (0, i.cf)([m.A, d.A, u.A], () => {
            let e = m.A.getRequest(E),
                t = d.A.getGuild(e?.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && u.A.can(p.xBc.KICK_MEMBERS, t),
                guildId: t?.id,
                maxMembers: t?.maxMembers,
            };
        }),
        y = (0, i.bG)([c.A], () => (null != _ ? c.A.getMemberCount(_) : 0)),
        b = null != j && (y ?? 0) >= j,
        { approveRequest: N, rejectRequest: T, submitting: v } = (0, A.W)(S?.guildId, S?.userId, S?.joinRequestId);
    return null != S && S.applicationStatus === g.B5.SUBMITTED && I
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
                          onClick: N,
                          disabled: b,
                      }),
                  }),
                  (0, l.jsx)(a.$, {
                      variant: "critical-primary",
                      size: "sm",
                      text: f.intl.string(f.t.hDtbsz),
                      onClick: T,
                      disabled: v,
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
                  x && (0, l.jsx)(r.Ay.Divider, {}),
              ],
          })
        : null;
}
