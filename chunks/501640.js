n.d(t, { Z: () => c }), n(47120);
var r = n(442837),
    i = n(414910),
    o = n(314897),
    a = n(785141),
    s = n(674503),
    l = n(354459);
function c(e) {
    return (0, r.e7)([s.Z, o.default], () => {
        if ((null == e ? void 0 : e.type) !== l.fO.STREAM && (null == e ? void 0 : e.type) !== l.fO.USER) return;
        let t = (0, i.Z)(e.type);
        for (let n of o.default.getId() === e.user.id ? s.Z.getActiveErrorsOfType(a.u.VIDEO_STREAM_SENDER_READY_TIMEOUT) : s.Z.getActiveErrorsOfType(a.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT)) if (n.mediaContext === t && n.userId === e.user.id) return n.type;
    });
}
