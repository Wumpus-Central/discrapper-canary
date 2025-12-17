n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    o = n(299206),
    a = n(26737),
    c = n(449751),
    s = n(749339),
    u = n(388032);
function d(e, t, n) {
    let d = (0, a.Z)(n),
        f = (0, s.Z)(e),
        g = (0, c.Z)(e, t),
        b = (0, o.Z)({
            id: e.id,
            label: u.intl.string(u.t.zBoHlf),
            shiftId: "".concat(e.channel_id, "-").concat(e.id),
        }),
        p = i.useMemo(() => [f, g, b, d].filter(Boolean), [d, f, g, b]);
    return 0 === p.length
        ? null
        : (0, r.jsx)(l.sNh, {
              id: "copy",
              label: u.intl.string(u.t.OpuAlK),
              icon: l.TIy,
              children: p,
          });
}
