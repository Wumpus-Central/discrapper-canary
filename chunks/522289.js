r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(392711),
    l = r.n(s),
    u = r(481060),
    c = r(565138),
    d = r(357498);
function f(e) {
    let { className: n, maxGuilds: r, guilds: a, onFocus: s, onClick: f, size: p = c.Z.Sizes.SMALLER, hideOverflowCount: h = !1, disableGuildNameTooltip: _ = !1 } = e;
    function m() {
        let e = l()(a)
                .take(r)
                .map((e) => {
                    let n = e.name;
                    return _
                        ? (0, i.jsx)('div', {
                              className: d.avatar,
                              children: (0, i.jsx)(c.Z, {
                                  guild: e,
                                  onClick: f,
                                  size: p,
                                  showTooltip: !1
                              })
                          })
                        : (0, i.jsx)(
                              u.TooltipContainer,
                              {
                                  text: n,
                                  className: d.avatar,
                                  children: (0, i.jsx)(c.Z, {
                                      guild: e,
                                      onClick: f,
                                      size: p
                                  })
                              },
                              e.id
                          );
                })
                .value(),
            n = a.length - r;
        return (
            n > 0 &&
                !h &&
                (e[e.length - 1] = (0, i.jsxs)(u.Button, {
                    className: o()(d.avatar, d.overflow),
                    onFocus: s,
                    onClick: (e) => (null == f ? void 0 : f(e)),
                    look: u.Button.Looks.BLANK,
                    size: u.Button.Sizes.NONE,
                    children: ['+', n + 1]
                })),
            e
        );
    }
    return a.length <= 0
        ? null
        : (0, i.jsx)('div', {
              className: o()(n, d.avatars),
              children: m()
          });
}
