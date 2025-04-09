n.d(t, { Z: () => i });
var r = n(200651),
    l = n(192379),
    a = n(481060),
    s = n(412899),
    o = n(231338);
function i(e) {
    var t;
    let { guildId: n, role: i, className: E, canRemove: c = !1, onRemove: u = o.dG } = e,
        _ = (0, a.dQu)(a.TVs.unsafe_rawColors.PRIMARY_300).hex(),
        d = null != (t = null == i ? void 0 : i.colorString) ? t : _,
        A = l.useMemo(() => ({ backgroundColor: ''.concat(d, '27') }), [d]);
    return null == i
        ? null
        : (0, r.jsx)(a.P3F, {
              children: (0, r.jsx)(s.UB, {
                  className: E,
                  style: A,
                  role: i,
                  guildId: n,
                  canRemove: c,
                  onRemove: u
              })
          });
}
