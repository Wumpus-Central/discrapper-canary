n.d(t, {
    C5: () => c,
    CL: () => s,
    cf: () => a,
    iw: () => l
}),
    n(789020),
    n(230036);
var r = n(149765),
    i = n(866442),
    o = n(709054);
function a(e) {
    e.permissions = r.vB(e.permissions);
}
function s(e) {
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
        colorStrings:
            null != e.colors
                ? {
                      primaryColor: (0, i.Rf)(e.colors.primary_color),
                      secondaryColor: null != e.colors.secondary_color ? (0, i.Rf)(e.colors.secondary_color) : void 0,
                      tertiaryColor: null != e.colors.tertiary_color ? (0, i.Rf)(e.colors.tertiary_color) : void 0
                  }
                : null,
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
        r = {};
    return (
        t
            .sort((t, n) => {
                var r, i;
                let a = e === t.id ? 1 / 0 : -(null !== (r = t.originalPosition) && void 0 !== r ? r : t.position),
                    s = e === n.id ? 1 / 0 : -(null !== (i = n.originalPosition) && void 0 !== i ? i : n.position);
                return a === s ? o.default.compare(t.id, n.id) : a < s ? -1 : +(a !== s);
            })
            .forEach((e, t) => {
                (e.position = n - t), (r[e.id] = e);
            }),
        r
    );
}
function c(e, t) {
    return null == t ? {} : l(e, t.map(s));
}
