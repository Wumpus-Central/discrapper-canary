n.d(t, {
    V: function () {
        return c;
    }
});
var i = n(200651),
    l = n(481060),
    r = n(695346),
    a = n(316496),
    o = n(388032),
    s = n(53223);
let c = (e) => {
    let { onClick: t } = e,
        { rtcPopoutEnabled: n } = (0, a.S)('not sharing link'),
        c = r.G6.useSetting();
    return !n || c
        ? null
        : (0, i.jsxs)(l.Clickable, {
              onClick: t,
              className: s.container,
              children: [
                  (0, i.jsx)(l.Text, {
                      variant: 'text-xs/medium',
                      children: o.intl.string(o.t.jfrLLS)
                  }),
                  (0, i.jsx)(l.ChevronSmallRightIcon, { size: 'xs' })
              ]
          });
};
