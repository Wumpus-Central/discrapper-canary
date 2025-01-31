n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(973616),
    a = n(131704),
    o = n(601964),
    s = n(598077),
    c = n(230224),
    d = n(258356),
    u = n(981631),
    h = n(388032),
    _ = n(461342);
let g = (e) => {
    let { state: t } = e;
    switch (t) {
        case u.r2o.ACCEPTING:
        case u.r2o.APP_OPENING:
            return !0;
        default:
            return !1;
    }
};
function p(e) {
    let { invite: t, onAcceptInvite: n, disableUser: p = !1 } = e;
    if (null == t) return null;
    let m = null != t.guild ? new o.ZP(t.guild) : null,
        f = null != t.channel ? (0, a.jD)(t.channel) : null,
        E = null != t.target_application ? new l.ZP(t.target_application) : null,
        I = p || null == t.inviter ? null : new s.Z(t.inviter),
        x = !((null != t.approximate_member_count && t.approximate_member_count > c.mx) || (null != m && m.hasFeature(u.oNc.COMMUNITY))) && null != I && (0, c.WT)(t),
        C = g(t),
        N = {
            invite: t,
            user: I,
            guild: m,
            channel: f,
            application: E
        };
    return (0, c.JI)(t)
        ? (0, i.jsx)(d.Z, {
              invite: t,
              channel: f,
              isSubmitting: C,
              onAcceptInvite: n
          })
        : (0, i.jsxs)('div', {
              className: _.container,
              children: [
                  (0, i.jsx)(c.GB, {
                      application: E,
                      guild: m,
                      user: x || (0, c.X7)(t) ? I : null
                  }),
                  (0, c.X7)(t)
                      ? null
                      : (0, i.jsx)(c.jq, {
                            ...N,
                            showBigUserIcon: x
                        }),
                  (0, i.jsx)(c.UM, {
                      ...N,
                      showBigUserIcon: x
                  }),
                  (0, i.jsx)(c.V6, { ...N }),
                  (0, i.jsx)(r.zxk, {
                      onClick: n,
                      submitting: C,
                      className: _.acceptButton,
                      children: h.intl.string(h.t.ohMvm5)
                  })
              ]
          });
}
