n.d(t, { Z: () => h });
var l = n(200651);
n(192379);
var i = n(780384),
    s = n(481060),
    r = n(410030),
    a = n(518950),
    o = n(51144),
    C = n(105759),
    d = n(898969),
    u = n(703614),
    c = n(182294),
    p = n(388032),
    x = n(684315);
let h = () => {
    let e = (0, C.Z)(),
        { avatarSrc: t, eventHandlers: n } = (0, a.Z)({
            user: e,
            size: c.EF.SIZE_32,
            animateOnHover: !0
        }),
        h = (0, r.Fg)(),
        _ = (0, i.ap)(h),
        f = o.ZP.getName(e),
        j = _ ? d.Z : u.Z;
    return null == e
        ? null
        : (0, l.jsxs)('div', {
              className: x.attributionBannerContainer,
              children: [
                  (0, l.jsx)('div', {
                      className: x.avatarContainer,
                      children: (0, l.jsx)(s.qEK, {
                          src: t,
                          'aria-label': e.username,
                          size: c.EF.SIZE_32,
                          ...n
                      })
                  }),
                  (0, l.jsx)(s.Text, {
                      variant: 'text-xs/bold',
                      className: x.bannerHeader,
                      children: p.intl.format(p.t.oxhCOj, { userName: f })
                  }),
                  (0, l.jsx)(j, { className: x.bannerIcon })
              ]
          });
};
