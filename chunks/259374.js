n.d(t, { k: () => o });
var r = n(17928),
    i = n(734057),
    a = n(763827);
function o(e) {
    let { channelId: t } = e;
    return (0, r.bG)(
        [a.A, i.A],
        () =>
            (function (e) {
                let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, i.A];
                if (null == e || t.getChannelId() !== e) return !1;
                let r = n.getChannel(e);
                if (null == r || r.isGuildStageVoice()) return !1;
                let o = t.getSecureFramesState()?.version;
                return null != o && 0 !== o;
            })(t, [a.A, i.A]),
        [t],
    );
}
n(603266);
