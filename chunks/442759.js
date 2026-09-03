r.d(t, { f5: () => n }), r(321073);
var s = r(582128),
    a = r(575593);
r(375708);
class i {
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
            let r = e.get(t.type);
            return null != r ? r.push(t) : e.set(t.type, [t]), e;
        }, new Map());
    }
}
function n(e) {
    return s.useMemo(() => {
        let t;
        return {
            firstProfileEffect: (t = new i(e.items)).firstProfileEffect,
            firstAvatarDecoration: t.firstAvatarDecoration,
            firstNameplate: t.firstNameplate,
            firstProfileFrame: t.firstProfileFrame,
        };
    }, [e]);
}
