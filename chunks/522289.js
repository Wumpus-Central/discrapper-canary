n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(481060),
    u = n(565138),
    c = n(630083);
function d(e) {
    let { className: t, maxGuilds: n, guilds: r, onFocus: s, onClick: d, size: f = u.Z.Sizes.SMALLER, hideOverflowCount: _ = !1, disableGuildNameTooltip: p = !1 } = e;
    function h() {
        let e = o()(r)
                .take(n)
                .map((e) => {
                    let t = e.name;
                    return p
                        ? (0, i.jsx)('div', {
                              className: c.avatar,
                              children: (0, i.jsx)(u.Z, {
                                  guild: e,
                                  onClick: d,
                                  size: f,
                                  showTooltip: !1
                              })
                          })
                        : (0, i.jsx)(
                              l.DY3,
                              {
                                  text: t,
                                  className: c.avatar,
                                  children: (0, i.jsx)(u.Z, {
                                      guild: e,
                                      onClick: d,
                                      size: f
                                  })
                              },
                              e.id
                          );
                })
                .value(),
            t = r.length - n;
        return (
            t > 0 &&
                !_ &&
                (e[e.length - 1] = (0, i.jsxs)(l.zxk, {
                    className: a()(c.avatar, c.overflow),
                    onFocus: s,
                    onClick: (e) => (null == d ? void 0 : d(e)),
                    look: l.zxk.Looks.BLANK,
                    size: l.zxk.Sizes.NONE,
                    children: ['+', t + 1]
                })),
            e
        );
    }
    return r.length <= 0
        ? null
        : (0, i.jsx)('div', {
              className: a()(t, c.avatars),
              children: h()
          });
}
