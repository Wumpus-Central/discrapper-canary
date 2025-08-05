n.d(t, { Z: () => P });
var r = n(255367),
    i = n(73800),
    a = n(374470),
    o = n(952265),
    s = n(481060),
    l = n(40851),
    c = n(896449),
    u = n(314910),
    d = n(574254),
    f = n(585483),
    _ = n(5967),
    p = n(499254),
    h = n(827498),
    m = n(421591),
    g = n(496977),
    E = n(314734),
    b = n(981631),
    y = n(149203),
    O = n(388032),
    v = n(760420);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            }));
    }
    return e;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let N = { height: E.lv };
function C(e) {
    var { positionTargetRef: t } = e,
        n = S(e, ['positionTargetRef']);
    return (0, r.jsx)('span', {
        style: E.u$,
        children: (0, r.jsx)(u.W5, {
            className: v.positionLayer,
            targetRef: t,
            position: 'top',
            align: 'right',
            spacing: 24,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)('section', {
                    className: v.positionContainer,
                    role: 'dialog',
                    style: N,
                    'aria-label': O.intl.string(O.t['3CNGLC']),
                    children: t && (0, r.jsx)(R, T({}, n))
                });
            }
        })
    });
}
function w() {
    p.yT(h.ti.DISMISSED);
}
function R(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: u } = e,
        p = i.useRef(null),
        { renderWindow: O, windowDispatch: v } = i.useContext(l.ZP),
        I = null != u,
        T = (0, o.Jw)(null != u ? u : ''),
        S = i.useCallback(
            (e) => {
                var t;
                if ((!I && (0, o.$s)()) || (I && !(T && n)) || d.Z.isOpen() || e.defaultPrevented) return;
                let { target: r } = e;
                if ((0, a.k)(r) && null != r.closest('.' + E.Jh)) return;
                for (; (0, a.k)(r); ) {
                    if (r === p.current) return;
                    if (r.classList.contains(E.t4) || r.classList.contains(E.Id)) return void e.preventDefault();
                    if (r.classList.contains(E.NN)) return;
                    let t = [y.cZ, c.N];
                    if (r.classList.contains(E.I4) || t.includes(r.id)) return;
                    r = r.parentNode;
                }
                w();
                let i = null == (t = (0, _.uB)(e)) ? void 0 : t.activeElement;
                (null == i || 'BODY' === i.tagName) && f.S.dispatchToLastSubscribed(b.CkL.TEXTAREA_FOCUS);
            },
            [n, T, I]
        );
    (i.useLayoutEffect(
        () => (
            O.addEventListener('mousedown', S),
            O.addEventListener('contextmenu', S),
            v.subscribe(b.CkL.POPOUT_CLOSE, w),
            () => {
                (O.removeEventListener('mousedown', S), O.removeEventListener('contextmenu', S), v.unsubscribe(b.CkL.POPOUT_CLOSE, w));
            }
        ),
        [S, O, v]
    ),
        (0, s.Tbt)(p),
        i.useEffect(() => {
            ((!I && (0, o.$s)()) || (I && !T)) && w();
        }, [T, I]));
    let A = (0, g.Z)();
    return (0, r.jsx)(m.Z, {
        ref: p,
        context: {
            channel: t,
            type: 'channel'
        },
        entrypoint: h._b.TEXT,
        initHistory: A
    });
}
let P = i.memo(C);
