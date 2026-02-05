i.d(t, { A: () => T, x: () => A });
var n,
    l = i(627968),
    a = i(64700),
    r = i(503698),
    o = i.n(r),
    s = i(883885),
    u = i.n(s),
    d = i(73153),
    c = i(900210),
    h = i(146497),
    m = i(60317),
    p = i(652215),
    g = i(857506),
    A = (((n = {})[(n.NORMAL = 20)] = "NORMAL"), (n[(n.LARGE = 32)] = "LARGE"), n);
let f = async (e) => {
    let { effect: t } = e,
        i = await (0, h.R)(t.channelId, t.messageId ?? p.dJq, t.emoji.name),
        n = await (0, m.fz)(`${t.channelId}:${t.messageId}:${t.emoji.name}`, t.url, i, t.color);
    return (n.assets[0].p = t.url), n;
};
function T(e) {
    let { className: t, effect: i, onComplete: n, emojiSize: r = 20 } = e,
        s = a.useRef(null),
        h = r * m.YY,
        p = (h + r) / 2,
        A = `translateY(${p}px)`;
    return (
        a.useEffect(() => {
            let e;
            if (null != i)
                return (
                    !(async function () {
                        if (null != s.current) {
                            let t = await f({ effect: i });
                            (e = u().loadAnimation({
                                container: s.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !0,
                                animationData: t,
                            })).addEventListener("complete", () => {
                                n?.(), e.destroy();
                            }),
                                null != i.channelId &&
                                    null != i.messageId &&
                                    null != i.emoji &&
                                    i.key === c.W.HOVER &&
                                    d.h.dispatch({
                                        type: "BURST_REACTION_ANIMATION_ADD",
                                        channelId: i.channelId,
                                        messageId: i.messageId,
                                        emoji: i.emoji,
                                        animation: e,
                                    });
                        }
                    })(),
                    () => {
                        null != e && e.destroy();
                    }
                );
        }, [n, i, r]),
        (0, l.jsx)("div", {
            className: g.Y,
            children: (0, l.jsx)("div", {
                className: o()(g.Q, t),
                style: { transform: A, height: h, width: h },
                ref: s,
            }),
        })
    );
}
