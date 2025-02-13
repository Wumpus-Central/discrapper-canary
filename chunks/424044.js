n.d(t, { Z: () => x }), n(47120);
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
    m = n(108427),
    g = n(314897),
    p = n(981631),
    f = n(388032),
    E = n(483938);
l.ZP.initialize();
let x = (e) => {
    let { location: t } = e,
        n = (0, l.e7)([g.default], () => g.default.isAuthenticated()),
        x = (0, l.e7)([u.Z], () => u.Z.hasLoadedExperiments),
        I = (0, _.oK)('RSL - Landing Page'),
        [v, C] = r.useState(!1),
        [N, S] = r.useState(f.intl.string(f.t['9exy+f'])),
        [T, A] = r.useState(!0),
        b = (e) => {
            switch (e) {
                case p.evJ.INVALID_FORM_BODY:
                case p.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    S(f.intl.string(f.t.bzXDfX));
                    break;
                case p.evJ.DSA_RSL_ALREADY_REQUESTED:
                    S(f.intl.string(f.t.rV00ws));
                    break;
                case p.evJ.DSA_RSL_LIMITED_TIME:
                    S(f.intl.string(f.t['0dI29v']));
                    break;
                case p.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    S(f.intl.string(f.t['RGa/GR']));
                    break;
                default:
                    S(f.intl.string(f.t['0QLzfn']));
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
            x || I || o.Z.getExperiments();
        }, [x, I]),
        r.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? S(f.intl.string(f.t.e6mZMj)) : b(null === (t = n.body) || void 0 === t ? void 0 : t.code);
                } catch (e) {
                    b(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                } finally {
                    C(!1);
                }
            };
            C(!0), e((0, c.Z)(t)), (0, m.e)('report_second_look');
        }, [t]),
        I &&
            !T &&
            (0, i.jsxs)(d.ZP, {
                children: [
                    (0, i.jsx)(d.Dx, {
                        className: E.marginBottom8,
                        children: N
                    }),
                    v && (0, i.jsx)(a.$jN, {})
                ]
            })
    );
};
