n.d(t, { Z: () => E }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(893776),
    s = n(232567),
    c = n(129293),
    u = n(388905),
    d = n(353926),
    h = n(185625),
    p = n(551549),
    m = n(108427),
    g = n(314897),
    f = n(981631),
    _ = n(388032),
    x = n(20493);
l.ZP.initialize();
let E = (e) => {
    let { location: t } = e,
        n = (0, l.e7)([g.default], () => g.default.isAuthenticated()),
        E = (0, l.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        b = (0, p.oK)('RSL - Landing Page'),
        [I, v] = i.useState(!1),
        [O, N] = i.useState(_.intl.string(_.t['9exy+f'])),
        [j, S] = i.useState(!0),
        y = (e) => {
            switch (e) {
                case f.evJ.INVALID_FORM_BODY:
                case f.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    N(_.intl.string(_.t.bzXDfX));
                    break;
                case f.evJ.DSA_RSL_ALREADY_REQUESTED:
                    N(_.intl.string(_.t.rV00ws));
                    break;
                case f.evJ.DSA_RSL_LIMITED_TIME:
                    N(_.intl.string(_.t['0dI29v']));
                    break;
                case f.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    N(_.intl.string(_.t['RGa/GR']));
                    break;
                default:
                    N(_.intl.string(_.t['0QLzfn']));
            }
        };
    return (
        i.useEffect(() => {
            n
                ? (S(!0),
                  s
                      .k({ withAnalyticsToken: !0 })
                      .then(() => S(!1))
                      .catch(() => S(!1)))
                : S(!1);
        }, [n]),
        i.useEffect(() => {
            E || b || o.Z.getExperiments();
        }, [E, b]),
        i.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? N(_.intl.string(_.t.e6mZMj)) : y(null == (t = n.body) ? void 0 : t.code);
                } catch (e) {
                    y(null == (n = e.body) ? void 0 : n.code);
                } finally {
                    v(!1);
                }
            };
            v(!0), e((0, c.Z)(t)), (0, m.e)('report_second_look');
        }, [t]),
        b &&
            !j &&
            (0, r.jsxs)(u.ZP, {
                children: [
                    (0, r.jsx)(u.Dx, {
                        className: x.marginBottom8,
                        children: O
                    }),
                    I && (0, r.jsx)(a.$jN, {})
                ]
            })
    );
};
