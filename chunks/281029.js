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
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: d } = o.d4z;
    return e.type === d
        ? r === t || (r < t && e.type === n.type)
            ? u(n)
            : r > t
              ? (function (e, t, n) {
                    var r;
                    let { GUILD_CATEGORY: i } = o.d4z,
                        l = n[(null !== (r = c(t, n, !0)) && void 0 !== r ? r : 0) + 1],
                        a = s(-1, t.id, e.type, n);
                    return null == a || a.channel.id === e.id
                        ? null
                        : null == l || l.channel.type === i
                          ? {
                                referenceId: a.channel.id,
                                parentId: null
                            }
                          : null;
                })(e, n, l)
              : null
        : a(e.type, n.type)
          ? u(n)
          : r < t
            ? n.type === d
                ? (function (e, t, n) {
                      var r;
                      let l = n[(null !== (r = c(t, n, !0)) && void 0 !== r ? r : 0) - 1],
                          o = s(1, t.id, e.type, n);
                      if (null == l)
                          return {
                              referenceId: null,
                              parentId: null
                          };
                      if (null != o) {
                          if (a(l.channel.type, e.type) || (e.isGuildVocal() && (0, i.r8)(l.channel.type)))
                              return {
                                  referenceId: o.channel.id,
                                  parentId: l.channel.parent_id
                              };
                          if (l.channel.isCategory())
                              return {
                                  referenceId: o.channel.id,
                                  parentId: l.channel.id
                              };
                      }
                      return null;
                  })(e, n, l)
                : (function (e, t, n) {
                      var r;
                      let l = n[(null !== (r = c(t, n, !0)) && void 0 !== r ? r : 0) - 1],
                          o = s(1, t.id, e.type, n);
                      return null != l || e.isGuildVocal()
                          ? (0, i.r8)(e.type) && null != o && ((0, i.r8)(l.channel.type) || l.channel.isCategory())
                              ? {
                                    referenceId: o.channel.id,
                                    parentId: t.parent_id
                                }
                              : null
                          : {
                                referenceId: null != o ? o.channel.id : null,
                                parentId: null
                            };
                  })(e, n, l)
            : n.type === d
              ? (function (e, t, n) {
                    var r;
                    let l = n[(null !== (r = c(t, n, !0)) && void 0 !== r ? r : 0) + 1],
                        o = s(-1, t.id, e.type, n);
                    if (null != o) {
                        if (null == l)
                            return {
                                referenceId: o.channel.id,
                                parentId: t.id
                            };
                        if (a(l.channel.type, e.type) || ((0, i.r8)(e.type) && l.channel.isGuildVocal()))
                            return {
                                referenceId: o.channel.id,
                                parentId: l.channel.parent_id
                            };
                        if (l.channel.isCategory())
                            return {
                                referenceId: o.channel.id,
                                parentId: t.id
                            };
                    }
                    return null;
                })(e, n, l)
              : (function (e, t, n) {
                    var r;
                    let i = n[(null !== (r = c(t, n, !0)) && void 0 !== r ? r : 0) + 1],
                        l = s(-1, t.id, e.type, n);
                    if (null == l) return null;
                    if (e.isGuildVocal()) {
                        if (null == i || i.channel.isCategory())
                            return {
                                referenceId: l.channel.id,
                                parentId: t.parent_id
                            };
                        if (i.channel.isGuildVocal())
                            return {
                                referenceId: l.channel.id,
                                parentId: i.channel.parent_id
                            };
                    }
                    return e.isCategory() && (null == i || i.channel.isCategory())
                        ? {
                              referenceId: l.channel.id,
                              parentId: null
                          }
                        : null;
                })(e, n, l);
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
