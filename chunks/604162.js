(n.d(t, {
    G6: () => d,
    JC: () => c,
    qP: () => m,
    yv: () => u
}),
    n(388685));
var r = n(73800),
    l = n(447543),
    o = n(960904),
    i = n(830121),
    a = n(701190),
    s = n(771845);
let c = (e) => null != e.text;
function u(e) {
    let t = 0 | Math.round(e),
        n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2000,
        [l, o] = (0, r.useState)(e),
        i = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(
            () => () => {
                null != i.current && clearTimeout(i.current);
            },
            [e]
        ),
        [
            l,
            () => {
                (o(t),
                    null != i.current && clearTimeout(i.current),
                    (i.current = setTimeout(() => {
                        o(e);
                    }, n)));
            }
        ]
    );
}
async function m(e) {
    try {
        var t;
        let n = (0, i.zO)(e);
        if (null == n || n.type !== o.g.INVITE) return !1;
        let r = a.Z.getInvite(n.code);
        if (null == r) {
            let { invite: e } = await l.ZP.resolveInvite(n.code, 'Markdown Link');
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
