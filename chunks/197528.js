n.r(t), n.d(t, { default: () => E }), n(388685), n(35282);
var a = n(54381),
    r = n(473749),
    o = n(593473),
    i = n(828700),
    s = n(399606),
    c = n(893776),
    l = n(702493),
    d = n(77987),
    u = n(133853),
    f = n(353926),
    p = n(703656),
    h = n(314897),
    x = n(643366),
    g = n(94628),
    b = n(659154),
    m = n(581690),
    v = n(902928),
    C = n(521937),
    y = n(981631),
    j = n(487659);
let _ = n(575703);
function w() {
    let e,
        t = (0, i.TH)(),
        [n, d] = r.useState(() => {
            if (t.pathname === y.Z5c.ACTIVATE_HANDOFF) {
                let { user_code: e } = o.parse(window.location.search);
                return {
                    type: "handoff",
                    code: e,
                };
            }
            return {
                type: "user-code-input",
                usePrefilledCode: !0,
            };
        }),
        w = (0, s.e7)([f.Z], () => f.Z.hasLoadedExperiments);
    r.useEffect(() => {
        h.default.isAuthenticated() && !w && c.Z.getExperiments();
    }, [w]),
        (0, l.Z)(),
        (0, x.Y)(n);
    let N = r.useCallback(() => {
            d({ type: "user-code-input" });
        }, [d]),
        E = r.useCallback(
            (e) => {
                d({
                    type: "authorization",
                    userCodeData: e,
                });
            },
            [d],
        ),
        T = r.useCallback(
            (e) => {
                d({
                    type: "success",
                    userCodeData: e,
                });
            },
            [d],
        ),
        O = r.useCallback(
            (e) => {
                d({
                    type: "error",
                    userCodeData: e,
                });
            },
            [d],
        ),
        k = !0;
    switch (n.type) {
        case "handoff":
            (e = (0, a.jsx)(m.c, { code: n.code })), (k = !1);
            break;
        case "user-code-input":
            e = (0, a.jsx)(C.v, {
                usePrefilledCode: n.usePrefilledCode || !1,
                onUserCodeAccepted: E,
            });
            break;
        case "authorization":
            (e = (0, a.jsx)(g.B, {
                data: n.userCodeData,
                onDenied: N,
                onError: O,
                onSuccess: T,
            })),
                (k = !1);
            break;
        case "success":
            e = (0, a.jsx)(v.u, {
                onComplete: () => (0, p.uL)(y.Z5c.ME),
                data: n.userCodeData,
            });
            break;
        case "error":
            e = (0, a.jsx)(b.c, { onTryAgain: N });
            break;
        default:
            e = null;
    }
    return (0, a.jsxs)("div", {
        className: j.activatePage,
        children: [
            (0, a.jsx)("img", {
                className: j.artwork,
                src: _,
                alt: "",
            }),
            (0, a.jsx)(u.Z, {
                show: !0,
                className: j.logo,
            }),
            k
                ? (0, a.jsx)("div", {
                      className: j.content,
                      children: e,
                  })
                : e,
        ],
    });
}
let N = (0, d.e)(w),
    E = function () {
        return (0, i.TH)().pathname !== y.Z5c.ACTIVATE_HANDOFF ? (0, a.jsx)(N, {}) : (0, a.jsx)(w, {});
    };
