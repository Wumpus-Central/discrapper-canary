n.d(t, { H: () => eu }), n(388685), n(539854), n(993155);
var l = n(951288),
    i = n(647438),
    s = n(120356),
    r = n.n(s),
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
    I = n(493773),
    x = n(630810),
    f = n(724757),
    N = n(100527),
    S = n(906732),
    _ = n(447003),
    j = n(933557),
    b = n(600164),
    E = n(687516),
    y = n(266076),
    T = n(227672),
    O = n(810123),
    C = n(448486),
    P = n(427679),
    Z = n(199902),
    A = n(984933),
    M = n(271383),
    w = n(430824),
    R = n(341165),
    V = n(751771),
    k = n(496675),
    D = n(158776),
    L = n(699516),
    U = n(626135),
    F = n(971130),
    B = n(51144),
    z = n(301873),
    G = n(264229),
    H = n(601953),
    q = n(277364),
    W = n(666258),
    Y = n(530436),
    K = n(895976),
    X = n(245335),
    Q = n(981631),
    $ = n(388032),
    J = n(890967);
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
    let { icon: t, label: n, subLabel: i, onClick: s, isSelected: r, disabled: a } = e;
    return (0, l.jsxs)(h.P3F, {
        "aria-disabled": a,
        className: J.recipientRow,
        onClick: s,
        children: [
            (0, l.jsx)("div", {
                className: J.recipientAsset,
                children: t,
            }),
            (0, l.jsxs)("div", {
                className: J.recipientLabels,
                children: [
                    (0, l.jsx)(h.Text, {
                        className: J.recipientLabel,
                        variant: "text-md/medium",
                        lineClamp: 1,
                        children: n,
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(h.Text, {
                              className: J.recipientSublabel,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: i,
                          })
                        : null,
                ],
            }),
            (0, l.jsx)(g.VL, {
                checked: r,
                className: J.checkbox,
                isIndicator: !0,
            }),
        ],
    });
}
function es(e) {
    let { guild: t, user: n, onToggle: s, isSelected: r, disabled: a } = e,
        o = B.ZP.useName(n),
        u = B.ZP.useUserTag(n, { decoration: "never" }),
        [d, g] = (0, c.Wu)([L.Z, D.Z], () => [L.Z.getNickname(n.id), D.Z.getStatus(n.id)], [n]),
        m = i.useCallback(() => s(n.id), [s, n.id]),
        p = [u];
    M.ZP.isMember(t.id, n.id) && p.push($.intl.string($.t.u1sEf3));
    let I = p.join("\xA0\xA0\u2022\xA0\xA0");
    return (0, l.jsx)(ei, {
        icon: (0, l.jsx)(v.Z, {
            "aria-hidden": !0,
            size: h.EFr.SIZE_32,
            user: n,
            status: g,
        }),
        label: null != d ? d : o,
        subLabel: I,
        onClick: m,
        isSelected: r,
        disabled: a,
    });
}
function er(e) {
    var t, n;
    let { channel: s, onToggle: r, isSelected: a, disabled: o } = e,
        u = i.useCallback(() => r(s.id), [r, s.id]),
        d = null != (t = (0, j.ZP)(s)) ? t : "",
        c = null != (n = (0, C._)(s)) ? n : "";
    return (0, l.jsx)(ei, {
        icon: (0, l.jsx)(y.Z, {
            "aria-hidden": !0,
            size: h.EFr.SIZE_32,
            channel: s,
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
    let { channel: s, onToggle: r, isSelected: a, disabled: o } = e,
        u = (0, c.e7)([w.Z], () => w.Z.getGuild(null == s ? void 0 : s.guild_id)),
        d = i.useCallback(() => r(s.id), [r, s.id]),
        g = null != (t = (0, j.ZP)(s)) ? t : "",
        h = null != (n = null == u ? void 0 : u.name) ? n : "";
    return (0, l.jsx)(ei, {
        icon: (0, l.jsx)(O.Z, {
            size: O.E.SMALL_32,
            guild: u,
            channel: s,
        }),
        label: g,
        subLabel: h,
        onClick: d,
        isSelected: a,
        disabled: o,
    });
}
function eo(e) {
    let { guild: t, rows: n, onToggle: s, selection: r, scrollerRef: a, disabled: o } = e,
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
                    case F.bm.FRIEND:
                    case F.bm.DM:
                        let m = h.item;
                        return (
                            (d = null != (i = r.includes(m.id)) && i),
                            (0, l.jsx)(
                                es,
                                {
                                    guild: t,
                                    user: m,
                                    isSelected: d,
                                    onToggle: s,
                                    disabled: o,
                                },
                                m.id,
                            )
                        );
                    case F.bm.GROUP_DM:
                        let p = h.item;
                        return (
                            (d = null != (a = r.includes(p.id)) && a),
                            (0, l.jsx)(
                                er,
                                {
                                    channel: p,
                                    isSelected: d,
                                    onToggle: s,
                                    disabled: o,
                                },
                                p.id,
                            )
                        );
                    case F.bm.CHANNEL:
                        let v = h.item;
                        return (
                            (d = null != (u = r.includes(v.id)) && u),
                            (0, l.jsx)(
                                ea,
                                {
                                    channel: v,
                                    isSelected: d,
                                    onToggle: s,
                                    disabled: o,
                                },
                                v.id,
                            )
                        );
                    default:
                        return null;
                }
            },
            [t, n, r, s, o],
        ),
        m = i.useCallback(() => 48, []);
    return 0 === n.length
        ? (0, l.jsx)(h.OZU, { children: $.intl.string($.t.ojoWgY) })
        : (0, l.jsx)(d.bG, {
              navigator: c,
              children: (0, l.jsx)(d.SJ, {
                  children: (e) => {
                      var t,
                          n,
                          { ref: i } = e,
                          s = (function (e, t) {
                              if (null == e) return {};
                              var n,
                                  l,
                                  i = (function (e, t) {
                                      if (null == e) return {};
                                      var n,
                                          l,
                                          i = {},
                                          s = Object.keys(e);
                                      for (l = 0; l < s.length; l++) (n = s[l]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                      return i;
                                  })(e, t);
                              if (Object.getOwnPropertySymbols) {
                                  var s = Object.getOwnPropertySymbols(e);
                                  for (l = 0; l < s.length; l++)
                                      (n = s[l]),
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
                                  className: J.recipientList,
                                  style: { "--custom-recipient-row-height": "".concat(48, "px") },
                                  scrollerRef: (e) => {
                                      null !== e && ((a.current = e), (i.current = e.getScrollerNode()));
                                  },
                              },
                              s,
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
            guild: s,
            channel: a,
            guildScheduledEvent: d,
            source: g,
            streamUserId: v,
            applicationId: f,
            analyticsLocation: j,
        } = e,
        y = null;
    null != f ? (y = X.Iq.EMBEDDED_APPLICATION) : null != v && (y = X.Iq.STREAM);
    let O = (0, z.xU)({
            guildId: s.id,
            location: "InstantInviteRefreshModal",
        }),
        [C, M] = i.useState([]),
        [w, L] = i.useState(""),
        { current: B } = i.useRef(
            ee(
                {},
                el,
                null == O ? {} : { max_age: O },
                null == f ? {} : { target_application_id: f },
                null == y ? {} : { target_type: y },
                null == v ? {} : { target_user_id: v },
            ),
        ),
        [et, en] = i.useState(B),
        [ei, es] = i.useState(!1),
        [er, ea] = i.useState(!1),
        [eu, ed] = i.useState(null),
        ec = i.useRef(null),
        eg = i.useRef(null),
        { analyticsLocations: eh } = (0, S.ZP)(N.Z.INSTANT_INVITE_MODAL),
        em = i.useCallback(
            (e) => {
                var t;
                null == (t = eg.current) || t.scrollTo({ to: 0 }), L(e), (0, p.C)(e);
            },
            [L],
        ),
        ep = i.useCallback(() => {
            em("");
        }, [em]),
        ev = i.useCallback((e) => en((t) => ee({}, t, e)), [en]),
        eI = i.useCallback(() => {
            M([]), en(B), ep(), ea(!1), ed(null);
        }, [ep, B]),
        ex = i.useCallback((e) => {
            M((t) => {
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
                : null != (e = A.ZP.getDefaultChannel(s.id, !0, Q.Plq.CREATE_INSTANT_INVITE))
                  ? e
                  : null;
        }, [s.id, a]),
        eN =
            !(0, c.e7)([k.Z], () => null != ef && k.Z.can(Q.Plq.CREATE_INSTANT_INVITE, ef), [ef]) &&
            !(null == ef ? void 0 : ef.isGuildVocal()),
        eS = (0, _.Z)(ef),
        e_ = (null == ef ? void 0 : ef.type) === Q.d4z.GUILD_VOICE && !eN && !eS,
        { enabled: ej } = T.o.useExperiment(
            {
                guildId: s.id,
                location: "instant_invite_modal",
            },
            { autoTrackExposure: e_ },
        ),
        { canCreateApplicationBypassInvites: eb, isManualApprovalGuild: eE } = (0, q.R)(s),
        ey = ej && e_,
        {
            rows: eT,
            showFriends: eO,
            initialCounts: eC,
        } = (0, K.B)({
            guild: s,
            inviteChannel: ef,
            inviteTargetType: y,
            applicationId: f,
        });
    (0, I.ZP)(() => {
        switch (
            (eO &&
                U.default.track(Q.rMx.INVITE_SUGGESTION_OPENED, {
                    location: g,
                    num_suggestions: eT.length,
                    num_friends: eC.numFriends,
                    num_dms: eC.numDms,
                    num_group_dms: eC.numGroupDms,
                    guild_id: s.id,
                    application_id: f,
                }),
            y)
        ) {
            case X.Iq.EMBEDDED_APPLICATION:
                U.default.track(Q.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: g,
                    location: j,
                    application_id: f,
                });
                break;
            case X.Iq.STREAM:
                if (null == v) break;
                let e = Z.Z.getStreamForUser(v, s.id),
                    t = (0, E.L2)(e, D.Z);
                U.default.track(Q.rMx.OPEN_MODAL, {
                    type: "Send Stream Invite",
                    source: g,
                    location: j,
                    other_user_id: v,
                    application_id: null != t ? t.id : null,
                    application_name: null != t ? t.name : null,
                    game_id: null != t ? t.id : null,
                });
                break;
            default:
                U.default.track(Q.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: g,
                    location: j,
                });
        }
    });
    let eP = i.useCallback(() => {
            eI(), n();
        }, [eI, n]),
        eZ = i.useCallback(async () => {
            var e, t, n, l;
            es(!0);
            let i = null,
                r = null != (e = P.Z.getStageInstanceByChannel(null == ef ? void 0 : ef.id)) ? e : null;
            if (eN && null != s.vanityURLCode) i = s.vanityURLCode;
            else if ((null == r ? void 0 : r.invite_code) != null) i = r.invite_code;
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
                : (es(!1),
                  (0, G.tV)({
                      baseCode: i,
                      guildScheduledEventId: null == d ? void 0 : d.id,
                  }));
        }, [ef, eN, s, et, g, null == d ? void 0 : d.id]),
        eA = i.useCallback(async () => {
            if (er || ei) return;
            ea(!0), ed(null);
            let e = !1;
            try {
                let t = await eZ();
                o()(null != t, "Invite key could not be determined.");
                let n = eT
                    .filter((e) => C.includes(e.item.id))
                    .map((e) => {
                        let n,
                            l = eh[0];
                        switch (e.type) {
                            case F.bm.FRIEND:
                            case F.bm.DM:
                                n = {
                                    type: x.m.USER,
                                    user: e.item,
                                    inviteKey: t,
                                    location: l,
                                    inviteAnalyticsMetadata: {
                                        suggestionData: V.Z.getSelectedInviteMetadata(e),
                                        source: g,
                                    },
                                };
                                break;
                            case F.bm.CHANNEL:
                                n = {
                                    type: x.m.CHANNEL,
                                    channel: e.item,
                                    inviteKey: t,
                                    location: l,
                                    inviteAnalyticsMetadata: {
                                        suggestionData: V.Z.getSelectedInviteMetadata(e),
                                        source: g,
                                    },
                                };
                                break;
                            case F.bm.GROUP_DM:
                                n = {
                                    type: x.m.GROUP_DM,
                                    channel: e.item,
                                    inviteKey: t,
                                    location: l,
                                    inviteAnalyticsMetadata: {
                                        suggestionData: V.Z.getSelectedInviteMetadata(e),
                                        source: g,
                                    },
                                };
                                break;
                            default:
                                return Promise.resolve();
                        }
                        return new Promise((e, t) => {
                            x.Z.enqueue(n, (n) => {
                                n ? e() : t();
                            });
                        });
                    });
                if ((await Promise.allSettled(n), n.length > 0)) {
                    let e = C.length > 1 ? $.intl.string($.t["4pl/xs"]) : $.intl.string($.t.sVwWdX);
                    (0, h.showToast)((0, h.createToast)(e, h.ToastType.INVITE));
                }
                e = !0;
            } catch (e) {
                ed(e), ea(!1);
            }
            e && eP();
        }, [er, ei, ea, C, eT, eZ, eh, g, eP]),
        eM = er || ei;
    return (0, l.jsx)(S.Gt, {
        value: eh,
        children: (0, l.jsxs)(h.Y0X, {
            className: r()(J.modal, { [J.disabled]: eM }),
            transitionState: t,
            impression: {
                impressionName: u.ImpressionNames.GUILD_INVITE,
                impressionProperties: {
                    invite_guild_id: s.id,
                    invite_channel_id: null == ef ? void 0 : ef.id,
                },
            },
            parentComponent: "InstantInviteRefreshModal",
            children: [
                (0, l.jsxs)(h.xBx, {
                    className: J.header,
                    children: [
                        (0, l.jsxs)("div", {
                            className: J.titleLine,
                            children: [
                                (0, l.jsx)("div", {
                                    className: J.title,
                                    children: (0, l.jsx)(h.X6q, {
                                        variant: "heading-lg/semibold",
                                        children: $.intl.string($.t.BN75l5),
                                    }),
                                }),
                                (0, l.jsx)(h.olH, {
                                    className: J.closeButton,
                                    onClick: eP,
                                }),
                            ],
                        }),
                        (0, l.jsx)(h.E1j, {
                            ref: ec,
                            query: w,
                            onChange: em,
                            onClear: ep,
                            placeholder: $.intl.string($.t["5h0QOD"]),
                            "aria-label": $.intl.string($.t["5h0QOD"]),
                            autoFocus: !0,
                        }),
                    ],
                }),
                (0, l.jsx)(h.hzk, {
                    className: r()(J.body, { [J.empty]: 0 === eT.length }),
                    children: (0, l.jsx)(eo, {
                        guild: s,
                        rows: eT,
                        onToggle: ex,
                        scrollerRef: eg,
                        selection: C,
                        disabled: eM,
                    }),
                }),
                (0, l.jsxs)(h.mzw, {
                    direction: b.Z.Direction.VERTICAL,
                    className: J.footer,
                    children: [
                        (0, l.jsx)(W.f, {
                            className: J.footerContent,
                            guild: s,
                            channel: null != a ? a : null,
                            applicationId: null != f ? f : null,
                            getInviteKey: eZ,
                            sendInvite: eA,
                            canUseVanityURL: eN,
                            disabled: eM,
                            hasSelection: C.length > 0,
                            options: et,
                            setOptions: ev,
                            isGuestInviteAllowed: ey,
                            isTemporaryInviteAllowed: !ey && !eE,
                            isApplicationBypassAllowed: eb,
                            setError: ed,
                            analyticsLocation: eh[0],
                        }),
                        null !== eu &&
                            (0, l.jsx)(Y.W, {
                                guild: s,
                                error: eu,
                                onClose: eP,
                            }),
                    ],
                }),
            ],
        }),
    });
}
