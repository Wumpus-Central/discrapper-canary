n.d(t, { H: () => ei }), n(388685), n(993155);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(512722),
    o = n.n(a),
    d = n(91192),
    u = n(442837),
    c = n(481060),
    h = n(447543),
    g = n(247272),
    m = n(700582),
    v = n(630810),
    x = n(724757),
    p = n(100527),
    N = n(906732),
    I = n(447003),
    f = n(933557),
    j = n(600164),
    b = n(266076),
    S = n(227672),
    E = n(810123),
    _ = n(448486),
    T = n(427679),
    y = n(592125),
    C = n(984933),
    O = n(430824),
    P = n(341165),
    Z = n(751771),
    w = n(496675),
    A = n(158776),
    k = n(699516),
    R = n(944486),
    M = n(971130),
    W = n(51144),
    L = n(264229),
    D = n(601953),
    U = n(277364),
    V = n(666258),
    B = n(530436),
    F = n(895976),
    G = n(245335),
    z = n(981631),
    H = n(176505),
    q = n(388032),
    Y = n(910420);
function K(e) {
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
let { INVITE_OPTIONS_7_DAYS: X, INVITE_OPTIONS_UNLIMITED: J } = M.ZP,
    Q = {
        max_age: X.value,
        max_uses: J.value
    };
function $(e) {
    let { icon: t, label: n, subLabel: i, onClick: r, isSelected: s, disabled: a } = e;
    return (0, l.jsxs)(c.P3F, {
        'aria-disabled': a,
        className: Y.recipientRow,
        onClick: r,
        children: [
            (0, l.jsx)('div', {
                className: Y.recipientAsset,
                children: t
            }),
            (0, l.jsxs)('div', {
                className: Y.recipientLabels,
                children: [
                    (0, l.jsx)(c.Text, {
                        className: Y.recipientLabel,
                        variant: 'text-md/medium',
                        lineClamp: 1,
                        children: n
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(c.Text, {
                              className: Y.recipientSublabel,
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: i
                          })
                        : null
                ]
            }),
            (0, l.jsx)(c.XZJ, {
                type: c.XZJ.Types.INVERTED,
                displayOnly: !0,
                size: 24,
                value: s,
                className: Y.checkbox
            })
        ]
    });
}
function ee(e) {
    let { user: t, onToggle: n, isSelected: r, disabled: s } = e,
        a = W.ZP.useName(t),
        o = W.ZP.useUserTag(t, { decoration: 'never' }),
        [d, h] = (0, u.Wu)([k.Z, A.Z], () => [k.Z.getNickname(t.id), A.Z.getStatus(t.id)], [t]),
        g = i.useCallback(() => n(t.id), [n, t.id]);
    return (0, l.jsx)($, {
        icon: (0, l.jsx)(m.Z, {
            'aria-hidden': !0,
            size: c.EFr.SIZE_32,
            user: t,
            status: h
        }),
        label: null != d ? d : a,
        subLabel: o,
        onClick: g,
        isSelected: r,
        disabled: s
    });
}
function et(e) {
    var t, n;
    let { channel: r, onToggle: s, isSelected: a, disabled: o } = e,
        d = i.useCallback(() => s(r.id), [s, r.id]),
        u = null != (t = (0, f.ZP)(r)) ? t : '',
        h = null != (n = (0, _._)(r)) ? n : '';
    return (0, l.jsx)($, {
        icon: (0, l.jsx)(b.Z, {
            'aria-hidden': !0,
            size: c.EFr.SIZE_32,
            channel: r,
            experimentLocation: 'instant_invite_modal'
        }),
        label: u,
        subLabel: h,
        onClick: d,
        isSelected: a,
        disabled: o
    });
}
function en(e) {
    var t, n;
    let { channel: r, onToggle: s, isSelected: a, disabled: o } = e,
        d = (0, u.e7)([O.Z], () => O.Z.getGuild(null == r ? void 0 : r.guild_id)),
        c = i.useCallback(() => s(r.id), [s, r.id]),
        h = null != (t = (0, f.ZP)(r)) ? t : '',
        g = null != (n = null == d ? void 0 : d.name) ? n : '';
    return (0, l.jsx)($, {
        icon: (0, l.jsx)(E.Z, {
            size: E.E.SMALL_32,
            guild: d,
            channel: r
        }),
        label: h,
        subLabel: g,
        onClick: c,
        isSelected: a,
        disabled: o
    });
}
function el(e) {
    let { rows: t, onToggle: n, selection: r, scrollerRef: s, disabled: a } = e,
        o = i.useMemo(() => [t.length], [t.length]),
        u = (0, x.Z)('instant_invite_modal', s),
        h = i.useCallback(
            (e) => {
                var i, s, o;
                let d,
                    { section: u, row: c } = e;
                if (u > 0) return;
                let h = t[c];
                switch (h.type) {
                    case M.bm.FRIEND:
                    case M.bm.DM:
                        let g = h.item;
                        return (
                            (d = null != (i = r.includes(g.id)) && i),
                            (0, l.jsx)(
                                ee,
                                {
                                    user: g,
                                    isSelected: d,
                                    onToggle: n,
                                    disabled: a
                                },
                                g.id
                            )
                        );
                    case M.bm.GROUP_DM:
                        let m = h.item;
                        return (
                            (d = null != (s = r.includes(m.id)) && s),
                            (0, l.jsx)(
                                et,
                                {
                                    channel: m,
                                    isSelected: d,
                                    onToggle: n,
                                    disabled: a
                                },
                                m.id
                            )
                        );
                    case M.bm.CHANNEL:
                        let v = h.item;
                        return (
                            (d = null != (o = r.includes(v.id)) && o),
                            (0, l.jsx)(
                                en,
                                {
                                    channel: v,
                                    isSelected: d,
                                    onToggle: n,
                                    disabled: a
                                },
                                v.id
                            )
                        );
                    default:
                        return null;
                }
            },
            [t, r, n, a]
        ),
        g = i.useCallback(() => 56, []);
    return 0 === t.length
        ? (0, l.jsx)(c.OZU, { children: q.NW.string(q.t.ojoWgY) })
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
                          c.YAO,
                          ((t = K(
                              {
                                  className: Y.recipientList,
                                  style: { '--custom-recipient-row-height': ''.concat(56, 'px') },
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
function ei(e) {
    let { transitionState: t, onClose: n, guild: r, channel: a, source: d, streamUserId: m, applicationId: x } = e,
        f = null;
    null != m ? (f = G.Iq.STREAM) : null != x && (f = G.Iq.EMBEDDED_APPLICATION);
    let [b, E] = i.useState([]),
        [_, O] = i.useState(''),
        { current: A } = i.useRef(K({}, Q, null == x ? {} : { target_application_id: x }, null == f ? {} : { target_type: f }, null == m ? {} : { target_user_id: m })),
        [k, W] = i.useState(A),
        [X, J] = i.useState(!1),
        [$, ee] = i.useState(!1),
        [et, en] = i.useState(null),
        ei = i.useRef(null),
        er = i.useRef(null),
        { analyticsLocations: es } = (0, N.ZP)(p.Z.INSTANT_INVITE_MODAL),
        ea = i.useCallback(
            (e) => {
                var t;
                null == (t = er.current) || t.scrollTo({ to: 0 }), O(e), (0, g.C)(e);
            },
            [O]
        ),
        eo = i.useCallback(() => {
            ea('');
        }, [ea]),
        ed = i.useCallback((e) => W((t) => K({}, t, e)), [W]),
        eu = i.useCallback(() => {
            E([]), W(A), eo(), ee(!1), en(null);
        }, [eo, A]),
        ec = i.useCallback((e) => {
            E((t) => {
                let n = t.findIndex((t) => t === e);
                if (-1 === n) return [e, ...t];
                let l = [...t];
                return l.splice(n, 1), l;
            });
        }, []),
        eh = i.useMemo(() => {
            var e;
            if (null != a) return a;
            let t = R.Z.getChannelId(),
                n = null == t || (0, H.AB)(t) ? null : y.Z.getChannel(t);
            return (null == n ? void 0 : n.isThread()) && (n = y.Z.getChannel(n.parent_id)), null != (e = null != n ? n : C.ZP.getDefaultChannel(r.id, !0, z.Plq.CREATE_INSTANT_INVITE)) ? e : null;
        }, [r.id, a]),
        eg = !(0, u.e7)([w.Z], () => null != eh && w.Z.can(z.Plq.CREATE_INSTANT_INVITE, eh), [eh]) && !(null == eh ? void 0 : eh.isGuildVocal()),
        em = (0, I.Z)(eh),
        ev = (null == eh ? void 0 : eh.type) === z.d4z.GUILD_VOICE && !eg && !em,
        { enabled: ex } = S.o.useExperiment(
            {
                guildId: r.id,
                location: 'instant_invite_modal'
            },
            { autoTrackExposure: ev }
        ),
        { canCreateApplicationBypassInvites: ep, isManualApprovalGuild: eN } = (0, U.R)(r),
        eI = ex && ev,
        { rows: ef } = (0, F.B)({
            guild: r,
            inviteChannel: eh,
            inviteTargetType: f,
            applicationId: x
        }),
        ej = i.useCallback(() => {
            eu(), n();
        }, [eu, n]),
        eb = i.useCallback(async () => {
            var e, t, n, l;
            if (null == eh) return null;
            J(!0);
            let i = null,
                s = null != (e = T.Z.getStageInstanceByChannel(null == eh ? void 0 : eh.id)) ? e : null;
            if (eg && null != r.vanityURLCode) i = r.vanityURLCode;
            else if ((null == s ? void 0 : s.invite_code) != null) i = s.invite_code;
            else {
                let e =
                    null !=
                    (t = P.Z.getInvite(eh.id, {
                        targetType: k.target_type,
                        targetUserId: k.target_user_id,
                        targetApplicationId: k.target_application_id
                    }))
                        ? t
                        : null;
                (null !== e && (0, D.m)(e, k)) ||
                    (await h.ZP.createInvite(eh.id, k, d),
                    (e =
                        null !=
                        (n = P.Z.getInvite(eh.id, {
                            targetType: k.target_type,
                            targetUserId: k.target_user_id,
                            targetApplicationId: k.target_application_id
                        }))
                            ? n
                            : null)),
                    (i = null != (l = null == e ? void 0 : e.code) ? l : null);
            }
            return null == i ? null : (J(!1), (0, L.tV)({ baseCode: i }));
        }, [eh, eg, r, k, d]),
        eS = i.useCallback(async () => {
            if ($ || X) return;
            ee(!0), en(null);
            let e = !1;
            try {
                let t = await eb();
                o()(null != t, 'Invite key could not be determined.');
                let n = ef
                    .filter((e) => b.includes(e.item.id))
                    .map((e) => {
                        var n;
                        let l,
                            i = z.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                            r = null != (n = Z.Z.getSelectedInviteMetadata(e)) ? n : null;
                        switch (e.type) {
                            case M.bm.FRIEND:
                            case M.bm.DM:
                                l = {
                                    type: v.m.USER,
                                    user: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r
                                };
                                break;
                            case M.bm.CHANNEL:
                                l = {
                                    type: v.m.CHANNEL,
                                    channel: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r
                                };
                                break;
                            case M.bm.GROUP_DM:
                                l = {
                                    type: v.m.GROUP_DM,
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
                            v.Z.enqueue(l, (n) => {
                                n ? e() : t();
                            });
                        });
                    });
                if ((await Promise.allSettled(n), n.length > 0)) {
                    let e = b.length > 1 ? q.NW.string(q.t['4pl/xs']) : q.NW.string(q.t.sVwWdX);
                    (0, c.showToast)((0, c.createToast)(e, c.ToastType.INVITE));
                }
                e = !0;
            } catch (e) {
                en(e), ee(!1);
            }
            e && ej();
        }, [$, X, ee, b, ef, eb, ej]),
        eE = $ || X;
    return (0, l.jsx)(N.Gt, {
        value: es,
        children: (0, l.jsxs)(c.Y0X, {
            className: s()(Y.modal, { [Y.disabled]: eE }),
            transitionState: t,
            children: [
                (0, l.jsxs)(c.xBx, {
                    className: Y.header,
                    children: [
                        (0, l.jsxs)('div', {
                            className: Y.titleLine,
                            children: [
                                (0, l.jsx)('div', {
                                    className: Y.title,
                                    children: (0, l.jsx)(c.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: q.NW.string(q.t.BN75l5)
                                    })
                                }),
                                (0, l.jsx)(c.olH, {
                                    className: Y.closeButton,
                                    onClick: ej
                                })
                            ]
                        }),
                        (0, l.jsx)(c.E1j, {
                            ref: ei,
                            size: c.E1j.Sizes.MEDIUM,
                            query: _,
                            onChange: ea,
                            onClear: eo,
                            placeholder: q.NW.string(q.t['5h0QOD']),
                            'aria-label': q.NW.string(q.t['5h0QOD']),
                            autoFocus: !0
                        })
                    ]
                }),
                (0, l.jsx)(c.hzk, {
                    className: s()(Y.body, { [Y.empty]: 0 === ef.length }),
                    children: (0, l.jsx)(el, {
                        rows: ef,
                        onToggle: ec,
                        scrollerRef: er,
                        selection: b,
                        disabled: $
                    })
                }),
                (0, l.jsxs)(c.mzw, {
                    direction: j.Z.Direction.VERTICAL,
                    className: Y.footer,
                    children: [
                        (0, l.jsx)(V.f, {
                            className: Y.footerContent,
                            guild: r,
                            channel: null != a ? a : null,
                            inviteChannel: eh,
                            getInviteKey: eb,
                            sendInvite: eS,
                            canUseVanityURL: eg,
                            disabled: eE,
                            options: k,
                            setOptions: ed,
                            isGuestInviteAllowed: eI,
                            isTemporaryInviteAllowed: !eI && !eN,
                            isApplicationBypassAllowed: ep,
                            setError: en
                        }),
                        null !== et &&
                            (0, l.jsx)(B.W, {
                                guild: r,
                                error: et,
                                onClose: ej
                            })
                    ]
                })
            ]
        })
    });
}
