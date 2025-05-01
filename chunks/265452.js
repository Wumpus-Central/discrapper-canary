n.d(t, { H: () => eo }), n(388685), n(539854), n(993155);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(512722),
    o = n.n(a),
    u = n(990547),
    d = n(91192),
    c = n(442837),
    g = n(481060),
    h = n(447543),
    m = n(247272),
    p = n(700582),
    v = n(493773),
    x = n(630810),
    I = n(724757),
    f = n(100527),
    j = n(906732),
    N = n(447003),
    _ = n(933557),
    S = n(259473),
    E = n(600164),
    b = n(687516),
    T = n(266076),
    O = n(227672),
    y = n(810123),
    C = n(448486),
    P = n(427679),
    Z = n(199902),
    w = n(984933),
    A = n(271383),
    k = n(430824),
    M = n(341165),
    R = n(751771),
    D = n(496675),
    L = n(158776),
    V = n(699516),
    U = n(626135),
    F = n(971130),
    B = n(51144),
    z = n(264229),
    G = n(601953),
    H = n(277364),
    q = n(666258),
    W = n(530436),
    Y = n(895976),
    K = n(245335),
    X = n(981631),
    J = n(388032),
    Q = n(910420);
function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let { INVITE_OPTIONS_7_DAYS: ee, INVITE_OPTIONS_UNLIMITED: et } = F.ZP,
    en = {
        max_age: ee.value,
        max_uses: et.value
    };
function el(e) {
    let { icon: t, label: n, subLabel: i, onClick: r, isSelected: s, disabled: a } = e;
    return (0, l.jsxs)(g.P3F, {
        'aria-disabled': a,
        className: Q.recipientRow,
        onClick: r,
        children: [
            (0, l.jsx)('div', {
                className: Q.recipientAsset,
                children: t
            }),
            (0, l.jsxs)('div', {
                className: Q.recipientLabels,
                children: [
                    (0, l.jsx)(g.Text, {
                        className: Q.recipientLabel,
                        variant: 'text-md/medium',
                        lineClamp: 1,
                        children: n
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(g.Text, {
                              className: Q.recipientSublabel,
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: i
                          })
                        : null
                ]
            }),
            (0, l.jsx)(g.XZJ, {
                type: g.XZJ.Types.INVERTED,
                displayOnly: !0,
                size: 24,
                value: s,
                className: Q.checkbox
            })
        ]
    });
}
function ei(e) {
    let { guild: t, user: n, onToggle: r, isSelected: s, disabled: a } = e,
        o = B.ZP.useName(n),
        u = B.ZP.useUserTag(n, { decoration: 'never' }),
        [d, h] = (0, c.Wu)([V.Z, L.Z], () => [V.Z.getNickname(n.id), L.Z.getStatus(n.id)], [n]),
        m = i.useCallback(() => r(n.id), [r, n.id]),
        v = [u];
    A.ZP.isMember(t.id, n.id) && v.push(J.intl.string(J.t.u1sEf3));
    let x = v.join('\xA0\xA0\u2022\xA0\xA0');
    return (0, l.jsx)(el, {
        icon: (0, l.jsx)(p.Z, {
            'aria-hidden': !0,
            size: g.EFr.SIZE_32,
            user: n,
            status: h
        }),
        label: null != d ? d : o,
        subLabel: x,
        onClick: m,
        isSelected: s,
        disabled: a
    });
}
function er(e) {
    var t, n;
    let { channel: r, onToggle: s, isSelected: a, disabled: o } = e,
        u = i.useCallback(() => s(r.id), [s, r.id]),
        d = null != (t = (0, _.ZP)(r)) ? t : '',
        c = null != (n = (0, C._)(r)) ? n : '';
    return (0, l.jsx)(el, {
        icon: (0, l.jsx)(T.Z, {
            'aria-hidden': !0,
            size: g.EFr.SIZE_32,
            channel: r,
            experimentLocation: 'instant_invite_modal'
        }),
        label: d,
        subLabel: c,
        onClick: u,
        isSelected: a,
        disabled: o
    });
}
function es(e) {
    var t, n;
    let { channel: r, onToggle: s, isSelected: a, disabled: o } = e,
        u = (0, c.e7)([k.Z], () => k.Z.getGuild(null == r ? void 0 : r.guild_id)),
        d = i.useCallback(() => s(r.id), [s, r.id]),
        g = null != (t = (0, _.ZP)(r)) ? t : '',
        h = null != (n = null == u ? void 0 : u.name) ? n : '';
    return (0, l.jsx)(el, {
        icon: (0, l.jsx)(y.Z, {
            size: y.E.SMALL_32,
            guild: u,
            channel: r
        }),
        label: g,
        subLabel: h,
        onClick: d,
        isSelected: a,
        disabled: o
    });
}
function ea(e) {
    let { guild: t, rows: n, onToggle: r, selection: s, scrollerRef: a, disabled: o } = e,
        u = i.useMemo(() => [n.length], [n.length]),
        c = (0, I.Z)('instant_invite_modal', a),
        h = i.useCallback(
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
                            (d = null != (i = s.includes(m.id)) && i),
                            (0, l.jsx)(
                                ei,
                                {
                                    guild: t,
                                    user: m,
                                    isSelected: d,
                                    onToggle: r,
                                    disabled: o
                                },
                                m.id
                            )
                        );
                    case F.bm.GROUP_DM:
                        let p = h.item;
                        return (
                            (d = null != (a = s.includes(p.id)) && a),
                            (0, l.jsx)(
                                er,
                                {
                                    channel: p,
                                    isSelected: d,
                                    onToggle: r,
                                    disabled: o
                                },
                                p.id
                            )
                        );
                    case F.bm.CHANNEL:
                        let v = h.item;
                        return (
                            (d = null != (u = s.includes(v.id)) && u),
                            (0, l.jsx)(
                                es,
                                {
                                    channel: v,
                                    isSelected: d,
                                    onToggle: r,
                                    disabled: o
                                },
                                v.id
                            )
                        );
                    default:
                        return null;
                }
            },
            [t, n, s, r, o]
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
                                  for (l = 0; l < r.length; l++) (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                              }
                              return i;
                          })(e, ['ref']);
                      return (0, l.jsx)(
                          g.YAO,
                          ((t = $(
                              {
                                  className: Q.recipientList,
                                  style: { '--custom-recipient-row-height': ''.concat(48, 'px') },
                                  scrollerRef: (e) => {
                                      null !== e && ((a.current = e), (i.current = e.getScrollerNode()));
                                  }
                              },
                              r
                          )),
                          (n = n =
                              {
                                  sections: u,
                                  sectionHeight: 0,
                                  renderRow: h,
                                  rowHeight: m
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
                          t)
                      );
                  }
              })
          });
}
function eo(e) {
    let { transitionState: t, onClose: n, guild: r, channel: a, guildScheduledEvent: d, source: p, streamUserId: I, applicationId: _, analyticsLocation: T } = e,
        y = null;
    null != _ ? (y = K.Iq.EMBEDDED_APPLICATION) : null != I && (y = K.Iq.STREAM);
    let C = (0, S.Z)({ guildId: r.id }),
        [A, k] = i.useState([]),
        [V, B] = i.useState(''),
        { current: ee } = i.useRef($({}, en, null == C ? {} : { max_age: C }, null == _ ? {} : { target_application_id: _ }, null == y ? {} : { target_type: y }, null == I ? {} : { target_user_id: I })),
        [et, el] = i.useState(ee),
        [ei, er] = i.useState(!1),
        [es, eo] = i.useState(!1),
        [eu, ed] = i.useState(null),
        ec = i.useRef(null),
        eg = i.useRef(null),
        { analyticsLocations: eh } = (0, j.ZP)(f.Z.INSTANT_INVITE_MODAL),
        em = i.useCallback(
            (e) => {
                var t;
                null == (t = eg.current) || t.scrollTo({ to: 0 }), B(e), (0, m.C)(e);
            },
            [B]
        ),
        ep = i.useCallback(() => {
            em('');
        }, [em]),
        ev = i.useCallback((e) => el((t) => $({}, t, e)), [el]),
        ex = i.useCallback(() => {
            k([]), el(ee), ep(), eo(!1), ed(null);
        }, [ep, ee]),
        eI = i.useCallback((e) => {
            k((t) => {
                let n = t.findIndex((t) => t === e);
                if (-1 === n) return [e, ...t];
                let l = [...t];
                return l.splice(n, 1), l;
            });
        }, []),
        ef = i.useMemo(() => {
            var e;
            return null != a ? a : null != (e = w.ZP.getDefaultChannel(r.id, !0, X.Plq.CREATE_INSTANT_INVITE)) ? e : null;
        }, [r.id, a]),
        ej = !(0, c.e7)([D.Z], () => null != ef && D.Z.can(X.Plq.CREATE_INSTANT_INVITE, ef), [ef]) && !(null == ef ? void 0 : ef.isGuildVocal()),
        eN = (0, N.Z)(ef),
        e_ = (null == ef ? void 0 : ef.type) === X.d4z.GUILD_VOICE && !ej && !eN,
        { enabled: eS } = O.o.useExperiment(
            {
                guildId: r.id,
                location: 'instant_invite_modal'
            },
            { autoTrackExposure: e_ }
        ),
        { canCreateApplicationBypassInvites: eE, isManualApprovalGuild: eb } = (0, H.R)(r),
        eT = eS && e_,
        {
            rows: eO,
            showFriends: ey,
            initialCounts: eC
        } = (0, Y.B)({
            guild: r,
            inviteChannel: ef,
            inviteTargetType: y,
            applicationId: _
        });
    (0, v.ZP)(() => {
        switch (
            (ey &&
                U.default.track(X.rMx.INVITE_SUGGESTION_OPENED, {
                    location: p,
                    num_suggestions: eO.length,
                    num_friends: eC.numFriends,
                    num_dms: eC.numDms,
                    num_group_dms: eC.numGroupDms,
                    guild_id: r.id,
                    application_id: _
                }),
            y)
        ) {
            case K.Iq.EMBEDDED_APPLICATION:
                U.default.track(X.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: p,
                    location: T,
                    application_id: _
                });
                break;
            case K.Iq.STREAM:
                if (null == I) break;
                let e = Z.Z.getStreamForUser(I, r.id),
                    t = (0, b.L2)(e, L.Z);
                U.default.track(X.rMx.OPEN_MODAL, {
                    type: 'Send Stream Invite',
                    source: p,
                    location: T,
                    other_user_id: I,
                    application_id: null != t ? t.id : null,
                    application_name: null != t ? t.name : null,
                    game_id: null != t ? t.id : null
                });
                break;
            default:
                U.default.track(X.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: p,
                    location: T
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
                    (t = M.Z.getInvite(ef.id, {
                        targetType: et.target_type,
                        targetUserId: et.target_user_id,
                        targetApplicationId: et.target_application_id
                    }))
                        ? t
                        : null;
                (null !== e && (0, G.m)(e, et)) ||
                    (await h.ZP.createInvite(ef.id, et, p),
                    (e =
                        null !=
                        (n = M.Z.getInvite(ef.id, {
                            targetType: et.target_type,
                            targetUserId: et.target_user_id,
                            targetApplicationId: et.target_application_id
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
                      guildScheduledEventId: null == d ? void 0 : d.id
                  }));
        }, [ef, ej, r, et, p, null == d ? void 0 : d.id]),
        ew = i.useCallback(async () => {
            if (es || ei) return;
            eo(!0), ed(null);
            let e = !1;
            try {
                let t = await eZ();
                o()(null != t, 'Invite key could not be determined.');
                let n = eO
                    .filter((e) => A.includes(e.item.id))
                    .map((e) => {
                        var n;
                        let l,
                            i = eh[0],
                            r = null != (n = R.Z.getSelectedInviteMetadata(e)) ? n : null;
                        switch (e.type) {
                            case F.bm.FRIEND:
                            case F.bm.DM:
                                l = {
                                    type: x.m.USER,
                                    user: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r
                                };
                                break;
                            case F.bm.CHANNEL:
                                l = {
                                    type: x.m.CHANNEL,
                                    channel: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r
                                };
                                break;
                            case F.bm.GROUP_DM:
                                l = {
                                    type: x.m.GROUP_DM,
                                    channel: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r
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
                    let e = A.length > 1 ? J.intl.string(J.t['4pl/xs']) : J.intl.string(J.t.sVwWdX);
                    (0, g.showToast)((0, g.createToast)(e, g.ToastType.INVITE));
                }
                e = !0;
            } catch (e) {
                ed(e), eo(!1);
            }
            e && eP();
        }, [es, ei, eo, A, eO, eZ, eh, eP]),
        eA = es || ei;
    return (0, l.jsx)(j.Gt, {
        value: eh,
        children: (0, l.jsxs)(g.Y0X, {
            className: s()(Q.modal, { [Q.disabled]: eA }),
            transitionState: t,
            impression: {
                impressionName: u.ImpressionNames.GUILD_INVITE,
                impressionProperties: {
                    invite_guild_id: r.id,
                    invite_channel_id: null == ef ? void 0 : ef.id
                }
            },
            children: [
                (0, l.jsxs)(g.xBx, {
                    className: Q.header,
                    children: [
                        (0, l.jsxs)('div', {
                            className: Q.titleLine,
                            children: [
                                (0, l.jsx)('div', {
                                    className: Q.title,
                                    children: (0, l.jsx)(g.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: J.intl.string(J.t.BN75l5)
                                    })
                                }),
                                (0, l.jsx)(g.olH, {
                                    className: Q.closeButton,
                                    onClick: eP
                                })
                            ]
                        }),
                        (0, l.jsx)(g.E1j, {
                            ref: ec,
                            size: g.E1j.Sizes.MEDIUM,
                            query: V,
                            onChange: em,
                            onClear: ep,
                            placeholder: J.intl.string(J.t['5h0QOD']),
                            'aria-label': J.intl.string(J.t['5h0QOD']),
                            autoFocus: !0
                        })
                    ]
                }),
                (0, l.jsx)(g.hzk, {
                    className: s()(Q.body, { [Q.empty]: 0 === eO.length }),
                    children: (0, l.jsx)(ea, {
                        guild: r,
                        rows: eO,
                        onToggle: eI,
                        scrollerRef: eg,
                        selection: A,
                        disabled: eA
                    })
                }),
                (0, l.jsxs)(g.mzw, {
                    direction: E.Z.Direction.VERTICAL,
                    className: Q.footer,
                    children: [
                        (0, l.jsx)(q.f, {
                            className: Q.footerContent,
                            guild: r,
                            channel: null != a ? a : null,
                            applicationId: null != _ ? _ : null,
                            getInviteKey: eZ,
                            sendInvite: ew,
                            canUseVanityURL: ej,
                            disabled: eA,
                            hasSelection: A.length > 0,
                            options: et,
                            setOptions: ev,
                            isGuestInviteAllowed: eT,
                            isTemporaryInviteAllowed: !eT && !eb,
                            isApplicationBypassAllowed: eE,
                            setError: ed,
                            analyticsLocation: eh[0]
                        }),
                        null !== eu &&
                            (0, l.jsx)(W.W, {
                                guild: r,
                                error: eu,
                                onClose: eP
                            })
                    ]
                })
            ]
        })
    });
}
