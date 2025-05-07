n.d(t, { Z: () => E }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(481060),
    o = n(893776),
    a = n(232567),
    c = n(129293),
    u = n(388905),
    d = n(353926),
    h = n(185625),
    g = n(551549),
    p = n(108427),
    m = n(314897),
    f = n(981631),
    _ = n(388032),
    x = n(20493);
l.ZP.initialize();
let E = (e) => {
    let { location: t } = e,
        n = (0, l.e7)([m.default], () => m.default.isAuthenticated()),
        E = (0, l.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        b = (0, g.oK)('RSL - Landing Page'),
        [v, O] = i.useState(!1),
        [I, j] = i.useState(_.intl.string(_.t['9exy+f'])),
        [S, N] = i.useState(!0),
        y = (e) => {
            switch (e) {
                case f.evJ.INVALID_FORM_BODY:
                case f.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    j(_.intl.string(_.t.bzXDfX));
                    break;
                case f.evJ.DSA_RSL_ALREADY_REQUESTED:
                    j(_.intl.string(_.t.rV00ws));
                    break;
                case f.evJ.DSA_RSL_LIMITED_TIME:
                    j(_.intl.string(_.t['0dI29v']));
                    break;
                case f.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    j(_.intl.string(_.t['RGa/GR']));
                    break;
                default:
                    j(_.intl.string(_.t['0QLzfn']));
            }
        };
    return (
        i.useEffect(() => {
            n
                ? (N(!0),
                  a
                      .k({ withAnalyticsToken: !0 })
                      .then(() => N(!1))
                      .catch(() => N(!1)))
                : N(!1);
        }, [n]),
        i.useEffect(() => {
            E || b || o.Z.getExperiments();
        }, [E, b]),
        i.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? j(_.intl.string(_.t.e6mZMj)) : y(null == (t = n.body) ? void 0 : t.code);
                } catch (e) {
                    y(null == (n = e.body) ? void 0 : n.code);
                } finally {
                    O(!1);
                }
            };
            O(!0), e((0, c.Z)(t)), (0, p.e)('report_second_look');
        }, [t]),
        b &&
            !S &&
            (0, r.jsxs)(u.ZP, {
                children: [
                    (0, r.jsx)(u.Dx, {
                        className: x.marginBottom8,
                        children: I
                    }),
                    v && (0, r.jsx)(s.$jN, {})
                ]
            })
    );
};
