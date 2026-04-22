n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(990078),
    s = n(821609),
    r = n(58736),
    o = n(657331),
    c = n(498642),
    d = n(71393),
    u = n(576705),
    h = n(661191),
    m = n(844944),
    A = n(513461),
    g = n(123393),
    p = n(652215),
    _ = n(985018),
    f = n(782329);
function E(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: E = !1 } = e,
        C = h.default.cast(t),
        {
            joinRequest: x,
            isModmin: S,
            guildId: I,
            maxMembers: N,
        } = (0, l.cf)([m.A, d.A, u.A], () => {
            let e = m.A.getRequest(C),
                t = d.A.getGuild(e?.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && u.A.can(p.xBc.KICK_MEMBERS, t),
                guildId: t?.id,
                maxMembers: t?.maxMembers,
            };
        }),
        v = (0, l.bG)([c.A], () => (null != I ? c.A.getMemberCount(I) : 0)),
        T = null != N && (v ?? 0) >= N,
        { approveRequest: y, rejectRequest: b, submitting: j } = (0, g.W)(x?.guildId, x?.userId, x?.joinRequestId);
    return null != x && x.applicationStatus === A.B5.SUBMITTED && S
        ? (0, i.jsxs)("div", {
              className: f.U,
              children: [
                  (0, i.jsx)(a.m, {
                      text: _.intl.string(_.t.cdPGbE),
                      shouldShow: T,
                      children: (0, i.jsx)(s.$, {
                          variant: "active",
                          size: "sm",
                          text: _.intl.string(_.t.BzjDQJ),
                          loading: j,
                          onClick: y,
                          disabled: T,
                      }),
                  }),
                  (0, i.jsx)(s.$, {
                      variant: "critical-primary",
                      size: "sm",
                      text: _.intl.string(_.t.hDtbsz),
                      onClick: b,
                      disabled: j || x.applicationStatus !== A.B5.SUBMITTED,
                  }),
                  n &&
                      (0, i.jsx)(s.$, {
                          onClick: () => {
                              (0, o.openUserProfileModal)({ userId: x.userId, guildId: x.guildId });
                          },
                          variant: "secondary",
                          size: "sm",
                          text: _.intl.string(_.t.iXAna6),
                      }),
                  E && (0, i.jsx)(r.Ay.Divider, {}),
              ],
          })
        : null;
}
