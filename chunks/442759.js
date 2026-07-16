r.d(e, { Ym: () => f, f5: () => a }), r(321073);
var s = r(64700),
    i = r(575593);
r(375708);
class f {
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
function a(t) {
    return s.useMemo(() => {
        let e = new f(t.items);
        return {
            firstProfileEffect: e.firstProfileEffect,
            firstAvatarDecoration: e.firstAvatarDecoration,
            firstNameplate: e.firstNameplate,
            firstProfileFrame: e.firstProfileFrame,
        };
    }, [t]);
}
