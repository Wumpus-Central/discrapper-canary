n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    a = n(665260),
    l = n(311907),
    s = n(397927),
    o = n(59636),
    d = n(235986),
    c = n(253932),
    u = n(742077),
    A = n(954571),
    h = n(144914),
    _ = n(765258),
    m = n(192771),
    p = n(652215),
    g = n(985018),
    E = n(231566);
function f(e) {
    let { applicationViewItems: t, restoreApplication: n } = e;
    if (0 === t.length) return null;
    let r = t.map((e) => {
        let t = e.libraryApplication.getDistributor();
        return (0, i.jsxs)(
            "div",
            {
                className: E.Kp,
                children: [
                    (0, i.jsxs)(d.A, {
                        direction: d.A.Direction.VERTICAL,
                        className: E.Hm,
                        children: [
                            (0, i.jsx)("div", {
                                className: E.SX,
                                children: e.libraryApplication.getBranchedName(e.application),
                            }),
                            null != t ? (0, i.jsx)("div", { className: E.ME, children: p.gG4[t] }) : null,
                        ],
                    }),
                    (0, i.jsx)(s.DUT, {
                        className: E.P5,
                        onClick: () => n(e.libraryApplication),
                        children: (0, i.jsx)(s.PGe, { size: "md", color: "currentColor", className: E.q_ }),
                    }),
                ],
            },
            e.key,
        );
    });
    return (0, i.jsxs)("div", {
        className: E.z0,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                className: E.Z9,
                children: g.intl.string(g.t["5PJtrH"]),
            }),
            r,
        ],
    });
}
class I extends r.PureComponent {
    handleToggleShortcutDesktop(e) {
        c.uB.updateSetting(e);
    }
    handleToggleShortcutStartMenu(e) {
        c.Pf.updateSetting(e);
    }
    trackRestoreApplication(e, t) {
        A.default.track(p.HAw.APPLICATION_SETTINGS_UPDATED, { hidden_enabled: t, ...e.getAnalyticsData() });
    }
    handleRestoreHiddenLibraryApplication = (e) => {
        let t = a.PQ(e.getFlags(), p.hM6.HIDDEN);
        o.V(e.id, e.branchId, t), this.trackRestoreApplication(e, a.Lt(t, p.hM6.HIDDEN));
    };
    renderBody() {
        let {
            hiddenLibraryApplicationViewItems: e,
            installShortcutDesktop: t,
            installShortcutStartMenu: n,
        } = this.props;
        return (0, i.jsxs)("div", {
            className: E.rf,
            children: [
                (0, h.S)()
                    ? (0, i.jsxs)(s.BJc, {
                          gap: 16,
                          children: [
                              (0, i.jsx)(s.dOG, {
                                  label: g.intl.string(g.t["9ID+Kh"]),
                                  description: g.intl.string(g.t.vT61N0),
                                  checked: t,
                                  onChange: this.handleToggleShortcutDesktop,
                              }),
                              (0, i.jsx)(s.cGx, {}),
                              (0, i.jsx)(s.dOG, {
                                  label: g.intl.string(g.t.vNpUMz),
                                  description: g.intl.string(g.t.cpYp0H),
                                  checked: n,
                                  onChange: this.handleToggleShortcutStartMenu,
                              }),
                              (0, i.jsx)(s.cGx, {}),
                              (0, i.jsx)(m.A, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(f, {
                    restoreApplication: this.handleRestoreHiddenLibraryApplication,
                    applicationViewItems: e,
                }),
            ],
        });
    }
    render() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(_.A, { currentRoute: p.BVt.APPLICATION_LIBRARY_SETTINGS }),
                (0, i.jsx)(s.ArX, { className: E.XG, children: this.renderBody() }),
            ],
        });
    }
}
function C() {
    let e = {
        installShortcutDesktop: c.uB.useSetting(),
        installShortcutStartMenu: c.Pf.useSetting(),
        hiddenLibraryApplicationViewItems: (0, l.bG)([u.A], () => u.A.hiddenLibraryApplicationViewItems),
    };
    return (0, i.jsx)(I, { ...e });
}
