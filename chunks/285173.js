t.d(e, { Z: () => s });
var n = t(951288),
    r = t(647438),
    l = t(481060),
    i = t(412899),
    a = t(231338);
function s(A) {
    var e;
    let { guildId: t, role: s, className: o, canRemove: g = !1, onRemove: c = a.dG } = A,
        f = (0, l.dQu)(l.TVs.unsafe_rawColors.PRIMARY_300).hex(),
        v = null != (e = null == s ? void 0 : s.colorString) ? e : f,
        u = r.useMemo(() => ({ backgroundColor: "".concat(v, "27") }), [v]);
    return null == s
        ? null
        : (0, n.jsx)(l.P3F, {
              children: (0, n.jsx)(i.UB, {
                  className: o,
                  style: u,
                  role: s,
                  guildId: t,
                  canRemove: g,
                  onRemove: c,
              }),
          });
}
