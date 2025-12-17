n.d(t, {
    $: () => E,
    Z: () => d,
});
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(481060),
    s = n(412899),
    o = n(607070),
    u = n(884902),
    c = n(231338);
function E(e) {
    var t;
    let { role: n, guildId: l } = e,
        s = (0, u._f)(l, null != n ? n : void 0, null == n ? void 0 : n.colorStrings),
        c = (0, i.e7)([o.Z], () => o.Z.roleStyle),
        E = (0, a.dQu)(a.TVs.unsafe_rawColors.PRIMARY_300).hex(),
        d = null != (t = null == n ? void 0 : n.colorString) ? t : E;
    return null == n
        ? null
        : "dot" === c
          ? (0, r.jsx)(a.FhE, {
                color: null != d ? d : void 0,
                colors: s,
                background: !1,
                tooltip: !1,
            })
          : (0, r.jsx)(a.xko, {
                color: null != d ? d : null,
                colors: s,
            });
}
function d(e) {
    var t;
    let { guildId: n, role: i, className: o, canRemove: u = !1, onRemove: E = c.dG } = e,
        d = (0, a.dQu)(a.TVs.unsafe_rawColors.PRIMARY_300).hex(),
        _ = null != (t = null == i ? void 0 : i.colorString) ? t : d,
        A = l.useMemo(() => ({ backgroundColor: "".concat(_, "27") }), [_]);
    return null == i
        ? null
        : (0, r.jsx)(a.P3F, {
              children: (0, r.jsx)(s.UB, {
                  className: o,
                  style: A,
                  role: i,
                  guildId: n,
                  canRemove: u,
                  onRemove: E,
              }),
          });
}
