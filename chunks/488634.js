n.d(t, { _: () => o });
var r = n(442837),
    i = n(897473),
    l = n(433355);
function o() {
    let e = (0, r.e7)([l.ZP], () => l.ZP.getSidebarState(l.uZ)),
        t = (null == e ? void 0 : e.type) === i.tI.VIEW_MESSAGE_REQUEST ? e : null;
    return {
        channelId: null == t ? void 0 : t.channelId,
        hasSingleMessageRequest: (null == t ? void 0 : t.details) != null && t.details.type === i.Ff.MESSAGE_REQUEST && t.details.hasSingleMessageRequest
    };
}
