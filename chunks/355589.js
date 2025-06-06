n.d(t, { Z: () => em }), n(539854), n(388685), n(953529);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(913527),
    o = n.n(s),
    c = n(386230),
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
    C = n(982168),
    _ = n(474366),
    y = n(430824),
    O = n(186523),
    w = n(585483),
    S = n(70956),
    N = n(709054),
    P = n(961675),
    T = n(883429),
    I = n(993259),
    E = n(109434),
    R = n(456269),
    k = n(228392),
    Z = n(432771),
    M = n(538366),
    A = n(470623),
    L = n(710352),
    F = n(981631),
    D = n(388032),
    z = n(354094);
function B(e, t, n) {
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
function H(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
let V = {
        width: 28,
        height: 28
    },
    G = {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    q = (e) => {
        (0, k.e5)({ onboardingCTA: e });
    };
class W {
    addStep(e) {
        ++this.currentIndex, this.steps.push(H({ index: this.currentIndex }, e)), e.isDone && this.completedSteps++;
    }
    getSteps() {
        return this.steps;
    }
    isAllDone() {
        return this.steps.every((e) => e.isDone);
    }
    constructor() {
        B(this, 'currentIndex', 0), B(this, 'steps', []), B(this, 'completedSteps', 0);
    }
}
let X = (e) => {
        let t = null != e.topic && e.topic.length > 0;
        return {
            name: D.intl.string(D.t.UgJu1d),
            description: D.intl.string(D.t['3C6/Gx']),
            clickHandler: () => {
                q(L.ZI.GUIDELINES), f.ZP.open(e.id, void 0, F.ZfP.TOPIC);
            },
            isDone: t
        };
    },
    K = (e) => {
        let t = null != e.availableTags && e.availableTags.length > 0;
        return {
            name: D.intl.string(D.t.xiBFCg),
            description: D.intl.string(D.t.wCv4Oz),
            clickHandler: () => {
                q(L.ZI.TAGS),
                    f.ZP.open(e.id),
                    (0, g.ZDy)(async () => {
                        let { default: t } = await n.e('21971').then(n.bind(n, 201049));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                U(H({}, n), {
                                    channelId: e.id,
                                    guildId: e.guild_id
                                })
                            );
                    });
            },
            isDone: t
        };
    },
    J = (e) => {
        let t = null != e.defaultReactionEmoji;
        return {
            name: D.intl.string(D.t.QlyC9v),
            description: D.intl.string(D.t['+50LJi']),
            clickHandler: () => {
                q(L.ZI.DEFAULT_REACTION),
                    (0, g.ZDy)(async () => {
                        let { default: t } = await n.e('80404').then(n.bind(n, 158586));
                        return (n) => (0, r.jsx)(t, U(H({}, n), { channel: e }));
                    });
            },
            isDone: t
        };
    },
    Y = (e, t, l) => ({
        name: D.intl.string(D.t['6A0O6+']),
        description: t
            ? D.intl.string(D.t['8hI5vr'])
            : D.intl.format(D.t.ysxcAw, {
                  onClick: (e) => {
                      null != l &&
                          (e.preventDefault(),
                          e.stopPropagation(),
                          (0, k.qz)(),
                          (0, g.ZDy)(async () => {
                              let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                              return (t) => (0, r.jsx)(e, U(H({}, t), { guildId: l }));
                          }));
                  }
              }),
        clickHandler: () => {
            q(L.ZI.CREATE_POST), w.S.dispatch(F.CkL.FOCUS_COMPOSER_TITLE);
        },
        isDone: e
    }),
    Q = (e, t) => l.useCallback(() => (t(!1), T.Z.hideAdminOnboarding(e, !0)), [e, t]),
    $ = (e) => {
        let t = N.default.extractTimestamp(e);
        return o()().isBefore(o()(t).add(o().duration(15, 'days')));
    },
    ee = (e, t, n) => {
        l.useEffect(() => {
            e || n(!t);
        }, [e, n, t]);
    },
    et = (e, t, n, r) => {
        let i = l.useRef(0);
        l.useEffect(
            () => (
                n || !e || t
                    ? clearTimeout(i.current)
                    : (i.current = setTimeout(() => {
                          r();
                      }, 60 * S.Z.Millis.SECOND)),
                () => clearTimeout(i.current)
            ),
            [e, t, r, n]
        );
    },
    en = (e, t, n) => {
        (0, p.ZP)(() => {
            e && t && n();
        });
    },
    er = (e) => {
        let { isAllDone: t, isVisible: n, canManageChannel: r, guildId: i, channel: a } = e,
            s = (0, h.e7)([y.Z], () => (null != i ? y.Z.getRoles(i) : void 0)),
            o = l.useCallback(() => {
                w.S.dispatch(F.CkL.REMEASURE_TARGET);
            }, []);
        l.useEffect(() => {
            o();
        }, [o, t, n, r, s, a.id, a.permissionOverwrites]);
    },
    el = () => {
        let [e, t] = l.useState(!0);
        return {
            transitions: (0, g.Yzy)(e, {
                keys: (e) => (e ? 'shown' : 'hidden'),
                config: es,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                unique: !0
            }),
            setVisible: t
        };
    },
    ei = (e) =>
        (0, g.Yzy)(e, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 }
        }),
    ea = (e) => {
        let { guild: t, roles: n } = e;
        return (0, r.jsx)('div', {
            className: z.rolesList,
            'aria-label': D.intl.formatToPlainString(D.t.PCs0oq, { numRoles: n.length }),
            children: n.map((e) =>
                (0, r.jsx)(
                    x.UB,
                    {
                        role: e,
                        canRemove: !1,
                        onRemove: F.VqG,
                        guildId: t.id,
                        className: z.rolePill
                    },
                    e.id
                )
            )
        });
    },
    es = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    eo = (e) => {
        let { guild: t, channel: i, hasAnyThread: a, handleHide: s } = e,
            [o, c] = l.useState(!1),
            d = (0, Z.c)(i.id),
            u = (0, h.e7)([P.Z], () => P.Z.hasHidden(i.id)),
            f = (function (e, t, i, a) {
                let s = null == e ? void 0 : e.id,
                    o = (0, h.e7)([y.Z], () => (null != s ? y.Z.getRoles(s) : void 0));
                return l.useMemo(() => {
                    let l = new W(),
                        s = (null == t ? void 0 : t.isMediaChannel()) === !0;
                    return (
                        null == e ||
                            null == t ||
                            s ||
                            null == o ||
                            l.addStep(
                                (function (e, t, l, i) {
                                    let a = (0, b.Z)(l) ? m.$e(F.Plq.VIEW_CHANNEL, F.Plq.SEND_MESSAGES) : F.Plq.SEND_MESSAGES,
                                        s = null != e ? (0, I.E$)(e, t, l, a).filter((t) => l.permissionOverwrites.hasOwnProperty(t.id) || (0, j.pM)(e.id, t.id)) : [],
                                        o = s.length > 0,
                                        c = s.some((t) => (0, j.pM)(e.id, t.id));
                                    return {
                                        name: D.intl.string(D.t['/Ax2go']),
                                        description: D.intl.string(D.t.oMIexc),
                                        isDone: o && c,
                                        shouldWarn: o && !c,
                                        children: o
                                            ? (0, r.jsx)(ea, {
                                                  guild: e,
                                                  roles: s
                                              })
                                            : null,
                                        clickHandler: () => {
                                            q(L.ZI.PERMISSIONS),
                                                (0, g.ZDy)(
                                                    async () => {
                                                        let { default: t } = await n.e('78704').then(n.bind(n, 560602));
                                                        return (
                                                            i(!0),
                                                            (n) =>
                                                                (0, r.jsx)(
                                                                    t,
                                                                    U(H({}, n), {
                                                                        channel: l,
                                                                        guild: e,
                                                                        permission: a,
                                                                        currentSelectedRoles: s
                                                                    })
                                                                )
                                                        );
                                                    },
                                                    {
                                                        modalKey: 'SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY',
                                                        onCloseRequest: F.VqG,
                                                        onCloseCallback: () => i(!1)
                                                    }
                                                );
                                        }
                                    };
                                })(e, o, t, a)
                            ),
                        s || l.addStep(X(t)),
                        l.addStep(K(t)),
                        l.addStep(J(t)),
                        l.addStep(Y(i, s, null == e ? void 0 : e.id)),
                        l
                    );
                }, [t, e, o, i, a]);
            })(t, i, a, c),
            x = f.isAllDone();
        return (
            et(x, d || u || !$(i.id), o, s),
            {
                onboardingSteps: f,
                isHidden: u,
                isDismissed: d,
                isAllDone: x
            }
        );
    },
    ec = () =>
        l.useCallback((e) => {
            var t;
            null == (t = e.clickHandler) || t.call(e);
        }, []),
    ed = (e) => {
        let { handleHide: t } = e;
        return (0, r.jsx)(g.P3F, {
            onClick: t,
            className: z.closeButton,
            'aria-label': D.intl.string(D.t.WAI6xs),
            children: (0, r.jsx)(g.Dio, {
                size: 'md',
                color: 'currentColor',
                className: z.closeIcon
            })
        });
    },
    eu = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, r.jsx)(g.P3F, {
            onClick: n,
            className: z.closeButton,
            'aria-label': t ? D.intl.string(D.t.iTcumZ) : D.intl.string(D.t.dcl9MT),
            children: t
                ? (0, r.jsx)(g.dOc, {
                      size: 'xs',
                      color: 'currentColor',
                      className: z.closeIcon
                  })
                : (0, r.jsx)(g.bJT, {
                      size: 'xs',
                      color: 'currentColor',
                      className: z.closeIcon
                  })
        });
    },
    em = (e) => {
        let { hasAnyThread: t, hasActiveThreads: n, channel: l } = e,
            { onboardingExpanded: i } = (0, A.xH)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, d.X),
            { tagFilter: s } = (0, E.H)(l.id),
            o = (0, h.e7)([y.Z], () => y.Z.getGuild(l.getGuildId())),
            m = (0, R.r_)(l),
            { transitions: f, setVisible: x } = el(),
            b = ei(i),
            j = ec(),
            w = Q(l.id, x),
            {
                onboardingSteps: S,
                isDismissed: N,
                isHidden: P,
                isAllDone: T
            } = eo({
                guild: o,
                channel: l,
                hasAnyThread: t,
                handleHide: w
            }),
            I = !P && !N,
            k = (0, A.AF)(),
            Z = l.isMediaChannel(),
            L = (e) => k.getState().setOnboardingExpanded(e);
        return (en(T, I, w),
        er({
            isAllDone: T,
            isVisible: I,
            canManageChannel: m,
            guildId: null == o ? void 0 : o.id,
            channel: l
        }),
        ee(N, P, x),
        (0, p.ZP)(() => {
            (t && I) || L(!0);
        }),
        null == o)
            ? null
            : (0, C.iZ)(l)
              ? n || s.size > 0
                  ? null
                  : (0, r.jsx)(_.q, {})
              : I && m
                ? Z
                    ? t
                        ? null
                        : (0, r.jsx)(v.Z, { channel: l })
                    : (0, r.jsx)(r.Fragment, {
                          children: f((e, t) =>
                              t
                                  ? (0, r.jsx)(c.animated.div, {
                                        style: e,
                                        className: z.container,
                                        children: (0, r.jsxs)('div', {
                                            className: z.wrapper,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: z.headerRow,
                                                    children: (0, r.jsxs)(g.y5t, {
                                                        component: (0, r.jsx)(g.X6q, {
                                                            variant: 'heading-md/semibold',
                                                            children: D.intl.string(D.t.LhlgY2)
                                                        }),
                                                        children: [
                                                            (0, r.jsx)(g.X6q, {
                                                                variant: 'heading-md/medium',
                                                                className: z.header,
                                                                children: D.intl.format(D.t['9L+8b2'], {
                                                                    numCompleted: S.completedSteps.toString(),
                                                                    numSteps: S.steps.length.toString()
                                                                })
                                                            }),
                                                            (0, r.jsxs)(g.Text, {
                                                                variant: 'text-xs/normal',
                                                                className: z.visibilityInfo,
                                                                children: [
                                                                    (0, r.jsx)(g.d3s, {
                                                                        size: 'xxs',
                                                                        color: 'currentColor',
                                                                        className: z.icon
                                                                    }),
                                                                    D.intl.string(D.t.znhX2d)
                                                                ]
                                                            }),
                                                            (0, r.jsx)(eu, {
                                                                expanded: i,
                                                                onClick: () => L(!i)
                                                            }),
                                                            (0, r.jsx)(ed, { handleHide: w })
                                                        ]
                                                    })
                                                }),
                                                b((e, t) =>
                                                    t
                                                        ? (0, r.jsx)(c.animated.div, {
                                                              style: e,
                                                              className: z.listContainer,
                                                              children: (0, r.jsx)('ol', {
                                                                  className: z.checklist,
                                                                  children: S.getSteps().map((e) =>
                                                                      (0, r.jsxs)(
                                                                          g.P3F,
                                                                          {
                                                                              tag: 'li',
                                                                              'aria-label': e.name,
                                                                              onClick: () => j(e),
                                                                              className: a()(z.stepContainer, { [z.completed]: e.isDone }),
                                                                              children: [
                                                                                  e.shouldWarn
                                                                                      ? (0, r.jsx)(g.P4T, {
                                                                                            size: 'custom',
                                                                                            width: 20,
                                                                                            height: 20,
                                                                                            color: u.Z.STATUS_DANGER,
                                                                                            className: z.stepStatus
                                                                                        })
                                                                                      : e.isDone
                                                                                        ? (0, r.jsx)(g.G2e, {
                                                                                              color: u.Z.STATUS_POSITIVE_BACKGROUND,
                                                                                              icon: g.dz2,
                                                                                              style: G,
                                                                                              className: z.stepStatus
                                                                                          })
                                                                                        : (0, r.jsx)(g.G2e, {
                                                                                              disableColor: !0,
                                                                                              icon: (0, g.GSL)(O.Z),
                                                                                              style: V,
                                                                                              className: a()(z.stepStatus, z.completed)
                                                                                          }),
                                                                                  (0, r.jsxs)('div', {
                                                                                      className: z.step,
                                                                                      children: [
                                                                                          (0, r.jsx)(g.Text, {
                                                                                              variant: 'text-md/medium',
                                                                                              color: e.isDone ? 'header-secondary' : 'header-primary',
                                                                                              className: z.stepName,
                                                                                              children: e.name
                                                                                          }),
                                                                                          (0, r.jsx)(g.Text, {
                                                                                              variant: 'text-sm/normal',
                                                                                              color: 'header-secondary',
                                                                                              className: z.stepDescription,
                                                                                              children: e.description
                                                                                          }),
                                                                                          e.children
                                                                                      ]
                                                                                  }),
                                                                                  (0, r.jsx)(g.Fbu, {
                                                                                      size: 'custom',
                                                                                      color: 'currentColor',
                                                                                      width: 12,
                                                                                      className: z.stepStatus
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
                  : (0, r.jsx)(M.Z, {
                        channelName: l.name,
                        guildId: l.guild_id,
                        tagFilter: s,
                        channel: l
                    });
    };
