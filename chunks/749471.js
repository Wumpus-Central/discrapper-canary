"use strict";
n.d(t, { A: () => x }), n(321073), n(667532);
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(554146),
    l = n(192308),
    u = n(298990),
    c = n(684013),
    d = n(833349),
    _ = n(793574),
    f = n(429913),
    p = n(263577),
    h = n(826673),
    m = n(375492),
    E = n(589051),
    g = n(547463),
    A = n(823901),
    I = n(592598),
    T = n(395011),
    S = n(119191),
    y = n(581730),
    v = n(672396),
    N = n(652215),
    C = n(231723),
    b = n(360469),
    R = n(985018),
    O = n(879716),
    D = n(573823);
let L = !0;
function w(e) {
    let { game: t } = e,
        n = (0, f.h)(t.id);
    return null == n ? null : (0, r.jsx)(p.V, { src: n.getIconURL(b.iu.LARGE), size: 40 });
}
function x(e, t) {
    if (I.A.isNotificationDisabled(v.KS.WelcomeNudge)) return null;
    let { enabled: i } = (0, E.o0)("welcomeNotification"),
        { trackView: f, trackClick: p } = (0, y.Y9)(v.KS.WelcomeNudge, {
            notif_type: v.KS.WelcomeNudge,
            secondary_notif_types: t.map((e) => v.Jr[e.type]),
        }),
        b = {},
        x = [],
        M = [];
    for (let o of t)
        switch (o.type) {
            case v.Jr.WELCOME: {
                let t =
                    e?.altId != null
                        ? m.A.getApplicationActivity(e.altId)
                        : e?.id != null
                          ? m.A.getApplicationActivity(e.id)
                          : null;
                null != t &&
                    (0, d.A)(t, N.jUm.JOIN) &&
                    ((b.cancelText = R.intl.string(R.t["6F9ivu"])),
                    (b.onCancelClick = (e, n) => {
                        p("unlock"),
                            c.A.updateNotificationStatus(n),
                            c.A.setInputLocked(!1, T.A.getTargetPID()),
                            (0, u.qf)(t, !1, N.BRT.POPOUT);
                    })),
                    i && M.push((0, r.jsx)("div", { className: D.N7, children: (0, S.bi)((0, y.hM)(), R.t.mRbUco) }));
                break;
            }
            case v.Jr.GO_LIVE_VOICE:
            case v.Jr.GO_LIVE_NON_VOICE: {
                let { oneClickGoLiveEnabled: e, useStreamCtaCopy: t } = (0, E.m5)("welcomeNotification"),
                    s = R.intl.string(t ? R.t.pEuzii : R.t.U76Ft2),
                    o = e
                        ? (e) => {
                              let t = () => {
                                      p("go-live-modal"), c.A.setInputLocked(!1, T.A.getTargetPID());
                                  },
                                  n = () => {
                                      p("one-click-go-live");
                                  };
                              (0, A.H)({
                                  pid: T.A.getTargetPID(),
                                  analyticsLocation: N.ThZ.OVERLAY_NUDGE,
                                  allowOneClickGoLive: !0,
                                  onBeforeShowModal: t,
                                  onOneClickGoLive: n,
                                  appContext: N.BRT.POPOUT,
                              });
                          }
                        : (e) => {
                              p("go-live-modal");
                              let t = T.A.getTargetPID();
                              c.A.setInputLocked(!1, t),
                                  (0, l.openModalLazy)(
                                      async () => {
                                          let { default: e } = await Promise.all([n.e("96811"), n.e("6802")]).then(
                                              n.bind(n, 648230),
                                          );
                                          return (n) =>
                                              (0, r.jsx)(e, {
                                                  ...n,
                                                  selectSource: !1,
                                                  sourcePID: t,
                                                  analyticsLocations: [_.A.OVERLAY_NUDGE],
                                              });
                                      },
                                      { contextKey: C.KX },
                                  );
                          };
                i
                    ? M.push((0, r.jsx)(a.$nd, { size: "sm", variant: "active", onClick: (e) => o(e), text: s }))
                    : ((b.confirmText = s),
                      (b.onConfirmClick = (e, t) => {
                          c.A.updateNotificationStatus(t), o(e);
                      }));
                break;
            }
            case v.Jr.CONTENT_INVENTORY: {
                b.onNotificationShow = () => {
                    c.A.track(N.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: o.entries.map((e) => e.author_id),
                        entry_ids: o.entries.map((e) => e.id),
                    });
                };
                let t = () =>
                    (0, r.jsx)(g.ru, {
                        gamingId: e?.id,
                        maxUserShowCount: 5,
                        variant: i ? "subtle" : "default",
                        className: s()({ [D.kL]: !0, [D.Wz]: i }),
                    });
                i ? x.push(t) : (b.renderFooter = t);
            }
        }
    M.length > 0 && x.unshift(() => (0, r.jsx)("div", { className: s()(D.kL, D.Wz, D.SH), children: M })),
        null == b.renderFooter &&
            x.length > 0 &&
            (b.renderFooter = (e, t, n) =>
                (0, r.jsx)("div", { className: D.NG, children: x.filter((e) => null != e).map((r) => r(e, t, n)) }));
    let P = (0, h.k8)(o.M.OVERLAY_OOP_WELCOME_NUX),
        k = i
            ? void 0
            : () =>
                  (0, S.sI)((0, y.Jn)(), R.t["z8/sgJ"], R.intl.string(R.t.jZkzVJ), {
                      highlightAdminWarningIfElevated: L,
                  }),
        U = i
            ? (0, r.jsx)(a.DZT, {
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: R.intl.string(R.t.KWDIrh),
              })
            : R.intl.string(R.t.KWDIrh),
        G = null != e ? (0, r.jsx)(w, { game: e }) : (0, r.jsx)("img", { src: n(513653), className: O.Kk, alt: "" });
    return {
        className: i ? D.fV : void 0,
        icon: G,
        title: U,
        hint: k,
        ...b,
        onNotificationShow: (e) => {
            f(), P || (0, h.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX), b.onNotificationShow?.(e);
        },
        onNotificationClick: (e, t) => {
            p("unlock"),
                c.A.setInputLocked(!1, T.A.getTargetPID()),
                P || (0, h.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX),
                b.onNotificationClick?.(e, t);
        },
        onDismissClick: (e, t) => {
            p("dismiss"), P || (0, h.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX), b.onDismissClick?.(e, t);
        },
    };
}
