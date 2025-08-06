n.d(t, { R: () => a });
var r = n(442837),
    i = n(998698),
    o = n(873387);
function a(e) {
    let { channel: t, chatInputType: n } = e,
        a = (0, o.g)(t),
        { activeCommand: s } = (0, r.cj)([i.Z], () => {
            var e;
            return {
                activeCommand: (null == (e = n.commands) ? void 0 : e.enabled) ? i.Z.getActiveCommand(t.id) : null,
            };
        });
    return null == s && a;
}
