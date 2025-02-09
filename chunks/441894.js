t.d(n, { J: () => o }), t(47120);
var l = t(442837),
    i = t(592125),
    r = t(19780),
    a = t(977059),
    u = t(760373);
function o(e) {
    let { channelId: n, location: t } = e,
        { enabled: o } = (0, a.S)({ location: t });
    return (0, l.e7)(
        [r.Z, i.Z],
        () =>
            (function (e, n) {
                var t;
                let [l, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.Z, i.Z];
                if (!n || null == e || l.getChannelId() !== e) return !1;
                let o = a.getChannel(e);
                if (null == o || o.isGuildStageVoice()) return !1;
                let d = null === (t = l.getSecureFramesState()) || void 0 === t ? void 0 : t.version;
                return null != d && d !== u.Eg;
            })(n, o, [r.Z, i.Z]),
        [n, o]
    );
}
