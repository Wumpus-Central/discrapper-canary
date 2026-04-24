a.d(t, { Ym: () => i, f5: () => s, yW: () => o }), a(321073);
var n = a(64700),
    r = a(575593),
    l = a(985018);
class i {
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
            let a = e.get(t.type);
            return null != a ? a.push(t) : e.set(t.type, [t]), e;
        }, new Map());
    }
}
let s = (e) =>
        n.useMemo(() => {
            let t = new i(e.items);
            return {
                firstProfileEffect: t.firstProfileEffect,
                firstAvatarDecoration: t.firstAvatarDecoration,
                firstNameplate: t.firstNameplate,
                firstProfileFrame: t.firstProfileFrame,
            };
        }, [e]),
    o = (e) => {
        let t = l.intl.string(l.t["7v0T9P"]),
            a = l.intl.string(l.t.wR5wOo),
            n = l.intl.string(l.t.x5CoXR);
        return (
            null != e.bundledProducts &&
                (e.bundledProducts.length > 0 && (t = e.bundledProducts[0]?.name),
                e.bundledProducts.length > 1 && (a = e.bundledProducts[1]?.name),
                e.bundledProducts.length > 2 && (n = e.bundledProducts[2]?.name)),
            { itemOneName: t, itemTwoName: a, itemThreeName: n }
        );
    };
