n.d(t, { Z: () => eg }), n(539854), n(388685), n(953529);
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
    O = n(485386),
    w = n(430824),
    S = n(186523),
    N = n(585483),
    T = n(70956),
    P = n(709054),
    I = n(961675),
    E = n(883429),
    R = n(993259),
    k = n(109434),
    M = n(456269),
    Z = n(228392),
    A = n(432771),
    L = n(538366),
    F = n(470623),
    D = n(710352),
    z = n(981631),
    B = n(388032),
    H = n(354094);
function U(e, t, n) {
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
function V(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
let q = {
        width: 28,
        height: 28
    },
    W = {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    X = (e) => {
        (0, Z.e5)({ onboardingCTA: e });
    };
class K {
    addStep(e) {
        ++this.currentIndex, this.steps.push(V({ index: this.currentIndex }, e)), e.isDone && this.completedSteps++;
    }
    getSteps() {
        return this.steps;
    }
    isAllDone() {
        return this.steps.every((e) => e.isDone);
    }
    constructor() {
        U(this, 'currentIndex', 0), U(this, 'steps', []), U(this, 'completedSteps', 0);
    }
}
let J = (e) => {
        let t = null != e.topic && e.topic.length > 0;
        return {
            name: B.intl.string(B.t.UgJu1d),
            description: B.intl.string(B.t['3C6/Gx']),
            clickHandler: () => {
                X(D.ZI.GUIDELINES), f.ZP.open(e.id, void 0, z.ZfP.TOPIC);
            },
            isDone: t
        };
    },
    Y = (e) => {
        let t = null != e.availableTags && e.availableTags.length > 0;
        return {
            name: B.intl.string(B.t.xiBFCg),
            description: B.intl.string(B.t.wCv4Oz),
            clickHandler: () => {
                X(D.ZI.TAGS),
                    f.ZP.open(e.id),
                    (0, g.ZDy)(async () => {
                        let { default: t } = await n.e('21971').then(n.bind(n, 201049));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                G(V({}, n), {
                                    channelId: e.id,
                                    guildId: e.guild_id
                                })
                            );
                    });
            },
            isDone: t
        };
    },
    Q = (e) => {
        let t = null != e.defaultReactionEmoji;
        return {
            name: B.intl.string(B.t.QlyC9v),
            description: B.intl.string(B.t['+50LJi']),
            clickHandler: () => {
                X(D.ZI.DEFAULT_REACTION),
                    (0, g.ZDy)(async () => {
                        let { default: t } = await n.e('80404').then(n.bind(n, 158586));
                        return (n) => (0, r.jsx)(t, G(V({}, n), { channel: e }));
                    });
            },
            isDone: t
        };
    },
    $ = (e, t, i) => ({
        name: B.intl.string(B.t['6A0O6+']),
        description: t
            ? B.intl.string(B.t['8hI5vr'])
            : B.intl.format(B.t.ysxcAw, {
                  onClick: (e) => {
                      null != i &&
                          (e.preventDefault(),
                          e.stopPropagation(),
                          (0, Z.qz)(),
                          (0, g.ZDy)(async () => {
                              let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                              return (t) => (0, r.jsx)(e, G(V({}, t), { guildId: i }));
                          }));
                  }
              }),
        clickHandler: () => {
            X(D.ZI.CREATE_POST), N.S.dispatch(z.CkL.FOCUS_COMPOSER_TITLE);
        },
        isDone: e
    }),
    ee = (e, t) => i.useCallback(() => (t(!1), E.Z.hideAdminOnboarding(e, !0)), [e, t]),
    et = (e) => {
        let t = P.default.extractTimestamp(e);
        return o()().isBefore(o()(t).add(o().duration(15, 'days')));
    },
    en = (e, t, n) => {
        i.useEffect(() => {
            e || n(!t);
        }, [e, n, t]);
    },
    er = (e, t, n, r) => {
        let a = i.useRef(0);
        i.useEffect(
            () => (
                n || !e || t
                    ? clearTimeout(a.current)
                    : (a.current = setTimeout(() => {
                          r();
                      }, 60 * T.Z.Millis.SECOND)),
                () => clearTimeout(a.current)
            ),
            [e, t, r, n]
        );
    },
    ei = (e, t, n) => {
        (0, p.ZP)(() => {
            e && t && n();
        });
    },
    ea = (e) => {
        let { isAllDone: t, isVisible: n, canManageChannel: r, guildId: a, channel: l } = e,
            s = (0, h.e7)([O.Z], () => (null != a ? O.Z.getRoles(a) : void 0)),
            o = i.useCallback(() => {
                N.S.dispatch(z.CkL.REMEASURE_TARGET);
            }, []);
        i.useEffect(() => {
            o();
        }, [o, t, n, r, s, l.id, l.permissionOverwrites]);
    },
    el = () => {
        let [e, t] = i.useState(!0);
        return {
            transitions: (0, g.Yzy)(e, {
                keys: (e) => (e ? 'shown' : 'hidden'),
                config: ec,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                unique: !0
            }),
            setVisible: t
        };
    },
    es = (e) =>
        (0, g.Yzy)(e, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 }
        }),
    eo = (e) => {
        let { guild: t, roles: n } = e;
        return (0, r.jsx)('div', {
            className: H.rolesList,
            'aria-label': B.intl.formatToPlainString(B.t.PCs0oq, { numRoles: n.length }),
            children: n.map((e) =>
                (0, r.jsx)(
                    x.UB,
                    {
                        role: e,
                        canRemove: !1,
                        onRemove: z.VqG,
                        guildId: t.id,
                        className: H.rolePill
                    },
                    e.id
                )
            )
        });
    },
    ec = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    ed = (e) => {
        let { guild: t, channel: a, hasAnyThread: l, handleHide: s } = e,
            [o, c] = i.useState(!1),
            d = (0, A.c)(a.id),
            u = (0, h.e7)([I.Z], () => I.Z.hasHidden(a.id)),
            f = (function (e, t, a, l) {
                let s = null == e ? void 0 : e.id,
                    o = (0, h.e7)([O.Z], () => (null != s ? O.Z.getRoles(s) : void 0));
                return i.useMemo(() => {
                    let i = new K(),
                        s = (null == t ? void 0 : t.isMediaChannel()) === !0;
                    return (
                        null == e ||
                            null == t ||
                            s ||
                            null == o ||
                            i.addStep(
                                (function (e, t, i, a) {
                                    let l = (0, b.Z)(i) ? m.$e(z.Plq.VIEW_CHANNEL, z.Plq.SEND_MESSAGES) : z.Plq.SEND_MESSAGES,
                                        s = null != e ? (0, R.E$)(e, t, i, l).filter((t) => i.permissionOverwrites.hasOwnProperty(t.id) || (0, j.pM)(e.id, t.id)) : [],
                                        o = s.length > 0,
                                        c = s.some((t) => (0, j.pM)(e.id, t.id));
                                    return {
                                        name: B.intl.string(B.t['/Ax2go']),
                                        description: B.intl.string(B.t.oMIexc),
                                        isDone: o && c,
                                        shouldWarn: o && !c,
                                        children: o
                                            ? (0, r.jsx)(eo, {
                                                  guild: e,
                                                  roles: s
                                              })
                                            : null,
                                        clickHandler: () => {
                                            X(D.ZI.PERMISSIONS),
                                                (0, g.ZDy)(
                                                    async () => {
                                                        let { default: t } = await n.e('78704').then(n.bind(n, 560602));
                                                        return (
                                                            a(!0),
                                                            (n) =>
                                                                (0, r.jsx)(
                                                                    t,
                                                                    G(V({}, n), {
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
                                                        onCloseRequest: z.VqG,
                                                        onCloseCallback: () => a(!1)
                                                    }
                                                );
                                        }
                                    };
                                })(e, o, t, l)
                            ),
                        s || i.addStep(J(t)),
                        i.addStep(Y(t)),
                        i.addStep(Q(t)),
                        i.addStep($(a, s, null == e ? void 0 : e.id)),
                        i
                    );
                }, [t, e, o, a, l]);
            })(t, a, l, c),
            x = f.isAllDone();
        return (
            er(x, d || u || !et(a.id), o, s),
            {
                onboardingSteps: f,
                isHidden: u,
                isDismissed: d,
                isAllDone: x
            }
        );
    },
    eu = () =>
        i.useCallback((e) => {
            var t;
            null == (t = e.clickHandler) || t.call(e);
        }, []),
    em = (e) => {
        let { handleHide: t } = e;
        return (0, r.jsx)(g.P3F, {
            onClick: t,
            className: H.closeButton,
            'aria-label': B.intl.string(B.t.WAI6xs),
            children: (0, r.jsx)(g.Dio, {
                size: 'md',
                color: 'currentColor',
                className: H.closeIcon
            })
        });
    },
    eh = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, r.jsx)(g.P3F, {
            onClick: n,
            className: H.closeButton,
            'aria-label': t ? B.intl.string(B.t.iTcumZ) : B.intl.string(B.t.dcl9MT),
            children: t
                ? (0, r.jsx)(g.dOc, {
                      size: 'xs',
                      color: 'currentColor',
                      className: H.closeIcon
                  })
                : (0, r.jsx)(g.bJT, {
                      size: 'xs',
                      color: 'currentColor',
                      className: H.closeIcon
                  })
        });
    },
    eg = (e) => {
        let { hasAnyThread: t, hasActiveThreads: n, channel: i } = e,
            { onboardingExpanded: a } = (0, F.xH)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, d.X),
            { tagFilter: s } = (0, k.H)(i.id),
            o = (0, h.e7)([w.Z], () => w.Z.getGuild(i.getGuildId())),
            m = (0, M.r_)(i),
            { transitions: f, setVisible: x } = el(),
            b = es(a),
            j = eu(),
            O = ee(i.id, x),
            {
                onboardingSteps: N,
                isDismissed: T,
                isHidden: P,
                isAllDone: I
            } = ed({
                guild: o,
                channel: i,
                hasAnyThread: t,
                handleHide: O
            }),
            E = !P && !T,
            R = (0, F.AF)(),
            Z = i.isMediaChannel(),
            A = (e) => R.getState().setOnboardingExpanded(e);
        return (ei(I, E, O),
        ea({
            isAllDone: I,
            isVisible: E,
            canManageChannel: m,
            guildId: null == o ? void 0 : o.id,
            channel: i
        }),
        en(T, P, x),
        (0, p.ZP)(() => {
            (t && E) || A(!0);
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
                                        className: H.container,
                                        children: (0, r.jsxs)('div', {
                                            className: H.wrapper,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: H.headerRow,
                                                    children: (0, r.jsxs)(g.y5t, {
                                                        component: (0, r.jsx)(g.X6q, {
                                                            variant: 'heading-md/semibold',
                                                            children: B.intl.string(B.t.LhlgY2)
                                                        }),
                                                        children: [
                                                            (0, r.jsx)(g.X6q, {
                                                                variant: 'heading-md/medium',
                                                                className: H.header,
                                                                children: B.intl.format(B.t['9L+8b2'], {
                                                                    numCompleted: N.completedSteps.toString(),
                                                                    numSteps: N.steps.length.toString()
                                                                })
                                                            }),
                                                            (0, r.jsxs)(g.Text, {
                                                                variant: 'text-xs/normal',
                                                                className: H.visibilityInfo,
                                                                children: [
                                                                    (0, r.jsx)(g.d3s, {
                                                                        size: 'xxs',
                                                                        color: 'currentColor',
                                                                        className: H.icon
                                                                    }),
                                                                    B.intl.string(B.t.znhX2d)
                                                                ]
                                                            }),
                                                            (0, r.jsx)(eh, {
                                                                expanded: a,
                                                                onClick: () => A(!a)
                                                            }),
                                                            (0, r.jsx)(em, { handleHide: O })
                                                        ]
                                                    })
                                                }),
                                                b((e, t) =>
                                                    t
                                                        ? (0, r.jsx)(c.animated.div, {
                                                              style: e,
                                                              className: H.listContainer,
                                                              children: (0, r.jsx)('ol', {
                                                                  className: H.checklist,
                                                                  children: N.getSteps().map((e) =>
                                                                      (0, r.jsxs)(
                                                                          g.P3F,
                                                                          {
                                                                              tag: 'li',
                                                                              'aria-label': e.name,
                                                                              onClick: () => j(e),
                                                                              className: l()(H.stepContainer, { [H.completed]: e.isDone }),
                                                                              children: [
                                                                                  e.shouldWarn
                                                                                      ? (0, r.jsx)(g.P4T, {
                                                                                            size: 'custom',
                                                                                            width: 20,
                                                                                            height: 20,
                                                                                            color: u.Z.STATUS_DANGER,
                                                                                            className: H.stepStatus
                                                                                        })
                                                                                      : e.isDone
                                                                                        ? (0, r.jsx)(g.G2e, {
                                                                                              color: u.Z.STATUS_POSITIVE_BACKGROUND,
                                                                                              icon: g.dz2,
                                                                                              style: W,
                                                                                              className: H.stepStatus
                                                                                          })
                                                                                        : (0, r.jsx)(g.G2e, {
                                                                                              disableColor: !0,
                                                                                              icon: (0, g.GSL)(S.Z),
                                                                                              style: q,
                                                                                              className: l()(H.stepStatus, H.completed)
                                                                                          }),
                                                                                  (0, r.jsxs)('div', {
                                                                                      className: H.step,
                                                                                      children: [
                                                                                          (0, r.jsx)(g.Text, {
                                                                                              variant: 'text-md/medium',
                                                                                              color: e.isDone ? 'header-secondary' : 'header-primary',
                                                                                              className: H.stepName,
                                                                                              children: e.name
                                                                                          }),
                                                                                          (0, r.jsx)(g.Text, {
                                                                                              variant: 'text-sm/normal',
                                                                                              color: 'header-secondary',
                                                                                              className: H.stepDescription,
                                                                                              children: e.description
                                                                                          }),
                                                                                          e.children
                                                                                      ]
                                                                                  }),
                                                                                  (0, r.jsx)(g.Fbu, {
                                                                                      size: 'custom',
                                                                                      color: 'currentColor',
                                                                                      width: 12,
                                                                                      className: H.stepStatus
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
                  : (0, r.jsx)(L.Z, {
                        channelName: i.name,
                        guildId: i.guild_id,
                        tagFilter: s,
                        channel: i
                    });
    };
