r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(392711),
    l = r.n(o),
    u = r(481060),
    c = r(565138),
    d = r(357498);
function f(e) {
    let { className: n, maxGuilds: r, guilds: a, onFocus: o, onClick: f, size: _ = c.Z.Sizes.SMALLER, hideOverflowCount: h = !1, disableGuildNameTooltip: p = !1 } = e;
    function m() {
        let e = l()(a)
                .take(r)
                .map((e) => {
                    let n = e.name;
                    return p
                        ? (0, i.jsx)('div', {
                              className: d.avatar,
                              children: (0, i.jsx)(c.Z, {
                                  guild: e,
                                  onClick: f,
                                  size: _,
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
                                      size: _
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
                    className: s()(d.avatar, d.overflow),
                    onFocus: o,
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
              className: s()(n, d.avatars),
              children: m()
          });
}
