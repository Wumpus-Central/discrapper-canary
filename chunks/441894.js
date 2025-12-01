n.d(t, { J: () => c }), n(388685);
var a = n(442837),
    o = n(592125),
    r = n(19780),
    i = n(760373);
function c(e) {
    let { channelId: t } = e;
    return (0, a.e7)(
        [r.Z, o.Z],
        () =>
            (function (e) {
                var t;
                let [n, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, o.Z];
                if (null == e || n.getChannelId() !== e) return !1;
                let c = a.getChannel(e);
                if (null == c || c.isGuildStageVoice()) return !1;
                let _ = null == (t = n.getSecureFramesState()) ? void 0 : t.version;
                return null != _ && _ !== i.Eg;
            })(t, [r.Z, o.Z]),
        [t],
    );
}
