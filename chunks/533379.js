n.d(t, { R: () => a });
var r = n(442837),
    i = n(998698),
    l = n(873387);
function a(e) {
    let { channel: t, chatInputType: n } = e,
        a = (0, l.g)(t),
        { activeCommand: o } = (0, r.cj)([i.Z], () => {
            var e;
            return { activeCommand: (null == (e = n.commands) ? void 0 : e.enabled) ? i.Z.getActiveCommand(t.id) : null };
        });
    return null == o && a;
}
