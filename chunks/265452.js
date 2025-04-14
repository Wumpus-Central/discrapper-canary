n.d(t, { H: () => ed }), n(388685), n(993155);
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
    A = n(592125),
    w = n(984933),
    k = n(430824),
    R = n(341165),
    M = n(751771),
    D = n(496675),
    L = n(158776),
    W = n(699516),
    V = n(944486),
    U = n(626135),
    B = n(971130),
    F = n(51144),
    G = n(264229),
    z = n(601953),
    H = n(277364),
    q = n(666258),
    Y = n(530436),
    K = n(895976),
    X = n(245335),
    J = n(981631),
    Q = n(176505),
    $ = n(388032),
    ee = n(910420);
function et(e) {
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
let { INVITE_OPTIONS_7_DAYS: en, INVITE_OPTIONS_UNLIMITED: el } = B.ZP,
    ei = {
        max_age: en.value,
        max_uses: el.value
    };
function er(e) {
    let { icon: t, label: n, subLabel: i, onClick: r, isSelected: s, disabled: a } = e;
    return (0, l.jsxs)(h.P3F, {
        'aria-disabled': a,
        className: ee.recipientRow,
        onClick: r,
        children: [
            (0, l.jsx)('div', {
                className: ee.recipientAsset,
                children: t
            }),
            (0, l.jsxs)('div', {
                className: ee.recipientLabels,
                children: [
                    (0, l.jsx)(h.Text, {
                        className: ee.recipientLabel,
                        variant: 'text-md/medium',
                        lineClamp: 1,
                        children: n
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(h.Text, {
                              className: ee.recipientSublabel,
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
                className: ee.checkbox
            })
        ]
    });
}
function es(e) {
    let { user: t, onToggle: n, isSelected: r, disabled: s } = e,
        a = F.ZP.useName(t),
        o = F.ZP.useUserTag(t, { decoration: 'never' }),
        [u, d] = (0, c.Wu)([W.Z, L.Z], () => [W.Z.getNickname(t.id), L.Z.getStatus(t.id)], [t]),
        g = i.useCallback(() => n(t.id), [n, t.id]);
    return (0, l.jsx)(er, {
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
function ea(e) {
    var t, n;
    let { channel: r, onToggle: s, isSelected: a, disabled: o } = e,
        u = i.useCallback(() => s(r.id), [s, r.id]),
        d = null != (t = (0, _.ZP)(r)) ? t : '',
        c = null != (n = (0, C._)(r)) ? n : '';
    return (0, l.jsx)(er, {
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
function eo(e) {
    var t, n;
    let { channel: r, onToggle: s, isSelected: a, disabled: o } = e,
        u = (0, c.e7)([k.Z], () => k.Z.getGuild(null == r ? void 0 : r.guild_id)),
        d = i.useCallback(() => s(r.id), [s, r.id]),
        h = null != (t = (0, _.ZP)(r)) ? t : '',
        g = null != (n = null == u ? void 0 : u.name) ? n : '';
    return (0, l.jsx)(er, {
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
function eu(e) {
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
                    case B.bm.FRIEND:
                    case B.bm.DM:
                        let g = h.item;
                        return (
                            (u = null != (i = r.includes(g.id)) && i),
                            (0, l.jsx)(
                                es,
                                {
                                    user: g,
                                    isSelected: u,
                                    onToggle: n,
                                    disabled: a
                                },
                                g.id
                            )
                        );
                    case B.bm.GROUP_DM:
                        let m = h.item;
                        return (
                            (u = null != (s = r.includes(m.id)) && s),
                            (0, l.jsx)(
                                ea,
                                {
                                    channel: m,
                                    isSelected: u,
                                    onToggle: n,
                                    disabled: a
                                },
                                m.id
                            )
                        );
                    case B.bm.CHANNEL:
                        let p = h.item;
                        return (
                            (u = null != (o = r.includes(p.id)) && o),
                            (0, l.jsx)(
                                eo,
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
        ? (0, l.jsx)(h.OZU, { children: $.NW.string($.t.ojoWgY) })
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
                          ((t = et(
                              {
                                  className: ee.recipientList,
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
function ed(e) {
    let { transitionState: t, onClose: n, guild: r, channel: a, source: d, streamUserId: p, applicationId: I, analyticsLocation: _ } = e,
        b = null;
    null != I ? (b = X.Iq.EMBEDDED_APPLICATION) : null != p && (b = X.Iq.STREAM);
    let y = (0, E.Z)({ guildId: r.id }),
        [C, k] = i.useState([]),
        [W, F] = i.useState(''),
        { current: en } = i.useRef(et({}, ei, null == y ? {} : { max_age: y }, null == I ? {} : { target_application_id: I }, null == b ? {} : { target_type: b }, null == p ? {} : { target_user_id: p })),
        [el, er] = i.useState(en),
        [es, ea] = i.useState(!1),
        [eo, ed] = i.useState(!1),
        [ec, eh] = i.useState(null),
        eg = i.useRef(null),
        em = i.useRef(null),
        { analyticsLocations: ep } = (0, f.ZP)(N.Z.INSTANT_INVITE_MODAL),
        ev = i.useCallback(
            (e) => {
                var t;
                null == (t = em.current) || t.scrollTo({ to: 0 }), F(e), (0, m.C)(e);
            },
            [F]
        ),
        ex = i.useCallback(() => {
            ev('');
        }, [ev]),
        eI = i.useCallback((e) => er((t) => et({}, t, e)), [er]),
        eN = i.useCallback(() => {
            k([]), er(en), ex(), ed(!1), eh(null);
        }, [ex, en]),
        ef = i.useCallback((e) => {
            k((t) => {
                let n = t.findIndex((t) => t === e);
                if (-1 === n) return [e, ...t];
                let l = [...t];
                return l.splice(n, 1), l;
            });
        }, []),
        ej = i.useMemo(() => {
            var e;
            if (null != a) return a;
            let t = V.Z.getChannelId(),
                n = null == t || (0, Q.AB)(t) ? null : A.Z.getChannel(t);
            return (null == n ? void 0 : n.isThread()) && (n = A.Z.getChannel(n.parent_id)), null != (e = null != n ? n : w.ZP.getDefaultChannel(r.id, !0, J.Plq.CREATE_INSTANT_INVITE)) ? e : null;
        }, [r.id, a]),
        e_ = !(0, c.e7)([D.Z], () => null != ej && D.Z.can(J.Plq.CREATE_INSTANT_INVITE, ej), [ej]) && !(null == ej ? void 0 : ej.isGuildVocal()),
        eE = (0, j.Z)(ej),
        eS = (null == ej ? void 0 : ej.type) === J.d4z.GUILD_VOICE && !e_ && !eE,
        { enabled: eT } = O.o.useExperiment(
            {
                guildId: r.id,
                location: 'instant_invite_modal'
            },
            { autoTrackExposure: eS }
        ),
        { canCreateApplicationBypassInvites: eb, isManualApprovalGuild: eO } = (0, H.R)(r),
        ey = eT && eS,
        {
            rows: eC,
            showFriends: eP,
            initialCounts: eZ
        } = (0, K.B)({
            guild: r,
            inviteChannel: ej,
            inviteTargetType: b,
            applicationId: I
        });
    (0, v.ZP)(() => {
        switch (
            (eP &&
                U.default.track(J.rMx.INVITE_SUGGESTION_OPENED, {
                    location: d,
                    num_suggestions: eC.length,
                    num_friends: eZ.numFriends,
                    num_dms: eZ.numDms,
                    num_group_dms: eZ.numGroupDms,
                    guild_id: r.id,
                    application_id: I
                }),
            b)
        ) {
            case X.Iq.EMBEDDED_APPLICATION:
                U.default.track(J.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: d,
                    location: _,
                    application_id: I
                });
                break;
            case X.Iq.STREAM:
                if (null == p) break;
                let e = Z.Z.getStreamForUser(p, r.id),
                    t = (0, T.L2)(e, L.Z);
                U.default.track(J.rMx.OPEN_MODAL, {
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
                U.default.track(J.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: d,
                    location: _
                });
        }
    });
    let eA = i.useCallback(() => {
            eN(), n();
        }, [eN, n]),
        ew = i.useCallback(async () => {
            var e, t, n, l;
            if (null == ej) return null;
            ea(!0);
            let i = null,
                s = null != (e = P.Z.getStageInstanceByChannel(null == ej ? void 0 : ej.id)) ? e : null;
            if (e_ && null != r.vanityURLCode) i = r.vanityURLCode;
            else if ((null == s ? void 0 : s.invite_code) != null) i = s.invite_code;
            else {
                let e =
                    null !=
                    (t = R.Z.getInvite(ej.id, {
                        targetType: el.target_type,
                        targetUserId: el.target_user_id,
                        targetApplicationId: el.target_application_id
                    }))
                        ? t
                        : null;
                (null !== e && (0, z.m)(e, el)) ||
                    (await g.ZP.createInvite(ej.id, el, d),
                    (e =
                        null !=
                        (n = R.Z.getInvite(ej.id, {
                            targetType: el.target_type,
                            targetUserId: el.target_user_id,
                            targetApplicationId: el.target_application_id
                        }))
                            ? n
                            : null)),
                    (i = null != (l = null == e ? void 0 : e.code) ? l : null);
            }
            return null == i ? null : (ea(!1), (0, G.tV)({ baseCode: i }));
        }, [ej, e_, r, el, d]),
        ek = i.useCallback(async () => {
            if (eo || es) return;
            ed(!0), eh(null);
            let e = !1;
            try {
                let t = await ew();
                o()(null != t, 'Invite key could not be determined.');
                let n = eC
                    .filter((e) => C.includes(e.item.id))
                    .map((e) => {
                        var n;
                        let l,
                            i = ep[0],
                            r = null != (n = M.Z.getSelectedInviteMetadata(e)) ? n : null;
                        switch (e.type) {
                            case B.bm.FRIEND:
                            case B.bm.DM:
                                l = {
                                    type: x.m.USER,
                                    user: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r
                                };
                                break;
                            case B.bm.CHANNEL:
                                l = {
                                    type: x.m.CHANNEL,
                                    channel: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r
                                };
                                break;
                            case B.bm.GROUP_DM:
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
                    let e = C.length > 1 ? $.NW.string($.t['4pl/xs']) : $.NW.string($.t.sVwWdX);
                    (0, h.showToast)((0, h.createToast)(e, h.ToastType.INVITE));
                }
                e = !0;
            } catch (e) {
                eh(e), ed(!1);
            }
            e && eA();
        }, [eo, es, ed, C, eC, ew, ep, eA]),
        eR = eo || es;
    return (0, l.jsx)(f.Gt, {
        value: ep,
        children: (0, l.jsxs)(h.Y0X, {
            className: s()(ee.modal, { [ee.disabled]: eR }),
            transitionState: t,
            impression: {
                impressionName: u.ImpressionNames.GUILD_INVITE,
                impressionProperties: {
                    invite_guild_id: r.id,
                    invite_channel_id: null == ej ? void 0 : ej.id
                }
            },
            children: [
                (0, l.jsxs)(h.xBx, {
                    className: ee.header,
                    children: [
                        (0, l.jsxs)('div', {
                            className: ee.titleLine,
                            children: [
                                (0, l.jsx)('div', {
                                    className: ee.title,
                                    children: (0, l.jsx)(h.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: $.NW.string($.t.BN75l5)
                                    })
                                }),
                                (0, l.jsx)(h.olH, {
                                    className: ee.closeButton,
                                    onClick: eA
                                })
                            ]
                        }),
                        (0, l.jsx)(h.E1j, {
                            ref: eg,
                            size: h.E1j.Sizes.MEDIUM,
                            query: W,
                            onChange: ev,
                            onClear: ex,
                            placeholder: $.NW.string($.t['5h0QOD']),
                            'aria-label': $.NW.string($.t['5h0QOD']),
                            autoFocus: !0
                        })
                    ]
                }),
                (0, l.jsx)(h.hzk, {
                    className: s()(ee.body, { [ee.empty]: 0 === eC.length }),
                    children: (0, l.jsx)(eu, {
                        rows: eC,
                        onToggle: ef,
                        scrollerRef: em,
                        selection: C,
                        disabled: eR
                    })
                }),
                (0, l.jsxs)(h.mzw, {
                    direction: S.Z.Direction.VERTICAL,
                    className: ee.footer,
                    children: [
                        (0, l.jsx)(q.f, {
                            className: ee.footerContent,
                            guild: r,
                            channel: null != a ? a : null,
                            applicationId: null != I ? I : null,
                            getInviteKey: ew,
                            sendInvite: ek,
                            canUseVanityURL: e_,
                            disabled: eR,
                            hasSelection: C.length > 0,
                            options: el,
                            setOptions: eI,
                            isGuestInviteAllowed: ey,
                            isTemporaryInviteAllowed: !ey && !eO,
                            isApplicationBypassAllowed: eb,
                            setError: eh,
                            analyticsLocation: ep[0]
                        }),
                        null !== ec &&
                            (0, l.jsx)(Y.W, {
                                guild: r,
                                error: ec,
                                onClose: eA
                            })
                    ]
                })
            ]
        })
    });
}
