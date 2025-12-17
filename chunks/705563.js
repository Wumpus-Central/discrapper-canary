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
    f = n(826581),
    h = n(246364),
    m = n(360328),
    g = n(981631),
    b = n(388032),
    C = n(679817);
function y(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: y = !1 } = e,
        v = p.default.cast(t),
        {
            joinRequest: x,
            isModmin: O,
            guildId: E,
            maxMembers: j,
        } = (0, r.cj)([f.Z, u.Z, d.Z], () => {
            let e = f.Z.getRequest(v),
                t = u.Z.getGuild(null == e ? void 0 : e.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && d.Z.can(g.Plq.KICK_MEMBERS, t),
                guildId: null == t ? void 0 : t.id,
                maxMembers: null == t ? void 0 : t.maxMembers,
            };
        }),
        S = (0, r.e7)([c.Z], () => (null != E ? c.Z.getMemberCount(E) : 0)),
        _ = null != j && (null != S ? S : 0) >= j,
        {
            approveRequest: P,
            rejectRequest: I,
            submitting: Z,
        } = (0, m.s)(
            null == x ? void 0 : x.guildId,
            null == x ? void 0 : x.userId,
            null == x ? void 0 : x.joinRequestId,
        );
    return null != x && x.applicationStatus === h.wB.SUBMITTED && O
        ? (0, i.jsxs)("div", {
              className: C.buttons,
              children: [
                  (0, i.jsx)(l.u, {
                      text: b.intl.string(b.t.cdPGbE),
                      shouldShow: _,
                      children: (0, i.jsx)(a.Button, {
                          variant: "active",
                          size: "sm",
                          text: b.intl.string(b.t.BzjDQJ),
                          loading: Z,
                          onClick: P,
                          disabled: _,
                      }),
                  }),
                  (0, i.jsx)(a.Button, {
                      variant: "critical-primary",
                      size: "sm",
                      text: b.intl.string(b.t.hDtbsz),
                      onClick: I,
                      disabled: Z || x.applicationStatus !== h.wB.SUBMITTED,
                  }),
                  n &&
                      (0, i.jsx)(a.Button, {
                          onClick: () => {
                              (0, s.openUserProfileModal)({
                                  userId: x.userId,
                                  guildId: x.guildId,
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
