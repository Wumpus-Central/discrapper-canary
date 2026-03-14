"use strict";
n.d(t, { QO: () => u, Zj: () => h, ws: () => a }), n(667532), n(321073);
var i = n(999903),
    s = n(95701),
    l = n(111613),
    r = n(652215);
function a(e, t) {
    return null != e && null != t && (e === t || ((0, s.tr)(e) && (0, s.tr)(t)) || ((0, s.ay)(e) && (0, s.ay)(t)));
}
function o(e, t, n, i) {
    let s = -1;
    if (
        (i.find((e, n) => {
            let { channel: i } = e;
            return i.id === t && ((s = n), !0);
        }),
        s < 0)
    )
        return null;
    for (let t = s; t >= 0 && t < i.length; t += e) {
        let e = i[t];
        if (a(e.channel.type, n)) return e;
    }
    return null;
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let i = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: i },
                } = t;
                return null != e && (n || a(e.type, i));
            })
            .find((t, n) => {
                let {
                    channel: { id: s },
                } = t;
                return null != e && s === e.id && ((i = n), !0);
            }),
        i
    );
}
function d(e) {
    return { referenceId: e.id, parentId: e.parent_id };
}
function u(e, t, n, i, l) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: u } = r.rbe;
    if (e.type === u)
        return i === t || (i < t && e.type === n.type)
            ? d(n)
            : i > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: i } = r.rbe,
                        s = n[(c(t, n, !0) ?? 0) + 1],
                        l = o(-1, t.id, e.type, n);
                    return null == l || l.channel.id === e.id
                        ? null
                        : null == s || s.channel.type === i
                          ? { referenceId: l.channel.id, parentId: null }
                          : null;
                })(e, n, l)
              : null;
    if (a(e.type, n.type)) return d(n);
    if (i < t) {
        let t, i;
        if (n.type === u) {
            let t = l[(c(n, l, !0) ?? 0) - 1],
                i = o(1, n.id, e.type, l);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != i) {
                if (a(t.channel.type, e.type) || (e.isGuildVocal() && (0, s.tr)(t.channel.type)))
                    return { referenceId: i.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: i.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = l[(c(n, l, !0) ?? 0) - 1]),
            (i = o(1, n.id, e.type, l)),
            null != t || e.isGuildVocal()
                ? (0, s.tr)(e.type) && null != i && ((0, s.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: i.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != i ? i.channel.id : null, parentId: null }
        );
    }
    if (n.type === u) {
        let t = l[(c(n, l, !0) ?? 0) + 1],
            i = o(-1, n.id, e.type, l);
        if (null != i) {
            if (null == t) return { referenceId: i.channel.id, parentId: n.id };
            if (a(t.channel.type, e.type) || ((0, s.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: i.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: i.channel.id, parentId: n.id };
        }
        return null;
    }
    let h = l[(c(n, l, !0) ?? 0) + 1],
        A = o(-1, n.id, e.type, l);
    if (null == A) return null;
    if (e.isGuildVocal()) {
        if (null == h || h.channel.isCategory()) return { referenceId: A.channel.id, parentId: n.parent_id };
        if (h.channel.isGuildVocal()) return { referenceId: A.channel.id, parentId: h.channel.parent_id };
    }
    return e.isCategory() && (null == h || h.channel.isCategory())
        ? { referenceId: A.channel.id, parentId: null }
        : null;
}
function h(e, t, n, r) {
    let a,
        o,
        d = [],
        u = [],
        h = r._categories,
        A = (t) => {
            var n, i;
            let s;
            return (
                (s =
                    null == a ||
                    null == o ||
                    ((n = a), (i = o), +(null == n || null == i || null == t[n] || t[n].channel !== e || null == t[i]))
                        ? [...t]
                        : l.Ay.moveItemFromTo(t, a, o)),
                (d = d.concat(
                    l.Ay.calculatePositionDeltas({
                        oldOrdering: t,
                        newOrdering: s,
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
                s
            );
        };
    if (e.isCategory()) {
        let n = [...h].slice(1);
        (a = c(e, n)), (o = c(t, n)), (u = A(n)).unshift(h[0]);
    }
    if ((0, s.tr)(e.type) || e.isCategory()) {
        let n = (0, i.A)(u.length > 0 ? u : h, r, (e) => {
            let {
                channel: { type: t },
            } = e;
            return (0, s.tr)(t);
        });
        (a = c(e, n)), (o = c(t, n)), A(n);
    }
    if (e.isGuildVocal() || e.isCategory()) {
        let n = (0, i.A)(u.length > 0 ? u : h, r, (e) => {
            let { channel: t } = e;
            return t.isGuildVocal();
        });
        (a = c(e, n)), (o = c(t, n)), A(n);
    }
    return (
        e.parent_id !== n &&
            null == d.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
            d.push({ id: e.id, parent_id: n }),
        d
    );
}
