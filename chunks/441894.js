t.d(n, { J: () => a }), t(388685);
var r = t(442837),
    i = t(592125),
    l = t(19780),
    o = t(760373);
function a(e) {
    let { channelId: n } = e;
    return (0, r.e7)(
        [l.Z, i.Z],
        () =>
            (function (e) {
                var n;
                let [t, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z, i.Z];
                if (null == e || t.getChannelId() !== e) return !1;
                let a = r.getChannel(e);
                if (null == a || a.isGuildStageVoice()) return !1;
                let s = null == (n = t.getSecureFramesState()) ? void 0 : n.version;
                return null != s && s !== o.Eg;
            })(n, [l.Z, i.Z]),
        [n]
    );
}
