n.d(t, { Z: () => s });
var r = n(200651),
    l = n(192379),
    a = n(481060),
    i = n(412899),
    o = n(231338);
function s(e) {
    var t;
    let { guildId: n, role: s, className: E, canRemove: c = !1, onRemove: u = o.dG } = e,
        _ = (0, a.dQu)(a.TVs.unsafe_rawColors.PRIMARY_300).hex(),
        d = null !== (t = null == s ? void 0 : s.colorString) && void 0 !== t ? t : _,
        A = l.useMemo(() => ({ backgroundColor: ''.concat(d, '27') }), [d]);
    return null == s
        ? null
        : (0, r.jsx)(a.P3F, {
              children: (0, r.jsx)(i.UB, {
                  className: E,
                  style: A,
                  role: s,
                  guildId: n,
                  canRemove: c,
                  onRemove: u
              })
          });
}
