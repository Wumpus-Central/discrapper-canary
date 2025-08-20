n.d(t, {
    G6: () => d,
    JC: () => c,
    qP: () => f,
    yv: () => u,
}),
    n(388685);
var r = n(647438),
    o = n(447543),
    l = n(960904),
    a = n(830121),
    i = n(701190),
    s = n(771845);
let c = (e) => null != e.text;
function u(e) {
    let t = 0 | Math.round(e),
        n = t % 60;
    return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"));
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2000,
        [o, l] = (0, r.useState)(e),
        a = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(
            () => () => {
                null != a.current && clearTimeout(a.current);
            },
            [e],
        ),
        [
            o,
            () => {
                l(t),
                    null != a.current && clearTimeout(a.current),
                    (a.current = setTimeout(() => {
                        l(e);
                    }, n));
            },
        ]
    );
}
async function f(e) {
    try {
        var t;
        let n = (0, a.zO)(e);
        if (null == n || n.type !== l.g.INVITE) return !1;
        let r = i.Z.getInvite(n.code);
        if (null == r) {
            let { invite: e } = await o.ZP.resolveInvite(n.code, "Markdown Link");
            r = e;
        }
        if (null == r) return !1;
        let c = s.ZP.getFlattenedGuildIds(),
            u = null == r || null == (t = r.guild) ? void 0 : t.id;
        return null != u && c.includes(u);
    } catch (e) {
        return !1;
    }
}
