"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(821609),
    r = n(611010),
    l = n(95701),
    a = n(427157),
    o = n(860689),
    c = n(949155),
    d = n(131929),
    u = n(652215),
    _ = n(985018),
    h = n(467661);
function m(e) {
    let { invite: t, onAcceptInvite: n, disableUser: m = !1 } = e;
    if (null == t) return null;
    let g = null != t.guild ? (0, o.DY)(t.guild) : null,
        p = null != t.channel ? (0, l.OY)(t.channel) : null,
        A = null != t.target_application ? new r.Ay(t.target_application) : null,
        f = m || null == t.inviter ? null : new a.A(t.inviter),
        E =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > c.FC) ||
                (null != g && g.features.has(u.GuildFeatures.COMMUNITY))
            ) &&
            null != f &&
            (0, c.B_)(t),
        x = ((e) => {
            let { state: t } = e;
            switch (t) {
                case u.elq.ACCEPTING:
                case u.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        I = { invite: t, user: f, guild: g, channel: p, application: A };
    return (0, c.Fk)(t)
        ? (0, i.jsx)(d.A, { invite: t, channel: p, isSubmitting: x, onAcceptInvite: n })
        : (0, i.jsxs)("div", {
              className: h.kL,
              children: [
                  (0, i.jsx)(c.zN, { application: A, guild: g, user: E || (0, c.PX)(t) ? f : null }),
                  (0, c.PX)(t) ? null : (0, i.jsx)(c.ji, { ...I, showBigUserIcon: E }),
                  (0, i.jsx)(c.TZ, { ...I, showBigUserIcon: E }),
                  (0, i.jsx)(c.IK, { ...I }),
                  (0, i.jsx)("div", {
                      className: h.xG,
                      children: (0, i.jsx)(s.$, {
                          variant: "primary",
                          size: "md",
                          text: _.intl.string(_.t.ohMvm1),
                          onClick: n,
                          loading: x,
                          fullWidth: !0,
                      }),
                  }),
              ],
          });
}
