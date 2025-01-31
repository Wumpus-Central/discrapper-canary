n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(826298),
    c = n(540059),
    d = n(625553);
let u = l.memo(function (e) {
    var t;
    let { className: n, channel: l, section: a } = e,
        u = (0, c.R6)('ChannelApplicationIcon'),
        h = null != a ? (0, o.ky)(a) : null,
        p =
            null != h
                ? (0, i.jsx)(s.ua7, {
                      text: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : '',
                      position: 'top',
                      children: (e) =>
                          (0, i.jsx)(h, {
                              ...e,
                              channel: l,
                              section: a,
                              width: 24,
                              height: 24
                          })
                  })
                : null;
    return u
        ? p
        : (0, i.jsx)('div', {
              className: r()(n, d.wrapper),
              children: (0, i.jsx)('div', {
                  className: d.icon,
                  children: p
              })
          });
});
