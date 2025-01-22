r.d(n, {
    R: function () {
        return d;
    },
    b: function () {
        return c;
    }
});
var i = r(724458);
var a = r(653041);
var o = r(47120);
var s = r(192379),
    l = r(979554);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class c {
    get firstAvatarDecoration() {
        return this.getFirstItemByType(l.Z.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(l.Z.PROFILE_EFFECT);
    }
    getFirstItemByType(e) {
        var n;
        let r = (null !== (n = this.itemsByTypes.get(e)) && void 0 !== n ? n : [])[0];
        if (null != r) return r;
    }
    sortByTypes(e) {
        return e.reduce((e, n) => {
            let r = e.get(n.type);
            return null != r ? r.push(n) : e.set(n.type, [n]), e;
        }, new Map());
    }
    constructor(e) {
        u(this, 'itemsByTypes', void 0), (this.itemsByTypes = this.sortByTypes(e));
    }
}
let d = (e) => {
    let { firstProfileEffect: n, firstAvatarDecoration: r } = s.useMemo(() => new c(e.items), [e]);
    return {
        firstProfileEffect: n,
        firstAvatarDecoration: r
    };
};
