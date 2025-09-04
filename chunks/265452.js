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
    g = n(755721),
    h = n(481060),
    m = n(447543),
    p = n(247272),
    v = n(700582),
    x = n(493773),
    I = n(630810),
    f = n(724757),
    j = n(100527),
    N = n(906732),
    _ = n(447003),
    E = n(933557),
    S = n(600164),
    b = n(687516),
    O = n(266076),
    T = n(227672),
    y = n(810123),
    C = n(448486),
    P = n(427679),
    Z = n(199902),
    w = n(984933),
    A = n(271383),
    M = n(430824),
    R = n(341165),
    D = n(751771),
    k = n(496675),
    L = n(158776),
    U = n(699516),
    V = n(626135),
    B = n(971130),
    F = n(51144),
    z = n(301873),
    G = n(264229),
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
let { INVITE_OPTIONS_7_DAYS: et, INVITE_OPTIONS_UNLIMITED: en } = B.ZP,
    el = {
        max_age: et.value,
        max_uses: en.value,
    };
function ei(e) {
    let { icon: t, label: n, subLabel: i, onClick: r, isSelected: s, disabled: a } = e;
    return (0, l.jsxs)(h.P3F, {
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
                    (0, l.jsx)(h.Text, {
                        className: $.recipientLabel,
                        variant: "text-md/medium",
                        lineClamp: 1,
                        children: n,
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(h.Text, {
                              className: $.recipientSublabel,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: i,
                          })
                        : null,
                ],
            }),
            (0, l.jsx)(g.$q, {
                type: g.M0.INVERTED,
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
        o = F.ZP.useName(n),
        u = F.ZP.useUserTag(n, { decoration: "never" }),
        [d, g] = (0, c.Wu)([U.Z, L.Z], () => [U.Z.getNickname(n.id), L.Z.getStatus(n.id)], [n]),
        m = i.useCallback(() => r(n.id), [r, n.id]),
        p = [u];
    A.ZP.isMember(t.id, n.id) && p.push(J.intl.string(J.t.u1sEf3));
    let x = p.join("\xA0\xA0\u2022\xA0\xA0");
    return (0, l.jsx)(ei, {
        icon: (0, l.jsx)(v.Z, {
            "aria-hidden": !0,
            size: h.EFr.SIZE_32,
            user: n,
            status: g,
        }),
        label: null != d ? d : o,
        subLabel: x,
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
        c = null != (n = (0, C._)(r)) ? n : "";
    return (0, l.jsx)(ei, {
        icon: (0, l.jsx)(O.Z, {
            "aria-hidden": !0,
            size: h.EFr.SIZE_32,
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
        g = null != (t = (0, E.ZP)(r)) ? t : "",
        h = null != (n = null == u ? void 0 : u.name) ? n : "";
    return (0, l.jsx)(ei, {
        icon: (0, l.jsx)(y.Z, {
            size: y.E.SMALL_32,
            guild: u,
            channel: r,
        }),
        label: g,
        subLabel: h,
        onClick: d,
        isSelected: a,
        disabled: o,
    });
}
function eo(e) {
    let { guild: t, rows: n, onToggle: r, selection: s, scrollerRef: a, disabled: o } = e,
        u = i.useMemo(() => [n.length], [n.length]),
        c = (0, f.Z)("instant_invite_modal", a),
        g = i.useCallback(
            (e) => {
                var i, a, u;
                let d,
                    { section: c, row: g } = e;
                if (c > 0) return;
                let h = n[g];
                switch (h.type) {
                    case B.bm.FRIEND:
                    case B.bm.DM:
                        let m = h.item;
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
                    case B.bm.GROUP_DM:
                        let p = h.item;
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
                    case B.bm.CHANNEL:
                        let v = h.item;
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
        ? (0, l.jsx)(h.OZU, { children: J.intl.string(J.t.ojoWgY) })
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
                          h.YAO,
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
                                  renderRow: g,
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
            source: g,
            streamUserId: v,
            applicationId: f,
            analyticsLocation: E,
        } = e,
        O = null;
    null != f ? (O = X.Iq.EMBEDDED_APPLICATION) : null != v && (O = X.Iq.STREAM);
    let y = (0, z.xU)({
            guildId: r.id,
            location: "InstantInviteRefreshModal",
        }),
        [C, A] = i.useState([]),
        [M, U] = i.useState(""),
        { current: F } = i.useRef(
            ee(
                {},
                el,
                null == y ? {} : { max_age: y },
                null == f ? {} : { target_application_id: f },
                null == O ? {} : { target_type: O },
                null == v ? {} : { target_user_id: v },
            ),
        ),
        [et, en] = i.useState(F),
        [ei, er] = i.useState(!1),
        [es, ea] = i.useState(!1),
        [eu, ed] = i.useState(null),
        ec = i.useRef(null),
        eg = i.useRef(null),
        { analyticsLocations: eh } = (0, N.ZP)(j.Z.INSTANT_INVITE_MODAL),
        em = i.useCallback(
            (e) => {
                var t;
                null == (t = eg.current) || t.scrollTo({ to: 0 }), U(e), (0, p.C)(e);
            },
            [U],
        ),
        ep = i.useCallback(() => {
            em("");
        }, [em]),
        ev = i.useCallback((e) => en((t) => ee({}, t, e)), [en]),
        ex = i.useCallback(() => {
            A([]), en(F), ep(), ea(!1), ed(null);
        }, [ep, F]),
        eI = i.useCallback((e) => {
            A((t) => {
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
                : null != (e = w.ZP.getDefaultChannel(r.id, !0, Q.Plq.CREATE_INSTANT_INVITE))
                  ? e
                  : null;
        }, [r.id, a]),
        ej =
            !(0, c.e7)([k.Z], () => null != ef && k.Z.can(Q.Plq.CREATE_INSTANT_INVITE, ef), [ef]) &&
            !(null == ef ? void 0 : ef.isGuildVocal()),
        eN = (0, _.Z)(ef),
        e_ = (null == ef ? void 0 : ef.type) === Q.d4z.GUILD_VOICE && !ej && !eN,
        { enabled: eE } = T.o.useExperiment(
            {
                guildId: r.id,
                location: "instant_invite_modal",
            },
            { autoTrackExposure: e_ },
        ),
        { canCreateApplicationBypassInvites: eS, isManualApprovalGuild: eb } = (0, q.R)(r),
        eO = eE && e_,
        {
            rows: eT,
            showFriends: ey,
            initialCounts: eC,
        } = (0, K.B)({
            guild: r,
            inviteChannel: ef,
            inviteTargetType: O,
            applicationId: f,
        });
    (0, x.ZP)(() => {
        switch (
            (ey &&
                V.default.track(Q.rMx.INVITE_SUGGESTION_OPENED, {
                    location: g,
                    num_suggestions: eT.length,
                    num_friends: eC.numFriends,
                    num_dms: eC.numDms,
                    num_group_dms: eC.numGroupDms,
                    guild_id: r.id,
                    application_id: f,
                }),
            O)
        ) {
            case X.Iq.EMBEDDED_APPLICATION:
                V.default.track(Q.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: g,
                    location: E,
                    application_id: f,
                });
                break;
            case X.Iq.STREAM:
                if (null == v) break;
                let e = Z.Z.getStreamForUser(v, r.id),
                    t = (0, b.L2)(e, L.Z);
                V.default.track(Q.rMx.OPEN_MODAL, {
                    type: "Send Stream Invite",
                    source: g,
                    location: E,
                    other_user_id: v,
                    application_id: null != t ? t.id : null,
                    application_name: null != t ? t.name : null,
                    game_id: null != t ? t.id : null,
                });
                break;
            default:
                V.default.track(Q.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: g,
                    location: E,
                });
        }
    });
    let eP = i.useCallback(() => {
            ex(), n();
        }, [ex, n]),
        eZ = i.useCallback(async () => {
            var e, t, n, l;
            er(!0);
            let i = null,
                s = null != (e = P.Z.getStageInstanceByChannel(null == ef ? void 0 : ef.id)) ? e : null;
            if (ej && null != r.vanityURLCode) i = r.vanityURLCode;
            else if ((null == s ? void 0 : s.invite_code) != null) i = s.invite_code;
            else if (null != ef) {
                let e =
                    null !=
                    (t = R.Z.getInvite(ef.id, {
                        targetType: et.target_type,
                        targetUserId: et.target_user_id,
                        targetApplicationId: et.target_application_id,
                    }))
                        ? t
                        : null;
                (null !== e && (0, H.m)(e, et)) ||
                    (await m.ZP.createInvite(ef.id, et, g),
                    (e =
                        null !=
                        (n = R.Z.getInvite(ef.id, {
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
                  (0, G.tV)({
                      baseCode: i,
                      guildScheduledEventId: null == d ? void 0 : d.id,
                  }));
        }, [ef, ej, r, et, g, null == d ? void 0 : d.id]),
        ew = i.useCallback(async () => {
            if (es || ei) return;
            ea(!0), ed(null);
            let e = !1;
            try {
                let t = await eZ();
                o()(null != t, "Invite key could not be determined.");
                let n = eT
                    .filter((e) => C.includes(e.item.id))
                    .map((e) => {
                        var n;
                        let l,
                            i = eh[0],
                            r = null != (n = D.Z.getSelectedInviteMetadata(e)) ? n : null;
                        switch (e.type) {
                            case B.bm.FRIEND:
                            case B.bm.DM:
                                l = {
                                    type: I.m.USER,
                                    user: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r,
                                };
                                break;
                            case B.bm.CHANNEL:
                                l = {
                                    type: I.m.CHANNEL,
                                    channel: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r,
                                };
                                break;
                            case B.bm.GROUP_DM:
                                l = {
                                    type: I.m.GROUP_DM,
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
                            I.Z.enqueue(l, (n) => {
                                n ? e() : t();
                            });
                        });
                    });
                if ((await Promise.allSettled(n), n.length > 0)) {
                    let e = C.length > 1 ? J.intl.string(J.t["4pl/xs"]) : J.intl.string(J.t.sVwWdX);
                    (0, h.showToast)((0, h.createToast)(e, h.ToastType.INVITE));
                }
                e = !0;
            } catch (e) {
                ed(e), ea(!1);
            }
            e && eP();
        }, [es, ei, ea, C, eT, eZ, eh, eP]),
        eA = es || ei;
    return (0, l.jsx)(N.Gt, {
        value: eh,
        children: (0, l.jsxs)(h.Y0X, {
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
                (0, l.jsxs)(h.xBx, {
                    className: $.header,
                    children: [
                        (0, l.jsxs)("div", {
                            className: $.titleLine,
                            children: [
                                (0, l.jsx)("div", {
                                    className: $.title,
                                    children: (0, l.jsx)(h.X6q, {
                                        variant: "heading-lg/semibold",
                                        children: J.intl.string(J.t.BN75l5),
                                    }),
                                }),
                                (0, l.jsx)(h.olH, {
                                    className: $.closeButton,
                                    onClick: eP,
                                }),
                            ],
                        }),
                        (0, l.jsx)(h.E1j, {
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
                (0, l.jsx)(h.hzk, {
                    className: s()($.body, { [$.empty]: 0 === eT.length }),
                    children: (0, l.jsx)(eo, {
                        guild: r,
                        rows: eT,
                        onToggle: eI,
                        scrollerRef: eg,
                        selection: C,
                        disabled: eA,
                    }),
                }),
                (0, l.jsxs)(h.mzw, {
                    direction: S.Z.Direction.VERTICAL,
                    className: $.footer,
                    children: [
                        (0, l.jsx)(W.f, {
                            className: $.footerContent,
                            guild: r,
                            channel: null != a ? a : null,
                            applicationId: null != f ? f : null,
                            getInviteKey: eZ,
                            sendInvite: ew,
                            canUseVanityURL: ej,
                            disabled: eA,
                            hasSelection: C.length > 0,
                            options: et,
                            setOptions: ev,
                            isGuestInviteAllowed: eO,
                            isTemporaryInviteAllowed: !eO && !eb,
                            isApplicationBypassAllowed: eS,
                            setError: ed,
                            analyticsLocation: eh[0],
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
