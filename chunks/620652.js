n.d(t, {
    M: () => g,
    Z: () => O
});
var i,
    r = n(255367),
    o = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(500923),
    c = n.n(a),
    u = n(570140),
    d = n(960020),
    h = n(831244),
    p = n(815605),
    f = n(981631),
    m = n(872333),
    g = (((i = {})[(i.NORMAL = 20)] = 'NORMAL'), (i[(i.LARGE = 32)] = 'LARGE'), i);
let b = async (e) => {
    var t;
    let { effect: n } = e,
        i = await (0, h.T)(n.channelId, null != (t = n.messageId) ? t : f.lds, n.emoji.name),
        r = await (0, p.aB)(''.concat(n.channelId, ':').concat(n.messageId, ':').concat(n.emoji.name), n.url, i, n.color);
    return (r.assets[0].p = n.url), r;
};
function O(e) {
    let { className: t, effect: n, onComplete: i, emojiSize: l = 20 } = e,
        a = o.useRef(null),
        h = l * p.Vz,
        f = (h + l) / 2;
    return (
        o.useEffect(() => {
            let e;
            if (null != n)
                return (
                    !(async function () {
                        if (null != a.current) {
                            let t = await b({ effect: n });
                            (e = c().loadAnimation({
                                container: a.current,
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
                                    n.key === d.I.HOVER &&
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
        }, [i, n, l]),
        (0, r.jsx)('div', {
            className: m.effectsWrapper,
            children: (0, r.jsx)('div', {
                className: s()(m.effect, t),
                style: {
                    transform: 'translateY('.concat(f, 'px)'),
                    height: h,
                    width: h
                },
                ref: a
            })
        })
    );
}
