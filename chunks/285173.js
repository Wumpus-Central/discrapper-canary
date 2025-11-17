n.d(t, {
    $: () => E,
    Z: () => d,
});
var r = n(54381),
    l = n(473749),
    i = n(442837),
    s = n(481060),
    a = n(412899),
    o = n(607070),
    u = n(884902),
    c = n(231338);
function E(e) {
    var t;
    let { role: n, guildId: l } = e,
        a = (0, u._f)(l, null != n ? n : void 0, null == n ? void 0 : n.colorStrings),
        c = (0, i.e7)([o.Z], () => o.Z.roleStyle),
        E = (0, s.dQu)(s.TVs.unsafe_rawColors.PRIMARY_300).hex(),
        d = null != (t = null == n ? void 0 : n.colorString) ? t : E;
    return null == n
        ? null
        : "dot" === c
          ? (0, r.jsx)(s.FhE, {
                color: null != d ? d : void 0,
                colors: a,
                background: !1,
                tooltip: !1,
            })
          : (0, r.jsx)(s.xko, {
                color: null != d ? d : null,
                colors: a,
            });
}
function d(e) {
    var t;
    let { guildId: n, role: i, className: o, canRemove: u = !1, onRemove: E = c.dG } = e,
        d = (0, s.dQu)(s.TVs.unsafe_rawColors.PRIMARY_300).hex(),
        _ = null != (t = null == i ? void 0 : i.colorString) ? t : d,
        A = l.useMemo(() => ({ backgroundColor: "".concat(_, "27") }), [_]);
    return null == i
        ? null
        : (0, r.jsx)(s.P3F, {
              children: (0, r.jsx)(a.UB, {
                  className: o,
                  style: A,
                  role: i,
                  guildId: n,
                  canRemove: u,
                  onRemove: E,
              }),
          });
}
