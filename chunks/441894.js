n.d(t, {
    J: function () {
        return o;
    }
}),
    n(47120);
var i = n(442837),
    l = n(592125),
    r = n(19780),
    a = n(977059),
    s = n(760373);
function o(e) {
    let { channelId: t, location: n } = e,
        { enabled: o } = (0, a.S)({ location: n });
    return (0, i.e7)(
        [r.Z, l.Z],
        () =>
            (function (e, t) {
                var n;
                let [i, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.Z, l.Z];
                if (!t || null == e || i.getChannelId() !== e) return !1;
                let o = a.getChannel(e);
                if (null == o || o.isGuildStageVoice()) return !1;
                let c = null === (n = i.getSecureFramesState()) || void 0 === n ? void 0 : n.version;
                return null != c && c !== s.Eg;
            })(t, o, [r.Z, l.Z]),
        [t, o]
    );
}
