n.d(t, { Z: () => i });
var r = n(200651),
    l = n(192379),
    s = n(481060),
    a = n(412899),
    o = n(231338);
function i(e) {
    var t;
    let { guildId: n, role: i, className: E, canRemove: c = !1, onRemove: u = o.dG } = e,
        _ = (0, s.dQu)(s.TVs.unsafe_rawColors.PRIMARY_300).hex(),
        d = null != (t = null == i ? void 0 : i.colorString) ? t : _,
        A = l.useMemo(() => ({ backgroundColor: ''.concat(d, '27') }), [d]);
    return null == i
        ? null
        : (0, r.jsx)(s.P3F, {
              children: (0, r.jsx)(a.UB, {
                  className: E,
                  style: A,
                  role: i,
                  guildId: n,
                  canRemove: c,
                  onRemove: u
              })
          });
}
