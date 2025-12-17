n.d(t, {
    M: () => m,
    Z: () => g,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(500923),
    l = n.n(s),
    c = n(570140),
    u = n(960020),
    d = n(831244),
    f = n(815605),
    p = n(981631),
    _ = n(845881),
    m = (function (e) {
        return (e[(e.NORMAL = 20)] = "NORMAL"), (e[(e.LARGE = 32)] = "LARGE"), e;
    })({});
let h = async (e) => {
    var t;
    let { effect: n } = e,
        r = await (0, d.T)(n.channelId, null != (t = n.messageId) ? t : p.lds, n.emoji.name),
        i = await (0, f.aB)(
            "".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name),
            n.url,
            r,
            n.color,
        );
    return (i.assets[0].p = n.url), i;
};
function g(e) {
    let { className: t, effect: n, onComplete: a, emojiSize: s = 20 } = e,
        d = i.useRef(null),
        p = s * f.Vz,
        m = (p + s) / 2,
        g = "translateY(".concat(m, "px)");
    return (
        i.useEffect(() => {
            let e;
            if (null != n)
                return (
                    !(async function () {
                        if (null != d.current) {
                            let t = await h({ effect: n });
                            (e = l().loadAnimation({
                                container: d.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !0,
                                animationData: t,
                            })).addEventListener("complete", () => {
                                null == a || a(), e.destroy();
                            }),
                                null != n.channelId &&
                                    null != n.messageId &&
                                    null != n.emoji &&
                                    n.key === u.I.HOVER &&
                                    c.Z.dispatch({
                                        type: "BURST_REACTION_ANIMATION_ADD",
                                        channelId: n.channelId,
                                        messageId: n.messageId,
                                        emoji: n.emoji,
                                        animation: e,
                                    });
                        }
                    })(),
                    () => {
                        null != e && e.destroy();
                    }
                );
        }, [a, n, s]),
        (0, r.jsx)("div", {
            className: _.effectsWrapper,
            children: (0, r.jsx)("div", {
                className: o()(_.effect, t),
                style: {
                    transform: g,
                    height: p,
                    width: p,
                },
                ref: d,
            }),
        })
    );
}
