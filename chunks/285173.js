t.d(e, { Z: () => a });
var n = t(255367),
    r = t(73800),
    l = t(481060),
    i = t(412899),
    s = t(231338);
function a(A) {
    var e;
    let { guildId: t, role: a, className: o, canRemove: g = !1, onRemove: f = s.dG } = A,
        c = (0, l.dQu)(l.TVs.unsafe_rawColors.PRIMARY_300).hex(),
        v = null != (e = null == a ? void 0 : a.colorString) ? e : c,
        h = r.useMemo(() => ({ backgroundColor: ''.concat(v, '27') }), [v]);
    return null == a
        ? null
        : (0, n.jsx)(l.P3F, {
              children: (0, n.jsx)(i.UB, {
                  className: o,
                  style: h,
                  role: a,
                  guildId: t,
                  canRemove: g,
                  onRemove: f
              })
          });
}
