"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(289873),
    a = n(830215),
    o = n(803306),
    c = n(396681),
    d = n(854378),
    u = n(49463),
    _ = n(369053),
    h = n(158237),
    m = n(210714),
    p = n(961350),
    g = n(652215),
    A = n(985018),
    f = n(818050);
r.Ay.initialize();
let x = (e) => {
    let { location: t } = e,
        n = (0, r.bG)([p.default], () => p.default.isAuthenticated()),
        x = (0, r.bG)([u.A], () => u.A.hasLoadedExperiments),
        E = (0, h.Jp)("RSL - Landing Page"),
        [I, v] = s.useState(!1),
        [N, j] = s.useState(A.intl.string(A.t["9exy+V"])),
        [C, T] = s.useState(!0),
        b = (e) => {
            switch (e) {
                case g.t02.INVALID_FORM_BODY:
                case g.t02.DSA_RSL_REPORT_NOT_FOUND:
                    j(A.intl.string(A.t.bzXDfc));
                    break;
                case g.t02.DSA_RSL_ALREADY_REQUESTED:
                    j(A.intl.string(A.t.rV00wq));
                    break;
                case g.t02.DSA_RSL_LIMITED_TIME:
                    j(A.intl.string(A.t["0dI29h"]));
                    break;
                case g.t02.DSA_RSL_REPORT_INELIGIBLE:
                    j(A.intl.string(A.t["RGa/Gb"]));
                    break;
                default:
                    j(A.intl.string(A.t["0QLzfv"]));
            }
        };
    return (
        s.useEffect(() => {
            n
                ? (T(!0),
                  o
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => T(!1))
                      .catch(() => T(!1)))
                : T(!1);
        }, [n]),
        s.useEffect(() => {
            x || E || a.A.getExperiments();
        }, [x, E]),
        s.useEffect(() => {
            let e = async (e) => {
                try {
                    let t = null != e ? await (0, _.q)(e) : void 0;
                    null != t ? j(A.intl.string(A.t.e6mZMt)) : b(t.body?.code);
                } catch (e) {
                    b(e.body?.code);
                } finally {
                    v(!1);
                }
            };
            v(!0), e((0, c.A)(t)), (0, m.d)("report_second_look");
        }, [t]),
        E &&
            !C &&
            (0, i.jsxs)(d.Ay, {
                children: [(0, i.jsx)(d.hE, { className: f.QB, children: N }), I && (0, i.jsx)(l.y, {})],
            })
    );
};
