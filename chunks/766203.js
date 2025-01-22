r.d(n, {
    Cs: function () {
        return m;
    },
    _t: function () {
        return y;
    },
    dp: function () {
        return v;
    },
    gq: function () {
        return _;
    },
    ip: function () {
        return p;
    }
});
var i = r(995295),
    a = r(192379),
    o = r(662845),
    s = r(661763),
    l = r(921336),
    u = r(649859);
function c(e) {
    return (0, s.ad)() ? e.altKey : e.ctrlKey;
}
function d(e) {
    return (0, s.V5)() ? e.metaKey : e.ctrlKey;
}
let f = 1000;
function p(e) {
    let { keyboardDelegate: n, selectionManager: r, onTypeSelect: i } = e,
        o = (0, a.useRef)({
            search: '',
            timeout: null
        }).current,
        s = (e) => {
            let a = h(e.key);
            if (!a || e.ctrlKey || e.metaKey || !e.currentTarget.contains(e.target)) return;
            ' ' === a && o.search.trim().length > 0 && (e.preventDefault(), !('continuePropagation' in e) && e.stopPropagation()), (o.search += a);
            let s = n.getKeyForSearch(o.search, r.focusedKey);
            null == s && (s = n.getKeyForSearch(o.search)),
                null != s && (r.setFocusedKey(s), i && i(s)),
                clearTimeout(o.timeout),
                (o.timeout = setTimeout(() => {
                    o.search = '';
                }, f));
        };
    return { typeSelectProps: { onKeyDownCapture: n.getKeyForSearch ? s : null } };
}
function h(e) {
    return 1 !== e.length && /^[A-Z]/i.test(e) ? '' : e;
}
function _(e) {
    let n,
        { selectionManager: r, keyboardDelegate: f, ref: h, autoFocus: _ = !1, shouldFocusWrap: m = !1, disallowEmptySelection: g = !1, disallowSelectAll: E = !1, selectOnFocus: v = 'replace' === r.selectionBehavior, disallowTypeAhead: y = !1, shouldUseVirtualFocus: b, allowsTabNavigation: I = !1, isVirtualized: T, scrollRef: S = h, linkBehavior: A = 'action' } = e,
        { direction: C } = (0, u.bU)(),
        N = (0, s.tv)(),
        R = (e) => {
            var n, a, l, u, p, _, y, b;
            if ((e.altKey && 'Tab' === e.key && e.preventDefault(), !h.current.contains(e.target))) return;
            let T = (n, a) => {
                if (null != n) {
                    if (r.isLink(n) && 'selection' === A && v && !c(e)) {
                        (0, i.flushSync)(() => {
                            r.setFocusedKey(n, a);
                        });
                        let o = S.current.querySelector(`[data-key="${CSS.escape(n.toString())}"]`);
                        N.open(o, e);
                        return;
                    }
                    r.setFocusedKey(n, a), (!r.isLink(n) || 'override' !== A) && (e.shiftKey && 'multiple' === r.selectionMode ? r.extendSelection(n) : v && !c(e) && r.replaceSelection(n));
                }
            };
            switch (e.key) {
                case 'ArrowDown':
                    if (f.getKeyBelow) {
                        e.preventDefault();
                        let i = null != r.focusedKey ? f.getKeyBelow(r.focusedKey) : null === (n = f.getFirstKey) || void 0 === n ? void 0 : n.call(f);
                        null == i && m && (i = null === (a = f.getFirstKey) || void 0 === a ? void 0 : a.call(f, r.focusedKey)), T(i);
                    }
                    break;
                case 'ArrowUp':
                    if (f.getKeyAbove) {
                        e.preventDefault();
                        let n = null != r.focusedKey ? f.getKeyAbove(r.focusedKey) : null === (l = f.getLastKey) || void 0 === l ? void 0 : l.call(f);
                        null == n && m && (n = null === (u = f.getLastKey) || void 0 === u ? void 0 : u.call(f, r.focusedKey)), T(n);
                    }
                    break;
                case 'ArrowLeft':
                    if (f.getKeyLeftOf) {
                        e.preventDefault();
                        let n = f.getKeyLeftOf(r.focusedKey);
                        null == n && m && (n = 'rtl' === C ? (null === (p = f.getFirstKey) || void 0 === p ? void 0 : p.call(f, r.focusedKey)) : null === (_ = f.getLastKey) || void 0 === _ ? void 0 : _.call(f, r.focusedKey)), T(n, 'rtl' === C ? 'first' : 'last');
                    }
                    break;
                case 'ArrowRight':
                    if (f.getKeyRightOf) {
                        e.preventDefault();
                        let n = f.getKeyRightOf(r.focusedKey);
                        null == n && m && (n = 'rtl' === C ? (null === (y = f.getLastKey) || void 0 === y ? void 0 : y.call(f, r.focusedKey)) : null === (b = f.getFirstKey) || void 0 === b ? void 0 : b.call(f, r.focusedKey)), T(n, 'rtl' === C ? 'last' : 'first');
                    }
                    break;
                case 'Home':
                    if (f.getFirstKey) {
                        e.preventDefault();
                        let n = f.getFirstKey(r.focusedKey, d(e));
                        r.setFocusedKey(n), d(e) && e.shiftKey && 'multiple' === r.selectionMode ? r.extendSelection(n) : v && r.replaceSelection(n);
                    }
                    break;
                case 'End':
                    if (f.getLastKey) {
                        e.preventDefault();
                        let n = f.getLastKey(r.focusedKey, d(e));
                        r.setFocusedKey(n), d(e) && e.shiftKey && 'multiple' === r.selectionMode ? r.extendSelection(n) : v && r.replaceSelection(n);
                    }
                    break;
                case 'PageDown':
                    f.getKeyPageBelow && (e.preventDefault(), T(f.getKeyPageBelow(r.focusedKey)));
                    break;
                case 'PageUp':
                    f.getKeyPageAbove && (e.preventDefault(), T(f.getKeyPageAbove(r.focusedKey)));
                    break;
                case 'a':
                    d(e) && 'multiple' === r.selectionMode && !0 !== E && (e.preventDefault(), r.selectAll());
                    break;
                case 'Escape':
                    e.preventDefault(), !g && r.clearSelection();
                    break;
                case 'Tab':
                    if (!I) {
                        if (e.shiftKey) h.current.focus();
                        else {
                            let e,
                                n,
                                r = (0, o.QL)(h.current, { tabbable: !0 });
                            do (n = r.lastChild()) && (e = n);
                            while (n);
                            e && !e.contains(document.activeElement) && (0, s.Ao)(e);
                        }
                    }
            }
        },
        O = (0, a.useRef)({
            top: 0,
            left: 0
        });
    (0, s.zX)(
        S,
        'scroll',
        T
            ? null
            : () => {
                  O.current = {
                      top: S.current.scrollTop,
                      left: S.current.scrollLeft
                  };
              }
    );
    let D = (e) => {
            if (r.isFocused) {
                !e.currentTarget.contains(e.target) && r.setFocused(!1);
                return;
            }
            if (e.currentTarget.contains(e.target)) {
                if ((r.setFocused(!0), null == r.focusedKey)) {
                    var n, i;
                    let a = (e) => {
                            null != e && (r.setFocusedKey(e), v && r.replaceSelection(e));
                        },
                        o = e.relatedTarget;
                    o && e.currentTarget.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING ? a(null !== (n = r.lastSelectedKey) && void 0 !== n ? n : f.getLastKey()) : a(null !== (i = r.firstSelectedKey) && void 0 !== i ? i : f.getFirstKey());
                } else !T && ((S.current.scrollTop = O.current.top), (S.current.scrollLeft = O.current.left));
                if (!T && null != r.focusedKey) {
                    let e = S.current.querySelector(`[data-key="${CSS.escape(r.focusedKey.toString())}"]`);
                    e && (!e.contains(document.activeElement) && (0, s.Ao)(e), 'keyboard' === (0, l.Jz)() && (0, s.Gt)(e, { containingElement: h.current }));
                }
            }
        },
        x = (e) => {
            !e.currentTarget.contains(e.relatedTarget) && r.setFocused(!1);
        },
        L = (0, a.useRef)(_);
    (0, a.useEffect)(() => {
        if (L.current) {
            let e = null;
            'first' === _ && (e = f.getFirstKey()), 'last' === _ && (e = f.getLastKey());
            let n = r.selectedKeys;
            if (n.size) {
                for (let i of n)
                    if (r.canSelectItem(i)) {
                        e = i;
                        break;
                    }
            }
            r.setFocused(!0), r.setFocusedKey(e), null == e && !b && (0, o.ex)(h.current);
        }
    }, []);
    let w = (0, a.useRef)(r.focusedKey);
    (0, a.useEffect)(() => {
        let e = (0, l.Jz)();
        if (r.isFocused && null != r.focusedKey && (null == S ? void 0 : S.current)) {
            let n = S.current.querySelector(`[data-key="${CSS.escape(r.focusedKey.toString())}"]`);
            n && ('keyboard' === e || L.current) && (!T && (0, s.zT)(S.current, n), (0, s.Gt)(n, { containingElement: h.current }));
        }
        r.isFocused && null == r.focusedKey && null != w.current && (0, o.ex)(h.current), (w.current = r.focusedKey), (L.current = !1);
    }, [T, S, r.focusedKey, r.isFocused, h]);
    let P = {
            onKeyDown: R,
            onFocus: D,
            onBlur: x,
            onMouseDown(e) {
                S.current === e.target && e.preventDefault();
            }
        },
        { typeSelectProps: M } = p({
            keyboardDelegate: f,
            selectionManager: r
        });
    return (
        !y && (P = (0, s.dG)(M, P)),
        !b && (n = null == r.focusedKey ? 0 : -1),
        {
            collectionProps: {
                ...P,
                tabIndex: n
            }
        }
    );
}
function m(e) {
    let { selectionManager: n, key: r, ref: i, shouldSelectOnPressUp: u, shouldUseVirtualFocus: f, focus: p, isDisabled: h, onAction: _, allowsDifferentPressOrigin: m, linkBehavior: v = 'action' } = e,
        y = (0, s.tv)(),
        b = (e) => {
            if ('keyboard' === e.pointerType && c(e)) n.toggleSelection(r);
            else {
                if ('none' === n.selectionMode) return;
                if (n.isLink(r)) {
                    if ('selection' === v) {
                        y.open(i.current, e), n.setSelectedKeys(n.selectedKeys);
                        return;
                    }
                    if ('override' === v || 'none' === v) return;
                }
                'single' === n.selectionMode ? (n.isSelected(r) && !n.disallowEmptySelection ? n.toggleSelection(r) : n.replaceSelection(r)) : e && e.shiftKey ? n.extendSelection(r) : 'toggle' === n.selectionBehavior || (e && (d(e) || 'touch' === e.pointerType || 'virtual' === e.pointerType)) ? n.toggleSelection(r) : n.replaceSelection(r);
            }
        };
    (0, a.useEffect)(() => {
        r === n.focusedKey && n.isFocused && !f && (p ? p() : document.activeElement !== i.current && (0, o.ex)(i.current));
    }, [i, r, n.focusedKey, n.childFocusStrategy, n.isFocused, f]),
        (h = h || n.isDisabled(r));
    let I = {};
    f || h
        ? h &&
          (I.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (I = {
              tabIndex: r === n.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === i.current && n.setFocusedKey(r);
              }
          });
    let T = n.isLink(r) && 'override' === v,
        S = n.isLink(r) && 'selection' !== v && 'none' !== v,
        A = !h && n.canSelectItem(r) && !T,
        C = (_ || S) && !h,
        N = C && ('replace' === n.selectionBehavior ? !A : !A || n.isEmpty),
        R = C && A && 'replace' === n.selectionBehavior,
        O = N || R,
        D = (0, a.useRef)(null),
        x = O && A,
        L = (0, a.useRef)(!1),
        w = (0, a.useRef)(!1),
        P = (e) => {
            _ && _(), S && y.open(i.current, e);
        },
        M = {};
    u
        ? ((M.onPressStart = (e) => {
              (D.current = e.pointerType), (L.current = x), 'keyboard' === e.pointerType && (!O || E()) && b(e);
          }),
          m
              ? ((M.onPressUp = N
                    ? null
                    : (e) => {
                          'keyboard' !== e.pointerType && A && b(e);
                      }),
                (M.onPress = N ? P : null))
              : (M.onPress = (e) => {
                    N || (R && 'mouse' !== e.pointerType) ? ('keyboard' !== e.pointerType || !!g()) && P(e) : 'keyboard' !== e.pointerType && A && b(e);
                }))
        : ((M.onPressStart = (e) => {
              (D.current = e.pointerType), (L.current = x), (w.current = N), A && (('mouse' === e.pointerType && !N) || ('keyboard' === e.pointerType && (!C || E()))) && b(e);
          }),
          (M.onPress = (e) => {
              ('touch' === e.pointerType || 'pen' === e.pointerType || 'virtual' === e.pointerType || ('keyboard' === e.pointerType && O && g()) || ('mouse' === e.pointerType && w.current)) && (O ? P(e) : A && b(e));
          })),
        (I['data-key'] = r),
        (M.preventFocusOnPress = f);
    let { pressProps: k, isPressed: U } = (0, l.r7)(M),
        B = R
            ? (e) => {
                  'mouse' === D.current && (e.stopPropagation(), e.preventDefault(), P(e));
              }
            : void 0,
        { longPressProps: G } = (0, l.TA)({
            isDisabled: !x,
            onLongPress(e) {
                'touch' === e.pointerType && (b(e), n.setSelectionBehavior('toggle'));
            }
        }),
        Z = (e) => {
            'touch' === D.current && L.current && e.preventDefault();
        },
        F = n.isLink(r)
            ? (e) => {
                  !s.nG.isOpening && e.preventDefault();
              }
            : void 0;
    return {
        itemProps: (0, s.dG)(I, A || N ? k : {}, x ? G : {}, {
            onDoubleClick: B,
            onDragStartCapture: Z,
            onClick: F
        }),
        isPressed: U,
        isSelected: n.isSelected(r),
        isFocused: n.isFocused && n.focusedKey === r,
        isDisabled: h,
        allowsSelection: A,
        hasAction: O
    };
}
function g() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === 'Enter';
}
function E() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === ' ' || (null == e ? void 0 : e.code) === 'Space';
}
class v {
    getNextKey(e) {
        for (e = this.collection.getKeyAfter(e); null != e; ) {
            if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
            e = this.collection.getKeyAfter(e);
        }
        return null;
    }
    getPreviousKey(e) {
        for (e = this.collection.getKeyBefore(e); null != e; ) {
            if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
            e = this.collection.getKeyBefore(e);
        }
        return null;
    }
    findKey(e, n, r) {
        let i = this.getItem(e);
        if (!i) return null;
        let a = i.getBoundingClientRect();
        do (e = n(e)), (i = this.getItem(e));
        while (i && r(a, i.getBoundingClientRect()));
        return e;
    }
    isSameRow(e, n) {
        return e.top === n.top || e.left !== n.left;
    }
    isSameColumn(e, n) {
        return e.left === n.left || e.top !== n.top;
    }
    getKeyBelow(e) {
        return 'grid' === this.layout && 'vertical' === this.orientation ? this.findKey(e, (e) => this.getNextKey(e), this.isSameRow) : this.getNextKey(e);
    }
    getKeyAbove(e) {
        return 'grid' === this.layout && 'vertical' === this.orientation ? this.findKey(e, (e) => this.getPreviousKey(e), this.isSameRow) : this.getPreviousKey(e);
    }
    getNextColumn(e, n) {
        return n ? this.getPreviousKey(e) : this.getNextKey(e);
    }
    getKeyRightOf(e) {
        if ('grid' === this.layout) return 'vertical' === this.orientation ? this.getNextColumn(e, 'rtl' === this.direction) : this.findKey(e, (e) => this.getNextColumn(e, 'rtl' === this.direction), this.isSameColumn);
        return 'horizontal' === this.orientation ? this.getNextColumn(e, 'rtl' === this.direction) : null;
    }
    getKeyLeftOf(e) {
        if ('grid' === this.layout) return 'vertical' === this.orientation ? this.getNextColumn(e, 'ltr' === this.direction) : this.findKey(e, (e) => this.getNextColumn(e, 'ltr' === this.direction), this.isSameColumn);
        return 'horizontal' === this.orientation ? this.getNextColumn(e, 'ltr' === this.direction) : null;
    }
    getFirstKey() {
        let e = this.collection.getFirstKey();
        for (; null != e; ) {
            if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
            e = this.collection.getKeyAfter(e);
        }
        return null;
    }
    getLastKey() {
        let e = this.collection.getLastKey();
        for (; null != e; ) {
            if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
            e = this.collection.getKeyBefore(e);
        }
        return null;
    }
    getItem(e) {
        return this.ref.current.querySelector(`[data-key="${CSS.escape(e.toString())}"]`);
    }
    getKeyPageAbove(e) {
        let n = this.ref.current,
            r = this.getItem(e);
        if (!r) return null;
        if (!(0, s.a9)(n)) return this.getFirstKey();
        let i = n.getBoundingClientRect(),
            a = r.getBoundingClientRect();
        if ('horizontal' === this.orientation) {
            let o = i.x - n.scrollLeft,
                s = Math.max(0, a.x - o + a.width - i.width);
            for (; r && a.x - o > s; ) a = null == (r = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : r.getBoundingClientRect();
        } else {
            let o = i.y - n.scrollTop,
                s = Math.max(0, a.y - o + a.height - i.height);
            for (; r && a.y - o > s; ) a = null == (r = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : r.getBoundingClientRect();
        }
        return null != e ? e : this.getFirstKey();
    }
    getKeyPageBelow(e) {
        let n = this.ref.current,
            r = this.getItem(e);
        if (!r) return null;
        if (!(0, s.a9)(n)) return this.getLastKey();
        let i = n.getBoundingClientRect(),
            a = r.getBoundingClientRect();
        if ('horizontal' === this.orientation) {
            let o = i.x - n.scrollLeft,
                s = Math.min(n.scrollWidth, a.x - o - a.width + i.width);
            for (; r && a.x - o < s; ) a = null == (r = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : r.getBoundingClientRect();
        } else {
            let o = i.y - n.scrollTop,
                s = Math.min(n.scrollHeight, a.y - o - a.height + i.height);
            for (; r && a.y - o < s; ) a = null == (r = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : r.getBoundingClientRect();
        }
        return null != e ? e : this.getLastKey();
    }
    getKeyForSearch(e, n) {
        if (!this.collator) return null;
        let r = this.collection,
            i = n || this.getFirstKey();
        for (; null != i; ) {
            let n = r.getItem(i),
                a = n.textValue.slice(0, e.length);
            if (n.textValue && 0 === this.collator.compare(a, e)) return i;
            i = this.getKeyBelow(i);
        }
        return null;
    }
    constructor(...e) {
        if (1 === e.length) {
            let n = e[0];
            (this.collection = n.collection), (this.ref = n.ref), (this.collator = n.collator), (this.disabledKeys = n.disabledKeys || new Set()), (this.orientation = n.orientation), (this.direction = n.direction), (this.layout = n.layout || 'stack');
        } else (this.collection = e[0]), (this.disabledKeys = e[1]), (this.ref = e[2]), (this.collator = e[3]), (this.layout = 'stack'), (this.orientation = 'vertical');
        'stack' === this.layout && 'vertical' === this.orientation && ((this.getKeyLeftOf = void 0), (this.getKeyRightOf = void 0));
    }
}
function y(e) {
    let { selectionManager: n, collection: r, disabledKeys: i, ref: o, keyboardDelegate: s } = e,
        l = (0, u.Xe)({
            usage: 'search',
            sensitivity: 'base'
        }),
        c = n.disabledBehavior,
        d = (0, a.useMemo)(() => s || new v(r, 'selection' === c ? new Set() : i, o, l), [s, r, i, o, l, c]),
        { collectionProps: f } = _({
            ...e,
            ref: o,
            selectionManager: n,
            keyboardDelegate: d
        });
    return { listProps: f };
}
