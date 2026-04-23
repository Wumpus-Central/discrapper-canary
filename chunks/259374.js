n.d(t, { k: () => l });
var r = n(311907),
    i = n(734057),
    a = n(383501);
function l(e) {
    let { channelId: t } = e;
    return (0, r.bG)(
        [a.A, i.A],
        () =>
            (function (e) {
                let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, i.A];
                if (null == e || t.getChannelId() !== e) return !1;
                let r = n.getChannel(e);
                if (null == r || r.isGuildStageVoice()) return !1;
                let l = t.getSecureFramesState()?.version;
                return null != l && 0 !== l;
            })(t, [a.A, i.A]),
        [t],
    );
}
n(603266);
