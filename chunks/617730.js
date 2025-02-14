n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(973616),
    l = n(131704),
    s = n(601964),
    o = n(598077),
    c = n(230224),
    d = n(258356),
    u = n(981631),
    h = n(388032),
    _ = n(271902);
let m = (e) => {
    let { state: t } = e;
    switch (t) {
        case u.r2o.ACCEPTING:
        case u.r2o.APP_OPENING:
            return !0;
        default:
            return !1;
    }
};
function g(e) {
    let { invite: t, onAcceptInvite: n, disableUser: g = !1 } = e;
    if (null == t) return null;
    let p = null != t.guild ? new s.ZP(t.guild) : null,
        f = null != t.channel ? (0, l.jD)(t.channel) : null,
        x = null != t.target_application ? new a.ZP(t.target_application) : null,
        E = g || null == t.inviter ? null : new o.Z(t.inviter),
        I = !((null != t.approximate_member_count && t.approximate_member_count > c.mx) || (null != p && p.hasFeature(u.oNc.COMMUNITY))) && null != E && (0, c.WT)(t),
        v = m(t),
        C = {
            invite: t,
            user: E,
            guild: p,
            channel: f,
            application: x
        };
    return (0, c.JI)(t)
        ? (0, i.jsx)(d.Z, {
              invite: t,
              channel: f,
              isSubmitting: v,
              onAcceptInvite: n
          })
        : (0, i.jsxs)('div', {
              className: _.container,
              children: [
                  (0, i.jsx)(c.GB, {
                      application: x,
                      guild: p,
                      user: I || (0, c.X7)(t) ? E : null
                  }),
                  (0, c.X7)(t)
                      ? null
                      : (0, i.jsx)(c.jq, {
                            ...C,
                            showBigUserIcon: I
                        }),
                  (0, i.jsx)(c.UM, {
                      ...C,
                      showBigUserIcon: I
                  }),
                  (0, i.jsx)(c.V6, { ...C }),
                  (0, i.jsx)(r.zxk, {
                      onClick: n,
                      submitting: v,
                      className: _.acceptButton,
                      children: h.intl.string(h.t.ohMvm5)
                  })
              ]
          });
}
