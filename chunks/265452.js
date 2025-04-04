n.d(t, { H: () => $ }), n(47120), n(998459);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
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
    C = n(592125),
    b = n(984933),
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
    D = n(530436),
    L = n(895976),
    U = n(245335),
    V = n(981631),
    B = n(176505),
    F = n(388032),
    G = n(910420);
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
let { INVITE_OPTIONS_7_DAYS: H, INVITE_OPTIONS_UNLIMITED: q } = w.ZP,
    Y = {
        max_age: H.value,
        max_uses: q.value
    };
function K(e) {
    let { icon: t, label: n, subLabel: i, onClick: r, isSelected: s, disabled: a } = e;
    return (0, l.jsxs)(u.P3F, {
        'aria-disabled': a,
        className: G.recipientRow,
        onClick: r,
        children: [
            (0, l.jsx)('div', {
                className: G.recipientAsset,
                children: t
            }),
            (0, l.jsxs)('div', {
                className: G.recipientLabels,
                children: [
                    (0, l.jsx)(u.Text, {
                        className: G.recipientLabel,
                        variant: 'text-md/medium',
                        lineClamp: 1,
                        children: n
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(u.Text, {
                              className: G.recipientSublabel,
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
                value: s,
                className: G.checkbox
            })
        ]
    });
}
function X(e) {
    let { user: t, onToggle: n, isSelected: r, disabled: s } = e,
        a = R.ZP.useName(t),
        d = R.ZP.useUserTag(t, { decoration: 'never' }),
        [c, h] = (0, o.Wu)([Z.Z, P.Z], () => [Z.Z.getNickname(t.id), P.Z.getStatus(t.id)], [t]),
        m = i.useCallback(() => n(t.id), [n, t.id]);
    return (0, l.jsx)(K, {
        icon: (0, l.jsx)(g.Z, {
            'aria-hidden': !0,
            size: u.EFr.SIZE_32,
            user: t,
            status: h
        }),
        label: null != c ? c : a,
        subLabel: d,
        onClick: m,
        isSelected: r,
        disabled: s
    });
}
function J(e) {
    var t, n;
    let { channel: r, onToggle: s, isSelected: a, disabled: o } = e,
        d = i.useCallback(() => s(r.id), [s, r.id]),
        c = null != (t = (0, I.ZP)(r)) ? t : '',
        h = null != (n = (0, E._)(r)) ? n : '';
    return (0, l.jsx)(K, {
        icon: (0, l.jsx)(j.Z, {
            'aria-hidden': !0,
            size: u.EFr.SIZE_32,
            channel: r,
            experimentLocation: 'instant_invite_modal'
        }),
        label: c,
        subLabel: h,
        onClick: d,
        isSelected: a,
        disabled: o
    });
}
function Q(e) {
    let { rows: t, onToggle: n, selection: r, scrollerRef: s, disabled: o } = e,
        d = i.useMemo(() => [t.length], [t.length]),
        c = (0, x.Z)('instant_invite_modal', s),
        h = i.useCallback(
            (e) => {
                var i, s;
                let a,
                    { section: d, row: u } = e;
                if (d > 0) return;
                let c = t[u];
                switch (c.type) {
                    case w.bm.FRIEND:
                    case w.bm.DM:
                        let h = c.item;
                        return (
                            (a = null != (i = r.includes(h.id)) && i),
                            (0, l.jsx)(
                                X,
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
                            (a = null != (s = r.includes(g.id)) && s),
                            (0, l.jsx)(
                                J,
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
            [t, r, n, o]
        ),
        g = i.useCallback(() => 56, []);
    return 0 === t.length
        ? (0, l.jsx)(u.OZU, { children: F.NW.string(F.t.ojoWgY) })
        : (0, l.jsx)(a.bG, {
              navigator: c,
              children: (0, l.jsx)(a.SJ, {
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
                          u.YAO,
                          ((t = z(
                              {
                                  className: G.recipientList,
                                  style: { '--custom-recipient-row-height': ''.concat(56, 'px') },
                                  scrollerRef: (e) => {
                                      null !== e && ((s.current = e), (i.current = e.getScrollerNode()));
                                  }
                              },
                              r
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
function $(e) {
    let { transitionState: t, onClose: n, guild: r, channel: a, source: g, streamUserId: x, applicationId: I } = e,
        [j, E] = i.useState([]),
        [P, Z] = i.useState(''),
        [R, H] = i.useState(z({}, Y)),
        [q, K] = i.useState(!1),
        [X, J] = i.useState(null),
        $ = i.useRef(null),
        ee = i.useRef(null),
        et = null;
    null != x ? (et = U.Iq.STREAM) : null != I && (et = U.Iq.EMBEDDED_APPLICATION);
    let { analyticsLocations: en } = (0, p.ZP)(v.Z.INSTANT_INVITE_MODAL),
        el = i.useCallback(
            (e) => {
                var t;
                null == (t = ee.current) || t.scrollTo({ to: 0 }), Z(e), (0, h.C)(e);
            },
            [Z]
        ),
        ei = i.useCallback(() => {
            el('');
        }, [el]),
        er = i.useCallback((e) => H((t) => z({}, t, e)), [H]),
        es = i.useCallback(() => {
            E([]), H(z({}, Y)), ei(), K(!1), J(null);
        }, [ei]),
        ea = i.useCallback((e) => {
            E((t) => {
                let n = t.findIndex((t) => t === e);
                if (-1 === n) return [e, ...t];
                let l = [...t];
                return l.splice(n, 1), l;
            });
        }, []),
        eo = (0, o.e7)(
            [A.Z, C.Z, b.ZP],
            () => {
                var e;
                if (null != a) return a;
                let t = A.Z.getChannelId(),
                    n = null == t || (0, B.AB)(t) ? null : C.Z.getChannel(t);
                return (null == n ? void 0 : n.isThread()) && (n = C.Z.getChannel(n.parent_id)), null != (e = null != n ? n : b.ZP.getDefaultChannel(r.id, !0, V.Plq.CREATE_INSTANT_INVITE)) ? e : null;
            },
            [r.id, a]
        ),
        ed = (0, o.e7)([O.Z], () => null != eo && O.Z.can(V.Plq.CREATE_INSTANT_INVITE, eo), [eo]),
        eu = (0, o.e7)(
            [_.Z],
            () => {
                if (null == eo) return null;
                let e = _.Z.getInvite(eo.id, {
                    targetType: et,
                    targetUserId: x,
                    targetApplicationId: I
                });
                return null != e && null != X && J(null), e;
            },
            [eo, et, x, I, X]
        ),
        ec = !ed && !(null == eo ? void 0 : eo.isGuildVocal()) && void 0 !== r.vanityURLCode,
        eh = null === eu || !ed,
        eg = (0, N.Z)(eo),
        em = (null == eo ? void 0 : eo.type) === V.d4z.GUILD_VOICE && !ec && !eh && !eg,
        { enabled: ex } = S.o.useExperiment(
            {
                guildId: r.id,
                location: 'instant_invite_modal'
            },
            { autoTrackExposure: em }
        ),
        { canCreateApplicationBypassInvites: ev, isManualApprovalGuild: ep } = (0, M.R)(r),
        eN = ex && em,
        { rows: eI } = (0, L.B)({
            guild: r,
            inviteChannel: eo,
            inviteTargetType: et,
            applicationId: I
        }),
        ef = i.useMemo(() => {
            var e;
            let t,
                n = null != (e = T.Z.getStageInstanceByChannel(null == eo ? void 0 : eo.id)) ? e : null;
            return null === (t = ec && void 0 !== r.vanityURLCode ? r.vanityURLCode : (null == n ? void 0 : n.invite_code) !== void 0 ? n.invite_code : null != eu ? eu.code : null) ? null : (0, k.tV)({ baseCode: t });
        }, [ec, r, eu, eo]),
        ej = i.useCallback(() => {
            let e = null == eo ? void 0 : eo.id;
            ((0, d.Z)(R, Y) && ec) ||
                (null != e &&
                    c.ZP.createInvite(e, R, g).catch((e) => {
                        J(e);
                    }));
        }, [eo, R, ec, g]),
        eS = i.useCallback(() => {
            es(), n();
        }, [es, n]),
        eE = i.useCallback(async () => {
            if (q || null === ef) return;
            K(!0);
            let e = eI
                .filter((e) => j.includes(e.item.id))
                .map((e) => {
                    var t;
                    let n,
                        l = V.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = null != (t = y.Z.getSelectedInviteMetadata(e)) ? t : null;
                    switch (e.type) {
                        case w.bm.FRIEND:
                        case w.bm.DM:
                            n = {
                                type: m.m.USER,
                                user: e.item,
                                inviteKey: ef,
                                location: l,
                                suggested: i
                            };
                            break;
                        case w.bm.CHANNEL:
                            n = {
                                type: m.m.CHANNEL,
                                channel: e.item,
                                inviteKey: ef,
                                location: l,
                                suggested: i
                            };
                            break;
                        case w.bm.GROUP_DM:
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
                    let e = j.length > 1 ? F.NW.string(F.t['4pl/xs']) : F.NW.string(F.t.sVwWdX);
                    (0, u.showToast)((0, u.createToast)(e, u.ToastType.INVITE));
                }
            } catch (e) {
                J(e);
            } finally {
                eS();
            }
        }, [q, K, j, ef, eI, eS]);
    i.useEffect(() => {
        !ec && ed && ej();
    }, [eo, ec, ed, ej]);
    let eT = null === ef || null === eo;
    return (0, l.jsx)(p.Gt, {
        value: en,
        children: (0, l.jsxs)(u.Y0X, {
            className: s()(G.modal, { [G.disabled]: q }),
            transitionState: t,
            children: [
                (0, l.jsxs)(u.xBx, {
                    className: G.header,
                    children: [
                        (0, l.jsxs)('div', {
                            className: G.titleLine,
                            children: [
                                (0, l.jsx)('div', {
                                    className: G.title,
                                    children: (0, l.jsx)(u.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: F.NW.string(F.t.BN75l5)
                                    })
                                }),
                                (0, l.jsx)(u.olH, {
                                    className: G.closeButton,
                                    onClick: eS
                                })
                            ]
                        }),
                        (0, l.jsx)(u.E1j, {
                            ref: $,
                            size: u.E1j.Sizes.MEDIUM,
                            query: P,
                            onChange: el,
                            onClear: ei,
                            placeholder: F.NW.string(F.t['5h0QOD']),
                            'aria-label': F.NW.string(F.t['5h0QOD']),
                            autoFocus: !0
                        })
                    ]
                }),
                (0, l.jsx)(u.hzk, {
                    className: s()(G.body, { [G.empty]: 0 === eI.length }),
                    children: (0, l.jsx)(Q, {
                        rows: eI,
                        onToggle: ea,
                        scrollerRef: ee,
                        selection: j,
                        disabled: eT || q
                    })
                }),
                (0, l.jsxs)(u.mzw, {
                    direction: f.Z.Direction.VERTICAL,
                    className: G.footer,
                    children: [
                        (0, l.jsx)(W.f, {
                            className: G.footerContent,
                            guild: r,
                            channel: null != a ? a : null,
                            inviteChannel: eo,
                            inviteKey: ef,
                            sendInvite: eE,
                            sending: q,
                            options: R,
                            setOptions: er,
                            isGuestInviteAllowed: eN,
                            isTemporaryInviteAllowed: !eN && !ep,
                            isApplicationBypassAllowed: ev && !eh,
                            setError: J
                        }),
                        null !== X &&
                            (0, l.jsx)(D.W, {
                                guild: r,
                                error: X,
                                onClose: eS
                            })
                    ]
                })
            ]
        })
    });
}
