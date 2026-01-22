n.d(t, { A: () => _ }), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(397927),
    a = n(830215),
    o = n(803306),
    c = n(396681),
    u = n(854378),
    d = n(49463),
    h = n(369053),
    f = n(158237),
    p = n(210714),
    g = n(961350),
    m = n(652215),
    A = n(985018),
    x = n(473169);
s.Ay.initialize();
let _ = (e) => {
    let { location: t } = e,
        n = (0, s.bG)([g.default], () => g.default.isAuthenticated()),
        _ = (0, s.bG)([d.A], () => d.A.hasLoadedExperiments),
        E = (0, f.Jp)("RSL - Landing Page"),
        [b, v] = i.useState(!1),
        [j, y] = i.useState(A.intl.string(A.t["9exy+V"])),
        [S, N] = i.useState(!0),
        O = (e) => {
            switch (e) {
                case m.t02.INVALID_FORM_BODY:
                case m.t02.DSA_RSL_REPORT_NOT_FOUND:
                    y(A.intl.string(A.t.bzXDfc));
                    break;
                case m.t02.DSA_RSL_ALREADY_REQUESTED:
                    y(A.intl.string(A.t.rV00wq));
                    break;
                case m.t02.DSA_RSL_LIMITED_TIME:
                    y(A.intl.string(A.t["0dI29h"]));
                    break;
                case m.t02.DSA_RSL_REPORT_INELIGIBLE:
                    y(A.intl.string(A.t["RGa/Gb"]));
                    break;
                default:
                    y(A.intl.string(A.t["0QLzfv"]));
            }
        };
    return (
        i.useEffect(() => {
            n
                ? (N(!0),
                  o
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => N(!1))
                      .catch(() => N(!1)))
                : N(!1);
        }, [n]),
        i.useEffect(() => {
            _ || E || a.A.getExperiments();
        }, [_, E]),
        i.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.q)(e) : void 0;
                    null != n ? y(A.intl.string(A.t.e6mZMt)) : O(null == (t = n.body) ? void 0 : t.code);
                } catch (e) {
                    O(null == (n = e.body) ? void 0 : n.code);
                } finally {
                    v(!1);
                }
            };
            v(!0), e((0, c.A)(t)), (0, p.d)("report_second_look");
        }, [t]),
        E &&
            !S &&
            (0, r.jsxs)(u.Ay, {
                children: [
                    (0, r.jsx)(u.hE, {
                        className: x.QB,
                        children: j,
                    }),
                    b && (0, r.jsx)(l.y$y, {}),
                ],
            })
    );
};
