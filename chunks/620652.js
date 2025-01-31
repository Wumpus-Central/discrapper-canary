n.d(t, {
    M: () => f,
    Z: () => T
});
var i,
    a = n(200651),
    o = n(192379),
    s = n(120356),
    l = n.n(s),
    r = n(500923),
    c = n.n(r),
    d = n(570140),
    u = n(960020),
    h = n(831244),
    m = n(815605),
    p = n(981631),
    g = n(278135),
    f = (((i = {})[(i.NORMAL = 16)] = 'NORMAL'), (i[(i.NORMAL_NEW = 20)] = 'NORMAL_NEW'), (i[(i.LARGE = 32)] = 'LARGE'), i);
let v = async (e) => {
    var t;
    let { effect: n } = e,
        i = await (0, h.T)(n.channelId, null !== (t = n.messageId) && void 0 !== t ? t : p.lds, n.emoji.name),
        a = await (0, m.aB)(''.concat(n.channelId, ':').concat(n.messageId, ':').concat(n.emoji.name), n.url, i, n.color);
    return (a.assets[0].p = n.url), a;
};
function T(e) {
    let { className: t, effect: n, onComplete: i, emojiSize: s = 16 } = e,
        r = o.useRef(null),
        h = s * m.Vz,
        p = (h + s) / 2;
    return (
        o.useEffect(() => {
            let e;
            if (null != n)
                return (
                    (async function () {
                        if (null != r.current) {
                            let t = await v({ effect: n });
                            (e = c().loadAnimation({
                                container: r.current,
                                renderer: 'svg',
                                loop: !1,
                                autoplay: !0,
                                animationData: t
                            })).addEventListener('complete', () => {
                                null == i || i(), e.destroy();
                            }),
                                null != n.channelId &&
                                    null != n.messageId &&
                                    null != n.emoji &&
                                    n.key === u.I.HOVER &&
                                    d.Z.dispatch({
                                        type: 'BURST_REACTION_ANIMATION_ADD',
                                        channelId: n.channelId,
                                        messageId: n.messageId,
                                        emoji: n.emoji,
                                        animation: e
                                    });
                        }
                    })(),
                    () => {
                        null != e && e.destroy();
                    }
                );
        }, [i, n, s]),
        (0, a.jsx)('div', {
            className: g.effectsWrapper,
            children: (0, a.jsx)('div', {
                className: l()(g.effect, t),
                style: {
                    transform: 'translateY('.concat(p, 'px)'),
                    height: h,
                    width: h
                },
                ref: r
            })
        })
    );
}
