n.d(t, { R: () => o });
var r = n(442837),
    i = n(998698),
    a = n(873387);
function o(e) {
    var t, n;
    let { channel: o, chatInputType: s } = e,
        l = null != (n = null == (t = s.commands) ? void 0 : t.enabled) && n,
        c = (0, a.g)(o),
        { activeCommand: u } = (0, r.cj)([i.Z], () => ({ activeCommand: l ? i.Z.getActiveCommand(o.id) : null }));
    return l && c && null == u;
}
