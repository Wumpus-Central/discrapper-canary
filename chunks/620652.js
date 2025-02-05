i.d(t, {
    M: () => f,
    Z: () => x
});
var n,
    a = i(200651),
    o = i(192379),
    s = i(120356),
    l = i.n(s),
    r = i(500923),
    c = i.n(r),
    d = i(570140),
    u = i(960020),
    h = i(831244),
    m = i(815605),
    p = i(981631),
    g = i(278135),
    f = (((n = {})[(n.NORMAL = 16)] = 'NORMAL'), (n[(n.NORMAL_NEW = 20)] = 'NORMAL_NEW'), (n[(n.LARGE = 32)] = 'LARGE'), n);
let v = async (e) => {
    var t;
    let { effect: i } = e,
        n = await (0, h.T)(i.channelId, null !== (t = i.messageId) && void 0 !== t ? t : p.lds, i.emoji.name),
        a = await (0, m.aB)(''.concat(i.channelId, ':').concat(i.messageId, ':').concat(i.emoji.name), i.url, n, i.color);
    return (a.assets[0].p = i.url), a;
};
function x(e) {
    let { className: t, effect: i, onComplete: n, emojiSize: s = 16 } = e,
        r = o.useRef(null),
        h = s * m.Vz,
        p = (h + s) / 2;
    return (
        o.useEffect(() => {
            let e;
            if (null != i)
                return (
                    (async function () {
                        if (null != r.current) {
                            let t = await v({ effect: i });
                            (e = c().loadAnimation({
                                container: r.current,
                                renderer: 'svg',
                                loop: !1,
                                autoplay: !0,
                                animationData: t
                            })).addEventListener('complete', () => {
                                null == n || n(), e.destroy();
                            }),
                                null != i.channelId &&
                                    null != i.messageId &&
                                    null != i.emoji &&
                                    i.key === u.I.HOVER &&
                                    d.Z.dispatch({
                                        type: 'BURST_REACTION_ANIMATION_ADD',
                                        channelId: i.channelId,
                                        messageId: i.messageId,
                                        emoji: i.emoji,
                                        animation: e
                                    });
                        }
                    })(),
                    () => {
                        null != e && e.destroy();
                    }
                );
        }, [n, i, s]),
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
