r.d(n, {
    o: function () {
        return _;
    },
    p: function () {
        return h;
    }
});
var i = r(661763),
    a = r(239700),
    s = r(192379),
    o = r(921336),
    l = r(523603),
    u = r(649859),
    c = r(662845);
let d = new WeakMap();
function f(e, n) {
    let r = d.get(e);
    if (!r) throw Error('Unknown slider state');
    return `${r.id}-${n}`;
}
function _(e, n, r) {
    var c;
    let { labelProps: _, fieldProps: h } = (0, l.N)(e),
        p = 'vertical' === e.orientation;
    d.set(n, {
        id: null !== (c = _.id) && void 0 !== c ? c : h.id,
        'aria-describedby': e['aria-describedby'],
        'aria-details': e['aria-details']
    });
    let { direction: m } = (0, u.bU)(),
        { addGlobalListener: g, removeGlobalListener: E } = (0, i.xi)(),
        v = (0, s.useRef)(null),
        I = 'rtl' === m,
        T = (0, s.useRef)(null),
        { moveProps: b } = (0, o.r_)({
            onMoveStart() {
                T.current = null;
            },
            onMove({ deltaX: e, deltaY: i }) {
                let { height: s, width: o } = r.current.getBoundingClientRect(),
                    l = p ? s : o;
                null == T.current && (T.current = n.getThumbPercent(v.current) * l);
                let u = p ? i : e;
                if (((p || I) && (u = -u), (T.current += u), null != v.current && r.current)) {
                    let e = (0, a.uZ)(T.current / l, 0, 1);
                    n.setThumbPercent(v.current, e);
                }
            },
            onMoveEnd() {
                null != v.current && (n.setThumbDragging(v.current, !1), (v.current = null));
            }
        }),
        y = (0, s.useRef)(void 0),
        S = (i, a, s, o) => {
            if (r.current && !e.isDisabled && n.values.every((e, r) => !n.isThumbDragging(r))) {
                let e,
                    { height: l, width: u, top: c, left: d } = r.current.getBoundingClientRect(),
                    f = p ? l : u,
                    _ = p ? c : d,
                    h = ((p ? o : s) - _) / f;
                ('rtl' === m || p) && (h = 1 - h);
                let E = n.getPercentValue(h),
                    I = n.values.findIndex((e) => E - e < 0);
                (e = 0 === I ? I : -1 === I ? n.values.length - 1 : Math.abs(n.values[I - 1] - E) < Math.abs(n.values[I] - E) ? I - 1 : I) >= 0 && n.isThumbEditable(e) ? (i.preventDefault(), (v.current = e), n.setFocusedThumb(e), (y.current = a), n.setThumbDragging(v.current, !0), n.setThumbValue(e, E), g(window, 'mouseup', A, !1), g(window, 'touchend', A, !1), g(window, 'pointerup', A, !1)) : (v.current = null);
            }
        },
        A = (e) => {
            var r, i;
            (null !== (i = e.pointerId) && void 0 !== i ? i : null === (r = e.changedTouches) || void 0 === r ? void 0 : r[0].identifier) === y.current && (null != v.current && (n.setThumbDragging(v.current, !1), (v.current = null)), E(window, 'mouseup', A, !1), E(window, 'touchend', A, !1), E(window, 'pointerup', A, !1));
        };
    return (
        'htmlFor' in _ &&
            _.htmlFor &&
            (delete _.htmlFor,
            (_.onClick = () => {
                var e;
                null === (e = document.getElementById(f(n, 0))) || void 0 === e || e.focus(), (0, o._w)('keyboard');
            })),
        {
            labelProps: _,
            groupProps: {
                role: 'group',
                ...h
            },
            trackProps: (0, i.dG)(
                {
                    onMouseDown(e) {
                        0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && S(e, void 0, e.clientX, e.clientY);
                    },
                    onPointerDown(e) {
                        ('mouse' !== e.pointerType || (0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey)) && S(e, e.pointerId, e.clientX, e.clientY);
                    },
                    onTouchStart(e) {
                        S(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                    },
                    style: {
                        position: 'relative',
                        touchAction: 'none'
                    }
                },
                b
            ),
            outputProps: {
                htmlFor: n.values.map((e, r) => f(n, r)).join(' '),
                'aria-live': 'off'
            }
        }
    );
}
function h(e, n) {
    var r;
    let { index: _ = 0, isRequired: h, validationState: p, isInvalid: m, trackRef: g, inputRef: E, orientation: v = n.orientation, name: I } = e,
        T = e.isDisabled || n.isDisabled,
        b = 'vertical' === v,
        { direction: y } = (0, u.bU)(),
        { addGlobalListener: S, removeGlobalListener: A } = (0, i.xi)(),
        N = d.get(n),
        { labelProps: C, fieldProps: R } = (0, l.N)({
            ...e,
            id: f(n, _),
            'aria-labelledby': `${N.id} ${null !== (r = e['aria-labelledby']) && void 0 !== r ? r : ''}`.trim()
        }),
        O = n.values[_],
        D = (0, s.useCallback)(() => {
            E.current && (0, i.Ao)(E.current);
        }, [E]),
        L = n.focusedThumb === _;
    (0, s.useEffect)(() => {
        L && D();
    }, [L, D]);
    let x = 'rtl' === y,
        w = (0, s.useRef)(null),
        { keyboardProps: P } = (0, o.v5)({
            onKeyDown(e) {
                let { getThumbMaxValue: r, getThumbMinValue: i, decrementThumb: a, incrementThumb: s, setThumbValue: o, setThumbDragging: l, pageSize: u } = n;
                if (!/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
                    e.continuePropagation();
                    return;
                }
                switch ((e.preventDefault(), l(_, !0), e.key)) {
                    case 'PageUp':
                        s(_, u);
                        break;
                    case 'PageDown':
                        a(_, u);
                        break;
                    case 'Home':
                        o(_, i(_));
                        break;
                    case 'End':
                        o(_, r(_));
                }
                l(_, !1);
            }
        }),
        { moveProps: M } = (0, o.r_)({
            onMoveStart() {
                (w.current = null), n.setThumbDragging(_, !0);
            },
            onMove({ deltaX: e, deltaY: r, pointerType: i, shiftKey: s }) {
                let { getThumbPercent: o, setThumbPercent: l, decrementThumb: u, incrementThumb: c, step: d, pageSize: f } = n,
                    { width: h, height: p } = g.current.getBoundingClientRect(),
                    m = b ? p : h;
                if ((null == w.current && (w.current = o(_) * m), 'keyboard' === i)) (e > 0 && x) || (e < 0 && !x) || r > 0 ? u(_, s ? f : d) : c(_, s ? f : d);
                else {
                    let n = b ? r : e;
                    (b || x) && (n = -n), (w.current += n), l(_, (0, a.uZ)(w.current / m, 0, 1));
                }
            },
            onMoveEnd() {
                n.setThumbDragging(_, !1);
            }
        });
    n.setThumbEditable(_, !T);
    let { focusableProps: k } = (0, c.kc)(
            (0, i.dG)(e, {
                onFocus: () => n.setFocusedThumb(_),
                onBlur: () => n.setFocusedThumb(void 0)
            }),
            E
        ),
        U = (0, s.useRef)(void 0),
        B = (e) => {
            D(), (U.current = e), n.setThumbDragging(_, !0), S(window, 'mouseup', G, !1), S(window, 'touchend', G, !1), S(window, 'pointerup', G, !1);
        },
        G = (e) => {
            var r, i;
            (null !== (i = e.pointerId) && void 0 !== i ? i : null === (r = e.changedTouches) || void 0 === r ? void 0 : r[0].identifier) === U.current && (D(), n.setThumbDragging(_, !1), A(window, 'mouseup', G, !1), A(window, 'touchend', G, !1), A(window, 'pointerup', G, !1));
        },
        Z = n.getThumbPercent(_);
    (b || 'rtl' === y) && (Z = 1 - Z);
    let F = T
        ? {}
        : (0, i.dG)(P, M, {
              onMouseDown: (e) => {
                  0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && B();
              },
              onPointerDown: (e) => {
                  0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && B(e.pointerId);
              },
              onTouchStart: (e) => {
                  B(e.changedTouches[0].identifier);
              }
          });
    return (
        (0, i.y$)(E, O, (e) => {
            n.setThumbValue(_, e);
        }),
        {
            inputProps: (0, i.dG)(k, R, {
                type: 'range',
                tabIndex: T ? void 0 : 0,
                min: n.getThumbMinValue(_),
                max: n.getThumbMaxValue(_),
                step: n.step,
                value: O,
                name: I,
                disabled: T,
                'aria-orientation': v,
                'aria-valuetext': n.getThumbValueLabel(_),
                'aria-required': h || void 0,
                'aria-invalid': m || 'invalid' === p || void 0,
                'aria-errormessage': e['aria-errormessage'],
                'aria-describedby': [N['aria-describedby'], e['aria-describedby']].filter(Boolean).join(' '),
                'aria-details': [N['aria-details'], e['aria-details']].filter(Boolean).join(' '),
                onChange: (e) => {
                    n.setThumbValue(_, parseFloat(e.target.value));
                }
            }),
            thumbProps: {
                ...F,
                style: {
                    position: 'absolute',
                    [b ? 'top' : 'left']: `${100 * Z}%`,
                    transform: 'translate(-50%, -50%)',
                    touchAction: 'none'
                }
            },
            labelProps: C,
            isDragging: n.isThumbDragging(_),
            isDisabled: T,
            isFocused: L
        }
    );
}
