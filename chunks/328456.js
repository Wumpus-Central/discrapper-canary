i.d(t, {
    Rj: () => a,
    Ws: () => o,
}),
    i(539854),
    i(388685);
var r = i(73800),
    n = i(979554),
    l = i(388032);
class s {
    get firstAvatarDecoration() {
        return this.getFirstItemByType(n.Z.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(n.Z.PROFILE_EFFECT);
    }
    getFirstItemByType(e) {
        var t;
        let i = (null != (t = this.itemsByTypes.get(e)) ? t : [])[0];
        if (null != i) return i;
    }
    sortByTypes(e) {
        return e.reduce((e, t) => {
            let i = e.get(t.type);
            return null != i ? i.push(t) : e.set(t.type, [t]), e;
        }, new Map());
    }
    constructor(e) {
        var t, i;
        (i = void 0),
            (t = "itemsByTypes") in this
                ? Object.defineProperty(this, t, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (this[t] = i),
            (this.itemsByTypes = this.sortByTypes(e));
    }
}
let a = (e) => {
        let { firstProfileEffect: t, firstAvatarDecoration: i } = r.useMemo(() => new s(e.items), [e]);
        return {
            firstProfileEffect: t,
            firstAvatarDecoration: i,
        };
    },
    o = (e) => {
        let t = l.intl.string(l.t["7v0T9P"]),
            i = l.intl.string(l.t.wR5wOj);
        if (null != e.bundledProducts) {
            var r, n;
            e.bundledProducts.length > 0 && (t = null == (r = e.bundledProducts[0]) ? void 0 : r.name),
                e.bundledProducts.length > 1 && (i = null == (n = e.bundledProducts[1]) ? void 0 : n.name);
        }
        return {
            itemOneName: t,
            itemTwoName: i,
        };
    };
