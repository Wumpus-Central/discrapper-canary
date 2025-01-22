n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    o = n(893776),
    a = n(232567),
    c = n(129293),
    d = n(388905),
    u = n(353926),
    h = n(185625),
    g = n(551549),
    f = n(108427),
    m = n(314897),
    p = n(981631),
    x = n(388032),
    _ = n(232186);
s.ZP.initialize();
t.Z = (e) => {
    let { location: t } = e,
        n = (0, s.e7)([m.default], () => m.default.isAuthenticated()),
        E = (0, s.e7)([u.Z], () => u.Z.hasLoadedExperiments),
        I = (0, g.oK)('RSL - Landing Page'),
        [N, v] = r.useState(!1),
        [C, b] = r.useState(x.intl.string(x.t['9exy+f'])),
        [T, Z] = r.useState(!0),
        S = (e) => {
            switch (e) {
                case p.evJ.INVALID_FORM_BODY:
                case p.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    b(x.intl.string(x.t.bzXDfX));
                    break;
                case p.evJ.DSA_RSL_ALREADY_REQUESTED:
                    b(x.intl.string(x.t.rV00ws));
                    break;
                case p.evJ.DSA_RSL_LIMITED_TIME:
                    b(x.intl.string(x.t['0dI29v']));
                    break;
                case p.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    b(x.intl.string(x.t['RGa/GR']));
                    break;
                default:
                    b(x.intl.string(x.t['0QLzfn']));
            }
        };
    return (
        r.useEffect(() => {
            n
                ? (Z(!0),
                  a
                      .k({ withAnalyticsToken: !0 })
                      .then(() => Z(!1))
                      .catch(() => Z(!1)))
                : Z(!1);
        }, [n]),
        r.useEffect(() => {
            !E && !I && o.Z.getExperiments();
        }, [E, I]),
        r.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? b(x.intl.string(x.t.e6mZMj)) : S(null === (t = n.body) || void 0 === t ? void 0 : t.code);
                } catch (e) {
                    S(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                } finally {
                    v(!1);
                }
            };
            v(!0), e((0, c.Z)(t)), (0, f.e)('report_second_look');
        }, [t]),
        I &&
            !T &&
            (0, i.jsxs)(d.ZP, {
                children: [
                    (0, i.jsx)(d.Dx, {
                        className: _.marginBottom8,
                        children: C
                    }),
                    N && (0, i.jsx)(l.Spinner, {})
                ]
            })
    );
};
