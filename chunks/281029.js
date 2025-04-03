n.d(t, {
    Dn: () => p,
    if: () => d,
    ig: () => a
}),
    n(47120),
    n(733860),
    n(653041);
var r = n(740504),
    i = n(131704),
    l = n(990492),
    o = n(981631);
function a(e, t) {
    return null != e && null != t && (e === t || ((0, i.r8)(e) && (0, i.r8)(t)) || ((0, i.bw)(e) && (0, i.bw)(t)));
}
function s(e, t, n, r) {
    let i = -1;
    if (
        (r.find((e, n) => {
            let { channel: r } = e;
            return r.id === t && ((i = n), !0);
        }),
        i < 0)
    )
        return null;
    for (let t = i; t >= 0 && t < r.length; t += e) {
        let e = r[t];
        if (a(e.channel.type, n)) return e;
    }
    return null;
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let r = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: r }
                } = t;
                return null != e && (n || a(e.type, r));
            })
            .find((t, n) => {
                let {
                    channel: { id: i }
                } = t;
                return null != e && i === e.id && ((r = n), !0);
            }),
        r
    );
}
function u(e) {
    return {
        referenceId: e.id,
        parentId: e.parent_id
    };
}
function d(e, t, n, r, l) {
    var d, p, h, f, g;
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: m } = o.d4z;
    if (e.type === m) {
        if (r === t || (r < t && e.type === n.type)) return u(n);
        if (r > t) {
            let { GUILD_CATEGORY: t } = o.d4z,
                r = l[(null != (p = c(n, l, !0)) ? p : 0) + 1],
                i = s(-1, n.id, e.type, l);
            return null == i || i.channel.id === e.id
                ? null
                : null == r || r.channel.type === t
                  ? {
                        referenceId: i.channel.id,
                        parentId: null
                    }
                  : null;
        }
        return null;
    }
    if (a(e.type, n.type)) return u(n);
    if (r < t) {
        if (n.type === m) {
            let t = l[(null != (f = c(n, l, !0)) ? f : 0) - 1],
                r = s(1, n.id, e.type, l);
            if (null == t)
                return {
                    referenceId: null,
                    parentId: null
                };
            if (null != r) {
                if (a(t.channel.type, e.type) || (e.isGuildVocal() && (0, i.r8)(t.channel.type)))
                    return {
                        referenceId: r.channel.id,
                        parentId: t.channel.parent_id
                    };
                if (t.channel.isCategory())
                    return {
                        referenceId: r.channel.id,
                        parentId: t.channel.id
                    };
            }
            return null;
        }
        let t = l[(null != (h = c(n, l, !0)) ? h : 0) - 1],
            r = s(1, n.id, e.type, l);
        return null != t || e.isGuildVocal()
            ? (0, i.r8)(e.type) && null != r && ((0, i.r8)(t.channel.type) || t.channel.isCategory())
                ? {
                      referenceId: r.channel.id,
                      parentId: n.parent_id
                  }
                : null
            : {
                  referenceId: null != r ? r.channel.id : null,
                  parentId: null
              };
    }
    if (n.type === m) {
        let t = l[(null != (g = c(n, l, !0)) ? g : 0) + 1],
            r = s(-1, n.id, e.type, l);
        if (null != r) {
            if (null == t)
                return {
                    referenceId: r.channel.id,
                    parentId: n.id
                };
            if (a(t.channel.type, e.type) || ((0, i.r8)(e.type) && t.channel.isGuildVocal()))
                return {
                    referenceId: r.channel.id,
                    parentId: t.channel.parent_id
                };
            if (t.channel.isCategory())
                return {
                    referenceId: r.channel.id,
                    parentId: n.id
                };
        }
        return null;
    }
    let b = l[(null != (d = c(n, l, !0)) ? d : 0) + 1],
        y = s(-1, n.id, e.type, l);
    if (null == y) return null;
    if (e.isGuildVocal()) {
        if (null == b || b.channel.isCategory())
            return {
                referenceId: y.channel.id,
                parentId: n.parent_id
            };
        if (b.channel.isGuildVocal())
            return {
                referenceId: y.channel.id,
                parentId: b.channel.parent_id
            };
    }
    return e.isCategory() && (null == b || b.channel.isCategory())
        ? {
              referenceId: y.channel.id,
              parentId: null
          }
        : null;
}
function p(e, t, n, o) {
    let a,
        s,
        u = [],
        d = [],
        p = o._categories,
        h = (t) => {
            var n, r;
            let i;
            return (
                (i = null == a || null == s || ((n = a), (r = s), +(null == n || null == r || null == t[n] || t[n].channel !== e || null == t[r])) ? [...t] : l.ZP.moveItemFromTo(t, a, s)),
                (u = u.concat(
                    l.ZP.calculatePositionDeltas({
                        oldOrdering: t,
                        newOrdering: i,
                        idGetter: (e) => {
                            let { channel: t } = e;
                            return t.id;
                        },
                        existingPositionGetter: (e) => {
                            let { channel: t } = e;
                            return t.position;
                        }
                    })
                )),
                i
            );
        };
    if (e.isCategory()) {
        let n = [...p].slice(1);
        (a = c(e, n)), (s = c(t, n)), (d = h(n)).unshift(p[0]);
    }
    if ((0, i.r8)(e.type) || e.isCategory()) {
        let n = (0, r.Z)(d.length > 0 ? d : p, o, (e) => {
            let {
                channel: { type: t }
            } = e;
            return (0, i.r8)(t);
        });
        (a = c(e, n)), (s = c(t, n)), h(n);
    }
    if (e.isGuildVocal() || e.isCategory()) {
        let n = (0, r.Z)(d.length > 0 ? d : p, o, (e) => {
            let { channel: t } = e;
            return t.isGuildVocal();
        });
        (a = c(e, n)), (s = c(t, n)), h(n);
    }
    if (e.parent_id !== n) {
        let t = !1;
        u.find((r) => r.id === e.id && ((r.parent_id = n), (t = !0))),
            t ||
                u.push({
                    id: e.id,
                    parent_id: n
                });
    }
    return u;
}
