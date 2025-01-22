r.d(n, {
    h: function () {
        return c;
    }
});
var i = r(47120);
var a = r(740436),
    o = r.n(a);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function l(e, n, r, i) {
    null != n && e.splice(o()(e, n, i), 1), null != r && e.splice(o()(e, r, i), 0, r);
}
let u = [];
class c {
    get version() {
        return this._version;
    }
    indexes() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e) return this.valueIndexes;
        if (!e && this.dirty) {
            let e = {};
            for (let [n, r] of Object.entries(this.valueIndexes)) e[n] = [...r];
            (this.valueIndexesForGetter = e), (this.dirty = !1);
        }
        return this.valueIndexesForGetter;
    }
    keys() {
        return this.valueMap.keys();
    }
    values(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null == e ? this.valueArray : null !== (n = this.indexes(r)[e]) && void 0 !== n ? n : u;
    }
    size(e) {
        var n, r;
        return null == e ? this.valueArray.length : null !== (r = null === (n = this.valueIndexes[e]) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0;
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
    set(e, n) {
        let r = this.get(e);
        return !((null == r && null == n) || (null != r && null != n && this.isEqual(r, n))) && (null != n ? this.valueMap.set(e, n) : this.valueMap.delete(e), l(this.valueArray, r, n, this.sortBy), null != r && this.indexBy(r).forEach((e) => l(this.getIndex(e), r, null, this.sortBy)), null != n && this.indexBy(n).forEach((e) => l(this.getIndex(e), null, n, this.sortBy)), (this.dirty = !0), this._version++, !0);
    }
    delete(e) {
        return this.set(e, null);
    }
    getIndex(e) {
        let n = this.valueIndexes[e];
        return null == n && ((n = []), (this.valueIndexes[e] = n)), n;
    }
    constructor(e, n, r = (e, n) => e === n) {
        s(this, 'indexBy', void 0), s(this, 'sortBy', void 0), s(this, 'isEqual', void 0), s(this, 'valueMap', new Map()), s(this, 'valueArray', []), s(this, 'valueIndexes', {}), s(this, 'valueIndexesForGetter', {}), s(this, 'dirty', !1), s(this, '_version', 0), (this.indexBy = e), (this.sortBy = n), (this.isEqual = r);
    }
}
