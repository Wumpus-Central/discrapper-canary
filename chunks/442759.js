r.d(e, { Ym: () => l, f5: () => u, yW: () => a }), r(321073);
var s = r(64700),
    i = r(575593),
    n = r(375708);
class l {
    itemsByTypes;
    constructor(t) {
        this.itemsByTypes = this.sortByTypes(t);
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
    getFirstItemByType(t) {
        let e = (this.itemsByTypes.get(t) ?? [])[0];
        if (null != e) return e;
    }
    sortByTypes(t) {
        return t.reduce((t, e) => {
            let r = t.get(e.type);
            return null != r ? r.push(e) : t.set(e.type, [e]), t;
        }, new Map());
    }
}
let u = (t) =>
        s.useMemo(() => {
            let e = new l(t.items);
            return {
                firstProfileEffect: e.firstProfileEffect,
                firstAvatarDecoration: e.firstAvatarDecoration,
                firstNameplate: e.firstNameplate,
                firstProfileFrame: e.firstProfileFrame,
            };
        }, [t]),
    a = (t) => {
        let e = n.intl.string(n.t["7v0T9P"]),
            r = n.intl.string(n.t.wR5wOo),
            s = n.intl.string(n.t.x5CoXR);
        return (
            null != t.bundledProducts &&
                (t.bundledProducts.length > 0 && (e = t.bundledProducts[0]?.name),
                t.bundledProducts.length > 1 && (r = t.bundledProducts[1]?.name),
                t.bundledProducts.length > 2 && (s = t.bundledProducts[2]?.name)),
            { itemOneName: e, itemTwoName: r, itemThreeName: s }
        );
    };
