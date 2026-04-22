"use strict";
n.d(t, { A: () => R });
var i = n(627968),
    s = n(64700),
    l = n(665260),
    r = n(311907),
    a = n(939249),
    o = n(789645),
    c = n(534514),
    d = n(331322),
    h = n(243721),
    p = n(404778),
    u = n(573613),
    A = n(59636),
    m = n(235986),
    g = n(253932),
    f = n(742077),
    _ = n(954571),
    x = n(144914),
    y = n(765258),
    N = n(192771),
    C = n(652215),
    I = n(985018),
    T = n(869187);
function S(e) {
    let { applicationViewItems: t, restoreApplication: n } = e;
    if (0 === t.length) return null;
    let s = t.map((e) => {
        let t = e.libraryApplication.getDistributor();
        return (0, i.jsxs)(
            "div",
            {
                className: T.Kp,
                children: [
                    (0, i.jsxs)(m.A, {
                        direction: m.A.Direction.VERTICAL,
                        className: T.Hm,
                        children: [
                            (0, i.jsx)("div", {
                                className: T.SX,
                                children: e.libraryApplication.getBranchedName(e.application),
                            }),
                            null != t ? (0, i.jsx)("div", { className: T.ME, children: C.gG4[t] }) : null,
                        ],
                    }),
                    (0, i.jsx)(a.D, {
                        className: T.P5,
                        onClick: () => n(e.libraryApplication),
                        children: (0, i.jsx)(o.P, { size: "md", color: "currentColor", className: T.q_ }),
                    }),
                ],
            },
            e.key,
        );
    });
    return (0, i.jsxs)("div", {
        className: T.z0,
        children: [
            (0, i.jsx)(c.D, {
                variant: "heading-md/semibold",
                className: T.Z9,
                children: I.intl.string(I.t["5PJtrH"]),
            }),
            s,
        ],
    });
}
class b extends s.PureComponent {
    handleToggleShortcutDesktop(e) {
        g.uB.updateSetting(e);
    }
    handleToggleShortcutStartMenu(e) {
        g.Pf.updateSetting(e);
    }
    trackRestoreApplication(e, t) {
        _.default.track(C.HAw.APPLICATION_SETTINGS_UPDATED, { hidden_enabled: t, ...e.getAnalyticsData() });
    }
    handleRestoreHiddenLibraryApplication = (e) => {
        let t = l.PQ(e.getFlags(), C.hM6.HIDDEN);
        A.V(e.id, e.branchId, t), this.trackRestoreApplication(e, l.Lt(t, C.hM6.HIDDEN));
    };
    renderBody() {
        let {
            hiddenLibraryApplicationViewItems: e,
            installShortcutDesktop: t,
            installShortcutStartMenu: n,
        } = this.props;
        return (0, i.jsxs)("div", {
            className: T.rf,
            children: [
                (0, x.S)()
                    ? (0, i.jsxs)(d.B, {
                          gap: 16,
                          children: [
                              (0, i.jsx)(h.d, {
                                  label: I.intl.string(I.t["9ID+Kh"]),
                                  description: I.intl.string(I.t.vT61N0),
                                  checked: t,
                                  onChange: this.handleToggleShortcutDesktop,
                              }),
                              (0, i.jsx)(p.c, {}),
                              (0, i.jsx)(h.d, {
                                  label: I.intl.string(I.t.vNpUMz),
                                  description: I.intl.string(I.t.cpYp0H),
                                  checked: n,
                                  onChange: this.handleToggleShortcutStartMenu,
                              }),
                              (0, i.jsx)(p.c, {}),
                              (0, i.jsx)(N.A, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(S, {
                    restoreApplication: this.handleRestoreHiddenLibraryApplication,
                    applicationViewItems: e,
                }),
            ],
        });
    }
    render() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(y.A, { currentRoute: C.BVt.APPLICATION_LIBRARY_SETTINGS }),
                (0, i.jsx)(u.Ar, { className: T.XG, children: this.renderBody() }),
            ],
        });
    }
}
function R() {
    let e = {
        installShortcutDesktop: g.uB.useSetting(),
        installShortcutStartMenu: g.Pf.useSetting(),
        hiddenLibraryApplicationViewItems: (0, r.bG)([f.A], () => f.A.hiddenLibraryApplicationViewItems),
    };
    return (0, i.jsx)(b, { ...e });
}
