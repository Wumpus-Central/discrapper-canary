(r.d(t, {
    Rj: () => o,
    Ws: () => l
}),
    r(539854),
    r(388685));
var a = r(73800),
    n = r(979554),
    i = r(388032);
class s {
    get firstAvatarDecoration() {
        return this.getFirstItemByType(n.Z.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(n.Z.PROFILE_EFFECT);
    }
    getFirstItemByType(e) {
        var t;
        let r = (null != (t = this.itemsByTypes.get(e)) ? t : [])[0];
        if (null != r) return r;
    }
    sortByTypes(e) {
        return e.reduce((e, t) => {
            let r = e.get(t.type);
            return (null != r ? r.push(t) : e.set(t.type, [t]), e);
        }, new Map());
    }
    constructor(e) {
        var t, r;
        ((r = void 0),
            (t = 'itemsByTypes') in this
                ? Object.defineProperty(this, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = r),
            (this.itemsByTypes = this.sortByTypes(e)));
    }
}
let o = (e) => {
        let { firstProfileEffect: t, firstAvatarDecoration: r } = a.useMemo(() => new s(e.items), [e]);
        return {
            firstProfileEffect: t,
            firstAvatarDecoration: r
        };
    },
    l = (e) => {
        let t = i.intl.string(i.t['7v0T9P']),
            r = i.intl.string(i.t.wR5wOj);
        if (null != e.bundledProducts) {
            var a, n;
            (e.bundledProducts.length > 0 && (t = null == (a = e.bundledProducts[0]) ? void 0 : a.name), e.bundledProducts.length > 1 && (r = null == (n = e.bundledProducts[1]) ? void 0 : n.name));
        }
        return {
            itemOneName: t,
            itemTwoName: r
        };
    };
