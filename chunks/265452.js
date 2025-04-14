n.d(t, { H: () => ea }), n(388685), n(993155);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(512722),
    o = n.n(a),
    u = n(990547),
    d = n(91192),
    c = n(442837),
    h = n(481060),
    g = n(447543),
    m = n(247272),
    p = n(700582),
    v = n(493773),
    x = n(630810),
    I = n(724757),
    N = n(100527),
    f = n(906732),
    j = n(447003),
    _ = n(933557),
    E = n(259473),
    S = n(600164),
    T = n(687516),
    b = n(266076),
    O = n(227672),
    y = n(810123),
    C = n(448486),
    P = n(427679),
    Z = n(199902),
    w = n(984933),
    A = n(430824),
    k = n(341165),
    R = n(751771),
    M = n(496675),
    D = n(158776),
    L = n(699516),
    W = n(626135),
    V = n(971130),
    U = n(51144),
    F = n(264229),
    B = n(601953),
    G = n(277364),
    z = n(666258),
    H = n(530436),
    q = n(895976),
    Y = n(245335),
    K = n(981631),
    X = n(388032),
    J = n(910420);
function Q(e) {
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
let { INVITE_OPTIONS_7_DAYS: $, INVITE_OPTIONS_UNLIMITED: ee } = V.ZP,
    et = {
        max_age: $.value,
        max_uses: ee.value
    };
function en(e) {
    let { icon: t, label: n, subLabel: i, onClick: r, isSelected: s, disabled: a } = e;
    return (0, l.jsxs)(h.P3F, {
        'aria-disabled': a,
        className: J.recipientRow,
        onClick: r,
        children: [
            (0, l.jsx)('div', {
                className: J.recipientAsset,
                children: t
            }),
            (0, l.jsxs)('div', {
                className: J.recipientLabels,
                children: [
                    (0, l.jsx)(h.Text, {
                        className: J.recipientLabel,
                        variant: 'text-md/medium',
                        lineClamp: 1,
                        children: n
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(h.Text, {
                              className: J.recipientSublabel,
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: i
                          })
                        : null
                ]
            }),
            (0, l.jsx)(h.XZJ, {
                type: h.XZJ.Types.INVERTED,
                displayOnly: !0,
                size: 24,
                value: s,
                className: J.checkbox
            })
        ]
    });
}
function el(e) {
    let { user: t, onToggle: n, isSelected: r, disabled: s } = e,
        a = U.ZP.useName(t),
        o = U.ZP.useUserTag(t, { decoration: 'never' }),
        [u, d] = (0, c.Wu)([L.Z, D.Z], () => [L.Z.getNickname(t.id), D.Z.getStatus(t.id)], [t]),
        g = i.useCallback(() => n(t.id), [n, t.id]);
    return (0, l.jsx)(en, {
        icon: (0, l.jsx)(p.Z, {
            'aria-hidden': !0,
            size: h.EFr.SIZE_32,
            user: t,
            status: d
        }),
        label: null != u ? u : a,
        subLabel: o,
        onClick: g,
        isSelected: r,
        disabled: s
    });
}
function ei(e) {
    var t, n;
    let { channel: r, onToggle: s, isSelected: a, disabled: o } = e,
        u = i.useCallback(() => s(r.id), [s, r.id]),
        d = null != (t = (0, _.ZP)(r)) ? t : '',
        c = null != (n = (0, C._)(r)) ? n : '';
    return (0, l.jsx)(en, {
        icon: (0, l.jsx)(b.Z, {
            'aria-hidden': !0,
            size: h.EFr.SIZE_32,
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
function er(e) {
    var t, n;
    let { channel: r, onToggle: s, isSelected: a, disabled: o } = e,
        u = (0, c.e7)([A.Z], () => A.Z.getGuild(null == r ? void 0 : r.guild_id)),
        d = i.useCallback(() => s(r.id), [s, r.id]),
        h = null != (t = (0, _.ZP)(r)) ? t : '',
        g = null != (n = null == u ? void 0 : u.name) ? n : '';
    return (0, l.jsx)(en, {
        icon: (0, l.jsx)(y.Z, {
            size: y.E.SMALL_32,
            guild: u,
            channel: r
        }),
        label: h,
        subLabel: g,
        onClick: d,
        isSelected: a,
        disabled: o
    });
}
function es(e) {
    let { rows: t, onToggle: n, selection: r, scrollerRef: s, disabled: a } = e,
        o = i.useMemo(() => [t.length], [t.length]),
        u = (0, I.Z)('instant_invite_modal', s),
        c = i.useCallback(
            (e) => {
                var i, s, o;
                let u,
                    { section: d, row: c } = e;
                if (d > 0) return;
                let h = t[c];
                switch (h.type) {
                    case V.bm.FRIEND:
                    case V.bm.DM:
                        let g = h.item;
                        return (
                            (u = null != (i = r.includes(g.id)) && i),
                            (0, l.jsx)(
                                el,
                                {
                                    user: g,
                                    isSelected: u,
                                    onToggle: n,
                                    disabled: a
                                },
                                g.id
                            )
                        );
                    case V.bm.GROUP_DM:
                        let m = h.item;
                        return (
                            (u = null != (s = r.includes(m.id)) && s),
                            (0, l.jsx)(
                                ei,
                                {
                                    channel: m,
                                    isSelected: u,
                                    onToggle: n,
                                    disabled: a
                                },
                                m.id
                            )
                        );
                    case V.bm.CHANNEL:
                        let p = h.item;
                        return (
                            (u = null != (o = r.includes(p.id)) && o),
                            (0, l.jsx)(
                                er,
                                {
                                    channel: p,
                                    isSelected: u,
                                    onToggle: n,
                                    disabled: a
                                },
                                p.id
                            )
                        );
                    default:
                        return null;
                }
            },
            [t, r, n, a]
        ),
        g = i.useCallback(() => 48, []);
    return 0 === t.length
        ? (0, l.jsx)(h.OZU, { children: X.NW.string(X.t.ojoWgY) })
        : (0, l.jsx)(d.bG, {
              navigator: u,
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
                          h.YAO,
                          ((t = Q(
                              {
                                  className: J.recipientList,
                                  style: { '--custom-recipient-row-height': ''.concat(48, 'px') },
                                  scrollerRef: (e) => {
                                      null !== e && ((s.current = e), (i.current = e.getScrollerNode()));
                                  }
                              },
                              r
                          )),
                          (n = n =
                              {
                                  sections: o,
                                  sectionHeight: 0,
                                  renderRow: c,
                                  rowHeight: g
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
function ea(e) {
    let { transitionState: t, onClose: n, guild: r, channel: a, source: d, streamUserId: p, applicationId: I, analyticsLocation: _ } = e,
        b = null;
    null != I ? (b = Y.Iq.EMBEDDED_APPLICATION) : null != p && (b = Y.Iq.STREAM);
    let y = (0, E.Z)({ guildId: r.id }),
        [C, A] = i.useState([]),
        [L, U] = i.useState(''),
        { current: $ } = i.useRef(Q({}, et, null == y ? {} : { max_age: y }, null == I ? {} : { target_application_id: I }, null == b ? {} : { target_type: b }, null == p ? {} : { target_user_id: p })),
        [ee, en] = i.useState($),
        [el, ei] = i.useState(!1),
        [er, ea] = i.useState(!1),
        [eo, eu] = i.useState(null),
        ed = i.useRef(null),
        ec = i.useRef(null),
        { analyticsLocations: eh } = (0, f.ZP)(N.Z.INSTANT_INVITE_MODAL),
        eg = i.useCallback(
            (e) => {
                var t;
                null == (t = ec.current) || t.scrollTo({ to: 0 }), U(e), (0, m.C)(e);
            },
            [U]
        ),
        em = i.useCallback(() => {
            eg('');
        }, [eg]),
        ep = i.useCallback((e) => en((t) => Q({}, t, e)), [en]),
        ev = i.useCallback(() => {
            A([]), en($), em(), ea(!1), eu(null);
        }, [em, $]),
        ex = i.useCallback((e) => {
            A((t) => {
                let n = t.findIndex((t) => t === e);
                if (-1 === n) return [e, ...t];
                let l = [...t];
                return l.splice(n, 1), l;
            });
        }, []),
        eI = i.useMemo(() => {
            var e;
            return null != a ? a : null != (e = w.ZP.getDefaultChannel(r.id, !0, K.Plq.CREATE_INSTANT_INVITE)) ? e : null;
        }, [r.id, a]),
        eN = !(0, c.e7)([M.Z], () => null != eI && M.Z.can(K.Plq.CREATE_INSTANT_INVITE, eI), [eI]) && !(null == eI ? void 0 : eI.isGuildVocal()),
        ef = (0, j.Z)(eI),
        ej = (null == eI ? void 0 : eI.type) === K.d4z.GUILD_VOICE && !eN && !ef,
        { enabled: e_ } = O.o.useExperiment(
            {
                guildId: r.id,
                location: 'instant_invite_modal'
            },
            { autoTrackExposure: ej }
        ),
        { canCreateApplicationBypassInvites: eE, isManualApprovalGuild: eS } = (0, G.R)(r),
        eT = e_ && ej,
        {
            rows: eb,
            showFriends: eO,
            initialCounts: ey
        } = (0, q.B)({
            guild: r,
            inviteChannel: eI,
            inviteTargetType: b,
            applicationId: I
        });
    (0, v.ZP)(() => {
        switch (
            (eO &&
                W.default.track(K.rMx.INVITE_SUGGESTION_OPENED, {
                    location: d,
                    num_suggestions: eb.length,
                    num_friends: ey.numFriends,
                    num_dms: ey.numDms,
                    num_group_dms: ey.numGroupDms,
                    guild_id: r.id,
                    application_id: I
                }),
            b)
        ) {
            case Y.Iq.EMBEDDED_APPLICATION:
                W.default.track(K.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: d,
                    location: _,
                    application_id: I
                });
                break;
            case Y.Iq.STREAM:
                if (null == p) break;
                let e = Z.Z.getStreamForUser(p, r.id),
                    t = (0, T.L2)(e, D.Z);
                W.default.track(K.rMx.OPEN_MODAL, {
                    type: 'Send Stream Invite',
                    source: d,
                    location: _,
                    other_user_id: p,
                    application_id: null != t ? t.id : null,
                    application_name: null != t ? t.name : null,
                    game_id: null != t ? t.id : null
                });
                break;
            default:
                W.default.track(K.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: d,
                    location: _
                });
        }
    });
    let eC = i.useCallback(() => {
            ev(), n();
        }, [ev, n]),
        eP = i.useCallback(async () => {
            var e, t, n, l;
            if (null == eI) return null;
            ei(!0);
            let i = null,
                s = null != (e = P.Z.getStageInstanceByChannel(null == eI ? void 0 : eI.id)) ? e : null;
            if (eN && null != r.vanityURLCode) i = r.vanityURLCode;
            else if ((null == s ? void 0 : s.invite_code) != null) i = s.invite_code;
            else {
                let e =
                    null !=
                    (t = k.Z.getInvite(eI.id, {
                        targetType: ee.target_type,
                        targetUserId: ee.target_user_id,
                        targetApplicationId: ee.target_application_id
                    }))
                        ? t
                        : null;
                (null !== e && (0, B.m)(e, ee)) ||
                    (await g.ZP.createInvite(eI.id, ee, d),
                    (e =
                        null !=
                        (n = k.Z.getInvite(eI.id, {
                            targetType: ee.target_type,
                            targetUserId: ee.target_user_id,
                            targetApplicationId: ee.target_application_id
                        }))
                            ? n
                            : null)),
                    (i = null != (l = null == e ? void 0 : e.code) ? l : null);
            }
            return null == i ? null : (ei(!1), (0, F.tV)({ baseCode: i }));
        }, [eI, eN, r, ee, d]),
        eZ = i.useCallback(async () => {
            if (er || el) return;
            ea(!0), eu(null);
            let e = !1;
            try {
                let t = await eP();
                o()(null != t, 'Invite key could not be determined.');
                let n = eb
                    .filter((e) => C.includes(e.item.id))
                    .map((e) => {
                        var n;
                        let l,
                            i = eh[0],
                            r = null != (n = R.Z.getSelectedInviteMetadata(e)) ? n : null;
                        switch (e.type) {
                            case V.bm.FRIEND:
                            case V.bm.DM:
                                l = {
                                    type: x.m.USER,
                                    user: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r
                                };
                                break;
                            case V.bm.CHANNEL:
                                l = {
                                    type: x.m.CHANNEL,
                                    channel: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r
                                };
                                break;
                            case V.bm.GROUP_DM:
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
                    let e = C.length > 1 ? X.NW.string(X.t['4pl/xs']) : X.NW.string(X.t.sVwWdX);
                    (0, h.showToast)((0, h.createToast)(e, h.ToastType.INVITE));
                }
                e = !0;
            } catch (e) {
                eu(e), ea(!1);
            }
            e && eC();
        }, [er, el, ea, C, eb, eP, eh, eC]),
        ew = er || el;
    return (0, l.jsx)(f.Gt, {
        value: eh,
        children: (0, l.jsxs)(h.Y0X, {
            className: s()(J.modal, { [J.disabled]: ew }),
            transitionState: t,
            impression: {
                impressionName: u.ImpressionNames.GUILD_INVITE,
                impressionProperties: {
                    invite_guild_id: r.id,
                    invite_channel_id: null == eI ? void 0 : eI.id
                }
            },
            children: [
                (0, l.jsxs)(h.xBx, {
                    className: J.header,
                    children: [
                        (0, l.jsxs)('div', {
                            className: J.titleLine,
                            children: [
                                (0, l.jsx)('div', {
                                    className: J.title,
                                    children: (0, l.jsx)(h.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: X.NW.string(X.t.BN75l5)
                                    })
                                }),
                                (0, l.jsx)(h.olH, {
                                    className: J.closeButton,
                                    onClick: eC
                                })
                            ]
                        }),
                        (0, l.jsx)(h.E1j, {
                            ref: ed,
                            size: h.E1j.Sizes.MEDIUM,
                            query: L,
                            onChange: eg,
                            onClear: em,
                            placeholder: X.NW.string(X.t['5h0QOD']),
                            'aria-label': X.NW.string(X.t['5h0QOD']),
                            autoFocus: !0
                        })
                    ]
                }),
                (0, l.jsx)(h.hzk, {
                    className: s()(J.body, { [J.empty]: 0 === eb.length }),
                    children: (0, l.jsx)(es, {
                        rows: eb,
                        onToggle: ex,
                        scrollerRef: ec,
                        selection: C,
                        disabled: ew
                    })
                }),
                (0, l.jsxs)(h.mzw, {
                    direction: S.Z.Direction.VERTICAL,
                    className: J.footer,
                    children: [
                        (0, l.jsx)(z.f, {
                            className: J.footerContent,
                            guild: r,
                            channel: null != a ? a : null,
                            applicationId: null != I ? I : null,
                            getInviteKey: eP,
                            sendInvite: eZ,
                            canUseVanityURL: eN,
                            disabled: ew,
                            hasSelection: C.length > 0,
                            options: ee,
                            setOptions: ep,
                            isGuestInviteAllowed: eT,
                            isTemporaryInviteAllowed: !eT && !eS,
                            isApplicationBypassAllowed: eE,
                            setError: eu,
                            analyticsLocation: eh[0]
                        }),
                        null !== eo &&
                            (0, l.jsx)(H.W, {
                                guild: r,
                                error: eo,
                                onClose: eC
                            })
                    ]
                })
            ]
        })
    });
}
