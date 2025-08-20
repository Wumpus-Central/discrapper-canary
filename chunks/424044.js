n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(481060),
    o = n(893776),
    a = n(232567),
    c = n(129293),
    u = n(388905),
    d = n(353926),
    h = n(185625),
    p = n(551549),
    m = n(108427),
    g = n(314897),
    f = n(981631),
    _ = n(388032),
    x = n(197571);
l.ZP.initialize();
let E = (e) => {
    let { location: t } = e,
        n = (0, l.e7)([g.default], () => g.default.isAuthenticated()),
        E = (0, l.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        v = (0, p.oK)("RSL - Landing Page"),
        [j, b] = i.useState(!1),
        [I, O] = i.useState(_.intl.string(_.t["9exy+f"])),
        [N, y] = i.useState(!0),
        S = (e) => {
            switch (e) {
                case f.evJ.INVALID_FORM_BODY:
                case f.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    O(_.intl.string(_.t.bzXDfX));
                    break;
                case f.evJ.DSA_RSL_ALREADY_REQUESTED:
                    O(_.intl.string(_.t.rV00ws));
                    break;
                case f.evJ.DSA_RSL_LIMITED_TIME:
                    O(_.intl.string(_.t["0dI29v"]));
                    break;
                case f.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    O(_.intl.string(_.t["RGa/GR"]));
                    break;
                default:
                    O(_.intl.string(_.t["0QLzfn"]));
            }
        };
    return (
        i.useEffect(() => {
            n
                ? (y(!0),
                  a
                      .k({ withAnalyticsToken: !0 })
                      .then(() => y(!1))
                      .catch(() => y(!1)))
                : y(!1);
        }, [n]),
        i.useEffect(() => {
            E || v || o.Z.getExperiments();
        }, [E, v]),
        i.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? O(_.intl.string(_.t.e6mZMj)) : S(null == (t = n.body) ? void 0 : t.code);
                } catch (e) {
                    S(null == (n = e.body) ? void 0 : n.code);
                } finally {
                    b(!1);
                }
            };
            b(!0), e((0, c.Z)(t)), (0, m.e)("report_second_look");
        }, [t]),
        v &&
            !N &&
            (0, r.jsxs)(u.ZP, {
                children: [
                    (0, r.jsx)(u.Dx, {
                        className: x.marginBottom8,
                        children: I,
                    }),
                    j && (0, r.jsx)(s.$jN, {}),
                ],
            })
    );
};
