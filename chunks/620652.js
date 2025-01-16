n.d(t, {
    M: function () {
        return o;
    },
    Z: function () {
        return b;
    }
});
var i,
    o,
    a = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    c = n(500923),
    d = n.n(c),
    u = n(570140),
    h = n(960020),
    m = n(831244),
    p = n(815605),
    f = n(981631),
    g = n(278135);
((i = o || (o = {}))[(i.NORMAL = 16)] = 'NORMAL'), (i[(i.NORMAL_NEW = 20)] = 'NORMAL_NEW'), (i[(i.LARGE = 32)] = 'LARGE');
let v = async (e) => {
    var t;
    let { effect: n } = e,
        i = await (0, m.T)(n.channelId, null !== (t = n.messageId) && void 0 !== t ? t : f.lds, n.emoji.name),
        o = await (0, p.aB)(''.concat(n.channelId, ':').concat(n.messageId, ':').concat(n.emoji.name), n.url, i, n.color);
    return (o.assets[0].p = n.url), o;
};
function b(e) {
    let { className: t, effect: n, onComplete: i, emojiSize: o = 16 } = e,
        l = s.useRef(null),
        c = o * p.Vz,
        m = (c + o) / 2;
    return (
        s.useEffect(() => {
            let e;
            if (null != n)
                return (
                    !(async function () {
                        if (null != l.current) {
                            let t = await v({ effect: n });
                            (e = d().loadAnimation({
                                container: l.current,
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
                                    n.key === h.I.HOVER &&
                                    u.Z.dispatch({
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
        }, [i, n, o]),
        (0, a.jsx)('div', {
            className: g.effectsWrapper,
            children: (0, a.jsx)('div', {
                className: r()(g.effect, t),
                style: {
                    transform: 'translateY('.concat(m, 'px)'),
                    height: c,
                    width: c
                },
                ref: l
            })
        })
    );
}
