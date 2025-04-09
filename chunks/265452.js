n.d(t, { H: () => er }), n(388685), n(993155);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(512722),
    o = n.n(a),
    u = n(91192),
    d = n(442837),
    c = n(481060),
    h = n(447543),
    g = n(247272),
    m = n(700582),
    v = n(630810),
    x = n(724757),
    p = n(100527),
    I = n(906732),
    N = n(447003),
    f = n(933557),
    j = n(259473),
    S = n(600164),
    E = n(266076),
    b = n(227672),
    T = n(810123),
    _ = n(448486),
    O = n(427679),
    y = n(592125),
    C = n(984933),
    P = n(430824),
    Z = n(341165),
    w = n(751771),
    A = n(496675),
    R = n(158776),
    k = n(699516),
    M = n(944486),
    W = n(971130),
    L = n(51144),
    V = n(264229),
    D = n(601953),
    U = n(277364),
    B = n(666258),
    F = n(530436),
    G = n(895976),
    z = n(245335),
    H = n(981631),
    q = n(176505),
    Y = n(388032),
    K = n(910420);
function X(e) {
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
let { INVITE_OPTIONS_7_DAYS: J, INVITE_OPTIONS_UNLIMITED: Q } = W.ZP,
    $ = {
        max_age: J.value,
        max_uses: Q.value
    };
function ee(e) {
    let { icon: t, label: n, subLabel: i, onClick: r, isSelected: s, disabled: a } = e;
    return (0, l.jsxs)(c.P3F, {
        'aria-disabled': a,
        className: K.recipientRow,
        onClick: r,
        children: [
            (0, l.jsx)('div', {
                className: K.recipientAsset,
                children: t
            }),
            (0, l.jsxs)('div', {
                className: K.recipientLabels,
                children: [
                    (0, l.jsx)(c.Text, {
                        className: K.recipientLabel,
                        variant: 'text-md/medium',
                        lineClamp: 1,
                        children: n
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(c.Text, {
                              className: K.recipientSublabel,
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
                className: K.checkbox
            })
        ]
    });
}
function et(e) {
    let { user: t, onToggle: n, isSelected: r, disabled: s } = e,
        a = L.ZP.useName(t),
        o = L.ZP.useUserTag(t, { decoration: 'never' }),
        [u, h] = (0, d.Wu)([k.Z, R.Z], () => [k.Z.getNickname(t.id), R.Z.getStatus(t.id)], [t]),
        g = i.useCallback(() => n(t.id), [n, t.id]);
    return (0, l.jsx)(ee, {
        icon: (0, l.jsx)(m.Z, {
            'aria-hidden': !0,
            size: c.EFr.SIZE_32,
            user: t,
            status: h
        }),
        label: null != u ? u : a,
        subLabel: o,
        onClick: g,
        isSelected: r,
        disabled: s
    });
}
function en(e) {
    var t, n;
    let { channel: r, onToggle: s, isSelected: a, disabled: o } = e,
        u = i.useCallback(() => s(r.id), [s, r.id]),
        d = null != (t = (0, f.ZP)(r)) ? t : '',
        h = null != (n = (0, _._)(r)) ? n : '';
    return (0, l.jsx)(ee, {
        icon: (0, l.jsx)(E.Z, {
            'aria-hidden': !0,
            size: c.EFr.SIZE_32,
            channel: r,
            experimentLocation: 'instant_invite_modal'
        }),
        label: d,
        subLabel: h,
        onClick: u,
        isSelected: a,
        disabled: o
    });
}
function el(e) {
    var t, n;
    let { channel: r, onToggle: s, isSelected: a, disabled: o } = e,
        u = (0, d.e7)([P.Z], () => P.Z.getGuild(null == r ? void 0 : r.guild_id)),
        c = i.useCallback(() => s(r.id), [s, r.id]),
        h = null != (t = (0, f.ZP)(r)) ? t : '',
        g = null != (n = null == u ? void 0 : u.name) ? n : '';
    return (0, l.jsx)(ee, {
        icon: (0, l.jsx)(T.Z, {
            size: T.E.SMALL_32,
            guild: u,
            channel: r
        }),
        label: h,
        subLabel: g,
        onClick: c,
        isSelected: a,
        disabled: o
    });
}
function ei(e) {
    let { rows: t, onToggle: n, selection: r, scrollerRef: s, disabled: a } = e,
        o = i.useMemo(() => [t.length], [t.length]),
        d = (0, x.Z)('instant_invite_modal', s),
        h = i.useCallback(
            (e) => {
                var i, s, o;
                let u,
                    { section: d, row: c } = e;
                if (d > 0) return;
                let h = t[c];
                switch (h.type) {
                    case W.bm.FRIEND:
                    case W.bm.DM:
                        let g = h.item;
                        return (
                            (u = null != (i = r.includes(g.id)) && i),
                            (0, l.jsx)(
                                et,
                                {
                                    user: g,
                                    isSelected: u,
                                    onToggle: n,
                                    disabled: a
                                },
                                g.id
                            )
                        );
                    case W.bm.GROUP_DM:
                        let m = h.item;
                        return (
                            (u = null != (s = r.includes(m.id)) && s),
                            (0, l.jsx)(
                                en,
                                {
                                    channel: m,
                                    isSelected: u,
                                    onToggle: n,
                                    disabled: a
                                },
                                m.id
                            )
                        );
                    case W.bm.CHANNEL:
                        let v = h.item;
                        return (
                            (u = null != (o = r.includes(v.id)) && o),
                            (0, l.jsx)(
                                el,
                                {
                                    channel: v,
                                    isSelected: u,
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
        g = i.useCallback(() => 48, []);
    return 0 === t.length
        ? (0, l.jsx)(c.OZU, { children: Y.NW.string(Y.t.ojoWgY) })
        : (0, l.jsx)(u.bG, {
              navigator: d,
              children: (0, l.jsx)(u.SJ, {
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
                          ((t = X(
                              {
                                  className: K.recipientList,
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
function er(e) {
    let { transitionState: t, onClose: n, guild: r, channel: a, source: u, streamUserId: m, applicationId: x } = e,
        f = null;
    null != m ? (f = z.Iq.STREAM) : null != x && (f = z.Iq.EMBEDDED_APPLICATION);
    let E = (0, j.Z)({ guildId: r.id }),
        [T, _] = i.useState([]),
        [P, R] = i.useState(''),
        { current: k } = i.useRef(X({}, $, null == E ? {} : { max_age: E }, null == x ? {} : { target_application_id: x }, null == f ? {} : { target_type: f }, null == m ? {} : { target_user_id: m })),
        [L, J] = i.useState(k),
        [Q, ee] = i.useState(!1),
        [et, en] = i.useState(!1),
        [el, er] = i.useState(null),
        es = i.useRef(null),
        ea = i.useRef(null),
        { analyticsLocations: eo } = (0, I.ZP)(p.Z.INSTANT_INVITE_MODAL),
        eu = i.useCallback(
            (e) => {
                var t;
                null == (t = ea.current) || t.scrollTo({ to: 0 }), R(e), (0, g.C)(e);
            },
            [R]
        ),
        ed = i.useCallback(() => {
            eu('');
        }, [eu]),
        ec = i.useCallback((e) => J((t) => X({}, t, e)), [J]),
        eh = i.useCallback(() => {
            _([]), J(k), ed(), en(!1), er(null);
        }, [ed, k]),
        eg = i.useCallback((e) => {
            _((t) => {
                let n = t.findIndex((t) => t === e);
                if (-1 === n) return [e, ...t];
                let l = [...t];
                return l.splice(n, 1), l;
            });
        }, []),
        em = i.useMemo(() => {
            var e;
            if (null != a) return a;
            let t = M.Z.getChannelId(),
                n = null == t || (0, q.AB)(t) ? null : y.Z.getChannel(t);
            return (null == n ? void 0 : n.isThread()) && (n = y.Z.getChannel(n.parent_id)), null != (e = null != n ? n : C.ZP.getDefaultChannel(r.id, !0, H.Plq.CREATE_INSTANT_INVITE)) ? e : null;
        }, [r.id, a]),
        ev = !(0, d.e7)([A.Z], () => null != em && A.Z.can(H.Plq.CREATE_INSTANT_INVITE, em), [em]) && !(null == em ? void 0 : em.isGuildVocal()),
        ex = (0, N.Z)(em),
        ep = (null == em ? void 0 : em.type) === H.d4z.GUILD_VOICE && !ev && !ex,
        { enabled: eI } = b.o.useExperiment(
            {
                guildId: r.id,
                location: 'instant_invite_modal'
            },
            { autoTrackExposure: ep }
        ),
        { canCreateApplicationBypassInvites: eN, isManualApprovalGuild: ef } = (0, U.R)(r),
        ej = eI && ep,
        { rows: eS } = (0, G.B)({
            guild: r,
            inviteChannel: em,
            inviteTargetType: f,
            applicationId: x
        }),
        eE = i.useCallback(() => {
            eh(), n();
        }, [eh, n]),
        eb = i.useCallback(async () => {
            var e, t, n, l;
            if (null == em) return null;
            ee(!0);
            let i = null,
                s = null != (e = O.Z.getStageInstanceByChannel(null == em ? void 0 : em.id)) ? e : null;
            if (ev && null != r.vanityURLCode) i = r.vanityURLCode;
            else if ((null == s ? void 0 : s.invite_code) != null) i = s.invite_code;
            else {
                let e =
                    null !=
                    (t = Z.Z.getInvite(em.id, {
                        targetType: L.target_type,
                        targetUserId: L.target_user_id,
                        targetApplicationId: L.target_application_id
                    }))
                        ? t
                        : null;
                (null !== e && (0, D.m)(e, L)) ||
                    (await h.ZP.createInvite(em.id, L, u),
                    (e =
                        null !=
                        (n = Z.Z.getInvite(em.id, {
                            targetType: L.target_type,
                            targetUserId: L.target_user_id,
                            targetApplicationId: L.target_application_id
                        }))
                            ? n
                            : null)),
                    (i = null != (l = null == e ? void 0 : e.code) ? l : null);
            }
            return null == i ? null : (ee(!1), (0, V.tV)({ baseCode: i }));
        }, [em, ev, r, L, u]),
        eT = i.useCallback(async () => {
            if (et || Q) return;
            en(!0), er(null);
            let e = !1;
            try {
                let t = await eb();
                o()(null != t, 'Invite key could not be determined.');
                let n = eS
                    .filter((e) => T.includes(e.item.id))
                    .map((e) => {
                        var n;
                        let l,
                            i = H.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                            r = null != (n = w.Z.getSelectedInviteMetadata(e)) ? n : null;
                        switch (e.type) {
                            case W.bm.FRIEND:
                            case W.bm.DM:
                                l = {
                                    type: v.m.USER,
                                    user: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r
                                };
                                break;
                            case W.bm.CHANNEL:
                                l = {
                                    type: v.m.CHANNEL,
                                    channel: e.item,
                                    inviteKey: t,
                                    location: i,
                                    suggested: r
                                };
                                break;
                            case W.bm.GROUP_DM:
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
                    let e = T.length > 1 ? Y.NW.string(Y.t['4pl/xs']) : Y.NW.string(Y.t.sVwWdX);
                    (0, c.showToast)((0, c.createToast)(e, c.ToastType.INVITE));
                }
                e = !0;
            } catch (e) {
                er(e), en(!1);
            }
            e && eE();
        }, [et, Q, en, T, eS, eb, eE]),
        e_ = et || Q;
    return (0, l.jsx)(I.Gt, {
        value: eo,
        children: (0, l.jsxs)(c.Y0X, {
            className: s()(K.modal, { [K.disabled]: e_ }),
            transitionState: t,
            children: [
                (0, l.jsxs)(c.xBx, {
                    className: K.header,
                    children: [
                        (0, l.jsxs)('div', {
                            className: K.titleLine,
                            children: [
                                (0, l.jsx)('div', {
                                    className: K.title,
                                    children: (0, l.jsx)(c.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: Y.NW.string(Y.t.BN75l5)
                                    })
                                }),
                                (0, l.jsx)(c.olH, {
                                    className: K.closeButton,
                                    onClick: eE
                                })
                            ]
                        }),
                        (0, l.jsx)(c.E1j, {
                            ref: es,
                            size: c.E1j.Sizes.MEDIUM,
                            query: P,
                            onChange: eu,
                            onClear: ed,
                            placeholder: Y.NW.string(Y.t['5h0QOD']),
                            'aria-label': Y.NW.string(Y.t['5h0QOD']),
                            autoFocus: !0
                        })
                    ]
                }),
                (0, l.jsx)(c.hzk, {
                    className: s()(K.body, { [K.empty]: 0 === eS.length }),
                    children: (0, l.jsx)(ei, {
                        rows: eS,
                        onToggle: eg,
                        scrollerRef: ea,
                        selection: T,
                        disabled: et
                    })
                }),
                (0, l.jsxs)(c.mzw, {
                    direction: S.Z.Direction.VERTICAL,
                    className: K.footer,
                    children: [
                        (0, l.jsx)(B.f, {
                            className: K.footerContent,
                            guild: r,
                            channel: null != a ? a : null,
                            inviteChannel: em,
                            getInviteKey: eb,
                            sendInvite: eT,
                            canUseVanityURL: ev,
                            disabled: e_ || 0 === T.length,
                            options: L,
                            setOptions: ec,
                            isGuestInviteAllowed: ej,
                            isTemporaryInviteAllowed: !ej && !ef,
                            isApplicationBypassAllowed: eN,
                            setError: er
                        }),
                        null !== el &&
                            (0, l.jsx)(F.W, {
                                guild: r,
                                error: el,
                                onClose: eE
                            })
                    ]
                })
            ]
        })
    });
}
