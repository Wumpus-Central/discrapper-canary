n.r(t), n.d(t, { default: () => N }), n(47120);
var a = n(200651),
    r = n(192379),
    o = n(593473),
    i = n(512969),
    l = n(702493),
    s = n(77987),
    c = n(133853),
    d = n(703656),
    u = n(643366),
    f = n(94628),
    h = n(659154),
    x = n(581690),
    p = n(902928),
    _ = n(521937),
    C = n(981631),
    v = n(551722);
let m = n(575703);
function g() {
    let e;
    let t = (0, i.TH)(),
        [n, s] = r.useState(() => {
            if (t.pathname === C.Z5c.ACTIVATE_HANDOFF) {
                let { user_code: e } = o.parse(window.location.search);
                return {
                    type: 'handoff',
                    code: e
                };
            }
            return {
                type: 'user-code-input',
                usePrefilledCode: !0
            };
        });
    (0, l.Z)(), (0, u.Y)(n);
    let g = r.useCallback(() => {
            s({ type: 'user-code-input' });
        }, [s]),
        b = r.useCallback(
            (e) => {
                s({
                    type: 'authorization',
                    userCodeData: e
                });
            },
            [s]
        ),
        N = r.useCallback(
            (e) => {
                s({
                    type: 'success',
                    userCodeData: e
                });
            },
            [s]
        ),
        j = r.useCallback(
            (e) => {
                s({
                    type: 'error',
                    userCodeData: e
                });
            },
            [s]
        ),
        y = !0;
    switch (n.type) {
        case 'handoff':
            (e = (0, a.jsx)(x.c, { code: n.code })), (y = !1);
            break;
        case 'user-code-input':
            e = (0, a.jsx)(_.v, {
                usePrefilledCode: n.usePrefilledCode || !1,
                onUserCodeAccepted: b
            });
            break;
        case 'authorization':
            (e = (0, a.jsx)(f.B, {
                data: n.userCodeData,
                onDenied: g,
                onError: j,
                onSuccess: N
            })),
                (y = !1);
            break;
        case 'success':
            e = (0, a.jsx)(p.u, {
                onComplete: () => (0, d.uL)(C.Z5c.ME),
                data: n.userCodeData
            });
            break;
        case 'error':
            e = (0, a.jsx)(h.c, { onTryAgain: g });
            break;
        default:
            e = null;
    }
    return (0, a.jsxs)('div', {
        className: v.activatePage,
        children: [
            (0, a.jsx)('img', {
                className: v.artwork,
                src: m,
                alt: ''
            }),
            (0, a.jsx)(c.Z, {
                show: !0,
                className: v.logo
            }),
            y
                ? (0, a.jsx)('div', {
                      className: v.content,
                      children: e
                  })
                : e
        ]
    });
}
let b = (0, s.e)(g),
    N = function () {
        return (0, i.TH)().pathname !== C.Z5c.ACTIVATE_HANDOFF ? (0, a.jsx)(b, {}) : (0, a.jsx)(g, {});
    };
