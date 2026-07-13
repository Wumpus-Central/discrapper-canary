s.d(e, { Ym: () => c, f5: () => i }), s(321073);
var r = s(64700),
    a = s(575593);
s(375708);
class c {
    itemsByTypes;
    constructor(t) {
        this.itemsByTypes = this.sortByTypes(t);
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
    getFirstItemByType(t) {
        let e = (this.itemsByTypes.get(t) ?? [])[0];
        if (null != e) return e;
    }
    sortByTypes(t) {
        return t.reduce((t, e) => {
            let s = t.get(e.type);
            return null != s ? s.push(e) : t.set(e.type, [e]), t;
        }, new Map());
    }
}
function i(t) {
    return r.useMemo(() => {
        let e = new c(t.items);
        return {
            firstProfileEffect: e.firstProfileEffect,
            firstAvatarDecoration: e.firstAvatarDecoration,
            firstNameplate: e.firstNameplate,
            firstProfileFrame: e.firstProfileFrame,
        };
    }, [t]);
}
