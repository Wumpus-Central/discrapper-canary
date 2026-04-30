n.d(t, { Ym: () => s, f5: () => l, yW: () => o }), n(321073);
var i = n(64700),
    a = n(575593),
    r = n(985018);
class s {
    itemsByTypes;
    constructor(e) {
        this.itemsByTypes = this.sortByTypes(e);
    }
    get firstAvatarDecoration() {
        return this.getFirstItemByType(a.R.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(a.R.PROFILE_EFFECT);
    }
    get firstNameplate() {
        return this.getFirstItemByType(a.R.NAMEPLATE);
    }
    get firstProfileFrame() {
        return this.getFirstItemByType(a.R.PROFILE_FRAME);
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
let l = (e) =>
        i.useMemo(() => {
            let t = new s(e.items);
            return {
                firstProfileEffect: t.firstProfileEffect,
                firstAvatarDecoration: t.firstAvatarDecoration,
                firstNameplate: t.firstNameplate,
                firstProfileFrame: t.firstProfileFrame,
            };
        }, [e]),
    o = (e) => {
        let t = r.intl.string(r.t["7v0T9P"]),
            n = r.intl.string(r.t.wR5wOo),
            i = r.intl.string(r.t.x5CoXR);
        return (
            null != e.bundledProducts &&
                (e.bundledProducts.length > 0 && (t = e.bundledProducts[0]?.name),
                e.bundledProducts.length > 1 && (n = e.bundledProducts[1]?.name),
                e.bundledProducts.length > 2 && (i = e.bundledProducts[2]?.name)),
            { itemOneName: t, itemTwoName: n, itemThreeName: i }
        );
    };
