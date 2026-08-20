n.d(t, { x: () => f, A: () => E });
var i,
    l = n(477900),
    a = n(582128),
    r = n(503698),
    o = n.n(r),
    s = n(228366),
    u = n(900210),
    c = n(297494);
let d = [
        { load: () => n.e("277339").then(n.t.bind(n, 420054, 19)) },
        { load: () => n.e("517087").then(n.t.bind(n, 44194, 19)) },
        { load: () => n.e("4289").then(n.t.bind(n, 141208, 19)) },
        { load: () => n.e("366414").then(n.t.bind(n, 33565, 19)) },
        { load: () => n.e("331165").then(n.t.bind(n, 414956, 19)) },
        { load: () => n.e("158541").then(n.t.bind(n, 221340, 19)) },
        { load: () => n.e("910169").then(n.t.bind(n, 710208, 19)) },
        { load: () => n.e("276601").then(n.t.bind(n, 333984, 19)) },
        { load: () => n.e("623997").then(n.t.bind(n, 851404, 19)) },
        { load: () => n.e("91770").then(n.t.bind(n, 95553, 19)) },
        { load: () => n.e("109302").then(n.t.bind(n, 16341, 19)) },
        { load: () => n.e("196515").then(n.t.bind(n, 178862, 19)) },
        { load: () => n.e("674149").then(n.t.bind(n, 965892, 19)) },
        { load: () => n.e("484163").then(n.t.bind(n, 211342, 19)) },
        { load: () => n.e("252029").then(n.t.bind(n, 714316, 19)) },
        { load: () => n.e("667133").then(n.t.bind(n, 821644, 19)) },
        { load: () => n.e("684765").then(n.t.bind(n, 51244, 19)) },
        { load: () => n.e("235583").then(n.t.bind(n, 668994, 19)) },
    ],
    m = async function (e, t, n) {
        arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        let i = d[(0, c.H)(`${e}${t}${n}`) % d.length];
        return await i.load();
    };
var h = n(60317),
    p = n(652215),
    g = n(631612),
    f = (((i = {})[(i.NORMAL = 20)] = "NORMAL"), (i[(i.LARGE = 32)] = "LARGE"), i);
async function A(e) {
    let { effect: t } = e,
        n = await m(t.channelId, t.messageId ?? p.dJq, t.emoji.name),
        i = await (0, h.fz)(`${t.channelId}:${t.messageId}:${t.emoji.name}`, t.url, n, t.color);
    return (i.assets[0].p = t.url), i;
}
function E(e) {
    let { className: t, effect: i, onComplete: r, emojiSize: c = 20 } = e,
        d = a.useRef(null),
        m = c * h.YY,
        p = (m + c) / 2,
        f = `translateY(${p}px)`;
    return (
        a.useEffect(() => {
            let e;
            if (null != i)
                return (
                    !(async function () {
                        if (null != d.current) {
                            let t = await A({ effect: i }),
                                { default: l } = await n.e("996382").then(n.t.bind(n, 883885, 23));
                            null != d.current &&
                                ((e = l.loadAnimation({
                                    container: d.current,
                                    renderer: "svg",
                                    loop: !1,
                                    autoplay: !0,
                                    animationData: t,
                                })).addEventListener("complete", () => {
                                    r?.(), e.destroy();
                                }),
                                null != i.channelId &&
                                    null != i.messageId &&
                                    null != i.emoji &&
                                    i.key === u.W.HOVER &&
                                    s.h.dispatch({
                                        type: "BURST_REACTION_ANIMATION_ADD",
                                        channelId: i.channelId,
                                        messageId: i.messageId,
                                        emoji: i.emoji,
                                        animation: e,
                                    }));
                        }
                    })(),
                    () => {
                        null != e && e.destroy();
                    }
                );
        }, [r, i, c]),
        (0, l.jsx)("div", {
            className: g.Y,
            children: (0, l.jsx)("div", {
                className: o()(g.Q, t),
                style: { transform: f, height: m, width: m },
                ref: d,
            }),
        })
    );
}
