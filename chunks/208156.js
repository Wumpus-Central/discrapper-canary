r.d(n, {
    J: function () {
        return A;
    }
});
var i = r(47120);
var a = r(610138);
var s = r(216116);
var o = r(78328);
var l = r(815648);
var u = r(200651),
    c = r(192379),
    d = r(120356),
    f = r.n(d),
    _ = r(812028),
    h = r(772848),
    p = r(631467),
    m = r(210887),
    g = r(585483),
    E = r(531826),
    v = r(53289),
    I = r(953101),
    T = r(701488),
    b = r(981631),
    y = r(37796);
function S(e) {
    let { url: n, className: r, style: i, onLoad: a, shouldRefocus: s, queryParams: o, allowPopups: l = !1, referrerPolicy: d = 'origin' } = e,
        f = (0, E.sU)({}),
        y = (0, _.useMemoOne)(() => (0, h.Z)(), [n]),
        S = c.useRef(null),
        A = (0, v.Z)(S, s, null == f ? window : f),
        N = {
            ...o,
            frame_id: y,
            platform: T.S4.DESKTOP
        },
        [C, R] = c.useState(!1),
        O = m.Z.theme,
        D = { ...i };
    function L(e) {
        var r;
        null == a || a(e.target), (S.current = e.target), A(!0), null === (r = e.target.contentWindow) || void 0 === r || r.postMessage([p.Z.HELLO, N], null != n ? n : '');
    }
    return (
        O === b.BRd.LIGHT ? (D.colorScheme = 'light') : (D.colorScheme = 'dark'),
        c.useEffect(
            () => (
                g.S.dispatch(b.CkL.IFRAME_MOUNT, { id: y }),
                () => {
                    g.S.dispatch(b.CkL.IFRAME_UNMOUNT, { id: y });
                }
            ),
            [y]
        ),
        c.useEffect(() => {
            let e = (e) => {
                let { resizing: n } = e;
                R(n);
            };
            return (
                g.S.subscribe(b.CkL.MANUAL_IFRAME_RESIZING, e),
                () => {
                    g.S.unsubscribe(b.CkL.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        C && (D.pointerEvents = 'none'),
        null != n
            ? (0, u.jsx)('iframe', {
                  style: D,
                  allow: 'autoplay; encrypted-media',
                  referrerPolicy: d,
                  onLoad: L,
                  sandbox: (0, I.Z)({ allowPopups: l }),
                  className: r,
                  src: ''.concat(n, '?').concat(new URLSearchParams(N))
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
        className: y.fillParent,
        children: [
            !r && (0, u.jsx)('div', { className: f()(y.fillParent, y.iframePlaceholder) }),
            (0, u.jsx)('div', {
                className: f()(y.fillParent, r ? void 0 : y.hiddenIframeContainer),
                children: (0, u.jsx)(S, {
                    ...e,
                    onLoad: a
                })
            })
        ]
    });
}
