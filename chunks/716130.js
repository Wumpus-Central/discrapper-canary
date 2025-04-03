n.d(t, { Z: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(399606),
    o = n(481060),
    c = n(668781),
    d = n(603211),
    u = n(710344),
    m = n(430824),
    g = n(570961),
    p = n(208665),
    h = n(959508),
    f = n(290511),
    b = n(388032),
    x = n(795808);
function j(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function N(e, t) {
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
function _(e) {
    let { guild: t, prejoinOnly: n, postjoinOnly: s } = e,
        c = (0, l.e7)([p.Z], () => p.Z.editedOnboardingPrompts),
        u = c.filter((e) => e.inOnboarding),
        m = u.length,
        {
            drag: h,
            drop: j,
            dragSourcePosition: N,
            setIsDraggable: _
        } = (0, d.Z)({
            type: 'ONBOARDING_PROMPT_CARD',
            index: m,
            optionId: 'separator',
            onDragStart: () => {},
            onDragComplete: () => {},
            onDragReset: () => {}
        }),
        v = i.useRef(null);
    return (
        i.useEffect(() => {
            _(!1);
        }, [_]),
        i.useEffect(() => {
            h(j(v));
        }, [h, j, v]),
        (0, r.jsxs)('div', {
            ref: v,
            className: a()(x.separatorSection, {
                [x.dropIndicatorBefore]: null != N && m < N,
                [x.dropIndicatorAfter]: null != N && m > N
            }),
            children: [
                !s && u.length < f.b3
                    ? (0, r.jsxs)(o.P3F, {
                          className: x.addPrompt,
                          onClick: () => (0, g.tS)(t, [...c, (0, f.yZ)(!0)], !1),
                          children: [
                              (0, r.jsx)(o.oFk, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  className: x.plusIcon,
                                  width: 20,
                                  height: 20
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  color: 'text-brand',
                                  children: b.NW.string(b.t.ujFqu7)
                              })
                          ]
                      })
                    : null,
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', { className: x.divider }),
                              (0, r.jsx)(o.X6q, {
                                  variant: 'heading-md/bold',
                                  children: b.NW.string(b.t.tjrGcX)
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: x.subtitle,
                                  children: b.NW.string(b.t.XFa6Q0)
                              })
                          ]
                      })
            ]
        })
    );
}
function v(e) {
    let { guildId: t, prejoinOnly: n, postjoinOnly: i, includeCount: s, singleColumn: a } = e,
        d = (0, l.e7)([m.Z], () => m.Z.getGuild(t)),
        v = (0, l.e7)([p.Z], () => p.Z.editedOnboardingPrompts),
        C = v.filter((e) => e.inOnboarding),
        O = v.filter((e) => !0 !== e.inOnboarding),
        y = [
            ...C.map((e) => ({
                id: e.id,
                data: e
            })),
            {
                id: 'separator',
                data: (0, f.ae)()
            },
            ...O.map((e) => ({
                id: e.id,
                data: e
            }))
        ],
        {
            handleDragStart: I,
            handleDragReset: E,
            handleDragComplete: S
        } = (0, u.Z)(y, (e) => {
            let t = e.findIndex((e) => 'separator' === e.id),
                n = e.slice(0, t).map((e) => N(j({}, e.data), { inOnboarding: !0 })),
                r = e.slice(t + 1).map((e) =>
                    N(j({}, e.data), {
                        inOnboarding: !1,
                        required: !1
                    })
                );
            if (n.length > f.b3)
                return void c.Z.show({
                    title: b.NW.string(b.t['Cxtq5+']),
                    body: b.NW.formatToPlainString(b.t['pkbZ+f'], { numQuestions: f.b3 })
                });
            (0, g.tS)(d, [...n, ...r]);
        });
    return null == d
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  i
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                n
                                    ? null
                                    : (0, r.jsxs)('div', {
                                          children: [
                                              (0, r.jsx)(o.X6q, {
                                                  variant: 'heading-md/bold',
                                                  children: b.NW.string(b.t['24Qm4O'])
                                              }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  color: 'header-secondary',
                                                  className: x.subtitle,
                                                  children: b.NW.string(b.t.QvCcYW)
                                              })
                                          ]
                                      }),
                                C.map((e, t) =>
                                    (0, r.jsx)(
                                        h.Z,
                                        {
                                            guild: d,
                                            prompt: e,
                                            disableAutofocus: n,
                                            includeCount: s,
                                            singleColumn: a,
                                            promptIndex: t,
                                            dragIndex: t,
                                            onPromptDragStart: I,
                                            onPromptDragReset: E,
                                            onPromptDragComplete: S
                                        },
                                        e.id
                                    )
                                )
                            ]
                        }),
                  (0, r.jsx)(_, {
                      guild: d,
                      prejoinOnly: n,
                      postjoinOnly: i
                  }),
                  n
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                O.map((e, t) =>
                                    (0, r.jsx)(
                                        h.Z,
                                        {
                                            guild: d,
                                            prompt: e,
                                            promptIndex: t + C.length,
                                            dragIndex: t + C.length + 1,
                                            onPromptDragStart: I,
                                            onPromptDragReset: E,
                                            onPromptDragComplete: S
                                        },
                                        e.id
                                    )
                                ),
                                v.length < f.YW
                                    ? (0, r.jsxs)(o.P3F, {
                                          className: x.addPrompt,
                                          onClick: () => (0, g.tS)(d, [...v, (0, f.yZ)(!1)], !1),
                                          children: [
                                              (0, r.jsx)(o.oFk, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  className: x.plusIcon,
                                                  width: 20,
                                                  height: 20
                                              }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-brand',
                                                  children: b.NW.string(b.t.ujFqu7)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
              ]
          });
}
