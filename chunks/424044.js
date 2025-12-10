n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(442837),
    l = n(481060),
    a = n(893776),
    o = n(232567),
    c = n(129293),
    u = n(388905),
    d = n(353926),
    h = n(185625),
    g = n(551549),
    m = n(108427),
    p = n(314897),
    f = n(981631),
    _ = n(388032),
    x = n(197571);
s.ZP.initialize();
let E = (e) => {
    let { location: t } = e,
        n = (0, s.e7)([p.default], () => p.default.isAuthenticated()),
        E = (0, s.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        v = (0, g.oK)("RSL - Landing Page"),
        [j, b] = i.useState(!1),
        [I, N] = i.useState(_.intl.string(_.t["9exy+V"])),
        [y, S] = i.useState(!0),
        C = (e) => {
            switch (e) {
                case f.evJ.INVALID_FORM_BODY:
                case f.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    N(_.intl.string(_.t.bzXDfc));
                    break;
                case f.evJ.DSA_RSL_ALREADY_REQUESTED:
                    N(_.intl.string(_.t.rV00wq));
                    break;
                case f.evJ.DSA_RSL_LIMITED_TIME:
                    N(_.intl.string(_.t["0dI29h"]));
                    break;
                case f.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    N(_.intl.string(_.t["RGa/Gb"]));
                    break;
                default:
                    N(_.intl.string(_.t["0QLzfv"]));
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
                    null != n ? N(_.intl.string(_.t.e6mZMt)) : C(null == (t = n.body) ? void 0 : t.code);
                } catch (e) {
                    C(null == (n = e.body) ? void 0 : n.code);
                } finally {
                    b(!1);
                }
            };
            b(!0), e((0, c.Z)(t)), (0, m.e)("report_second_look");
        }, [t]),
        v &&
            !y &&
            (0, r.jsxs)(u.ZP, {
                children: [
                    (0, r.jsx)(u.Dx, {
                        className: x.marginBottom8,
                        children: I,
                    }),
                    j && (0, r.jsx)(l.$jN, {}),
                ],
            })
    );
};
