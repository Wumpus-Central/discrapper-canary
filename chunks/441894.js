t.d(e, {
    J: function () {
        return d;
    }
}),
    t(47120);
var i = t(442837),
    r = t(592125),
    l = t(19780),
    a = t(977059),
    o = t(760373);
function d(n) {
    let { channelId: e, location: t } = n,
        { enabled: d } = (0, a.S)({ location: t });
    return (0, i.e7)(
        [l.Z, r.Z],
        () =>
            (function (n, e) {
                var t;
                let [i, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.Z, r.Z];
                if (!e || null == n || i.getChannelId() !== n) return !1;
                let d = a.getChannel(n);
                if (null == d || d.isGuildStageVoice()) return !1;
                let u = null === (t = i.getSecureFramesState()) || void 0 === t ? void 0 : t.version;
                return null != u && u !== o.Eg;
            })(e, d, [l.Z, r.Z]),
        [e, d]
    );
}
