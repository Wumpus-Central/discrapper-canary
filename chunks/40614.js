n.d(t, { V: () => d });
var r = n(200651),
    i = n(442837),
    l = n(481060),
    o = n(695346),
    a = n(885110),
    s = n(316496),
    c = n(388032),
    u = n(24655);
let d = (e) => {
    let { onClick: t } = e;
    return !(function () {
        let { rtcPopoutEnabled: e } = (0, s.SN)('not sharing link'),
            { rtcPopoutEnabled: t } = (0, s.m_)('not sharing link'),
            n = o.G6.useSetting(),
            r = (0, i.e7)([a.Z], () => a.Z.getStatus());
        return t ? !n || r === l.Skl.INVISIBLE : !!e && !n;
    })()
        ? null
        : (0, r.jsx)(l.P3F, {
              onClick: t,
              className: u.container,
              children: (0, r.jsxs)(l.Text, {
                  variant: 'text-xs/medium',
                  className: u.text,
                  color: 'header-secondary',
                  children: [
                      (0, r.jsx)(l.kZF, {
                          size: 'xxs',
                          color: 'currentColor',
                          className: u.iconEye
                      }),
                      c.NW.string(c.t.jfrLLS)
                  ]
              })
          });
};
