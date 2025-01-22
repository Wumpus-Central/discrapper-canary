r.d(n, {
    J: function () {
        return A;
    }
});
var i = r(47120);
var a = r(610138);
var o = r(216116);
var s = r(78328);
var l = r(815648);
var u = r(200651),
    c = r(192379),
    d = r(120356),
    f = r.n(d),
    p = r(812028),
    h = r(772848),
    _ = r(631467),
    m = r(210887),
    g = r(585483),
    E = r(531826),
    v = r(53289),
    y = r(953101),
    b = r(701488),
    I = r(981631),
    T = r(37796);
function S(e) {
    let { url: n, className: r, style: i, onLoad: a, shouldRefocus: o, queryParams: s, allowPopups: l = !1, referrerPolicy: d = 'origin' } = e,
        f = (0, E.sU)({}),
        T = (0, p.useMemoOne)(() => (0, h.Z)(), [n]),
        S = c.useRef(null),
        A = (0, v.Z)(S, o, null == f ? window : f),
        C = {
            ...s,
            frame_id: T,
            platform: b.S4.DESKTOP
        },
        [N, R] = c.useState(!1),
        O = m.Z.theme,
        D = { ...i };
    function x(e) {
        var r;
        null == a || a(e.target), (S.current = e.target), A(!0), null === (r = e.target.contentWindow) || void 0 === r || r.postMessage([_.Z.HELLO, C], null != n ? n : '');
    }
    return (
        O === I.BRd.LIGHT ? (D.colorScheme = 'light') : (D.colorScheme = 'dark'),
        c.useEffect(
            () => (
                g.S.dispatch(I.CkL.IFRAME_MOUNT, { id: T }),
                () => {
                    g.S.dispatch(I.CkL.IFRAME_UNMOUNT, { id: T });
                }
            ),
            [T]
        ),
        c.useEffect(() => {
            let e = (e) => {
                let { resizing: n } = e;
                R(n);
            };
            return (
                g.S.subscribe(I.CkL.MANUAL_IFRAME_RESIZING, e),
                () => {
                    g.S.unsubscribe(I.CkL.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        N && (D.pointerEvents = 'none'),
        null != n
            ? (0, u.jsx)('iframe', {
                  style: D,
                  allow: 'autoplay; encrypted-media',
                  referrerPolicy: d,
                  onLoad: x,
                  sandbox: (0, y.Z)({ allowPopups: l }),
                  className: r,
                  src: ''.concat(n, '?').concat(new URLSearchParams(C))
              })
            : null
    );
}
function A(e) {
    let { onLoad: n } = e,
        [r, i] = c.useState(!1),
        a = c.useCallback(
            (e) => {
                i(!0), null == n || n(e);
            },
            [n]
        );
    return (0, u.jsxs)('div', {
        className: T.fillParent,
        children: [
            !r && (0, u.jsx)('div', { className: f()(T.fillParent, T.iframePlaceholder) }),
            (0, u.jsx)('div', {
                className: f()(T.fillParent, r ? void 0 : T.hiddenIframeContainer),
                children: (0, u.jsx)(S, {
                    ...e,
                    onLoad: a
                })
            })
        ]
    });
}
