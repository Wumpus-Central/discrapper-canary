n.d(t, { d: () => p });
var r = n(951288),
    i = n(442837),
    l = n(728345),
    a = n(925329),
    o = n(463421),
    s = n(314897),
    c = n(906605),
    u = n(748855),
    d = n(972526);
function p(e) {
    var t;
    let { guildId: n } = e,
        p = (0, i.e7)([s.default], () => s.default.getId()),
        h = (0, o.Z)(p, n)[0],
        f = null != (t = (0, l.IX)(null == h ? void 0 : h.application_id).data) ? t : void 0;
    return null == f
        ? null
        : (0, r.jsx)("div", {
              className: d.container,
              children: (0, r.jsx)(u.L, {
                  label: f.name,
                  icon: (0, r.jsx)(a.Z, {
                      game: f,
                      size: a.Z.Sizes.XSMALL,
                  }),
                  setStatus: () => (0, c.XE)(f.id, !0),
              }),
          });
}
