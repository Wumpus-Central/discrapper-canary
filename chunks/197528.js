n.r(t), n.d(t, { default: () => E }), n(47120), n(301563);
var a = n(200651),
    r = n(192379),
    o = n(593473),
    l = n(512969),
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
    C = n(902928),
    _ = n(521937),
    g = n(981631),
    N = n(350730);
let y = n(575703);
function j() {
    let e,
        t = (0, l.TH)(),
        [n, d] = r.useState(() => {
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
        j = (0, i.e7)([f.Z], () => f.Z.hasLoadedExperiments);
    r.useEffect(() => {
        h.default.isAuthenticated() && !j && s.Z.getExperiments();
    }, [j]),
        (0, c.Z)(),
        (0, x.Y)(n);
    let w = r.useCallback(() => {
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
            (e = (0, a.jsx)(v.c, { code: n.code })), (I = !1);
            break;
        case 'user-code-input':
            e = (0, a.jsx)(_.v, {
                usePrefilledCode: n.usePrefilledCode || !1,
                onUserCodeAccepted: E
            });
            break;
        case 'authorization':
            (e = (0, a.jsx)(m.B, {
                data: n.userCodeData,
                onDenied: w,
                onError: T,
                onSuccess: k
            })),
                (I = !1);
            break;
        case 'success':
            e = (0, a.jsx)(C.u, {
                onComplete: () => (0, p.uL)(g.Z5c.ME),
                data: n.userCodeData
            });
            break;
        case 'error':
            e = (0, a.jsx)(b.c, { onTryAgain: w });
            break;
        default:
            e = null;
    }
    return (0, a.jsxs)('div', {
        className: N.activatePage,
        children: [
            (0, a.jsx)('img', {
                className: N.artwork,
                src: y,
                alt: ''
            }),
            (0, a.jsx)(u.Z, {
                show: !0,
                className: N.logo
            }),
            I
                ? (0, a.jsx)('div', {
                      className: N.content,
                      children: e
                  })
                : e
        ]
    });
}
let w = (0, d.e)(j),
    E = function () {
        return (0, l.TH)().pathname !== g.Z5c.ACTIVATE_HANDOFF ? (0, a.jsx)(w, {}) : (0, a.jsx)(j, {});
    };
