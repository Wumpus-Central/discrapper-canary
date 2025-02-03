n.d(t, { J: () => v }), n(47120), n(610138), n(216116), n(78328), n(815648);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(812028),
    l = n(772848),
    u = n(631467),
    c = n(210887),
    d = n(585483),
    f = n(531826),
    _ = n(53289),
    p = n(953101),
    h = n(701488),
    m = n(981631),
    g = n(37796);
function E(e) {
    let { url: t, className: n, style: a, onLoad: s, shouldRefocus: g, queryParams: E, allowPopups: v = !1, referrerPolicy: y = 'origin' } = e,
        I = (0, f.sU)({}),
        b = (0, o.useMemoOne)(() => (0, l.Z)(), [t]),
        T = r.useRef(null),
        S = (0, _.Z)(T, g, null == I ? window : I),
        A = {
            ...E,
            frame_id: b,
            platform: h.S4.DESKTOP
        },
        [N, C] = r.useState(!1),
        R = c.Z.theme,
        O = { ...a };
    function D(e) {
        var n;
        null == s || s(e.target), (T.current = e.target), S(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([u.Z.HELLO, A], null != t ? t : '');
    }
    return (
        R === m.BRd.LIGHT ? (O.colorScheme = 'light') : (O.colorScheme = 'dark'),
        r.useEffect(
            () => (
                d.S.dispatch(m.CkL.IFRAME_MOUNT, { id: b }),
                () => {
                    d.S.dispatch(m.CkL.IFRAME_UNMOUNT, { id: b });
                }
            ),
            [b]
        ),
        r.useEffect(() => {
            let e = (e) => {
                let { resizing: t } = e;
                C(t);
            };
            return (
                d.S.subscribe(m.CkL.MANUAL_IFRAME_RESIZING, e),
                () => {
                    d.S.unsubscribe(m.CkL.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        N && (O.pointerEvents = 'none'),
        null != t
            ? (0, i.jsx)('iframe', {
                  style: O,
                  allow: 'autoplay; encrypted-media',
                  referrerPolicy: y,
                  onLoad: D,
                  sandbox: (0, p.Z)({ allowPopups: v }),
                  className: n,
                  src: ''.concat(t, '?').concat(new URLSearchParams(A))
              })
            : null
    );
}
function v(e) {
    let { onLoad: t } = e,
        [n, a] = r.useState(!1),
        o = r.useCallback(
            (e) => {
                a(!0), null == t || t(e);
            },
            [t]
        );
    return (0, i.jsxs)('div', {
        className: g.fillParent,
        children: [
            !n && (0, i.jsx)('div', { className: s()(g.fillParent, g.iframePlaceholder) }),
            (0, i.jsx)('div', {
                className: s()(g.fillParent, n ? void 0 : g.hiddenIframeContainer),
                children: (0, i.jsx)(E, {
                    ...e,
                    onLoad: o
                })
            })
        ]
    });
}
