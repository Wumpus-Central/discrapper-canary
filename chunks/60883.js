"use strict";
s.r(t), s.d(t, { default: () => j });
var a = s(627968),
    r = s(64700),
    n = s(492462),
    i = s(873263),
    l = s(417597),
    o = s(830215),
    c = s(269815),
    d = s(114716),
    u = s(942156),
    h = s(49463),
    p = s(976860),
    x = s(961350),
    f = s(398378),
    _ = s(372726),
    m = s(459485),
    g = s(810669),
    v = s(698894),
    C = s(621846),
    N = s(652215),
    y = s(835468);
let b = s(843020);
function w() {
    let e,
        t = (0, i.zy)(),
        [s, d] = r.useState(() => {
            if (t.pathname === N.BVt.ACTIVATE_HANDOFF) {
                let { user_code: e } = n.parse(window.location.search);
                return { type: "handoff", code: e };
            }
            return { type: "user-code-input", usePrefilledCode: !0 };
        }),
        w = (0, l.bG)([h.A], () => h.A.hasLoadedExperiments);
    r.useEffect(() => {
        x.default.isAuthenticated() && !w && o.A.getExperiments();
    }, [w]),
        (0, c.A)(),
        (0, f.K)(s);
    let A = r.useCallback(() => {
            d({ type: "user-code-input" });
        }, [d]),
        j = r.useCallback(
            (e) => {
                d({ type: "authorization", userCodeData: e });
            },
            [d],
        ),
        E = r.useCallback(
            (e) => {
                d({ type: "success", userCodeData: e });
            },
            [d],
        ),
        I = r.useCallback(
            (e) => {
                d({ type: "error", userCodeData: e });
            },
            [d],
        ),
        T = !0;
    switch (s.type) {
        case "handoff":
            (e = (0, a.jsx)(g.e, { code: s.code })), (T = !1);
            break;
        case "user-code-input":
            e = (0, a.jsx)(C.H, { usePrefilledCode: s.usePrefilledCode || !1, onUserCodeAccepted: j });
            break;
        case "authorization":
            (e = (0, a.jsx)(_.F, { data: s.userCodeData, onDenied: A, onError: I, onSuccess: E })), (T = !1);
            break;
        case "success":
            e = (0, a.jsx)(v.r, { onComplete: () => (0, p.pX)(N.BVt.ME), data: s.userCodeData });
            break;
        case "error":
            e = (0, a.jsx)(m.S, { onTryAgain: A });
            break;
        default:
            e = null;
    }
    return (0, a.jsxs)("div", {
        className: y.fY,
        children: [
            (0, a.jsx)("img", { className: y.xX, src: b, alt: "" }),
            (0, a.jsx)(u.A, { show: !0, className: y.wm }),
            T ? (0, a.jsx)("div", { className: y.Qs, children: e }) : e,
        ],
    });
}
let A = (0, d.C)(w),
    j = function () {
        return (0, i.zy)().pathname !== N.BVt.ACTIVATE_HANDOFF ? (0, a.jsx)(A, {}) : (0, a.jsx)(w, {});
    };
