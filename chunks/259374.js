t.d(a, {
    k: () => n,
}),
    t(896048);
var d = t(311907),
    c = t(734057),
    l = t(383501);

function n(e) {
    let { channelId: a } = e;
    return (0, d.bG)(
        [l.A, c.A],
        () =>
            (function (e) {
                var a;
                let [t, d] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.A, c.A];
                if (null == e || t.getChannelId() !== e) return !1;
                let n = d.getChannel(e);
                if (null == n || n.isGuildStageVoice()) return !1;
                let r = null == (a = t.getSecureFramesState()) ? void 0 : a.version;
                return null != r && 0 !== r;
            })(a, [l.A, c.A]),
        [a],
    );
}
t(603266);
