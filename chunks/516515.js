r.d(n, {
    hp: function () {
        return f;
    },
    xD: function () {
        return c;
    }
});
var i = r(661763),
    a = r(766203),
    o = r(192379),
    s = r(649859);
let l = new WeakMap();
function u(e, n, r) {
    'string' == typeof n && (n = n.replace(/\s+/g, ''));
    let i = l.get(e);
    return `${i}-${r}-${n}`;
}
function c(e, n, r) {
    var o;
    let { key: s, isDisabled: l, shouldSelectOnPressUp: c } = e,
        { selectionManager: d, selectedKey: f } = n,
        p = s === f,
        h = l || n.isDisabled || n.disabledKeys.has(s),
        { itemProps: _, isPressed: m } = (0, a.Cs)({
            selectionManager: d,
            key: s,
            ref: r,
            isDisabled: h,
            shouldSelectOnPressUp: c,
            linkBehavior: 'selection'
        }),
        g = u(n, s, 'tab'),
        E = u(n, s, 'tabpanel'),
        { tabIndex: v } = _,
        y = n.collection.getItem(s),
        b = (0, i.zL)(null == y ? void 0 : y.props, {
            isLink: !!(null == y ? void 0 : null === (o = y.props) || void 0 === o ? void 0 : o.href),
            labelable: !0
        });
    return (
        delete b.id,
        {
            tabProps: (0, i.dG)(b, _, {
                id: g,
                'aria-selected': p,
                'aria-disabled': h || void 0,
                'aria-controls': p ? E : void 0,
                tabIndex: h ? void 0 : v,
                role: 'tab'
            }),
            isSelected: p,
            isDisabled: h,
            isPressed: m
        }
    );
}
class d {
    getKeyLeftOf(e) {
        return this.flipDirection ? this.getNextKey(e) : this.getPreviousKey(e);
    }
    getKeyRightOf(e) {
        return this.flipDirection ? this.getPreviousKey(e) : this.getNextKey(e);
    }
    getKeyAbove(e) {
        return this.getPreviousKey(e);
    }
    getKeyBelow(e) {
        return this.getNextKey(e);
    }
    getFirstKey() {
        let e = this.collection.getFirstKey();
        return null != e && this.disabledKeys.has(e) && (e = this.getNextKey(e)), e;
    }
    getLastKey() {
        let e = this.collection.getLastKey();
        return null != e && this.disabledKeys.has(e) && (e = this.getPreviousKey(e)), e;
    }
    getNextKey(e) {
        do null == (e = this.collection.getKeyAfter(e)) && (e = this.collection.getFirstKey());
        while (this.disabledKeys.has(e));
        return e;
    }
    getPreviousKey(e) {
        do null == (e = this.collection.getKeyBefore(e)) && (e = this.collection.getLastKey());
        while (this.disabledKeys.has(e));
        return e;
    }
    constructor(e, n, r, i = new Set()) {
        (this.collection = e), (this.flipDirection = 'rtl' === n && 'horizontal' === r), (this.disabledKeys = i);
    }
}
function f(e, n, r) {
    let { orientation: u = 'horizontal', keyboardActivation: c = 'automatic' } = e,
        { collection: f, selectionManager: p, disabledKeys: h } = n,
        { direction: _ } = (0, s.bU)(),
        m = (0, o.useMemo)(() => new d(f, _, u, h), [f, h, u, _]),
        { collectionProps: g } = (0, a.gq)({
            ref: r,
            selectionManager: p,
            keyboardDelegate: m,
            selectOnFocus: 'automatic' === c,
            disallowEmptySelection: !0,
            scrollRef: r,
            linkBehavior: 'selection'
        }),
        E = (0, i.Me)();
    l.set(n, E);
    let v = (0, i.bE)({
        ...e,
        id: E
    });
    return {
        tabListProps: {
            ...(0, i.dG)(g, v),
            role: 'tablist',
            'aria-orientation': u,
            tabIndex: void 0
        }
    };
}
