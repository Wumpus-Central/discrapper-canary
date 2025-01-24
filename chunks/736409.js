n.d(t, {
    j: function () {
        return g;
    }
});
var i = n(200651),
    l = n(793030),
    r = n(704215),
    a = n(780384),
    o = n(481060),
    s = n(410030),
    c = n(243778),
    u = n(695346),
    d = n(316496),
    h = n(388032),
    p = n(61260),
    m = n(204794);
let f = {
        topLeftDark: 'rgba(62, 22, 137, 0.8)',
        topRightDark: 'rgba(160, 86, 242, 0.4)',
        topLeftLight: 'rgba(159, 86, 242, 0.4)',
        topRightLight: 'rgba(222, 194, 252, 0.5)'
    },
    g = (e) => {
        let { isForceShowSharingPopout: t } = e,
            n = (0, s.ZP)(),
            { rtcPopoutEnabled: g } = (0, d.S)('SharingPrivacyPopout'),
            v = u.G6.useSetting();
        return g
            ? (0, i.jsx)(c.ZP, {
                  contentTypes: [r.z.SHARE_ACTIVITY_COACHMARK],
                  children: (e) => {
                      let { visibleContent: s } = e;
                      if (s === r.z.SHARE_ACTIVITY_COACHMARK || t)
                          return (0, i.jsxs)('div', {
                              className: p.wrapper,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: p.gradient,
                                      style: { background: 'radial-gradient(75% 75% at 0% 0%, '.concat((0, a.wj)(n) ? f.topLeftDark : f.topLeftLight, ' 0%, transparent 100%),\n    radial-gradient(70% 50% at 100% 0%, ').concat((0, a.wj)(n) ? f.topRightDark : f.topRightLight, ' 0%, transparent 100%)') }
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: p.content,
                                      children: [
                                          (0, i.jsx)('img', {
                                              alt: '',
                                              src: m.Z,
                                              className: p.controllerImage
                                          }),
                                          (0, i.jsx)(l.X6, {
                                              variant: 'heading-md/bold',
                                              className: p.title,
                                              children: h.intl.string(h.t.ObD1w8)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: p.contentContainer,
                                              children: [
                                                  (0, i.jsxs)('div', {
                                                      className: p.toggleContainer,
                                                      children: [
                                                          (0, i.jsx)(o.Text, {
                                                              variant: 'text-sm/medium',
                                                              children: h.intl.string(h.t.drIYTU)
                                                          }),
                                                          (0, i.jsx)(o.Switch, {
                                                              onChange: (e) => u.G6.updateSetting(e),
                                                              checked: v
                                                          })
                                                      ]
                                                  }),
                                                  (0, i.jsx)(o.Text, {
                                                      variant: 'text-xs/normal',
                                                      children: h.intl.string(h.t.GnhKNz)
                                                  })
                                              ]
                                          }),
                                          (0, i.jsx)(o.Button, {
                                              look: o.Button.Looks.BLANK,
                                              className: p.viewSettingsButton,
                                              children: h.intl.string(h.t.g8usuL)
                                          })
                                      ]
                                  })
                              ]
                          });
                  }
              })
            : null;
    };
