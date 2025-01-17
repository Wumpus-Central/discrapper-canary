r.d(n, {
    Cs: function () {
        return m;
    },
    _t: function () {
        return I;
    },
    dp: function () {
        return v;
    },
    gq: function () {
        return p;
    },
    ip: function () {
        return _;
    }
});
var i = r(995295),
    a = r(192379),
    s = r(662845),
    o = r(661763),
    l = r(921336),
    u = r(649859);
function c(e) {
    return (0, o.ad)() ? e.altKey : e.ctrlKey;
}
function d(e) {
    return (0, o.V5)() ? e.metaKey : e.ctrlKey;
}
let f = 1000;
function _(e) {
    let { keyboardDelegate: n, selectionManager: r, onTypeSelect: i } = e,
        s = (0, a.useRef)({
            search: '',
            timeout: null
        }).current,
        o = (e) => {
            let a = h(e.key);
            if (!a || e.ctrlKey || e.metaKey || !e.currentTarget.contains(e.target)) return;
            ' ' === a && s.search.trim().length > 0 && (e.preventDefault(), !('continuePropagation' in e) && e.stopPropagation()), (s.search += a);
            let o = n.getKeyForSearch(s.search, r.focusedKey);
            null == o && (o = n.getKeyForSearch(s.search)),
                null != o && (r.setFocusedKey(o), i && i(o)),
                clearTimeout(s.timeout),
                (s.timeout = setTimeout(() => {
                    s.search = '';
                }, f));
        };
    return { typeSelectProps: { onKeyDownCapture: n.getKeyForSearch ? o : null } };
}
function h(e) {
    return 1 !== e.length && /^[A-Z]/i.test(e) ? '' : e;
}
function p(e) {
    let n,
        { selectionManager: r, keyboardDelegate: f, ref: h, autoFocus: p = !1, shouldFocusWrap: m = !1, disallowEmptySelection: g = !1, disallowSelectAll: E = !1, selectOnFocus: v = 'replace' === r.selectionBehavior, disallowTypeAhead: I = !1, shouldUseVirtualFocus: T, allowsTabNavigation: b = !1, isVirtualized: y, scrollRef: S = h, linkBehavior: A = 'action' } = e,
        { direction: N } = (0, u.bU)(),
        C = (0, o.tv)(),
        R = (e) => {
            var n, a, l, u, _, p, I, T;
            if ((e.altKey && 'Tab' === e.key && e.preventDefault(), !h.current.contains(e.target))) return;
            let y = (n, a) => {
                if (null != n) {
                    if (r.isLink(n) && 'selection' === A && v && !c(e)) {
                        (0, i.flushSync)(() => {
                            r.setFocusedKey(n, a);
                        });
                        let s = S.current.querySelector(`[data-key="${CSS.escape(n.toString())}"]`);
                        C.open(s, e);
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
                        null == i && m && (i = null === (a = f.getFirstKey) || void 0 === a ? void 0 : a.call(f, r.focusedKey)), y(i);
                    }
                    break;
                case 'ArrowUp':
                    if (f.getKeyAbove) {
                        e.preventDefault();
                        let n = null != r.focusedKey ? f.getKeyAbove(r.focusedKey) : null === (l = f.getLastKey) || void 0 === l ? void 0 : l.call(f);
                        null == n && m && (n = null === (u = f.getLastKey) || void 0 === u ? void 0 : u.call(f, r.focusedKey)), y(n);
                    }
                    break;
                case 'ArrowLeft':
                    if (f.getKeyLeftOf) {
                        e.preventDefault();
                        let n = f.getKeyLeftOf(r.focusedKey);
                        null == n && m && (n = 'rtl' === N ? (null === (_ = f.getFirstKey) || void 0 === _ ? void 0 : _.call(f, r.focusedKey)) : null === (p = f.getLastKey) || void 0 === p ? void 0 : p.call(f, r.focusedKey)), y(n, 'rtl' === N ? 'first' : 'last');
                    }
                    break;
                case 'ArrowRight':
                    if (f.getKeyRightOf) {
                        e.preventDefault();
                        let n = f.getKeyRightOf(r.focusedKey);
                        null == n && m && (n = 'rtl' === N ? (null === (I = f.getLastKey) || void 0 === I ? void 0 : I.call(f, r.focusedKey)) : null === (T = f.getFirstKey) || void 0 === T ? void 0 : T.call(f, r.focusedKey)), y(n, 'rtl' === N ? 'last' : 'first');
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
                    f.getKeyPageBelow && (e.preventDefault(), y(f.getKeyPageBelow(r.focusedKey)));
                    break;
                case 'PageUp':
                    f.getKeyPageAbove && (e.preventDefault(), y(f.getKeyPageAbove(r.focusedKey)));
                    break;
                case 'a':
                    d(e) && 'multiple' === r.selectionMode && !0 !== E && (e.preventDefault(), r.selectAll());
                    break;
                case 'Escape':
                    e.preventDefault(), !g && r.clearSelection();
                    break;
                case 'Tab':
                    if (!b) {
                        if (e.shiftKey) h.current.focus();
                        else {
                            let e,
                                n,
                                r = (0, s.QL)(h.current, { tabbable: !0 });
                            do (n = r.lastChild()) && (e = n);
                            while (n);
                            e && !e.contains(document.activeElement) && (0, o.Ao)(e);
                        }
                    }
            }
        },
        O = (0, a.useRef)({
            top: 0,
            left: 0
        });
    (0, o.zX)(
        S,
        'scroll',
        y
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
                        s = e.relatedTarget;
                    s && e.currentTarget.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING ? a(null !== (n = r.lastSelectedKey) && void 0 !== n ? n : f.getLastKey()) : a(null !== (i = r.firstSelectedKey) && void 0 !== i ? i : f.getFirstKey());
                } else !y && ((S.current.scrollTop = O.current.top), (S.current.scrollLeft = O.current.left));
                if (!y && null != r.focusedKey) {
                    let e = S.current.querySelector(`[data-key="${CSS.escape(r.focusedKey.toString())}"]`);
                    e && (!e.contains(document.activeElement) && (0, o.Ao)(e), 'keyboard' === (0, l.Jz)() && (0, o.Gt)(e, { containingElement: h.current }));
                }
            }
        },
        L = (e) => {
            !e.currentTarget.contains(e.relatedTarget) && r.setFocused(!1);
        },
        x = (0, a.useRef)(p);
    (0, a.useEffect)(() => {
        if (x.current) {
            let e = null;
            'first' === p && (e = f.getFirstKey()), 'last' === p && (e = f.getLastKey());
            let n = r.selectedKeys;
            if (n.size) {
                for (let i of n)
                    if (r.canSelectItem(i)) {
                        e = i;
                        break;
                    }
            }
            r.setFocused(!0), r.setFocusedKey(e), null == e && !T && (0, s.ex)(h.current);
        }
    }, []);
    let w = (0, a.useRef)(r.focusedKey);
    (0, a.useEffect)(() => {
        let e = (0, l.Jz)();
        if (r.isFocused && null != r.focusedKey && (null == S ? void 0 : S.current)) {
            let n = S.current.querySelector(`[data-key="${CSS.escape(r.focusedKey.toString())}"]`);
            n && ('keyboard' === e || x.current) && (!y && (0, o.zT)(S.current, n), (0, o.Gt)(n, { containingElement: h.current }));
        }
        r.isFocused && null == r.focusedKey && null != w.current && (0, s.ex)(h.current), (w.current = r.focusedKey), (x.current = !1);
    }, [y, S, r.focusedKey, r.isFocused, h]);
    let P = {
            onKeyDown: R,
            onFocus: D,
            onBlur: L,
            onMouseDown(e) {
                S.current === e.target && e.preventDefault();
            }
        },
        { typeSelectProps: M } = _({
            keyboardDelegate: f,
            selectionManager: r
        });
    return (
        !I && (P = (0, o.dG)(M, P)),
        !T && (n = null == r.focusedKey ? 0 : -1),
        {
            collectionProps: {
                ...P,
                tabIndex: n
            }
        }
    );
}
function m(e) {
    let { selectionManager: n, key: r, ref: i, shouldSelectOnPressUp: u, shouldUseVirtualFocus: f, focus: _, isDisabled: h, onAction: p, allowsDifferentPressOrigin: m, linkBehavior: v = 'action' } = e,
        I = (0, o.tv)(),
        T = (e) => {
            if ('keyboard' === e.pointerType && c(e)) n.toggleSelection(r);
            else {
                if ('none' === n.selectionMode) return;
                if (n.isLink(r)) {
                    if ('selection' === v) {
                        I.open(i.current, e), n.setSelectedKeys(n.selectedKeys);
                        return;
                    }
                    if ('override' === v || 'none' === v) return;
                }
                'single' === n.selectionMode ? (n.isSelected(r) && !n.disallowEmptySelection ? n.toggleSelection(r) : n.replaceSelection(r)) : e && e.shiftKey ? n.extendSelection(r) : 'toggle' === n.selectionBehavior || (e && (d(e) || 'touch' === e.pointerType || 'virtual' === e.pointerType)) ? n.toggleSelection(r) : n.replaceSelection(r);
            }
        };
    (0, a.useEffect)(() => {
        r === n.focusedKey && n.isFocused && !f && (_ ? _() : document.activeElement !== i.current && (0, s.ex)(i.current));
    }, [i, r, n.focusedKey, n.childFocusStrategy, n.isFocused, f]),
        (h = h || n.isDisabled(r));
    let b = {};
    f || h
        ? h &&
          (b.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (b = {
              tabIndex: r === n.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === i.current && n.setFocusedKey(r);
              }
          });
    let y = n.isLink(r) && 'override' === v,
        S = n.isLink(r) && 'selection' !== v && 'none' !== v,
        A = !h && n.canSelectItem(r) && !y,
        N = (p || S) && !h,
        C = N && ('replace' === n.selectionBehavior ? !A : !A || n.isEmpty),
        R = N && A && 'replace' === n.selectionBehavior,
        O = C || R,
        D = (0, a.useRef)(null),
        L = O && A,
        x = (0, a.useRef)(!1),
        w = (0, a.useRef)(!1),
        P = (e) => {
            p && p(), S && I.open(i.current, e);
        },
        M = {};
    u
        ? ((M.onPressStart = (e) => {
              (D.current = e.pointerType), (x.current = L), 'keyboard' === e.pointerType && (!O || E()) && T(e);
          }),
          m
              ? ((M.onPressUp = C
                    ? null
                    : (e) => {
                          'keyboard' !== e.pointerType && A && T(e);
                      }),
                (M.onPress = C ? P : null))
              : (M.onPress = (e) => {
                    C || (R && 'mouse' !== e.pointerType) ? ('keyboard' !== e.pointerType || !!g()) && P(e) : 'keyboard' !== e.pointerType && A && T(e);
                }))
        : ((M.onPressStart = (e) => {
              (D.current = e.pointerType), (x.current = L), (w.current = C), A && (('mouse' === e.pointerType && !C) || ('keyboard' === e.pointerType && (!N || E()))) && T(e);
          }),
          (M.onPress = (e) => {
              ('touch' === e.pointerType || 'pen' === e.pointerType || 'virtual' === e.pointerType || ('keyboard' === e.pointerType && O && g()) || ('mouse' === e.pointerType && w.current)) && (O ? P(e) : A && T(e));
          })),
        (b['data-key'] = r),
        (M.preventFocusOnPress = f);
    let { pressProps: k, isPressed: U } = (0, l.r7)(M),
        B = R
            ? (e) => {
                  'mouse' === D.current && (e.stopPropagation(), e.preventDefault(), P(e));
              }
            : void 0,
        { longPressProps: G } = (0, l.TA)({
            isDisabled: !L,
            onLongPress(e) {
                'touch' === e.pointerType && (T(e), n.setSelectionBehavior('toggle'));
            }
        }),
        Z = (e) => {
            'touch' === D.current && x.current && e.preventDefault();
        },
        F = n.isLink(r)
            ? (e) => {
                  !o.nG.isOpening && e.preventDefault();
              }
            : void 0;
    return {
        itemProps: (0, o.dG)(b, A || C ? k : {}, L ? G : {}, {
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
        if (!(0, o.a9)(n)) return this.getFirstKey();
        let i = n.getBoundingClientRect(),
            a = r.getBoundingClientRect();
        if ('horizontal' === this.orientation) {
            let s = i.x - n.scrollLeft,
                o = Math.max(0, a.x - s + a.width - i.width);
            for (; r && a.x - s > o; ) a = null == (r = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : r.getBoundingClientRect();
        } else {
            let s = i.y - n.scrollTop,
                o = Math.max(0, a.y - s + a.height - i.height);
            for (; r && a.y - s > o; ) a = null == (r = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : r.getBoundingClientRect();
        }
        return null != e ? e : this.getFirstKey();
    }
    getKeyPageBelow(e) {
        let n = this.ref.current,
            r = this.getItem(e);
        if (!r) return null;
        if (!(0, o.a9)(n)) return this.getLastKey();
        let i = n.getBoundingClientRect(),
            a = r.getBoundingClientRect();
        if ('horizontal' === this.orientation) {
            let s = i.x - n.scrollLeft,
                o = Math.min(n.scrollWidth, a.x - s - a.width + i.width);
            for (; r && a.x - s < o; ) a = null == (r = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : r.getBoundingClientRect();
        } else {
            let s = i.y - n.scrollTop,
                o = Math.min(n.scrollHeight, a.y - s - a.height + i.height);
            for (; r && a.y - s < o; ) a = null == (r = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : r.getBoundingClientRect();
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
function I(e) {
    let { selectionManager: n, collection: r, disabledKeys: i, ref: s, keyboardDelegate: o } = e,
        l = (0, u.Xe)({
            usage: 'search',
            sensitivity: 'base'
        }),
        c = n.disabledBehavior,
        d = (0, a.useMemo)(() => o || new v(r, 'selection' === c ? new Set() : i, s, l), [o, r, i, s, l, c]),
        { collectionProps: f } = p({
            ...e,
            ref: s,
            selectionManager: n,
            keyboardDelegate: d
        });
    return { listProps: f };
}
