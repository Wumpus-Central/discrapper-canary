n.d(t, { Z: () => g }), n(467055);
var r = n(473749),
    i = n(818531),
    a = n(662290),
    o = n(835473),
    s = n(929677),
    l = n(350327),
    c = n(823379),
    u = n(297146),
    d = n(330003);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t, n) {
    var r, i, a;
    let o =
        null == (a = e.profile) || null == (i = a.data) || null == (r = i.dynamic)
            ? void 0
            : r.find((e) => e.name === t);
    return null == o || o.type !== n ? null : o.value;
}
let m = {
    [i.J.MARVEL_RIVALS]: (e) => {
        var t, n, r, i, a, o, s, l, c, d, f, p;
        let _ = null == (r = e.profile) || null == (n = r.data) || null == (t = n.primary) ? void 0 : t.season,
            m = null == (o = e.profile) || null == (a = o.data) || null == (i = a.primary) ? void 0 : i.rank_name,
            h = (0, u.i)(
                null == (c = e.profile) || null == (l = c.data) || null == (s = l.primary) ? void 0 : s.rank_image,
            ),
            g = (0, u.i)(
                null == (p = e.profile) || null == (f = p.data) || null == (d = f.primary)
                    ? void 0
                    : d.featured_played_character_image,
            );
        return null == _ || null == m || null == g
            ? null
            : {
                  previewText: "".concat(_, ": ").concat(m),
                  previewIcon: h,
                  previewImage: g,
              };
    },
    [i.J.WUTHERING_WAVES]: (e, t) => {
        var n, r, i, o;
        let s = null == (n = e.profile) ? void 0 : n.username,
            l = _(e, "union_level", a.h.NUMBER),
            c = (0, u.i)(
                null == (o = e.profile) || null == (i = o.data) || null == (r = i.primary)
                    ? void 0
                    : r.featured_played_character_image,
            );
        return null == s || null == l || null == c
            ? null
            : {
                  previewText: "".concat(s, ": Level ").concat(t.format(l)),
                  previewIcon: null,
                  previewImage: c,
              };
    },
};
function h(e, t, n, r) {
    let i = t.getIconURL(16);
    if (null == i) return null;
    let a = m[e.widgetTemplateId](n, r);
    return null == a
        ? null
        : p(
              {
                  application: {
                      id: t.id,
                      name: t.name,
                      icon: i,
                  },
              },
              a,
          );
}
function g(e, t) {
    let n = (0, o.Z)(t.map((e) => e.applicationId)),
        { data: i } = (0, l.SK)(),
        { data: a } = (0, s.O)(e),
        u = (0, d.Z)();
    return r.useMemo(
        () =>
            Object.fromEntries(
                t
                    .map((e) => {
                        let t = null == i ? void 0 : i.find((t) => t.applicationId === e.applicationId),
                            r = n.find((t) => (null == t ? void 0 : t.id) === e.applicationId),
                            o = null == a ? void 0 : a.find((t) => t.application_id === e.applicationId);
                        if (null == t || null == r || null == o) return null;
                        let s = h(t, r, o, u);
                        return null == s ? null : [e.applicationId, s];
                    })
                    .filter(c.lm),
            ),
        [n, i, a, u, t],
    );
}
