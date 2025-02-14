n.d(t, { J: () => d }), n(47120);
var i = n(442837),
    l = n(592125),
    o = n(19780),
    s = n(977059),
    r = n(760373);
function d(e) {
    let { channelId: t, location: n } = e,
        { enabled: d } = (0, s.S)({ location: n });
    return (0, i.e7)(
        [o.Z, l.Z],
        () =>
            (function (e, t) {
                var n;
                let [i, s] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.Z, l.Z];
                if (!t || null == e || i.getChannelId() !== e) return !1;
                let d = s.getChannel(e);
                if (null == d || d.isGuildStageVoice()) return !1;
                let a = null === (n = i.getSecureFramesState()) || void 0 === n ? void 0 : n.version;
                return null != a && a !== r.Eg;
            })(t, d, [o.Z, l.Z]),
        [t, d]
    );
}
