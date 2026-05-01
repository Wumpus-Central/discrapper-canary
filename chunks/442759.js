"use strict";
n.d(t, { Ym: () => a, f5: () => o, yW: () => l }), n(321073);
var i = n(64700),
    r = n(575593),
    s = n(375708);
class a {
    itemsByTypes;
    constructor(e) {
        this.itemsByTypes = this.sortByTypes(e);
    }
    get firstAvatarDecoration() {
        return this.getFirstItemByType(r.R.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(r.R.PROFILE_EFFECT);
    }
    get firstNameplate() {
        return this.getFirstItemByType(r.R.NAMEPLATE);
    }
    get firstProfileFrame() {
        return this.getFirstItemByType(r.R.PROFILE_FRAME);
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
        i.useMemo(() => {
            let t = new a(e.items);
            return {
                firstProfileEffect: t.firstProfileEffect,
                firstAvatarDecoration: t.firstAvatarDecoration,
                firstNameplate: t.firstNameplate,
                firstProfileFrame: t.firstProfileFrame,
            };
        }, [e]),
    l = (e) => {
        let t = s.intl.string(s.t["7v0T9P"]),
            n = s.intl.string(s.t.wR5wOo),
            i = s.intl.string(s.t.x5CoXR);
        return (
            null != e.bundledProducts &&
                (e.bundledProducts.length > 0 && (t = e.bundledProducts[0]?.name),
                e.bundledProducts.length > 1 && (n = e.bundledProducts[1]?.name),
                e.bundledProducts.length > 2 && (i = e.bundledProducts[2]?.name)),
            { itemOneName: t, itemTwoName: n, itemThreeName: i }
        );
    };
