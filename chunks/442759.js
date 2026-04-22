n.d(t, { Ym: () => a, f5: () => s, yW: () => o }), n(321073);
var r = n(64700),
    l = n(575593),
    i = n(985018);
class a {
    itemsByTypes;
    constructor(e) {
        this.itemsByTypes = this.sortByTypes(e);
    }
    get firstAvatarDecoration() {
        return this.getFirstItemByType(l.R.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(l.R.PROFILE_EFFECT);
    }
    get firstNameplate() {
        return this.getFirstItemByType(l.R.NAMEPLATE);
    }
    get firstProfileFrame() {
        return this.getFirstItemByType(l.R.PROFILE_FRAME);
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
            let t = new a(e.items);
            return {
                firstProfileEffect: t.firstProfileEffect,
                firstAvatarDecoration: t.firstAvatarDecoration,
                firstNameplate: t.firstNameplate,
                firstProfileFrame: t.firstProfileFrame,
            };
        }, [e]),
    o = (e) => {
        let t = i.intl.string(i.t["7v0T9P"]),
            n = i.intl.string(i.t.wR5wOo),
            r = i.intl.string(i.t.x5CoXR);
        return (
            null != e.bundledProducts &&
                (e.bundledProducts.length > 0 && (t = e.bundledProducts[0]?.name),
                e.bundledProducts.length > 1 && (n = e.bundledProducts[1]?.name),
                e.bundledProducts.length > 2 && (r = e.bundledProducts[2]?.name)),
            { itemOneName: t, itemTwoName: n, itemThreeName: r }
        );
    };
