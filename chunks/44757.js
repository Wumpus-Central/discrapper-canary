(l(667532), l(321073));
var t = l(999903),
    r = l(95701),
    i = l(111613),
    u = l(652215);
function a(n, e) {
    return null != n && null != e && (n === e || ((0, r.tr)(n) && (0, r.tr)(e)) || ((0, r.ay)(n) && (0, r.ay)(e)));
}
function d(n, e, l, t) {
    let r = -1;
    if (
        (t.find((n, l) => {
            let { channel: t } = n;
            return t.id === e && ((r = l), !0);
        }),
        r < 0)
    )
        return null;
    for (let e = r; e >= 0 && e < t.length; e += n) {
        let n = t[e];
        if (a(n.channel.type, l)) return n;
    }
    return null;
}
function c(n, e) {
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == n) return 0;
    let t = null;
    return (
        e
            .filter((e) => {
                let {
                    channel: { type: t },
                } = e;
                return null != n && (l || a(n.type, t));
            })
            .find((e, l) => {
                let {
                    channel: { id: r },
                } = e;
                return null != n && r === n.id && ((t = l), !0);
            }),
        t
    );
}
function f(n) {
    return { referenceId: n.id, parentId: n.parent_id };
}
function o(n, e, l, u) {
    let a,
        d,
        f = [],
        o = [],
        p = u._categories;
    function h(e) {
        var l, t;
        let r;
        return (
            (r =
                null == a ||
                null == d ||
                ((l = a), (t = d), +(null == l || null == t || null == e[l] || e[l].channel !== n || null == e[t]))
                    ? [...e]
                    : i.Ay.moveItemFromTo(e, a, d)),
            (f = f.concat(
                i.Ay.calculatePositionDeltas({
                    oldOrdering: e,
                    newOrdering: r,
                    idGetter: (n) => {
                        let { channel: e } = n;
                        return e.id;
                    },
                    existingPositionGetter: (n) => {
                        let { channel: e } = n;
                        return e.position;
                    },
                }),
            )),
            r
        );
    }
    if (n.isCategory()) {
        let l = [...p].slice(1);
        ((a = c(n, l)), (d = c(e, l)), (o = h(l)).unshift(p[0]));
    }
    if ((0, r.tr)(n.type) || n.isCategory()) {
        let l = (0, t.A)(o.length > 0 ? o : p, u, (n) => {
            let {
                channel: { type: e },
            } = n;
            return (0, r.tr)(e);
        });
        ((a = c(n, l)), (d = c(e, l)), h(l));
    }
    if (n.isGuildVocal() || n.isCategory()) {
        let l = (0, t.A)(o.length > 0 ? o : p, u, (n) => {
            let { channel: e } = n;
            return e.isGuildVocal();
        });
        ((a = c(n, l)), (d = c(e, l)), h(l));
    }
    return (
        n.parent_id !== l &&
            null == f.find((e) => e.id === n.id && ((e.parent_id = l), !0)) &&
            f.push({ id: n.id, parent_id: l }),
        f
    );
}
function p(n, e) {
    return null == n || null == e[n] ? "null" : n;
}
l.d(
    e,
    {},
    {
        QO: function (n, e, l, t, i) {
            if (null == n || null == l) return null;
            let { GUILD_CATEGORY: o } = u.rbe;
            if (n.type === o)
                return t === e || (t < e && n.type === l.type)
                    ? f(l)
                    : t > e
                      ? (function (n, e, l) {
                            let { GUILD_CATEGORY: t } = u.rbe,
                                r = l[(c(e, l, !0) ?? 0) + 1],
                                i = d(-1, e.id, n.type, l);
                            return null == i || i.channel.id === n.id
                                ? null
                                : null == r || r.channel.type === t
                                  ? { referenceId: i.channel.id, parentId: null }
                                  : null;
                        })(n, l, i)
                      : null;
            if (a(n.type, l.type)) return f(l);
            if (t < e) {
                let e, t;
                if (l.type === o) {
                    let e = i[(c(l, i, !0) ?? 0) - 1],
                        t = d(1, l.id, n.type, i);
                    if (null == e) return { referenceId: null, parentId: null };
                    if (null != t) {
                        if (a(e.channel.type, n.type) || (n.isGuildVocal() && (0, r.tr)(e.channel.type)))
                            return { referenceId: t.channel.id, parentId: e.channel.parent_id };
                        if (e.channel.isCategory()) return { referenceId: t.channel.id, parentId: e.channel.id };
                    }
                    return null;
                }
                return (
                    (e = i[(c(l, i, !0) ?? 0) - 1]),
                    (t = d(1, l.id, n.type, i)),
                    null != e || n.isGuildVocal()
                        ? (0, r.tr)(n.type) && null != t && ((0, r.tr)(e.channel.type) || e.channel.isCategory())
                            ? { referenceId: t.channel.id, parentId: l.parent_id }
                            : null
                        : { referenceId: null != t ? t.channel.id : null, parentId: null }
                );
            }
            if (l.type === o) {
                let e = i[(c(l, i, !0) ?? 0) + 1],
                    t = d(-1, l.id, n.type, i);
                if (null != t) {
                    if (null == e) return { referenceId: t.channel.id, parentId: l.id };
                    if (a(e.channel.type, n.type) || ((0, r.tr)(n.type) && e.channel.isGuildVocal()))
                        return { referenceId: t.channel.id, parentId: e.channel.parent_id };
                    if (e.channel.isCategory()) return { referenceId: t.channel.id, parentId: l.id };
                }
                return null;
            }
            let p = i[(c(l, i, !0) ?? 0) + 1],
                h = d(-1, l.id, n.type, i);
            if (null == h) return null;
            if (n.isGuildVocal()) {
                if (null == p || p.channel.isCategory()) return { referenceId: h.channel.id, parentId: l.parent_id };
                if (p.channel.isGuildVocal()) return { referenceId: h.channel.id, parentId: p.channel.parent_id };
            }
            return n.isCategory() && (null == p || p.channel.isCategory())
                ? { referenceId: h.channel.id, parentId: null }
                : null;
        },
        RL: o,
        cM: p,
        dS: function (n, e) {
            return (e[p(n.parent_id, e)] ?? []).filter((e) => a(e.channel.type, n.type));
        },
        vX: function (n, e, l, r) {
            if (n.isCategory()) {
                let l = e._categories.filter((n) => {
                        let { channel: e } = n;
                        return "null" !== e.id;
                    }),
                    t = "first" === r ? l[0] : l[l.length - 1];
                return null != t ? o(n, t.channel, null, e) : [];
            }
            function u(e) {
                return a(e.channel.type, n.type);
            }
            let d = (0, t.A)(e._categories, e, u),
                c = d.find((e) => e.channel.id === n.id);
            if (null == c) return [];
            let f = {};
            for (let { channel: n } of e._categories) f[n.id] = [];
            for (let l of d) l.channel.id !== n.id && f[p(l.channel.parent_id, e)]?.push(l);
            let h = f[l];
            if (null == h) return [];
            "first" === r ? h.unshift(c) : h.push(c);
            let s = (0, i.vI)({
                    oldOrdering: d,
                    newOrdering: (0, t.A)(e._categories, f, u),
                    idGetter: (n) => {
                        let { channel: e } = n;
                        return e.id;
                    },
                    existingPositionGetter: (n) => {
                        let { channel: e } = n;
                        return e.position;
                    },
                }),
                y = "null" === l ? null : l;
            if (n.parent_id !== y) {
                let e = s.find((e) => e.id === n.id);
                null != e ? (e.parent_id = y) : s.push({ id: n.id, parent_id: y });
            }
            return s;
        },
        ws: a,
    },
);
