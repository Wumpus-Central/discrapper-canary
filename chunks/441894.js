t.d(n, { J: () => c }), t(388685);
var a = t(442837),
    o = t(592125),
    r = t(19780),
    i = t(760373);
function c(e) {
    let { channelId: n } = e;
    return (0, a.e7)(
        [r.Z, o.Z],
        () =>
            (function (e) {
                var n;
                let [t, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, o.Z];
                if (null == e || t.getChannelId() !== e) return !1;
                let c = a.getChannel(e);
                if (null == c || c.isGuildStageVoice()) return !1;
                let _ = null == (n = t.getSecureFramesState()) ? void 0 : n.version;
                return null != _ && _ !== i.Eg;
            })(n, [r.Z, o.Z]),
        [n],
    );
}
