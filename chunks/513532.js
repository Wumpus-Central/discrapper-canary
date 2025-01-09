n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(863249),
    a = n(122051),
    o = n(430824),
    c = n(389134),
    d = n(650461),
    u = n(388032),
    m = n(240938);
t.Z = (e) => {
    let { guildId: t, error: n, inSettings: h = !1 } = e,
        g = (0, r.e7)([o.Z], () => o.Z.getGuild(t)),
        x = (0, r.e7)([c.Z, d.ZP], () => {
            var e, n;
            return h ? c.Z.getState().settings.verificationForm : null === (n = d.ZP.getStateForGuild(t)) || void 0 === n ? void 0 : null === (e = n.progress) || void 0 === e ? void 0 : e.verificationForm;
        });
    return null == g
        ? null
        : (0, i.jsxs)('div', {
              className: m.slideContent,
              children: [
                  (0, i.jsx)(l.Heading, {
                      variant: 'heading-xxl/medium',
                      className: m.title,
                      children: h ? u.intl.string(u.t.aOQWKi) : u.intl.string(u.t.qxqOzM)
                  }),
                  (0, i.jsx)(l.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      className: m.subtitle,
                      children: u.intl.string(u.t['tnz5//'])
                  }),
                  (0, i.jsxs)('div', {
                      className: m.maxWidthContainer,
                      children: [
                          null != n &&
                              (0, i.jsx)(l.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'status-danger',
                                  className: m.errorText,
                                  children: n
                              }),
                          (0, i.jsx)(a.Z, {
                              guild: g,
                              isClanContext: !0,
                              onFieldsSave: (e, t) => (s.ZP.updateVerificationFormFieldsLocal(e, [...t]), Promise.resolve()),
                              verificationForm: x
                          })
                      ]
                  })
              ]
          });
};
