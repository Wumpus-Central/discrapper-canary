n.d(t, { Z: () => y });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(28664),
    a = n(481060),
    o = n(665149),
    s = n(892001),
    c = n(650774),
    u = n(430824),
    d = n(496675),
    p = n(709054),
    h = n(826581),
    f = n(246364),
    m = n(360328),
    g = n(981631),
    b = n(388032),
    C = n(482722);
function y(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: y = !1 } = e,
        _ = p.default.cast(t),
        {
            joinRequest: v,
            isModmin: O,
            guildId: x,
            maxMembers: E,
        } = (0, r.cj)([h.Z, u.Z, d.Z], () => {
            let e = h.Z.getRequest(_),
                t = u.Z.getGuild(null == e ? void 0 : e.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && d.Z.can(g.Plq.KICK_MEMBERS, t),
                guildId: null == t ? void 0 : t.id,
                maxMembers: null == t ? void 0 : t.maxMembers,
            };
        }),
        j = (0, r.e7)([c.Z], () => (null != x ? c.Z.getMemberCount(x) : 0)),
        S = null != E && (null != j ? j : 0) >= E,
        {
            approveRequest: P,
            rejectRequest: I,
            submitting: Z,
        } = (0, m.s)(
            null == v ? void 0 : v.guildId,
            null == v ? void 0 : v.userId,
            null == v ? void 0 : v.joinRequestId,
        );
    return null != v && v.applicationStatus === f.wB.SUBMITTED && O
        ? (0, i.jsxs)("div", {
              className: C.buttons,
              children: [
                  (0, i.jsx)(l.u, {
                      text: b.intl.string(b.t.cdPGbE),
                      shouldShow: S,
                      children: (0, i.jsx)(a.Button, {
                          variant: "active",
                          size: "sm",
                          text: b.intl.string(b.t.BzjDQJ),
                          loading: Z,
                          onClick: P,
                          disabled: S,
                      }),
                  }),
                  (0, i.jsx)(a.Button, {
                      variant: "critical-primary",
                      size: "sm",
                      text: b.intl.string(b.t.hDtbsz),
                      onClick: I,
                      disabled: Z || v.applicationStatus !== f.wB.SUBMITTED,
                  }),
                  n &&
                      (0, i.jsx)(a.Button, {
                          onClick: () => {
                              (0, s.openUserProfileModal)({
                                  userId: v.userId,
                                  guildId: v.guildId,
                              });
                          },
                          variant: "secondary",
                          size: "sm",
                          text: b.intl.string(b.t.iXAna6),
                      }),
                  y && (0, i.jsx)(o.ZP.Divider, {}),
              ],
          })
        : null;
}
