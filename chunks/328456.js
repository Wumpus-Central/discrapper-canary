n.d(t, { R: () => s }), n(539854), n(388685);
var r = n(73800),
    i = n(979554);
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
class o {
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
        a(this, 'itemsByTypes', void 0), (this.itemsByTypes = this.sortByTypes(e));
    }
}
let s = (e) => {
    let { firstProfileEffect: t, firstAvatarDecoration: n } = r.useMemo(() => new o(e.items), [e]);
    return {
        firstProfileEffect: t,
        firstAvatarDecoration: n
    };
};
