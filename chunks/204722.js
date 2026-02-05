n.d(t, { W: () => D, f: () => M });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(141628),
    o = n(554146),
    d = n(342494),
    c = n(397927),
    u = n(298990),
    h = n(646865),
    A = n(833349),
    g = n(869003),
    m = n(688810),
    p = n(362490),
    _ = n(384059),
    x = n(359348),
    f = n(379848),
    E = n(625180),
    C = n(338771),
    I = n(453774),
    S = n(44724),
    b = n(849134),
    N = n(95701),
    T = n(309010),
    j = n(954571),
    v = n(42473),
    y = n(652215),
    R = n(49999),
    O = n(985018),
    L = n(275540);
function D(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === y.$pd.PLAYING &&
              (0, A.A)(t, y.jUm.JOIN))
    );
}
let M = l.memo(function (e) {
        let {
                stream: t,
                canGoLive: s,
                isStreaming: r,
                channel: o,
                canStream: A,
                runningGame: f,
                embeddedActivity: S,
                frame: b,
                activity: R,
                application: M,
                analyticsContext: P,
                inviteButtonRef: k,
                accountLinkButtonRef: w,
                startAuthorization: V,
                canStartAuthorization: B,
                hasAlreadyLinked: H,
                connectionApp: F,
            } = e,
            { parentAnalyticsLocation: Y, analyticsLocations: W } = (0, m.Ay)(),
            K = (0, I.A)(M, "rtc-activity-panel"),
            z = D(M, R, S),
            X = l.useCallback(() => {
                a()(null != R, "Received null activity"),
                    j.default.track(y.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: f?.id ?? null,
                        application_id: R.application_id,
                    }),
                    (0, _.X)(Y, _.O.INVITE),
                    j.default.track(y.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: R.application_id,
                        location: P.location,
                    }),
                    (0, u.qf)(R, !1);
            }, [R, P, Y, f]),
            q = l.useCallback(
                (e, t) => () => {
                    (0, _.X)(Y, _.O.LEAVE_ACTIVITY),
                        g.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [Y],
            ),
            J = l.useCallback(
                (e) => () => {
                    (0, _.X)(Y, _.O.LEAVE_ACTIVITY), E.A.stopFrame({ applicationId: e });
                },
                [Y],
            ),
            Q = l.useCallback(() => {
                (0, C.A)(t);
            }, [t]),
            Z = l.useCallback(() => {
                (0, c.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("96811"), n.e("13337")]).then(n.bind(n, 648230));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourcePID: f?.pid,
                            selectSource: null != T.A.getVoiceChannelId(),
                            analyticsLocations: W,
                        });
                });
            }, [f, W]),
            $ = l.useRef(null),
            [ee, et] = l.useState(!1);
        l.useEffect(
            () => () => {
                null != $.current && clearTimeout($.current);
            },
            [],
        ),
            l.useEffect(() => {
                H && (et(!1), null != $.current && (clearTimeout($.current), ($.current = null)));
            }, [H]);
        let en = K?.guildId == null || null == M ? null : (0, i.jsx)(U, { guildId: K.guildId, applicationId: K.id }),
            ei = (function () {
                let e, t, n;
                if ((null == f && null != S && !(0, h.f)()) || (!r && !s)) return null;
                let l = null;
                return (
                    r
                        ? ((e = !1),
                          (t = () => {
                              Q(), (0, _.X)(Y, _.O.STREAM, !1);
                          }),
                          (n = c.GT3),
                          (l = O.intl.string(O.t.S5anIc)))
                        : A
                          ? ((e = !1),
                            (t = () => {
                                Z(), (0, _.X)(Y, _.O.STREAM, !0);
                            }),
                            (n = c.Fzq),
                            (l =
                                null != f
                                    ? O.intl.formatToPlainString(O.t.AB5gTy, { game: f.name })
                                    : O.intl.string(O.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = c.Fzq),
                            null != o && (0, N.gV)(o.type) && (l = O.intl.string(O.t.uQn9B8))),
                    (0, i.jsx)("div", {
                        className: L.IF,
                        children: (0, i.jsx)(v.A, { tooltipText: l, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            el =
                z && null == S
                    ? (0, i.jsx)(v.A, { ref: k, tooltipText: O.intl.string(O.t["hC/Zey"]), onClick: X, icon: c.DpX })
                    : null,
            es =
                null == S
                    ? null
                    : (0, i.jsx)(v.A, {
                          tooltipText: O.intl.string(O.t["R/FK4A"]),
                          onClick: q(S.applicationId, S.location),
                          icon: c.oLl,
                      }),
            ea =
                null == b
                    ? null
                    : (0, i.jsx)(v.A, {
                          tooltipText: O.intl.string(O.t["R/FK4A"]),
                          onClick: J(b.applicationId),
                          icon: c.oLl,
                      }),
            er = null == t ? null : (0, i.jsx)(x.A, {}),
            eo =
                !B || H
                    ? null
                    : (0, i.jsx)(G, {
                          runningGame: f,
                          startAuthorization: () => {
                              V({ analyticsLocations: W }) === p._M.RPC &&
                                  (et(!0),
                                  null != $.current && clearTimeout($.current),
                                  ($.current = setTimeout(() => {
                                      et(!1);
                                  }, 9e4)));
                          },
                          connectionApp: F,
                          ref: w,
                      }),
            ed =
                !B || H
                    ? null
                    : (0, i.jsx)(d.AM, {
                          title: O.intl.string(O.t.ULvRFd),
                          body: O.intl.string(O.t["HJJDr+"]),
                          targetElementRef: w,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: ee,
                          onRequestClose: () => {
                              et(!1), null != $.current && (clearTimeout($.current), ($.current = null));
                          },
                      });
        return null == ei && null == el && null == es && null == ea && null == eo && null == en
            ? null
            : (0, i.jsxs)("div", { className: L.o1, children: [en ?? eo ?? el, ei, es ?? ea ?? er, ed] });
    }),
    G = l.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: l, connectionApp: s } = e;
        return (0, i.jsx)(v.A, {
            ref: t,
            onClick: () => {
                j.default.track(y.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: s?.id ?? null,
                }),
                    l();
            },
            icon: r.A,
            tooltipText: O.intl.string(O.t.sbdnpw),
        });
    });
function U(e) {
    let { applicationId: t, guildId: n } = e,
        s = l.useRef(null);
    l.useEffect(() => {
        j.default.track(y.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [a, r] = (0, f.kn)([o.M.GAME_SHOP_RTC_POPOVER], R.m.ACCOUNT_NAME_ZONE, !0),
        d = l.useCallback(() => {
            (0, S.X)({ guildId: n });
        }, [n]),
        u = l.useCallback(() => {
            (0, S.default)({ guildId: n }), r(R.i.USER_DISMISS);
        }, [n, r]),
        h = l.useCallback(() => {
            j.default.track(y.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), u();
        }, [t, u]),
        A = l.useCallback(() => {
            r(R.i.USER_DISMISS);
        }, [r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.A, {
                tooltipText: O.intl.string(O.t.vyaWs7),
                onClick: h,
                onMouseDown: d,
                icon: c.U1X,
                ref: s,
            }),
            a === o.M.GAME_SHOP_RTC_POPOVER
                ? (0, i.jsx)(b.A, {
                      onActionClick: u,
                      onRequestClose: A,
                      targetElementRef: s,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        ],
    });
}
