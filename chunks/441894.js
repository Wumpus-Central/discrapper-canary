n.d(t, { J: () => c }), n(388685);
var a = n(442837),
    i = n(592125),
    r = n(19780),
    o = n(760373);
function c(e) {
    let { channelId: t } = e;
    return (0, a.e7)(
        [r.Z, i.Z],
        () =>
            (function (e) {
                var t;
                let [n, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, i.Z];
                if (null == e || n.getChannelId() !== e) return !1;
                let c = a.getChannel(e);
                if (null == c || c.isGuildStageVoice()) return !1;
                let l = null == (t = n.getSecureFramesState()) ? void 0 : t.version;
                return null != l && l !== o.Eg;
            })(t, [r.Z, i.Z]),
        [t]
    );
}
