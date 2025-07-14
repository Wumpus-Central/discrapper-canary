(n.d(t, { J: () => l }), n(388685));
var r = n(442837),
    a = n(592125),
    o = n(19780),
    i = n(760373);
function l(e) {
    let { channelId: t } = e;
    return (0, r.e7)(
        [o.Z, a.Z],
        () =>
            (function (e) {
                var t;
                let [n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, a.Z];
                if (null == e || n.getChannelId() !== e) return !1;
                let l = r.getChannel(e);
                if (null == l || l.isGuildStageVoice()) return !1;
                let c = null == (t = n.getSecureFramesState()) ? void 0 : t.version;
                return null != c && c !== i.Eg;
            })(t, [o.Z, a.Z]),
        [t]
    );
}
