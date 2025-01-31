n.d(t, {
    C5: () => u,
    CL: () => o,
    cf: () => s,
    iw: () => l
}),
    n(789020);
var i = n(149765),
    r = n(866442),
    a = n(709054);
function s(e) {
    e.permissions = i.vB(e.permissions);
}
function o(e) {
    var t;
    return {
        id: e.id,
        name: e.name,
        permissions: i.vB(e.permissions),
        mentionable: e.mentionable,
        position: e.position,
        originalPosition: e.position,
        color: e.color,
        colorString: null != e.color && 0 !== e.color ? (0, r.Rf)(e.color) : null,
        hoist: e.hoist,
        managed: e.managed,
        tags: e.tags,
        icon: e.icon,
        unicodeEmoji: e.unicode_emoji,
        flags: null !== (t = e.flags) && void 0 !== t ? t : 0
    };
}
function l(e, t) {
    if (null == t) return {};
    let n = t.length - 1,
        i = {};
    return (
        t
            .sort((t, n) => {
                var i, r;
                let s = e === t.id ? 1 / 0 : -(null !== (i = t.originalPosition) && void 0 !== i ? i : t.position),
                    o = e === n.id ? 1 / 0 : -(null !== (r = n.originalPosition) && void 0 !== r ? r : n.position);
                return s === o ? a.default.compare(t.id, n.id) : s < o ? -1 : s === o ? 0 : 1;
            })
            .forEach((e, t) => {
                (e.position = n - t), (i[e.id] = e);
            }),
        i
    );
}
function u(e, t) {
    return null == t ? {} : l(e, t.map(o));
}
