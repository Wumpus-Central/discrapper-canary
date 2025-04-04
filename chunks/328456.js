n.d(t, {
    R: () => s,
    b: () => a
}),
    n(653041),
    n(47120);
var r = n(192379),
    i = n(979554);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class a {
    get firstAvatarDecoration() {
        return this.getFirstItemByType(i.Z.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(i.Z.PROFILE_EFFECT);
    }
    getFirstItemByType(e) {
        var t;
        let n = (null != (t = this.itemsByTypes.get(e)) ? t : [])[0];
        if (null != n) return n;
    }
    sortByTypes(e) {
        return e.reduce((e, t) => {
            let n = e.get(t.type);
            return null != n ? n.push(t) : e.set(t.type, [t]), e;
        }, new Map());
    }
    constructor(e) {
        o(this, 'itemsByTypes', void 0), (this.itemsByTypes = this.sortByTypes(e));
    }
}
let s = (e) => {
    let { firstProfileEffect: t, firstAvatarDecoration: n } = r.useMemo(() => new a(e.items), [e]);
    return {
        firstProfileEffect: t,
        firstAvatarDecoration: n
    };
};
