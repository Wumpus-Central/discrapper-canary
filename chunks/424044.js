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
    x = n(10198);
s.ZP.initialize();
let E = (e) => {
    let { location: t } = e,
        n = (0, s.e7)([p.default], () => p.default.isAuthenticated()),
        E = (0, s.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        v = (0, g.oK)("RSL - Landing Page"),
        [j, b] = i.useState(!1),
        [I, y] = i.useState(_.intl.string(_.t["9exy+V"])),
        [S, N] = i.useState(!0),
        O = (e) => {
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
                ? (N(!0),
                  o
                      .k({ withAnalyticsToken: !0 })
                      .then(() => N(!1))
                      .catch(() => N(!1)))
                : N(!1);
        }, [n]),
        i.useEffect(() => {
            E || v || a.Z.getExperiments();
        }, [E, v]),
        i.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? y(_.intl.string(_.t.e6mZMt)) : O(null == (t = n.body) ? void 0 : t.code);
                } catch (e) {
                    O(null == (n = e.body) ? void 0 : n.code);
                } finally {
                    b(!1);
                }
            };
            b(!0), e((0, c.Z)(t)), (0, m.e)("report_second_look");
        }, [t]),
        v &&
            !S &&
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
