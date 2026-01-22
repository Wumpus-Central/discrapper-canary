n.d(t, {
    A: () => g,
    x: () => h,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(883885),
    l = n.n(o),
    c = n(73153),
    u = n(900210),
    d = n(146497),
    f = n(60317),
    p = n(652215),
    _ = n(857506),
    h = (function (e) {
        return (e[(e.NORMAL = 20)] = "NORMAL"), (e[(e.LARGE = 32)] = "LARGE"), e;
    })({});
let m = async (e) => {
    var t;
    let { effect: n } = e,
        r = await (0, d.R)(n.channelId, null != (t = n.messageId) ? t : p.dJq, n.emoji.name),
        i = await (0, f.fz)(
            "".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name),
            n.url,
            r,
            n.color,
        );
    return (i.assets[0].p = n.url), i;
};

function g(e) {
    let { className: t, effect: n, onComplete: a, emojiSize: o = 20 } = e,
        d = i.useRef(null),
        p = o * f.YY,
        h = (p + o) / 2,
        g = "translateY(".concat(h, "px)");
    return (
        i.useEffect(() => {
            let e;
            if (null != n)
                return (
                    !(async function () {
                        if (null != d.current) {
                            let t = await m({
                                effect: n,
                            });
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
                                    n.key === u.W.HOVER &&
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
        }, [a, n, o]),
        (0, r.jsx)("div", {
            className: _.Y,
            children: (0, r.jsx)("div", {
                className: s()(_.Q, t),
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
