n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(200651),
    l = n(192379),
    i = n(481060),
    s = n(412899),
    a = n(231338);
function o(e) {
    var t;
    let { guildId: n, role: o, className: E, canRemove: u = !1, onRemove: c = a.dG } = e,
        d = (0, i.useToken)(i.tokens.unsafe_rawColors.PRIMARY_300).hex(),
        _ = null !== (t = null == o ? void 0 : o.colorString) && void 0 !== t ? t : d,
        A = l.useMemo(() => ({ backgroundColor: ''.concat(_, '27') }), [_]);
    return null == o
        ? null
        : (0, r.jsx)(i.Clickable, {
              children: (0, r.jsx)(s.UB, {
                  className: E,
                  style: A,
                  role: o,
                  guildId: n,
                  canRemove: u,
                  onRemove: c
              })
          });
}
