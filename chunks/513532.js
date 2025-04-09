n.d(t, { Z: () => g }), n(388685);
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(863249),
    l = n(122051),
    o = n(430824),
    c = n(389134),
    d = n(650461),
    u = n(388032),
    m = n(130116);
let g = (e) => {
    let { guildId: t, error: n, inSettings: g = !1 } = e,
        p = (0, i.e7)([o.Z], () => o.Z.getGuild(t)),
        f = (0, i.e7)([c.Z, d.ZP], () => {
            var e, n;
            return g ? c.Z.getState().settings.verificationForm : null == (n = d.ZP.getStateForGuild(t)) || null == (e = n.progress) ? void 0 : e.verificationForm;
        });
    return null == p
        ? null
        : (0, r.jsxs)('div', {
              className: m.slideContent,
              children: [
                  (0, r.jsx)(s.X6q, {
                      variant: 'heading-xxl/medium',
                      className: m.title,
                      children: g ? u.NW.string(u.t.aOQWKi) : u.NW.string(u.t.qxqOzM)
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      className: m.subtitle,
                      children: u.NW.string(u.t['tnz5//'])
                  }),
                  (0, r.jsxs)('div', {
                      className: m.maxWidthContainer,
                      children: [
                          null != n &&
                              (0, r.jsx)(s.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'status-danger',
                                  className: m.errorText,
                                  children: n
                              }),
                          (0, r.jsx)(l.Z, {
                              guild: p,
                              isClanContext: !0,
                              onFieldsSave: (e, t) => (a.ZP.updateVerificationFormFieldsLocal(e, [...t]), Promise.resolve()),
                              verificationForm: f
                          })
                      ]
                  })
              ]
          });
};
