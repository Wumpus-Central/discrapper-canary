n.d(t, { H: () => Q }), n(47120), n(998459);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(91192),
    o = n(442837),
    d = n(902704),
    u = n(481060),
    c = n(447543),
    h = n(247272),
    g = n(700582),
    m = n(630810),
    x = n(724757),
    v = n(100527),
    p = n(906732),
    N = n(447003),
    I = n(933557),
    f = n(600164),
    j = n(266076),
    S = n(227672),
    E = n(448486),
    T = n(427679),
    b = n(592125),
    C = n(984933),
    _ = n(341165),
    y = n(751771),
    O = n(496675),
    P = n(158776),
    Z = n(699516),
    A = n(944486),
    w = n(971130),
    R = n(51144),
    k = n(264229),
    M = n(277364),
    W = n(666258),
    D = n(895976),
    L = n(245335),
    U = n(981631),
    V = n(176505),
    B = n(388032),
    F = n(910420);
function G(e) {
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
let { INVITE_OPTIONS_7_DAYS: z, INVITE_OPTIONS_UNLIMITED: H } = w.ZP,
    q = {
        max_age: z.value,
        max_uses: H.value
    };
function Y(e) {
    let { icon: t, label: n, subLabel: i, onClick: s, isSelected: r, disabled: a } = e;
    return (0, l.jsxs)(u.P3F, {
        'aria-disabled': a,
        className: F.recipientRow,
        onClick: s,
        children: [
            (0, l.jsx)('div', {
                className: F.recipientAsset,
                children: t
            }),
            (0, l.jsxs)('div', {
                className: F.recipientLabels,
                children: [
                    (0, l.jsx)(u.Text, {
                        className: F.recipientLabel,
                        variant: 'text-md/medium',
                        lineClamp: 1,
                        children: n
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(u.Text, {
                              className: F.recipientSublabel,
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: i
                          })
                        : null
                ]
            }),
            (0, l.jsx)(u.XZJ, {
                type: u.XZJ.Types.INVERTED,
                displayOnly: !0,
                size: 24,
                value: r,
                className: F.checkbox
            })
        ]
    });
}
function K(e) {
    let { user: t, onToggle: n, isSelected: s, disabled: r } = e,
        a = R.ZP.useName(t),
        d = R.ZP.useUserTag(t, { decoration: 'never' }),
        [c, h] = (0, o.Wu)([Z.Z, P.Z], () => [Z.Z.getNickname(t.id), P.Z.getStatus(t.id)], [t]),
        m = i.useCallback(() => n(t.id), [n, t.id]);
    return (0, l.jsx)(Y, {
        icon: (0, l.jsx)(g.Z, {
            'aria-hidden': !0,
            size: u.EFr.SIZE_32,
            user: t,
            status: h
        }),
        label: null != c ? c : a,
        subLabel: d,
        onClick: m,
        isSelected: s,
        disabled: r
    });
}
function X(e) {
    var t, n;
    let { channel: s, onToggle: r, isSelected: a, disabled: o } = e,
        d = i.useCallback(() => r(s.id), [r, s.id]),
        c = null != (t = (0, I.ZP)(s)) ? t : '',
        h = null != (n = (0, E._)(s)) ? n : '';
    return (0, l.jsx)(Y, {
        icon: (0, l.jsx)(j.Z, {
            'aria-hidden': !0,
            size: u.EFr.SIZE_32,
            channel: s,
            experimentLocation: 'instant_invite_modal'
        }),
        label: c,
        subLabel: h,
        onClick: d,
        isSelected: a,
        disabled: o
    });
}
function J(e) {
    let { rows: t, onToggle: n, selection: s, scrollerRef: r, disabled: o } = e,
        d = i.useMemo(() => [t.length], [t.length]),
        c = (0, x.Z)('instant_invite_modal', r),
        h = i.useCallback(
            (e) => {
                var i, r;
                let a,
                    { section: d, row: u } = e;
                if (d > 0) return;
                let c = t[u];
                switch (c.type) {
                    case w.bm.FRIEND:
                    case w.bm.DM:
                        let h = c.item;
                        return (
                            (a = null != (i = s.includes(h.id)) && i),
                            (0, l.jsx)(
                                K,
                                {
                                    user: h,
                                    isSelected: a,
                                    onToggle: n,
                                    disabled: o
                                },
                                h.id
                            )
                        );
                    case w.bm.GROUP_DM:
                    case w.bm.CHANNEL:
                        let g = c.item;
                        return (
                            (a = null != (r = s.includes(g.id)) && r),
                            (0, l.jsx)(
                                X,
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
        ? (0, l.jsx)(u.OZU, { children: B.NW.string(B.t.ojoWgY) })
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
                          u.YAO,
                          ((t = G(
                              {
                                  className: F.recipientList,
                                  style: { '--custom-recipient-row-height': ''.concat(56, 'px') },
                                  scrollerRef: (e) => {
                                      null !== e && ((r.current = e), (i.current = e.getScrollerNode()));
                                  }
                              },
                              s
                          )),
                          (n = n =
                              {
                                  sections: d,
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
function Q(e) {
    let { transitionState: t, onClose: n, guild: s, channel: a, source: g, streamUserId: x, applicationId: I } = e,
        [j, E] = i.useState([]),
        [P, Z] = i.useState(''),
        [R, z] = i.useState(G({}, q)),
        [H, Y] = i.useState(!1),
        [K, X] = i.useState(null),
        Q = i.useRef(null),
        $ = i.useRef(null),
        ee = null;
    null != x ? (ee = L.Iq.STREAM) : null != I && (ee = L.Iq.EMBEDDED_APPLICATION);
    let { analyticsLocations: et } = (0, p.ZP)(v.Z.INSTANT_INVITE_MODAL),
        en = i.useCallback(
            (e) => {
                var t;
                null == (t = $.current) || t.scrollTo({ to: 0 }), Z(e), (0, h.C)(e);
            },
            [Z]
        ),
        el = i.useCallback(() => {
            en('');
        }, [en]),
        ei = i.useCallback((e) => z((t) => G({}, t, e)), [z]),
        es = i.useCallback(() => {
            E([]), z(G({}, q)), el(), Y(!1), X(null);
        }, [el]),
        er = i.useCallback((e) => {
            E((t) => {
                let n = t.findIndex((t) => t === e);
                if (-1 === n) return [e, ...t];
                let l = [...t];
                return l.splice(n, 1), l;
            });
        }, []),
        ea = (0, o.e7)(
            [A.Z, b.Z, C.ZP],
            () => {
                var e;
                if (null != a) return a;
                let t = A.Z.getChannelId(),
                    n = null == t || (0, V.AB)(t) ? null : b.Z.getChannel(t);
                return (null == n ? void 0 : n.isThread()) && (n = b.Z.getChannel(n.parent_id)), null != (e = null != n ? n : C.ZP.getDefaultChannel(s.id, !0, U.Plq.CREATE_INSTANT_INVITE)) ? e : null;
            },
            [s.id, a]
        ),
        eo = (0, o.e7)([O.Z], () => null != ea && O.Z.can(U.Plq.CREATE_INSTANT_INVITE, ea), [ea]),
        ed = (0, o.e7)(
            [_.Z],
            () =>
                null == ea
                    ? null
                    : _.Z.getInvite(ea.id, {
                          targetType: ee,
                          targetUserId: x,
                          targetApplicationId: I
                      }),
            [I, ea, x, ee]
        ),
        eu = !eo && !(null == ea ? void 0 : ea.isGuildVocal()) && void 0 !== s.vanityURLCode,
        ec = null === ed || !eo,
        eh = (0, N.Z)(ea),
        eg = (null == ea ? void 0 : ea.type) === U.d4z.GUILD_VOICE && !eu && !ec && !eh,
        { enabled: em } = S.o.useExperiment(
            {
                guildId: s.id,
                location: 'instant_invite_modal'
            },
            { autoTrackExposure: eg }
        ),
        { canCreateApplicationBypassInvites: ex, isManualApprovalGuild: ev } = (0, M.R)(s),
        ep = em && eg,
        { rows: eN } = (0, D.B)({
            guild: s,
            inviteChannel: ea,
            inviteTargetType: ee,
            applicationId: I
        }),
        eI = i.useMemo(() => {
            var e;
            let t,
                n = null != (e = T.Z.getStageInstanceByChannel(null == ea ? void 0 : ea.id)) ? e : null;
            return null === (t = eu && void 0 !== s.vanityURLCode ? s.vanityURLCode : (null == n ? void 0 : n.invite_code) !== void 0 ? n.invite_code : null != ed ? ed.code : null) ? null : (0, k.tV)({ baseCode: t });
        }, [eu, s, ed, ea]),
        ef = i.useCallback(() => {
            let e = null == ea ? void 0 : ea.id;
            ((0, d.Z)(R, q) && eu) ||
                (null != e &&
                    c.ZP.createInvite(e, R, g).catch((e) => {
                        X(e);
                    }));
        }, [ea, R, eu, g]),
        ej = i.useCallback(() => {
            es(), n();
        }, [es, n]),
        eS = i.useCallback(async () => {
            if (H || null === eI) return;
            Y(!0);
            let e = eN
                .filter((e) => j.includes(e.item.id))
                .map((e) => {
                    var t;
                    let n,
                        l = U.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = null != (t = y.Z.getSelectedInviteMetadata(e)) ? t : null;
                    switch (e.type) {
                        case w.bm.FRIEND:
                        case w.bm.DM:
                            n = {
                                type: m.m.USER,
                                user: e.item,
                                inviteKey: eI,
                                location: l,
                                suggested: i
                            };
                            break;
                        case w.bm.CHANNEL:
                            n = {
                                type: m.m.CHANNEL,
                                channel: e.item,
                                inviteKey: eI,
                                location: l,
                                suggested: i
                            };
                            break;
                        case w.bm.GROUP_DM:
                            n = {
                                type: m.m.GROUP_DM,
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
                        m.Z.enqueue(n, (n) => {
                            n ? e() : t();
                        });
                    });
                });
            try {
                if ((await Promise.allSettled(e), e.length > 0)) {
                    let e = j.length > 1 ? B.NW.string(B.t['4pl/xs']) : B.NW.string(B.t.sVwWdX);
                    (0, u.showToast)((0, u.createToast)(e, u.ToastType.INVITE));
                }
            } catch (e) {
            } finally {
                ej();
            }
        }, [H, Y, j, eI, eN, ej]);
    i.useEffect(() => {
        !eu && eo && ef();
    }, [ea, eu, eo, ef]);
    let eE = null === eI || null === ea;
    return (0, l.jsx)(p.Gt, {
        value: et,
        children: (0, l.jsxs)(u.Y0X, {
            className: r()(F.modal, { [F.disabled]: H }),
            transitionState: t,
            children: [
                (0, l.jsxs)(u.xBx, {
                    className: F.header,
                    children: [
                        (0, l.jsxs)('div', {
                            className: F.titleLine,
                            children: [
                                (0, l.jsx)('div', {
                                    className: F.title,
                                    children: (0, l.jsxs)(u.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: [B.NW.string(B.t.BN75l5), (0, l.jsx)('span', { children: null === ed && 'No Invite Key' }), (0, l.jsx)('span', { children: null === ed && 'No Invite' })]
                                    })
                                }),
                                (0, l.jsx)(u.olH, {
                                    className: F.closeButton,
                                    onClick: ej
                                })
                            ]
                        }),
                        (0, l.jsx)(u.E1j, {
                            ref: Q,
                            size: u.E1j.Sizes.MEDIUM,
                            query: P,
                            onChange: en,
                            onClear: el,
                            placeholder: B.NW.string(B.t['5h0QOD']),
                            'aria-label': B.NW.string(B.t['5h0QOD']),
                            autoFocus: !0
                        })
                    ]
                }),
                (0, l.jsx)(u.hzk, {
                    className: r()(F.body, { [F.empty]: 0 === eN.length }),
                    children: (0, l.jsx)(J, {
                        rows: eN,
                        onToggle: er,
                        scrollerRef: $,
                        selection: j,
                        disabled: eE || H
                    })
                }),
                (0, l.jsx)(u.mzw, {
                    direction: f.Z.Direction.HORIZONTAL,
                    className: F.footer,
                    children: (0, l.jsx)(W.f, {
                        className: F.footerContent,
                        guild: s,
                        channel: null != a ? a : null,
                        inviteChannel: ea,
                        inviteKey: eI,
                        sendInvite: eS,
                        sending: H,
                        options: R,
                        setOptions: ei,
                        isGuestInviteAllowed: ep,
                        isTemporaryInviteAllowed: !ep && !ev,
                        isApplicationBypassAllowed: ex && !ec
                    })
                })
            ]
        })
    });
}
