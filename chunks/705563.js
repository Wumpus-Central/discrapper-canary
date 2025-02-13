n.d(t, { Z: () => C });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(665149),
    s = n(171368),
    o = n(650774),
    c = n(430824),
    d = n(496675),
    u = n(709054),
    h = n(826581),
    p = n(246364),
    m = n(360328),
    f = n(981631),
    g = n(388032),
    _ = n(120196);
function C(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: C = !1 } = e,
        x = u.default.cast(t),
        {
            joinRequest: v,
            isModmin: E,
            guildId: I,
            maxMembers: b
        } = (0, l.cj)([h.Z, c.Z, d.Z], () => {
            let e = h.Z.getRequest(x),
                t = c.Z.getGuild(null == e ? void 0 : e.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && d.Z.can(f.Plq.KICK_MEMBERS, t),
                guildId: null == t ? void 0 : t.id,
                maxMembers: null == t ? void 0 : t.maxMembers
            };
        }),
        Z = (0, l.e7)([o.Z], () => (null != I ? o.Z.getMemberCount(I) : 0)),
        N = null != b && (null != Z ? Z : 0) >= b,
        { approveRequest: T, rejectRequest: S, submitting: j } = (0, m.s)(null == v ? void 0 : v.guildId, null == v ? void 0 : v.userId, null == v ? void 0 : v.joinRequestId);
    return null != v && v.applicationStatus === p.wB.SUBMITTED && E
        ? (0, i.jsxs)('div', {
              className: _.buttons,
              children: [
                  (0, i.jsx)(a.ua7, {
                      text: g.intl.string(g.t.RbIXi4),
                      shouldShow: N,
                      children: (e) =>
                          (0, i.jsx)(a.zxk, {
                              ...e,
                              color: a.zxk.Colors.GREEN,
                              submitting: j,
                              onClick: T,
                              size: a.PhG.SMALL,
                              disabled: N,
                              children: g.intl.string(g.t.BzjDQE)
                          })
                  }),
                  (0, i.jsx)(a.zxk, {
                      color: a.zxk.Colors.RED,
                      onClick: S,
                      size: a.PhG.SMALL,
                      disabled: j || v.applicationStatus !== p.wB.SUBMITTED,
                      children: g.intl.string(g.t.hDtbs7)
                  }),
                  n &&
                      (0, i.jsx)(a.zxk, {
                          color: a.zxk.Colors.TRANSPARENT,
                          onClick: () => {
                              (0, s.openUserProfileModal)({
                                  userId: v.userId,
                                  guildId: v.guildId,
                                  analyticsLocation: {
                                      section: f.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                      object: f.qAy.JOIN_REQUEST
                                  }
                              });
                          },
                          size: a.PhG.SMALL,
                          children: g.intl.string(g.t.iXAna2)
                      }),
                  C && (0, i.jsx)(r.ZP.Divider, {})
              ]
          })
        : null;
}
