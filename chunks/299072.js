i.d(t, { x: () => A, A: () => x });
var n,
    l = i(627968),
    a = i(64700),
    s = i(503698),
    o = i.n(s),
    r = i(228366),
    u = i(900210),
    d = i(297494);
let c = [
        { load: () => i.e("77339").then(i.t.bind(i, 420054, 19)) },
        { load: () => i.e("17087").then(i.t.bind(i, 44194, 19)) },
        { load: () => i.e("4289").then(i.t.bind(i, 141208, 19)) },
        { load: () => i.e("66414").then(i.t.bind(i, 33565, 19)) },
        { load: () => i.e("31165").then(i.t.bind(i, 414956, 19)) },
        { load: () => i.e("58541").then(i.t.bind(i, 221340, 19)) },
        { load: () => i.e("10169").then(i.t.bind(i, 710208, 19)) },
        { load: () => i.e("76601").then(i.t.bind(i, 333984, 19)) },
        { load: () => i.e("23997").then(i.t.bind(i, 851404, 19)) },
        { load: () => i.e("91770").then(i.t.bind(i, 95553, 19)) },
        { load: () => i.e("9302").then(i.t.bind(i, 16341, 19)) },
        { load: () => i.e("96515").then(i.t.bind(i, 178862, 19)) },
        { load: () => i.e("74149").then(i.t.bind(i, 965892, 19)) },
        { load: () => i.e("84163").then(i.t.bind(i, 211342, 19)) },
        { load: () => i.e("74410").then(i.t.bind(i, 714316, 19)) },
        { load: () => i.e("67133").then(i.t.bind(i, 821644, 19)) },
        { load: () => i.e("84765").then(i.t.bind(i, 51244, 19)) },
        { load: () => i.e("35583").then(i.t.bind(i, 668994, 19)) },
    ],
    h = async function (e, t, i) {
        arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        let n = c[(0, d.H4)(`${e}${t}${i}`) % c.length];
        return await n.load();
    };
var m = i(60317),
    p = i(652215),
    g = i(272625),
    A = (((n = {})[(n.NORMAL = 20)] = "NORMAL"), (n[(n.LARGE = 32)] = "LARGE"), n);
let f = async (e) => {
    let { effect: t } = e,
        i = await h(t.channelId, t.messageId ?? p.dJq, t.emoji.name),
        n = await (0, m.fz)(`${t.channelId}:${t.messageId}:${t.emoji.name}`, t.url, i, t.color);
    return (n.assets[0].p = t.url), n;
};
function x(e) {
    let { className: t, effect: n, onComplete: s, emojiSize: d = 20 } = e,
        c = a.useRef(null),
        h = d * m.YY,
        p = (h + d) / 2,
        A = `translateY(${p}px)`;
    return (
        a.useEffect(() => {
            let e;
            if (null != n)
                return (
                    !(async function () {
                        if (null != c.current) {
                            let t = await f({ effect: n }),
                                { default: l } = await i.e("96382").then(i.t.bind(i, 883885, 23));
                            null != c.current &&
                                ((e = l.loadAnimation({
                                    container: c.current,
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
            className: g.Y,
            children: (0, l.jsx)("div", {
                className: o()(g.Q, t),
                style: { transform: A, height: h, width: h },
                ref: c,
            }),
        })
    );
}
