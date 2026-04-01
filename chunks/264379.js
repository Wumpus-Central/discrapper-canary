"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(251358),
    u = n(133636),
    c = n(905228),
    d = n(790225),
    _ = n(311600),
    f = n(549719),
    p = n(346640),
    h = n(429311),
    m = n(985018),
    E = n(929916),
    g = n(524794);
let A = 15,
    I = 3,
    T = 1,
    S = 100,
    y = 100;
function v() {
    let [e, t] = (0, i.useState)(0),
        [n, s] = (0, i.useState)(!1),
        v = (0, i.useRef)(!1),
        C = (0, o.bG)([u.A], () => u.A.hasStartedActivity(p.$p.GATHERING)),
        N = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
        let e = setInterval(() => {
            t((e) => {
                let t = Math.max(e - T, 0);
                return e > 0 && 0 === t && (N.current = !0), t;
            });
        }, S);
        return () => clearInterval(e);
    }, []);
    let R = () => {
        C ||
            v.current ||
            ((v.current = !0),
            (0, l.Ox)({ activity: p.$p.GATHERING }).finally(() => {
                v.current = !1;
            })),
            t((e) => {
                let t = I + (1 - Math.min(e / y, 1)) * (A - I);
                return Math.min(e + t, y);
            }),
            (0, d.PT)(c.R.TWENTY_ONE, 1);
    };
    return (
        (0, i.useEffect)(() => {
            let r = async () => {
                s(!0);
                let e = !N.current;
                N.current = !1;
                try {
                    await (0, l.du)({ activity: p.$p.GATHERING });
                } catch (e) {}
                e && (0, d.PT)(c.R.THIRTEEN, 1), t(0), s(!1);
            };
            n || e !== y || r();
        }, [e, n]),
        (0, r.jsxs)("div", {
            className: E.LO,
            children: [
                (0, r.jsx)(_.A, {
                    activity: p.$p.GATHERING,
                    text: m.intl.string(h.default.OAahQa),
                    asset: g.A,
                    onClick: R,
                }),
                (0, r.jsx)(f.A, { className: a()(E.hr, e > 0 ? E.tr : null), percentage: e }),
            ],
        })
    );
}
