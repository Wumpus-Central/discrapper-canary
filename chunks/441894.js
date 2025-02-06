t.d(n, { J: () => o }), t(47120);
var i = t(442837),
    l = t(592125),
    a = t(19780),
    r = t(977059),
    u = t(760373);
function o(e) {
    let { channelId: n, location: t } = e,
        { enabled: o } = (0, r.S)({ location: t });
    return (0, i.e7)(
        [a.Z, l.Z],
        () =>
            (function (e, n) {
                var t;
                let [i, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Z, l.Z];
                if (!n || null == e || i.getChannelId() !== e) return !1;
                let o = r.getChannel(e);
                if (null == o || o.isGuildStageVoice()) return !1;
                let d = null === (t = i.getSecureFramesState()) || void 0 === t ? void 0 : t.version;
                return null != d && d !== u.Eg;
            })(n, o, [a.Z, l.Z]),
        [n, o]
    );
}
