var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(826298),
    c = n(540059),
    d = n(625553);
t.Z = l.memo(function (e) {
    var t;
    let { className: n, channel: l, section: r } = e,
        u = (0, c.R6)('ChannelApplicationIcon'),
        h = null != r ? (0, o.ky)(r) : null,
        p =
            null != h
                ? (0, i.jsx)(s.Tooltip, {
                      text: null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : '',
                      position: 'top',
                      children: (e) =>
                          (0, i.jsx)(h, {
                              ...e,
                              channel: l,
                              section: r,
                              width: 24,
                              height: 24
                          })
                  })
                : null;
    return u
        ? p
        : (0, i.jsx)('div', {
              className: a()(n, d.wrapper),
              children: (0, i.jsx)('div', {
                  className: d.icon,
                  children: p
              })
          });
});
