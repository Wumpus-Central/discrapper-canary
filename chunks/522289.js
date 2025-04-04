n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(392711),
    s = n.n(a),
    l = n(481060),
    c = n(565138),
    u = n(223390);
function d(e) {
    let { className: t, maxGuilds: n, guilds: i, onFocus: a, onClick: d, size: f = c.Z.Sizes.SMALLER, hideOverflowCount: _ = !1, disableGuildNameTooltip: p = !1 } = e;
    function h() {
        let e = s()(i)
                .take(n)
                .map((e) => {
                    let t = e.name;
                    return p
                        ? (0, r.jsx)('div', {
                              className: u.avatar,
                              children: (0, r.jsx)(c.Z, {
                                  guild: e,
                                  onClick: d,
                                  size: f,
                                  showTooltip: !1
                              })
                          })
                        : (0, r.jsx)(
                              l.DY3,
                              {
                                  text: t,
                                  className: u.avatar,
                                  children: (0, r.jsx)(c.Z, {
                                      guild: e,
                                      onClick: d,
                                      size: f
                                  })
                              },
                              e.id
                          );
                })
                .value(),
            t = i.length - n;
        return (
            t > 0 &&
                !_ &&
                (e[e.length - 1] = (0, r.jsxs)(l.zxk, {
                    className: o()(u.avatar, u.overflow),
                    onFocus: a,
                    onClick: (e) => (null == d ? void 0 : d(e)),
                    look: l.zxk.Looks.BLANK,
                    size: l.zxk.Sizes.NONE,
                    children: ['+', t + 1]
                })),
            e
        );
    }
    return i.length <= 0
        ? null
        : (0, r.jsx)('div', {
              className: o()(t, u.avatars),
              children: h()
          });
}
