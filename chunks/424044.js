n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(442837),
    a = n(481060),
    l = n(893776),
    o = n(232567),
    c = n(129293),
    u = n(388905),
    d = n(353926),
    h = n(185625),
    f = n(551549),
    g = n(108427),
    m = n(314897),
    p = n(981631),
    x = n(388032),
    _ = n(478411);
s.ZP.initialize();
let E = (e) => {
    let { location: t } = e,
        n = (0, s.e7)([m.default], () => m.default.isAuthenticated()),
        E = (0, s.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        v = (0, f.oK)("RSL - Landing Page"),
        [b, j] = i.useState(!1),
        [I, N] = i.useState(x.intl.string(x.t["9exy+V"])),
        [y, S] = i.useState(!0),
        C = (e) => {
            switch (e) {
                case p.evJ.INVALID_FORM_BODY:
                case p.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    N(x.intl.string(x.t.bzXDfc));
                    break;
                case p.evJ.DSA_RSL_ALREADY_REQUESTED:
                    N(x.intl.string(x.t.rV00wq));
                    break;
                case p.evJ.DSA_RSL_LIMITED_TIME:
                    N(x.intl.string(x.t["0dI29h"]));
                    break;
                case p.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    N(x.intl.string(x.t["RGa/Gb"]));
                    break;
                default:
                    N(x.intl.string(x.t["0QLzfv"]));
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
            E || v || l.Z.getExperiments();
        }, [E, v]),
        i.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? N(x.intl.string(x.t.e6mZMt)) : C(null == (t = n.body) ? void 0 : t.code);
                } catch (e) {
                    C(null == (n = e.body) ? void 0 : n.code);
                } finally {
                    j(!1);
                }
            };
            j(!0), e((0, c.Z)(t)), (0, g.e)("report_second_look");
        }, [t]),
        v &&
            !y &&
            (0, r.jsxs)(u.ZP, {
                children: [
                    (0, r.jsx)(u.Dx, {
                        className: _.marginBottom8,
                        children: I,
                    }),
                    b && (0, r.jsx)(a.$jN, {}),
                ],
            })
    );
};
