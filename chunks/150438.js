r.d(n, {
    RM: function () {
        return t8;
    },
    X2: function () {
        return ne;
    },
    bL: function () {
        return nn;
    },
    iA: function () {
        return t1;
    },
    sg: function () {
        return t5;
    },
    xD: function () {
        return t4;
    }
});
var i = r(198453),
    a = r(473275),
    o = r(921336),
    s = r(662845),
    l = r(661763),
    u = r(237745),
    c = r(448446),
    d = r(649859),
    f = r(366889),
    p = r(867824),
    h = r(591361),
    _ = r(566022),
    m = r(46670),
    g = r(766203),
    E = r(726983),
    v = r(311300),
    y = r(563947),
    b = r(738279),
    I = r(92828),
    T = r(184495),
    S = r(918629),
    A = r(149901),
    C = r(508833),
    N = r(583620),
    R = r(756817),
    O = r(799441),
    D = r(407018),
    L = r(780471),
    x = r(743498),
    w = r(516515),
    P = r(298397),
    M = r(147223),
    k = r(599542),
    U = r(192379),
    B = r(430370),
    G = r(995295),
    Z = r(969710),
    F = r(254942),
    V = r(328199),
    j = r(554373),
    H = r(959125),
    Y = r(760683),
    W = r(354647),
    K = r(868965),
    z = r(943877),
    q = r(906421),
    Q = r(656692),
    X = r(865242),
    J = r(540020),
    $ = r(33216),
    ee = r(574869),
    et = r(635798),
    en = r(980008),
    er = r(990881),
    ei = r(87149);
class ea {
    get childNodes() {
        throw Error('childNodes is not supported');
    }
    clone() {
        let e = new ea(this.type, this.key);
        return (e.value = this.value), (e.level = this.level), (e.hasChildNodes = this.hasChildNodes), (e.rendered = this.rendered), (e.textValue = this.textValue), (e['aria-label'] = this['aria-label']), (e.index = this.index), (e.parentKey = this.parentKey), (e.prevKey = this.prevKey), (e.nextKey = this.nextKey), (e.firstChildKey = this.firstChildKey), (e.lastChildKey = this.lastChildKey), (e.props = this.props), e;
    }
    constructor(e, n) {
        (0, B._)(this, 'value', null), (0, B._)(this, 'level', 0), (0, B._)(this, 'hasChildNodes', !1), (0, B._)(this, 'rendered', null), (0, B._)(this, 'textValue', ''), (0, B._)(this, 'aria-label', void 0), (0, B._)(this, 'index', 0), (0, B._)(this, 'parentKey', null), (0, B._)(this, 'prevKey', null), (0, B._)(this, 'nextKey', null), (0, B._)(this, 'firstChildKey', null), (0, B._)(this, 'lastChildKey', null), (0, B._)(this, 'props', {}), (this.type = e), (this.key = n);
    }
}
let eo = Symbol.iterator;
class es {
    *[eo]() {
        let e = this.firstChild;
        for (; e; ) yield e, (e = e.nextSibling);
    }
    get firstChild() {
        return this._firstChild;
    }
    set firstChild(e) {
        (this._firstChild = e), this.ownerDocument.markDirty(this);
    }
    get lastChild() {
        return this._lastChild;
    }
    set lastChild(e) {
        (this._lastChild = e), this.ownerDocument.markDirty(this);
    }
    get previousSibling() {
        return this._previousSibling;
    }
    set previousSibling(e) {
        (this._previousSibling = e), this.ownerDocument.markDirty(this);
    }
    get nextSibling() {
        return this._nextSibling;
    }
    set nextSibling(e) {
        (this._nextSibling = e), this.ownerDocument.markDirty(this);
    }
    get parentNode() {
        return this._parentNode;
    }
    set parentNode(e) {
        (this._parentNode = e), this.ownerDocument.markDirty(this);
    }
    appendChild(e) {
        this.ownerDocument.startTransaction(), e.parentNode && e.parentNode.removeChild(e), null == this.firstChild && (this.firstChild = e), this.lastChild ? ((this.lastChild.nextSibling = e), (e.index = this.lastChild.index + 1), (e.previousSibling = this.lastChild)) : ((e.previousSibling = null), (e.index = 0)), (e.parentNode = this), (e.nextSibling = null), (this.lastChild = e), this.ownerDocument.markDirty(this), e.hasSetProps && this.ownerDocument.addNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate();
    }
    insertBefore(e, n) {
        if (null == n) return this.appendChild(e);
        this.ownerDocument.startTransaction(), e.parentNode && e.parentNode.removeChild(e), (e.nextSibling = n), (e.previousSibling = n.previousSibling), (e.index = n.index), this.firstChild === n ? (this.firstChild = e) : n.previousSibling && (n.previousSibling.nextSibling = e), (n.previousSibling = e), (e.parentNode = n.parentNode);
        let r = n;
        for (; r; ) r.index++, (r = r.nextSibling);
        e.hasSetProps && this.ownerDocument.addNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate();
    }
    removeChild(e) {
        if (e.parentNode !== this) return;
        this.ownerDocument.startTransaction();
        let n = e.nextSibling;
        for (; n; ) n.index--, (n = n.nextSibling);
        e.nextSibling && (e.nextSibling.previousSibling = e.previousSibling), e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling), this.firstChild === e && (this.firstChild = e.nextSibling), this.lastChild === e && (this.lastChild = e.previousSibling), (e.parentNode = null), (e.nextSibling = null), (e.previousSibling = null), (e.index = 0), this.ownerDocument.removeNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate();
    }
    addEventListener() {}
    removeEventListener() {}
    constructor(e) {
        (0, B._)(this, '_firstChild', null), (0, B._)(this, '_lastChild', null), (0, B._)(this, '_previousSibling', null), (0, B._)(this, '_nextSibling', null), (0, B._)(this, '_parentNode', null), (this.ownerDocument = e);
    }
}
let el = 0;
class eu extends es {
    get index() {
        return this._index;
    }
    set index(e) {
        (this._index = e), this.ownerDocument.markDirty(this);
    }
    get level() {
        return this.parentNode instanceof eu ? this.parentNode.level + ('item' === this.node.type ? 1 : 0) : 0;
    }
    updateNode() {
        var e, n, r, i, a, o, s, l;
        let u = this.ownerDocument.getMutableNode(this);
        (u.index = this.index), (u.level = this.level), (u.parentKey = this.parentNode instanceof eu ? this.parentNode.node.key : null), (u.prevKey = null !== (a = null === (e = this.previousSibling) || void 0 === e ? void 0 : e.node.key) && void 0 !== a ? a : null), (u.nextKey = null !== (o = null === (n = this.nextSibling) || void 0 === n ? void 0 : n.node.key) && void 0 !== o ? o : null), (u.hasChildNodes = !!this.firstChild), (u.firstChildKey = null !== (s = null === (r = this.firstChild) || void 0 === r ? void 0 : r.node.key) && void 0 !== s ? s : null), (u.lastChildKey = null !== (l = null === (i = this.lastChild) || void 0 === i ? void 0 : i.node.key) && void 0 !== l ? l : null);
    }
    setProps(e, n, r) {
        let i = this.ownerDocument.getMutableNode(this),
            { value: a, textValue: o, id: s, ...l } = e;
        if (((l.ref = n), (i.props = l), (i.rendered = r), (i.value = a), (i.textValue = o || ('string' == typeof r ? r : '') || e['aria-label'] || ''), null != s && s !== i.key)) {
            if (this.hasSetProps) throw Error('Cannot change the id of an item');
            i.key = s;
        }
        !this.hasSetProps && (this.ownerDocument.addNode(this), this.ownerDocument.endTransaction(), (this.hasSetProps = !0)), this.ownerDocument.queueUpdate();
    }
    get style() {
        return {};
    }
    hasAttribute() {}
    setAttribute() {}
    setAttributeNS() {}
    removeAttribute() {}
    constructor(e, n) {
        super(n), (0, B._)(this, 'nodeType', 8), (0, B._)(this, '_index', 0), (0, B._)(this, 'hasSetProps', !1), (this.node = new ea(e, `react-aria-${++el}`)), this.ownerDocument.startTransaction();
    }
}
let ec = Symbol.iterator;
class ed {
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    *[ec]() {
        let e = null != this.firstKey ? this.keyMap.get(this.firstKey) : void 0;
        for (; e; ) yield e, (e = null != e.nextKey ? this.keyMap.get(e.nextKey) : void 0);
    }
    getChildren(e) {
        let n = this.keyMap;
        return {
            *[Symbol.iterator]() {
                let r = n.get(e),
                    i = (null == r ? void 0 : r.firstChildKey) != null ? n.get(r.firstChildKey) : null;
                for (; i; ) yield i, (i = null != i.nextKey ? n.get(i.nextKey) : void 0);
            }
        };
    }
    getKeyBefore(e) {
        let n = this.keyMap.get(e);
        if (!n) return null;
        if (null != n.prevKey) {
            var r;
            for (n = this.keyMap.get(n.prevKey); n && 'item' !== n.type && null != n.lastChildKey; ) n = this.keyMap.get(n.lastChildKey);
            return null !== (r = null == n ? void 0 : n.key) && void 0 !== r ? r : null;
        }
        return n.parentKey;
    }
    getKeyAfter(e) {
        let n = this.keyMap.get(e);
        if (!n) return null;
        if ('item' !== n.type && null != n.firstChildKey) return n.firstChildKey;
        for (; n; ) {
            if (null != n.nextKey) return n.nextKey;
            if (null != n.parentKey) n = this.keyMap.get(n.parentKey);
            else break;
        }
        return null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        var e;
        let n = null != this.lastKey ? this.keyMap.get(this.lastKey) : null;
        for (; (null == n ? void 0 : n.lastChildKey) != null; ) n = this.keyMap.get(n.lastChildKey);
        return null !== (e = null == n ? void 0 : n.key) && void 0 !== e ? e : null;
    }
    getItem(e) {
        var n;
        return null !== (n = this.keyMap.get(e)) && void 0 !== n ? n : null;
    }
    at() {
        throw Error('Not implemented');
    }
    clone() {
        let e = new this.constructor();
        return (e.keyMap = new Map(this.keyMap)), (e.firstKey = this.firstKey), (e.lastKey = this.lastKey), e;
    }
    addNode(e) {
        if (this.frozen) throw Error('Cannot add a node to a frozen collection');
        this.keyMap.set(e.key, e);
    }
    removeNode(e) {
        if (this.frozen) throw Error('Cannot remove a node to a frozen collection');
        this.keyMap.delete(e);
    }
    commit(e, n) {
        if (this.frozen) throw Error('Cannot commit a frozen collection');
        (this.firstKey = e), (this.lastKey = n), (this.frozen = !0);
    }
    constructor() {
        (0, B._)(this, 'keyMap', new Map()), (0, B._)(this, 'firstKey', null), (0, B._)(this, 'lastKey', null), (0, B._)(this, 'frozen', !1);
    }
}
class ef extends es {
    createElement(e) {
        return new eu(e, this);
    }
    getMutableNode(e) {
        let n = e.node;
        return !this.mutatedNodes.has(e) && ((n = e.node.clone()), this.mutatedNodes.add(e), (e.node = n)), this.markDirty(e), n;
    }
    getMutableCollection() {
        return !this.collectionMutated && ((this.collection = this.collection.clone()), (this.collectionMutated = !0)), this.collection;
    }
    markDirty(e) {
        this.dirtyNodes.add(e);
    }
    startTransaction() {
        this.transactionCount++;
    }
    endTransaction() {
        this.transactionCount--;
    }
    addNode(e) {
        let n = this.getMutableCollection();
        if (!n.getItem(e.node.key)) for (let r of (n.addNode(e.node), e)) this.addNode(r);
        this.markDirty(e);
    }
    removeNode(e) {
        for (let n of e) (n.parentNode = null), this.removeNode(n);
        this.getMutableCollection().removeNode(e.node.key), this.markDirty(e);
    }
    getCollection() {
        if (this.transactionCount > 0) return this.collection;
        for (let e of this.dirtyNodes) e instanceof eu && e.parentNode && e.updateNode();
        if ((this.dirtyNodes.clear(), this.mutatedNodes.size)) {
            var e, n, r, i;
            let a = this.getMutableCollection();
            for (let e of this.mutatedNodes) e.parentNode && a.addNode(e.node);
            a.commit(null !== (r = null === (e = this.firstChild) || void 0 === e ? void 0 : e.node.key) && void 0 !== r ? r : null, null !== (i = null === (n = this.lastChild) || void 0 === n ? void 0 : n.node.key) && void 0 !== i ? i : null), this.mutatedNodes.clear();
        }
        return (this.collectionMutated = !1), this.collection;
    }
    queueUpdate() {
        if (0 !== this.dirtyNodes.size && !(this.transactionCount > 0)) for (let e of this.subscriptions) e();
    }
    subscribe(e) {
        return this.subscriptions.add(e), () => this.subscriptions.delete(e);
    }
    constructor(e) {
        super(null), (0, B._)(this, 'nodeType', 11), (0, B._)(this, 'ownerDocument', this), (0, B._)(this, 'dirtyNodes', new Set()), (0, B._)(this, 'mutatedNodes', new Set()), (0, B._)(this, 'subscriptions', new Set()), (0, B._)(this, 'transactionCount', 0), (this.collection = e), (this.collectionMutated = !0);
    }
}
function ep(e) {
    let { children: n, items: r, idScope: i, addIdAndValue: a } = e,
        o = (0, U.useMemo)(() => new WeakMap(), []);
    return (0, U.useMemo)(() => {
        if (!r || 'function' != typeof n) return n;
        {
            let l = [];
            for (let u of r) {
                let r = o.get(u);
                if (!r) {
                    if (null == (r = n(u)).key) {
                        var e, s;
                        let n = null !== (s = null !== (e = r.props.id) && void 0 !== e ? e : u.key) && void 0 !== s ? s : u.id;
                        if (null == n) throw Error('Could not determine key for item');
                        i && (n = i + ':' + n),
                            (r = (0, U.cloneElement)(
                                r,
                                a
                                    ? {
                                          key: n,
                                          id: n,
                                          value: u
                                      }
                                    : { key: n }
                            ));
                    }
                    o.set(u, r);
                }
                l.push(r);
            }
            return l;
        }
    }, [n, r, o, i, a]);
}
function eh(e) {
    return ep({
        ...e,
        addIdAndValue: !0
    });
}
let e_ = (0, U.createContext)(!1);
function em(e, n) {
    let r = (0, U.useMemo)(() => new ef(n || new ed()), [n]),
        a = (0, U.useCallback)((e) => r.subscribe(e), [r]),
        o = (0, U.useCallback)(() => r.getCollection(), [r]),
        s = (0, Z.useSyncExternalStore)(a, o, o),
        l = eh(e),
        u = (0, U.useMemo)(() => U.createElement(e_.Provider, { value: !0 }, l), [l]);
    return {
        portal: (0, i.Av)() ? null : (0, G.createPortal)(u, r),
        collection: s
    };
}
function eg(e, n, r) {
    let i = (0, U.useContext)(e_);
    return ((r = eE(n, r, n.children)), i) ? U.createElement(e, { ref: r }) : null;
}
function eE(e, n, r) {
    return (0, U.useCallback)(
        (i) => {
            null == i || i.setProps(e, n, r);
        },
        [e, n, r]
    );
}
function ev(e, n) {
    return U.createElement('item', { ref: eE(e, n, e.children) });
}
let ey = (0, U.forwardRef)(ev),
    eb = (0, U.createContext)(null),
    eI = (0, U.createContext)(null),
    eT = Symbol('callback'),
    eS = Symbol('default');
function eA({ values: e, children: n }) {
    for (let [r, i] of e) n = U.createElement(r.Provider, { value: i }, n);
    return n;
}
function eC(e) {
    let { className: n, style: r, children: i, defaultClassName: a, defaultChildren: o, values: s } = e;
    return (0, U.useMemo)(() => {
        let e, l, u;
        return (
            (e = 'function' == typeof n ? n(s) : n),
            (l = 'function' == typeof r ? r(s) : r),
            {
                className: null != e ? e : a,
                style: l,
                children: (u = 'function' == typeof i ? i(s) : null == i ? o : i)
            }
        );
    }, [n, r, i, a, o, s]);
}
function eN(e, n, r) {
    let i = (0, U.useContext)(r) || {};
    if ('slots' in i && i.slots) {
        if (!e.slot && !i.slots[eS]) throw Error('A slot prop is required');
        let n = e.slot || eS;
        if (!i.slots[n]) throw Error(`Invalid slot "${e.slot}". Valid slot names are ` + new Intl.ListFormat().format(Object.keys(i.slots).map((e) => `"${e}"`)) + '.');
        i = i.slots[n];
    }
    let { ref: a, [eT]: o, ...s } = i,
        l = (0, k.B3)((0, k.lq)(n, a)),
        u = (0, k.dG)(s, e);
    return (
        (0, U.useEffect)(() => {
            o && o(e);
        }, [o, e]),
        [u, l]
    );
}
function eR() {
    let [e, n] = (0, U.useState)(!0),
        r = (0, U.useRef)(!1),
        i = (0, U.useCallback)((e) => {
            (r.current = !0), n(!!e);
        }, []);
    return (
        (0, k.bt)(() => {
            !r.current && n(!1);
        }, []),
        [i, e]
    );
}
function eO(e, n = !0) {
    let [r, i] = (0, U.useState)(!0);
    return (
        eL(
            e,
            r && n,
            (0, U.useCallback)(() => i(!1), [])
        ),
        r && n
    );
}
function eD(e, n) {
    let [r, i] = (0, U.useState)(!1),
        a = (0, U.useRef)('idle');
    return (
        !n && e.current && 'idle' === a.current && ((r = !0), i(!0), (a.current = 'exiting')),
        !e.current && 'exited' === a.current && (a.current = 'idle'),
        eL(
            e,
            r,
            (0, U.useCallback)(() => {
                (a.current = 'exited'), i(!1);
            }, [])
        ),
        r
    );
}
function eL(e, n, r) {
    let i = (0, U.useRef)(null);
    n && e.current && (i.current = window.getComputedStyle(e.current).animation),
        (0, k.bt)(() => {
            if (n && e.current) {
                let n = window.getComputedStyle(e.current);
                if ('none' !== n.animationName && n.animation !== i.current) {
                    let n = (a) => {
                            a.target === e.current &&
                                (i.removeEventListener('animationend', n),
                                G.flushSync(() => {
                                    r();
                                }));
                        },
                        i = e.current;
                    return (
                        i.addEventListener('animationend', n),
                        () => {
                            i.removeEventListener('animationend', n);
                        }
                    );
                }
                r();
            }
        }, [e, n, r]);
}
let ex = (0, U.createContext)(!1),
    ew = (0, U.createContext)({}),
    eP = (0, U.createContext)(null),
    eM = (0, U.createContext)(null);
function ek({ node: e, isCurrent: n, isDisabled: r }) {
    var i;
    let a = n ? { 'aria-current': 'page' } : null,
        o = {
            'aria-current': n ? 'page' : null,
            isDisabled: r || n
        };
    return U.createElement(
        'li',
        {
            ...(0, k.zL)(e.props),
            style: e.props.style,
            className: null !== (i = e.props.className) && void 0 !== i ? i : 'react-aria-Item'
        },
        U.createElement(
            eA,
            {
                values: [
                    [eP, o],
                    [ew, a]
                ]
            },
            e.rendered
        )
    );
}
let eU = new Set(['form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'name', 'value']),
    eB = (0, U.createContext)({}),
    eG = (0, U.createContext)({}),
    eZ = (0, U.createContext)({}),
    eF = (0, U.createContext)({}),
    eV = (0, U.createContext)(null),
    ej = (0, U.createContext)(null);
function eH(e, n) {
    let { children: r, style: i, className: a } = e,
        { headerProps: o, weekDays: s } = (0, U.useContext)(ej);
    return U.createElement(
        'thead',
        {
            ...(0, k.zL)(e),
            ...o,
            ref: n,
            style: i,
            className: a || 'react-aria-CalendarGridHeader'
        },
        U.createElement(
            'tr',
            null,
            s.map((e, n) => U.cloneElement(r(e), { key: n }))
        )
    );
}
let eY = (0, U.forwardRef)(eH);
function eW(e, n) {
    let { children: r, style: i, className: a } = e;
    return U.createElement(
        'th',
        {
            ...(0, k.zL)(e),
            ref: n,
            style: i,
            className: a || 'react-aria-CalendarHeaderCell'
        },
        r
    );
}
let eK = (0, U.forwardRef)(eW);
function ez(e, n) {
    let { children: r, style: i, className: a } = e,
        o = (0, U.useContext)(eV),
        { startDate: s } = (0, U.useContext)(ej),
        { locale: l } = (0, d.bU)(),
        u = (0, V.Rn)(s, l);
    return U.createElement(
        'tbody',
        {
            ...(0, k.zL)(e),
            ref: n,
            style: i,
            className: a || 'react-aria-CalendarGridBody'
        },
        [...Array(u).keys()].map((e) =>
            U.createElement(
                'tr',
                { key: e },
                o.getDatesInWeek(e, s).map((e, n) => (e ? U.cloneElement(r(e), { key: n }) : U.createElement('td', { key: n })))
            )
        )
    );
}
let eq = (0, U.forwardRef)(ez),
    eQ = (0, U.createContext)({}),
    eX = (0, U.createContext)(null),
    eJ = (0, U.createContext)(null),
    e$ = (0, U.createContext)(null),
    e0 = (0, U.createContext)({}),
    e1 = (0, U.createContext)(null);
function e2(e, n) {
    let { render: r } = (0, U.useContext)(e1);
    return U.createElement(U.Fragment, null, r(e, n));
}
let e3 = (0, U.forwardRef)(e2),
    e4 = (0, U.createContext)({});
function e6(e, n) {
    [e, n] = eN(e, n, e4);
    let r = eg('header', e, n);
    return r
        ? r
        : U.createElement(
              'header',
              {
                  className: 'react-aria-Header',
                  ...e,
                  ref: n
              },
              e.children
          );
}
let e5 = (0, U.forwardRef)(e6),
    e7 = (0, U.createContext)({});
function e8(e, n) {
    [e, n] = eN(e, n, e7);
    let { elementType: r, orientation: i, style: a, className: o } = e,
        s = r || 'hr';
    'hr' === s && 'vertical' === i && (s = 'div');
    let { separatorProps: l } = (0, _.z)({
            elementType: r,
            orientation: i
        }),
        u = eg('separator', e, n);
    return u
        ? u
        : U.createElement(s, {
              ...(0, k.zL)(e),
              ...l,
              style: a,
              className: null != o ? o : 'react-aria-Separator',
              ref: n,
              slot: e.slot
          });
}
let e9 = (0, U.forwardRef)(e8),
    te = (0, U.createContext)(null),
    tt = (0, U.createContext)(null);
function tn({ props: e, listBoxRef: n }) {
    let { portal: r, collection: i } = em(e);
    e = {
        ...e,
        collection: i,
        children: null,
        items: null
    };
    let a = (0, W.n_)(e);
    return U.createElement(
        U.Fragment,
        null,
        r,
        U.createElement(tr, {
            state: a,
            props: e,
            listBoxRef: n
        })
    );
}
function tr({ state: e, props: n, listBoxRef: r }) {
    let i,
        a,
        o,
        { dragAndDropHooks: u } = n,
        { collection: c, selectionManager: d } = e,
        f = !!(null == u ? void 0 : u.useDraggableCollectionState),
        p = !!(null == u ? void 0 : u.useDroppableCollectionState),
        { listBoxProps: h } = (0, m.co)(
            {
                ...n,
                shouldSelectOnPressUp: f || n.shouldSelectOnPressUp
            },
            e,
            r
        ),
        _ = ep({
            items: c,
            children: (e) => {
                switch (e.type) {
                    case 'section':
                        return U.createElement(ti, { section: e });
                    case 'separator':
                        return U.createElement(e9, e.props);
                    case 'item':
                        return U.createElement(ta, { item: e });
                    default:
                        throw Error('Unsupported node type in Menu: ' + e.type);
                }
            }
        }),
        E = (0, U.useRef)(f),
        v = (0, U.useRef)(p);
    E.current !== f && console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.'), v.current !== p && console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
    let y = !1,
        b = null,
        I = (0, U.useRef)(null);
    if (f && u) {
        (i = u.useDraggableCollectionState({
            collection: c,
            selectionManager: d,
            preview: u.renderDragPreview ? I : void 0
        })),
            u.useDraggableCollection({}, i, r);
        let e = u.DragPreview;
        b = u.renderDragPreview ? U.createElement(e, { ref: I }, u.renderDragPreview) : null;
    }
    if (p && u) {
        a = u.useDroppableCollectionState({
            collection: c,
            selectionManager: d
        });
        let e = n.keyboardDelegate || new g.dp(c, 'selection' === d.disabledBehavior ? new Set() : d.disabledKeys, r),
            i = u.dropTargetDelegate || new u.ListDropTargetDelegate(c, r);
        (o = u.useDroppableCollection(
            {
                keyboardDelegate: e,
                dropTargetDelegate: i
            },
            a,
            r
        )),
            (y = a.isDropTarget({ type: 'root' }));
    }
    let { focusProps: T, isFocused: S, isFocusVisible: A } = (0, s.Fx)(),
        C = eC({
            className: n.className,
            style: n.style,
            defaultClassName: 'react-aria-ListBox',
            values: {
                isDropTarget: y,
                isEmpty: 0 === e.collection.size,
                isFocused: S,
                isFocusVisible: A
            }
        }),
        N = null;
    return (
        0 === e.collection.size &&
            n.renderEmptyState &&
            (N = U.createElement(
                'div',
                {
                    role: 'option',
                    style: { display: 'contents' }
                },
                n.renderEmptyState()
            )),
        U.createElement(
            s.MT,
            null,
            U.createElement(
                'div',
                {
                    ...(0, k.zL)(n),
                    ...(0, l.dG)(h, T, null == o ? void 0 : o.collectionProps),
                    ...C,
                    ref: r,
                    slot: n.slot,
                    'data-drop-target': y || void 0,
                    'data-empty': 0 === e.collection.size || void 0,
                    'data-focused': S || void 0,
                    'data-focus-visible': A || void 0
                },
                U.createElement(
                    eA,
                    {
                        values: [
                            [
                                tt,
                                {
                                    state: e,
                                    shouldFocusOnHover: n.shouldFocusOnHover,
                                    dragAndDropHooks: u,
                                    dragState: i,
                                    dropState: a
                                }
                            ],
                            [e7, { elementType: 'li' }],
                            [e1, { render: to }]
                        ]
                    },
                    _
                ),
                N,
                b
            )
        )
    );
}
function ti({ section: e, className: n, style: r, ...i }) {
    var a, o, s;
    let { state: l } = (0, U.useContext)(tt),
        [u, c] = eR(),
        { headingProps: d, groupProps: f } = (0, m.TV)({
            heading: c,
            'aria-label': null !== (s = e['aria-label']) && void 0 !== s ? s : void 0
        }),
        p = ep({
            items: l.collection.getChildren(e.key),
            children: (e) => {
                switch (e.type) {
                    case 'header': {
                        let { ref: n, ...r } = e.props;
                        return U.createElement(
                            e5,
                            {
                                ...d,
                                ...r,
                                ref: (0, k.lq)(u, n)
                            },
                            e.rendered
                        );
                    }
                    case 'item':
                        return U.createElement(ta, { item: e });
                    default:
                        throw Error('Unsupported element type in Section: ' + e.type);
                }
            }
        });
    return U.createElement(
        'section',
        {
            ...(0, k.zL)(i),
            ...f,
            className: n || (null === (a = e.props) || void 0 === a ? void 0 : a.className) || 'react-aria-Section',
            style: r || (null === (o = e.props) || void 0 === o ? void 0 : o.style),
            ref: e.props.ref
        },
        p
    );
}
function ta({ item: e }) {
    let n = (0, k.B3)(e.props.ref),
        { state: r, shouldFocusOnHover: i, dragAndDropHooks: a, dragState: s, dropState: u } = (0, U.useContext)(tt),
        { optionProps: c, labelProps: d, descriptionProps: f, ...p } = (0, m.Fv)({ key: e.key }, r, n),
        { hoverProps: h, isHovered: _ } = (0, o.XI)({ isDisabled: i || (!p.allowsSelection && !p.hasAction) });
    i && ((h = {}), (_ = p.isFocused));
    let g = null;
    s && a && (g = a.useDraggableItem({ key: e.key }, s));
    let E = null;
    u &&
        a &&
        (E = a.useDroppableItem(
            {
                target: {
                    type: 'item',
                    key: e.key,
                    dropPosition: 'on'
                }
            },
            u,
            n
        ));
    let v = e.props,
        y = s && s.isDragging(e.key),
        b = eC({
            ...v,
            id: void 0,
            children: e.rendered,
            defaultClassName: 'react-aria-Item',
            values: {
                ...p,
                isHovered: _,
                selectionMode: r.selectionManager.selectionMode,
                selectionBehavior: r.selectionManager.selectionBehavior,
                allowsDragging: !!s,
                isDragging: y,
                isDropTarget: null == E ? void 0 : E.isDropTarget
            }
        }),
        I = (null == a ? void 0 : a.renderDropIndicator) || ((e) => U.createElement(e3, { target: e }));
    return (
        (0, U.useEffect)(() => {
            !e.textValue && console.warn('A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.');
        }, [e.textValue]),
        U.createElement(
            U.Fragment,
            null,
            (null == a ? void 0 : a.useDropIndicator) &&
                I({
                    type: 'item',
                    key: e.key,
                    dropPosition: 'before'
                }),
            U.createElement(
                'div',
                {
                    ...(0, l.dG)((0, k.zL)(v), c, h, null == g ? void 0 : g.dragProps, null == E ? void 0 : E.dropProps),
                    ...b,
                    ref: n,
                    'data-hovered': _ || void 0,
                    'data-focused': p.isFocused || void 0,
                    'data-focus-visible': p.isFocusVisible || void 0,
                    'data-pressed': p.isPressed || void 0,
                    'data-dragging': y || void 0,
                    'data-drop-target': (null == E ? void 0 : E.isDropTarget) || void 0
                },
                U.createElement(
                    eA,
                    {
                        values: [
                            [
                                eG,
                                {
                                    slots: {
                                        label: d,
                                        description: f
                                    }
                                }
                            ]
                        ]
                    },
                    b.children
                )
            ),
            (null == a ? void 0 : a.useDropIndicator) &&
                null == r.collection.getKeyAfter(e.key) &&
                I({
                    type: 'item',
                    key: e.key,
                    dropPosition: 'after'
                })
        )
    );
}
function to(e, n) {
    n = (0, k.B3)(n);
    let { dragAndDropHooks: r, dropState: i } = (0, U.useContext)(tt),
        { dropIndicatorProps: a, isHidden: o, isDropTarget: s } = r.useDropIndicator(e, i, n);
    return o
        ? null
        : U.createElement(tl, {
              ...e,
              dropIndicatorProps: a,
              isDropTarget: s,
              ref: n
          });
}
function ts(e, n) {
    let { dropIndicatorProps: r, isDropTarget: i, ...a } = e,
        o = eC({
            ...a,
            defaultClassName: 'react-aria-DropIndicator',
            values: { isDropTarget: i }
        });
    return U.createElement('div', {
        ...r,
        ...o,
        role: 'option',
        ref: n,
        'data-drop-target': i || void 0
    });
}
let tl = (0, U.forwardRef)(ts),
    tu = (0, U.createContext)(null),
    tc = (0, U.createContext)(null);
function td({ state: e, isExiting: n, ...r }) {
    var i;
    let {
            popoverProps: a,
            underlayProps: o,
            arrowProps: s,
            placement: l
        } = (0, E.Sv)(
            {
                ...r,
                offset: null !== (i = r.offset) && void 0 !== i ? i : 8
            },
            e
        ),
        u = r.popoverRef,
        c = eO(u, !!l),
        d = eC({
            ...r,
            defaultClassName: 'react-aria-Popover',
            values: {
                placement: l,
                isEntering: c,
                isExiting: n
            }
        }),
        f = {
            ...d.style,
            ...a.style
        };
    return U.createElement(
        E.aV,
        null,
        !r.isNonModal &&
            U.createElement('div', {
                ...o,
                style: {
                    position: 'fixed',
                    inset: 0
                }
            }),
        U.createElement(
            'div',
            {
                ...(0, k.dG)((0, k.zL)(r), a),
                ...d,
                ref: u,
                slot: r.slot,
                style: f,
                'data-placement': l,
                'data-entering': c || void 0,
                'data-exiting': n || void 0
            },
            !r.isNonModal && U.createElement(E.U4, { onDismiss: e.close }),
            U.createElement(
                tu.Provider,
                {
                    value: {
                        arrowProps: s,
                        placement: l
                    }
                },
                d.children
            ),
            U.createElement(E.U4, { onDismiss: e.close })
        )
    );
}
let tf = (0, U.createContext)(null),
    tp = (0, U.createContext)(null),
    th = (0, U.createContext)(null),
    t_ = (0, U.createContext)(null),
    tm = (0, U.createContext)(null),
    tg = (0, U.createContext)(null),
    tE = (0, U.createContext)(null),
    tv = (0, U.forwardRef)((e, n) => {
        var r;
        let i = (0, U.useContext)(tg),
            a = null !== (r = null == i ? void 0 : i.state) && void 0 !== r ? r : (0, q.d)(e),
            o = (0, k.B3)(n),
            s = (0, U.useRef)(null),
            l = eD(o, a.isOpen),
            u = eD(s, a.isOpen),
            c = l || u;
        return a.isOpen || c
            ? U.createElement(ty, {
                  ...e,
                  state: a,
                  isExiting: c,
                  overlayRef: o,
                  modalRef: s
              })
            : null;
    });
function ty(e) {
    let n = e.modalRef,
        { state: r } = e,
        { modalProps: i, underlayProps: a } = (0, E.NE)(e, r, n),
        o = eO(e.overlayRef),
        s = eC({
            ...e,
            defaultClassName: 'react-aria-ModalOverlay',
            values: {
                isEntering: o,
                isExiting: e.isExiting
            }
        }),
        l = (0, k.nP)(),
        u = {
            ...s.style,
            '--visual-viewport-height': l.height + 'px'
        };
    return U.createElement(
        E.aV,
        null,
        U.createElement(
            'div',
            {
                ...(0, k.dG)((0, k.zL)(e), a),
                ...s,
                style: u,
                ref: e.overlayRef,
                'data-entering': o || void 0,
                'data-exiting': e.isExiting || void 0
            },
            U.createElement(
                tE.Provider,
                {
                    value: {
                        modalProps: i,
                        modalRef: n,
                        state: r,
                        isExiting: e.isExiting,
                        isDismissable: e.isDismissable
                    }
                },
                s.children
            )
        )
    );
}
function tb(e) {
    let { modalProps: n, modalRef: r, isExiting: i, isDismissable: a, state: o } = (0, U.useContext)(tE),
        s = (0, U.useMemo)(() => (0, k.lq)(e.modalRef, r), [e.modalRef, r]),
        l = (0, k.B3)(s),
        u = eO(l),
        c = eC({
            ...e,
            defaultClassName: 'react-aria-Modal',
            values: {
                isEntering: u,
                isExiting: i
            }
        });
    return U.createElement(
        'div',
        {
            ...(0, k.dG)((0, k.zL)(e), n),
            ...c,
            ref: l,
            'data-entering': u || void 0,
            'data-exiting': i || void 0
        },
        a && U.createElement(E.U4, { onDismiss: o.close }),
        c.children
    );
}
let tI = (0, U.createContext)(null),
    tT = (0, U.createContext)({}),
    tS = (0, U.createContext)(null),
    tA = (0, U.createContext)(null),
    tC = (0, U.createContext)(null),
    tN = (0, U.createContext)(null);
function tR({ item: e }) {
    let { state: n, dragAndDropHooks: r, dragState: i, dropState: a } = (0, U.useContext)(tN),
        u = (0, k.B3)(e.props.ref),
        {
            rowProps: c,
            gridCellProps: d,
            descriptionProps: f,
            ...h
        } = (0, I.Fb)(
            {
                node: e,
                shouldSelectOnPressUp: !!i
            },
            n,
            u
        ),
        { hoverProps: _, isHovered: m } = (0, o.XI)({ isDisabled: !h.allowsSelection && !h.hasAction }),
        { isFocusVisible: g, focusProps: E } = (0, s.Fx)(),
        { checkboxProps: v } = (0, I.fQ)({ key: e.key }, n),
        y = null;
    i &&
        r &&
        (y = r.useDraggableItem(
            {
                key: e.key,
                hasDragButton: !0
            },
            i
        ));
    let b = null,
        T = (0, U.useRef)(null),
        { visuallyHiddenProps: S } = (0, p.S)();
    a &&
        r &&
        (b = r.useDropIndicator(
            {
                target: {
                    type: 'item',
                    key: e.key,
                    dropPosition: 'on'
                }
            },
            a,
            T
        ));
    let A = e.props,
        C = i && i.isDragging(e.key),
        N = eC({
            ...A,
            id: void 0,
            children: e.rendered,
            defaultClassName: 'react-aria-Item',
            values: {
                ...h,
                isHovered: m,
                isFocusVisible: g,
                selectionMode: n.selectionManager.selectionMode,
                selectionBehavior: n.selectionManager.selectionBehavior,
                allowsDragging: !!i,
                isDragging: C,
                isDropTarget: null == b ? void 0 : b.isDropTarget
            }
        }),
        R = (null == r ? void 0 : r.renderDropIndicator) || ((e) => U.createElement(e3, { target: e })),
        O = (0, U.useRef)(null);
    return (
        (0, U.useEffect)(() => {
            i && !O.current && console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
        }, []),
        (0, U.useEffect)(() => {
            !e.textValue && console.warn('A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.');
        }, [e.textValue]),
        U.createElement(
            U.Fragment,
            null,
            (null == r ? void 0 : r.useDropIndicator) &&
                R({
                    type: 'item',
                    key: e.key,
                    dropPosition: 'before'
                }),
            b &&
                !b.isHidden &&
                U.createElement(
                    'div',
                    {
                        role: 'row',
                        style: { position: 'absolute' }
                    },
                    U.createElement(
                        'div',
                        { role: 'gridcell' },
                        U.createElement('div', {
                            role: 'button',
                            ...S,
                            ...(null == b ? void 0 : b.dropIndicatorProps),
                            ref: T
                        })
                    )
                ),
            U.createElement(
                'div',
                {
                    ...(0, l.dG)((0, k.zL)(A), c, E, _, null == y ? void 0 : y.dragProps),
                    ...N,
                    ref: u,
                    'data-hovered': m || void 0,
                    'data-focused': h.isFocused || void 0,
                    'data-focus-visible': g || void 0,
                    'data-pressed': h.isPressed || void 0,
                    'data-dragging': C || void 0,
                    'data-drop-target': (null == b ? void 0 : b.isDropTarget) || void 0
                },
                U.createElement(
                    'div',
                    d,
                    U.createElement(
                        eA,
                        {
                            values: [
                                [e$, v],
                                [
                                    eB,
                                    {
                                        slots: {
                                            [eS]: {},
                                            drag: {
                                                ...(null == y ? void 0 : y.dragButtonProps),
                                                ref: O,
                                                style: { pointerEvents: 'none' }
                                            }
                                        }
                                    }
                                ],
                                [eG, { slots: { description: f } }]
                            ]
                        },
                        N.children
                    )
                )
            ),
            (null == r ? void 0 : r.useDropIndicator) &&
                null == n.collection.getKeyAfter(e.key) &&
                R({
                    type: 'item',
                    key: e.key,
                    dropPosition: 'after'
                })
        )
    );
}
function tO(e, n) {
    n = (0, k.B3)(n);
    let { dragAndDropHooks: r, dropState: i } = (0, U.useContext)(tN),
        a = (0, U.useRef)(null),
        { dropIndicatorProps: o, isHidden: s, isDropTarget: l } = r.useDropIndicator(e, i, a);
    return s
        ? null
        : U.createElement(tL, {
              ...e,
              dropIndicatorProps: o,
              isDropTarget: l,
              buttonRef: a,
              ref: n
          });
}
function tD(e, n) {
    let { dropIndicatorProps: r, isDropTarget: i, buttonRef: a, ...o } = e,
        { visuallyHiddenProps: s } = (0, p.S)(),
        l = eC({
            ...o,
            defaultClassName: 'react-aria-DropIndicator',
            values: { isDropTarget: i }
        });
    return U.createElement(
        'div',
        {
            ...l,
            role: 'row',
            ref: n,
            'data-drop-target': i || void 0
        },
        U.createElement(
            'div',
            { role: 'gridcell' },
            U.createElement('div', {
                ...s,
                role: 'button',
                ...r,
                ref: a
            })
        )
    );
}
let tL = (0, U.forwardRef)(tD);
function tx() {
    let { dragAndDropHooks: e, dropState: n } = (0, U.useContext)(tN),
        r = (0, U.useRef)(null),
        { dropIndicatorProps: i } = e.useDropIndicator({ target: { type: 'root' } }, n, r),
        a = n.isDropTarget({ type: 'root' }),
        { visuallyHiddenProps: o } = (0, p.S)();
    return !a && i['aria-hidden']
        ? null
        : U.createElement(
              'div',
              {
                  role: 'row',
                  'aria-hidden': i['aria-hidden'],
                  style: { position: 'absolute' }
              },
              U.createElement(
                  'div',
                  { role: 'gridcell' },
                  U.createElement('div', {
                      role: 'button',
                      ...o,
                      ...i,
                      ref: r
                  })
              )
          );
}
let tw = (0, U.createContext)({}),
    tP = (0, U.createContext)(null),
    tM = (0, U.createContext)(null);
function tk({ props: e, collection: n, menuRef: r }) {
    var i;
    let a = (0, Q.D)({
            ...e,
            collection: n,
            children: void 0
        }),
        { menuProps: o } = (0, T.H9)(e, a, r),
        s = ep({
            items: a.collection,
            children: (e) => {
                switch (e.type) {
                    case 'section':
                        return U.createElement(tU, { section: e });
                    case 'separator':
                        return U.createElement(e9, e.props);
                    case 'item':
                        return U.createElement(tB, { item: e });
                    default:
                        throw Error('Unsupported node type in Menu: ' + e.type);
                }
            }
        });
    return U.createElement(
        'div',
        {
            ...(0, k.zL)(e),
            ...o,
            ref: r,
            slot: e.slot,
            style: e.style,
            className: null !== (i = e.className) && void 0 !== i ? i : 'react-aria-Menu'
        },
        U.createElement(
            eA,
            {
                values: [
                    [tM, a],
                    [e7, { elementType: 'div' }]
                ]
            },
            s
        )
    );
}
function tU({ section: e, className: n, style: r, ...i }) {
    var a, o, s;
    let l = (0, U.useContext)(tM),
        [u, c] = eR(),
        { headingProps: d, groupProps: f } = (0, T.x7)({
            heading: c,
            'aria-label': null !== (s = e['aria-label']) && void 0 !== s ? s : void 0
        }),
        p = ep({
            items: l.collection.getChildren(e.key),
            children: (e) => {
                switch (e.type) {
                    case 'header': {
                        let { ref: n, ...r } = e.props;
                        return U.createElement(
                            e5,
                            {
                                ...d,
                                ...r,
                                ref: (0, k.lq)(u, n)
                            },
                            e.rendered
                        );
                    }
                    case 'item':
                        return U.createElement(tB, { item: e });
                    default:
                        throw Error('Unsupported element type in Section: ' + e.type);
                }
            }
        });
    return U.createElement(
        'section',
        {
            ...(0, k.zL)(i),
            ...f,
            className: n || (null === (a = e.props) || void 0 === a ? void 0 : a.className) || 'react-aria-Section',
            style: r || (null === (o = e.props) || void 0 === o ? void 0 : o.style),
            ref: e.props.ref
        },
        p
    );
}
function tB({ item: e }) {
    let n = (0, U.useContext)(tM),
        r = (0, k.B3)(e.props.ref),
        { menuItemProps: i, labelProps: a, descriptionProps: o, keyboardShortcutProps: u, ...c } = (0, T.iX)({ key: e.key }, n, r),
        d = e.props,
        { isFocusVisible: f, focusProps: p } = (0, s.Fx)(),
        h = eC({
            ...d,
            id: void 0,
            children: e.rendered,
            defaultClassName: 'react-aria-Item',
            values: {
                ...c,
                isHovered: c.isFocused,
                isFocusVisible: f,
                selectionMode: n.selectionManager.selectionMode,
                selectionBehavior: n.selectionManager.selectionBehavior
            }
        }),
        _ = (0, k.zL)(d);
    return (
        delete _.id,
        U.createElement(
            'div',
            {
                ...(0, l.dG)(_, i, p),
                ...h,
                ref: r,
                'data-hovered': c.isFocused || void 0,
                'data-focused': c.isFocused || void 0,
                'data-focus-visible': f || void 0,
                'data-pressed': c.isPressed || void 0
            },
            U.createElement(
                eA,
                {
                    values: [
                        [
                            eG,
                            {
                                slots: {
                                    label: a,
                                    description: o
                                }
                            }
                        ],
                        [tw, u]
                    ]
                },
                h.children
            )
        )
    );
}
let tG = (0, U.createContext)(null),
    tZ = (0, U.createContext)(null),
    tF = (0, U.createContext)(null),
    tV = (0, U.createContext)(null),
    tj = (0, U.createContext)(null),
    tH = (0, U.createContext)(null),
    tY = (0, U.createContext)(null),
    tW = (0, U.createContext)(null),
    tK = (0, U.createContext)(null),
    tz = (0, U.createContext)(null),
    tq = (0, U.createContext)(null),
    tQ = Symbol.iterator;
class tX extends ed {
    addNode(e) {
        super.addNode(e), this.columnsDirty || (this.columnsDirty = 'column' === e.type), 'tableheader' === e.type && (this.head = e), 'tablebody' === e.type && (this.body = e);
    }
    commit(e, n) {
        this.updateColumns(), super.commit(e, n);
    }
    updateColumns() {
        if (!this.columnsDirty) return;
        (this.rowHeaderColumnKeys = new Set()), (this.columns = []);
        let e = new Map(),
            n = (r) => {
                if ('column' === r.type) e.set(r.key, r), !r.hasChildNodes && ((r.index = this.columns.length), this.columns.push(r), r.props.isRowHeader && this.rowHeaderColumnKeys.add(r.key));
                for (let e of this.getChildren(r.key)) n(e);
            };
        for (let e of this.getChildren(this.head.key)) n(e);
        if (((this.headerRows = (0, ei.GL)(e, this.columns)), (this.columnsDirty = !1), 0 === this.rowHeaderColumnKeys.size && this.columns.length > 0)) throw Error('A table must have at least one Column with the isRowHeader prop set to true');
    }
    get columnCount() {
        return this.columns.length;
    }
    get rows() {
        return [...this.getChildren(this.body.key)];
    }
    *[tQ]() {
        yield* this.getChildren(this.body.key);
    }
    get size() {
        return [...this.getChildren(this.body.key)].length;
    }
    getFirstKey() {
        var e;
        return null === (e = [...this.getChildren(this.body.key)][0]) || void 0 === e ? void 0 : e.key;
    }
    getLastKey() {
        var e;
        let n = [...this.getChildren(this.body.key)];
        return null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.key;
    }
    getKeyAfter(e) {
        var n;
        let r = this.getItem(e);
        return (null == r ? void 0 : r.type) === 'column' ? (null !== (n = r.nextKey) && void 0 !== n ? n : null) : super.getKeyAfter(e);
    }
    getKeyBefore(e) {
        var n, r;
        let i = this.getItem(e);
        if ((null == i ? void 0 : i.type) === 'column') return null !== (r = i.prevKey) && void 0 !== r ? r : null;
        let a = super.getKeyBefore(e);
        return null != a && (null === (n = this.getItem(a)) || void 0 === n ? void 0 : n.type) === 'tablebody' ? null : a;
    }
    getChildren(e) {
        if (!this.getItem(e)) {
            for (let n of this.headerRows) if (n.key === e) return n.childNodes;
        }
        return super.getChildren(e);
    }
    clone() {
        let e = super.clone();
        return (e.headerRows = this.headerRows), (e.columns = this.columns), (e.rowHeaderColumnKeys = this.rowHeaderColumnKeys), (e.head = this.head), (e.body = this.body), e;
    }
    getTextValue(e) {
        let n = this.getItem(e);
        if (!n) return '';
        if (n.textValue) return n.textValue;
        let r = this.rowHeaderColumnKeys,
            i = [];
        for (let n of this.getChildren(e)) {
            let e = this.columns[n.index];
            if ((r.has(e.key) && n.textValue && i.push(n.textValue), i.length === r.size)) break;
        }
        return i.join(' ');
    }
    constructor(...e) {
        super(...e), (0, B._)(this, 'headerRows', []), (0, B._)(this, 'columns', []), (0, B._)(this, 'rowHeaderColumnKeys', new Set()), (0, B._)(this, 'head', new ea('tableheader', -1)), (0, B._)(this, 'body', new ea('tablebody', -2)), (0, B._)(this, 'columnsDirty', !0);
    }
}
let tJ = (0, U.createContext)(null),
    t$ = (0, U.createContext)(null);
function t0(e, n) {
    let r, i, a;
    [e, n] = eN(e, n, tJ);
    let { portal: o, collection: u } = em(
            e,
            (0, U.useMemo)(() => new tX(), [])
        ),
        c = (0, en.oy)({
            ...e,
            collection: u,
            children: void 0
        }),
        { gridProps: d } = (0, x.x6)(e, c, n),
        { dragAndDropHooks: f } = e,
        p = c.selectionManager,
        h = !!(null == f ? void 0 : f.useDraggableCollectionState),
        _ = !!(null == f ? void 0 : f.useDroppableCollectionState),
        m = (0, U.useRef)(h),
        E = (0, U.useRef)(_);
    m.current !== h && console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.'), E.current !== _ && console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
    let v = !1,
        y = null,
        b = (0, U.useRef)(null);
    if (h && f) {
        (r = f.useDraggableCollectionState({
            collection: u,
            selectionManager: p,
            preview: f.renderDragPreview ? b : void 0
        })),
            f.useDraggableCollection({}, r, n);
        let e = f.DragPreview;
        y = f.renderDragPreview ? U.createElement(e, { ref: b }, f.renderDragPreview) : null;
    }
    if (_ && f) {
        i = f.useDroppableCollectionState({
            collection: u,
            selectionManager: p
        });
        let e = new g.dp(u, 'selection' === p.disabledBehavior ? new Set() : p.disabledKeys, n),
            r = f.dropTargetDelegate || new f.ListDropTargetDelegate(u, n);
        (a = f.useDroppableCollection(
            {
                keyboardDelegate: e,
                dropTargetDelegate: r
            },
            i,
            n
        )),
            (v = i.isDropTarget({ type: 'root' }));
    }
    let { focusProps: I, isFocused: T, isFocusVisible: S } = (0, s.Fx)(),
        A = eC({
            className: e.className,
            style: e.style,
            defaultClassName: 'react-aria-Table',
            values: {
                isDropTarget: v,
                isFocused: T,
                isFocusVisible: S
            }
        }),
        { selectionBehavior: C, selectionMode: N, disallowEmptySelection: R } = c.selectionManager,
        O = (0, U.useMemo)(
            () => ({
                selectionBehavior: 'none' === N ? null : C,
                selectionMode: N,
                disallowEmptySelection: R,
                allowsDragging: h
            }),
            [C, N, R, h]
        );
    return U.createElement(
        U.Fragment,
        null,
        U.createElement(
            eA,
            {
                values: [
                    [
                        t$,
                        {
                            state: c,
                            dragAndDropHooks: f,
                            dragState: r,
                            dropState: i
                        }
                    ],
                    [e1, { render: nu }]
                ]
            },
            U.createElement(
                s.MT,
                null,
                U.createElement(
                    'table',
                    {
                        ...(0, k.zL)(e),
                        ...A,
                        ...(0, l.dG)(d, I, null == a ? void 0 : a.collectionProps),
                        ref: n,
                        slot: e.slot,
                        'data-drop-target': v || void 0,
                        'data-focused': T || void 0,
                        'data-focus-visible': S || void 0
                    },
                    U.createElement(nr, { collection: u }),
                    U.createElement(ni, {
                        collection: u,
                        isDroppable: _
                    })
                )
            ),
            y
        ),
        U.createElement(t2.Provider, { value: O }, o)
    );
}
let t1 = (0, U.forwardRef)(t0),
    t2 = (0, U.createContext)(null);
function t3(e, n) {
    let r = eh({
            children: e.children,
            items: e.columns
        }),
        i = 'function' == typeof e.children ? e.children : null;
    return U.createElement(eI.Provider, { value: i }, U.createElement('tableheader', { ref: eE(e, n) }, r));
}
let t4 = (0, U.forwardRef)(t3);
function t6(e, n) {
    var r;
    let i = (0, U.useContext)(eI),
        a = 'function' == typeof i ? i : e.children,
        o = eh({
            children: e.title || e.childColumns ? a : null,
            items: e.childColumns
        });
    return U.createElement('column', { ref: eE(e, n, null !== (r = e.title) && void 0 !== r ? r : e.children) }, o);
}
let t5 = (0, U.forwardRef)(t6);
function t7(e, n) {
    let r = eh(e);
    return U.createElement('tablebody', { ref: eE(e, n) }, r);
}
let t8 = (0, U.forwardRef)(t7);
function t9(e, n) {
    let r = eh({
            children: e.children,
            items: e.columns,
            idScope: e.id
        }),
        i = (0, U.useMemo)(() => ({ idScope: e.id }), [e.id]);
    return U.createElement('item', { ref: eE(e, n) }, U.createElement(eb.Provider, { value: i }, r));
}
let ne = (0, U.forwardRef)(t9);
function nt(e, n) {
    return U.createElement('cell', { ref: eE(e, n, e.children) });
}
let nn = (0, U.forwardRef)(nt);
function nr({ collection: e }) {
    var n;
    let r = ep({
            items: e.headerRows,
            children: (0, U.useCallback)((e) => {
                if ('headerrow' === e.type) return U.createElement(na, { item: e });
                throw Error('Unsupported node type in TableHeader: ' + e.type);
            }, [])
        }),
        { rowGroupProps: i } = (0, x.LA)();
    return U.createElement(
        'thead',
        {
            ...(0, k.zL)(e.head.props),
            ...i,
            ref: e.head.props.ref,
            className: null !== (n = e.head.props.className) && void 0 !== n ? n : 'react-aria-TableHeader',
            style: e.head.props.style
        },
        r
    );
}
function ni({ collection: e, isDroppable: n }) {
    let r,
        i = ep({
            items: e.rows,
            children: (0, U.useCallback)((e) => {
                if ('item' === e.type) return U.createElement(ns, { item: e });
                throw Error('Unsupported node type in TableBody: ' + e.type);
            }, [])
        }),
        a = e.body.props,
        o = eC({
            ...a,
            id: void 0,
            children: void 0,
            defaultClassName: 'react-aria-TableBody',
            values: { isEmpty: 0 === e.size }
        });
    0 === e.size &&
        a.renderEmptyState &&
        (r = U.createElement(
            'tr',
            { role: 'row' },
            U.createElement(
                'td',
                {
                    role: 'gridcell',
                    colSpan: e.columnCount
                },
                a.renderEmptyState()
            )
        ));
    let { rowGroupProps: s } = (0, x.LA)();
    return U.createElement(
        'tbody',
        {
            ...(0, l.dG)((0, k.zL)(a), s),
            ...o,
            ref: e.body.props.ref,
            'data-empty': 0 === e.size || void 0
        },
        n && U.createElement(nf, null),
        i,
        r
    );
}
function na({ item: e }) {
    let n = (0, U.useRef)(null),
        { state: r } = (0, U.useContext)(t$),
        { rowProps: i } = (0, x.Qm)({ node: e }, r, n),
        { checkboxProps: a } = (0, x.jp)(r),
        o = ep({
            items: r.collection.getChildren(e.key),
            children: (e) => {
                if ('column' === e.type) return U.createElement(no, { column: e });
                throw Error('Unsupported node type in Row: ' + e.type);
            }
        });
    return U.createElement(
        'tr',
        {
            ...i,
            ref: n
        },
        U.createElement(
            eA,
            {
                values: [[e$, { slots: { selection: a } }]]
            },
            o
        )
    );
}
function no({ column: e }) {
    var n;
    let r = (0, k.B3)(e.props.ref),
        { state: i } = (0, U.useContext)(t$),
        { columnHeaderProps: a } = (0, x.WY)({ node: e }, i, r),
        { isFocused: o, isFocusVisible: u, focusProps: c } = (0, s.Fx)(),
        d = e.props,
        f = eC({
            ...d,
            id: void 0,
            children: e.rendered,
            defaultClassName: 'react-aria-Column',
            values: {
                isFocused: o,
                isFocusVisible: u,
                allowsSorting: e.props.allowsSorting,
                sortDirection: (null === (n = i.sortDescriptor) || void 0 === n ? void 0 : n.column) === e.key ? i.sortDescriptor.direction : void 0
            }
        });
    return U.createElement(
        'th',
        {
            ...(0, l.dG)((0, k.zL)(d), a, c),
            ...f,
            colSpan: e.colspan,
            ref: r,
            'data-focused': o || void 0,
            'data-focus-visible': u || void 0
        },
        f.children
    );
}
function ns({ item: e }) {
    let n,
        r,
        i = (0, k.B3)(e.props.ref),
        { state: a, dragAndDropHooks: u, dragState: c, dropState: d } = (0, U.useContext)(t$),
        { rowProps: f, ...h } = (0, x.U)(
            {
                node: e,
                shouldSelectOnPressUp: !!c
            },
            a,
            i
        ),
        { isFocused: _, isFocusVisible: m, focusProps: g } = (0, s.Fx)(),
        { hoverProps: E, isHovered: v } = (0, o.XI)({ isDisabled: !h.allowsSelection && !h.hasAction }),
        { checkboxProps: y } = (0, x.M$)({ key: e.key }, a);
    c &&
        u &&
        (n = u.useDraggableItem(
            {
                key: e.key,
                hasDragButton: !0
            },
            c
        ));
    let b = (0, U.useRef)(null),
        { visuallyHiddenProps: I } = (0, p.S)();
    d &&
        u &&
        (r = u.useDropIndicator(
            {
                target: {
                    type: 'item',
                    key: e.key,
                    dropPosition: 'on'
                }
            },
            d,
            b
        ));
    let T = (null == u ? void 0 : u.renderDropIndicator) || ((e) => U.createElement(e3, { target: e })),
        S = (0, U.useRef)(null);
    (0, U.useEffect)(() => {
        c && !S.current && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
    }, []);
    let A = e.props,
        C = c && c.isDragging(e.key),
        N = eC({
            ...A,
            id: void 0,
            defaultClassName: 'react-aria-Row',
            values: {
                ...h,
                isHovered: v,
                isFocused: _,
                isFocusVisible: m,
                selectionMode: a.selectionManager.selectionMode,
                selectionBehavior: a.selectionManager.selectionBehavior,
                isDragging: C,
                isDropTarget: null == r ? void 0 : r.isDropTarget
            }
        }),
        R = ep({
            items: a.collection.getChildren(e.key),
            children: (e) => {
                if ('cell' === e.type) return U.createElement(nl, { cell: e });
                throw Error('Unsupported node type in Row: ' + e.type);
            }
        });
    return U.createElement(
        U.Fragment,
        null,
        (null == u ? void 0 : u.useDropIndicator) &&
            T({
                type: 'item',
                key: e.key,
                dropPosition: 'before'
            }),
        r &&
            !r.isHidden &&
            U.createElement(
                'tr',
                {
                    role: 'row',
                    style: { height: 0 }
                },
                U.createElement(
                    'td',
                    {
                        role: 'gridcell',
                        colSpan: a.collection.columnCount,
                        style: { padding: 0 }
                    },
                    U.createElement('div', {
                        role: 'button',
                        ...I,
                        ...r.dropIndicatorProps,
                        ref: b
                    })
                )
            ),
        U.createElement(
            'tr',
            {
                ...(0, l.dG)((0, k.zL)(A), f, g, E, null == n ? void 0 : n.dragProps),
                ...N,
                ref: i,
                'data-hovered': v || void 0,
                'data-focused': h.isFocused || void 0,
                'data-focus-visible': m || void 0,
                'data-pressed': h.isPressed || void 0,
                'data-dragging': C || void 0,
                'data-drop-target': (null == r ? void 0 : r.isDropTarget) || void 0
            },
            U.createElement(
                eA,
                {
                    values: [
                        [e$, { slots: { selection: y } }],
                        [
                            eB,
                            {
                                slots: {
                                    [eS]: {},
                                    drag: {
                                        ...(null == n ? void 0 : n.dragButtonProps),
                                        ref: S,
                                        style: { pointerEvents: 'none' }
                                    }
                                }
                            }
                        ]
                    ]
                },
                R
            )
        ),
        (null == u ? void 0 : u.useDropIndicator) &&
            null == a.collection.getKeyAfter(e.key) &&
            T({
                type: 'item',
                key: e.key,
                dropPosition: 'after'
            })
    );
}
function nl({ cell: e }) {
    let n = (0, k.B3)(e.props.ref),
        { state: r, dragState: i } = (0, U.useContext)(t$);
    e.column = r.collection.columns[e.index];
    let { gridCellProps: a, isPressed: o } = (0, x.fs)(
            {
                node: e,
                shouldSelectOnPressUp: !!i
            },
            r,
            n
        ),
        { isFocused: u, isFocusVisible: c, focusProps: d } = (0, s.Fx)(),
        f = e.props,
        p = eC({
            ...f,
            id: void 0,
            defaultClassName: 'react-aria-Cell',
            values: {
                isFocused: u,
                isFocusVisible: c,
                isPressed: o
            }
        });
    return U.createElement(
        'td',
        {
            ...(0, l.dG)((0, k.zL)(f), a, d),
            ...p,
            ref: n,
            'data-focused': u || void 0,
            'data-focus-visible': c || void 0,
            'data-pressed': o || void 0
        },
        p.children
    );
}
function nu(e, n) {
    n = (0, k.B3)(n);
    let { dragAndDropHooks: r, dropState: i } = (0, U.useContext)(t$),
        a = (0, U.useRef)(null),
        { dropIndicatorProps: o, isHidden: s, isDropTarget: l } = r.useDropIndicator(e, i, a);
    return s
        ? null
        : U.createElement(nd, {
              ...e,
              dropIndicatorProps: o,
              isDropTarget: l,
              buttonRef: a,
              ref: n
          });
}
function nc(e, n) {
    let { dropIndicatorProps: r, isDropTarget: i, buttonRef: a, ...o } = e,
        { state: s } = (0, U.useContext)(t$),
        { visuallyHiddenProps: l } = (0, p.S)(),
        u = eC({
            ...o,
            defaultClassName: 'react-aria-DropIndicator',
            values: { isDropTarget: i }
        });
    return U.createElement(
        'tr',
        {
            ...(0, k.zL)(e),
            ...u,
            role: 'row',
            ref: n,
            'data-drop-target': i || void 0
        },
        U.createElement(
            'td',
            {
                role: 'gridcell',
                colSpan: s.collection.columnCount,
                style: { padding: 0 }
            },
            U.createElement('div', {
                ...l,
                role: 'button',
                ...r,
                ref: a
            })
        )
    );
}
let nd = (0, U.forwardRef)(nc);
function nf() {
    let { state: e, dragAndDropHooks: n, dropState: r } = (0, U.useContext)(t$),
        i = (0, U.useRef)(null),
        { dropIndicatorProps: a } = n.useDropIndicator({ target: { type: 'root' } }, r, i),
        o = r.isDropTarget({ type: 'root' }),
        { visuallyHiddenProps: s } = (0, p.S)();
    return !o && a['aria-hidden']
        ? null
        : U.createElement(
              'tr',
              {
                  role: 'row',
                  'aria-hidden': a['aria-hidden'],
                  style: { height: 0 }
              },
              U.createElement(
                  'td',
                  {
                      role: 'gridcell',
                      colSpan: e.collection.columnCount,
                      style: { padding: 0 }
                  },
                  U.createElement('div', {
                      role: 'button',
                      ...s,
                      ...a,
                      ref: i
                  })
              )
          );
}
let np = (0, U.createContext)(null),
    nh = (0, U.createContext)(null);
function n_({ item: e, state: n }) {
    let { key: r } = e,
        i = (0, k.B3)(e.props.ref),
        { tabProps: a, isSelected: u, isDisabled: c, isPressed: d } = (0, w.xD)({ key: r }, n, i),
        { focusProps: f, isFocused: p, isFocusVisible: h } = (0, s.Fx)(),
        { hoverProps: _, isHovered: m } = (0, o.XI)({ isDisabled: c }),
        g = eC({
            ...e.props,
            children: e.rendered,
            defaultClassName: 'react-aria-Tab',
            values: {
                isSelected: u,
                isDisabled: c,
                isFocused: p,
                isFocusVisible: h,
                isPressed: d,
                isHovered: m
            }
        }),
        E = (0, k.zL)(e.props);
    return (
        delete E.id,
        U.createElement('div', {
            ...(0, l.dG)(E, a, f, _, g),
            ref: i,
            'data-focus-visible': h || void 0,
            'data-pressed': d || void 0,
            'data-hovered': m || void 0
        })
    );
}
function nm({ item: e }) {
    let { state: n } = $dGqE5$useContext(nh),
        r = $dGqE5$useObjectRef(e.props.ref),
        { tabPanelProps: i } = $dGqE5$useTabPanel(e.props, n, r),
        { focusProps: a, isFocused: o, isFocusVisible: s } = $dGqE5$useFocusRing(),
        l = eC({
            ...e.props,
            children: e.rendered,
            defaultClassName: 'react-aria-TabPanel',
            values: {
                isFocused: o,
                isFocusVisible: s
            }
        }),
        u = $dGqE5$filterDOMProps(e.props);
    return (
        delete u.id,
        $dGqE5$react.createElement('div', {
            ...$dGqE5$mergeProps(u, i, a, l),
            ref: r,
            'data-focus-visible': s || void 0
        })
    );
}
let ng = (0, U.createContext)(null),
    nE = (0, U.createContext)({}),
    nv = (0, U.createContext)(null);
function ny(e) {
    let { state: n, triggerRef: r, tooltipProps: i } = (0, U.useContext)(nv),
        a = (0, U.useRef)(null),
        {
            overlayProps: o,
            arrowProps: s,
            placement: u
        } = (0, E.tN)({
            placement: e.placement || 'top',
            targetRef: r,
            overlayRef: a,
            offset: e.offset,
            crossOffset: e.crossOffset,
            isOpen: n.isOpen
        }),
        c = eO(a, !!u),
        d = eC({
            ...e,
            defaultClassName: 'react-aria-Tooltip',
            values: {
                placement: u,
                isEntering: c,
                isExiting: e.isExiting
            }
        });
    e = (0, l.dG)(e, o);
    let { tooltipProps: f } = (0, M.l)(e, n);
    return U.createElement(
        'div',
        {
            ...(0, l.dG)(i, f),
            ref: (0, k.lq)(a, e.tooltipRef),
            ...d,
            style: {
                ...d.style,
                ...o.style
            },
            'data-placement': u,
            'data-entering': c || void 0,
            'data-exiting': e.isExiting || void 0
        },
        U.createElement(
            tu.Provider,
            {
                value: {
                    arrowProps: s,
                    placement: u
                }
            },
            d.children
        )
    );
}
