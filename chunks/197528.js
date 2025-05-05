n.r(t), n.d(t, { default: () => E }), n(388685), n(35282);
var r = n(255367),
    a = n(73800),
    o = n(593473),
    l = n(114858),
    i = n(399606),
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
    C = n(521937),
    g = n(981631),
    y = n(350730);
let j = n(575703);
function N() {
    let e,
        t = (0, l.TH)(),
        [n, d] = a.useState(() => {
            if (t.pathname === g.Z5c.ACTIVATE_HANDOFF) {
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
        N = (0, i.e7)([f.Z], () => f.Z.hasLoadedExperiments);
    a.useEffect(() => {
        h.default.isAuthenticated() && !N && s.Z.getExperiments();
    }, [N]),
        (0, c.Z)(),
        (0, x.Y)(n);
    let w = a.useCallback(() => {
            d({ type: 'user-code-input' });
        }, [d]),
        E = a.useCallback(
            (e) => {
                d({
                    type: 'authorization',
                    userCodeData: e
                });
            },
            [d]
        ),
        k = a.useCallback(
            (e) => {
                d({
                    type: 'success',
                    userCodeData: e
                });
            },
            [d]
        ),
        T = a.useCallback(
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
            (e = (0, r.jsx)(v.c, { code: n.code })), (I = !1);
            break;
        case 'user-code-input':
            e = (0, r.jsx)(C.v, {
                usePrefilledCode: n.usePrefilledCode || !1,
                onUserCodeAccepted: E
            });
            break;
        case 'authorization':
            (e = (0, r.jsx)(m.B, {
                data: n.userCodeData,
                onDenied: w,
                onError: T,
                onSuccess: k
            })),
                (I = !1);
            break;
        case 'success':
            e = (0, r.jsx)(_.u, {
                onComplete: () => (0, p.uL)(g.Z5c.ME),
                data: n.userCodeData
            });
            break;
        case 'error':
            e = (0, r.jsx)(b.c, { onTryAgain: w });
            break;
        default:
            e = null;
    }
    return (0, r.jsxs)('div', {
        className: y.activatePage,
        children: [
            (0, r.jsx)('img', {
                className: y.artwork,
                src: j,
                alt: ''
            }),
            (0, r.jsx)(u.Z, {
                show: !0,
                className: y.logo
            }),
            I
                ? (0, r.jsx)('div', {
                      className: y.content,
                      children: e
                  })
                : e
        ]
    });
}
let w = (0, d.e)(N),
    E = function () {
        return (0, l.TH)().pathname !== g.Z5c.ACTIVATE_HANDOFF ? (0, r.jsx)(w, {}) : (0, r.jsx)(N, {});
    };
