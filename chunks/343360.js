n.d(t, { QO: () => u, Zj: () => h, ws: () => r }), n(667532), n(321073);
var i = n(999903),
    l = n(95701),
    s = n(111613),
    a = n(652215);
function r(e, t) {
    return null != e && null != t && (e === t || ((0, l.tr)(e) && (0, l.tr)(t)) || ((0, l.ay)(e) && (0, l.ay)(t)));
}
function o(e, t, n, i) {
    let l = -1;
    if (
        (i.find((e, n) => {
            let { channel: i } = e;
            return i.id === t && ((l = n), !0);
        }),
        l < 0)
    )
        return null;
    for (let t = l; t >= 0 && t < i.length; t += e) {
        let e = i[t];
        if (r(e.channel.type, n)) return e;
    }
    return null;
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let i = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: i },
                } = t;
                return null != e && (n || r(e.type, i));
            })
            .find((t, n) => {
                let {
                    channel: { id: l },
                } = t;
                return null != e && l === e.id && ((i = n), !0);
            }),
        i
    );
}
function c(e) {
    return { referenceId: e.id, parentId: e.parent_id };
}
function u(e, t, n, i, s) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: u } = a.rbe;
    if (e.type === u)
        return i === t || (i < t && e.type === n.type)
            ? c(n)
            : i > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: i } = a.rbe,
                        l = n[(d(t, n, !0) ?? 0) + 1],
                        s = o(-1, t.id, e.type, n);
                    return null == s || s.channel.id === e.id
                        ? null
                        : null == l || l.channel.type === i
                          ? { referenceId: s.channel.id, parentId: null }
                          : null;
                })(e, n, s)
              : null;
    if (r(e.type, n.type)) return c(n);
    if (i < t) {
        let t, i;
        if (n.type === u) {
            let t = s[(d(n, s, !0) ?? 0) - 1],
                i = o(1, n.id, e.type, s);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != i) {
                if (r(t.channel.type, e.type) || (e.isGuildVocal() && (0, l.tr)(t.channel.type)))
                    return { referenceId: i.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: i.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = s[(d(n, s, !0) ?? 0) - 1]),
            (i = o(1, n.id, e.type, s)),
            null != t || e.isGuildVocal()
                ? (0, l.tr)(e.type) && null != i && ((0, l.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: i.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != i ? i.channel.id : null, parentId: null }
        );
    }
    if (n.type === u) {
        let t = s[(d(n, s, !0) ?? 0) + 1],
            i = o(-1, n.id, e.type, s);
        if (null != i) {
            if (null == t) return { referenceId: i.channel.id, parentId: n.id };
            if (r(t.channel.type, e.type) || ((0, l.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: i.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: i.channel.id, parentId: n.id };
        }
        return null;
    }
    let h = s[(d(n, s, !0) ?? 0) + 1],
        A = o(-1, n.id, e.type, s);
    if (null == A) return null;
    if (e.isGuildVocal()) {
        if (null == h || h.channel.isCategory()) return { referenceId: A.channel.id, parentId: n.parent_id };
        if (h.channel.isGuildVocal()) return { referenceId: A.channel.id, parentId: h.channel.parent_id };
    }
    return e.isCategory() && (null == h || h.channel.isCategory())
        ? { referenceId: A.channel.id, parentId: null }
        : null;
}
function h(e, t, n, a) {
    let r,
        o,
        c = [],
        u = [],
        h = a._categories,
        A = (t) => {
            var n, i;
            let l;
            return (
                (l =
                    null == r ||
                    null == o ||
                    ((n = r), (i = o), +(null == n || null == i || null == t[n] || t[n].channel !== e || null == t[i]))
                        ? [...t]
                        : s.Ay.moveItemFromTo(t, r, o)),
                (c = c.concat(
                    s.Ay.calculatePositionDeltas({
                        oldOrdering: t,
                        newOrdering: l,
                        idGetter: (e) => {
                            let { channel: t } = e;
                            return t.id;
                        },
                        existingPositionGetter: (e) => {
                            let { channel: t } = e;
                            return t.position;
                        },
                    }),
                )),
                l
            );
        };
    if (e.isCategory()) {
        let n = [...h].slice(1);
        (r = d(e, n)), (o = d(t, n)), (u = A(n)).unshift(h[0]);
    }
    if ((0, l.tr)(e.type) || e.isCategory()) {
        let n = (0, i.A)(u.length > 0 ? u : h, a, (e) => {
            let {
                channel: { type: t },
            } = e;
            return (0, l.tr)(t);
        });
        (r = d(e, n)), (o = d(t, n)), A(n);
    }
    if (e.isGuildVocal() || e.isCategory()) {
        let n = (0, i.A)(u.length > 0 ? u : h, a, (e) => {
            let { channel: t } = e;
            return t.isGuildVocal();
        });
        (r = d(e, n)), (o = d(t, n)), A(n);
    }
    return (
        e.parent_id !== n &&
            null == c.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
            c.push({ id: e.id, parent_id: n }),
        c
    );
}
