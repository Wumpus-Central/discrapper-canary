t.d(n, {
    Z: function () {
        return j;
    }
}),
    t(789020),
    t(47120);
var i = t(200651),
    l = t(120356),
    a = t.n(l),
    o = t(442837),
    r = t(481060),
    s = t(367907),
    c = t(895924),
    d = t(311819),
    u = t(299206),
    m = t(726721),
    p = t(726521),
    h = t(973616),
    f = t(594174),
    C = t(626135),
    v = t(572004),
    x = t(630388),
    _ = t(135431),
    N = t(541099),
    g = t(783097),
    A = t(570949),
    E = t(314734),
    b = t(981631),
    I = t(388032),
    P = t(472033);
function j(e) {
    var n;
    let { application: t, channel: l, className: j, sectionName: y } = e,
        S = (0, o.e7)([N.Z], () => N.Z.entrypoint()),
        T = (0, g.L1)(t),
        L = (0, _.Eb)(T),
        R = {
            location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: t.id,
            section_name: y,
            source: N.Z.lastShownEntrypoint()
        },
        M = f.default.getCurrentUser(),
        Z = m.Z.useExperiment({ location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU }, { autoTrackExposure: !0 }).enabled,
        k = (0, u.Z)({
            id: t.id,
            label: I.intl.string(I.t['+NP/b2'])
        }),
        O = (0, A.P)({ application: t }),
        U = (0, x.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, b.udG.EMBEDDED);
    return (0, i.jsxs)('div', {
        className: P.container,
        children: [
            (0, i.jsx)(r.Clickable, {
                onClick: () => {
                    let e = U
                        ? (0, d.H)({
                              applicationId: t.id,
                              referrerId: null == M ? void 0 : M.id
                          })
                        : (0, d.J)({
                              id: t.id,
                              ...T
                          });
                    (0, v.JG)(e),
                        C.default.track(b.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: t.id,
                            source: S
                        }),
                        (0, r.showToast)((0, r.createToast)(I.intl.string(I.t['L/PwZW']), r.ToastType.SUCCESS));
                },
                className: a()(P.clickable, j),
                'aria-label': I.intl.string(I.t.WqhZsr),
                children: (0, i.jsx)(r.LinkIcon, {
                    size: 'sm',
                    color: r.tokens.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(r.Popout, {
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsxs)(r.Menu, {
                        className: E.NN,
                        navId: 'app-details-more-menu',
                        onClose: n,
                        'aria-label': I.intl.string(I.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(r.MenuGroup, {
                                children: [
                                    L
                                        ? (0, i.jsx)(r.MenuItem, {
                                              id: 'add-app',
                                              label: I.intl.string(I.t.NgXl3N),
                                              action: () => {
                                                  null == T.customInstallUrl && (0, s.yw)(b.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, R),
                                                      (0, _.LO)({
                                                          ...T,
                                                          oauth2Callback: (e) => {
                                                              let { location: n } = e;
                                                              null != n && (0, s.yw)(b.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, R);
                                                          },
                                                          source: 'app_launcher_app_details'
                                                      });
                                              }
                                          })
                                        : null,
                                    Z && t instanceof h.ZP
                                        ? (0, i.jsx)(r.MenuItem, {
                                              id: 'report-app',
                                              color: 'danger',
                                              label: I.intl.string(I.t.jhJze3),
                                              action: () => {
                                                  var e;
                                                  (0, p.uu)({
                                                      application: t,
                                                      entrypoint: 'app_launcher',
                                                      contextualGuildId: null !== (e = l.getGuildId()) && void 0 !== e ? e : void 0,
                                                      contextualChannelId: l.id
                                                  });
                                              }
                                          })
                                        : null
                                ]
                            }),
                            null != O && (0, i.jsxs)(r.MenuGroup, { children: [...O] }),
                            (0, i.jsx)(r.MenuGroup, { children: k })
                        ]
                    });
                },
                align: 'right',
                position: 'bottom',
                children: (e) =>
                    (0, i.jsx)(r.Clickable, {
                        onClick: e.onClick,
                        className: a()(P.clickable, j),
                        'aria-label': I.intl.string(I.t.UKOtz8),
                        children: (0, i.jsx)(r.MoreHorizontalIcon, {
                            size: 'sm',
                            color: r.tokens.colors.INTERACTIVE_ACTIVE
                        })
                    })
            })
        ]
    });
}
