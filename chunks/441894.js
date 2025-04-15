n.d(t, { J: () => l }), n(388685);
var r = n(442837),
    a = n(592125),
    i = n(19780),
    o = n(760373);
function l(e) {
    let { channelId: t } = e;
    return (0, r.e7)(
        [i.Z, a.Z],
        () =>
            (function (e) {
                var t;
                let [n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z, a.Z];
                if (null == e || n.getChannelId() !== e) return !1;
                let l = r.getChannel(e);
                if (null == l || l.isGuildStageVoice()) return !1;
                let c = null == (t = n.getSecureFramesState()) ? void 0 : t.version;
                return null != c && c !== o.Eg;
            })(t, [i.Z, a.Z]),
        [t]
    );
}
