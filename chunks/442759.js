"use strict";
n.d(t, { Ym: () => s, f5: () => o, yW: () => l }), n(321073);
var r = n(64700),
    i = n(575593),
    a = n(985018);
class s {
    itemsByTypes;
    constructor(e) {
        this.itemsByTypes = this.sortByTypes(e);
    }
    get firstAvatarDecoration() {
        return this.getFirstItemByType(i.R.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(i.R.PROFILE_EFFECT);
    }
    get firstNameplate() {
        return this.getFirstItemByType(i.R.NAMEPLATE);
    }
    getFirstItemByType(e) {
        let t = (this.itemsByTypes.get(e) ?? [])[0];
        if (null != t) return t;
    }
    sortByTypes(e) {
        return e.reduce((e, t) => {
            let n = e.get(t.type);
            return null != n ? n.push(t) : e.set(t.type, [t]), e;
        }, new Map());
    }
}
let o = (e) =>
        r.useMemo(() => {
            let t = new s(e.items);
            return {
                firstProfileEffect: t.firstProfileEffect,
                firstAvatarDecoration: t.firstAvatarDecoration,
                firstNameplate: t.firstNameplate,
            };
        }, [e]),
    l = (e) => {
        let t = a.intl.string(a.t["7v0T9P"]),
            n = a.intl.string(a.t.wR5wOo),
            r = a.intl.string(a.t.x5CoXR);
        return (
            null != e.bundledProducts &&
                (e.bundledProducts.length > 0 && (t = e.bundledProducts[0]?.name),
                e.bundledProducts.length > 1 && (n = e.bundledProducts[1]?.name),
                e.bundledProducts.length > 2 && (r = e.bundledProducts[2]?.name)),
            { itemOneName: t, itemTwoName: n, itemThreeName: r }
        );
    };
