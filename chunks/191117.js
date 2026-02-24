"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(417597),
    o = n(397927),
    d = n(157559),
    c = n(599119),
    u = n(219504),
    m = n(71393),
    g = n(107795),
    x = n(655943),
    h = n(726862),
    _ = n(539916),
    A = n(985018),
    p = n(981317);
function f(e) {
    let { guild: t, prejoinOnly: n, postjoinOnly: l } = e,
        d = (0, a.bG)([x.A], () => x.A.editedOnboardingPrompts),
        u = d.filter((e) => e.inOnboarding),
        m = u.length,
        {
            drag: h,
            drop: f,
            dragSourcePosition: j,
            setIsDraggable: N,
        } = (0, c.A)({
            type: "ONBOARDING_PROMPT_CARD",
            index: m,
            optionId: "separator",
            onDragStart: () => {},
            onDragComplete: () => {},
            onDragReset: () => {},
        }),
        E = s.useRef(null);
    return (
        s.useEffect(() => {
            N(!1);
        }, [N]),
        s.useEffect(() => {
            h(f(E));
        }, [h, f, E]),
        (0, i.jsxs)("div", {
            ref: E,
            className: r()(p.fY, { [p.A]: null != j && m < j, [p.Ze]: null != j && m > j }),
            children: [
                !l && u.length < _.D1
                    ? (0, i.jsxs)(o.DUT, {
                          className: p.Wz,
                          onClick: () => (0, g.WC)(t, [...d, (0, _.a5)(!0)], !1),
                          children: [
                              (0, i.jsx)(o.U1e, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: p.WW,
                                  width: 20,
                                  height: 20,
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  color: "text-brand",
                                  children: A.intl.string(A.t.ujFquz),
                              }),
                          ],
                      })
                    : null,
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: p.yF }),
                              (0, i.jsx)(o.Heading, {
                                  variant: "heading-md/bold",
                                  children: A.intl.string(A.t.tjrGcb),
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  className: p.VA,
                                  children: A.intl.string(A.t.XFa6Q8),
                              }),
                          ],
                      }),
            ],
        })
    );
}
function j(e) {
    let { guildId: t, prejoinOnly: n, postjoinOnly: s, includeCount: l, singleColumn: r } = e,
        c = (0, a.bG)([m.A], () => m.A.getGuild(t)),
        j = (0, a.bG)([x.A], () => x.A.editedOnboardingPrompts),
        N = j.filter((e) => e.inOnboarding),
        E = j.filter((e) => !0 !== e.inOnboarding),
        b = [
            ...N.map((e) => ({ id: e.id, data: e })),
            { id: "separator", data: (0, _.Mc)() },
            ...E.map((e) => ({ id: e.id, data: e })),
        ],
        {
            handleDragStart: T,
            handleDragReset: C,
            handleDragComplete: I,
        } = (0, u.A)(b, (e) => {
            let t = e.findIndex((e) => "separator" === e.id),
                n = e.slice(0, t).map((e) => ({ ...e.data, inOnboarding: !0 })),
                i = e.slice(t + 1).map((e) => ({ ...e.data, inOnboarding: !1, required: !1 }));
            n.length > _.D1
                ? d.A.show({
                      title: A.intl.string(A.t.Cxtq5x),
                      body: A.intl.formatToPlainString(A.t["pkbZ+U"], { numQuestions: _.D1 }),
                  })
                : (0, g.WC)(c, [...n, ...i]);
        });
    return null == c
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  s
                      ? null
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                n
                                    ? null
                                    : (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(o.Heading, {
                                                  variant: "heading-md/bold",
                                                  children: A.intl.string(A.t["24Qm4M"]),
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: "text-sm/normal",
                                                  color: "text-default",
                                                  className: p.VA,
                                                  children: A.intl.string(A.t.QvCcYe),
                                              }),
                                          ],
                                      }),
                                N.map((e, t) =>
                                    (0, i.jsx)(
                                        h.A,
                                        {
                                            guild: c,
                                            prompt: e,
                                            disableAutofocus: n,
                                            includeCount: l,
                                            singleColumn: r,
                                            promptIndex: t,
                                            dragIndex: t,
                                            onPromptDragStart: T,
                                            onPromptDragReset: C,
                                            onPromptDragComplete: I,
                                        },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                  (0, i.jsx)(f, { guild: c, prejoinOnly: n, postjoinOnly: s }),
                  n
                      ? null
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                E.map((e, t) =>
                                    (0, i.jsx)(
                                        h.A,
                                        {
                                            guild: c,
                                            prompt: e,
                                            promptIndex: t + N.length,
                                            dragIndex: t + N.length + 1,
                                            onPromptDragStart: T,
                                            onPromptDragReset: C,
                                            onPromptDragComplete: I,
                                        },
                                        e.id,
                                    ),
                                ),
                                j.length < _.iD
                                    ? (0, i.jsxs)(o.DUT, {
                                          className: p.Wz,
                                          onClick: () => (0, g.WC)(c, [...j, (0, _.a5)(!1)], !1),
                                          children: [
                                              (0, i.jsx)(o.U1e, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  className: p.WW,
                                                  width: 20,
                                                  height: 20,
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: "text-md/medium",
                                                  color: "text-brand",
                                                  children: A.intl.string(A.t.ujFquz),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
              ],
          });
}
