"use strict";
n.d(t, { A: () => b }), n(321073), n(667532);
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(554146),
    l = n(298990),
    u = n(684013),
    c = n(429913),
    d = n(263577),
    _ = n(826673),
    f = n(589051),
    p = n(547463),
    h = n(823901),
    m = n(592598),
    E = n(395011),
    g = n(243612),
    A = n(119191),
    I = n(581730),
    T = n(672396),
    S = n(652215),
    y = n(360469),
    v = n(985018),
    N = n(704110),
    C = n(40257);
let R = !0;
function O(e) {
    let { game: t } = e,
        n = (0, c.h)(t.id);
    return null == n ? null : (0, r.jsx)(d.V, { src: n.getIconURL(y.iu.LARGE), size: 40 });
}
function b(e, t) {
    if (m.A.isNotificationDisabled(T.KS.WelcomeNudge)) return null;
    let { enabled: i } = (0, f.o0)("welcomeNotification"),
        { trackView: c, trackClick: d } = (0, I.Y9)(T.KS.WelcomeNudge, {
            notif_type: T.KS.WelcomeNudge,
            secondary_notif_types: t.map((e) => T.Jr[e.type]),
        }),
        y = {},
        b = [],
        D = [];
    for (let n of t)
        switch (n.type) {
            case T.Jr.WELCOME: {
                let t = (0, g.tg)(e?.altId ?? e?.id);
                null != t &&
                    ((y.cancelText = v.intl.string(v.t["6F9ivu"])),
                    (y.onCancelClick = (e, n) => {
                        d("unlock"),
                            u.A.updateNotificationStatus(n),
                            u.A.setInputLocked(!1, E.A.getTargetPID()),
                            (0, l.qf)(t, !1, S.BRT.POPOUT);
                    })),
                    i && D.push((0, r.jsx)("div", { className: C.N7, children: (0, A.bi)((0, I.hM)(), v.t.mRbUco) }));
                break;
            }
            case T.Jr.GO_LIVE_VOICE:
            case T.Jr.GO_LIVE_NON_VOICE: {
                let e = v.intl.string(v.t.U76Ft2),
                    t = (e) => {
                        let t = () => {
                                d("go-live-modal"), u.A.setInputLocked(!1, E.A.getTargetPID());
                            },
                            n = () => {
                                d("one-click-go-live");
                            };
                        (0, h.H)({
                            pid: E.A.getTargetPID(),
                            analyticsLocation: S.ThZ.OVERLAY_NUDGE,
                            allowOneClickGoLive: !0,
                            onBeforeShowModal: t,
                            onOneClickGoLive: n,
                            appContext: S.BRT.POPOUT,
                        });
                    };
                i
                    ? D.push((0, r.jsx)(a.$nd, { size: "sm", variant: "active", onClick: (e) => t(e), text: e }))
                    : ((y.confirmText = e),
                      (y.onConfirmClick = (e, n) => {
                          u.A.updateNotificationStatus(n), t(e);
                      }));
                break;
            }
            case T.Jr.CONTENT_INVENTORY: {
                y.onNotificationShow = () => {
                    u.A.track(S.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: n.entries.map((e) => e.author_id),
                        entry_ids: n.entries.map((e) => e.id),
                    });
                };
                let t = () =>
                    (0, r.jsx)(p.ru, {
                        gamingId: e?.altId ?? e?.id,
                        maxUserShowCount: 5,
                        variant: i ? "subtle" : "default",
                        className: s()({ [C.kL]: !0, [C.Wz]: i }),
                    });
                i ? b.push(t) : (y.renderFooter = t);
            }
        }
    D.length > 0 && b.unshift(() => (0, r.jsx)("div", { className: s()(C.kL, C.Wz, C.SH), children: D })),
        null == y.renderFooter &&
            b.length > 0 &&
            (y.renderFooter = (e, t, n) =>
                (0, r.jsx)("div", { className: C.NG, children: b.filter((e) => null != e).map((r) => r(e, t, n)) }));
    let L = (0, _.k8)(o.M.OVERLAY_OOP_WELCOME_NUX),
        w = i
            ? void 0
            : () =>
                  (0, A.sI)((0, I.Jn)(), v.t["z8/sgJ"], v.intl.string(v.t.jZkzVJ), {
                      highlightAdminWarningIfElevated: R,
                  }),
        M = i
            ? (0, r.jsx)(a.DZT, {
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: v.intl.string(v.t.KWDIrh),
              })
            : v.intl.string(v.t.KWDIrh),
        P = null != e ? (0, r.jsx)(O, { game: e }) : (0, r.jsx)("img", { src: n(513653), className: N.Kk, alt: "" });
    return {
        className: i ? C.fV : void 0,
        icon: P,
        title: M,
        hint: w,
        ...y,
        onNotificationShow: (e) => {
            c(), L || (0, _.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX), y.onNotificationShow?.(e);
        },
        onNotificationClick: (e, t) => {
            d("unlock"),
                u.A.setInputLocked(!1, E.A.getTargetPID()),
                L || (0, _.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX),
                y.onNotificationClick?.(e, t);
        },
        onDismissClick: (e, t) => {
            d("dismiss"), L || (0, _.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX), y.onDismissClick?.(e, t);
        },
    };
}
