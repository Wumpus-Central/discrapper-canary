r.d(n, {
    C5: function () {
        return d;
    },
    CL: function () {
        return u;
    },
    cf: function () {
        return l;
    },
    iw: function () {
        return c;
    }
});
var i = r(789020);
var a = r(149765),
    o = r(866442),
    s = r(709054);
function l(e) {
    e.permissions = a.vB(e.permissions);
}
function u(e) {
    var n;
    return {
        id: e.id,
        name: e.name,
        permissions: a.vB(e.permissions),
        mentionable: e.mentionable,
        position: e.position,
        originalPosition: e.position,
        color: e.color,
        colorString: null != e.color && 0 !== e.color ? (0, o.Rf)(e.color) : null,
        hoist: e.hoist,
        managed: e.managed,
        tags: e.tags,
        icon: e.icon,
        unicodeEmoji: e.unicode_emoji,
        flags: null !== (n = e.flags) && void 0 !== n ? n : 0
    };
}
function c(e, n) {
    if (null == n) return {};
    let r = n.length - 1,
        i = {};
    return (
        n
            .sort((n, r) => {
                var i, a;
                let o = e === n.id ? 1 / 0 : -(null !== (i = n.originalPosition) && void 0 !== i ? i : n.position),
                    l = e === r.id ? 1 / 0 : -(null !== (a = r.originalPosition) && void 0 !== a ? a : r.position);
                return o === l ? s.default.compare(n.id, r.id) : o < l ? -1 : o === l ? 0 : 1;
            })
            .forEach((e, n) => {
                (e.position = r - n), (i[e.id] = e);
            }),
        i
    );
}
function d(e, n) {
    return null == n ? {} : c(e, n.map(u));
}
