n.d(t, {
    Rj: () => l,
    Ws: () => c
}),
    n(539854),
    n(388685);
var r = n(192379),
    i = n(979554),
    o = n(388032);
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
let l = (e) => {
        let { firstProfileEffect: t, firstAvatarDecoration: n } = r.useMemo(() => new s(e.items), [e]);
        return {
            firstProfileEffect: t,
            firstAvatarDecoration: n
        };
    },
    c = (e) => {
        let t = o.intl.string(o.t['7v0T9P']),
            n = o.intl.string(o.t.wR5wOj);
        if (null != e.bundledProducts) {
            var r, i;
            e.bundledProducts.length > 0 && (t = null == (r = e.bundledProducts[0]) ? void 0 : r.name), e.bundledProducts.length > 1 && (n = null == (i = e.bundledProducts[0]) ? void 0 : i.name);
        }
        return {
            itemOneName: t,
            itemTwoName: n
        };
    };
