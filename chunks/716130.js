n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(399606),
    o = n(481060),
    c = n(668781),
    d = n(603211),
    u = n(710344),
    m = n(430824),
    h = n(570961),
    g = n(208665),
    x = n(959508),
    p = n(290511),
    f = n(388032),
    C = n(554205);
function v(e) {
    let { guild: t, prejoinOnly: n, postjoinOnly: l } = e,
        c = (0, s.e7)([g.Z], () => g.Z.editedOnboardingPrompts),
        u = c.filter((e) => e.inOnboarding),
        m = u.length,
        {
            drag: x,
            drop: v,
            dragSourcePosition: _,
            setIsDraggable: I
        } = (0, d.Z)({
            type: 'ONBOARDING_PROMPT_CARD',
            index: m,
            optionId: 'separator',
            onDragStart: () => {},
            onDragComplete: () => {},
            onDragReset: () => {}
        }),
        N = r.useRef(null);
    return (
        r.useEffect(() => {
            I(!1);
        }, [I]),
        r.useEffect(() => {
            x(v(N));
        }, [x, v, N]),
        (0, i.jsxs)('div', {
            ref: N,
            className: a()(C.separatorSection, {
                [C.dropIndicatorBefore]: null != _ && m < _,
                [C.dropIndicatorAfter]: null != _ && m > _
            }),
            children: [
                !l && u.length < p.b3
                    ? (0, i.jsxs)(o.Clickable, {
                          className: C.addPrompt,
                          onClick: () => (0, h.tS)(t, [...c, (0, p.yZ)(!0)], !1),
                          children: [
                              (0, i.jsx)(o.CirclePlusIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  className: C.plusIcon,
                                  width: 20,
                                  height: 20
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  color: 'text-brand',
                                  children: f.intl.string(f.t.ujFqu7)
                              })
                          ]
                      })
                    : null,
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', { className: C.divider }),
                              (0, i.jsx)(o.Heading, {
                                  variant: 'heading-md/bold',
                                  children: f.intl.string(f.t.tjrGcX)
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: C.subtitle,
                                  children: f.intl.string(f.t.XFa6Q0)
                              })
                          ]
                      })
            ]
        })
    );
}
function _(e) {
    let { guildId: t, prejoinOnly: n, postjoinOnly: r, includeCount: l, singleColumn: a } = e,
        d = (0, s.e7)([m.Z], () => m.Z.getGuild(t)),
        _ = (0, s.e7)([g.Z], () => g.Z.editedOnboardingPrompts),
        I = _.filter((e) => e.inOnboarding),
        N = _.filter((e) => !0 !== e.inOnboarding),
        T = [
            ...I.map((e) => ({
                id: e.id,
                data: e
            })),
            {
                id: 'separator',
                data: (0, p.ae)()
            },
            ...N.map((e) => ({
                id: e.id,
                data: e
            }))
        ],
        {
            handleDragStart: j,
            handleDragReset: b,
            handleDragComplete: S
        } = (0, u.Z)(T, (e) => {
            let t = e.findIndex((e) => 'separator' === e.id),
                n = e.slice(0, t).map((e) => ({
                    ...e.data,
                    inOnboarding: !0
                })),
                i = e.slice(t + 1).map((e) => ({
                    ...e.data,
                    inOnboarding: !1,
                    required: !1
                }));
            if (n.length > p.b3) {
                c.Z.show({
                    title: f.intl.string(f.t['Cxtq5+']),
                    body: f.intl.formatToPlainString(f.t['pkbZ+f'], { numQuestions: p.b3 })
                });
                return;
            }
            (0, h.tS)(d, [...n, ...i]);
        });
    return null == d
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  r
                      ? null
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                n
                                    ? null
                                    : (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsx)(o.Heading, {
                                                  variant: 'heading-md/bold',
                                                  children: f.intl.string(f.t['24Qm4O'])
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  color: 'header-secondary',
                                                  className: C.subtitle,
                                                  children: f.intl.string(f.t.QvCcYW)
                                              })
                                          ]
                                      }),
                                I.map((e, t) =>
                                    (0, i.jsx)(
                                        x.Z,
                                        {
                                            guild: d,
                                            prompt: e,
                                            disableAutofocus: n,
                                            includeCount: l,
                                            singleColumn: a,
                                            promptIndex: t,
                                            dragIndex: t,
                                            onPromptDragStart: j,
                                            onPromptDragReset: b,
                                            onPromptDragComplete: S
                                        },
                                        e.id
                                    )
                                )
                            ]
                        }),
                  (0, i.jsx)(v, {
                      guild: d,
                      prejoinOnly: n,
                      postjoinOnly: r
                  }),
                  n
                      ? null
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                N.map((e, t) =>
                                    (0, i.jsx)(
                                        x.Z,
                                        {
                                            guild: d,
                                            prompt: e,
                                            promptIndex: t + I.length,
                                            dragIndex: t + I.length + 1,
                                            onPromptDragStart: j,
                                            onPromptDragReset: b,
                                            onPromptDragComplete: S
                                        },
                                        e.id
                                    )
                                ),
                                _.length < p.YW
                                    ? (0, i.jsxs)(o.Clickable, {
                                          className: C.addPrompt,
                                          onClick: () => (0, h.tS)(d, [..._, (0, p.yZ)(!1)], !1),
                                          children: [
                                              (0, i.jsx)(o.CirclePlusIcon, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  className: C.plusIcon,
                                                  width: 20,
                                                  height: 20
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-brand',
                                                  children: f.intl.string(f.t.ujFqu7)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
              ]
          });
}
