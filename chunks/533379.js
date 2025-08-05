n.d(t, { R: () => o });
var r = n(442837),
    i = n(998698),
    a = n(873387);
function o(e) {
    let { channel: t, chatInputType: n } = e,
        o = (0, a.g)(t),
        { activeCommand: s } = (0, r.cj)([i.Z], () => {
            var e;
            return { activeCommand: (null == (e = n.commands) ? void 0 : e.enabled) ? i.Z.getActiveCommand(t.id) : null };
        });
    return null == s && o;
}
