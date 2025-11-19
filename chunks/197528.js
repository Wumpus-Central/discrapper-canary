n.r(t), n.d(t, { default: () => E }), n(388685), n(35282);
var r = n(54381),
    a = n(473749),
    i = n(593473),
    o = n(828700),
    s = n(399606),
    l = n(893776),
    c = n(702493),
    d = n(77987),
    u = n(133853),
    f = n(353926),
    p = n(703656),
    h = n(314897),
    x = n(643366),
    m = n(94628),
    g = n(659154),
    v = n(581690),
    b = n(902928),
    _ = n(521937),
    C = n(981631),
    y = n(911740);
let j = n(575703);
function w() {
    let e,
        t = (0, o.TH)(),
        [n, d] = a.useState(() => {
            if (t.pathname === C.Z5c.ACTIVATE_HANDOFF) {
                let { user_code: e } = i.parse(window.location.search);
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
    a.useEffect(() => {
        h.default.isAuthenticated() && !w && l.Z.getExperiments();
    }, [w]),
        (0, c.Z)(),
        (0, x.Y)(n);
    let N = a.useCallback(() => {
            d({ type: "user-code-input" });
        }, [d]),
        E = a.useCallback(
            (e) => {
                d({
                    type: "authorization",
                    userCodeData: e,
                });
            },
            [d],
        ),
        T = a.useCallback(
            (e) => {
                d({
                    type: "success",
                    userCodeData: e,
                });
            },
            [d],
        ),
        O = a.useCallback(
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
            (e = (0, r.jsx)(v.c, { code: n.code })), (k = !1);
            break;
        case "user-code-input":
            e = (0, r.jsx)(_.v, {
                usePrefilledCode: n.usePrefilledCode || !1,
                onUserCodeAccepted: E,
            });
            break;
        case "authorization":
            (e = (0, r.jsx)(m.B, {
                data: n.userCodeData,
                onDenied: N,
                onError: O,
                onSuccess: T,
            })),
                (k = !1);
            break;
        case "success":
            e = (0, r.jsx)(b.u, {
                onComplete: () => (0, p.uL)(C.Z5c.ME),
                data: n.userCodeData,
            });
            break;
        case "error":
            e = (0, r.jsx)(g.c, { onTryAgain: N });
            break;
        default:
            e = null;
    }
    return (0, r.jsxs)("div", {
        className: y.activatePage,
        children: [
            (0, r.jsx)("img", {
                className: y.artwork,
                src: j,
                alt: "",
            }),
            (0, r.jsx)(u.Z, {
                show: !0,
                className: y.logo,
            }),
            k
                ? (0, r.jsx)("div", {
                      className: y.content,
                      children: e,
                  })
                : e,
        ],
    });
}
let N = (0, d.e)(w),
    E = function () {
        return (0, o.TH)().pathname !== C.Z5c.ACTIVATE_HANDOFF ? (0, r.jsx)(N, {}) : (0, r.jsx)(w, {});
    };
