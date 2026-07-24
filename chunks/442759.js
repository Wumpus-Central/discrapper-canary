"use strict";
n.d(t, { Ym: () => a, f5: () => s }), n(321073);
var i = n(64700),
    r = n(575593);
n(375708);
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
function s(e) {
    return i.useMemo(() => {
        let t = new a(e.items);
        return {
            firstProfileEffect: t.firstProfileEffect,
            firstAvatarDecoration: t.firstAvatarDecoration,
            firstNameplate: t.firstNameplate,
            firstProfileFrame: t.firstProfileFrame,
        };
    }, [e]);
}
