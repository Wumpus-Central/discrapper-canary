n(653041);
var i = n(200651),
    l = n(192379),
    r = n(513431),
    a = n(442837),
    s = n(952265),
    o = n(481060),
    c = n(40851),
    d = n(835473),
    u = n(540059),
    h = n(314910),
    p = n(585483),
    m = n(5967),
    f = n(499254),
    g = n(541099),
    C = n(827498),
    x = n(695676),
    v = n(421591),
    _ = n(314734),
    I = n(981631),
    E = n(388032),
    b = n(906047);
let Z = { height: _.lv };
function N() {
    f.yT(C.ti.DISMISSED);
}
function S(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: u } = e,
        h = l.useRef(null),
        { renderWindow: f, windowDispatch: E } = l.useContext(c.ZP),
        b = null != u,
        Z = (0, s.Jw)(null != u ? u : ''),
        S = l.useCallback(
            (e) => {
                var t;
                if ((!b && (0, s.$s)()) || (b && !(Z && n))) return;
                let { target: i } = e;
                if ((0, r.k)(i) && null != i.closest('.' + _.Jh)) return;
                for (; (0, r.k)(i); ) {
                    if (i === h.current) return;
                    if (i.classList.contains(_.t4) || i.classList.contains(_.Id)) {
                        e.preventDefault();
                        return;
                    }
                    if (i.classList.contains(_.NN)) return;
                    i = i.parentNode;
                }
                N();
                let l = null === (t = (0, m.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == l || 'BODY' === l.tagName) && p.S.dispatchToLastSubscribed(I.CkL.TEXTAREA_FOCUS);
            },
            [n, Z, b]
        );
    l.useLayoutEffect(
        () => (
            f.addEventListener('mousedown', S),
            f.addEventListener('contextmenu', S),
            E.subscribe(I.CkL.POPOUT_CLOSE, N),
            () => {
                f.removeEventListener('mousedown', S), f.removeEventListener('contextmenu', S), E.unsubscribe(I.CkL.POPOUT_CLOSE, N);
            }
        ),
        [S, f, E]
    ),
        (0, o.useFocusLock)(h),
        l.useEffect(() => {
            ((!b && (0, s.$s)()) || (b && !Z)) && N();
        }, [Z, b]);
    let T = (0, a.e7)([g.Z], () => g.Z.initialState(), []),
        j = (0, d.q)(null == T ? void 0 : T.applicationId),
        A = l.useMemo(() => {
            if (null == T) return;
            let e = [{ type: x.gc.HOME }];
            return (
                null != T.applicationId &&
                    null != j &&
                    e.push({
                        type: x.gc.APPLICATION,
                        application: j
                    }),
                e
            );
        }, [T, j]);
    return (0, i.jsx)(v.Z, {
        ref: h,
        channel: t,
        entrypoint: C._b.TEXT,
        initHistory: A
    });
}
t.Z = l.memo(function (e) {
    let { positionTargetRef: t, ...n } = e,
        l = (0, u.Q3)('AppLauncherPopup');
    return (0, i.jsx)('span', {
        style: _.u$,
        children: (0, i.jsx)(h.W5, {
            className: b.positionLayer,
            targetRef: t,
            position: 'top',
            align: 'right',
            spacing: l ? 24 : 8,
            autoInvert: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, i.jsx)('section', {
                    className: b.positionContainer,
                    role: 'dialog',
                    style: Z,
                    'aria-label': E.intl.string(E.t['3CNGLC']),
                    children: t && (0, i.jsx)(S, { ...n })
                });
            }
        })
    });
});
