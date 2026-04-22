n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(417597),
    o = n(939249),
    d = n(245604),
    c = n(834730),
    u = n(534514),
    m = n(157559),
    g = n(599119),
    h = n(219504),
    x = n(71393),
    _ = n(107795),
    p = n(655943),
    A = n(726862),
    E = n(539916),
    f = n(985018),
    j = n(37824);
function N(e) {
    let { guild: t, prejoinOnly: n, postjoinOnly: s } = e,
        m = (0, a.bG)([p.A], () => p.A.editedOnboardingPrompts),
        h = m.filter((e) => e.inOnboarding),
        x = h.length,
        {
            drag: A,
            drop: N,
            dragSourcePosition: I,
            setIsDraggable: C,
        } = (0, g.A)({
            type: "ONBOARDING_PROMPT_CARD",
            index: x,
            optionId: "separator",
            onDragStart: () => {},
            onDragComplete: () => {},
            onDragReset: () => {},
        }),
        b = l.useRef(null);
    return (
        l.useEffect(() => {
            C(!1);
        }, [C]),
        l.useEffect(() => {
            A(N(b));
        }, [A, N, b]),
        (0, i.jsxs)("div", {
            ref: b,
            className: r()(j.fY, { [j.A]: null != I && x < I, [j.Ze]: null != I && x > I }),
            children: [
                !s && h.length < E.D1
                    ? (0, i.jsxs)(o.D, {
                          className: j.Wz,
                          onClick: () => (0, _.WC)(t, [...m, (0, E.a5)(!0)], !1),
                          children: [
                              (0, i.jsx)(d.U, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: j.WW,
                                  width: 20,
                                  height: 20,
                              }),
                              (0, i.jsx)(c.E, {
                                  variant: "text-md/medium",
                                  color: "text-brand",
                                  children: f.intl.string(f.t.ujFquz),
                              }),
                          ],
                      })
                    : null,
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: j.yF }),
                              (0, i.jsx)(u.D, { variant: "heading-md/bold", children: f.intl.string(f.t.tjrGcb) }),
                              (0, i.jsx)(c.E, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  className: j.VA,
                                  children: f.intl.string(f.t.XFa6Q8),
                              }),
                          ],
                      }),
            ],
        })
    );
}
function I(e) {
    let { guildId: t, prejoinOnly: n, postjoinOnly: l, includeCount: s, singleColumn: r } = e,
        g = (0, a.bG)([x.A], () => x.A.getGuild(t)),
        I = (0, a.bG)([p.A], () => p.A.editedOnboardingPrompts),
        C = I.filter((e) => e.inOnboarding),
        b = I.filter((e) => !0 !== e.inOnboarding),
        v = [
            ...C.map((e) => ({ id: e.id, data: e })),
            { id: "separator", data: (0, E.Mc)() },
            ...b.map((e) => ({ id: e.id, data: e })),
        ],
        {
            handleDragStart: S,
            handleDragReset: T,
            handleDragComplete: y,
        } = (0, h.A)(v, (e) => {
            let t = e.findIndex((e) => "separator" === e.id),
                n = e.slice(0, t).map((e) => ({ ...e.data, inOnboarding: !0 })),
                i = e.slice(t + 1).map((e) => ({ ...e.data, inOnboarding: !1, required: !1 }));
            n.length > E.D1
                ? m.A.show({
                      title: f.intl.string(f.t.Cxtq5x),
                      body: f.intl.formatToPlainString(f.t["pkbZ+U"], { numQuestions: E.D1 }),
                  })
                : (0, _.WC)(g, [...n, ...i]);
        });
    return null == g
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  l
                      ? null
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                n
                                    ? null
                                    : (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(u.D, {
                                                  variant: "heading-md/bold",
                                                  children: f.intl.string(f.t["24Qm4M"]),
                                              }),
                                              (0, i.jsx)(c.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-default",
                                                  className: j.VA,
                                                  children: f.intl.string(f.t.QvCcYe),
                                              }),
                                          ],
                                      }),
                                C.map((e, t) =>
                                    (0, i.jsx)(
                                        A.A,
                                        {
                                            guild: g,
                                            prompt: e,
                                            disableAutofocus: n,
                                            includeCount: s,
                                            singleColumn: r,
                                            promptIndex: t,
                                            dragIndex: t,
                                            onPromptDragStart: S,
                                            onPromptDragReset: T,
                                            onPromptDragComplete: y,
                                        },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                  (0, i.jsx)(N, { guild: g, prejoinOnly: n, postjoinOnly: l }),
                  n
                      ? null
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                b.map((e, t) =>
                                    (0, i.jsx)(
                                        A.A,
                                        {
                                            guild: g,
                                            prompt: e,
                                            promptIndex: t + C.length,
                                            dragIndex: t + C.length + 1,
                                            onPromptDragStart: S,
                                            onPromptDragReset: T,
                                            onPromptDragComplete: y,
                                        },
                                        e.id,
                                    ),
                                ),
                                I.length < E.iD
                                    ? (0, i.jsxs)(o.D, {
                                          className: j.Wz,
                                          onClick: () => (0, _.WC)(g, [...I, (0, E.a5)(!1)], !1),
                                          children: [
                                              (0, i.jsx)(d.U, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  className: j.WW,
                                                  width: 20,
                                                  height: 20,
                                              }),
                                              (0, i.jsx)(c.E, {
                                                  variant: "text-md/medium",
                                                  color: "text-brand",
                                                  children: f.intl.string(f.t.ujFquz),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
              ],
          });
}
