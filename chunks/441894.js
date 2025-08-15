n.d(t, { J: () => a }), n(388685);
var r = n(442837),
    i = n(592125),
    o = n(19780),
    l = n(760373);
function a(e) {
    let { channelId: t } = e;
    return (0, r.e7)(
        [o.Z, i.Z],
        () =>
            (function (e) {
                var t;
                let [n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, i.Z];
                if (null == e || n.getChannelId() !== e) return !1;
                let a = r.getChannel(e);
                if (null == a || a.isGuildStageVoice()) return !1;
                let c = null == (t = n.getSecureFramesState()) ? void 0 : t.version;
                return null != c && c !== l.Eg;
            })(t, [o.Z, i.Z]),
        [t],
    );
}
