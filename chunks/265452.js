n.d(t, { H: () => en }), n(47120), n(998459);
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
    E = n(810123),
    T = n(448486),
    b = n(427679),
    C = n(592125),
    _ = n(984933),
    y = n(430824),
    O = n(341165),
    P = n(751771),
    Z = n(496675),
    A = n(158776),
    w = n(699516),
    k = n(944486),
    R = n(971130),
    M = n(51144),
    W = n(264229),
    L = n(277364),
    D = n(666258),
    U = n(530436),
    V = n(895976),
    B = n(245335),
    F = n(981631),
    G = n(176505),
    z = n(388032),
    H = n(910420);
function q(e) {
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
let { INVITE_OPTIONS_7_DAYS: Y, INVITE_OPTIONS_UNLIMITED: K } = R.ZP,
    X = {
        max_age: Y.value,
        max_uses: K.value
    };
function J(e) {
    let { icon: t, label: n, subLabel: i, onClick: s, isSelected: r, disabled: a } = e;
    return (0, l.jsxs)(u.P3F, {
        'aria-disabled': a,
        className: H.recipientRow,
        onClick: s,
        children: [
            (0, l.jsx)('div', {
                className: H.recipientAsset,
                children: t
            }),
            (0, l.jsxs)('div', {
                className: H.recipientLabels,
                children: [
                    (0, l.jsx)(u.Text, {
                        className: H.recipientLabel,
                        variant: 'text-md/medium',
                        lineClamp: 1,
                        children: n
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(u.Text, {
                              className: H.recipientSublabel,
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
                className: H.checkbox
            })
        ]
    });
}
function Q(e) {
    let { user: t, onToggle: n, isSelected: s, disabled: r } = e,
        a = M.ZP.useName(t),
        d = M.ZP.useUserTag(t, { decoration: 'never' }),
        [c, h] = (0, o.Wu)([w.Z, A.Z], () => [w.Z.getNickname(t.id), A.Z.getStatus(t.id)], [t]),
        m = i.useCallback(() => n(t.id), [n, t.id]);
    return (0, l.jsx)(J, {
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
function $(e) {
    var t, n;
    let { channel: s, onToggle: r, isSelected: a, disabled: o } = e,
        d = i.useCallback(() => r(s.id), [r, s.id]),
        c = null != (t = (0, I.ZP)(s)) ? t : '',
        h = null != (n = (0, T._)(s)) ? n : '';
    return (0, l.jsx)(J, {
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
function ee(e) {
    var t, n;
    let { channel: s, onToggle: r, isSelected: a, disabled: d } = e,
        u = (0, o.e7)([y.Z], () => y.Z.getGuild(null == s ? void 0 : s.guild_id)),
        c = i.useCallback(() => r(s.id), [r, s.id]),
        h = null != (t = (0, I.ZP)(s)) ? t : '',
        g = null != (n = null == u ? void 0 : u.name) ? n : '';
    return (0, l.jsx)(J, {
        icon: (0, l.jsx)(E.Z, {
            size: E.E.SMALL_32,
            guild: u,
            channel: s
        }),
        label: h,
        subLabel: g,
        onClick: c,
        isSelected: a,
        disabled: d
    });
}
function et(e) {
    let { rows: t, onToggle: n, selection: s, scrollerRef: r, disabled: o } = e,
        d = i.useMemo(() => [t.length], [t.length]),
        c = (0, x.Z)('instant_invite_modal', r),
        h = i.useCallback(
            (e) => {
                var i, r, a;
                let d,
                    { section: u, row: c } = e;
                if (u > 0) return;
                let h = t[c];
                switch (h.type) {
                    case R.bm.FRIEND:
                    case R.bm.DM:
                        let g = h.item;
                        return (
                            (d = null != (i = s.includes(g.id)) && i),
                            (0, l.jsx)(
                                Q,
                                {
                                    user: g,
                                    isSelected: d,
                                    onToggle: n,
                                    disabled: o
                                },
                                g.id
                            )
                        );
                    case R.bm.GROUP_DM:
                        let m = h.item;
                        return (
                            (d = null != (r = s.includes(m.id)) && r),
                            (0, l.jsx)(
                                $,
                                {
                                    channel: m,
                                    isSelected: d,
                                    onToggle: n,
                                    disabled: o
                                },
                                m.id
                            )
                        );
                    case R.bm.CHANNEL:
                        let x = h.item;
                        return (
                            (d = null != (a = s.includes(x.id)) && a),
                            (0, l.jsx)(
                                ee,
                                {
                                    channel: x,
                                    isSelected: d,
                                    onToggle: n,
                                    disabled: o
                                },
                                x.id
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
        ? (0, l.jsx)(u.OZU, { children: z.NW.string(z.t.ojoWgY) })
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
                          ((t = q(
                              {
                                  className: H.recipientList,
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
function en(e) {
    let { transitionState: t, onClose: n, guild: s, channel: a, source: g, streamUserId: x, applicationId: I } = e,
        j = null;
    null != x ? (j = B.Iq.STREAM) : null != I && (j = B.Iq.EMBEDDED_APPLICATION);
    let [E, T] = i.useState([]),
        [y, A] = i.useState(''),
        [w, M] = i.useState(q({}, X, null == I ? {} : { target_application_id: I }, null == j ? {} : { target_type: j }, null == x ? {} : { target_user_id: x })),
        [Y, K] = i.useState(!1),
        [J, Q] = i.useState(null),
        $ = i.useRef(null),
        ee = i.useRef(null),
        { analyticsLocations: en } = (0, p.ZP)(v.Z.INSTANT_INVITE_MODAL),
        el = i.useCallback(
            (e) => {
                var t;
                null == (t = ee.current) || t.scrollTo({ to: 0 }), A(e), (0, h.C)(e);
            },
            [A]
        ),
        ei = i.useCallback(() => {
            el('');
        }, [el]),
        es = i.useCallback((e) => M((t) => q({}, t, e)), [M]),
        er = i.useCallback(() => {
            T([]), M(q({}, X)), ei(), K(!1), Q(null);
        }, [ei]),
        ea = i.useCallback((e) => {
            T((t) => {
                let n = t.findIndex((t) => t === e);
                if (-1 === n) return [e, ...t];
                let l = [...t];
                return l.splice(n, 1), l;
            });
        }, []),
        eo = (0, o.e7)(
            [k.Z, C.Z, _.ZP],
            () => {
                var e;
                if (null != a) return a;
                let t = k.Z.getChannelId(),
                    n = null == t || (0, G.AB)(t) ? null : C.Z.getChannel(t);
                return (null == n ? void 0 : n.isThread()) && (n = C.Z.getChannel(n.parent_id)), null != (e = null != n ? n : _.ZP.getDefaultChannel(s.id, !0, F.Plq.CREATE_INSTANT_INVITE)) ? e : null;
            },
            [s.id, a]
        ),
        ed = (0, o.e7)([Z.Z], () => null != eo && Z.Z.can(F.Plq.CREATE_INSTANT_INVITE, eo), [eo]),
        eu = (0, o.e7)(
            [O.Z],
            () => {
                if (null == eo) return null;
                let e = O.Z.getInvite(eo.id, {
                    targetType: j,
                    targetUserId: x,
                    targetApplicationId: I
                });
                return null != e && null != J && Q(null), e;
            },
            [eo, j, x, I, J]
        ),
        ec = !ed && !(null == eo ? void 0 : eo.isGuildVocal()) && void 0 !== s.vanityURLCode,
        eh = null === eu || !ed,
        eg = (0, N.Z)(eo),
        em = (null == eo ? void 0 : eo.type) === F.d4z.GUILD_VOICE && !ec && !eh && !eg,
        { enabled: ex } = S.o.useExperiment(
            {
                guildId: s.id,
                location: 'instant_invite_modal'
            },
            { autoTrackExposure: em }
        ),
        { canCreateApplicationBypassInvites: ev, isManualApprovalGuild: ep } = (0, L.R)(s),
        eN = ex && em,
        { rows: eI } = (0, V.B)({
            guild: s,
            inviteChannel: eo,
            inviteTargetType: j,
            applicationId: I
        }),
        ef = i.useMemo(() => {
            var e;
            let t,
                n = null != (e = b.Z.getStageInstanceByChannel(null == eo ? void 0 : eo.id)) ? e : null;
            return null === (t = ec && null != s.vanityURLCode ? s.vanityURLCode : (null == n ? void 0 : n.invite_code) != null ? n.invite_code : null != eu ? eu.code : null) ? null : (0, W.tV)({ baseCode: t });
        }, [ec, s, eu, eo]),
        ej = i.useCallback(() => {
            let e = null == eo ? void 0 : eo.id;
            ((0, d.Z)(w, X) && ec) ||
                (null != e &&
                    c.ZP.createInvite(e, w, g).catch((e) => {
                        Q(e);
                    }));
        }, [eo, w, ec, g]),
        eS = i.useCallback(() => {
            er(), n();
        }, [er, n]),
        eE = i.useCallback(async () => {
            if (Y || null === ef) return;
            K(!0);
            let e = eI
                .filter((e) => E.includes(e.item.id))
                .map((e) => {
                    var t;
                    let n,
                        l = F.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = null != (t = P.Z.getSelectedInviteMetadata(e)) ? t : null;
                    switch (e.type) {
                        case R.bm.FRIEND:
                        case R.bm.DM:
                            n = {
                                type: m.m.USER,
                                user: e.item,
                                inviteKey: ef,
                                location: l,
                                suggested: i
                            };
                            break;
                        case R.bm.CHANNEL:
                            n = {
                                type: m.m.CHANNEL,
                                channel: e.item,
                                inviteKey: ef,
                                location: l,
                                suggested: i
                            };
                            break;
                        case R.bm.GROUP_DM:
                            n = {
                                type: m.m.GROUP_DM,
                                channel: e.item,
                                inviteKey: ef,
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
                    let e = E.length > 1 ? z.NW.string(z.t['4pl/xs']) : z.NW.string(z.t.sVwWdX);
                    (0, u.showToast)((0, u.createToast)(e, u.ToastType.INVITE));
                }
            } catch (e) {
                Q(e);
            } finally {
                eS();
            }
        }, [Y, K, E, ef, eI, eS]);
    i.useEffect(() => {
        !ec && ed && ej();
    }, [eo, ec, ed, ej]);
    let eT = null === ef || null === eo;
    return (0, l.jsx)(p.Gt, {
        value: en,
        children: (0, l.jsxs)(u.Y0X, {
            className: r()(H.modal, { [H.disabled]: Y }),
            transitionState: t,
            children: [
                (0, l.jsxs)(u.xBx, {
                    className: H.header,
                    children: [
                        (0, l.jsxs)('div', {
                            className: H.titleLine,
                            children: [
                                (0, l.jsx)('div', {
                                    className: H.title,
                                    children: (0, l.jsx)(u.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: z.NW.string(z.t.BN75l5)
                                    })
                                }),
                                (0, l.jsx)(u.olH, {
                                    className: H.closeButton,
                                    onClick: eS
                                })
                            ]
                        }),
                        (0, l.jsx)(u.E1j, {
                            ref: $,
                            size: u.E1j.Sizes.MEDIUM,
                            query: y,
                            onChange: el,
                            onClear: ei,
                            placeholder: z.NW.string(z.t['5h0QOD']),
                            'aria-label': z.NW.string(z.t['5h0QOD']),
                            autoFocus: !0
                        })
                    ]
                }),
                (0, l.jsx)(u.hzk, {
                    className: r()(H.body, { [H.empty]: 0 === eI.length }),
                    children: (0, l.jsx)(et, {
                        rows: eI,
                        onToggle: ea,
                        scrollerRef: ee,
                        selection: E,
                        disabled: eT || Y
                    })
                }),
                (0, l.jsxs)(u.mzw, {
                    direction: f.Z.Direction.VERTICAL,
                    className: H.footer,
                    children: [
                        (0, l.jsx)(D.f, {
                            className: H.footerContent,
                            guild: s,
                            channel: null != a ? a : null,
                            inviteChannel: eo,
                            inviteKey: ef,
                            sendInvite: eE,
                            sending: Y,
                            options: w,
                            setOptions: es,
                            isGuestInviteAllowed: eN,
                            isTemporaryInviteAllowed: !eN && !ep,
                            isApplicationBypassAllowed: ev && !eh,
                            setError: Q
                        }),
                        null !== J &&
                            (0, l.jsx)(U.W, {
                                guild: s,
                                error: J,
                                onClose: eS
                            })
                    ]
                })
            ]
        })
    });
}
