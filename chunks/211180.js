i.d(t, { A: () => A, x: () => p });
var n,
    l = i(627968),
    a = i(64700),
    s = i(503698),
    o = i.n(s),
    r = i(73153),
    u = i(900210),
    d = i(146497),
    c = i(60317),
    h = i(652215),
    m = i(272625),
    p = (((n = {})[(n.NORMAL = 20)] = "NORMAL"), (n[(n.LARGE = 32)] = "LARGE"), n);
let g = async (e) => {
    let { effect: t } = e,
        i = await (0, d.R)(t.channelId, t.messageId ?? h.dJq, t.emoji.name),
        n = await (0, c.fz)(`${t.channelId}:${t.messageId}:${t.emoji.name}`, t.url, i, t.color);
    return (n.assets[0].p = t.url), n;
};
function A(e) {
    let { className: t, effect: n, onComplete: s, emojiSize: d = 20 } = e,
        h = a.useRef(null),
        p = d * c.YY,
        A = (p + d) / 2,
        f = `translateY(${A}px)`;
    return (
        a.useEffect(() => {
            let e;
            if (null != n)
                return (
                    !(async function () {
                        if (null != h.current) {
                            let t = await g({ effect: n }),
                                { default: l } = await i.e("96382").then(i.t.bind(i, 883885, 23));
                            null != h.current &&
                                ((e = l.loadAnimation({
                                    container: h.current,
                                    renderer: "svg",
                                    loop: !1,
                                    autoplay: !0,
                                    animationData: t,
                                })).addEventListener("complete", () => {
                                    s?.(), e.destroy();
                                }),
                                null != n.channelId &&
                                    null != n.messageId &&
                                    null != n.emoji &&
                                    n.key === u.W.HOVER &&
                                    r.h.dispatch({
                                        type: "BURST_REACTION_ANIMATION_ADD",
                                        channelId: n.channelId,
                                        messageId: n.messageId,
                                        emoji: n.emoji,
                                        animation: e,
                                    }));
                        }
                    })(),
                    () => {
                        null != e && e.destroy();
                    }
                );
        }, [s, n, d]),
        (0, l.jsx)("div", {
            className: m.Y,
            children: (0, l.jsx)("div", {
                className: o()(m.Q, t),
                style: { transform: f, height: p, width: p },
                ref: h,
            }),
        })
    );
}
