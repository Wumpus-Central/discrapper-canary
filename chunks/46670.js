r.d(n, {
    Fv: function () {
        return p;
    },
    Oj: function () {
        return u;
    },
    TV: function () {
        return h;
    },
    co: function () {
        return f;
    },
    x3: function () {
        return d;
    }
});
var i = r(661763),
    a = r(921336),
    o = r(523603),
    s = r(766203),
    l = r(989103);
let u = new WeakMap();
function c(e) {
    return 'string' == typeof e ? e.replace(/\s*/g, '') : '' + e;
}
function d(e, n) {
    let r = u.get(e);
    if (!r) throw Error('Unknown list');
    return `${r.id}-option-${c(n)}`;
}
function f(e, n, r) {
    let l = (0, i.zL)(e, { labelable: !0 }),
        c = e.selectionBehavior || 'toggle',
        d = e.linkBehavior || ('replace' === c ? 'action' : 'override');
    'toggle' === c && 'action' === d && (d = 'override');
    let { listProps: f } = (0, s._t)({
            ...e,
            ref: r,
            selectionManager: n.selectionManager,
            collection: n.collection,
            disabledKeys: n.disabledKeys,
            linkBehavior: d
        }),
        { focusWithinProps: p } = (0, a.L_)({
            onFocusWithin: e.onFocus,
            onBlurWithin: e.onBlur,
            onFocusWithinChange: e.onFocusChange
        }),
        h = (0, i.Me)(e.id);
    u.set(n, {
        id: h,
        shouldUseVirtualFocus: e.shouldUseVirtualFocus,
        shouldSelectOnPressUp: e.shouldSelectOnPressUp,
        shouldFocusOnHover: e.shouldFocusOnHover,
        isVirtualized: e.isVirtualized,
        onAction: e.onAction,
        linkBehavior: d
    });
    let { labelProps: _, fieldProps: m } = (0, o.N)({
        ...e,
        id: h,
        labelElementType: 'span'
    });
    return {
        labelProps: _,
        listBoxProps: (0, i.dG)(l, p, 'multiple' === n.selectionManager.selectionMode ? { 'aria-multiselectable': 'true' } : {}, {
            role: 'listbox',
            ...(0, i.dG)(m, f)
        })
    };
}
function p(e, n, r) {
    var o, c, f, p, h, _, m;
    let { key: g } = e,
        E = u.get(n),
        v = null !== (c = e.isDisabled) && void 0 !== c ? c : n.disabledKeys.has(g),
        y = null !== (f = e.isSelected) && void 0 !== f ? f : n.selectionManager.isSelected(g),
        b = null !== (p = e.shouldSelectOnPressUp) && void 0 !== p ? p : null == E ? void 0 : E.shouldSelectOnPressUp,
        I = null !== (h = e.shouldFocusOnHover) && void 0 !== h ? h : null == E ? void 0 : E.shouldFocusOnHover,
        T = null !== (_ = e.shouldUseVirtualFocus) && void 0 !== _ ? _ : null == E ? void 0 : E.shouldUseVirtualFocus,
        S = null !== (m = e.isVirtualized) && void 0 !== m ? m : null == E ? void 0 : E.isVirtualized,
        A = (0, i.mp)(),
        C = (0, i.mp)(),
        N = {
            role: 'option',
            'aria-disabled': v || void 0,
            'aria-selected': 'none' !== n.selectionManager.selectionMode ? y : void 0
        };
    !((0, i.V5)() && (0, i.Pf)()) && ((N['aria-label'] = e['aria-label']), (N['aria-labelledby'] = A), (N['aria-describedby'] = C));
    let R = n.collection.getItem(g);
    if (S) {
        let e = Number(null == R ? void 0 : R.index);
        (N['aria-posinset'] = Number.isNaN(e) ? void 0 : e + 1), (N['aria-setsize'] = (0, l.is)(n.collection));
    }
    let {
            itemProps: O,
            isPressed: D,
            isFocused: L,
            hasAction: x,
            allowsSelection: w
        } = (0, s.Cs)({
            selectionManager: n.selectionManager,
            key: g,
            ref: r,
            shouldSelectOnPressUp: b,
            allowsDifferentPressOrigin: b && I,
            isVirtualized: S,
            shouldUseVirtualFocus: T,
            isDisabled: v,
            onAction: (null == E ? void 0 : E.onAction)
                ? () => {
                      var e;
                      return null == E ? void 0 : null === (e = E.onAction) || void 0 === e ? void 0 : e.call(E, g);
                  }
                : void 0,
            linkBehavior: null == E ? void 0 : E.linkBehavior
        }),
        { hoverProps: P } = (0, a.XI)({
            isDisabled: v || !I,
            onHoverStart() {
                !(0, a.E)() && (n.selectionManager.setFocused(!0), n.selectionManager.setFocusedKey(g));
            }
        }),
        M = (0, i.zL)(null == R ? void 0 : R.props, { isLink: !!(null == R ? void 0 : null === (o = R.props) || void 0 === o ? void 0 : o.href) });
    return (
        delete M.id,
        {
            optionProps: {
                ...N,
                ...(0, i.dG)(M, O, P),
                id: d(n, g)
            },
            labelProps: { id: A },
            descriptionProps: { id: C },
            isFocused: L,
            isFocusVisible: L && (0, a.E)(),
            isSelected: y,
            isDisabled: v,
            isPressed: D,
            allowsSelection: w,
            hasAction: x
        }
    );
}
function h(e) {
    let { heading: n, 'aria-label': r } = e,
        a = (0, i.Me)();
    return {
        itemProps: { role: 'presentation' },
        headingProps: n
            ? {
                  id: a,
                  role: 'presentation'
              }
            : {},
        groupProps: {
            role: 'group',
            'aria-label': r,
            'aria-labelledby': n ? a : void 0
        }
    };
}
