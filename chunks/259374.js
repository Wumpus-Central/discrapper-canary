n.d(e, { k: () => l });
var r = n(17928),
    i = n(734057),
    a = n(763827);
function l(t) {
    let { channelId: e } = t;
    return (0, r.bG)(
        [a.A, i.A],
        () =>
            (function (t) {
                let [e, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, i.A];
                if (null == t || e.getChannelId() !== t) return !1;
                let r = n.getChannel(t);
                if (null == r || r.isGuildStageVoice()) return !1;
                let l = e.getSecureFramesState()?.version;
                return null != l && 0 !== l;
            })(e, [a.A, i.A]),
        [e],
    );
}
n(603266);
