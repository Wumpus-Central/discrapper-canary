r.d(t, {
    Rj: () => o,
    Ws: () => s,
    bB: () => a,
}),
    r(539854),
    r(388685);
var n = r(647438),
    l = r(979554),
    i = r(388032);
class a {
    get firstAvatarDecoration() {
        return this.getFirstItemByType(l.Z.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(l.Z.PROFILE_EFFECT);
    }
    get firstNameplate() {
        return this.getFirstItemByType(l.Z.NAMEPLATE);
    }
    getFirstItemByType(e) {
        var t;
        let r = (null != (t = this.itemsByTypes.get(e)) ? t : [])[0];
        if (null != r) return r;
    }
    sortByTypes(e) {
        return e.reduce((e, t) => {
            let r = e.get(t.type);
            return null != r ? r.push(t) : e.set(t.type, [t]), e;
        }, new Map());
    }
    constructor(e) {
        !(function (e, t, r) {
            t in e
                ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[t] = r);
        })(this, "itemsByTypes", void 0),
            (this.itemsByTypes = this.sortByTypes(e));
    }
}
let o = (e) => {
        let {
            firstProfileEffect: t,
            firstAvatarDecoration: r,
            firstNameplate: l,
        } = n.useMemo(() => new a(e.items), [e]);
        return {
            firstProfileEffect: t,
            firstAvatarDecoration: r,
            firstNameplate: l,
        };
    },
    s = (e) => {
        let t = i.intl.string(i.t["7v0T9P"]),
            r = i.intl.string(i.t.wR5wOj),
            n = i.intl.string(i.t.x5CoXV);
        if (null != e.bundledProducts) {
            var l, a, o;
            e.bundledProducts.length > 0 && (t = null == (l = e.bundledProducts[0]) ? void 0 : l.name),
                e.bundledProducts.length > 1 && (r = null == (a = e.bundledProducts[1]) ? void 0 : a.name),
                e.bundledProducts.length > 2 && (n = null == (o = e.bundledProducts[2]) ? void 0 : o.name);
        }
        return {
            itemOneName: t,
            itemTwoName: r,
            itemThreeName: n,
        };
    };
