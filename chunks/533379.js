n.d(t, { R: () => a });
var i = n(442837),
    r = n(998698),
    l = n(873387);
function a(e) {
    let { channel: t, chatInputType: n } = e,
        a = (0, l.g)(t),
        { activeCommand: o } = (0, i.cj)([r.Z], () => {
            var e;
            return {
                activeCommand: (null == (e = n.commands) ? void 0 : e.enabled) ? r.Z.getActiveCommand(t.id) : null,
            };
        });
    return null == o && a;
}
