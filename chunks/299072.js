n.d(t, { x: () => p, A: () => E });
var i,
    l = n(477900),
    o = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(73153),
    c = n(900210),
    u = n(297494);
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
        let i = d[(0, u.H)(`${e}${t}${n}`) % d.length];
        return await i.load();
    };
var f = n(60317),
    g = n(652215),
    h = n(631612),
    p = (((i = {})[(i.NORMAL = 20)] = "NORMAL"), (i[(i.LARGE = 32)] = "LARGE"), i);
async function A(e) {
    let { effect: t } = e,
        n = await m(t.channelId, t.messageId ?? g.dJq, t.emoji.name),
        i = await (0, f.fz)(`${t.channelId}:${t.messageId}:${t.emoji.name}`, t.url, n, t.color);
    return ((i.assets[0].p = t.url), i);
}
function E(e) {
    let { className: t, effect: i, onComplete: a, emojiSize: u = 20 } = e,
        d = o.useRef(null),
        m = u * f.YY,
        g = (m + u) / 2,
        p = `translateY(${g}px)`;
    return (
        o.useEffect(() => {
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
                                    (a?.(), e.destroy());
                                }),
                                null != i.channelId &&
                                    null != i.messageId &&
                                    null != i.emoji &&
                                    i.key === c.W.HOVER &&
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
        }, [a, i, u]),
        (0, l.jsx)("div", {
            className: h.Y,
            children: (0, l.jsx)("div", {
                className: r()(h.Q, t),
                style: { transform: p, height: m, width: m },
                ref: d,
            }),
        })
    );
}
