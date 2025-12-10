r.d(t, { J: () => c }), r(388685);
var n = r(442837),
    l = r(592125),
    u = r(19780),
    i = r(760373);
function c(e) {
    let { channelId: t } = e;
    return (0, n.e7)(
        [u.Z, l.Z],
        () =>
            (function (e) {
                var t;
                let [r, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.Z, l.Z];
                if (null == e || r.getChannelId() !== e) return !1;
                let c = n.getChannel(e);
                if (null == c || c.isGuildStageVoice()) return !1;
                let o = null == (t = r.getSecureFramesState()) ? void 0 : t.version;
                return null != o && o !== i.Eg;
            })(t, [u.Z, l.Z]),
        [t],
    );
}
