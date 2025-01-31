let i = n(761655).Reporter,
    r = n(873994).EncoderBuffer,
    a = n(873994).DecoderBuffer,
    s = n(21841),
    o = ['seq', 'seqof', 'set', 'setof', 'objid', 'bool', 'gentime', 'utctime', 'null_', 'enum', 'int', 'objDesc', 'bitstr', 'bmpstr', 'charstr', 'genstr', 'graphstr', 'ia5str', 'iso646str', 'numstr', 'octstr', 'printstr', 't61str', 'unistr', 'utf8str', 'videostr'],
    l = ['key', 'obj', 'use', 'optional', 'explicit', 'implicit', 'def', 'choice', 'any', 'contains'].concat(o),
    u = ['_peekTag', '_decodeTag', '_use', '_decodeStr', '_decodeObjid', '_decodeTime', '_decodeNull', '_decodeInt', '_decodeBool', '_decodeList', '_encodeComposite', '_encodeStr', '_encodeObjid', '_encodeTime', '_encodeNull', '_encodeInt', '_encodeBool'];
function c(e, t, n) {
    let i = {};
    (this._baseState = i), (i.name = n), (i.enc = e), (i.parent = t || null), (i.children = null), (i.tag = null), (i.args = null), (i.reverseArgs = null), (i.choice = null), (i.optional = !1), (i.any = !1), (i.obj = !1), (i.use = null), (i.useDecoder = null), (i.key = null), (i.default = null), (i.explicit = null), (i.implicit = null), (i.contains = null), i.parent || ((i.children = []), this._wrap());
}
e.exports = c;
let d = ['enc', 'parent', 'children', 'tag', 'args', 'reverseArgs', 'choice', 'optional', 'any', 'obj', 'use', 'alteredUse', 'key', 'default', 'explicit', 'implicit', 'contains'];
(c.prototype.clone = function () {
    let e = this._baseState,
        t = {};
    d.forEach(function (n) {
        t[n] = e[n];
    });
    let n = new this.constructor(t.parent);
    return (n._baseState = t), n;
}),
    (c.prototype._wrap = function () {
        let e = this._baseState;
        l.forEach(function (t) {
            this[t] = function () {
                let n = new this.constructor(this);
                return e.children.push(n), n[t].apply(n, arguments);
            };
        }, this);
    }),
    (c.prototype._init = function (e) {
        let t = this._baseState;
        s(null === t.parent),
            e.call(this),
            (t.children = t.children.filter(function (e) {
                return e._baseState.parent === this;
            }, this)),
            s.equal(t.children.length, 1, 'Root node can have only one child');
    }),
    (c.prototype._useArgs = function (e) {
        let t = this._baseState,
            n = e.filter(function (e) {
                return e instanceof this.constructor;
            }, this);
        (e = e.filter(function (e) {
            return !(e instanceof this.constructor);
        }, this)),
            0 !== n.length &&
                (s(null === t.children),
                (t.children = n),
                n.forEach(function (e) {
                    e._baseState.parent = this;
                }, this)),
            0 !== e.length &&
                (s(null === t.args),
                (t.args = e),
                (t.reverseArgs = e.map(function (e) {
                    if ('object' != typeof e || e.constructor !== Object) return e;
                    let t = {};
                    return (
                        Object.keys(e).forEach(function (n) {
                            n == (0 | n) && (n |= 0), (t[e[n]] = n);
                        }),
                        t
                    );
                })));
    }),
    u.forEach(function (e) {
        c.prototype[e] = function () {
            throw Error(e + ' not implemented for encoding: ' + this._baseState.enc);
        };
    }),
    o.forEach(function (e) {
        c.prototype[e] = function () {
            let t = this._baseState,
                n = Array.prototype.slice.call(arguments);
            return s(null === t.tag), (t.tag = e), this._useArgs(n), this;
        };
    }),
    (c.prototype.use = function (e) {
        s(e);
        let t = this._baseState;
        return s(null === t.use), (t.use = e), this;
    }),
    (c.prototype.optional = function () {
        return (this._baseState.optional = !0), this;
    }),
    (c.prototype.def = function (e) {
        let t = this._baseState;
        return s(null === t.default), (t.default = e), (t.optional = !0), this;
    }),
    (c.prototype.explicit = function (e) {
        let t = this._baseState;
        return s(null === t.explicit && null === t.implicit), (t.explicit = e), this;
    }),
    (c.prototype.implicit = function (e) {
        let t = this._baseState;
        return s(null === t.explicit && null === t.implicit), (t.implicit = e), this;
    }),
    (c.prototype.obj = function () {
        let e = this._baseState,
            t = Array.prototype.slice.call(arguments);
        return (e.obj = !0), 0 !== t.length && this._useArgs(t), this;
    }),
    (c.prototype.key = function (e) {
        let t = this._baseState;
        return s(null === t.key), (t.key = e), this;
    }),
    (c.prototype.any = function () {
        return (this._baseState.any = !0), this;
    }),
    (c.prototype.choice = function (e) {
        let t = this._baseState;
        return (
            s(null === t.choice),
            (t.choice = e),
            this._useArgs(
                Object.keys(e).map(function (t) {
                    return e[t];
                })
            ),
            this
        );
    }),
    (c.prototype.contains = function (e) {
        let t = this._baseState;
        return s(null === t.use), (t.contains = e), this;
    }),
    (c.prototype._decode = function (e, t) {
        let n;
        let i = this._baseState;
        if (null === i.parent) return e.wrapResult(i.children[0]._decode(e, t));
        let r = i.default,
            s = !0,
            o = null;
        if ((null !== i.key && (o = e.enterKey(i.key)), i.optional)) {
            let n = null;
            if ((null !== i.explicit ? (n = i.explicit) : null !== i.implicit ? (n = i.implicit) : null !== i.tag && (n = i.tag), null !== n || i.any)) {
                if (((s = this._peekTag(e, n, i.any)), e.isError(s))) return s;
            } else {
                let n = e.save();
                try {
                    null === i.choice ? this._decodeGeneric(i.tag, e, t) : this._decodeChoice(e, t), (s = !0);
                } catch (e) {
                    s = !1;
                }
                e.restore(n);
            }
        }
        if ((i.obj && s && (n = e.enterObject()), s)) {
            if (null !== i.explicit) {
                let t = this._decodeTag(e, i.explicit);
                if (e.isError(t)) return t;
                e = t;
            }
            let n = e.offset;
            if (null === i.use && null === i.choice) {
                let t;
                i.any && (t = e.save());
                let n = this._decodeTag(e, null !== i.implicit ? i.implicit : i.tag, i.any);
                if (e.isError(n)) return n;
                i.any ? (r = e.raw(t)) : (e = n);
            }
            if ((t && t.track && null !== i.tag && t.track(e.path(), n, e.length, 'tagged'), t && t.track && null !== i.tag && t.track(e.path(), e.offset, e.length, 'content'), i.any || (r = null === i.choice ? this._decodeGeneric(i.tag, e, t) : this._decodeChoice(e, t)), e.isError(r))) return r;
            if (
                (i.any ||
                    null !== i.choice ||
                    null === i.children ||
                    i.children.forEach(function (n) {
                        n._decode(e, t);
                    }),
                i.contains && ('octstr' === i.tag || 'bitstr' === i.tag))
            ) {
                let n = new a(r);
                r = this._getUse(i.contains, e._reporterState.obj)._decode(n, t);
            }
        }
        return i.obj && s && (r = e.leaveObject(n)), null !== i.key && (null !== r || !0 === s) ? e.leaveKey(o, i.key, r) : null !== o && e.exitKey(o), r;
    }),
    (c.prototype._decodeGeneric = function (e, t, n) {
        let i = this._baseState;
        if ('seq' === e || 'set' === e) return null;
        if ('seqof' === e || 'setof' === e) return this._decodeList(t, e, i.args[0], n);
        if (/str$/.test(e)) return this._decodeStr(t, e, n);
        if ('objid' === e && i.args) return this._decodeObjid(t, i.args[0], i.args[1], n);
        if ('objid' === e) return this._decodeObjid(t, null, null, n);
        if ('gentime' === e || 'utctime' === e) return this._decodeTime(t, e, n);
        else if ('null_' === e) return this._decodeNull(t, n);
        else if ('bool' === e) return this._decodeBool(t, n);
        else if ('objDesc' === e) return this._decodeStr(t, e, n);
        else if ('int' === e || 'enum' === e) return this._decodeInt(t, i.args && i.args[0], n);
        return null !== i.use ? this._getUse(i.use, t._reporterState.obj)._decode(t, n) : t.error('unknown tag: ' + e);
    }),
    (c.prototype._getUse = function (e, t) {
        let n = this._baseState;
        return (n.useDecoder = this._use(e, t)), s(null === n.useDecoder._baseState.parent), (n.useDecoder = n.useDecoder._baseState.children[0]), n.implicit !== n.useDecoder._baseState.implicit && ((n.useDecoder = n.useDecoder.clone()), (n.useDecoder._baseState.implicit = n.implicit)), n.useDecoder;
    }),
    (c.prototype._decodeChoice = function (e, t) {
        let n = this._baseState,
            i = null,
            r = !1;
        return (Object.keys(n.choice).some(function (a) {
            let s = e.save(),
                o = n.choice[a];
            try {
                let n = o._decode(e, t);
                if (e.isError(n)) return !1;
                (i = {
                    type: a,
                    value: n
                }),
                    (r = !0);
            } catch (t) {
                return e.restore(s), !1;
            }
            return !0;
        }, this),
        r)
            ? i
            : e.error('Choice not matched');
    }),
    (c.prototype._createEncoderBuffer = function (e) {
        return new r(e, this.reporter);
    }),
    (c.prototype._encode = function (e, t, n) {
        let i = this._baseState;
        if (null !== i.default && i.default === e) return;
        let r = this._encodeValue(e, t, n);
        if (void 0 !== r && !this._skipDefault(r, t, n)) return r;
    }),
    (c.prototype._encodeValue = function (e, t, n) {
        let r = this._baseState;
        if (null === r.parent) return r.children[0]._encode(e, t || new i());
        let a = null;
        if (((this.reporter = t), r.optional && void 0 === e)) {
            if (null === r.default) return;
            e = r.default;
        }
        let s = null,
            o = !1;
        if (r.any) a = this._createEncoderBuffer(e);
        else if (r.choice) a = this._encodeChoice(e, t);
        else if (r.contains) (s = this._getUse(r.contains, n)._encode(e, t)), (o = !0);
        else if (r.children)
            (s = r.children
                .map(function (n) {
                    if ('null_' === n._baseState.tag) return n._encode(null, t, e);
                    if (null === n._baseState.key) return t.error('Child should have a key');
                    let i = t.enterKey(n._baseState.key);
                    if ('object' != typeof e) return t.error('Child expected, but input is not object');
                    let r = n._encode(e[n._baseState.key], t, e);
                    return t.leaveKey(i), r;
                }, this)
                .filter(function (e) {
                    return e;
                })),
                (s = this._createEncoderBuffer(s));
        else if ('seqof' === r.tag || 'setof' === r.tag) {
            if (!(r.args && 1 === r.args.length)) return t.error('Too many args for : ' + r.tag);
            if (!Array.isArray(e)) return t.error('seqof/setof, but data is not Array');
            let n = this.clone();
            (n._baseState.implicit = null),
                (s = this._createEncoderBuffer(
                    e.map(function (n) {
                        let i = this._baseState;
                        return this._getUse(i.args[0], e)._encode(n, t);
                    }, n)
                ));
        } else null !== r.use ? (a = this._getUse(r.use, n)._encode(e, t)) : ((s = this._encodePrimitive(r.tag, e)), (o = !0));
        if (!r.any && null === r.choice) {
            let e = null !== r.implicit ? r.implicit : r.tag,
                n = null === r.implicit ? 'universal' : 'context';
            null === e ? null === r.use && t.error('Tag could be omitted only for .use()') : null === r.use && (a = this._encodeComposite(e, o, n, s));
        }
        return null !== r.explicit && (a = this._encodeComposite(r.explicit, !1, 'context', a)), a;
    }),
    (c.prototype._encodeChoice = function (e, t) {
        let n = this._baseState,
            i = n.choice[e.type];
        return i || s(!1, e.type + ' not found in ' + JSON.stringify(Object.keys(n.choice))), i._encode(e.value, t);
    }),
    (c.prototype._encodePrimitive = function (e, t) {
        let n = this._baseState;
        if (/str$/.test(e)) return this._encodeStr(t, e);
        if ('objid' === e && n.args) return this._encodeObjid(t, n.reverseArgs[0], n.args[1]);
        if ('objid' === e) return this._encodeObjid(t, null, null);
        if ('gentime' === e || 'utctime' === e) return this._encodeTime(t, e);
        if ('null_' === e) return this._encodeNull();
        else if ('int' === e || 'enum' === e) return this._encodeInt(t, n.args && n.reverseArgs[0]);
        else if ('bool' === e) return this._encodeBool(t);
        else if ('objDesc' === e) return this._encodeStr(t, e);
        else throw Error('Unsupported tag: ' + e);
    }),
    (c.prototype._isNumstr = function (e) {
        return /^[0-9 ]*$/.test(e);
    }),
    (c.prototype._isPrintstr = function (e) {
        return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(e);
    });
