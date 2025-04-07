n.d(t, { J: () => l }), n(388685);
var a = n(442837),
    r = n(592125),
    i = n(19780),
    o = n(760373);
function l(e) {
    let { channelId: t } = e;
    return (0, a.e7)(
        [i.ZP, r.Z],
        () =>
            (function (e) {
                var t;
                let [n, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.ZP, r.Z];
                if (null == e || n.getChannelId() !== e) return !1;
                let l = a.getChannel(e);
                if (null == l || l.isGuildStageVoice()) return !1;
                let c = null == (t = n.getSecureFramesState()) ? void 0 : t.version;
                return null != c && c !== o.Eg;
            })(t, [i.ZP, r.Z]),
        [t]
    );
}
