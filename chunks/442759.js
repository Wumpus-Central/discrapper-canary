"use strict";
n.d(t, { Ym: () => l, f5: () => s, yW: () => o }), n(321073);
var r = n(64700),
    i = n(575593),
    a = n(985018);
class l {
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
    get firstProfileFrame() {
        return this.getFirstItemByType(i.R.PROFILE_FRAME);
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
let s = (e) =>
        r.useMemo(() => {
            let t = new l(e.items);
            return {
                firstProfileEffect: t.firstProfileEffect,
                firstAvatarDecoration: t.firstAvatarDecoration,
                firstNameplate: t.firstNameplate,
                firstProfileFrame: t.firstProfileFrame,
            };
        }, [e]),
    o = (e) => {
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
