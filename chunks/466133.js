"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(397927),
    a = n(830215),
    o = n(803306),
    c = n(396681),
    d = n(854378),
    u = n(49463),
    h = n(369053),
    _ = n(158237),
    p = n(210714),
    g = n(961350),
    m = n(652215),
    f = n(985018),
    A = n(473169);
r.Ay.initialize();
let E = (e) => {
    let { location: t } = e,
        n = (0, r.bG)([g.default], () => g.default.isAuthenticated()),
        E = (0, r.bG)([u.A], () => u.A.hasLoadedExperiments),
        x = (0, _.Jp)("RSL - Landing Page"),
        [v, I] = s.useState(!1),
        [N, S] = s.useState(f.intl.string(f.t["9exy+V"])),
        [j, C] = s.useState(!0),
        y = (e) => {
            switch (e) {
                case m.t02.INVALID_FORM_BODY:
                case m.t02.DSA_RSL_REPORT_NOT_FOUND:
                    S(f.intl.string(f.t.bzXDfc));
                    break;
                case m.t02.DSA_RSL_ALREADY_REQUESTED:
                    S(f.intl.string(f.t.rV00wq));
                    break;
                case m.t02.DSA_RSL_LIMITED_TIME:
                    S(f.intl.string(f.t["0dI29h"]));
                    break;
                case m.t02.DSA_RSL_REPORT_INELIGIBLE:
                    S(f.intl.string(f.t["RGa/Gb"]));
                    break;
                default:
                    S(f.intl.string(f.t["0QLzfv"]));
            }
        };
    return (
        s.useEffect(() => {
            n
                ? (C(!0),
                  o
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => C(!1))
                      .catch(() => C(!1)))
                : C(!1);
        }, [n]),
        s.useEffect(() => {
            E || x || a.A.getExperiments();
        }, [E, x]),
        s.useEffect(() => {
            let e = async (e) => {
                try {
                    let t = null != e ? await (0, h.q)(e) : void 0;
                    null != t ? S(f.intl.string(f.t.e6mZMt)) : y(t.body?.code);
                } catch (e) {
                    y(e.body?.code);
                } finally {
                    I(!1);
                }
            };
            I(!0), e((0, c.A)(t)), (0, p.d)("report_second_look");
        }, [t]),
        x &&
            !j &&
            (0, i.jsxs)(d.Ay, {
                children: [(0, i.jsx)(d.hE, { className: A.QB, children: N }), v && (0, i.jsx)(l.y$y, {})],
            })
    );
};
