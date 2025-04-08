n.d(t, { Z: () => x }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    l = n(893776),
    s = n(232567),
    c = n(129293),
    u = n(388905),
    d = n(353926),
    p = n(185625),
    h = n(551549),
    g = n(108427),
    f = n(314897),
    m = n(981631),
    _ = n(388032),
    b = n(20493);
o.ZP.initialize();
let x = (e) => {
    let { location: t } = e,
        n = (0, o.e7)([f.default], () => f.default.isAuthenticated()),
        x = (0, o.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        N = (0, h.oK)('RSL - Landing Page'),
        [v, E] = i.useState(!1),
        [I, j] = i.useState(_.NW.string(_.t['9exy+f'])),
        [S, O] = i.useState(!0),
        C = (e) => {
            switch (e) {
                case m.evJ.INVALID_FORM_BODY:
                case m.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    j(_.NW.string(_.t.bzXDfX));
                    break;
                case m.evJ.DSA_RSL_ALREADY_REQUESTED:
                    j(_.NW.string(_.t.rV00ws));
                    break;
                case m.evJ.DSA_RSL_LIMITED_TIME:
                    j(_.NW.string(_.t['0dI29v']));
                    break;
                case m.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    j(_.NW.string(_.t['RGa/GR']));
                    break;
                default:
                    j(_.NW.string(_.t['0QLzfn']));
            }
        };
    return (
        i.useEffect(() => {
            n
                ? (O(!0),
                  s
                      .k({ withAnalyticsToken: !0 })
                      .then(() => O(!1))
                      .catch(() => O(!1)))
                : O(!1);
        }, [n]),
        i.useEffect(() => {
            x || N || l.Z.getExperiments();
        }, [x, N]),
        i.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, p.hs)(e) : void 0;
                    null != n ? j(_.NW.string(_.t.e6mZMj)) : C(null == (t = n.body) ? void 0 : t.code);
                } catch (e) {
                    C(null == (n = e.body) ? void 0 : n.code);
                } finally {
                    E(!1);
                }
            };
            E(!0), e((0, c.Z)(t)), (0, g.e)('report_second_look');
        }, [t]),
        N &&
            !S &&
            (0, r.jsxs)(u.ZP, {
                children: [
                    (0, r.jsx)(u.Dx, {
                        className: b.marginBottom8,
                        children: I
                    }),
                    v && (0, r.jsx)(a.$jN, {})
                ]
            })
    );
};
