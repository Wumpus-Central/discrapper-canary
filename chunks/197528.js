(n.r(t), n.d(t, { default: () => E }), n(388685), n(35282));
var a = n(255367),
    r = n(73800),
    o = n(593473),
    i = n(114858),
    l = n(399606),
    s = n(893776),
    c = n(702493),
    d = n(77987),
    u = n(133853),
    f = n(353926),
    p = n(703656),
    h = n(314897),
    x = n(643366),
    m = n(94628),
    b = n(659154),
    v = n(581690),
    _ = n(902928),
    g = n(521937),
    C = n(981631),
    y = n(350730);
let j = n(575703);
function w() {
    let e,
        t = (0, i.TH)(),
        [n, d] = r.useState(() => {
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
        }),
        w = (0, l.e7)([f.Z], () => f.Z.hasLoadedExperiments);
    (r.useEffect(() => {
        h.default.isAuthenticated() && !w && s.Z.getExperiments();
    }, [w]),
        (0, c.Z)(),
        (0, x.Y)(n));
    let N = r.useCallback(() => {
            d({ type: 'user-code-input' });
        }, [d]),
        E = r.useCallback(
            (e) => {
                d({
                    type: 'authorization',
                    userCodeData: e
                });
            },
            [d]
        ),
        k = r.useCallback(
            (e) => {
                d({
                    type: 'success',
                    userCodeData: e
                });
            },
            [d]
        ),
        T = r.useCallback(
            (e) => {
                d({
                    type: 'error',
                    userCodeData: e
                });
            },
            [d]
        ),
        I = !0;
    switch (n.type) {
        case 'handoff':
            ((e = (0, a.jsx)(v.c, { code: n.code })), (I = !1));
            break;
        case 'user-code-input':
            e = (0, a.jsx)(g.v, {
                usePrefilledCode: n.usePrefilledCode || !1,
                onUserCodeAccepted: E
            });
            break;
        case 'authorization':
            ((e = (0, a.jsx)(m.B, {
                data: n.userCodeData,
                onDenied: N,
                onError: T,
                onSuccess: k
            })),
                (I = !1));
            break;
        case 'success':
            e = (0, a.jsx)(_.u, {
                onComplete: () => (0, p.uL)(C.Z5c.ME),
                data: n.userCodeData
            });
            break;
        case 'error':
            e = (0, a.jsx)(b.c, { onTryAgain: N });
            break;
        default:
            e = null;
    }
    return (0, a.jsxs)('div', {
        className: y.activatePage,
        children: [
            (0, a.jsx)('img', {
                className: y.artwork,
                src: j,
                alt: ''
            }),
            (0, a.jsx)(u.Z, {
                show: !0,
                className: y.logo
            }),
            I
                ? (0, a.jsx)('div', {
                      className: y.content,
                      children: e
                  })
                : e
        ]
    });
}
let N = (0, d.e)(w),
    E = function () {
        return (0, i.TH)().pathname !== C.Z5c.ACTIVATE_HANDOFF ? (0, a.jsx)(N, {}) : (0, a.jsx)(w, {});
    };
