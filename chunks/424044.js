n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    s = n(442837),
    l = n(481060),
    a = n(893776),
    o = n(232567),
    c = n(129293),
    u = n(388905),
    d = n(353926),
    h = n(185625),
    g = n(551549),
    p = n(108427),
    m = n(314897),
    f = n(981631),
    _ = n(388032),
    x = n(197571);
s.ZP.initialize();
let E = (e) => {
    let { location: t } = e,
        n = (0, s.e7)([m.default], () => m.default.isAuthenticated()),
        E = (0, s.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        v = (0, g.oK)("RSL - Landing Page"),
        [b, j] = i.useState(!1),
        [I, y] = i.useState(_.intl.string(_.t["9exy+V"])),
        [O, S] = i.useState(!0),
        N = (e) => {
            switch (e) {
                case f.evJ.INVALID_FORM_BODY:
                case f.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    y(_.intl.string(_.t.bzXDfc));
                    break;
                case f.evJ.DSA_RSL_ALREADY_REQUESTED:
                    y(_.intl.string(_.t.rV00wq));
                    break;
                case f.evJ.DSA_RSL_LIMITED_TIME:
                    y(_.intl.string(_.t["0dI29h"]));
                    break;
                case f.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    y(_.intl.string(_.t["RGa/Gb"]));
                    break;
                default:
                    y(_.intl.string(_.t["0QLzfv"]));
            }
        };
    return (
        i.useEffect(() => {
            n
                ? (S(!0),
                  o
                      .k({ withAnalyticsToken: !0 })
                      .then(() => S(!1))
                      .catch(() => S(!1)))
                : S(!1);
        }, [n]),
        i.useEffect(() => {
            E || v || a.Z.getExperiments();
        }, [E, v]),
        i.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? y(_.intl.string(_.t.e6mZMt)) : N(null == (t = n.body) ? void 0 : t.code);
                } catch (e) {
                    N(null == (n = e.body) ? void 0 : n.code);
                } finally {
                    j(!1);
                }
            };
            j(!0), e((0, c.Z)(t)), (0, p.e)("report_second_look");
        }, [t]),
        v &&
            !O &&
            (0, r.jsxs)(u.ZP, {
                children: [
                    (0, r.jsx)(u.Dx, {
                        className: x.marginBottom8,
                        children: I,
                    }),
                    b && (0, r.jsx)(l.$jN, {}),
                ],
            })
    );
};
