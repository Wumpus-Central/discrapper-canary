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
    p = n(551549),
    g = n(108427),
    f = n(314897),
    m = n(981631),
    _ = n(388032),
    x = n(20493);
l.ZP.initialize();
let E = (e) => {
    let { location: t } = e,
        n = (0, l.e7)([f.default], () => f.default.isAuthenticated()),
        E = (0, l.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        b = (0, p.oK)('RSL - Landing Page'),
        [v, j] = i.useState(!1),
        [I, O] = i.useState(_.intl.string(_.t['9exy+f'])),
        [S, N] = i.useState(!0),
        y = (e) => {
            switch (e) {
                case m.evJ.INVALID_FORM_BODY:
                case m.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    O(_.intl.string(_.t.bzXDfX));
                    break;
                case m.evJ.DSA_RSL_ALREADY_REQUESTED:
                    O(_.intl.string(_.t.rV00ws));
                    break;
                case m.evJ.DSA_RSL_LIMITED_TIME:
                    O(_.intl.string(_.t['0dI29v']));
                    break;
                case m.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    O(_.intl.string(_.t['RGa/GR']));
                    break;
                default:
                    O(_.intl.string(_.t['0QLzfn']));
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
                    null != n ? O(_.intl.string(_.t.e6mZMj)) : y(null == (t = n.body) ? void 0 : t.code);
                } catch (e) {
                    y(null == (n = e.body) ? void 0 : n.code);
                } finally {
                    j(!1);
                }
            };
            j(!0), e((0, c.Z)(t)), (0, g.e)('report_second_look');
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
