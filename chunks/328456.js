(n.d(e, {
    Rj: () => s,
    Ws: () => o
}),
    n(539854),
    n(388685));
var r = n(73800),
    i = n(979554),
    l = n(388032);
class a {
    get firstAvatarDecoration() {
        return this.getFirstItemByType(i.Z.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(i.Z.PROFILE_EFFECT);
    }
    getFirstItemByType(t) {
        var e;
        let n = (null != (e = this.itemsByTypes.get(t)) ? e : [])[0];
        if (null != n) return n;
    }
    sortByTypes(t) {
        return t.reduce((t, e) => {
            let n = t.get(e.type);
            return (null != n ? n.push(e) : t.set(e.type, [e]), t);
        }, new Map());
    }
    constructor(t) {
        var e, n;
        ((n = void 0),
            (e = 'itemsByTypes') in this
                ? Object.defineProperty(this, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[e] = n),
            (this.itemsByTypes = this.sortByTypes(t)));
    }
}
let s = (t) => {
        let { firstProfileEffect: e, firstAvatarDecoration: n } = r.useMemo(() => new a(t.items), [t]);
        return {
            firstProfileEffect: e,
            firstAvatarDecoration: n
        };
    },
    o = (t) => {
        let e = l.intl.string(l.t['7v0T9P']),
            n = l.intl.string(l.t.wR5wOj);
        if (null != t.bundledProducts) {
            var r, i;
            (t.bundledProducts.length > 0 && (e = null == (r = t.bundledProducts[0]) ? void 0 : r.name), t.bundledProducts.length > 1 && (n = null == (i = t.bundledProducts[1]) ? void 0 : i.name));
        }
        return {
            itemOneName: e,
            itemTwoName: n
        };
    };
