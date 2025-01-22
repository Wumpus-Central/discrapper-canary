let i = r(761655).Reporter,
    a = r(873994).EncoderBuffer,
    o = r(873994).DecoderBuffer,
    s = r(21841),
    l = ['seq', 'seqof', 'set', 'setof', 'objid', 'bool', 'gentime', 'utctime', 'null_', 'enum', 'int', 'objDesc', 'bitstr', 'bmpstr', 'charstr', 'genstr', 'graphstr', 'ia5str', 'iso646str', 'numstr', 'octstr', 'printstr', 't61str', 'unistr', 'utf8str', 'videostr'],
    u = ['key', 'obj', 'use', 'optional', 'explicit', 'implicit', 'def', 'choice', 'any', 'contains'].concat(l),
    c = ['_peekTag', '_decodeTag', '_use', '_decodeStr', '_decodeObjid', '_decodeTime', '_decodeNull', '_decodeInt', '_decodeBool', '_decodeList', '_encodeComposite', '_encodeStr', '_encodeObjid', '_encodeTime', '_encodeNull', '_encodeInt', '_encodeBool'];
function d(e, n, r) {
    let i = {};
    (this._baseState = i), (i.name = r), (i.enc = e), (i.parent = n || null), (i.children = null), (i.tag = null), (i.args = null), (i.reverseArgs = null), (i.choice = null), (i.optional = !1), (i.any = !1), (i.obj = !1), (i.use = null), (i.useDecoder = null), (i.key = null), (i.default = null), (i.explicit = null), (i.implicit = null), (i.contains = null), !i.parent && ((i.children = []), this._wrap());
}
e.exports = d;
let f = ['enc', 'parent', 'children', 'tag', 'args', 'reverseArgs', 'choice', 'optional', 'any', 'obj', 'use', 'alteredUse', 'key', 'default', 'explicit', 'implicit', 'contains'];
(d.prototype.clone = function () {
    let e = this._baseState,
        n = {};
    f.forEach(function (r) {
        n[r] = e[r];
    });
    let r = new this.constructor(n.parent);
    return (r._baseState = n), r;
}),
    (d.prototype._wrap = function () {
        let e = this._baseState;
        u.forEach(function (n) {
            this[n] = function () {
                let r = new this.constructor(this);
                return e.children.push(r), r[n].apply(r, arguments);
            };
        }, this);
    }),
    (d.prototype._init = function (e) {
        let n = this._baseState;
        s(null === n.parent),
            e.call(this),
            (n.children = n.children.filter(function (e) {
                return e._baseState.parent === this;
            }, this)),
            s.equal(n.children.length, 1, 'Root node can have only one child');
    }),
    (d.prototype._useArgs = function (e) {
        let n = this._baseState,
            r = e.filter(function (e) {
                return e instanceof this.constructor;
            }, this);
        (e = e.filter(function (e) {
            return !(e instanceof this.constructor);
        }, this)),
            0 !== r.length &&
                (s(null === n.children),
                (n.children = r),
                r.forEach(function (e) {
                    e._baseState.parent = this;
                }, this)),
            0 !== e.length &&
                (s(null === n.args),
                (n.args = e),
                (n.reverseArgs = e.map(function (e) {
                    if ('object' != typeof e || e.constructor !== Object) return e;
                    let n = {};
                    return (
                        Object.keys(e).forEach(function (r) {
                            r == (0 | r) && (r |= 0), (n[e[r]] = r);
                        }),
                        n
                    );
                })));
    }),
    c.forEach(function (e) {
        d.prototype[e] = function () {
            throw Error(e + ' not implemented for encoding: ' + this._baseState.enc);
        };
    }),
    l.forEach(function (e) {
        d.prototype[e] = function () {
            let n = this._baseState,
                r = Array.prototype.slice.call(arguments);
            return s(null === n.tag), (n.tag = e), this._useArgs(r), this;
        };
    }),
    (d.prototype.use = function (e) {
        s(e);
        let n = this._baseState;
        return s(null === n.use), (n.use = e), this;
    }),
    (d.prototype.optional = function () {
        return (this._baseState.optional = !0), this;
    }),
    (d.prototype.def = function (e) {
        let n = this._baseState;
        return s(null === n.default), (n.default = e), (n.optional = !0), this;
    }),
    (d.prototype.explicit = function (e) {
        let n = this._baseState;
        return s(null === n.explicit && null === n.implicit), (n.explicit = e), this;
    }),
    (d.prototype.implicit = function (e) {
        let n = this._baseState;
        return s(null === n.explicit && null === n.implicit), (n.implicit = e), this;
    }),
    (d.prototype.obj = function () {
        let e = this._baseState,
            n = Array.prototype.slice.call(arguments);
        return (e.obj = !0), 0 !== n.length && this._useArgs(n), this;
    }),
    (d.prototype.key = function (e) {
        let n = this._baseState;
        return s(null === n.key), (n.key = e), this;
    }),
    (d.prototype.any = function () {
        return (this._baseState.any = !0), this;
    }),
    (d.prototype.choice = function (e) {
        let n = this._baseState;
        return (
            s(null === n.choice),
            (n.choice = e),
            this._useArgs(
                Object.keys(e).map(function (n) {
                    return e[n];
                })
            ),
            this
        );
    }),
    (d.prototype.contains = function (e) {
        let n = this._baseState;
        return s(null === n.use), (n.contains = e), this;
    }),
    (d.prototype._decode = function (e, n) {
        let r;
        let i = this._baseState;
        if (null === i.parent) return e.wrapResult(i.children[0]._decode(e, n));
        let a = i.default,
            s = !0,
            l = null;
        if ((null !== i.key && (l = e.enterKey(i.key)), i.optional)) {
            let r = null;
            if ((null !== i.explicit ? (r = i.explicit) : null !== i.implicit ? (r = i.implicit) : null !== i.tag && (r = i.tag), null !== r || i.any)) {
                if (((s = this._peekTag(e, r, i.any)), e.isError(s))) return s;
            } else {
                let r = e.save();
                try {
                    null === i.choice ? this._decodeGeneric(i.tag, e, n) : this._decodeChoice(e, n), (s = !0);
                } catch (e) {
                    s = !1;
                }
                e.restore(r);
            }
        }
        if ((i.obj && s && (r = e.enterObject()), s)) {
            if (null !== i.explicit) {
                let n = this._decodeTag(e, i.explicit);
                if (e.isError(n)) return n;
                e = n;
            }
            let r = e.offset;
            if (null === i.use && null === i.choice) {
                let n;
                i.any && (n = e.save());
                let r = this._decodeTag(e, null !== i.implicit ? i.implicit : i.tag, i.any);
                if (e.isError(r)) return r;
                i.any ? (a = e.raw(n)) : (e = r);
            }
            if ((n && n.track && null !== i.tag && n.track(e.path(), r, e.length, 'tagged'), n && n.track && null !== i.tag && n.track(e.path(), e.offset, e.length, 'content'), i.any || (a = null === i.choice ? this._decodeGeneric(i.tag, e, n) : this._decodeChoice(e, n)), e.isError(a))) return a;
            if (
                (!i.any &&
                    null === i.choice &&
                    null !== i.children &&
                    i.children.forEach(function (r) {
                        r._decode(e, n);
                    }),
                i.contains && ('octstr' === i.tag || 'bitstr' === i.tag))
            ) {
                let r = new o(a);
                a = this._getUse(i.contains, e._reporterState.obj)._decode(r, n);
            }
        }
        return i.obj && s && (a = e.leaveObject(r)), null !== i.key && (null !== a || !0 === s) ? e.leaveKey(l, i.key, a) : null !== l && e.exitKey(l), a;
    }),
    (d.prototype._decodeGeneric = function (e, n, r) {
        let i = this._baseState;
        if ('seq' === e || 'set' === e) return null;
        if ('seqof' === e || 'setof' === e) return this._decodeList(n, e, i.args[0], r);
        if (/str$/.test(e)) return this._decodeStr(n, e, r);
        if ('objid' === e && i.args) return this._decodeObjid(n, i.args[0], i.args[1], r);
        else if ('objid' === e) return this._decodeObjid(n, null, null, r);
        else if ('gentime' === e || 'utctime' === e) return this._decodeTime(n, e, r);
        else if ('null_' === e) return this._decodeNull(n, r);
        else if ('bool' === e) return this._decodeBool(n, r);
        else if ('objDesc' === e) return this._decodeStr(n, e, r);
        else if ('int' === e || 'enum' === e) return this._decodeInt(n, i.args && i.args[0], r);
        return null !== i.use ? this._getUse(i.use, n._reporterState.obj)._decode(n, r) : n.error('unknown tag: ' + e);
    }),
    (d.prototype._getUse = function (e, n) {
        let r = this._baseState;
        return (r.useDecoder = this._use(e, n)), s(null === r.useDecoder._baseState.parent), (r.useDecoder = r.useDecoder._baseState.children[0]), r.implicit !== r.useDecoder._baseState.implicit && ((r.useDecoder = r.useDecoder.clone()), (r.useDecoder._baseState.implicit = r.implicit)), r.useDecoder;
    }),
    (d.prototype._decodeChoice = function (e, n) {
        let r = this._baseState,
            i = null,
            a = !1;
        return (Object.keys(r.choice).some(function (o) {
            let s = e.save(),
                l = r.choice[o];
            try {
                let r = l._decode(e, n);
                if (e.isError(r)) return !1;
                (i = {
                    type: o,
                    value: r
                }),
                    (a = !0);
            } catch (n) {
                return e.restore(s), !1;
            }
            return !0;
        }, this),
        a)
            ? i
            : e.error('Choice not matched');
    }),
    (d.prototype._createEncoderBuffer = function (e) {
        return new a(e, this.reporter);
    }),
    (d.prototype._encode = function (e, n, r) {
        let i = this._baseState;
        if (null !== i.default && i.default === e) return;
        let a = this._encodeValue(e, n, r);
        if (void 0 !== a) {
            if (!this._skipDefault(a, n, r)) return a;
        }
    }),
    (d.prototype._encodeValue = function (e, n, r) {
        let a = this._baseState;
        if (null === a.parent) return a.children[0]._encode(e, n || new i());
        let o = null;
        if (((this.reporter = n), a.optional && void 0 === e)) {
            if (null === a.default) return;
            e = a.default;
        }
        let s = null,
            l = !1;
        if (a.any) o = this._createEncoderBuffer(e);
        else if (a.choice) o = this._encodeChoice(e, n);
        else if (a.contains) (s = this._getUse(a.contains, r)._encode(e, n)), (l = !0);
        else if (a.children)
            (s = a.children
                .map(function (r) {
                    if ('null_' === r._baseState.tag) return r._encode(null, n, e);
                    if (null === r._baseState.key) return n.error('Child should have a key');
                    let i = n.enterKey(r._baseState.key);
                    if ('object' != typeof e) return n.error('Child expected, but input is not object');
                    let a = r._encode(e[r._baseState.key], n, e);
                    return n.leaveKey(i), a;
                }, this)
                .filter(function (e) {
                    return e;
                })),
                (s = this._createEncoderBuffer(s));
        else if ('seqof' === a.tag || 'setof' === a.tag) {
            if (!(a.args && 1 === a.args.length)) return n.error('Too many args for : ' + a.tag);
            if (!Array.isArray(e)) return n.error('seqof/setof, but data is not Array');
            let r = this.clone();
            (r._baseState.implicit = null),
                (s = this._createEncoderBuffer(
                    e.map(function (r) {
                        let i = this._baseState;
                        return this._getUse(i.args[0], e)._encode(r, n);
                    }, r)
                ));
        } else null !== a.use ? (o = this._getUse(a.use, r)._encode(e, n)) : ((s = this._encodePrimitive(a.tag, e)), (l = !0));
        if (!a.any && null === a.choice) {
            let e = null !== a.implicit ? a.implicit : a.tag,
                r = null === a.implicit ? 'universal' : 'context';
            null === e ? null === a.use && n.error('Tag could be omitted only for .use()') : null === a.use && (o = this._encodeComposite(e, l, r, s));
        }
        return null !== a.explicit && (o = this._encodeComposite(a.explicit, !1, 'context', o)), o;
    }),
    (d.prototype._encodeChoice = function (e, n) {
        let r = this._baseState,
            i = r.choice[e.type];
        return !i && s(!1, e.type + ' not found in ' + JSON.stringify(Object.keys(r.choice))), i._encode(e.value, n);
    }),
    (d.prototype._encodePrimitive = function (e, n) {
        let r = this._baseState;
        if (/str$/.test(e)) return this._encodeStr(n, e);
        if ('objid' === e && r.args) return this._encodeObjid(n, r.reverseArgs[0], r.args[1]);
        if ('objid' === e) return this._encodeObjid(n, null, null);
        else if ('gentime' === e || 'utctime' === e) return this._encodeTime(n, e);
        else if ('null_' === e) return this._encodeNull();
        else if ('int' === e || 'enum' === e) return this._encodeInt(n, r.args && r.reverseArgs[0]);
        else if ('bool' === e) return this._encodeBool(n);
        else if ('objDesc' === e) return this._encodeStr(n, e);
        else throw Error('Unsupported tag: ' + e);
    }),
    (d.prototype._isNumstr = function (e) {
        return /^[0-9 ]*$/.test(e);
    }),
    (d.prototype._isPrintstr = function (e) {
        return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(e);
    });
