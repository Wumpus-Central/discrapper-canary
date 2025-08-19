n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
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
    f = n(314897),
    g = n(981631),
    _ = n(388032),
    x = n(197571);
l.ZP.initialize();
let b = (e) => {
    let { location: t } = e,
        n = (0, l.e7)([f.default], () => f.default.isAuthenticated()),
        b = (0, l.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        v = (0, p.oK)("RSL - Landing Page"),
        [E, j] = i.useState(!1),
        [I, y] = i.useState(_.intl.string(_.t["9exy+f"])),
        [O, N] = i.useState(!0),
        S = (e) => {
            switch (e) {
                case g.evJ.INVALID_FORM_BODY:
                case g.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    y(_.intl.string(_.t.bzXDfX));
                    break;
                case g.evJ.DSA_RSL_ALREADY_REQUESTED:
                    y(_.intl.string(_.t.rV00ws));
                    break;
                case g.evJ.DSA_RSL_LIMITED_TIME:
                    y(_.intl.string(_.t["0dI29v"]));
                    break;
                case g.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    y(_.intl.string(_.t["RGa/GR"]));
                    break;
                default:
                    y(_.intl.string(_.t["0QLzfn"]));
            }
        };
    return (
        i.useEffect(() => {
            n
                ? (N(!0),
                  s
                      .k({ withAnalyticsToken: !0 })
                      .then(() => N(!1))
                      .catch(() => N(!1)))
                : N(!1);
        }, [n]),
        i.useEffect(() => {
            b || v || o.Z.getExperiments();
        }, [b, v]),
        i.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? y(_.intl.string(_.t.e6mZMj)) : S(null == (t = n.body) ? void 0 : t.code);
                } catch (e) {
                    S(null == (n = e.body) ? void 0 : n.code);
                } finally {
                    j(!1);
                }
            };
            j(!0), e((0, c.Z)(t)), (0, m.e)("report_second_look");
        }, [t]),
        v &&
            !O &&
            (0, r.jsxs)(u.ZP, {
                children: [
                    (0, r.jsx)(u.Dx, {
                        className: x.marginBottom8,
                        children: I,
                    }),
                    E && (0, r.jsx)(a.$jN, {}),
                ],
            })
    );
};
