n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(893776),
    s = n(232567),
    c = n(129293),
    d = n(388905),
    u = n(353926),
    h = n(185625),
    _ = n(551549),
    g = n(108427),
    p = n(314897),
    m = n(981631),
    f = n(388032),
    E = n(232186);
l.ZP.initialize();
let I = (e) => {
    let { location: t } = e,
        n = (0, l.e7)([p.default], () => p.default.isAuthenticated()),
        I = (0, l.e7)([u.Z], () => u.Z.hasLoadedExperiments),
        x = (0, _.oK)('RSL - Landing Page'),
        [C, N] = r.useState(!1),
        [v, T] = r.useState(f.intl.string(f.t['9exy+f'])),
        [S, A] = r.useState(!0),
        b = (e) => {
            switch (e) {
                case m.evJ.INVALID_FORM_BODY:
                case m.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    T(f.intl.string(f.t.bzXDfX));
                    break;
                case m.evJ.DSA_RSL_ALREADY_REQUESTED:
                    T(f.intl.string(f.t.rV00ws));
                    break;
                case m.evJ.DSA_RSL_LIMITED_TIME:
                    T(f.intl.string(f.t['0dI29v']));
                    break;
                case m.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    T(f.intl.string(f.t['RGa/GR']));
                    break;
                default:
                    T(f.intl.string(f.t['0QLzfn']));
            }
        };
    return (
        r.useEffect(() => {
            n
                ? (A(!0),
                  s
                      .k({ withAnalyticsToken: !0 })
                      .then(() => A(!1))
                      .catch(() => A(!1)))
                : A(!1);
        }, [n]),
        r.useEffect(() => {
            I || x || o.Z.getExperiments();
        }, [I, x]),
        r.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? T(f.intl.string(f.t.e6mZMj)) : b(null === (t = n.body) || void 0 === t ? void 0 : t.code);
                } catch (e) {
                    b(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                } finally {
                    N(!1);
                }
            };
            N(!0), e((0, c.Z)(t)), (0, g.e)('report_second_look');
        }, [t]),
        x &&
            !S &&
            (0, i.jsxs)(d.ZP, {
                children: [
                    (0, i.jsx)(d.Dx, {
                        className: E.marginBottom8,
                        children: v
                    }),
                    C && (0, i.jsx)(a.$jN, {})
                ]
            })
    );
};
