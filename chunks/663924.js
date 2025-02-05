n.d(t, { Z: () => S }), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(374470),
    r = n(442837),
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
    _ = n(827498),
    C = n(695676),
    x = n(421591),
    v = n(314734),
    E = n(981631),
    I = n(388032),
    b = n(906047);
let Z = { height: v.lv };
function N() {
    f.yT(_.ti.DISMISSED);
}
function T(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: u } = e,
        h = l.useRef(null),
        { renderWindow: f, windowDispatch: I } = l.useContext(c.ZP),
        b = null != u,
        Z = (0, s.Jw)(null != u ? u : ''),
        T = l.useCallback(
            (e) => {
                var t;
                if ((!b && (0, s.$s)()) || (b && !(Z && n))) return;
                let { target: i } = e;
                if ((0, a.k)(i) && null != i.closest('.' + v.Jh)) return;
                for (; (0, a.k)(i); ) {
                    if (i === h.current) return;
                    if (i.classList.contains(v.t4) || i.classList.contains(v.Id)) {
                        e.preventDefault();
                        return;
                    }
                    if (i.classList.contains(v.NN)) return;
                    i = i.parentNode;
                }
                N();
                let l = null === (t = (0, m.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == l || 'BODY' === l.tagName) && p.S.dispatchToLastSubscribed(E.CkL.TEXTAREA_FOCUS);
            },
            [n, Z, b]
        );
    l.useLayoutEffect(
        () => (
            f.addEventListener('mousedown', T),
            f.addEventListener('contextmenu', T),
            I.subscribe(E.CkL.POPOUT_CLOSE, N),
            () => {
                f.removeEventListener('mousedown', T), f.removeEventListener('contextmenu', T), I.unsubscribe(E.CkL.POPOUT_CLOSE, N);
            }
        ),
        [T, f, I]
    ),
        (0, o.Tbt)(h),
        l.useEffect(() => {
            ((!b && (0, s.$s)()) || (b && !Z)) && N();
        }, [Z, b]);
    let S = (0, r.e7)([g.Z], () => g.Z.initialState(), []),
        j = (0, d.q)(null == S ? void 0 : S.applicationId),
        y = l.useMemo(() => {
            if (null == S) return;
            let e = [{ type: C.gc.HOME }];
            return (
                null != S.applicationId &&
                    null != j &&
                    e.push({
                        type: C.gc.APPLICATION,
                        application: j
                    }),
                e
            );
        }, [S, j]);
    return (0, i.jsx)(x.Z, {
        ref: h,
        context: {
            channel: t,
            type: 'channel'
        },
        entrypoint: _._b.TEXT,
        initHistory: y
    });
}
let S = l.memo(function (e) {
    let { positionTargetRef: t, ...n } = e,
        l = (0, u.Q3)('AppLauncherPopup');
    return (0, i.jsx)('span', {
        style: v.u$,
        children: (0, i.jsx)(h.W5, {
            className: b.positionLayer,
            targetRef: t,
            position: 'top',
            align: 'right',
            spacing: l ? 24 : 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, i.jsx)('section', {
                    className: b.positionContainer,
                    role: 'dialog',
                    style: Z,
                    'aria-label': I.intl.string(I.t['3CNGLC']),
                    children: t && (0, i.jsx)(T, { ...n })
                });
            }
        })
    });
});
