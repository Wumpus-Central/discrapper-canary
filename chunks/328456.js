n.d(t, {
    R: () => o,
    b: () => s
}),
    n(724458),
    n(653041),
    n(47120);
var i = n(192379),
    r = n(979554);
function a(e, t, n) {
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
class s {
    get firstAvatarDecoration() {
        return this.getFirstItemByType(r.Z.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(r.Z.PROFILE_EFFECT);
    }
    getFirstItemByType(e) {
        var t;
        let n = (null !== (t = this.itemsByTypes.get(e)) && void 0 !== t ? t : [])[0];
        if (null != n) return n;
    }
    sortByTypes(e) {
        return e.reduce((e, t) => {
            let n = e.get(t.type);
            return null != n ? n.push(t) : e.set(t.type, [t]), e;
        }, new Map());
    }
    constructor(e) {
        a(this, 'itemsByTypes', void 0), (this.itemsByTypes = this.sortByTypes(e));
    }
}
let o = (e) => {
    let { firstProfileEffect: t, firstAvatarDecoration: n } = i.useMemo(() => new s(e.items), [e]);
    return {
        firstProfileEffect: t,
        firstAvatarDecoration: n
    };
};
