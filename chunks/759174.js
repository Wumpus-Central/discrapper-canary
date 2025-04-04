n.d(t, { h: () => l }), n(47120);
var r = n(740436),
    i = n.n(r);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function a(e, t, n, r) {
    null != t && e.splice(i()(e, t, r), 1), null != n && e.splice(i()(e, n, r), 0, n);
}
let s = [];
class l {
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
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null == e ? this.valueArray : null != (t = this.indexes(n)[e]) ? t : s;
    }
    size(e) {
        var t, n;
        return null == e ? this.valueArray.length : null != (n = null == (t = this.valueIndexes[e]) ? void 0 : t.length) ? n : 0;
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
        return !((null == n && null == t) || (null != n && null != t && this.isEqual(n, t))) && (null != t ? this.valueMap.set(e, t) : this.valueMap.delete(e), a(this.valueArray, n, t, this.sortBy), null != n && this.indexBy(n).forEach((e) => a(this.getIndex(e), n, null, this.sortBy)), null != t && this.indexBy(t).forEach((e) => a(this.getIndex(e), null, t, this.sortBy)), (this.dirty = !0), this._version++, !0);
    }
    delete(e) {
        return this.set(e, null);
    }
    getIndex(e) {
        let t = this.valueIndexes[e];
        return null == t && ((t = []), (this.valueIndexes[e] = t)), t;
    }
    constructor(e, t, n = (e, t) => e === t) {
        o(this, 'indexBy', void 0), o(this, 'sortBy', void 0), o(this, 'isEqual', void 0), o(this, 'valueMap', new Map()), o(this, 'valueArray', []), o(this, 'valueIndexes', {}), o(this, 'valueIndexesForGetter', {}), o(this, 'dirty', !1), o(this, '_version', 0), (this.indexBy = e), (this.sortBy = t), (this.isEqual = n);
    }
}
