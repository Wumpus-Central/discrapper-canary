n.d(t, { H: () => eu }), n(388685), n(539854), n(993155);
var l = n(951288),
    i = n(647438),
    r = n(120356),
    s = n.n(r),
    a = n(512722),
    o = n.n(a),
    u = n(990547),
    d = n(91192),
    c = n(442837),
    h = n(755721),
    g = n(481060),
    m = n(447543),
    p = n(247272),
    v = n(700582),
    I = n(493773),
    x = n(630810),
    f = n(724757),
    N = n(100527),
    j = n(906732),
    _ = n(447003),
    E = n(933557),
    S = n(259473),
    b = n(600164),
    T = n(687516),
    O = n(266076),
    y = n(227672),
    C = n(810123),
    P = n(448486),
    Z = n(427679),
    w = n(199902),
    A = n(984933),
    R = n(271383),
    M = n(430824),
    D = n(341165),
    k = n(751771),
    L = n(496675),
    U = n(158776),
    V = n(699516),
    B = n(626135),
    F = n(971130),
    G = n(51144),
    z = n(264229),
    H = n(601953),
    q = n(277364),
    W = n(666258),
    Y = n(530436),
    K = n(895976),
    X = n(245335),
    Q = n(981631),
    J = n(388032),
    $ = n(890967);
function ee(e) {
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
let { INVITE_OPTIONS_7_DAYS: et, INVITE_OPTIONS_UNLIMITED: en } = F.ZP,
    el = {
        max_age: et.value,
        max_uses: en.value,
    };
function ei(e) {
    let { icon: t, label: n, subLabel: i, onClick: r, isSelected: s, disabled: a } = e;
    return (0, l.jsxs)(g.P3F, {
        "aria-disabled": a,
        className: $.recipientRow,
        onClick: r,
        children: [
            (0, l.jsx)("div", {
                className: $.recipientAsset,
                children: t,
            }),
            (0, l.jsxs)("div", {
                className: $.recipientLabels,
                children: [
                    (0, l.jsx)(g.Text, {
                        className: $.recipientLabel,
                        variant: "text-md/medium",
                        lineClamp: 1,
                        children: n,
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(g.Text, {
                              className: $.recipientSublabel,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: i,
                          })
                        : null,
                ],
            }),
            (0, l.jsx)(h.$q, {
                type: h.M0.INVERTED,
                displayOnly: !0,
                size: 24,
                value: s,
                className: $.checkbox,
            }),
        ],
    });
}
function er(e) {
    let { guild: t, user: n, onToggle: r, isSelected: s, disabled: a } = e,
        o = G.ZP.useName(n),
        u = G.ZP.useUserTag(n, { decoration: "never" }),
        [d, h] = (0, c.Wu)([V.Z, U.Z], () => [V.Z.getNickname(n.id), U.Z.getStatus(n.id)], [n]),
        m = i.useCallback(() => r(n.id), [r, n.id]),
        p = [u];
    R.ZP.isMember(t.id, n.id) && p.push(J.intl.string(J.t.u1sEf3));
    let I = p.join("\xA0\xA0\u2022\xA0\xA0");
    return (0, l.jsx)(ei, {
        icon: (0, l.jsx)(v.Z, {
            "aria-hidden": !0,
            size: g.EFr.SIZE_32,
            user: n,
            status: h,
        }),
        label: null != d ? d : o,
        subLabel: I,
        onClick: m,
        isSelected: s,
        disabled: a,
    });
}
function es(e) {
    var t, n;
    let { channel: r, onToggle: s, isSelected: a, disabled: o } = e,
        u = i.useCallback(() => s(r.id), [s, r.id]),
        d = null != (t = (0, E.ZP)(r)) ? t : "",
        c = null != (n = (0, P._)(r)) ? n : "";
    return (0, l.jsx)(ei, {
        icon: (0, l.jsx)(O.Z, {
            "aria-hidden": !0,
            size: g.EFr.SIZE_32,
            channel: r,
            experimentLocation: "instant_invite_modal",
        }),
        label: d,
        subLabel: c,
        onClick: u,
        isSelected: a,
        disabled: o,
    });
}
function ea(e) {
    var t, n;
    let { channel: r, onToggle: s, isSelected: a, disabled: o } = e,
        u = (0, c.e7)([M.Z], () => M.Z.getGuild(null == r ? void 0 : r.guild_id)),
        d = i.useCallback(() => s(r.id), [s, r.id]),
        h = null != (t = (0, E.ZP)(r)) ? t : "",
        g = null != (n = null == u ? void 0 : u.name) ? n : "";
    return (0, l.jsx)(ei, {
        icon: (0, l.jsx)(C.Z, {
            size: C.E.SMALL_32,
            guild: u,
            channel: r,
        }),
        label: h,
        subLabel: g,
        onClick: d,
        isSelected: a,
        disabled: o,
    });
}
function eo(e) {
    let { guild: t, rows: n, onToggle: r, selection: s, scrollerRef: a, disabled: o } = e,
        u = i.useMemo(() => [n.length], [n.length]),
        c = (0, f.Z)("instant_invite_modal", a),
        h = i.useCallback(
            (e) => {
                var i, a, u;
                let d,
                    { section: c, row: h } = e;
                if (c > 0) return;
                let g = n[h];
                switch (g.type) {
                    case F.bm.FRIEND:
                    case F.bm.DM:
                        let m = g.item;
                        return (
                            (d = null != (i = s.includes(m.id)) && i),
                            (0, l.jsx)(
                                er,
                                {
                                    guild: t,
                                    user: m,
                                    isSelected: d,
                                    onToggle: r,
                                    disabled: o,
                                },
                                m.id,
                            )
                        );
                    case F.bm.GROUP_DM:
                        let p = g.item;
                        return (
                            (d = null != (a = s.includes(p.id)) && a),
                            (0, l.jsx)(
                                es,
                                {
                                    channel: p,
                                    isSelected: d,
                                    onToggle: r,
                                    disabled: o,
                                },
                                p.id,
                            )
                        );
                    case F.bm.CHANNEL:
                        let v = g.item;
                        return (
                            (d = null != (u = s.includes(v.id)) && u),
                            (0, l.jsx)(
                                ea,
                                {
                                    channel: v,
                                    isSelected: d,
                                    onToggle: r,
                                    disabled: o,
                                },
                                v.id,
                            )
                        );
                    default:
                        return null;
                }
            },
            [t, n, s, r, o],
        ),
        m = i.useCallback(() => 48, []);
    return 0 === n.length
        ? (0, l.jsx)(g.OZU, { children: J.intl.string(J.t.ojoWgY) })
        : (0, l.jsx)(d.bG, {
              navigator: c,
              children: (0, l.jsx)(d.SJ, {
                  children: (e) => {
                      var t,
                          n,
                          { ref: i } = e,
                          r = (function (e, t) {
                              if (null == e) return {};
                              var n,
                                  l,
                                  i = (function (e, t) {
                                      if (null == e) return {};
                                      var n,
                                          l,
                                          i = {},
                                          r = Object.keys(e);
                                      for (l = 0; l < r.length; l++) (n = r[l]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                      return i;
                                  })(e, t);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  for (l = 0; l < r.length; l++)
                                      (n = r[l]),
                                          !(t.indexOf(n) >= 0) &&
                                              Object.prototype.propertyIsEnumerable.call(e, n) &&
                                              (i[n] = e[n]);
                              }
                              return i;
                          })(e, ["ref"]);
                      return (0, l.jsx)(
                          g.YAO,
                          ((t = ee(
                              {
                                  className: $.recipientList,
                                  style: { "--custom-recipient-row-height": "".concat(48, "px") },
                                  scrollerRef: (e) => {
                                      null !== e && ((a.current = e), (i.current = e.getScrollerNode()));
                                  },
                              },
                              r,
                          )),
                          (n = n =
                              {
                                  sections: u,
                                  sectionHeight: 0,
                                  renderRow: h,
                                  rowHeight: m,
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
function eu(e) {
    let {
            transitionState: t,
            onClose: n,
            guild: r,
            channel: a,
            guildScheduledEvent: d,
            source: h,
            streamUserId: v,
            applicationId: f,
            analyticsLocation: E,
        } = e,
        O = null;
    null != f ? (O = X.Iq.EMBEDDED_APPLICATION) : null != v && (O = X.Iq.STREAM);
    let C = (0, S.Z)({ guildId: r.id }),
        [P, R] = i.useState([]),
        [M, V] = i.useState(""),
        { current: G } = i.useRef(
            ee(
                {},
                el,
                null == C ? {} : { max_age: C },
                null == f ? {} : { target_application_id: f },
                null == O ? {} : { target_type: O },
                null == v ? {} : { target_user_id: v },
            ),
        ),
        [et, en] = i.useState(G),
        [ei, er] = i.useState(!1),
        [es, ea] = i.useState(!1),
        [eu, ed] = i.useState(null),
        ec = i.useRef(null),
        eh = i.useRef(null),
        { analyticsLocations: eg } = (0, j.ZP)(N.Z.INSTANT_INVITE_MODAL),
        em = i.useCallback(
            (e) => {
                var t;
                null == (t = eh.current) || t.scrollTo({ to: 0 }), V(e), (0, p.C)(e);
            },
            [V],
        ),
        ep = i.useCallback(() => {
            em("");
        }, [em]),
        ev = i.useCallback((e) => en((t) => ee({}, t, e)), [en]),
        eI = i.useCallback(() => {
            R([]), en(G), ep(), ea(!1), ed(null);
        }, [ep, G]),
        ex = i.useCallback((e) => {
            R((t) => {
                let n = t.findIndex((t) => t === e);
                if (-1 === n) return [e, ...t];
                let l = [...t];
                return l.splice(n, 1), l;
            });
        }, []),
        ef = i.useMemo(() => {
            var e;
            return null != a
                ? a
                : null != (e = A.ZP.getDefaultChannel(r.id, !0, Q.Plq.CREATE_INSTANT_INVITE))
                  ? e
                  : null;
        }, [r.id, a]),
        eN =
            !(0, c.e7)([L.Z], () => null != ef && L.Z.can(Q.Plq.CREATE_INSTANT_INVITE, ef), [ef]) &&
            !(null == ef ? void 0 : ef.isGuildVocal()),
        ej = (0, _.Z)(ef),
        e_ = (null == ef ? void 0 : ef.type) === Q.d4z.GUILD_VOICE && !eN && !ej,
        { enabled: eE } = y.o.useExperiment(
            {
                guildId: r.id,
                location: "instant_invite_modal",
            },
            { autoTrackExposure: e_ },
        ),
        { canCreateApplicationBypassInvites: eS, isManualApprovalGuild: eb } = (0, q.R)(r),
        eT = eE && e_,
        {
            rows: eO,
            showFriends: ey,
            initialCounts: eC,
        } = (0, K.B)({
            guild: r,
            inviteChannel: ef,
            inviteTargetType: O,
            applicationId: f,
        });
    (0, I.ZP)(() => {
        switch (
            (ey &&
                B.default.track(Q.rMx.INVITE_SUGGESTION_OPENED, {
                    location: h,
                    num_suggestions: eO.length,
                    num_friends: eC.numFriends,
                    num_dms: eC.numDms,
                    num_group_dms: eC.numGroupDms,
                    guild_id: r.id,
                    application_id: f,
                }),
            O)
        ) {
            case X.Iq.EMBEDDED_APPLICATION:
                B.default.track(Q.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: h,
                    location: E,
                    application_id: f,
                });
                break;
            case X.Iq.STREAM:
                if (null == v) break;
                let e = w.Z.getStreamForUser(v, r.id),
                    t = (0, T.L2)(e, U.Z);
                B.default.track(Q.rMx.OPEN_MODAL, {
                    type: "Send Stream Invite",
                    source: h,
                    location: E,
                    other_user_id: v,
                    application_id: null != t ? t.id : null,
                    application_name: null != t ? t.name : null,
                    game_id: null != t ? t.id : null,
                });
                break;
            default:
                B.default.track(Q.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: h,
                    location: E,
                });
        }
    });
    let eP = i.useCallback(() => {
            eI(), n();
        }, [eI, n]),
        eZ = i.useCallback(async () => {
            var e, t, n, l;
            er(!0);
            let i = null,
                s = null != (e = Z.Z.getStageInstanceByChannel(null == ef ? void 0 : ef.id)) ? e : null;
            if (eN && null != r.vanityURLCode) i = r.vanityURLCode;
            else if ((null == s ? void 0 : s.invite_code) != null) i = s.invite_code;
            else if (null != ef) {
                let e =
                    null !=
                    (t = D.Z.getInvite(ef.id, {
                        targetType: et.target_type,
                        targetUserId: et.target_user_id,
                        targetApplicationId: et.target_application_id,
                    }))
                        ? t
                        : null;
                (null !== e && (0, H.m)(e, et)) ||
                    (await m.ZP.createInvite(ef.id, et, h),
                    (e =
                        null !=
                        (n = D.Z.getInvite(ef.id, {
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
                : (er(!1),
                  (0, z.tV)({
                      baseCode: i,
                      guildScheduledEventId: null == d ? void 0 : d.id,
                  }));
        }, [ef, eN, r, et, h, null == d ? void 0 : d.id]),
        ew = i.useCallback(async () => {
            if (es || ei) return;
            ea(!0), ed(null);
            let e = !1;
            try {
                let t = await eZ();
                o()(null != t, "Invite key could not be determined.");
                let n = eO
                    .filter((e) => P.includes(e.item.id))
                    .map((e) => {
                        var n;
                        let l,
                            i = eg[0],
                            r = null != (n = k.Z.getSelectedInviteMetadata(e)) ? n : null;
                        switch (e.type) {
                            case F.bm.FRIEND:
                            case F.bm.DM:
                                l = {
                                    type: x.m.USER,
                                    user: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r,
                                };
                                break;
                            case F.bm.CHANNEL:
                                l = {
                                    type: x.m.CHANNEL,
                                    channel: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r,
                                };
                                break;
                            case F.bm.GROUP_DM:
                                l = {
                                    type: x.m.GROUP_DM,
                                    channel: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r,
                                };
                                break;
                            default:
                                return Promise.resolve();
                        }
                        return new Promise((e, t) => {
                            x.Z.enqueue(l, (n) => {
                                n ? e() : t();
                            });
                        });
                    });
                if ((await Promise.allSettled(n), n.length > 0)) {
                    let e = P.length > 1 ? J.intl.string(J.t["4pl/xs"]) : J.intl.string(J.t.sVwWdX);
                    (0, g.showToast)((0, g.createToast)(e, g.ToastType.INVITE));
                }
                e = !0;
            } catch (e) {
                ed(e), ea(!1);
            }
            e && eP();
        }, [es, ei, ea, P, eO, eZ, eg, eP]),
        eA = es || ei;
    return (0, l.jsx)(j.Gt, {
        value: eg,
        children: (0, l.jsxs)(g.Y0X, {
            className: s()($.modal, { [$.disabled]: eA }),
            transitionState: t,
            impression: {
                impressionName: u.ImpressionNames.GUILD_INVITE,
                impressionProperties: {
                    invite_guild_id: r.id,
                    invite_channel_id: null == ef ? void 0 : ef.id,
                },
            },
            parentComponent: "InstantInviteRefreshModal",
            children: [
                (0, l.jsxs)(g.xBx, {
                    className: $.header,
                    children: [
                        (0, l.jsxs)("div", {
                            className: $.titleLine,
                            children: [
                                (0, l.jsx)("div", {
                                    className: $.title,
                                    children: (0, l.jsx)(g.X6q, {
                                        variant: "heading-lg/semibold",
                                        children: J.intl.string(J.t.BN75l5),
                                    }),
                                }),
                                (0, l.jsx)(g.olH, {
                                    className: $.closeButton,
                                    onClick: eP,
                                }),
                            ],
                        }),
                        (0, l.jsx)(g.E1j, {
                            ref: ec,
                            query: M,
                            onChange: em,
                            onClear: ep,
                            placeholder: J.intl.string(J.t["5h0QOD"]),
                            "aria-label": J.intl.string(J.t["5h0QOD"]),
                            autoFocus: !0,
                        }),
                    ],
                }),
                (0, l.jsx)(g.hzk, {
                    className: s()($.body, { [$.empty]: 0 === eO.length }),
                    children: (0, l.jsx)(eo, {
                        guild: r,
                        rows: eO,
                        onToggle: ex,
                        scrollerRef: eh,
                        selection: P,
                        disabled: eA,
                    }),
                }),
                (0, l.jsxs)(g.mzw, {
                    direction: b.Z.Direction.VERTICAL,
                    className: $.footer,
                    children: [
                        (0, l.jsx)(W.f, {
                            className: $.footerContent,
                            guild: r,
                            channel: null != a ? a : null,
                            applicationId: null != f ? f : null,
                            getInviteKey: eZ,
                            sendInvite: ew,
                            canUseVanityURL: eN,
                            disabled: eA,
                            hasSelection: P.length > 0,
                            options: et,
                            setOptions: ev,
                            isGuestInviteAllowed: eT,
                            isTemporaryInviteAllowed: !eT && !eb,
                            isApplicationBypassAllowed: eS,
                            setError: ed,
                            analyticsLocation: eg[0],
                        }),
                        null !== eu &&
                            (0, l.jsx)(Y.W, {
                                guild: r,
                                error: eu,
                                onClose: eP,
                            }),
                    ],
                }),
            ],
        }),
    });
}
