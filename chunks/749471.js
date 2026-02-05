n.d(t, { A: () => L }), n(321073), n(667532);
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(158954),
    r = n(554146),
    o = n(192308),
    d = n(298990),
    u = n(684013),
    c = n(833349),
    h = n(793574),
    A = n(429913),
    m = n(263577),
    g = n(826673),
    p = n(375492),
    f = n(589051),
    _ = n(547463),
    E = n(823901),
    x = n(592598),
    S = n(395011),
    I = n(119191),
    T = n(581730),
    C = n(672396),
    v = n(652215),
    y = n(231723),
    N = n(360469),
    O = n(985018),
    b = n(879716),
    j = n(573823);
function w(e) {
    let { game: t } = e,
        n = (0, A.h)(t.id);
    return null == n ? null : (0, i.jsx)(m.V, { src: n.getIconURL(N.iu.LARGE), size: 40 });
}
function L(e, t) {
    if (x.A.isNotificationDisabled(C.KS.WelcomeNudge)) return null;
    let { enabled: l } = (0, f.o0)("welcomeNotification"),
        { trackView: A, trackClick: m } = (0, T.Y9)(C.KS.WelcomeNudge, {
            notif_type: C.KS.WelcomeNudge,
            secondary_notif_types: t.map((e) => C.Jr[e.type]),
        }),
        N = {},
        L = [],
        R = [];
    for (let r of t)
        switch (r.type) {
            case C.Jr.WELCOME: {
                let t =
                    e?.altId != null
                        ? p.A.getApplicationActivity(e.altId)
                        : e?.id != null
                          ? p.A.getApplicationActivity(e.id)
                          : null;
                null != t &&
                    (0, c.A)(t, v.jUm.JOIN) &&
                    ((N.cancelText = O.intl.string(O.t["6F9ivu"])),
                    (N.onCancelClick = (e, n) => {
                        m("unlock"),
                            u.A.updateNotificationStatus(n),
                            u.A.setInputLocked(!1, S.A.getTargetPID()),
                            (0, d.qf)(t, !1, v.BRT.POPOUT);
                    })),
                    l && R.push((0, i.jsx)("div", { className: j.N7, children: (0, I.bi)((0, T.hM)(), O.t.mRbUco) }));
                break;
            }
            case C.Jr.GO_LIVE_VOICE:
            case C.Jr.GO_LIVE_NON_VOICE: {
                let { oneClickGoLiveEnabled: e, useStreamCtaCopy: t } = (0, f.m5)("welcomeNotification"),
                    a = O.intl.string(t ? O.t.pEuzii : O.t.U76Ft2),
                    r = e
                        ? (e) => {
                              let t = () => {
                                      m("go-live-modal"), u.A.setInputLocked(!1, S.A.getTargetPID());
                                  },
                                  n = () => {
                                      m("one-click-go-live");
                                  };
                              (0, E.H)({
                                  pid: S.A.getTargetPID(),
                                  analyticsLocation: v.ThZ.OVERLAY_NUDGE,
                                  allowOneClickGoLive: !0,
                                  onBeforeShowModal: t,
                                  onOneClickGoLive: n,
                                  appContext: v.BRT.POPOUT,
                              });
                          }
                        : (e) => {
                              m("go-live-modal");
                              let t = S.A.getTargetPID();
                              u.A.setInputLocked(!1, t),
                                  (0, o.openModalLazy)(
                                      async () => {
                                          let { default: e } = await Promise.all([n.e("96811"), n.e("48697")]).then(
                                              n.bind(n, 648230),
                                          );
                                          return (n) =>
                                              (0, i.jsx)(e, {
                                                  ...n,
                                                  selectSource: !1,
                                                  sourcePID: t,
                                                  analyticsLocations: [h.A.OVERLAY_NUDGE],
                                              });
                                      },
                                      { contextKey: y.KX },
                                  );
                          };
                l
                    ? R.push((0, i.jsx)(s.$nd, { size: "sm", variant: "active", onClick: (e) => r(e), text: a }))
                    : ((N.confirmText = a),
                      (N.onConfirmClick = (e, t) => {
                          u.A.updateNotificationStatus(t), r(e);
                      }));
                break;
            }
            case C.Jr.CONTENT_INVENTORY: {
                N.onNotificationShow = () => {
                    u.A.track(v.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: r.entries.map((e) => e.author_id),
                        entry_ids: r.entries.map((e) => e.id),
                    });
                };
                let t = () =>
                    (0, i.jsx)(_.ru, {
                        gamingId: e?.id,
                        maxUserShowCount: 5,
                        variant: l ? "subtle" : "default",
                        className: a()({ [j.kL]: !0, [j.Wz]: l }),
                    });
                l ? L.push(t) : (N.renderFooter = t);
            }
        }
    R.length > 0 && L.unshift(() => (0, i.jsx)("div", { className: a()(j.kL, j.Wz, j.SH), children: R })),
        null == N.renderFooter &&
            L.length > 0 &&
            (N.renderFooter = (e, t, n) =>
                (0, i.jsx)("div", { className: j.NG, children: L.filter((e) => null != e).map((i) => i(e, t, n)) }));
    let D = (0, g.k8)(r.M.OVERLAY_OOP_WELCOME_NUX),
        M = l
            ? void 0
            : () =>
                  (0, I.sI)((0, T.Jn)(), O.t["z8/sgJ"], O.intl.string(O.t.jZkzVJ), {
                      highlightAdminWarningIfElevated: !0,
                  }),
        k = l
            ? (0, i.jsx)(s.DZT, {
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: O.intl.string(O.t.KWDIrh),
              })
            : O.intl.string(O.t.KWDIrh),
        z = null != e ? (0, i.jsx)(w, { game: e }) : (0, i.jsx)("img", { src: n(513653), className: b.Kk, alt: "" });
    return {
        className: l ? j.fV : void 0,
        icon: z,
        title: k,
        hint: M,
        ...N,
        onNotificationShow: (e) => {
            A(), D || (0, g.Dr)(r.M.OVERLAY_OOP_WELCOME_NUX), N.onNotificationShow?.(e);
        },
        onNotificationClick: (e, t) => {
            m("unlock"),
                u.A.setInputLocked(!1, S.A.getTargetPID()),
                D || (0, g.Dr)(r.M.OVERLAY_OOP_WELCOME_NUX),
                N.onNotificationClick?.(e, t);
        },
        onDismissClick: (e, t) => {
            m("dismiss"), D || (0, g.Dr)(r.M.OVERLAY_OOP_WELCOME_NUX), N.onDismissClick?.(e, t);
        },
    };
}
