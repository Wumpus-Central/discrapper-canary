n.d(t, {
    A: () => y,
    x: () => g,
});
var i,
    l = n(627968),
    r = n(64700),
    o = n(503698),
    a = n.n(o),
    s = n(883885),
    u = n.n(s),
    c = n(73153),
    d = n(900210),
    p = n(146497),
    h = n(60317),
    m = n(652215),
    f = n(857506),
    g = (((i = {})[(i.NORMAL = 20)] = "NORMAL"), (i[(i.LARGE = 32)] = "LARGE"), i);
let b = async (e) => {
    var t;
    let { effect: n } = e,
        i = await (0, p.R)(n.channelId, null != (t = n.messageId) ? t : m.dJq, n.emoji.name),
        l = await (0, h.fz)(
            "".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name),
            n.url,
            i,
            n.color,
        );
    return (l.assets[0].p = n.url), l;
};

function y(e) {
    let { className: t, effect: n, onComplete: i, emojiSize: o = 20 } = e,
        s = r.useRef(null),
        p = o * h.YY,
        m = (p + o) / 2;
    return (
        r.useEffect(() => {
            let e;
            if (null != n)
                return (
                    !(async function () {
                        if (null != s.current) {
                            let t = await b({
                                effect: n,
                            });
                            (e = u().loadAnimation({
                                container: s.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !0,
                                animationData: t,
                            })).addEventListener("complete", () => {
                                null == i || i(), e.destroy();
                            }),
                                null != n.channelId &&
                                    null != n.messageId &&
                                    null != n.emoji &&
                                    n.key === d.W.HOVER &&
                                    c.h.dispatch({
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
        }, [i, n, o]),
        (0, l.jsx)("div", {
            className: f.Y,
            children: (0, l.jsx)("div", {
                className: a()(f.Q, t),
                style: {
                    transform: "translateY(".concat(m, "px)"),
                    height: p,
                    width: p,
                },
                ref: s,
            }),
        })
    );
}
