n.d(t, { h: () => l }), n(47120);
var i = n(740436),
    r = n.n(i);
function a(e, t, n) {
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
function s(e, t, n, i) {
    null != t && e.splice(r()(e, t, i), 1), null != n && e.splice(r()(e, n, i), 0, n);
}
let o = [];
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
        return null == e ? this.valueArray : null !== (t = this.indexes(n)[e]) && void 0 !== t ? t : o;
    }
    size(e) {
        var t, n;
        return null == e ? this.valueArray.length : null !== (n = null === (t = this.valueIndexes[e]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0;
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
        return !((null == n && null == t) || (null != n && null != t && this.isEqual(n, t))) && (null != t ? this.valueMap.set(e, t) : this.valueMap.delete(e), s(this.valueArray, n, t, this.sortBy), null != n && this.indexBy(n).forEach((e) => s(this.getIndex(e), n, null, this.sortBy)), null != t && this.indexBy(t).forEach((e) => s(this.getIndex(e), null, t, this.sortBy)), (this.dirty = !0), this._version++, !0);
    }
    delete(e) {
        return this.set(e, null);
    }
    getIndex(e) {
        let t = this.valueIndexes[e];
        return null == t && ((t = []), (this.valueIndexes[e] = t)), t;
    }
    constructor(e, t, n = (e, t) => e === t) {
        a(this, 'indexBy', void 0), a(this, 'sortBy', void 0), a(this, 'isEqual', void 0), a(this, 'valueMap', new Map()), a(this, 'valueArray', []), a(this, 'valueIndexes', {}), a(this, 'valueIndexesForGetter', {}), a(this, 'dirty', !1), a(this, '_version', 0), (this.indexBy = e), (this.sortBy = t), (this.isEqual = n);
    }
}
