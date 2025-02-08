n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(893776),
    s = n(232567),
    c = n(129293),
    d = n(388905),
    u = n(353926),
    h = n(185625),
    _ = n(551549),
    g = n(108427),
    m = n(314897),
    p = n(981631),
    f = n(388032),
    E = n(232186);
a.ZP.initialize();
let x = (e) => {
    let { location: t } = e,
        n = (0, a.e7)([m.default], () => m.default.isAuthenticated()),
        x = (0, a.e7)([u.Z], () => u.Z.hasLoadedExperiments),
        I = (0, _.oK)('RSL - Landing Page'),
        [C, v] = r.useState(!1),
        [N, b] = r.useState(f.intl.string(f.t['9exy+f'])),
        [S, T] = r.useState(!0),
        A = (e) => {
            switch (e) {
                case p.evJ.INVALID_FORM_BODY:
                case p.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    b(f.intl.string(f.t.bzXDfX));
                    break;
                case p.evJ.DSA_RSL_ALREADY_REQUESTED:
                    b(f.intl.string(f.t.rV00ws));
                    break;
                case p.evJ.DSA_RSL_LIMITED_TIME:
                    b(f.intl.string(f.t['0dI29v']));
                    break;
                case p.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    b(f.intl.string(f.t['RGa/GR']));
                    break;
                default:
                    b(f.intl.string(f.t['0QLzfn']));
            }
        };
    return (
        r.useEffect(() => {
            n
                ? (T(!0),
                  s
                      .k({ withAnalyticsToken: !0 })
                      .then(() => T(!1))
                      .catch(() => T(!1)))
                : T(!1);
        }, [n]),
        r.useEffect(() => {
            x || I || o.Z.getExperiments();
        }, [x, I]),
        r.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? b(f.intl.string(f.t.e6mZMj)) : A(null === (t = n.body) || void 0 === t ? void 0 : t.code);
                } catch (e) {
                    A(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                } finally {
                    v(!1);
                }
            };
            v(!0), e((0, c.Z)(t)), (0, g.e)('report_second_look');
        }, [t]),
        I &&
            !S &&
            (0, i.jsxs)(d.ZP, {
                children: [
                    (0, i.jsx)(d.Dx, {
                        className: E.marginBottom8,
                        children: N
                    }),
                    C && (0, i.jsx)(l.$jN, {})
                ]
            })
    );
};
