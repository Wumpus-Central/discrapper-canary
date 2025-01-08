n.r(t), n(47120);
var a = n(200651),
    r = n(192379),
    o = n(593473),
    i = n(702493),
    l = n(77987),
    c = n(133853),
    s = n(703656),
    d = n(643366),
    u = n(94628),
    f = n(659154),
    h = n(581690),
    p = n(902928),
    x = n(521937),
    C = n(981631),
    v = n(881579);
let m = n(575703);
t.default = (0, l.e)(function () {
    let e;
    let [t, n] = r.useState(() => {
        if (window.location.pathname.endsWith(C.Z5c.ACTIVATE_HANDOFF)) {
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
    (0, i.Z)(), (0, d.Y)(t);
    let l = r.useCallback(() => {
            n({ type: 'user-code-input' });
        }, [n]),
        g = r.useCallback(
            (e) => {
                n({
                    type: 'authorization',
                    userCodeData: e
                });
            },
            [n]
        ),
        _ = r.useCallback(
            (e) => {
                n({
                    type: 'success',
                    userCodeData: e
                });
            },
            [n]
        ),
        b = r.useCallback(
            (e) => {
                n({
                    type: 'error',
                    userCodeData: e
                });
            },
            [n]
        ),
        N = !0;
    switch (t.type) {
        case 'handoff':
            (e = (0, a.jsx)(h.c, { code: t.code })), (N = !1);
            break;
        case 'user-code-input':
            e = (0, a.jsx)(x.v, {
                usePrefilledCode: t.usePrefilledCode || !1,
                onUserCodeAccepted: g
            });
            break;
        case 'authorization':
            (e = (0, a.jsx)(u.B, {
                data: t.userCodeData,
                onDenied: l,
                onError: b,
                onSuccess: _
            })),
                (N = !1);
            break;
        case 'success':
            e = (0, a.jsx)(p.u, {
                onComplete: () => (0, s.uL)(C.Z5c.ME),
                data: t.userCodeData
            });
            break;
        case 'error':
            e = (0, a.jsx)(f.c, { onTryAgain: l });
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
            N
                ? (0, a.jsx)('div', {
                      className: v.content,
                      children: e
                  })
                : e
        ]
    });
});
