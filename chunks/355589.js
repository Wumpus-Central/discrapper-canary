n.d(t, { Z: () => eh }), n(539854), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(695469),
    d = n(94171),
    u = n(831209),
    m = n(149765),
    h = n(442837),
    g = n(481060),
    f = n(787014),
    x = n(412899),
    p = n(493773),
    b = n(447003),
    j = n(605436),
    v = n(621516),
    _ = n(982168),
    C = n(386923),
    y = n(474366),
    O = n(430824),
    w = n(186523),
    S = n(585483),
    N = n(70956),
    T = n(709054),
    P = n(961675),
    I = n(883429),
    E = n(993259),
    R = n(109434),
    k = n(456269),
    M = n(228392),
    Z = n(432771),
    A = n(538366),
    L = n(470623),
    F = n(710352),
    D = n(981631),
    z = n(388032),
    B = n(354094);
function H(e, t, n) {
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
function U(e) {
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
                H(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
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
let G = {
        width: 28,
        height: 28
    },
    q = {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    W = (e) => {
        (0, M.e5)({ onboardingCTA: e });
    };
class X {
    addStep(e) {
        ++this.currentIndex, this.steps.push(U({ index: this.currentIndex }, e)), e.isDone && this.completedSteps++;
    }
    getSteps() {
        return this.steps;
    }
    isAllDone() {
        return this.steps.every((e) => e.isDone);
    }
    constructor() {
        H(this, 'currentIndex', 0), H(this, 'steps', []), H(this, 'completedSteps', 0);
    }
}
let K = (e) => {
        let t = null != e.topic && e.topic.length > 0;
        return {
            name: z.intl.string(z.t.UgJu1d),
            description: z.intl.string(z.t['3C6/Gx']),
            clickHandler: () => {
                W(F.ZI.GUIDELINES), f.ZP.open(e.id, void 0, D.ZfP.TOPIC);
            },
            isDone: t
        };
    },
    J = (e) => {
        let t = null != e.availableTags && e.availableTags.length > 0;
        return {
            name: z.intl.string(z.t.xiBFCg),
            description: z.intl.string(z.t.wCv4Oz),
            clickHandler: () => {
                W(F.ZI.TAGS),
                    f.ZP.open(e.id),
                    (0, g.ZDy)(async () => {
                        let { default: t } = await n.e('21971').then(n.bind(n, 201049));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                V(U({}, n), {
                                    channelId: e.id,
                                    guildId: e.guild_id
                                })
                            );
                    });
            },
            isDone: t
        };
    },
    Y = (e) => {
        let t = null != e.defaultReactionEmoji;
        return {
            name: z.intl.string(z.t.QlyC9v),
            description: z.intl.string(z.t['+50LJi']),
            clickHandler: () => {
                W(F.ZI.DEFAULT_REACTION),
                    (0, g.ZDy)(async () => {
                        let { default: t } = await n.e('80404').then(n.bind(n, 158586));
                        return (n) => (0, r.jsx)(t, V(U({}, n), { channel: e }));
                    });
            },
            isDone: t
        };
    },
    Q = (e, t, i) => ({
        name: z.intl.string(z.t['6A0O6+']),
        description: t
            ? z.intl.string(z.t['8hI5vr'])
            : z.intl.format(z.t.ysxcAw, {
                  onClick: (e) => {
                      null != i &&
                          (e.preventDefault(),
                          e.stopPropagation(),
                          (0, M.qz)(),
                          (0, g.ZDy)(async () => {
                              let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                              return (t) => (0, r.jsx)(e, V(U({}, t), { guildId: i }));
                          }));
                  }
              }),
        clickHandler: () => {
            W(F.ZI.CREATE_POST), S.S.dispatch(D.CkL.FOCUS_COMPOSER_TITLE);
        },
        isDone: e
    }),
    $ = (e, t) => i.useCallback(() => (t(!1), I.Z.hideAdminOnboarding(e, !0)), [e, t]),
    ee = (e) => {
        let t = T.default.extractTimestamp(e);
        return o()().isBefore(o()(t).add(o().duration(15, 'days')));
    },
    et = (e, t, n) => {
        i.useEffect(() => {
            e || n(!t);
        }, [e, n, t]);
    },
    en = (e, t, n, r) => {
        let a = i.useRef(0);
        i.useEffect(
            () => (
                n || !e || t
                    ? clearTimeout(a.current)
                    : (a.current = setTimeout(() => {
                          r();
                      }, 60 * N.Z.Millis.SECOND)),
                () => clearTimeout(a.current)
            ),
            [e, t, r, n]
        );
    },
    er = (e, t, n) => {
        (0, p.ZP)(() => {
            e && t && n();
        });
    },
    ei = (e) => {
        let { isAllDone: t, isVisible: n, canManageChannel: r, guildId: a, channel: l } = e,
            s = (0, h.e7)([O.Z], () => (null != a ? O.Z.getRoles(a) : void 0)),
            o = i.useCallback(() => {
                S.S.dispatch(D.CkL.REMEASURE_TARGET);
            }, []);
        i.useEffect(() => {
            o();
        }, [o, t, n, r, s, l.id, l.permissionOverwrites]);
    },
    ea = () => {
        let [e, t] = i.useState(!0);
        return {
            transitions: (0, g.Yzy)(e, {
                keys: (e) => (e ? 'shown' : 'hidden'),
                config: eo,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                unique: !0
            }),
            setVisible: t
        };
    },
    el = (e) =>
        (0, g.Yzy)(e, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 }
        }),
    es = (e) => {
        let { guild: t, roles: n } = e;
        return (0, r.jsx)('div', {
            className: B.rolesList,
            'aria-label': z.intl.formatToPlainString(z.t.PCs0oq, { numRoles: n.length }),
            children: n.map((e) =>
                (0, r.jsx)(
                    x.UB,
                    {
                        role: e,
                        canRemove: !1,
                        onRemove: D.VqG,
                        guildId: t.id,
                        className: B.rolePill
                    },
                    e.id
                )
            )
        });
    },
    eo = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    ec = (e) => {
        let { guild: t, channel: a, hasAnyThread: l, handleHide: s } = e,
            [o, c] = i.useState(!1),
            d = (0, Z.c)(a.id),
            u = (0, h.e7)([P.Z], () => P.Z.hasHidden(a.id)),
            f = (function (e, t, a, l) {
                let s = null == e ? void 0 : e.id,
                    o = (0, h.e7)([O.Z], () => (null != s ? O.Z.getRoles(s) : void 0));
                return i.useMemo(() => {
                    let i = new X(),
                        s = (null == t ? void 0 : t.isMediaChannel()) === !0;
                    return (
                        null == e ||
                            null == t ||
                            s ||
                            null == o ||
                            i.addStep(
                                (function (e, t, i, a) {
                                    let l = (0, b.Z)(i) ? m.$e(D.Plq.VIEW_CHANNEL, D.Plq.SEND_MESSAGES) : D.Plq.SEND_MESSAGES,
                                        s = null != e ? (0, E.E$)(e, t, i, l).filter((t) => i.permissionOverwrites.hasOwnProperty(t.id) || (0, j.pM)(e.id, t.id)) : [],
                                        o = s.length > 0,
                                        c = s.some((t) => (0, j.pM)(e.id, t.id));
                                    return {
                                        name: z.intl.string(z.t['/Ax2go']),
                                        description: z.intl.string(z.t.oMIexc),
                                        isDone: o && c,
                                        shouldWarn: o && !c,
                                        children: o
                                            ? (0, r.jsx)(es, {
                                                  guild: e,
                                                  roles: s
                                              })
                                            : null,
                                        clickHandler: () => {
                                            W(F.ZI.PERMISSIONS),
                                                (0, g.ZDy)(
                                                    async () => {
                                                        let { default: t } = await n.e('78704').then(n.bind(n, 560602));
                                                        return (
                                                            a(!0),
                                                            (n) =>
                                                                (0, r.jsx)(
                                                                    t,
                                                                    V(U({}, n), {
                                                                        channel: i,
                                                                        guild: e,
                                                                        permission: l,
                                                                        currentSelectedRoles: s
                                                                    })
                                                                )
                                                        );
                                                    },
                                                    {
                                                        modalKey: 'SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY',
                                                        onCloseRequest: D.VqG,
                                                        onCloseCallback: () => a(!1)
                                                    }
                                                );
                                        }
                                    };
                                })(e, o, t, l)
                            ),
                        s || i.addStep(K(t)),
                        i.addStep(J(t)),
                        i.addStep(Y(t)),
                        i.addStep(Q(a, s, null == e ? void 0 : e.id)),
                        i
                    );
                }, [t, e, o, a, l]);
            })(t, a, l, c),
            x = f.isAllDone();
        return (
            en(x, d || u || !ee(a.id), o, s),
            {
                onboardingSteps: f,
                isHidden: u,
                isDismissed: d,
                isAllDone: x
            }
        );
    },
    ed = () =>
        i.useCallback((e) => {
            var t;
            null == (t = e.clickHandler) || t.call(e);
        }, []),
    eu = (e) => {
        let { handleHide: t } = e;
        return (0, r.jsx)(g.P3F, {
            onClick: t,
            className: B.closeButton,
            'aria-label': z.intl.string(z.t.WAI6xs),
            children: (0, r.jsx)(g.Dio, {
                size: 'md',
                color: 'currentColor',
                className: B.closeIcon
            })
        });
    },
    em = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, r.jsx)(g.P3F, {
            onClick: n,
            className: B.closeButton,
            'aria-label': t ? z.intl.string(z.t.iTcumZ) : z.intl.string(z.t.dcl9MT),
            children: t
                ? (0, r.jsx)(g.dOc, {
                      size: 'xs',
                      color: 'currentColor',
                      className: B.closeIcon
                  })
                : (0, r.jsx)(g.bJT, {
                      size: 'xs',
                      color: 'currentColor',
                      className: B.closeIcon
                  })
        });
    },
    eh = (e) => {
        let { hasAnyThread: t, hasActiveThreads: n, channel: i } = e,
            { onboardingExpanded: a } = (0, L.xH)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, d.X),
            { tagFilter: s } = (0, R.H)(i.id),
            o = (0, h.e7)([O.Z], () => O.Z.getGuild(i.getGuildId())),
            m = (0, k.r_)(i),
            { transitions: f, setVisible: x } = ea(),
            b = el(a),
            j = ed(),
            S = $(i.id, x),
            {
                onboardingSteps: N,
                isDismissed: T,
                isHidden: P,
                isAllDone: I
            } = ec({
                guild: o,
                channel: i,
                hasAnyThread: t,
                handleHide: S
            }),
            E = !P && !T,
            M = (0, L.AF)(),
            Z = i.isMediaChannel(),
            F = (e) => M.getState().setOnboardingExpanded(e);
        return (er(I, E, S),
        ei({
            isAllDone: I,
            isVisible: E,
            canManageChannel: m,
            guildId: null == o ? void 0 : o.id,
            channel: i
        }),
        et(T, P, x),
        (0, p.ZP)(() => {
            (t && E) || F(!0);
        }),
        null == o)
            ? null
            : (0, _.iZ)(i)
              ? n || 0 !== s.size
                  ? s.size > 0
                      ? null
                      : (0, r.jsx)(C.Z, { guild: o })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(C.Z, { guild: o }), (0, r.jsx)(y.q, {})]
                    })
              : E && m
                ? Z
                    ? t
                        ? null
                        : (0, r.jsx)(v.Z, { channel: i })
                    : (0, r.jsx)(r.Fragment, {
                          children: f((e, t) =>
                              t
                                  ? (0, r.jsx)(c.animated.div, {
                                        style: e,
                                        className: B.container,
                                        children: (0, r.jsxs)('div', {
                                            className: B.wrapper,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: B.headerRow,
                                                    children: (0, r.jsxs)(g.y5t, {
                                                        component: (0, r.jsx)(g.X6q, {
                                                            variant: 'heading-md/semibold',
                                                            children: z.intl.string(z.t.LhlgY2)
                                                        }),
                                                        children: [
                                                            (0, r.jsx)(g.X6q, {
                                                                variant: 'heading-md/medium',
                                                                className: B.header,
                                                                children: z.intl.format(z.t['9L+8b2'], {
                                                                    numCompleted: N.completedSteps.toString(),
                                                                    numSteps: N.steps.length.toString()
                                                                })
                                                            }),
                                                            (0, r.jsxs)(g.Text, {
                                                                variant: 'text-xs/normal',
                                                                className: B.visibilityInfo,
                                                                children: [
                                                                    (0, r.jsx)(g.d3s, {
                                                                        size: 'xxs',
                                                                        color: 'currentColor',
                                                                        className: B.icon
                                                                    }),
                                                                    z.intl.string(z.t.znhX2d)
                                                                ]
                                                            }),
                                                            (0, r.jsx)(em, {
                                                                expanded: a,
                                                                onClick: () => F(!a)
                                                            }),
                                                            (0, r.jsx)(eu, { handleHide: S })
                                                        ]
                                                    })
                                                }),
                                                b((e, t) =>
                                                    t
                                                        ? (0, r.jsx)(c.animated.div, {
                                                              style: e,
                                                              className: B.listContainer,
                                                              children: (0, r.jsx)('ol', {
                                                                  className: B.checklist,
                                                                  children: N.getSteps().map((e) =>
                                                                      (0, r.jsxs)(
                                                                          g.P3F,
                                                                          {
                                                                              tag: 'li',
                                                                              'aria-label': e.name,
                                                                              onClick: () => j(e),
                                                                              className: l()(B.stepContainer, { [B.completed]: e.isDone }),
                                                                              children: [
                                                                                  e.shouldWarn
                                                                                      ? (0, r.jsx)(g.P4T, {
                                                                                            size: 'custom',
                                                                                            width: 20,
                                                                                            height: 20,
                                                                                            color: u.Z.STATUS_DANGER,
                                                                                            className: B.stepStatus
                                                                                        })
                                                                                      : e.isDone
                                                                                        ? (0, r.jsx)(g.G2e, {
                                                                                              color: u.Z.STATUS_POSITIVE_BACKGROUND,
                                                                                              icon: g.dz2,
                                                                                              style: q,
                                                                                              className: B.stepStatus
                                                                                          })
                                                                                        : (0, r.jsx)(g.G2e, {
                                                                                              disableColor: !0,
                                                                                              icon: (0, g.GSL)(w.Z),
                                                                                              style: G,
                                                                                              className: l()(B.stepStatus, B.completed)
                                                                                          }),
                                                                                  (0, r.jsxs)('div', {
                                                                                      className: B.step,
                                                                                      children: [
                                                                                          (0, r.jsx)(g.Text, {
                                                                                              variant: 'text-md/medium',
                                                                                              color: e.isDone ? 'header-secondary' : 'header-primary',
                                                                                              className: B.stepName,
                                                                                              children: e.name
                                                                                          }),
                                                                                          (0, r.jsx)(g.Text, {
                                                                                              variant: 'text-sm/normal',
                                                                                              color: 'header-secondary',
                                                                                              className: B.stepDescription,
                                                                                              children: e.description
                                                                                          }),
                                                                                          e.children
                                                                                      ]
                                                                                  }),
                                                                                  (0, r.jsx)(g.Fbu, {
                                                                                      size: 'custom',
                                                                                      color: 'currentColor',
                                                                                      width: 12,
                                                                                      className: B.stepStatus
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
                  : (0, r.jsx)(A.Z, {
                        channelName: i.name,
                        guildId: i.guild_id,
                        tagFilter: s,
                        channel: i
                    });
    };
