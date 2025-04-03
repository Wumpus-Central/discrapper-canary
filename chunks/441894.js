n.d(t, { J: () => o }), n(47120);
var r = n(442837),
    i = n(592125),
    l = n(19780),
    a = n(760373);
function o(e) {
    let { channelId: t } = e;
    return (0, r.e7)(
        [l.ZP, i.Z],
        () =>
            (function (e) {
                var t;
                let [n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.ZP, i.Z];
                if (null == e || n.getChannelId() !== e) return !1;
                let o = r.getChannel(e);
                if (null == o || o.isGuildStageVoice()) return !1;
                let u = null == (t = n.getSecureFramesState()) ? void 0 : t.version;
                return null != u && u !== a.Eg;
            })(t, [l.ZP, i.Z]),
        [t]
    );
}
