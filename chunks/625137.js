n.d(t, {
    C5: () => u,
    CL: () => l,
    cf: () => s,
    iw: () => c
}),
    n(789020),
    n(230036);
var r = n(149765),
    i = n(866442),
    o = n(393031),
    a = n(709054);
function s(e) {
    e.permissions = r.vB(e.permissions);
}
function l(e) {
    var t;
    return {
        id: e.id,
        name: e.name,
        permissions: r.vB(e.permissions),
        mentionable: e.mentionable,
        position: e.position,
        originalPosition: e.position,
        color: e.color,
        colorString: null != e.color && 0 !== e.color ? (0, i.Rf)(e.color) : null,
        colors: e.colors,
        colorStrings: null != e.colors ? (0, o.Z)(e.colors) : null,
        hoist: e.hoist,
        managed: e.managed,
        tags: e.tags,
        icon: e.icon,
        unicodeEmoji: e.unicode_emoji,
        flags: null != (t = e.flags) ? t : 0
    };
}
function c(e, t) {
    if (null == t) return {};
    let n = t.length - 1,
        r = {};
    return (
        t
            .sort((t, n) => {
                var r, i;
                let o = e === t.id ? 1 / 0 : -(null != (r = t.originalPosition) ? r : t.position),
                    s = e === n.id ? 1 / 0 : -(null != (i = n.originalPosition) ? i : n.position);
                return o === s ? a.default.compare(t.id, n.id) : o < s ? -1 : +(o !== s);
            })
            .forEach((e, t) => {
                (e.position = n - t), (r[e.id] = e);
            }),
        r
    );
}
function u(e, t) {
    return null == t ? {} : c(e, t.map(l));
}
