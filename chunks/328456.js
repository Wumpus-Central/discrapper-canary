n.d(t, {
    Rj: () => l,
    Ws: () => c,
    bB: () => s,
}),
    n(539854),
    n(388685);
var r = n(473749),
    i = n(979554),
    a = n(388032);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class s {
    get firstAvatarDecoration() {
        return this.getFirstItemByType(i.Z.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(i.Z.PROFILE_EFFECT);
    }
    get firstNameplate() {
        return this.getFirstItemByType(i.Z.NAMEPLATE);
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
        o(this, "itemsByTypes", void 0), (this.itemsByTypes = this.sortByTypes(e));
    }
}
let l = (e) => {
        let {
            firstProfileEffect: t,
            firstAvatarDecoration: n,
            firstNameplate: i,
        } = r.useMemo(() => new s(e.items), [e]);
        return {
            firstProfileEffect: t,
            firstAvatarDecoration: n,
            firstNameplate: i,
        };
    },
    c = (e) => {
        let t = a.intl.string(a.t["7v0T9P"]),
            n = a.intl.string(a.t.wR5wOo),
            r = a.intl.string(a.t.x5CoXR);
        if (null != e.bundledProducts) {
            var i, o, s;
            e.bundledProducts.length > 0 && (t = null == (i = e.bundledProducts[0]) ? void 0 : i.name),
                e.bundledProducts.length > 1 && (n = null == (o = e.bundledProducts[1]) ? void 0 : o.name),
                e.bundledProducts.length > 2 && (r = null == (s = e.bundledProducts[2]) ? void 0 : s.name);
        }
        return {
            itemOneName: t,
            itemTwoName: n,
            itemThreeName: r,
        };
    };
