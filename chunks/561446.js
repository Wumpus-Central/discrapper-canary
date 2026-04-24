n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(990078),
    a = n(821609),
    r = n(58736),
    o = n(975732),
    c = n(498642),
    d = n(71393),
    u = n(576705),
    h = n(935208),
    m = n(844944),
    p = n(513461),
    g = n(123393),
    A = n(652215),
    f = n(985018),
    _ = n(782329);
function E(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: E = !1 } = e,
        C = h.default.cast(t),
        {
            joinRequest: x,
            isModmin: b,
            guildId: S,
            maxMembers: I,
        } = (0, l.cf)([m.A, d.A, u.A], () => {
            let e = m.A.getRequest(C),
                t = d.A.getGuild(e?.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && u.A.can(A.xBc.KICK_MEMBERS, t),
                guildId: t?.id,
                maxMembers: t?.maxMembers,
            };
        }),
        y = (0, l.bG)([c.A], () => (null != S ? c.A.getMemberCount(S) : 0)),
        T = null != I && (y ?? 0) >= I,
        { approveRequest: v, rejectRequest: N, submitting: j } = (0, g.W)(x?.guildId, x?.userId, x?.joinRequestId);
    return null != x && x.applicationStatus === p.B5.SUBMITTED && b
        ? (0, i.jsxs)("div", {
              className: _.U,
              children: [
                  (0, i.jsx)(s.m, {
                      text: f.intl.string(f.t.cdPGbE),
                      shouldShow: T,
                      children: (0, i.jsx)(a.$, {
                          variant: "active",
                          size: "sm",
                          text: f.intl.string(f.t.BzjDQJ),
                          loading: j,
                          onClick: v,
                          disabled: T,
                      }),
                  }),
                  (0, i.jsx)(a.$, {
                      variant: "critical-primary",
                      size: "sm",
                      text: f.intl.string(f.t.hDtbsz),
                      onClick: N,
                      disabled: j || x.applicationStatus !== p.B5.SUBMITTED,
                  }),
                  n &&
                      (0, i.jsx)(a.$, {
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
