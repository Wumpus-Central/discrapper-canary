t.d(n, { J: () => u }), t(47120);
var i = t(442837),
    l = t(592125),
    a = t(19780),
    r = t(977059),
    o = t(760373);
function u(e) {
    let { channelId: n, location: t } = e,
        { enabled: u } = (0, r.S)({ location: t });
    return (0, i.e7)(
        [a.Z, l.Z],
        () =>
            (function (e, n) {
                var t;
                let [i, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Z, l.Z];
                if (!n || null == e || i.getChannelId() !== e) return !1;
                let u = r.getChannel(e);
                if (null == u || u.isGuildStageVoice()) return !1;
                let d = null === (t = i.getSecureFramesState()) || void 0 === t ? void 0 : t.version;
                return null != d && d !== o.Eg;
            })(n, u, [a.Z, l.Z]),
        [n, u]
    );
}
