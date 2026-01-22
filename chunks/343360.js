n.d(t, {
    QO: () => d,
    Zj: () => f,
    ws: () => s,
}),
    n(896048),
    n(667532),
    n(321073);
var r = n(999903),
    l = n(95701),
    i = n(111613),
    a = n(652215);

function s(e, t) {
    return null != e && null != t && (e === t || ((0, l.tr)(e) && (0, l.tr)(t)) || ((0, l.ay)(e) && (0, l.ay)(t)));
}

function o(e, t, n, r) {
    let l = -1;
    if (
        (r.find((e, n) => {
            let { channel: r } = e;
            return r.id === t && ((l = n), !0);
        }),
        l < 0)
    )
        return null;
    for (let t = l; t >= 0 && t < r.length; t += e) {
        let e = r[t];
        if (s(e.channel.type, n)) return e;
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
                    channel: { type: r },
                } = t;
                return null != e && (n || s(e.type, r));
            })
            .find((t, n) => {
                let {
                    channel: { id: l },
                } = t;
                return null != e && l === e.id && ((r = n), !0);
            }),
        r
    );
}

function u(e) {
    return {
        referenceId: e.id,
        parentId: e.parent_id,
    };
}

function d(e, t, n, r, i) {
    var d, f, p, h;
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: b } = a.rbe;
    if (e.type === b)
        return r === t || (r < t && e.type === n.type)
            ? u(n)
            : r > t
              ? (function (e, t, n) {
                    var r;
                    let { GUILD_CATEGORY: l } = a.rbe,
                        i = n[(null != (r = c(t, n, !0)) ? r : 0) + 1],
                        s = o(-1, t.id, e.type, n);
                    return null == s || s.channel.id === e.id
                        ? null
                        : null == i || i.channel.type === l
                          ? {
                                referenceId: s.channel.id,
                                parentId: null,
                            }
                          : null;
                })(e, n, i)
              : null;
    if (s(e.type, n.type)) return u(n);
    if (r < t) {
        let t, r;
        if (n.type === b) {
            let t = i[(null != (p = c(n, i, !0)) ? p : 0) - 1],
                r = o(1, n.id, e.type, i);
            if (null == t)
                return {
                    referenceId: null,
                    parentId: null,
                };
            if (null != r) {
                if (s(t.channel.type, e.type) || (e.isGuildVocal() && (0, l.tr)(t.channel.type)))
                    return {
                        referenceId: r.channel.id,
                        parentId: t.channel.parent_id,
                    };
                if (t.channel.isCategory())
                    return {
                        referenceId: r.channel.id,
                        parentId: t.channel.id,
                    };
            }
            return null;
        }
        return (
            (t = i[(null != (f = c(n, i, !0)) ? f : 0) - 1]),
            (r = o(1, n.id, e.type, i)),
            null != t || e.isGuildVocal()
                ? (0, l.tr)(e.type) && null != r && ((0, l.tr)(t.channel.type) || t.channel.isCategory())
                    ? {
                          referenceId: r.channel.id,
                          parentId: n.parent_id,
                      }
                    : null
                : {
                      referenceId: null != r ? r.channel.id : null,
                      parentId: null,
                  }
        );
    }
    if (n.type === b) {
        let t = i[(null != (h = c(n, i, !0)) ? h : 0) + 1],
            r = o(-1, n.id, e.type, i);
        if (null != r) {
            if (null == t)
                return {
                    referenceId: r.channel.id,
                    parentId: n.id,
                };
            if (s(t.channel.type, e.type) || ((0, l.tr)(e.type) && t.channel.isGuildVocal()))
                return {
                    referenceId: r.channel.id,
                    parentId: t.channel.parent_id,
                };
            if (t.channel.isCategory())
                return {
                    referenceId: r.channel.id,
                    parentId: n.id,
                };
        }
        return null;
    }
    let g = i[(null != (d = c(n, i, !0)) ? d : 0) + 1],
        m = o(-1, n.id, e.type, i);
    if (null == m) return null;
    if (e.isGuildVocal()) {
        if (null == g || g.channel.isCategory())
            return {
                referenceId: m.channel.id,
                parentId: n.parent_id,
            };
        if (g.channel.isGuildVocal())
            return {
                referenceId: m.channel.id,
                parentId: g.channel.parent_id,
            };
    }
    return e.isCategory() && (null == g || g.channel.isCategory())
        ? {
              referenceId: m.channel.id,
              parentId: null,
          }
        : null;
}

function f(e, t, n, a) {
    let s,
        o,
        u = [],
        d = [],
        f = a._categories,
        p = (t) => {
            var n, r;
            let l;
            return (
                (l =
                    null == s ||
                    null == o ||
                    ((n = s), (r = o), +(null == n || null == r || null == t[n] || t[n].channel !== e || null == t[r]))
                        ? [...t]
                        : i.Ay.moveItemFromTo(t, s, o)),
                (u = u.concat(
                    i.Ay.calculatePositionDeltas({
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
        let n = [...f].slice(1);
        (s = c(e, n)), (o = c(t, n)), (d = p(n)).unshift(f[0]);
    }
    if ((0, l.tr)(e.type) || e.isCategory()) {
        let n = (0, r.A)(d.length > 0 ? d : f, a, (e) => {
            let {
                channel: { type: t },
            } = e;
            return (0, l.tr)(t);
        });
        (s = c(e, n)), (o = c(t, n)), p(n);
    }
    if (e.isGuildVocal() || e.isCategory()) {
        let n = (0, r.A)(d.length > 0 ? d : f, a, (e) => {
            let { channel: t } = e;
            return t.isGuildVocal();
        });
        (s = c(e, n)), (o = c(t, n)), p(n);
    }
    if (e.parent_id !== n) {
        let t = !1;
        u.find((r) => r.id === e.id && ((r.parent_id = n), (t = !0))),
            t ||
                u.push({
                    id: e.id,
                    parent_id: n,
                });
    }
    return u;
}
