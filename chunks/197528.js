n.r(t), n.d(t, { default: () => N }), n(47120), n(301563);
var r = n(200651),
    a = n(192379),
    o = n(593473),
    l = n(512969),
    i = n(702493),
    s = n(77987),
    c = n(133853),
    d = n(703656),
    u = n(643366),
    f = n(94628),
    p = n(659154),
    h = n(581690),
    x = n(902928),
    m = n(521937),
    v = n(981631),
    b = n(597977);
let C = n(575703);
function _() {
    let e;
    let t = (0, l.TH)(),
        [n, s] = a.useState(() => {
            if (t.pathname === v.Z5c.ACTIVATE_HANDOFF) {
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
    (0, i.Z)(), (0, u.Y)(n);
    let _ = a.useCallback(() => {
            s({ type: 'user-code-input' });
        }, [s]),
        g = a.useCallback(
            (e) => {
                s({
                    type: 'authorization',
                    userCodeData: e
                });
            },
            [s]
        ),
        N = a.useCallback(
            (e) => {
                s({
                    type: 'success',
                    userCodeData: e
                });
            },
            [s]
        ),
        y = a.useCallback(
            (e) => {
                s({
                    type: 'error',
                    userCodeData: e
                });
            },
            [s]
        ),
        j = !0;
    switch (n.type) {
        case 'handoff':
            (e = (0, r.jsx)(h.c, { code: n.code })), (j = !1);
            break;
        case 'user-code-input':
            e = (0, r.jsx)(m.v, {
                usePrefilledCode: n.usePrefilledCode || !1,
                onUserCodeAccepted: g
            });
            break;
        case 'authorization':
            (e = (0, r.jsx)(f.B, {
                data: n.userCodeData,
                onDenied: _,
                onError: y,
                onSuccess: N
            })),
                (j = !1);
            break;
        case 'success':
            e = (0, r.jsx)(x.u, {
                onComplete: () => (0, d.uL)(v.Z5c.ME),
                data: n.userCodeData
            });
            break;
        case 'error':
            e = (0, r.jsx)(p.c, { onTryAgain: _ });
            break;
        default:
            e = null;
    }
    return (0, r.jsxs)('div', {
        className: b.activatePage,
        children: [
            (0, r.jsx)('img', {
                className: b.artwork,
                src: C,
                alt: ''
            }),
            (0, r.jsx)(c.Z, {
                show: !0,
                className: b.logo
            }),
            j
                ? (0, r.jsx)('div', {
                      className: b.content,
                      children: e
                  })
                : e
        ]
    });
}
let g = (0, s.e)(_),
    N = function () {
        return (0, l.TH)().pathname !== v.Z5c.ACTIVATE_HANDOFF ? (0, r.jsx)(g, {}) : (0, r.jsx)(_, {});
    };
