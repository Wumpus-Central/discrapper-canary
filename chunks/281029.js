n.d(t, {
    Dn: () => h,
    if: () => u,
    ig: () => o
}),
    n(47120),
    n(733860),
    n(653041);
var i = n(740504),
    l = n(131704),
    r = n(990492),
    a = n(981631);
function o(e, t) {
    return null != e && null != t && (e === t || ((0, l.r8)(e) && (0, l.r8)(t)) || ((0, l.bw)(e) && (0, l.bw)(t)));
}
function s(e, t, n, i) {
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
        if (o(e.channel.type, n)) return e;
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
                    channel: { type: i }
                } = t;
                return null != e && (n || o(e.type, i));
            })
            .find((t, n) => {
                let {
                    channel: { id: l }
                } = t;
                return null != e && l === e.id && ((i = n), !0);
            }),
        i
    );
}
function d(e) {
    return {
        referenceId: e.id,
        parentId: e.parent_id
    };
}
function u(e, t, n, i, r) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: u } = a.d4z;
    return e.type === u
        ? i === t || (i < t && e.type === n.type)
            ? d(n)
            : i > t
              ? (function (e, t, n) {
                    var i;
                    let { GUILD_CATEGORY: l } = a.d4z,
                        r = n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) + 1],
                        o = s(-1, t.id, e.type, n);
                    return null == o || o.channel.id === e.id
                        ? null
                        : null == r || r.channel.type === l
                          ? {
                                referenceId: o.channel.id,
                                parentId: null
                            }
                          : null;
                })(e, n, r)
              : null
        : o(e.type, n.type)
          ? d(n)
          : i < t
            ? n.type === u
                ? (function (e, t, n) {
                      var i;
                      let r = n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) - 1],
                          a = s(1, t.id, e.type, n);
                      if (null == r)
                          return {
                              referenceId: null,
                              parentId: null
                          };
                      if (null != a) {
                          if (o(r.channel.type, e.type) || (e.isGuildVocal() && (0, l.r8)(r.channel.type)))
                              return {
                                  referenceId: a.channel.id,
                                  parentId: r.channel.parent_id
                              };
                          if (r.channel.isCategory())
                              return {
                                  referenceId: a.channel.id,
                                  parentId: r.channel.id
                              };
                      }
                      return null;
                  })(e, n, r)
                : (function (e, t, n) {
                      var i;
                      let r = n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) - 1],
                          a = s(1, t.id, e.type, n);
                      return null != r || e.isGuildVocal()
                          ? (0, l.r8)(e.type) && null != a && ((0, l.r8)(r.channel.type) || r.channel.isCategory())
                              ? {
                                    referenceId: a.channel.id,
                                    parentId: t.parent_id
                                }
                              : null
                          : {
                                referenceId: null != a ? a.channel.id : null,
                                parentId: null
                            };
                  })(e, n, r)
            : n.type === u
              ? (function (e, t, n) {
                    var i;
                    let r = n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) + 1],
                        a = s(-1, t.id, e.type, n);
                    if (null != a) {
                        if (null == r)
                            return {
                                referenceId: a.channel.id,
                                parentId: t.id
                            };
                        if (o(r.channel.type, e.type) || ((0, l.r8)(e.type) && r.channel.isGuildVocal()))
                            return {
                                referenceId: a.channel.id,
                                parentId: r.channel.parent_id
                            };
                        if (r.channel.isCategory())
                            return {
                                referenceId: a.channel.id,
                                parentId: t.id
                            };
                    }
                    return null;
                })(e, n, r)
              : (function (e, t, n) {
                    var i;
                    let l = n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) + 1],
                        r = s(-1, t.id, e.type, n);
                    if (null == r) return null;
                    if (e.isGuildVocal()) {
                        if (null == l || l.channel.isCategory())
                            return {
                                referenceId: r.channel.id,
                                parentId: t.parent_id
                            };
                        if (l.channel.isGuildVocal())
                            return {
                                referenceId: r.channel.id,
                                parentId: l.channel.parent_id
                            };
                    }
                    return e.isCategory() && (null == l || l.channel.isCategory())
                        ? {
                              referenceId: r.channel.id,
                              parentId: null
                          }
                        : null;
                })(e, n, r);
}
function h(e, t, n, a) {
    let o,
        s,
        d = [],
        u = [],
        h = a._categories,
        p = (t) => {
            var n, i;
            let l;
            return (
                (l = null == o || null == s || ((n = o), (i = s), null != n && null != i && null != t[n] && t[n].channel === e && null != t[i] ? 0 : 1) ? [...t] : r.ZP.moveItemFromTo(t, o, s)),
                (d = d.concat(
                    r.ZP.calculatePositionDeltas({
                        oldOrdering: t,
                        newOrdering: l,
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
                l
            );
        };
    if (e.isCategory()) {
        let n = [...h].slice(1);
        (o = c(e, n)), (s = c(t, n)), (u = p(n)).unshift(h[0]);
    }
    if ((0, l.r8)(e.type) || e.isCategory()) {
        let n = (0, i.Z)(u.length > 0 ? u : h, a, (e) => {
            let {
                channel: { type: t }
            } = e;
            return (0, l.r8)(t);
        });
        (o = c(e, n)), (s = c(t, n)), p(n);
    }
    if (e.isGuildVocal() || e.isCategory()) {
        let n = (0, i.Z)(u.length > 0 ? u : h, a, (e) => {
            let { channel: t } = e;
            return t.isGuildVocal();
        });
        (o = c(e, n)), (s = c(t, n)), p(n);
    }
    if (e.parent_id !== n) {
        let t = !1;
        d.find((i) => i.id === e.id && ((i.parent_id = n), (t = !0))),
            t ||
                d.push({
                    id: e.id,
                    parent_id: n
                });
    }
    return d;
}
