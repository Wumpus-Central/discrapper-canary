(i.d(t, {
    Rj: () => a,
    Ws: () => o
}),
    i(539854),
    i(388685));
var r = i(73800),
    l = i(979554),
    s = i(388032);
class n {
    get firstAvatarDecoration() {
        return this.getFirstItemByType(l.Z.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(l.Z.PROFILE_EFFECT);
    }
    getFirstItemByType(e) {
        var t;
        let i = (null != (t = this.itemsByTypes.get(e)) ? t : [])[0];
        if (null != i) return i;
    }
    sortByTypes(e) {
        return e.reduce((e, t) => {
            let i = e.get(t.type);
            return (null != i ? i.push(t) : e.set(t.type, [t]), e);
        }, new Map());
    }
    constructor(e) {
        var t, i;
        ((i = void 0),
            (t = 'itemsByTypes') in this
                ? Object.defineProperty(this, t, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = i),
            (this.itemsByTypes = this.sortByTypes(e)));
    }
}
let a = (e) => {
        let { firstProfileEffect: t, firstAvatarDecoration: i } = r.useMemo(() => new n(e.items), [e]);
        return {
            firstProfileEffect: t,
            firstAvatarDecoration: i
        };
    },
    o = (e) => {
        let t = s.intl.string(s.t['7v0T9P']),
            i = s.intl.string(s.t.wR5wOj);
        if (null != e.bundledProducts) {
            var r, l;
            (e.bundledProducts.length > 0 && (t = null == (r = e.bundledProducts[0]) ? void 0 : r.name), e.bundledProducts.length > 1 && (i = null == (l = e.bundledProducts[1]) ? void 0 : l.name));
        }
        return {
            itemOneName: t,
            itemTwoName: i
        };
    };
