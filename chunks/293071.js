n.r(t), n.d(t, { default: () => d });
var a = n(627968);
n(64700);
var i = n(215530),
    l = n(976270),
    r = n(916217),
    s = n(417021),
    o = n(239606);
function d(e) {
    let { hideRestrictedProfile: t, ...n } = e,
        { user: d } = n,
        [c, _] = (0, i.A)(d.id);
    return c && !t
        ? (0, a.jsx)(s.A, { onHide: _, ...n })
        : d.isNonUserBot()
          ? (0, a.jsx)(r.A, { ...n })
          : d.bot
            ? (0, a.jsx)(l.A, { ...n })
            : (0, a.jsx)(o.A, { ...n });
}
