n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(481060),
    s = n(893776),
    a = n(232567),
    c = n(129293),
    u = n(388905),
    d = n(353926),
    h = n(185625),
    f = n(551549),
    p = n(108427),
    g = n(314897),
    m = n(981631),
    _ = n(388032),
    x = n(197571);
l.ZP.initialize();
let v = (e) => {
    let { location: t } = e,
        n = (0, l.e7)([g.default], () => g.default.isAuthenticated()),
        v = (0, l.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        E = (0, f.oK)("RSL - Landing Page"),
        [b, j] = i.useState(!1),
        [I, N] = i.useState(_.intl.string(_.t["9exy+f"])),
        [y, O] = i.useState(!0),
        S = (e) => {
            switch (e) {
                case m.evJ.INVALID_FORM_BODY:
                case m.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    N(_.intl.string(_.t.bzXDfX));
                    break;
                case m.evJ.DSA_RSL_ALREADY_REQUESTED:
                    N(_.intl.string(_.t.rV00ws));
                    break;
                case m.evJ.DSA_RSL_LIMITED_TIME:
                    N(_.intl.string(_.t["0dI29v"]));
                    break;
                case m.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    N(_.intl.string(_.t["RGa/GR"]));
                    break;
                default:
                    N(_.intl.string(_.t["0QLzfn"]));
            }
        };
    return (
        i.useEffect(() => {
            n
                ? (O(!0),
                  a
                      .k({ withAnalyticsToken: !0 })
                      .then(() => O(!1))
                      .catch(() => O(!1)))
                : O(!1);
        }, [n]),
        i.useEffect(() => {
            v || E || s.Z.getExperiments();
        }, [v, E]),
        i.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? N(_.intl.string(_.t.e6mZMj)) : S(null == (t = n.body) ? void 0 : t.code);
                } catch (e) {
                    S(null == (n = e.body) ? void 0 : n.code);
                } finally {
                    j(!1);
                }
            };
            j(!0), e((0, c.Z)(t)), (0, p.e)("report_second_look");
        }, [t]),
        E &&
            !y &&
            (0, r.jsxs)(u.ZP, {
                children: [
                    (0, r.jsx)(u.Dx, {
                        className: x.marginBottom8,
                        children: I,
                    }),
                    b && (0, r.jsx)(o.$jN, {}),
                ],
            })
    );
};
