n.d(t, { W: () => M, f: () => D });
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
    m = n(869003),
    p = n(688810),
    g = n(362490),
    _ = n(384059),
    f = n(359348),
    x = n(379848),
    C = n(625180),
    E = n(338771),
    I = n(453774),
    b = n(44724),
    N = n(849134),
    S = n(95701),
    T = n(309010),
    v = n(954571),
    y = n(42473),
    j = n(652215),
    R = n(49999),
    O = n(985018),
    L = n(275540);
function M(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === j.$pd.PLAYING &&
              (0, A.A)(t, j.jUm.JOIN))
    );
}
let D = l.memo(function (e) {
        let {
                stream: t,
                canGoLive: s,
                isStreaming: r,
                channel: o,
                canStream: A,
                runningGame: x,
                embeddedActivity: b,
                frame: N,
                activity: R,
                application: D,
                analyticsContext: P,
                inviteButtonRef: w,
                accountLinkButtonRef: k,
                startAuthorization: V,
                canStartAuthorization: B,
                hasAlreadyLinked: H,
                connectionApp: F,
            } = e,
            { parentAnalyticsLocation: K, analyticsLocations: W } = (0, p.Ay)(),
            Y = (0, I.A)(D, "rtc-activity-panel"),
            z = M(D, R, b),
            q = l.useCallback(() => {
                a()(null != R, "Received null activity"),
                    v.default.track(j.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: x?.id ?? null,
                        application_id: R.application_id,
                    }),
                    (0, _.X)(K, _.O.INVITE),
                    v.default.track(j.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: R.application_id,
                        location: P.location,
                    }),
                    (0, u.qf)(R, !1);
            }, [R, P, K, x]),
            X = l.useCallback(
                (e, t) => () => {
                    (0, _.X)(K, _.O.LEAVE_ACTIVITY),
                        m.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [K],
            ),
            J = l.useCallback(
                (e) => () => {
                    (0, _.X)(K, _.O.LEAVE_ACTIVITY), C.A.stopFrame({ applicationId: e });
                },
                [K],
            ),
            Q = l.useCallback(() => {
                (0, E.A)(t);
            }, [t]),
            $ = l.useCallback(() => {
                (0, c.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("96811"), n.e("53612")]).then(n.bind(n, 648230));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourcePID: x?.pid,
                            selectSource: null != T.A.getVoiceChannelId(),
                            analyticsLocations: W,
                        });
                });
            }, [x, W]),
            Z = l.useRef(null),
            [ee, et] = l.useState(!1);
        l.useEffect(
            () => () => {
                null != Z.current && clearTimeout(Z.current);
            },
            [],
        ),
            l.useEffect(() => {
                H && (et(!1), null != Z.current && (clearTimeout(Z.current), (Z.current = null)));
            }, [H]);
        let en = Y?.guildId == null || null == D ? null : (0, i.jsx)(U, { guildId: Y.guildId, applicationId: Y.id }),
            ei = (function () {
                let e, t, n;
                if ((null == x && null != b && !(0, h.f)()) || (!r && !s)) return null;
                let l = null;
                return (
                    r
                        ? ((e = !1),
                          (t = () => {
                              Q(), (0, _.X)(K, _.O.STREAM, !1);
                          }),
                          (n = c.GT3),
                          (l = O.intl.string(O.t.S5anIc)))
                        : A
                          ? ((e = !1),
                            (t = () => {
                                $(), (0, _.X)(K, _.O.STREAM, !0);
                            }),
                            (n = c.Fzq),
                            (l =
                                null != x
                                    ? O.intl.formatToPlainString(O.t.AB5gTy, { game: x.name })
                                    : O.intl.string(O.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = c.Fzq),
                            null != o && (0, S.gV)(o.type) && (l = O.intl.string(O.t.uQn9B8))),
                    (0, i.jsx)("div", {
                        className: L.IF,
                        children: (0, i.jsx)(y.A, { tooltipText: l, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            el =
                z && null == b
                    ? (0, i.jsx)(y.A, { ref: w, tooltipText: O.intl.string(O.t["hC/Zey"]), onClick: q, icon: c.DpX })
                    : null,
            es =
                null == b
                    ? null
                    : (0, i.jsx)(y.A, {
                          tooltipText: O.intl.string(O.t["R/FK4A"]),
                          onClick: X(b.applicationId, b.location),
                          icon: c.oLl,
                      }),
            ea =
                null == N
                    ? null
                    : (0, i.jsx)(y.A, {
                          tooltipText: O.intl.string(O.t["R/FK4A"]),
                          onClick: J(N.applicationId),
                          icon: c.oLl,
                      }),
            er = null == t ? null : (0, i.jsx)(f.A, {}),
            eo =
                !B || H
                    ? null
                    : (0, i.jsx)(G, {
                          runningGame: x,
                          startAuthorization: () => {
                              V({ analyticsLocations: W }) === g._M.RPC &&
                                  (et(!0),
                                  null != Z.current && clearTimeout(Z.current),
                                  (Z.current = setTimeout(() => {
                                      et(!1);
                                  }, 9e4)));
                          },
                          connectionApp: F,
                          ref: k,
                      }),
            ed =
                !B || H
                    ? null
                    : (0, i.jsx)(d.AM, {
                          title: O.intl.string(O.t.ULvRFd),
                          body: O.intl.string(O.t["HJJDr+"]),
                          targetElementRef: k,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: ee,
                          onRequestClose: () => {
                              et(!1), null != Z.current && (clearTimeout(Z.current), (Z.current = null));
                          },
                      });
        return null == ei && null == el && null == es && null == ea && null == eo && null == en
            ? null
            : (0, i.jsxs)("div", { className: L.o1, children: [en ?? eo ?? el, ei, es ?? ea ?? er, ed] });
    }),
    G = l.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: l, connectionApp: s } = e;
        return (0, i.jsx)(y.A, {
            ref: t,
            onClick: () => {
                v.default.track(j.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
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
        v.default.track(j.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [a, r] = (0, x.kn)([o.M.GAME_SHOP_RTC_POPOVER], R.m.ACCOUNT_NAME_ZONE, !0),
        d = l.useCallback(() => {
            (0, b.X)({ guildId: n });
        }, [n]),
        u = l.useCallback(() => {
            (0, b.default)({ guildId: n }), r(R.i.USER_DISMISS);
        }, [n, r]),
        h = l.useCallback(() => {
            v.default.track(j.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), u();
        }, [t, u]),
        A = l.useCallback(() => {
            r(R.i.USER_DISMISS);
        }, [r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(y.A, {
                tooltipText: O.intl.string(O.t.vyaWs7),
                onClick: h,
                onMouseDown: d,
                icon: c.U1X,
                ref: s,
            }),
            a === o.M.GAME_SHOP_RTC_POPOVER
                ? (0, i.jsx)(N.A, {
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
