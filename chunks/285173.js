n.d(t, { Z: () => o });
var r = n(255367),
    l = n(73800),
    s = n(481060),
    i = n(412899),
    a = n(231338);
function o(e) {
    var t;
    let { guildId: n, role: o, className: E, canRemove: u = !1, onRemove: c = a.dG } = e,
        _ = (0, s.dQu)(s.TVs.unsafe_rawColors.PRIMARY_300).hex(),
        d = null != (t = null == o ? void 0 : o.colorString) ? t : _,
        A = l.useMemo(() => ({ backgroundColor: ''.concat(d, '27') }), [d]);
    return null == o
        ? null
        : (0, r.jsx)(s.P3F, {
              children: (0, r.jsx)(i.UB, {
                  className: E,
                  style: A,
                  role: o,
                  guildId: n,
                  canRemove: u,
                  onRemove: c
              })
          });
}
