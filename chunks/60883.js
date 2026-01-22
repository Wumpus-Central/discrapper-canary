r.r(t),
    r.d(t, {
        default: () => E,
    }),
    r(896048),
    r(747238);
var a = r(627968),
    n = r(64700),
    s = r(492462),
    i = r(960488),
    l = r(417597),
    c = r(830215),
    o = r(269815),
    d = r(114716),
    u = r(942156),
    f = r(49463),
    p = r(976860),
    h = r(961350),
    x = r(398378),
    b = r(372726),
    m = r(459485),
    g = r(810669),
    y = r(698894),
    v = r(621846),
    j = r(652215),
    w = r(136267);
let N = r(843020);

function _() {
    let e,
        t = (0, i.zy)(),
        [r, d] = n.useState(() => {
            if (t.pathname === j.BVt.ACTIVATE_HANDOFF) {
                let { user_code: e } = s.parse(window.location.search);
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
        _ = (0, l.bG)([f.A], () => f.A.hasLoadedExperiments);
    n.useEffect(() => {
        h.default.isAuthenticated() && !_ && c.A.getExperiments();
    }, [_]),
        (0, o.A)(),
        (0, x.K)(r);
    let C = n.useCallback(() => {
            d({
                type: "user-code-input",
            });
        }, [d]),
        E = n.useCallback(
            (e) => {
                d({
                    type: "authorization",
                    userCodeData: e,
                });
            },
            [d],
        ),
        A = n.useCallback(
            (e) => {
                d({
                    type: "success",
                    userCodeData: e,
                });
            },
            [d],
        ),
        O = n.useCallback(
            (e) => {
                d({
                    type: "error",
                    userCodeData: e,
                });
            },
            [d],
        ),
        I = !0;
    switch (r.type) {
        case "handoff":
            (e = (0, a.jsx)(g.e, {
                code: r.code,
            })),
                (I = !1);
            break;
        case "user-code-input":
            e = (0, a.jsx)(v.H, {
                usePrefilledCode: r.usePrefilledCode || !1,
                onUserCodeAccepted: E,
            });
            break;
        case "authorization":
            (e = (0, a.jsx)(b.F, {
                data: r.userCodeData,
                onDenied: C,
                onError: O,
                onSuccess: A,
            })),
                (I = !1);
            break;
        case "success":
            e = (0, a.jsx)(y.r, {
                onComplete: () => (0, p.pX)(j.BVt.ME),
                data: r.userCodeData,
            });
            break;
        case "error":
            e = (0, a.jsx)(m.S, {
                onTryAgain: C,
            });
            break;
        default:
            e = null;
    }
    return (0, a.jsxs)("div", {
        className: w.fY,
        children: [
            (0, a.jsx)("img", {
                className: w.xX,
                src: N,
                alt: "",
            }),
            (0, a.jsx)(u.A, {
                show: !0,
                className: w.wm,
            }),
            I
                ? (0, a.jsx)("div", {
                      className: w.Qs,
                      children: e,
                  })
                : e,
        ],
    });
}
let C = (0, d.C)(_),
    E = function () {
        return (0, i.zy)().pathname !== j.BVt.ACTIVATE_HANDOFF ? (0, a.jsx)(C, {}) : (0, a.jsx)(_, {});
    };
