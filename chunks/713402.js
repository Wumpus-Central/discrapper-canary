"use strict";
n.d(t, { J: () => o });
var i = n(391470),
    r = n.n(i);
function s(e, t, n, i) {
    if (null != t) {
        let n = r()(e, t, i);
        for (; e[n] !== t && n < e.length - 1; ) n += 1;
        e.splice(n, 1);
    }
    null != n && e.splice(r()(e, n, i), 0, n);
}
let a = [];
class o {
    indexBy;
    sortBy;
    isEqual;
    valueMap = new Map();
    valueArray = [];
    valueIndexes = {};
    valueIndexesForGetter = {};
    dirty = !1;
    _version = 0;
    constructor(e, t, n = (e, t) => e === t) {
        (this.indexBy = e), (this.sortBy = t), (this.isEqual = n);
    }
    get version() {
        return this._version;
    }
    indexes() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e) return this.valueIndexes;
        if (!e && this.dirty) {
            let e = {};
            for (let [t, n] of Object.entries(this.valueIndexes)) e[t] = [...n];
            (this.valueIndexesForGetter = e), (this.dirty = !1);
        }
        return this.valueIndexesForGetter;
    }
    keys() {
        return this.valueMap.keys();
    }
    values(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null == e ? this.valueArray : (this.indexes(t)[e] ?? a);
    }
    size(e) {
        return null == e ? this.valueArray.length : (this.valueIndexes[e]?.length ?? 0);
    }
    clear() {
        this.valueMap.clear(), (this.valueArray = []), (this.valueIndexes = {}), (this.valueIndexesForGetter = {});
    }
    has(e) {
        return this.valueMap.has(e);
    }
    get(e) {
        return this.valueMap.get(e);
    }
    set(e, t) {
        let n = this.get(e);
        return (
            !((null == n && null == t) || (null != n && null != t && this.isEqual(n, t))) &&
            (null != t ? this.valueMap.set(e, t) : this.valueMap.delete(e),
            s(this.valueArray, n, t, this.sortBy),
            null != n && this.indexBy(n).forEach((e) => s(this.getIndex(e), n, null, this.sortBy)),
            null != t && this.indexBy(t).forEach((e) => s(this.getIndex(e), null, t, this.sortBy)),
            (this.dirty = !0),
            this._version++,
            !0)
        );
    }
    delete(e) {
        return this.set(e, null);
    }
    getIndex(e) {
        let t = this.valueIndexes[e];
        return null == t && ((t = []), (this.valueIndexes[e] = t)), t;
    }
}
