n.d(t, { _: () => a });
var i = n(442837),
    r = n(897473),
    l = n(433355);
function a() {
    let e = (0, i.e7)([l.ZP], () => l.ZP.getSidebarState(l.uZ)),
        t = (null == e ? void 0 : e.type) === r.tI.VIEW_MESSAGE_REQUEST ? e : null;
    return {
        channelId: null == t ? void 0 : t.channelId,
        hasSingleMessageRequest:
            (null == t ? void 0 : t.details) != null &&
            t.details.type === r.Ff.MESSAGE_REQUEST &&
            t.details.hasSingleMessageRequest,
    };
}
