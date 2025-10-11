n.d(t, { InstantInviteRefreshModal: () => eo }), n(388685), n(539854), n(993155);
var l = n(951288),
    i = n(647438),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    u = n(990547),
    c = n(91192),
    d = n(442837),
    g = n(481060),
    m = n(447543),
    I = n(247272),
    p = n(700582),
    f = n(493773),
    v = n(630810),
    x = n(724757),
    h = n(100527),
    _ = n(906732),
    O = n(447003),
    b = n(933557),
    N = n(600164),
    E = n(687516),
    j = n(266076),
    T = n(227672),
    S = n(810123),
    P = n(448486),
    y = n(427679),
    C = n(199902),
    Z = n(984933),
    A = n(271383),
    M = n(430824),
    R = n(341165),
    k = n(751771),
    w = n(496675),
    D = n(158776),
    V = n(699516),
    L = n(626135),
    U = n(971130),
    F = n(51144),
    G = n(301873),
    z = n(264229),
    B = n(601953),
    H = n(277364),
    q = n(666258),
    Y = n(530436),
    W = n(895976),
    K = n(245335),
    Q = n(981631),
    X = n(388032),
    J = n(890967);
function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let { INVITE_OPTIONS_7_DAYS: ee, INVITE_OPTIONS_UNLIMITED: et } = U.ZP,
    en = {
        max_age: ee.value,
        max_uses: et.value,
    };
function el(e) {
    let { icon: t, label: n, subLabel: i, onClick: a, isSelected: r, disabled: s } = e;
    return (0, l.jsxs)(g.P3F, {
        "aria-disabled": s,
        className: J.recipientRow,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: J.recipientAsset,
                children: t,
            }),
            (0, l.jsxs)("div", {
                className: J.recipientLabels,
                children: [
                    (0, l.jsx)(g.Text, {
                        className: J.recipientLabel,
                        variant: "text-md/medium",
                        lineClamp: 1,
                        children: n,
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(g.Text, {
                              className: J.recipientSublabel,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: i,
                          })
                        : null,
                ],
            }),
            (0, l.jsx)(g.FZ5, { checked: r }),
        ],
    });
}
function ei(e) {
    let { guild: t, user: n, onToggle: a, isSelected: r, disabled: s } = e,
        o = F.ZP.useName(n),
        u = F.ZP.useUserTag(n, { decoration: "never" }),
        [c, m] = (0, d.Wu)([V.Z, D.Z], () => [V.Z.getNickname(n.id), D.Z.getStatus(n.id)], [n]),
        I = i.useCallback(() => a(n.id), [a, n.id]),
        f = [u];
    A.ZP.isMember(t.id, n.id) && f.push(X.intl.string(X.t.u1sEf3));
    let v = f.join("\xA0\xA0\u2022\xA0\xA0");
    return (0, l.jsx)(el, {
        icon: (0, l.jsx)(p.Z, {
            "aria-hidden": !0,
            size: g.EFr.SIZE_32,
            user: n,
            status: m,
        }),
        label: null != c ? c : o,
        subLabel: v,
        onClick: I,
        isSelected: r,
        disabled: s,
    });
}
function ea(e) {
    var t, n;
    let { channel: a, onToggle: r, isSelected: s, disabled: o } = e,
        u = i.useCallback(() => r(a.id), [r, a.id]),
        c = null != (t = (0, b.ZP)(a)) ? t : "",
        d = null != (n = (0, P._)(a)) ? n : "";
    return (0, l.jsx)(el, {
        icon: (0, l.jsx)(j.Z, {
            "aria-hidden": !0,
            size: g.EFr.SIZE_32,
            channel: a,
            experimentLocation: "instant_invite_modal",
        }),
        label: c,
        subLabel: d,
        onClick: u,
        isSelected: s,
        disabled: o,
    });
}
function er(e) {
    var t, n;
    let { channel: a, onToggle: r, isSelected: s, disabled: o } = e,
        u = (0, d.e7)([M.Z], () => M.Z.getGuild(null == a ? void 0 : a.guild_id)),
        c = i.useCallback(() => r(a.id), [r, a.id]),
        g = null != (t = (0, b.ZP)(a)) ? t : "",
        m = null != (n = null == u ? void 0 : u.name) ? n : "";
    return (0, l.jsx)(el, {
        icon: (0, l.jsx)(S.Z, {
            size: S.E.SMALL_32,
            guild: u,
            channel: a,
        }),
        label: g,
        subLabel: m,
        onClick: c,
        isSelected: s,
        disabled: o,
    });
}
function es(e) {
    let { guild: t, rows: n, onToggle: a, selection: r, scrollerRef: s, disabled: o } = e,
        u = i.useMemo(() => [n.length], [n.length]),
        d = (0, x.Z)("instant_invite_modal", s),
        m = i.useCallback(
            (e) => {
                var i, s, u;
                let c,
                    { section: d, row: g } = e;
                if (d > 0) return;
                let m = n[g];
                switch (m.type) {
                    case U.bm.FRIEND:
                    case U.bm.DM:
                        let I = m.item;
                        return (
                            (c = null != (i = r.includes(I.id)) && i),
                            (0, l.jsx)(
                                ei,
                                {
                                    guild: t,
                                    user: I,
                                    isSelected: c,
                                    onToggle: a,
                                    disabled: o,
                                },
                                I.id,
                            )
                        );
                    case U.bm.GROUP_DM:
                        let p = m.item;
                        return (
                            (c = null != (s = r.includes(p.id)) && s),
                            (0, l.jsx)(
                                ea,
                                {
                                    channel: p,
                                    isSelected: c,
                                    onToggle: a,
                                    disabled: o,
                                },
                                p.id,
                            )
                        );
                    case U.bm.CHANNEL:
                        let f = m.item;
                        return (
                            (c = null != (u = r.includes(f.id)) && u),
                            (0, l.jsx)(
                                er,
                                {
                                    channel: f,
                                    isSelected: c,
                                    onToggle: a,
                                    disabled: o,
                                },
                                f.id,
                            )
                        );
                    default:
                        return null;
                }
            },
            [t, n, r, a, o],
        ),
        I = i.useCallback(() => 48, []);
    return 0 === n.length
        ? (0, l.jsx)(g.OZU, { children: X.intl.string(X.t.ojoWgY) })
        : (0, l.jsx)(c.bG, {
              navigator: d,
              children: (0, l.jsx)(c.SJ, {
                  children: (e) => {
                      var t,
                          n,
                          { ref: i } = e,
                          a = (function (e, t) {
                              if (null == e) return {};
                              var n,
                                  l,
                                  i = (function (e, t) {
                                      if (null == e) return {};
                                      var n,
                                          l,
                                          i = {},
                                          a = Object.keys(e);
                                      for (l = 0; l < a.length; l++) (n = a[l]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                      return i;
                                  })(e, t);
                              if (Object.getOwnPropertySymbols) {
                                  var a = Object.getOwnPropertySymbols(e);
                                  for (l = 0; l < a.length; l++)
                                      (n = a[l]),
                                          !(t.indexOf(n) >= 0) &&
                                              Object.prototype.propertyIsEnumerable.call(e, n) &&
                                              (i[n] = e[n]);
                              }
                              return i;
                          })(e, ["ref"]);
                      return (0, l.jsx)(
                          g.YAO,
                          ((t = $(
                              {
                                  className: J.recipientList,
                                  style: { "--custom-recipient-row-height": "".concat(48, "px") },
                                  scrollerRef: (e) => {
                                      null !== e && ((s.current = e), (i.current = e.getScrollerNode()));
                                  },
                              },
                              a,
                          )),
                          (n = n =
                              {
                                  sections: u,
                                  sectionHeight: 0,
                                  renderRow: m,
                                  rowHeight: I,
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var l = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, l);
                                    }
                                    return n;
                                })(Object(n)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                }),
                          t),
                      );
                  },
              }),
          });
}
function eo(e) {
    let {
            transitionState: t,
            onClose: n,
            guild: a,
            channel: s,
            guildScheduledEvent: c,
            source: p,
            streamUserId: x,
            applicationId: b,
            analyticsLocation: j,
        } = e,
        S = null;
    null != b ? (S = K.Iq.EMBEDDED_APPLICATION) : null != x && (S = K.Iq.STREAM);
    let P = (0, G.xU)({
            guildId: a.id,
            location: "InstantInviteRefreshModal",
        }),
        [A, M] = i.useState([]),
        [V, F] = i.useState(""),
        { current: ee } = i.useRef(
            $(
                {},
                en,
                null == P ? {} : { max_age: P },
                null == b ? {} : { target_application_id: b },
                null == S ? {} : { target_type: S },
                null == x ? {} : { target_user_id: x },
            ),
        ),
        [et, el] = i.useState(ee),
        [ei, ea] = i.useState(!1),
        [er, eo] = i.useState(!1),
        [eu, ec] = i.useState(null),
        ed = i.useRef(null),
        eg = i.useRef(null),
        { analyticsLocations: em } = (0, _.ZP)(h.Z.INSTANT_INVITE_MODAL),
        eI = i.useCallback(
            (e) => {
                var t;
                null == (t = eg.current) || t.scrollTo({ to: 0 }), F(e), (0, I.C)(e);
            },
            [F],
        ),
        ep = i.useCallback(() => {
            eI("");
        }, [eI]),
        ef = i.useCallback((e) => el((t) => $({}, t, e)), [el]),
        ev = i.useCallback(() => {
            M([]), el(ee), ep(), eo(!1), ec(null);
        }, [ep, ee]),
        ex = i.useCallback((e) => {
            M((t) => {
                let n = t.findIndex((t) => t === e);
                if (-1 === n) return [e, ...t];
                let l = [...t];
                return l.splice(n, 1), l;
            });
        }, []),
        eh = i.useMemo(() => {
            var e;
            return null != s
                ? s
                : null != (e = Z.ZP.getDefaultChannel(a.id, !0, Q.Plq.CREATE_INSTANT_INVITE))
                  ? e
                  : null;
        }, [a.id, s]),
        e_ =
            !(0, d.e7)([w.Z], () => null != eh && w.Z.can(Q.Plq.CREATE_INSTANT_INVITE, eh), [eh]) &&
            !(null == eh ? void 0 : eh.isGuildVocal()),
        eO = (0, O.Z)(eh),
        eb = (null == eh ? void 0 : eh.type) === Q.d4z.GUILD_VOICE && !e_ && !eO,
        { enabled: eN } = T.o.useExperiment(
            {
                guildId: a.id,
                location: "instant_invite_modal",
            },
            { autoTrackExposure: eb },
        ),
        { canCreateApplicationBypassInvites: eE, isManualApprovalGuild: ej } = (0, H.R)(a),
        eT = eN && eb,
        {
            rows: eS,
            showFriends: eP,
            initialCounts: ey,
        } = (0, W.B)({
            guild: a,
            inviteChannel: eh,
            inviteTargetType: S,
            applicationId: b,
        });
    (0, f.ZP)(() => {
        switch (
            (eP &&
                L.default.track(Q.rMx.INVITE_SUGGESTION_OPENED, {
                    location: p,
                    num_suggestions: eS.length,
                    num_friends: ey.numFriends,
                    num_dms: ey.numDms,
                    num_group_dms: ey.numGroupDms,
                    guild_id: a.id,
                    application_id: b,
                }),
            S)
        ) {
            case K.Iq.EMBEDDED_APPLICATION:
                L.default.track(Q.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: p,
                    location: j,
                    application_id: b,
                });
                break;
            case K.Iq.STREAM:
                if (null == x) break;
                let e = C.Z.getStreamForUser(x, a.id),
                    t = (0, E.L2)(e, D.Z);
                L.default.track(Q.rMx.OPEN_MODAL, {
                    type: "Send Stream Invite",
                    source: p,
                    location: j,
                    other_user_id: x,
                    application_id: null != t ? t.id : null,
                    application_name: null != t ? t.name : null,
                    game_id: null != t ? t.id : null,
                });
                break;
            default:
                L.default.track(Q.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: p,
                    location: j,
                });
        }
    });
    let eC = i.useCallback(() => {
            ev(), n();
        }, [ev, n]),
        eZ = i.useCallback(async () => {
            var e, t, n, l;
            ea(!0);
            let i = null,
                r = null != (e = y.Z.getStageInstanceByChannel(null == eh ? void 0 : eh.id)) ? e : null;
            if (e_ && null != a.vanityURLCode) i = a.vanityURLCode;
            else if ((null == r ? void 0 : r.invite_code) != null) i = r.invite_code;
            else if (null != eh) {
                let e =
                    null !=
                    (t = R.Z.getInvite(eh.id, {
                        targetType: et.target_type,
                        targetUserId: et.target_user_id,
                        targetApplicationId: et.target_application_id,
                    }))
                        ? t
                        : null;
                (null !== e && (0, B.m)(e, et)) ||
                    (await m.ZP.createInvite(eh.id, et, p),
                    (e =
                        null !=
                        (n = R.Z.getInvite(eh.id, {
                            targetType: et.target_type,
                            targetUserId: et.target_user_id,
                            targetApplicationId: et.target_application_id,
                        }))
                            ? n
                            : null)),
                    (i = null != (l = null == e ? void 0 : e.code) ? l : null);
            }
            return null == i
                ? null
                : (ea(!1),
                  (0, z.tV)({
                      baseCode: i,
                      guildScheduledEventId: null == c ? void 0 : c.id,
                  }));
        }, [eh, e_, a, et, p, null == c ? void 0 : c.id]),
        eA = i.useCallback(async () => {
            if (er || ei) return;
            eo(!0), ec(null);
            let e = !1;
            try {
                let t = await eZ();
                o()(null != t, "Invite key could not be determined.");
                let n = eS
                    .filter((e) => A.includes(e.item.id))
                    .map((e) => {
                        let n,
                            l = em[0];
                        switch (e.type) {
                            case U.bm.FRIEND:
                            case U.bm.DM:
                                n = {
                                    type: v.m.USER,
                                    user: e.item,
                                    inviteKey: t,
                                    location: l,
                                    inviteAnalyticsMetadata: {
                                        suggestionData: k.Z.getSelectedInviteMetadata(e),
                                        source: p,
                                    },
                                };
                                break;
                            case U.bm.CHANNEL:
                                n = {
                                    type: v.m.CHANNEL,
                                    channel: e.item,
                                    inviteKey: t,
                                    location: l,
                                    inviteAnalyticsMetadata: {
                                        suggestionData: k.Z.getSelectedInviteMetadata(e),
                                        source: p,
                                    },
                                };
                                break;
                            case U.bm.GROUP_DM:
                                n = {
                                    type: v.m.GROUP_DM,
                                    channel: e.item,
                                    inviteKey: t,
                                    location: l,
                                    inviteAnalyticsMetadata: {
                                        suggestionData: k.Z.getSelectedInviteMetadata(e),
                                        source: p,
                                    },
                                };
                                break;
                            default:
                                return Promise.resolve();
                        }
                        return new Promise((e, t) => {
                            v.Z.enqueue(n, (n) => {
                                n ? e() : t();
                            });
                        });
                    });
                if ((await Promise.allSettled(n), n.length > 0)) {
                    let e = A.length > 1 ? X.intl.string(X.t["4pl/xs"]) : X.intl.string(X.t.sVwWdX);
                    (0, g.showToast)((0, g.createToast)(e, g.ToastType.INVITE));
                }
                e = !0;
            } catch (e) {
                ec(e), eo(!1);
            }
            e && eC();
        }, [er, ei, eo, A, eS, eZ, em, p, eC]),
        eM = er || ei;
    return (0, l.jsx)(_.Gt, {
        value: em,
        children: (0, l.jsxs)(g.Y0X, {
            className: r()(J.modal, { [J.disabled]: eM }),
            transitionState: t,
            impression: {
                impressionName: u.ImpressionNames.GUILD_INVITE,
                impressionProperties: {
                    invite_guild_id: a.id,
                    invite_channel_id: null == eh ? void 0 : eh.id,
                },
            },
            parentComponent: "InstantInviteRefreshModal",
            children: [
                (0, l.jsxs)(g.xBx, {
                    className: J.header,
                    children: [
                        (0, l.jsxs)("div", {
                            className: J.titleLine,
                            children: [
                                (0, l.jsx)("div", {
                                    className: J.title,
                                    children: (0, l.jsx)(g.Heading, {
                                        variant: "heading-lg/semibold",
                                        children: X.intl.string(X.t.BN75l5),
                                    }),
                                }),
                                (0, l.jsx)(g.olH, {
                                    className: J.closeButton,
                                    onClick: eC,
                                }),
                            ],
                        }),
                        (0, l.jsx)(g.E1j, {
                            ref: ed,
                            query: V,
                            onChange: eI,
                            onClear: ep,
                            placeholder: X.intl.string(X.t["5h0QOD"]),
                            "aria-label": X.intl.string(X.t["5h0QOD"]),
                            autoFocus: !0,
                        }),
                    ],
                }),
                (0, l.jsx)(g.hzk, {
                    className: r()(J.body, { [J.empty]: 0 === eS.length }),
                    children: (0, l.jsx)(es, {
                        guild: a,
                        rows: eS,
                        onToggle: ex,
                        scrollerRef: eg,
                        selection: A,
                        disabled: eM,
                    }),
                }),
                (0, l.jsxs)(g.mzw, {
                    direction: N.Z.Direction.VERTICAL,
                    className: J.footer,
                    children: [
                        (0, l.jsx)(q.f, {
                            className: J.footerContent,
                            guild: a,
                            channel: null != s ? s : null,
                            applicationId: null != b ? b : null,
                            getInviteKey: eZ,
                            sendInvite: eA,
                            canUseVanityURL: e_,
                            disabled: eM,
                            hasSelection: A.length > 0,
                            options: et,
                            setOptions: ef,
                            isGuestInviteAllowed: eT,
                            isTemporaryInviteAllowed: !eT && !ej,
                            isApplicationBypassAllowed: eE,
                            setError: ec,
                            analyticsLocation: em[0],
                        }),
                        null !== eu &&
                            (0, l.jsx)(Y.W, {
                                guild: a,
                                error: eu,
                                onClose: eC,
                            }),
                    ],
                }),
            ],
        }),
    });
}
