n.d(t, { H: () => s });
var r = n(311907),
    i = n(861382),
    a = n(167074);
function s(e) {
    var t, n;
    let { channel: s, chatInputType: o } = e,
        l = null != (t = null == (n = o.commands) ? void 0 : n.enabled) && t,
        c = (0, a.f)(s),
        { activeCommand: u } = (0, r.cf)([i.A], () => ({ activeCommand: l ? i.A.getActiveCommand(s.id) : null }));
    return l && c && null == u;
}
