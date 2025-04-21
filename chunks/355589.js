n.d(t, { Z: () => ed }), n(539854), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(200100),
    d = n(359959),
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
    O = n(70956),
    w = n(709054),
    S = n(961675),
    P = n(883429),
    N = n(993259),
    T = n(109434),
    I = n(456269),
    E = n(228392),
    k = n(432771),
    R = n(538366),
    Z = n(470623),
    M = n(710352),
    A = n(981631),
    L = n(388032),
    F = n(354094);
function D(e, t, n) {
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
function z(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
let H = {
        width: 28,
        height: 28
    },
    U = {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    V = (e) => {
        (0, E.e5)({ onboardingCTA: e });
    };
class G {
    addStep(e) {
        ++this.currentIndex, this.steps.push(z({ index: this.currentIndex }, e)), e.isDone && this.completedSteps++;
    }
    getSteps() {
        return this.steps;
    }
    isAllDone() {
        return this.steps.every((e) => e.isDone);
    }
    constructor() {
        D(this, 'currentIndex', 0), D(this, 'steps', []), D(this, 'completedSteps', 0);
    }
}
let q = (e) => {
        let t = null != e.topic && e.topic.length > 0;
        return {
            name: L.intl.string(L.t.UgJu1d),
            description: L.intl.string(L.t['3C6/Gx']),
            clickHandler: () => {
                V(M.ZI.GUIDELINES), f.ZP.open(e.id, void 0, A.ZfP.TOPIC);
            },
            isDone: t
        };
    },
    X = (e) => {
        let t = null != e.availableTags && e.availableTags.length > 0;
        return {
            name: L.intl.string(L.t.xiBFCg),
            description: L.intl.string(L.t.wCv4Oz),
            clickHandler: () => {
                V(M.ZI.TAGS),
                    f.ZP.open(e.id),
                    (0, g.ZDy)(async () => {
                        let { default: t } = await n.e('21971').then(n.bind(n, 201049));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                B(z({}, n), {
                                    channelId: e.id,
                                    guildId: e.guild_id
                                })
                            );
                    });
            },
            isDone: t
        };
    },
    W = (e) => {
        let t = null != e.defaultReactionEmoji;
        return {
            name: L.intl.string(L.t.QlyC9v),
            description: L.intl.string(L.t['+50LJi']),
            clickHandler: () => {
                V(M.ZI.DEFAULT_REACTION),
                    (0, g.ZDy)(async () => {
                        let { default: t } = await n.e('80404').then(n.bind(n, 158586));
                        return (n) => (0, r.jsx)(t, B(z({}, n), { channel: e }));
                    });
            },
            isDone: t
        };
    },
    K = (e, t, i) => ({
        name: L.intl.string(L.t['6A0O6+']),
        description: t
            ? L.intl.string(L.t['8hI5vr'])
            : L.intl.format(L.t.ysxcAw, {
                  onClick: (e) => {
                      null != i &&
                          (e.preventDefault(),
                          e.stopPropagation(),
                          (0, E.qz)(),
                          (0, g.ZDy)(async () => {
                              let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                              return (t) => (0, r.jsx)(e, B(z({}, t), { guildId: i }));
                          }));
                  }
              }),
        clickHandler: () => {
            V(M.ZI.CREATE_POST), y.S.dispatch(A.CkL.FOCUS_COMPOSER_TITLE);
        },
        isDone: e
    }),
    J = (e, t) => i.useCallback(() => (t(!1), P.Z.hideAdminOnboarding(e, !0)), [e, t]),
    Y = (e) => {
        let t = w.default.extractTimestamp(e);
        return o()().isBefore(o()(t).add(o().duration(15, 'days')));
    },
    Q = (e, t, n) => {
        i.useEffect(() => {
            e || n(!t);
        }, [e, n, t]);
    },
    $ = (e, t, n, r) => {
        let l = i.useRef(0);
        i.useEffect(
            () => (
                n || !e || t
                    ? clearTimeout(l.current)
                    : (l.current = setTimeout(() => {
                          r();
                      }, 60 * O.Z.Millis.SECOND)),
                () => clearTimeout(l.current)
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
        let { isAllDone: t, isVisible: n, canManageChannel: r, guildId: l, channel: a } = e,
            s = (0, h.e7)([C.Z], () => (null != l ? C.Z.getRoles(l) : void 0)),
            o = i.useCallback(() => {
                y.S.dispatch(A.CkL.REMEASURE_TARGET);
            }, []);
        i.useEffect(() => {
            o();
        }, [o, t, n, r, s, a.id, a.permissionOverwrites]);
    },
    en = () => {
        let [e, t] = i.useState(!0);
        return {
            transitions: (0, g.Yzy)(e, {
                keys: (e) => (e ? 'shown' : 'hidden'),
                config: el,
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
    ei = (e) => {
        let { guild: t, roles: n } = e;
        return (0, r.jsx)('div', {
            className: F.rolesList,
            'aria-label': L.intl.formatToPlainString(L.t.PCs0oq, { numRoles: n.length }),
            children: n.map((e) =>
                (0, r.jsx)(
                    p.UB,
                    {
                        role: e,
                        canRemove: !1,
                        onRemove: A.VqG,
                        guildId: t.id,
                        className: F.rolePill
                    },
                    e.id
                )
            )
        });
    },
    el = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    ea = (e) => {
        let { guild: t, channel: l, hasAnyThread: a, handleHide: s } = e,
            [o, c] = i.useState(!1),
            d = (0, k.c)(l.id),
            u = (0, h.e7)([S.Z], () => S.Z.hasHidden(l.id)),
            f = (function (e, t, l, a) {
                let s = null == e ? void 0 : e.id,
                    o = (0, h.e7)([C.Z], () => (null != s ? C.Z.getRoles(s) : void 0));
                return i.useMemo(() => {
                    let i = new G(),
                        s = (null == t ? void 0 : t.isMediaChannel()) === !0;
                    return (
                        null == e ||
                            null == t ||
                            s ||
                            null == o ||
                            i.addStep(
                                (function (e, t, i, l) {
                                    let a = (0, b.Z)(i) ? m.$e(A.Plq.VIEW_CHANNEL, A.Plq.SEND_MESSAGES) : A.Plq.SEND_MESSAGES,
                                        s = null != e ? (0, N.E$)(e, t, i, a).filter((t) => i.permissionOverwrites.hasOwnProperty(t.id) || (0, j.pM)(e.id, t.id)) : [],
                                        o = s.length > 0,
                                        c = s.some((t) => (0, j.pM)(e.id, t.id));
                                    return {
                                        name: L.intl.string(L.t['/Ax2go']),
                                        description: L.intl.string(L.t.oMIexc),
                                        isDone: o && c,
                                        shouldWarn: o && !c,
                                        children: o
                                            ? (0, r.jsx)(ei, {
                                                  guild: e,
                                                  roles: s
                                              })
                                            : null,
                                        clickHandler: () => {
                                            V(M.ZI.PERMISSIONS),
                                                (0, g.ZDy)(
                                                    async () => {
                                                        let { default: t } = await n.e('78704').then(n.bind(n, 560602));
                                                        return (
                                                            l(!0),
                                                            (n) =>
                                                                (0, r.jsx)(
                                                                    t,
                                                                    B(z({}, n), {
                                                                        channel: i,
                                                                        guild: e,
                                                                        permission: a,
                                                                        currentSelectedRoles: s
                                                                    })
                                                                )
                                                        );
                                                    },
                                                    {
                                                        modalKey: 'SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY',
                                                        onCloseRequest: A.VqG,
                                                        onCloseCallback: () => l(!1)
                                                    }
                                                );
                                        }
                                    };
                                })(e, o, t, a)
                            ),
                        s || i.addStep(q(t)),
                        i.addStep(X(t)),
                        i.addStep(W(t)),
                        i.addStep(K(l, s, null == e ? void 0 : e.id)),
                        i
                    );
                }, [t, e, o, l, a]);
            })(t, l, a, c),
            p = f.isAllDone();
        return (
            $(p, d || u || !Y(l.id), o, s),
            {
                onboardingSteps: f,
                isHidden: u,
                isDismissed: d,
                isAllDone: p
            }
        );
    },
    es = () =>
        i.useCallback((e) => {
            var t;
            null == (t = e.clickHandler) || t.call(e);
        }, []),
    eo = (e) => {
        let { handleHide: t } = e;
        return (0, r.jsx)(g.P3F, {
            onClick: t,
            className: F.closeButton,
            'aria-label': L.intl.string(L.t.WAI6xs),
            children: (0, r.jsx)(g.Dio, {
                size: 'md',
                color: 'currentColor',
                className: F.closeIcon
            })
        });
    },
    ec = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, r.jsx)(g.P3F, {
            onClick: n,
            className: F.closeButton,
            'aria-label': t ? L.intl.string(L.t.iTcumZ) : L.intl.string(L.t.dcl9MT),
            children: t
                ? (0, r.jsx)(g.dOc, {
                      size: 'xs',
                      color: 'currentColor',
                      className: F.closeIcon
                  })
                : (0, r.jsx)(g.bJT, {
                      size: 'xs',
                      color: 'currentColor',
                      className: F.closeIcon
                  })
        });
    },
    ed = (e) => {
        let { hasAnyThread: t, channel: n } = e,
            { onboardingExpanded: i } = (0, Z.xH)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, d.X),
            { tagFilter: l } = (0, T.H)(n.id),
            s = (0, h.e7)([C.Z], () => C.Z.getGuild(n.getGuildId())),
            o = (0, I.r_)(n),
            { transitions: m, setVisible: f } = en(),
            p = er(i),
            b = es(),
            j = J(n.id, f),
            {
                onboardingSteps: y,
                isDismissed: O,
                isHidden: w,
                isAllDone: S
            } = ea({
                guild: s,
                channel: n,
                hasAnyThread: t,
                handleHide: j
            }),
            P = !w && !O,
            N = (0, Z.AF)(),
            E = n.isMediaChannel(),
            k = (e) => N.getState().setOnboardingExpanded(e);
        return (ee(S, P, j),
        et({
            isAllDone: S,
            isVisible: P,
            canManageChannel: o,
            guildId: null == s ? void 0 : s.id,
            channel: n
        }),
        Q(O, w, f),
        (0, x.ZP)(() => {
            (t && P) || k(!0);
        }),
        null == s)
            ? null
            : P && o
              ? E
                  ? t
                      ? null
                      : (0, r.jsx)(v.Z, { channel: n })
                  : (0, r.jsx)(r.Fragment, {
                        children: m((e, t) =>
                            t
                                ? (0, r.jsx)(c.animated.div, {
                                      style: e,
                                      className: F.container,
                                      children: (0, r.jsxs)('div', {
                                          className: F.wrapper,
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: F.headerRow,
                                                  children: (0, r.jsxs)(g.y5t, {
                                                      component: (0, r.jsx)(g.X6q, {
                                                          variant: 'heading-md/semibold',
                                                          children: L.intl.string(L.t.LhlgY2)
                                                      }),
                                                      children: [
                                                          (0, r.jsx)(g.X6q, {
                                                              variant: 'heading-md/medium',
                                                              className: F.header,
                                                              children: L.intl.format(L.t['9L+8b2'], {
                                                                  numCompleted: y.completedSteps.toString(),
                                                                  numSteps: y.steps.length.toString()
                                                              })
                                                          }),
                                                          (0, r.jsxs)(g.Text, {
                                                              variant: 'text-xs/normal',
                                                              className: F.visibilityInfo,
                                                              children: [
                                                                  (0, r.jsx)(g.d3s, {
                                                                      size: 'xxs',
                                                                      color: 'currentColor',
                                                                      className: F.icon
                                                                  }),
                                                                  L.intl.string(L.t.znhX2d)
                                                              ]
                                                          }),
                                                          (0, r.jsx)(ec, {
                                                              expanded: i,
                                                              onClick: () => k(!i)
                                                          }),
                                                          (0, r.jsx)(eo, { handleHide: j })
                                                      ]
                                                  })
                                              }),
                                              p((e, t) =>
                                                  t
                                                      ? (0, r.jsx)(c.animated.div, {
                                                            style: e,
                                                            className: F.listContainer,
                                                            children: (0, r.jsx)('ol', {
                                                                className: F.checklist,
                                                                children: y.getSteps().map((e) =>
                                                                    (0, r.jsxs)(
                                                                        g.P3F,
                                                                        {
                                                                            tag: 'li',
                                                                            'aria-label': e.name,
                                                                            onClick: () => b(e),
                                                                            className: a()(F.stepContainer, { [F.completed]: e.isDone }),
                                                                            children: [
                                                                                e.shouldWarn
                                                                                    ? (0, r.jsx)(g.P4T, {
                                                                                          size: 'custom',
                                                                                          width: 20,
                                                                                          height: 20,
                                                                                          color: u.Z.STATUS_DANGER,
                                                                                          className: F.stepStatus
                                                                                      })
                                                                                    : e.isDone
                                                                                      ? (0, r.jsx)(g.G2e, {
                                                                                            color: u.Z.STATUS_POSITIVE_BACKGROUND,
                                                                                            icon: g.dz2,
                                                                                            style: U,
                                                                                            className: F.stepStatus
                                                                                        })
                                                                                      : (0, r.jsx)(g.G2e, {
                                                                                            disableColor: !0,
                                                                                            icon: (0, g.GSL)(_.Z),
                                                                                            style: H,
                                                                                            className: a()(F.stepStatus, F.completed)
                                                                                        }),
                                                                                (0, r.jsxs)('div', {
                                                                                    className: F.step,
                                                                                    children: [
                                                                                        (0, r.jsx)(g.Text, {
                                                                                            variant: 'text-md/medium',
                                                                                            color: e.isDone ? 'header-secondary' : 'header-primary',
                                                                                            className: F.stepName,
                                                                                            children: e.name
                                                                                        }),
                                                                                        (0, r.jsx)(g.Text, {
                                                                                            variant: 'text-sm/normal',
                                                                                            color: 'header-secondary',
                                                                                            className: F.stepDescription,
                                                                                            children: e.description
                                                                                        }),
                                                                                        e.children
                                                                                    ]
                                                                                }),
                                                                                (0, r.jsx)(g.Fbu, {
                                                                                    size: 'custom',
                                                                                    color: 'currentColor',
                                                                                    width: 12,
                                                                                    className: F.stepStatus
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
                      tagFilter: l,
                      channel: n
                  });
    };
