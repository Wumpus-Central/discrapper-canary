n.d(t, { k: () => r });
var i = n(311907),
    l = n(734057),
    a = n(383501);
function r(e) {
    let { channelId: t } = e;
    return (0, i.bG)(
        [a.A, l.A],
        () =>
            (function (e) {
                let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, l.A];
                if (null == e || t.getChannelId() !== e) return !1;
                let i = n.getChannel(e);
                if (null == i || i.isGuildStageVoice()) return !1;
                let r = t.getSecureFramesState()?.version;
                return null != r && 0 !== r;
            })(t, [a.A, l.A]),
        [t],
    );
}
n(603266);
