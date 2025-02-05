n.d(t, { Z: () => y }), n(789020);
var i = n(200651),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    r = n(367907),
    c = n(895924),
    d = n(311819),
    u = n(299206),
    m = n(726721),
    p = n(726521),
    h = n(973616),
    v = n(594174),
    x = n(626135),
    f = n(572004),
    N = n(630388),
    C = n(135431),
    E = n(541099),
    A = n(783097),
    I = n(570949),
    g = n(314734),
    _ = n(981631),
    P = n(388032),
    j = n(472033);
function y(e) {
    var t;
    let { application: n, context: l, className: y, sectionName: T } = e,
        S = (0, o.e7)([E.Z], () => E.Z.entrypoint()),
        L = (0, A.L1)(n),
        b = (0, C.Eb)(L),
        R = {
            location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: n.id,
            section_name: T,
            source: E.Z.lastShownEntrypoint()
        },
        Z = v.default.getCurrentUser(),
        M = m.Z.useExperiment({ location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU }, { autoTrackExposure: !0 }).enabled,
        O = (0, u.Z)({
            id: n.id,
            label: P.intl.string(P.t['+NP/b2'])
        }),
        k = (0, I.P)({ application: n }),
        U = (0, N.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, _.udG.EMBEDDED),
        H = 'channel' === l.type ? l.channel : void 0;
    return (0, i.jsxs)('div', {
        className: j.container,
        children: [
            (0, i.jsx)(s.P3F, {
                onClick: () => {
                    let e = U
                        ? (0, d.H)({
                              applicationId: n.id,
                              referrerId: null == Z ? void 0 : Z.id
                          })
                        : (0, d.J)({
                              id: n.id,
                              ...L
                          });
                    (0, f.JG)(e),
                        x.default.track(_.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: n.id,
                            source: S
                        }),
                        (0, s.showToast)((0, s.createToast)(P.intl.string(P.t['L/PwZW']), s.ToastType.SUCCESS));
                },
                className: a()(j.clickable, y),
                'aria-label': P.intl.string(P.t.WqhZsr),
                children: (0, i.jsx)(s.xPt, {
                    size: 'sm',
                    color: s.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(s.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsxs)(s.v2r, {
                        className: g.NN,
                        navId: 'app-details-more-menu',
                        onClose: t,
                        'aria-label': P.intl.string(P.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(s.kSQ, {
                                children: [
                                    b
                                        ? (0, i.jsx)(s.sNh, {
                                              id: 'add-app',
                                              label: P.intl.string(P.t.NgXl3N),
                                              action: () => {
                                                  null == L.customInstallUrl && (0, r.yw)(_.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, R),
                                                      (0, C.LO)({
                                                          ...L,
                                                          oauth2Callback: (e) => {
                                                              let { location: t } = e;
                                                              null != t && (0, r.yw)(_.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, R);
                                                          },
                                                          source: 'app_launcher_app_details'
                                                      });
                                              }
                                          })
                                        : null,
                                    M && n instanceof h.ZP
                                        ? (0, i.jsx)(s.sNh, {
                                              id: 'report-app',
                                              color: 'danger',
                                              label: P.intl.string(P.t.jhJze3),
                                              action: () => {
                                                  var e;
                                                  (0, p.uu)({
                                                      application: n,
                                                      entrypoint: 'app_launcher',
                                                      contextualGuildId: null !== (e = null == H ? void 0 : H.getGuildId()) && void 0 !== e ? e : void 0,
                                                      contextualChannelId: null == H ? void 0 : H.id
                                                  });
                                              }
                                          })
                                        : null,
                                    k
                                ]
                            }),
                            (0, i.jsx)(s.kSQ, { children: O })
                        ]
                    });
                },
                align: 'right',
                position: 'bottom',
                children: (e) =>
                    (0, i.jsx)(s.P3F, {
                        onClick: e.onClick,
                        className: a()(j.clickable, y),
                        'aria-label': P.intl.string(P.t.UKOtz8),
                        children: (0, i.jsx)(s.xhG, {
                            size: 'sm',
                            color: s.TVs.colors.INTERACTIVE_ACTIVE
                        })
                    })
            })
        ]
    });
}
