n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(442837),
    i = n(481060),
    a = n(668826),
    c = n(120421),
    l = n(18582),
    u = n(884479),
    d = n(388032),
    f = n(430295),
    p = n(527474),
    m = n(907614);
function g() {
    let [e, t] = (0, s.useState)(!1),
        [n, g] = (0, s.useState)(!1),
        b = (0, s.useRef)(-1),
        y = (0, o.e7)([c.Z], () => c.Z.volume),
        h = (0, o.e7)([c.Z], () => c.Z.isMuted);
    return (0, r.jsxs)('div', {
        className: f.volume,
        onMouseEnter: () => t(!0),
        onMouseLeave: () => t(!1),
        children: [
            (0, r.jsx)(l.Z, {
                onClick: () => (0, a.Zj)(!h),
                children: (0, r.jsx)('img', {
                    className: f.icon,
                    src: h ? m : p,
                    alt: d.NW.string(u.Z['3Kvtn5'])
                })
            }),
            e || n
                ? (0, r.jsx)(i.iRW, {
                      className: f.volumeSlider,
                      initialValue: h ? 0 : 100 * y,
                      minValue: 0,
                      maxValue: 100,
                      asValueChanges: (e) => {
                          (0, a.jA)(e / 100),
                              (0, a.Zj)(0 === e),
                              g(!0),
                              clearTimeout(b.current),
                              (b.current = setTimeout(() => {
                                  g(!1);
                              }, 1000));
                      }
                  })
                : null
        ]
    });
}
