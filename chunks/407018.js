r.d(n, {
    o: function () {
        return p;
    },
    p: function () {
        return h;
    }
});
var i = r(661763),
    a = r(239700),
    o = r(192379),
    s = r(921336),
    l = r(523603),
    u = r(649859),
    c = r(662845);
let d = new WeakMap();
function f(e, n) {
    let r = d.get(e);
    if (!r) throw Error('Unknown slider state');
    return `${r.id}-${n}`;
}
function p(e, n, r) {
    var c;
    let { labelProps: p, fieldProps: h } = (0, l.N)(e),
        _ = 'vertical' === e.orientation;
    d.set(n, {
        id: null !== (c = p.id) && void 0 !== c ? c : h.id,
        'aria-describedby': e['aria-describedby'],
        'aria-details': e['aria-details']
    });
    let { direction: m } = (0, u.bU)(),
        { addGlobalListener: g, removeGlobalListener: E } = (0, i.xi)(),
        v = (0, o.useRef)(null),
        y = 'rtl' === m,
        b = (0, o.useRef)(null),
        { moveProps: I } = (0, s.r_)({
            onMoveStart() {
                b.current = null;
            },
            onMove({ deltaX: e, deltaY: i }) {
                let { height: o, width: s } = r.current.getBoundingClientRect(),
                    l = _ ? o : s;
                null == b.current && (b.current = n.getThumbPercent(v.current) * l);
                let u = _ ? i : e;
                if (((_ || y) && (u = -u), (b.current += u), null != v.current && r.current)) {
                    let e = (0, a.uZ)(b.current / l, 0, 1);
                    n.setThumbPercent(v.current, e);
                }
            },
            onMoveEnd() {
                null != v.current && (n.setThumbDragging(v.current, !1), (v.current = null));
            }
        }),
        T = (0, o.useRef)(void 0),
        S = (i, a, o, s) => {
            if (r.current && !e.isDisabled && n.values.every((e, r) => !n.isThumbDragging(r))) {
                let e,
                    { height: l, width: u, top: c, left: d } = r.current.getBoundingClientRect(),
                    f = _ ? l : u,
                    p = _ ? c : d,
                    h = ((_ ? s : o) - p) / f;
                ('rtl' === m || _) && (h = 1 - h);
                let E = n.getPercentValue(h),
                    y = n.values.findIndex((e) => E - e < 0);
                (e = 0 === y ? y : -1 === y ? n.values.length - 1 : Math.abs(n.values[y - 1] - E) < Math.abs(n.values[y] - E) ? y - 1 : y) >= 0 && n.isThumbEditable(e) ? (i.preventDefault(), (v.current = e), n.setFocusedThumb(e), (T.current = a), n.setThumbDragging(v.current, !0), n.setThumbValue(e, E), g(window, 'mouseup', A, !1), g(window, 'touchend', A, !1), g(window, 'pointerup', A, !1)) : (v.current = null);
            }
        },
        A = (e) => {
            var r, i;
            (null !== (i = e.pointerId) && void 0 !== i ? i : null === (r = e.changedTouches) || void 0 === r ? void 0 : r[0].identifier) === T.current && (null != v.current && (n.setThumbDragging(v.current, !1), (v.current = null)), E(window, 'mouseup', A, !1), E(window, 'touchend', A, !1), E(window, 'pointerup', A, !1));
        };
    return (
        'htmlFor' in p &&
            p.htmlFor &&
            (delete p.htmlFor,
            (p.onClick = () => {
                var e;
                null === (e = document.getElementById(f(n, 0))) || void 0 === e || e.focus(), (0, s._w)('keyboard');
            })),
        {
            labelProps: p,
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
                I
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
    let { index: p = 0, isRequired: h, validationState: _, isInvalid: m, trackRef: g, inputRef: E, orientation: v = n.orientation, name: y } = e,
        b = e.isDisabled || n.isDisabled,
        I = 'vertical' === v,
        { direction: T } = (0, u.bU)(),
        { addGlobalListener: S, removeGlobalListener: A } = (0, i.xi)(),
        C = d.get(n),
        { labelProps: N, fieldProps: R } = (0, l.N)({
            ...e,
            id: f(n, p),
            'aria-labelledby': `${C.id} ${null !== (r = e['aria-labelledby']) && void 0 !== r ? r : ''}`.trim()
        }),
        O = n.values[p],
        D = (0, o.useCallback)(() => {
            E.current && (0, i.Ao)(E.current);
        }, [E]),
        x = n.focusedThumb === p;
    (0, o.useEffect)(() => {
        x && D();
    }, [x, D]);
    let L = 'rtl' === T,
        w = (0, o.useRef)(null),
        { keyboardProps: P } = (0, s.v5)({
            onKeyDown(e) {
                let { getThumbMaxValue: r, getThumbMinValue: i, decrementThumb: a, incrementThumb: o, setThumbValue: s, setThumbDragging: l, pageSize: u } = n;
                if (!/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
                    e.continuePropagation();
                    return;
                }
                switch ((e.preventDefault(), l(p, !0), e.key)) {
                    case 'PageUp':
                        o(p, u);
                        break;
                    case 'PageDown':
                        a(p, u);
                        break;
                    case 'Home':
                        s(p, i(p));
                        break;
                    case 'End':
                        s(p, r(p));
                }
                l(p, !1);
            }
        }),
        { moveProps: M } = (0, s.r_)({
            onMoveStart() {
                (w.current = null), n.setThumbDragging(p, !0);
            },
            onMove({ deltaX: e, deltaY: r, pointerType: i, shiftKey: o }) {
                let { getThumbPercent: s, setThumbPercent: l, decrementThumb: u, incrementThumb: c, step: d, pageSize: f } = n,
                    { width: h, height: _ } = g.current.getBoundingClientRect(),
                    m = I ? _ : h;
                if ((null == w.current && (w.current = s(p) * m), 'keyboard' === i)) (e > 0 && L) || (e < 0 && !L) || r > 0 ? u(p, o ? f : d) : c(p, o ? f : d);
                else {
                    let n = I ? r : e;
                    (I || L) && (n = -n), (w.current += n), l(p, (0, a.uZ)(w.current / m, 0, 1));
                }
            },
            onMoveEnd() {
                n.setThumbDragging(p, !1);
            }
        });
    n.setThumbEditable(p, !b);
    let { focusableProps: k } = (0, c.kc)(
            (0, i.dG)(e, {
                onFocus: () => n.setFocusedThumb(p),
                onBlur: () => n.setFocusedThumb(void 0)
            }),
            E
        ),
        U = (0, o.useRef)(void 0),
        B = (e) => {
            D(), (U.current = e), n.setThumbDragging(p, !0), S(window, 'mouseup', G, !1), S(window, 'touchend', G, !1), S(window, 'pointerup', G, !1);
        },
        G = (e) => {
            var r, i;
            (null !== (i = e.pointerId) && void 0 !== i ? i : null === (r = e.changedTouches) || void 0 === r ? void 0 : r[0].identifier) === U.current && (D(), n.setThumbDragging(p, !1), A(window, 'mouseup', G, !1), A(window, 'touchend', G, !1), A(window, 'pointerup', G, !1));
        },
        Z = n.getThumbPercent(p);
    (I || 'rtl' === T) && (Z = 1 - Z);
    let F = b
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
            n.setThumbValue(p, e);
        }),
        {
            inputProps: (0, i.dG)(k, R, {
                type: 'range',
                tabIndex: b ? void 0 : 0,
                min: n.getThumbMinValue(p),
                max: n.getThumbMaxValue(p),
                step: n.step,
                value: O,
                name: y,
                disabled: b,
                'aria-orientation': v,
                'aria-valuetext': n.getThumbValueLabel(p),
                'aria-required': h || void 0,
                'aria-invalid': m || 'invalid' === _ || void 0,
                'aria-errormessage': e['aria-errormessage'],
                'aria-describedby': [C['aria-describedby'], e['aria-describedby']].filter(Boolean).join(' '),
                'aria-details': [C['aria-details'], e['aria-details']].filter(Boolean).join(' '),
                onChange: (e) => {
                    n.setThumbValue(p, parseFloat(e.target.value));
                }
            }),
            thumbProps: {
                ...F,
                style: {
                    position: 'absolute',
                    [I ? 'top' : 'left']: `${100 * Z}%`,
                    transform: 'translate(-50%, -50%)',
                    touchAction: 'none'
                }
            },
            labelProps: N,
            isDragging: n.isThumbDragging(p),
            isDisabled: b,
            isFocused: x
        }
    );
}
