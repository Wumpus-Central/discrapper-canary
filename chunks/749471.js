"use strict";
n.d(t, { A: () => N });
var r = n(627968);
n(64700);
var i = n(554146),
    s = n(298990),
    a = n(684013),
    o = n(429913),
    l = n(263577),
    u = n(826673),
    c = n(547463),
    d = n(823901),
    _ = n(592598),
    f = n(395011),
    p = n(243612),
    h = n(119191),
    m = n(581730),
    E = n(672396),
    g = n(652215),
    A = n(360469),
    I = n(985018),
    T = n(654249),
    S = n(284839);
let y = !0;
function v(e) {
    let { game: t } = e,
        n = (0, o.h)(t.id);
    return null == n ? null : (0, r.jsx)(l.V, { src: n.getIconURL(A.iu.LARGE), size: 40 });
}
function N(e, t) {
    if (_.A.isNotificationDisabled(E.KS.WelcomeNudge)) return null;
    let { trackView: o, trackClick: l } = (0, m.Y9)(E.KS.WelcomeNudge, {
            notif_type: E.KS.WelcomeNudge,
            secondary_notif_types: t.map((e) => E.Jr[e.type]),
        }),
        A = {};
    for (let n of t)
        switch (n.type) {
            case E.Jr.WELCOME: {
                let t = (0, p.tg)(e?.altId ?? e?.id);
                null != t &&
                    ((A.cancelText = I.intl.string(I.t["6F9ivu"])),
                    (A.onCancelClick = (e, n) => {
                        l("unlock"),
                            a.A.updateNotificationStatus(n),
                            a.A.setInputLocked(!1, f.A.getTargetPID()),
                            (0, s.qf)(t, !1, g.BRT.POPOUT);
                    }));
                break;
            }
            case E.Jr.GO_LIVE_VOICE:
            case E.Jr.GO_LIVE_NON_VOICE: {
                let e = I.intl.string(I.t.U76Ft2),
                    t = (e) => {
                        let t = () => {
                                l("go-live-modal"), a.A.setInputLocked(!1, f.A.getTargetPID());
                            },
                            n = () => {
                                l("one-click-go-live");
                            };
                        (0, d.H)({
                            pid: f.A.getTargetPID(),
                            analyticsLocation: g.ThZ.OVERLAY_NUDGE,
                            allowOneClickGoLive: !0,
                            onBeforeShowModal: t,
                            onOneClickGoLive: n,
                            appContext: g.BRT.POPOUT,
                        });
                    };
                (A.confirmText = e),
                    (A.onConfirmClick = (e, n) => {
                        a.A.updateNotificationStatus(n), t(e);
                    });
                break;
            }
            case E.Jr.CONTENT_INVENTORY:
                (A.onNotificationShow = () => {
                    a.A.track(g.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: n.entries.map((e) => e.author_id),
                        entry_ids: n.entries.map((e) => e.id),
                    });
                }),
                    (A.renderFooter = () =>
                        (0, r.jsx)(c.ru, {
                            gamingId: e?.altId ?? e?.id,
                            maxUserShowCount: 5,
                            variant: "default",
                            className: S.kL,
                        }));
        }
    let N = (0, u.k8)(i.M.OVERLAY_OOP_WELCOME_NUX),
        C = () => (0, h.sI)((0, m.Jn)(), I.t["z8/sgJ"], { highlightAdminWarningIfElevated: y }),
        R = I.intl.string(I.t.KWDIrh);
    return {
        icon: null != e ? (0, r.jsx)(v, { game: e }) : (0, r.jsx)("img", { src: n(513653), className: T.Kk, alt: "" }),
        title: R,
        hint: C,
        ...A,
        onNotificationShow: (e) => {
            o(), N || (0, u.Dr)(i.M.OVERLAY_OOP_WELCOME_NUX), A.onNotificationShow?.(e);
        },
        onNotificationClick: (e, t) => {
            l("unlock"),
                a.A.setInputLocked(!1, f.A.getTargetPID()),
                N || (0, u.Dr)(i.M.OVERLAY_OOP_WELCOME_NUX),
                A.onNotificationClick?.(e, t);
        },
        onDismissClick: (e, t) => {
            l("dismiss"), N || (0, u.Dr)(i.M.OVERLAY_OOP_WELCOME_NUX), A.onDismissClick?.(e, t);
        },
    };
}
