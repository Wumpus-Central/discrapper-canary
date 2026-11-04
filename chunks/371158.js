var e = i(477900),
    a = i(582128),
    l = i(189213),
    r = i(28863),
    c = i(834730),
    s = i(181658),
    o = i(976860),
    d = i(253932),
    u = i(780964),
    p = i(830543),
    f = i(766075),
    h = i(652215),
    k = i(665956),
    C = i(792996);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { transitionState: n, onClose: i } = t,
                [g, x] = a.useState(!1),
                [E, S] = a.useState(null);
            function y() {
                ((0, f.openUserSettings)(u.X.FAMILY_CENTER_PANEL), i());
            }
            return (0, e.jsx)(l.a, {
                transitionState: n,
                onClose: i,
                title: C.intl.string(k.default.VGB30H),
                subtitle: C.intl.format(k.default["CrZZ+p"], {
                    openSettingsHook: (t, n) => (0, e.jsx)(r.Anchor, { onClick: y, children: t }, n),
                }),
                actions: [
                    { variant: "secondary", text: C.intl.string(C.t["ETE/oC"]), onClick: i },
                    {
                        text: C.intl.string(k.default.cSb7U0),
                        onClick: async function () {
                            (S(null), x(!0));
                            try {
                                (await d.dm.updateSetting(!1), (0, o.pX)(h.BVt.FRIENDS), (0, p.default)(), i());
                            } catch (t) {
                                S(new s.A(t).getAnyErrorMessage());
                            } finally {
                                x(!1);
                            }
                        },
                        loading: g,
                        variant: "critical-primary",
                    },
                ],
                children: (0, e.jsx)("div", {
                    children:
                        null != E &&
                        (0, e.jsx)(c.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: E }),
                }),
            });
        },
    },
);
