"use strict";
n.d(t, { A: () => w }), n(321073), n(667532);
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(554146),
    l = n(192308),
    u = n(298990),
    c = n(684013),
    d = n(793574),
    _ = n(429913),
    f = n(263577),
    p = n(826673),
    h = n(589051),
    m = n(547463),
    E = n(823901),
    g = n(592598),
    A = n(395011),
    I = n(243612),
    T = n(119191),
    S = n(581730),
    y = n(672396),
    v = n(652215),
    N = n(231723),
    C = n(360469),
    R = n(985018),
    O = n(654249),
    b = n(284839);
let D = !0;
function L(e) {
    let { game: t } = e,
        n = (0, _.h)(t.id);
    return null == n ? null : (0, r.jsx)(f.V, { src: n.getIconURL(C.iu.LARGE), size: 40 });
}
function w(e, t) {
    if (g.A.isNotificationDisabled(y.KS.WelcomeNudge)) return null;
    let { enabled: i } = (0, h.o0)("welcomeNotification"),
        { trackView: _, trackClick: f } = (0, S.Y9)(y.KS.WelcomeNudge, {
            notif_type: y.KS.WelcomeNudge,
            secondary_notif_types: t.map((e) => y.Jr[e.type]),
        }),
        C = {},
        w = [],
        M = [];
    for (let o of t)
        switch (o.type) {
            case y.Jr.WELCOME: {
                let t = (0, I.tg)(e?.altId ?? e?.id);
                null != t &&
                    ((C.cancelText = R.intl.string(R.t["6F9ivu"])),
                    (C.onCancelClick = (e, n) => {
                        f("unlock"),
                            c.A.updateNotificationStatus(n),
                            c.A.setInputLocked(!1, A.A.getTargetPID()),
                            (0, u.qf)(t, !1, v.BRT.POPOUT);
                    })),
                    i && M.push((0, r.jsx)("div", { className: b.N7, children: (0, T.bi)((0, S.hM)(), R.t.mRbUco) }));
                break;
            }
            case y.Jr.GO_LIVE_VOICE:
            case y.Jr.GO_LIVE_NON_VOICE: {
                let { oneClickGoLiveEnabled: e, useStreamCtaCopy: t } = (0, h.m5)("welcomeNotification"),
                    s = R.intl.string(t ? R.t.pEuzii : R.t.U76Ft2),
                    o = e
                        ? (e) => {
                              let t = () => {
                                      f("go-live-modal"), c.A.setInputLocked(!1, A.A.getTargetPID());
                                  },
                                  n = () => {
                                      f("one-click-go-live");
                                  };
                              (0, E.H)({
                                  pid: A.A.getTargetPID(),
                                  analyticsLocation: v.ThZ.OVERLAY_NUDGE,
                                  allowOneClickGoLive: !0,
                                  onBeforeShowModal: t,
                                  onOneClickGoLive: n,
                                  appContext: v.BRT.POPOUT,
                              });
                          }
                        : (e) => {
                              f("go-live-modal");
                              let t = A.A.getTargetPID();
                              c.A.setInputLocked(!1, t),
                                  (0, l.openModalLazy)(
                                      async () => {
                                          let { default: e } = await Promise.all([n.e("96811"), n.e("48697")]).then(
                                              n.bind(n, 648230),
                                          );
                                          return (n) =>
                                              (0, r.jsx)(e, {
                                                  ...n,
                                                  selectSource: !1,
                                                  sourcePID: t,
                                                  analyticsLocations: [d.A.OVERLAY_NUDGE],
                                              });
                                      },
                                      { contextKey: N.KX },
                                  );
                          };
                i
                    ? M.push((0, r.jsx)(a.$nd, { size: "sm", variant: "active", onClick: (e) => o(e), text: s }))
                    : ((C.confirmText = s),
                      (C.onConfirmClick = (e, t) => {
                          c.A.updateNotificationStatus(t), o(e);
                      }));
                break;
            }
            case y.Jr.CONTENT_INVENTORY: {
                C.onNotificationShow = () => {
                    c.A.track(v.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: o.entries.map((e) => e.author_id),
                        entry_ids: o.entries.map((e) => e.id),
                    });
                };
                let t = () =>
                    (0, r.jsx)(m.ru, {
                        gamingId: e?.altId ?? e?.id,
                        maxUserShowCount: 5,
                        variant: i ? "subtle" : "default",
                        className: s()({ [b.kL]: !0, [b.Wz]: i }),
                    });
                i ? w.push(t) : (C.renderFooter = t);
            }
        }
    M.length > 0 && w.unshift(() => (0, r.jsx)("div", { className: s()(b.kL, b.Wz, b.SH), children: M })),
        null == C.renderFooter &&
            w.length > 0 &&
            (C.renderFooter = (e, t, n) =>
                (0, r.jsx)("div", { className: b.NG, children: w.filter((e) => null != e).map((r) => r(e, t, n)) }));
    let x = (0, p.k8)(o.M.OVERLAY_OOP_WELCOME_NUX),
        P = i
            ? void 0
            : () =>
                  (0, T.sI)((0, S.Jn)(), R.t["z8/sgJ"], R.intl.string(R.t.jZkzVJ), {
                      highlightAdminWarningIfElevated: D,
                  }),
        k = i
            ? (0, r.jsx)(a.DZT, {
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: R.intl.string(R.t.KWDIrh),
              })
            : R.intl.string(R.t.KWDIrh),
        U = null != e ? (0, r.jsx)(L, { game: e }) : (0, r.jsx)("img", { src: n(513653), className: O.Kk, alt: "" });
    return {
        className: i ? b.fV : void 0,
        icon: U,
        title: k,
        hint: P,
        ...C,
        onNotificationShow: (e) => {
            _(), x || (0, p.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX), C.onNotificationShow?.(e);
        },
        onNotificationClick: (e, t) => {
            f("unlock"),
                c.A.setInputLocked(!1, A.A.getTargetPID()),
                x || (0, p.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX),
                C.onNotificationClick?.(e, t);
        },
        onDismissClick: (e, t) => {
            f("dismiss"), x || (0, p.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX), C.onDismissClick?.(e, t);
        },
    };
}
