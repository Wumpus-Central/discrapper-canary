n.d(t, { Z: () => o });
var r = n(200651),
    l = n(192379),
    s = n(481060),
    a = n(412899),
    i = n(231338);
function o(e) {
    var t;
    let { guildId: n, role: o, className: E, canRemove: u = !1, onRemove: c = i.dG } = e,
        _ = (0, s.dQu)(s.TVs.unsafe_rawColors.PRIMARY_300).hex(),
        d = null != (t = null == o ? void 0 : o.colorString) ? t : _,
        A = l.useMemo(() => ({ backgroundColor: ''.concat(d, '27') }), [d]);
    return null == o
        ? null
        : (0, r.jsx)(s.P3F, {
              children: (0, r.jsx)(a.UB, {
                  className: E,
                  style: A,
                  role: o,
                  guildId: n,
                  canRemove: u,
                  onRemove: c
              })
          });
}
