n.d(t, { Z: () => x }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    l = n(481060),
    o = n(893776),
    a = n(232567),
    c = n(129293),
    u = n(388905),
    d = n(353926),
    h = n(185625),
    p = n(551549),
    g = n(108427),
    f = n(314897),
    m = n(981631),
    _ = n(388032),
    N = n(20493);
s.ZP.initialize();
let x = (e) => {
    let { location: t } = e,
        n = (0, s.e7)([f.default], () => f.default.isAuthenticated()),
        x = (0, s.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        b = (0, p.oK)('RSL - Landing Page'),
        [E, v] = i.useState(!1),
        [j, I] = i.useState(_.NW.string(_.t['9exy+f'])),
        [O, S] = i.useState(!0),
        y = (e) => {
            switch (e) {
                case m.evJ.INVALID_FORM_BODY:
                case m.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    I(_.NW.string(_.t.bzXDfX));
                    break;
                case m.evJ.DSA_RSL_ALREADY_REQUESTED:
                    I(_.NW.string(_.t.rV00ws));
                    break;
                case m.evJ.DSA_RSL_LIMITED_TIME:
                    I(_.NW.string(_.t['0dI29v']));
                    break;
                case m.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    I(_.NW.string(_.t['RGa/GR']));
                    break;
                default:
                    I(_.NW.string(_.t['0QLzfn']));
            }
        };
    return (
        i.useEffect(() => {
            n
                ? (S(!0),
                  a
                      .k({ withAnalyticsToken: !0 })
                      .then(() => S(!1))
                      .catch(() => S(!1)))
                : S(!1);
        }, [n]),
        i.useEffect(() => {
            x || b || o.Z.getExperiments();
        }, [x, b]),
        i.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? I(_.NW.string(_.t.e6mZMj)) : y(null == (t = n.body) ? void 0 : t.code);
                } catch (e) {
                    y(null == (n = e.body) ? void 0 : n.code);
                } finally {
                    v(!1);
                }
            };
            v(!0), e((0, c.Z)(t)), (0, g.e)('report_second_look');
        }, [t]),
        b &&
            !O &&
            (0, r.jsxs)(u.ZP, {
                children: [
                    (0, r.jsx)(u.Dx, {
                        className: N.marginBottom8,
                        children: j
                    }),
                    E && (0, r.jsx)(l.$jN, {})
                ]
            })
    );
};
