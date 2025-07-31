(n.d(t, { J: () => u }), n(388685));
var r = n(442837),
    l = n(592125),
    i = n(19780),
    o = n(760373);
function u(e) {
    let { channelId: t } = e;
    return (0, r.e7)(
        [i.Z, l.Z],
        () =>
            (function (e) {
                var t;
                let [n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z, l.Z];
                if (null == e || n.getChannelId() !== e) return !1;
                let u = r.getChannel(e);
                if (null == u || u.isGuildStageVoice()) return !1;
                let a = null == (t = n.getSecureFramesState()) ? void 0 : t.version;
                return null != a && a !== o.Eg;
            })(t, [i.Z, l.Z]),
        [t]
    );
}
