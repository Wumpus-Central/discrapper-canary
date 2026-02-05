"use strict";
a.r(t), a.d(t, { default: () => E });
var s = a(627968),
    r = a(64700),
    n = a(492462),
    i = a(960488),
    l = a(417597),
    o = a(830215),
    c = a(269815),
    d = a(114716),
    u = a(942156),
    h = a(49463),
    p = a(976860),
    x = a(961350),
    f = a(398378),
    _ = a(372726),
    m = a(459485),
    g = a(810669),
    v = a(698894),
    C = a(621846),
    y = a(652215),
    b = a(136267);
let w = a(843020);
function N() {
    let e,
        t = (0, i.zy)(),
        [a, d] = r.useState(() => {
            if (t.pathname === y.BVt.ACTIVATE_HANDOFF) {
                let { user_code: e } = n.parse(window.location.search);
                return { type: "handoff", code: e };
            }
            return { type: "user-code-input", usePrefilledCode: !0 };
        }),
        N = (0, l.bG)([h.A], () => h.A.hasLoadedExperiments);
    r.useEffect(() => {
        x.default.isAuthenticated() && !N && o.A.getExperiments();
    }, [N]),
        (0, c.A)(),
        (0, f.K)(a);
    let j = r.useCallback(() => {
            d({ type: "user-code-input" });
        }, [d]),
        E = r.useCallback(
            (e) => {
                d({ type: "authorization", userCodeData: e });
            },
            [d],
        ),
        A = r.useCallback(
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
    switch (a.type) {
        case "handoff":
            (e = (0, s.jsx)(g.e, { code: a.code })), (T = !1);
            break;
        case "user-code-input":
            e = (0, s.jsx)(C.H, { usePrefilledCode: a.usePrefilledCode || !1, onUserCodeAccepted: E });
            break;
        case "authorization":
            (e = (0, s.jsx)(_.F, { data: a.userCodeData, onDenied: j, onError: I, onSuccess: A })), (T = !1);
            break;
        case "success":
            e = (0, s.jsx)(v.r, { onComplete: () => (0, p.pX)(y.BVt.ME), data: a.userCodeData });
            break;
        case "error":
            e = (0, s.jsx)(m.S, { onTryAgain: j });
            break;
        default:
            e = null;
    }
    return (0, s.jsxs)("div", {
        className: b.fY,
        children: [
            (0, s.jsx)("img", { className: b.xX, src: w, alt: "" }),
            (0, s.jsx)(u.A, { show: !0, className: b.wm }),
            T ? (0, s.jsx)("div", { className: b.Qs, children: e }) : e,
        ],
    });
}
let j = (0, d.C)(N),
    E = function () {
        return (0, i.zy)().pathname !== y.BVt.ACTIVATE_HANDOFF ? (0, s.jsx)(j, {}) : (0, s.jsx)(N, {});
    };
