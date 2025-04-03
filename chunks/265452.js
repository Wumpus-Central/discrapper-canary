n.d(t, { H: () => J }), n(47120), n(998459);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(91192),
    o = n(442837),
    d = n(481060),
    u = n(447543),
    c = n(247272),
    h = n(700582),
    g = n(630810),
    m = n(724757),
    x = n(100527),
    v = n(906732),
    p = n(447003),
    N = n(933557),
    I = n(600164),
    f = n(266076),
    j = n(227672),
    S = n(448486),
    E = n(427679),
    T = n(592125),
    C = n(984933),
    b = n(341165),
    _ = n(751771),
    y = n(496675),
    O = n(158776),
    P = n(699516),
    Z = n(944486),
    A = n(971130),
    w = n(51144),
    k = n(264229),
    R = n(277364),
    M = n(666258),
    W = n(895976),
    L = n(245335),
    D = n(981631),
    U = n(176505),
    V = n(388032),
    B = n(910420);
function z(e) {
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
let { INVITE_OPTIONS_7_DAYS: F, INVITE_OPTIONS_UNLIMITED: G } = A.ZP,
    H = {
        max_age: F.value,
        max_uses: G.value
    };
function q(e) {
    let { icon: t, label: n, subLabel: i, onClick: s, isSelected: r, disabled: a } = e;
    return (0, l.jsxs)(d.P3F, {
        'aria-disabled': a,
        className: B.recipientRow,
        onClick: s,
        children: [
            (0, l.jsx)('div', {
                className: B.recipientAsset,
                children: t
            }),
            (0, l.jsxs)('div', {
                className: B.recipientLabels,
                children: [
                    (0, l.jsx)(d.Text, {
                        className: B.recipientLabel,
                        variant: 'text-md/medium',
                        lineClamp: 1,
                        children: n
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(d.Text, {
                              className: B.recipientSublabel,
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: i
                          })
                        : null
                ]
            }),
            (0, l.jsx)(d.XZJ, {
                type: d.XZJ.Types.INVERTED,
                displayOnly: !0,
                size: 24,
                value: r,
                className: B.checkbox
            })
        ]
    });
}
function Y(e) {
    let { user: t, onToggle: n, isSelected: s, disabled: r } = e,
        a = w.ZP.useName(t),
        u = w.ZP.useUserTag(t, { decoration: 'never' }),
        [c, g] = (0, o.Wu)([P.Z, O.Z], () => [P.Z.getNickname(t.id), O.Z.getStatus(t.id)], [t]),
        m = i.useCallback(() => n(t.id), [n, t.id]);
    return (0, l.jsx)(q, {
        icon: (0, l.jsx)(h.Z, {
            'aria-hidden': !0,
            size: d.EFr.SIZE_32,
            user: t,
            status: g
        }),
        label: null != c ? c : a,
        subLabel: u,
        onClick: m,
        isSelected: s,
        disabled: r
    });
}
function K(e) {
    var t, n;
    let { channel: s, onToggle: r, isSelected: a, disabled: o } = e,
        u = i.useCallback(() => r(s.id), [r, s.id]),
        c = null != (t = (0, N.ZP)(s)) ? t : '',
        h = null != (n = (0, S._)(s)) ? n : '';
    return (0, l.jsx)(q, {
        icon: (0, l.jsx)(f.Z, {
            'aria-hidden': !0,
            size: d.EFr.SIZE_32,
            channel: s,
            experimentLocation: 'instant_invite_modal'
        }),
        label: c,
        subLabel: h,
        onClick: u,
        isSelected: a,
        disabled: o
    });
}
function X(e) {
    let { rows: t, onToggle: n, selection: s, scrollerRef: r, disabled: o } = e,
        u = i.useMemo(() => [t.length], [t.length]),
        c = (0, m.Z)('instant_invite_modal', r),
        h = i.useCallback(
            (e) => {
                var i, r;
                let a,
                    { section: d, row: u } = e;
                if (d > 0) return;
                let c = t[u];
                switch (c.type) {
                    case A.bm.FRIEND:
                    case A.bm.DM:
                        let h = c.item;
                        return (
                            (a = null != (i = s.includes(h.id)) && i),
                            (0, l.jsx)(
                                Y,
                                {
                                    user: h,
                                    isSelected: a,
                                    onToggle: n,
                                    disabled: o
                                },
                                h.id
                            )
                        );
                    case A.bm.GROUP_DM:
                    case A.bm.CHANNEL:
                        let g = c.item;
                        return (
                            (a = null != (r = s.includes(g.id)) && r),
                            (0, l.jsx)(
                                K,
                                {
                                    channel: g,
                                    isSelected: a,
                                    onToggle: n,
                                    disabled: o
                                },
                                g.id
                            )
                        );
                    default:
                        return null;
                }
            },
            [t, s, n, o]
        ),
        g = i.useCallback(() => 56, []);
    return 0 === t.length
        ? (0, l.jsx)(d.OZU, { children: V.NW.string(V.t.ojoWgY) })
        : (0, l.jsx)(a.bG, {
              navigator: c,
              children: (0, l.jsx)(a.SJ, {
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
                                  for (l = 0; l < s.length; l++) (n = s[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                              }
                              return i;
                          })(e, ['ref']);
                      return (0, l.jsx)(
                          d.YAO,
                          ((t = z(
                              {
                                  className: B.recipientList,
                                  style: { '--custom-recipient-row-height': ''.concat(56, 'px') },
                                  scrollerRef: (e) => {
                                      null !== e && ((r.current = e), (i.current = e.getScrollerNode()));
                                  }
                              },
                              s
                          )),
                          (n = n =
                              {
                                  sections: u,
                                  sectionHeight: 0,
                                  renderRow: h,
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
function J(e) {
    let { transitionState: t, onClose: n, guild: s, channel: a, source: h, streamUserId: m, applicationId: N } = e,
        [f, S] = i.useState([]),
        [O, P] = i.useState(''),
        [w, F] = i.useState(z({}, H)),
        [G, q] = i.useState(!1),
        [Y, K] = i.useState(null),
        J = i.useRef(null),
        Q = i.useRef(null),
        $ = null;
    null != m ? ($ = L.Iq.STREAM) : null != N && ($ = L.Iq.EMBEDDED_APPLICATION);
    let { analyticsLocations: ee } = (0, v.ZP)(x.Z.INSTANT_INVITE_MODAL),
        et = i.useCallback(
            (e) => {
                var t;
                null == (t = Q.current) || t.scrollTo({ to: 0 }), P(e), (0, c.C)(e);
            },
            [P]
        ),
        en = i.useCallback(() => {
            et('');
        }, [et]),
        el = i.useCallback((e) => F((t) => z({}, t, e)), [F]),
        ei = i.useCallback(() => {
            S([]), F(z({}, H)), en(), q(!1), K(null);
        }, [en]),
        es = i.useCallback((e) => {
            S((t) => {
                let n = t.findIndex((t) => t === e);
                if (-1 === n) return [e, ...t];
                let l = [...t];
                return l.splice(n, 1), l;
            });
        }, []),
        er = (0, o.e7)(
            [Z.Z, T.Z, C.ZP],
            () => {
                var e;
                if (null != a) return a;
                let t = Z.Z.getChannelId(),
                    n = null == t || (0, U.AB)(t) ? null : T.Z.getChannel(t);
                return (null == n ? void 0 : n.isThread()) && (n = T.Z.getChannel(n.parent_id)), null != (e = null != n ? n : C.ZP.getDefaultChannel(s.id, !0, D.Plq.CREATE_INSTANT_INVITE)) ? e : null;
            },
            [s.id, a]
        ),
        ea = (0, o.e7)([y.Z], () => null != er && y.Z.can(D.Plq.CREATE_INSTANT_INVITE, er), [er]),
        eo = (0, o.e7)(
            [b.Z],
            () =>
                null == er
                    ? null
                    : b.Z.getInvite(er.id, {
                          targetType: $,
                          targetUserId: m,
                          targetApplicationId: N
                      }),
            [N, er, m, $]
        ),
        ed = (0, p.Z)(er),
        eu = !ea && !(null == er ? void 0 : er.isGuildVocal()) && null != s.vanityURLCode,
        ec = null === eo || !ea,
        eh = (null == er ? void 0 : er.type) === D.d4z.GUILD_VOICE && !eu && !ec && !ed,
        { enabled: eg } = j.o.useExperiment(
            {
                guildId: s.id,
                location: 'instant_invite_modal'
            },
            { autoTrackExposure: eh }
        ),
        { canCreateApplicationBypassInvites: em, isManualApprovalGuild: ex } = (0, R.R)(s),
        ev = eg && eh,
        { rows: ep } = (0, W.B)({
            guild: s,
            inviteChannel: er,
            inviteTargetType: $,
            applicationId: N
        }),
        eN = (0, o.e7)(
            [E.Z],
            () => {
                var e;
                return null != (e = E.Z.getStageInstanceByChannel(null == er ? void 0 : er.id)) ? e : null;
            },
            [er]
        ),
        eI = i.useMemo(() => {
            let e;
            return null === (e = eu && void 0 !== s.vanityURLCode ? s.vanityURLCode : (null == eN ? void 0 : eN.invite_code) !== void 0 ? eN.invite_code : null != eo ? eo.code : null) ? null : (0, k.tV)({ baseCode: e });
        }, [eu, s, eN, eo]),
        ef = i.useCallback(() => {
            let e = null == er ? void 0 : er.id;
            (0 !== w.max_uses || 0 !== w.max_age || w.temporary || !eu) &&
                null != e &&
                u.ZP.createInvite(e, w, h).catch((e) => {
                    K(e);
                });
        }, [er, w, eu, h]),
        ej = i.useCallback(() => {
            ei(), n();
        }, [ei, n]),
        eS = i.useCallback(async () => {
            if (G || null === eI) return;
            q(!0);
            let e = ep
                .filter((e) => f.includes(e.item.id))
                .map((e) => {
                    var t;
                    let n,
                        l = D.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = null != (t = _.Z.getSelectedInviteMetadata(e)) ? t : null;
                    switch (e.type) {
                        case A.bm.FRIEND:
                        case A.bm.DM:
                            n = {
                                type: g.m.USER,
                                user: e.item,
                                inviteKey: eI,
                                location: l,
                                suggested: i
                            };
                            break;
                        case A.bm.CHANNEL:
                            n = {
                                type: g.m.CHANNEL,
                                channel: e.item,
                                inviteKey: eI,
                                location: l,
                                suggested: i
                            };
                            break;
                        case A.bm.GROUP_DM:
                            n = {
                                type: g.m.GROUP_DM,
                                channel: e.item,
                                inviteKey: eI,
                                location: l,
                                suggested: i
                            };
                            break;
                        default:
                            return Promise.resolve();
                    }
                    return new Promise((e, t) => {
                        g.Z.enqueue(n, (n) => {
                            n ? e() : t();
                        });
                    });
                });
            try {
                if ((await Promise.allSettled(e), e.length > 0)) {
                    let e = f.length > 1 ? V.NW.string(V.t['4pl/xs']) : V.NW.string(V.t.sVwWdX);
                    (0, d.showToast)((0, d.createToast)(e, d.ToastType.INVITE));
                }
            } catch (e) {
            } finally {
                ej();
            }
        }, [G, q, f, eI, ep, ej]);
    if (
        (i.useEffect(() => {
            !eu && ea && ef();
        }, [er, eu, ea, ef]),
        null !== eI && null !== er)
    )
        return (0, l.jsx)(v.Gt, {
            value: ee,
            children: (0, l.jsxs)(d.Y0X, {
                className: r()(B.modal, { [B.disabled]: G }),
                transitionState: t,
                children: [
                    (0, l.jsxs)(d.xBx, {
                        className: B.header,
                        children: [
                            (0, l.jsxs)('div', {
                                className: B.titleLine,
                                children: [
                                    (0, l.jsx)('div', {
                                        className: B.title,
                                        children: (0, l.jsxs)(d.X6q, {
                                            variant: 'heading-lg/semibold',
                                            children: [V.NW.string(V.t.BN75l5), (0, l.jsx)('span', { children: null === eo && 'No Invite Key' }), (0, l.jsx)('span', { children: null === eo && 'No Invite' })]
                                        })
                                    }),
                                    (0, l.jsx)(d.olH, {
                                        className: B.closeButton,
                                        onClick: ej
                                    })
                                ]
                            }),
                            (0, l.jsx)(d.E1j, {
                                ref: J,
                                size: d.E1j.Sizes.MEDIUM,
                                query: O,
                                onChange: et,
                                onClear: en,
                                placeholder: V.NW.string(V.t['5h0QOD']),
                                'aria-label': V.NW.string(V.t['5h0QOD']),
                                autoFocus: !0
                            })
                        ]
                    }),
                    (0, l.jsx)(d.hzk, {
                        className: r()(B.body, { [B.empty]: 0 === ep.length }),
                        children: (0, l.jsx)(X, {
                            rows: ep,
                            onToggle: es,
                            scrollerRef: Q,
                            selection: f,
                            disabled: G
                        })
                    }),
                    (0, l.jsx)(d.mzw, {
                        direction: I.Z.Direction.HORIZONTAL,
                        className: B.footer,
                        children: (0, l.jsx)(M.f, {
                            className: B.footerContent,
                            guild: s,
                            channel: null != a ? a : null,
                            inviteTarget: er,
                            inviteKey: eI,
                            sendInvite: eS,
                            sending: G,
                            options: w,
                            setOptions: el,
                            isGuestInviteAllowed: ev,
                            isTemporaryInviteAllowed: !ev && !ex,
                            isApplicationBypassAllowed: em && !ec
                        })
                    })
                ]
            })
        });
}
