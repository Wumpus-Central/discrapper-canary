n.d(t, { Z: () => C });
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
    y = n(482722);
function C(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: C = !1 } = e,
        v = p.default.cast(t),
        {
            joinRequest: _,
            isModmin: x,
            guildId: j,
            maxMembers: O,
        } = (0, r.cj)([h.Z, u.Z, d.Z], () => {
            let e = h.Z.getRequest(v),
                t = u.Z.getGuild(null == e ? void 0 : e.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && d.Z.can(g.Plq.KICK_MEMBERS, t),
                guildId: null == t ? void 0 : t.id,
                maxMembers: null == t ? void 0 : t.maxMembers,
            };
        }),
        E = (0, r.e7)([c.Z], () => (null != j ? c.Z.getMemberCount(j) : 0)),
        S = null != O && (null != E ? E : 0) >= O,
        {
            approveRequest: P,
            rejectRequest: I,
            submitting: Z,
        } = (0, m.s)(
            null == _ ? void 0 : _.guildId,
            null == _ ? void 0 : _.userId,
            null == _ ? void 0 : _.joinRequestId,
        );
    return null != _ && _.applicationStatus === f.wB.SUBMITTED && x
        ? (0, i.jsxs)("div", {
              className: y.buttons,
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
                      disabled: Z || _.applicationStatus !== f.wB.SUBMITTED,
                  }),
                  n &&
                      (0, i.jsx)(a.Button, {
                          onClick: () => {
                              (0, s.openUserProfileModal)({
                                  userId: _.userId,
                                  guildId: _.guildId,
                              });
                          },
                          variant: "secondary",
                          size: "sm",
                          text: b.intl.string(b.t.iXAna6),
                      }),
                  C && (0, i.jsx)(o.ZP.Divider, {}),
              ],
          })
        : null;
}
