n.d(t, { R: () => o });
var r = n(442837),
    i = n(998698),
    l = n(873387);
function o(e) {
    let { channel: t, chatInputType: n } = e,
        o = (0, l.g)(t),
        { activeCommand: a } = (0, r.cj)([i.Z], () => {
            var e;
            return { activeCommand: (null == (e = n.commands) ? void 0 : e.enabled) ? i.Z.getActiveCommand(t.id) : null };
        });
    return null == a && o;
}
