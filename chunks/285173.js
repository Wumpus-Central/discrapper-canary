n.d(t, { Z: () => o });
var r = n(255367),
    l = n(73800),
    i = n(481060),
    s = n(412899),
    a = n(231338);
function o(e) {
    var t;
    let { guildId: n, role: o, className: u, canRemove: c = !1, onRemove: E = a.dG } = e,
        d = (0, i.dQu)(i.TVs.unsafe_rawColors.PRIMARY_300).hex(),
        _ = null != (t = null == o ? void 0 : o.colorString) ? t : d,
        A = l.useMemo(() => ({ backgroundColor: ''.concat(_, '27') }), [_]);
    return null == o
        ? null
        : (0, r.jsx)(i.P3F, {
              children: (0, r.jsx)(s.UB, {
                  className: u,
                  style: A,
                  role: o,
                  guildId: n,
                  canRemove: c,
                  onRemove: E
              })
          });
}
