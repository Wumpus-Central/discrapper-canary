n.d(t, { J: () => u }), n(47120);
var r = n(442837),
    i = n(592125),
    l = n(19780),
    a = n(977059),
    o = n(760373);
function u(e) {
    let { channelId: t, location: n } = e,
        { enabled: u } = (0, a.S)({ location: n });
    return (0, r.e7)(
        [l.Z, i.Z],
        () =>
            (function (e, t) {
                var n;
                let [r, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.Z, i.Z];
                if (!t || null == e || r.getChannelId() !== e) return !1;
                let u = a.getChannel(e);
                if (null == u || u.isGuildStageVoice()) return !1;
                let d = null === (n = r.getSecureFramesState()) || void 0 === n ? void 0 : n.version;
                return null != d && d !== o.Eg;
            })(t, u, [l.Z, i.Z]),
        [t, u]
    );
}
