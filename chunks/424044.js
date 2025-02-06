n.d(t, { Z: () => E }), n(47120);
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
    x = n(232186);
l.ZP.initialize();
let E = (e) => {
    let { location: t } = e,
        n = (0, l.e7)([p.default], () => p.default.isAuthenticated()),
        E = (0, l.e7)([u.Z], () => u.Z.hasLoadedExperiments),
        I = (0, _.oK)('RSL - Landing Page'),
        [v, N] = r.useState(!1),
        [b, C] = r.useState(f.intl.string(f.t['9exy+f'])),
        [T, S] = r.useState(!0),
        A = (e) => {
            switch (e) {
                case m.evJ.INVALID_FORM_BODY:
                case m.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    C(f.intl.string(f.t.bzXDfX));
                    break;
                case m.evJ.DSA_RSL_ALREADY_REQUESTED:
                    C(f.intl.string(f.t.rV00ws));
                    break;
                case m.evJ.DSA_RSL_LIMITED_TIME:
                    C(f.intl.string(f.t['0dI29v']));
                    break;
                case m.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    C(f.intl.string(f.t['RGa/GR']));
                    break;
                default:
                    C(f.intl.string(f.t['0QLzfn']));
            }
        };
    return (
        r.useEffect(() => {
            n
                ? (S(!0),
                  s
                      .k({ withAnalyticsToken: !0 })
                      .then(() => S(!1))
                      .catch(() => S(!1)))
                : S(!1);
        }, [n]),
        r.useEffect(() => {
            E || I || o.Z.getExperiments();
        }, [E, I]),
        r.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? C(f.intl.string(f.t.e6mZMj)) : A(null === (t = n.body) || void 0 === t ? void 0 : t.code);
                } catch (e) {
                    A(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                } finally {
                    N(!1);
                }
            };
            N(!0), e((0, c.Z)(t)), (0, g.e)('report_second_look');
        }, [t]),
        I &&
            !T &&
            (0, i.jsxs)(d.ZP, {
                children: [
                    (0, i.jsx)(d.Dx, {
                        className: x.marginBottom8,
                        children: b
                    }),
                    v && (0, i.jsx)(a.$jN, {})
                ]
            })
    );
};
