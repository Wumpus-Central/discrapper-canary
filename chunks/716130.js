n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(399606),
    o = n(481060),
    c = n(668781),
    d = n(603211),
    u = n(710344),
    m = n(430824),
    h = n(570961),
    g = n(208665),
    x = n(959508),
    p = n(290511),
    _ = n(388032),
    C = n(944508);
function f(e) {
    let { guild: t, prejoinOnly: n, postjoinOnly: l } = e,
        c = (0, a.e7)([g.Z], () => g.Z.editedOnboardingPrompts),
        u = c.filter((e) => e.inOnboarding),
        m = u.length,
        {
            drag: x,
            drop: f,
            dragSourcePosition: v,
            setIsDraggable: N
        } = (0, d.Z)({
            type: 'ONBOARDING_PROMPT_CARD',
            index: m,
            optionId: 'separator',
            onDragStart: () => {},
            onDragComplete: () => {},
            onDragReset: () => {}
        }),
        j = r.useRef(null);
    return (
        r.useEffect(() => {
            N(!1);
        }, [N]),
        r.useEffect(() => {
            x(f(j));
        }, [x, f, j]),
        (0, i.jsxs)('div', {
            ref: j,
            className: s()(C.separatorSection, {
                [C.dropIndicatorBefore]: null != v && m < v,
                [C.dropIndicatorAfter]: null != v && m > v
            }),
            children: [
                !l && u.length < p.b3
                    ? (0, i.jsxs)(o.P3F, {
                          className: C.addPrompt,
                          onClick: () => (0, h.tS)(t, [...c, (0, p.yZ)(!0)], !1),
                          children: [
                              (0, i.jsx)(o.oFk, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  className: C.plusIcon,
                                  width: 20,
                                  height: 20
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  color: 'text-brand',
                                  children: _.intl.string(_.t.ujFqu7)
                              })
                          ]
                      })
                    : null,
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', { className: C.divider }),
                              (0, i.jsx)(o.X6q, {
                                  variant: 'heading-md/bold',
                                  children: _.intl.string(_.t.tjrGcX)
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: C.subtitle,
                                  children: _.intl.string(_.t.XFa6Q0)
                              })
                          ]
                      })
            ]
        })
    );
}
function v(e) {
    let { guildId: t, prejoinOnly: n, postjoinOnly: r, includeCount: l, singleColumn: s } = e,
        d = (0, a.e7)([m.Z], () => m.Z.getGuild(t)),
        v = (0, a.e7)([g.Z], () => g.Z.editedOnboardingPrompts),
        N = v.filter((e) => e.inOnboarding),
        j = v.filter((e) => !0 !== e.inOnboarding),
        I = [
            ...N.map((e) => ({
                id: e.id,
                data: e
            })),
            {
                id: 'separator',
                data: (0, p.ae)()
            },
            ...j.map((e) => ({
                id: e.id,
                data: e
            }))
        ],
        {
            handleDragStart: E,
            handleDragReset: b,
            handleDragComplete: T
        } = (0, u.Z)(I, (e) => {
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
                    title: _.intl.string(_.t['Cxtq5+']),
                    body: _.intl.formatToPlainString(_.t['pkbZ+f'], { numQuestions: p.b3 })
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
                                              (0, i.jsx)(o.X6q, {
                                                  variant: 'heading-md/bold',
                                                  children: _.intl.string(_.t['24Qm4O'])
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  color: 'header-secondary',
                                                  className: C.subtitle,
                                                  children: _.intl.string(_.t.QvCcYW)
                                              })
                                          ]
                                      }),
                                N.map((e, t) =>
                                    (0, i.jsx)(
                                        x.Z,
                                        {
                                            guild: d,
                                            prompt: e,
                                            disableAutofocus: n,
                                            includeCount: l,
                                            singleColumn: s,
                                            promptIndex: t,
                                            dragIndex: t,
                                            onPromptDragStart: E,
                                            onPromptDragReset: b,
                                            onPromptDragComplete: T
                                        },
                                        e.id
                                    )
                                )
                            ]
                        }),
                  (0, i.jsx)(f, {
                      guild: d,
                      prejoinOnly: n,
                      postjoinOnly: r
                  }),
                  n
                      ? null
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                j.map((e, t) =>
                                    (0, i.jsx)(
                                        x.Z,
                                        {
                                            guild: d,
                                            prompt: e,
                                            promptIndex: t + N.length,
                                            dragIndex: t + N.length + 1,
                                            onPromptDragStart: E,
                                            onPromptDragReset: b,
                                            onPromptDragComplete: T
                                        },
                                        e.id
                                    )
                                ),
                                v.length < p.YW
                                    ? (0, i.jsxs)(o.P3F, {
                                          className: C.addPrompt,
                                          onClick: () => (0, h.tS)(d, [...v, (0, p.yZ)(!1)], !1),
                                          children: [
                                              (0, i.jsx)(o.oFk, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  className: C.plusIcon,
                                                  width: 20,
                                                  height: 20
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-brand',
                                                  children: _.intl.string(_.t.ujFqu7)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
              ]
          });
}
