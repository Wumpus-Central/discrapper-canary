n.d(t, { Z: () => ed }), n(653041), n(47120), n(266796);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(913527),
    o = n.n(s),
    c = n(642128),
    d = n(788347),
    u = n(831209),
    m = n(149765),
    h = n(442837),
    g = n(481060),
    f = n(787014),
    p = n(412899),
    x = n(493773),
    b = n(447003),
    j = n(605436),
    v = n(621516),
    C = n(430824),
    _ = n(186523),
    y = n(585483),
    N = n(70956),
    O = n(709054),
    w = n(961675),
    S = n(883429),
    P = n(993259),
    T = n(109434),
    I = n(456269),
    E = n(228392),
    k = n(432771),
    R = n(538366),
    Z = n(470623),
    M = n(710352),
    A = n(981631),
    L = n(388032),
    W = n(354094);
function F(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                F(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let B = {
        width: 28,
        height: 28
    },
    H = {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    U = (e) => {
        (0, E.e5)({ onboardingCTA: e });
    };
class V {
    addStep(e) {
        ++this.currentIndex, this.steps.push(D({ index: this.currentIndex }, e)), e.isDone && this.completedSteps++;
    }
    getSteps() {
        return this.steps;
    }
    isAllDone() {
        return this.steps.every((e) => e.isDone);
    }
    constructor() {
        F(this, 'currentIndex', 0), F(this, 'steps', []), F(this, 'completedSteps', 0);
    }
}
let G = (e) => {
        let t = null != e.topic && e.topic.length > 0;
        return {
            name: L.NW.string(L.t.UgJu1d),
            description: L.NW.string(L.t['3C6/Gx']),
            clickHandler: () => {
                U(M.ZI.GUIDELINES), f.ZP.open(e.id, void 0, A.ZfP.TOPIC);
            },
            isDone: t
        };
    },
    q = (e) => {
        let t = null != e.availableTags && e.availableTags.length > 0;
        return {
            name: L.NW.string(L.t.xiBFCg),
            description: L.NW.string(L.t.wCv4Oz),
            clickHandler: () => {
                U(M.ZI.TAGS),
                    f.ZP.open(e.id),
                    (0, g.ZDy)(async () => {
                        let { default: t } = await n.e('21971').then(n.bind(n, 201049));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                z(D({}, n), {
                                    channelId: e.id,
                                    guildId: e.guild_id
                                })
                            );
                    });
            },
            isDone: t
        };
    },
    X = (e) => {
        let t = null != e.defaultReactionEmoji;
        return {
            name: L.NW.string(L.t.QlyC9v),
            description: L.NW.string(L.t['+50LJi']),
            clickHandler: () => {
                U(M.ZI.DEFAULT_REACTION),
                    (0, g.ZDy)(async () => {
                        let { default: t } = await n.e('80404').then(n.bind(n, 158586));
                        return (n) => (0, r.jsx)(t, z(D({}, n), { channel: e }));
                    });
            },
            isDone: t
        };
    },
    K = (e, t, a) => ({
        name: L.NW.string(L.t['6A0O6+']),
        description: t
            ? L.NW.string(L.t['8hI5vr'])
            : L.NW.format(L.t.ysxcAw, {
                  onClick: (e) => {
                      null != a &&
                          (e.preventDefault(),
                          e.stopPropagation(),
                          (0, E.qz)(),
                          (0, g.ZDy)(async () => {
                              let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                              return (t) => (0, r.jsx)(e, z(D({}, t), { guildId: a }));
                          }));
                  }
              }),
        clickHandler: () => {
            U(M.ZI.CREATE_POST), y.S.dispatch(A.CkL.FOCUS_COMPOSER_TITLE);
        },
        isDone: e
    }),
    J = (e, t) => a.useCallback(() => (t(!1), S.Z.hideAdminOnboarding(e, !0)), [e, t]),
    Y = (e) => {
        let t = O.default.extractTimestamp(e);
        return o()().isBefore(o()(t).add(o().duration(15, 'days')));
    },
    Q = (e, t, n) => {
        a.useEffect(() => {
            e || n(!t);
        }, [e, n, t]);
    },
    $ = (e, t, n, r) => {
        let i = a.useRef(0);
        a.useEffect(
            () => (
                n || !e || t
                    ? clearTimeout(i.current)
                    : (i.current = setTimeout(() => {
                          r();
                      }, 60 * N.Z.Millis.SECOND)),
                () => clearTimeout(i.current)
            ),
            [e, t, r, n]
        );
    },
    ee = (e, t, n) => {
        (0, x.ZP)(() => {
            e && t && n();
        });
    },
    et = (e) => {
        let { isAllDone: t, isVisible: n, canManageChannel: r, guildId: i, channel: l } = e,
            s = (0, h.e7)([C.Z], () => (null != i ? C.Z.getRoles(i) : void 0)),
            o = a.useCallback(() => {
                y.S.dispatch(A.CkL.REMEASURE_TARGET);
            }, []);
        a.useEffect(() => {
            o();
        }, [o, t, n, r, s, l.id, l.permissionOverwrites]);
    },
    en = () => {
        let [e, t] = a.useState(!0);
        return {
            transitions: (0, g.Yzy)(e, {
                keys: (e) => (e ? 'shown' : 'hidden'),
                config: ei,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                unique: !0
            }),
            setVisible: t
        };
    },
    er = (e) =>
        (0, g.Yzy)(e, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 }
        }),
    ea = (e) => {
        let { guild: t, roles: n } = e;
        return (0, r.jsx)('div', {
            className: W.rolesList,
            'aria-label': L.NW.formatToPlainString(L.t.PCs0oq, { numRoles: n.length }),
            children: n.map((e) =>
                (0, r.jsx)(
                    p.UB,
                    {
                        role: e,
                        canRemove: !1,
                        onRemove: A.VqG,
                        guildId: t.id,
                        className: W.rolePill
                    },
                    e.id
                )
            )
        });
    },
    ei = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    el = (e) => {
        let { guild: t, channel: i, hasAnyThread: l, handleHide: s } = e,
            [o, c] = a.useState(!1),
            d = (0, k.c)(i.id),
            u = (0, h.e7)([w.Z], () => w.Z.hasHidden(i.id)),
            f = (function (e, t, i, l) {
                let s = null == e ? void 0 : e.id,
                    o = (0, h.e7)([C.Z], () => (null != s ? C.Z.getRoles(s) : void 0));
                return a.useMemo(() => {
                    let a = new V(),
                        s = (null == t ? void 0 : t.isMediaChannel()) === !0;
                    return (
                        null == e ||
                            null == t ||
                            s ||
                            null == o ||
                            a.addStep(
                                (function (e, t, a, i) {
                                    let l = (0, b.Z)(a) ? m.$e(A.Plq.VIEW_CHANNEL, A.Plq.SEND_MESSAGES) : A.Plq.SEND_MESSAGES,
                                        s = null != e ? (0, P.E$)(e, t, a, l).filter((t) => a.permissionOverwrites.hasOwnProperty(t.id) || (0, j.pM)(e.id, t.id)) : [],
                                        o = s.length > 0,
                                        c = s.some((t) => (0, j.pM)(e.id, t.id));
                                    return {
                                        name: L.NW.string(L.t['/Ax2go']),
                                        description: L.NW.string(L.t.oMIexc),
                                        isDone: o && c,
                                        shouldWarn: o && !c,
                                        children: o
                                            ? (0, r.jsx)(ea, {
                                                  guild: e,
                                                  roles: s
                                              })
                                            : null,
                                        clickHandler: () => {
                                            U(M.ZI.PERMISSIONS),
                                                (0, g.ZDy)(
                                                    async () => {
                                                        let { default: t } = await n.e('78704').then(n.bind(n, 560602));
                                                        return (
                                                            i(!0),
                                                            (n) =>
                                                                (0, r.jsx)(
                                                                    t,
                                                                    z(D({}, n), {
                                                                        channel: a,
                                                                        guild: e,
                                                                        permission: l,
                                                                        currentSelectedRoles: s
                                                                    })
                                                                )
                                                        );
                                                    },
                                                    {
                                                        modalKey: 'SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY',
                                                        onCloseRequest: A.VqG,
                                                        onCloseCallback: () => i(!1)
                                                    }
                                                );
                                        }
                                    };
                                })(e, o, t, l)
                            ),
                        s || a.addStep(G(t)),
                        a.addStep(q(t)),
                        a.addStep(X(t)),
                        a.addStep(K(i, s, null == e ? void 0 : e.id)),
                        a
                    );
                }, [t, e, o, i, l]);
            })(t, i, l, c),
            p = f.isAllDone();
        return (
            $(p, d || u || !Y(i.id), o, s),
            {
                onboardingSteps: f,
                isHidden: u,
                isDismissed: d,
                isAllDone: p
            }
        );
    },
    es = () =>
        a.useCallback((e) => {
            var t;
            null == (t = e.clickHandler) || t.call(e);
        }, []),
    eo = (e) => {
        let { handleHide: t } = e;
        return (0, r.jsx)(g.P3F, {
            onClick: t,
            className: W.closeButton,
            'aria-label': L.NW.string(L.t.WAI6xs),
            children: (0, r.jsx)(g.Dio, {
                size: 'md',
                color: 'currentColor',
                className: W.closeIcon
            })
        });
    },
    ec = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, r.jsx)(g.P3F, {
            onClick: n,
            className: W.closeButton,
            'aria-label': t ? L.NW.string(L.t.iTcumZ) : L.NW.string(L.t.dcl9MT),
            children: t
                ? (0, r.jsx)(g.dOc, {
                      size: 'xs',
                      color: 'currentColor',
                      className: W.closeIcon
                  })
                : (0, r.jsx)(g.bJT, {
                      size: 'xs',
                      color: 'currentColor',
                      className: W.closeIcon
                  })
        });
    },
    ed = (e) => {
        let { hasAnyThread: t, channel: n } = e,
            { onboardingExpanded: a } = (0, Z.xH)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, d.X),
            { tagFilter: i } = (0, T.H)(n.id),
            s = (0, h.e7)([C.Z], () => C.Z.getGuild(n.getGuildId())),
            o = (0, I.r_)(n),
            { transitions: m, setVisible: f } = en(),
            p = er(a),
            b = es(),
            j = J(n.id, f),
            {
                onboardingSteps: y,
                isDismissed: N,
                isHidden: O,
                isAllDone: w
            } = el({
                guild: s,
                channel: n,
                hasAnyThread: t,
                handleHide: j
            }),
            S = !O && !N,
            P = (0, Z.AF)(),
            E = n.isMediaChannel(),
            k = (e) => P.getState().setOnboardingExpanded(e);
        return (ee(w, S, j),
        et({
            isAllDone: w,
            isVisible: S,
            canManageChannel: o,
            guildId: null == s ? void 0 : s.id,
            channel: n
        }),
        Q(N, O, f),
        (0, x.ZP)(() => {
            (t && S) || k(!0);
        }),
        null == s)
            ? null
            : S && o
              ? E
                  ? t
                      ? null
                      : (0, r.jsx)(v.Z, { channel: n })
                  : (0, r.jsx)(r.Fragment, {
                        children: m((e, t) =>
                            t
                                ? (0, r.jsx)(c.animated.div, {
                                      style: e,
                                      className: W.container,
                                      children: (0, r.jsxs)('div', {
                                          className: W.wrapper,
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: W.headerRow,
                                                  children: (0, r.jsxs)(g.y5t, {
                                                      component: (0, r.jsx)(g.X6q, {
                                                          variant: 'heading-md/semibold',
                                                          children: L.NW.string(L.t.LhlgY2)
                                                      }),
                                                      children: [
                                                          (0, r.jsx)(g.X6q, {
                                                              variant: 'heading-md/medium',
                                                              className: W.header,
                                                              children: L.NW.format(L.t['9L+8b2'], {
                                                                  numCompleted: y.completedSteps.toString(),
                                                                  numSteps: y.steps.length.toString()
                                                              })
                                                          }),
                                                          (0, r.jsxs)(g.Text, {
                                                              variant: 'text-xs/normal',
                                                              className: W.visibilityInfo,
                                                              children: [
                                                                  (0, r.jsx)(g.d3s, {
                                                                      size: 'xxs',
                                                                      color: 'currentColor',
                                                                      className: W.icon
                                                                  }),
                                                                  L.NW.string(L.t.znhX2d)
                                                              ]
                                                          }),
                                                          (0, r.jsx)(ec, {
                                                              expanded: a,
                                                              onClick: () => k(!a)
                                                          }),
                                                          (0, r.jsx)(eo, { handleHide: j })
                                                      ]
                                                  })
                                              }),
                                              p((e, t) =>
                                                  t
                                                      ? (0, r.jsx)(c.animated.div, {
                                                            style: e,
                                                            className: W.listContainer,
                                                            children: (0, r.jsx)('ol', {
                                                                className: W.checklist,
                                                                children: y.getSteps().map((e) =>
                                                                    (0, r.jsxs)(
                                                                        g.P3F,
                                                                        {
                                                                            tag: 'li',
                                                                            'aria-label': e.name,
                                                                            onClick: () => b(e),
                                                                            className: l()(W.stepContainer, { [W.completed]: e.isDone }),
                                                                            children: [
                                                                                e.shouldWarn
                                                                                    ? (0, r.jsx)(g.P4T, {
                                                                                          size: 'custom',
                                                                                          width: 20,
                                                                                          height: 20,
                                                                                          color: u.Z.STATUS_DANGER,
                                                                                          className: W.stepStatus
                                                                                      })
                                                                                    : e.isDone
                                                                                      ? (0, r.jsx)(g.G2e, {
                                                                                            color: u.Z.STATUS_POSITIVE_BACKGROUND,
                                                                                            icon: g.dz2,
                                                                                            style: H,
                                                                                            className: W.stepStatus
                                                                                        })
                                                                                      : (0, r.jsx)(g.G2e, {
                                                                                            disableColor: !0,
                                                                                            icon: (0, g.GSL)(_.Z),
                                                                                            style: B,
                                                                                            className: l()(W.stepStatus, W.completed)
                                                                                        }),
                                                                                (0, r.jsxs)('div', {
                                                                                    className: W.step,
                                                                                    children: [
                                                                                        (0, r.jsx)(g.Text, {
                                                                                            variant: 'text-md/medium',
                                                                                            color: e.isDone ? 'header-secondary' : 'header-primary',
                                                                                            className: W.stepName,
                                                                                            children: e.name
                                                                                        }),
                                                                                        (0, r.jsx)(g.Text, {
                                                                                            variant: 'text-sm/normal',
                                                                                            color: 'header-secondary',
                                                                                            className: W.stepDescription,
                                                                                            children: e.description
                                                                                        }),
                                                                                        e.children
                                                                                    ]
                                                                                }),
                                                                                (0, r.jsx)(g.Fbu, {
                                                                                    size: 'custom',
                                                                                    color: 'currentColor',
                                                                                    width: 12,
                                                                                    className: W.stepStatus
                                                                                })
                                                                            ]
                                                                        },
                                                                        'onboard-step-'.concat(e.index)
                                                                    )
                                                                )
                                                            })
                                                        })
                                                      : null
                                              )
                                          ]
                                      })
                                  })
                                : null
                        )
                    })
              : t
                ? null
                : (0, r.jsx)(R.Z, {
                      channelName: n.name,
                      guildId: n.guild_id,
                      tagFilter: i,
                      channel: n
                  });
    };
