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
    _ = n(652215),
    p = n(985018),
    f = n(782329);
function E(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: E = !1 } = e,
        C = h.default.cast(t),
        {
            joinRequest: x,
            isModmin: S,
            guildId: I,
            maxMembers: v,
        } = (0, l.cf)([m.A, d.A, u.A], () => {
            let e = m.A.getRequest(C),
                t = d.A.getGuild(e?.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && u.A.can(_.xBc.KICK_MEMBERS, t),
                guildId: t?.id,
                maxMembers: t?.maxMembers,
            };
        }),
        N = (0, l.bG)([c.A], () => (null != I ? c.A.getMemberCount(I) : 0)),
        T = null != v && (N ?? 0) >= v,
        { approveRequest: y, rejectRequest: b, submitting: j } = (0, g.W)(x?.guildId, x?.userId, x?.joinRequestId);
    return null != x && x.applicationStatus === A.B5.SUBMITTED && S
        ? (0, i.jsxs)("div", {
              className: f.U,
              children: [
                  (0, i.jsx)(a.m, {
                      text: p.intl.string(p.t.cdPGbE),
                      shouldShow: T,
                      children: (0, i.jsx)(s.$, {
                          variant: "active",
                          size: "sm",
                          text: p.intl.string(p.t.BzjDQJ),
                          loading: j,
                          onClick: y,
                          disabled: T,
                      }),
                  }),
                  (0, i.jsx)(s.$, {
                      variant: "critical-primary",
                      size: "sm",
                      text: p.intl.string(p.t.hDtbsz),
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
                          text: p.intl.string(p.t.iXAna6),
                      }),
                  E && (0, i.jsx)(r.Ay.Divider, {}),
              ],
          })
        : null;
}
