n.d(t, { Z: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(399606),
    o = n(481060),
    c = n(668781),
    d = n(603211),
    u = n(710344),
    g = n(430824),
    f = n(570961),
    m = n(208665),
    b = n(959508),
    p = n(290511),
    h = n(388032),
    x = n(23550);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e, t) {
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
function O(e) {
    let { guild: t, prejoinOnly: n, postjoinOnly: l } = e,
        c = (0, s.e7)([m.Z], () => m.Z.editedOnboardingPrompts),
        u = c.filter((e) => e.inOnboarding),
        g = u.length,
        {
            drag: b,
            drop: j,
            dragSourcePosition: v,
            setIsDraggable: O,
        } = (0, d.Z)({
            type: "ONBOARDING_PROMPT_CARD",
            index: g,
            optionId: "separator",
            onDragStart: () => {},
            onDragComplete: () => {},
            onDragReset: () => {},
        }),
        C = i.useRef(null);
    return (
        i.useEffect(() => {
            O(!1);
        }, [O]),
        i.useEffect(() => {
            b(j(C));
        }, [b, j, C]),
        (0, r.jsxs)("div", {
            ref: C,
            className: a()(x.separatorSection, {
                [x.dropIndicatorBefore]: null != v && g < v,
                [x.dropIndicatorAfter]: null != v && g > v,
            }),
            children: [
                !l && u.length < p.b3
                    ? (0, r.jsxs)(o.P3F, {
                          className: x.addPrompt,
                          onClick: () => (0, f.tS)(t, [...c, (0, p.yZ)(!0)], !1),
                          children: [
                              (0, r.jsx)(o.oFk, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: x.plusIcon,
                                  width: 20,
                                  height: 20,
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  color: "text-brand",
                                  children: h.intl.string(h.t.ujFquz),
                              }),
                          ],
                      })
                    : null,
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", { className: x.divider }),
                              (0, r.jsx)(o.Heading, {
                                  variant: "heading-md/bold",
                                  children: h.intl.string(h.t.tjrGcb),
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  className: x.subtitle,
                                  children: h.intl.string(h.t.XFa6Q8),
                              }),
                          ],
                      }),
            ],
        })
    );
}
function C(e) {
    let { guildId: t, prejoinOnly: n, postjoinOnly: i, includeCount: l, singleColumn: a } = e,
        d = (0, s.e7)([g.Z], () => g.Z.getGuild(t)),
        C = (0, s.e7)([m.Z], () => m.Z.editedOnboardingPrompts),
        y = C.filter((e) => e.inOnboarding),
        N = C.filter((e) => !0 !== e.inOnboarding),
        E = [
            ...y.map((e) => ({
                id: e.id,
                data: e,
            })),
            {
                id: "separator",
                data: (0, p.ae)(),
            },
            ...N.map((e) => ({
                id: e.id,
                data: e,
            })),
        ],
        {
            handleDragStart: I,
            handleDragReset: S,
            handleDragComplete: _,
        } = (0, u.Z)(E, (e) => {
            let t = e.findIndex((e) => "separator" === e.id),
                n = e.slice(0, t).map((e) => v(j({}, e.data), { inOnboarding: !0 })),
                r = e.slice(t + 1).map((e) =>
                    v(j({}, e.data), {
                        inOnboarding: !1,
                        required: !1,
                    }),
                );
            if (n.length > p.b3)
                return void c.Z.show({
                    title: h.intl.string(h.t.Cxtq5x),
                    body: h.intl.formatToPlainString(h.t["pkbZ+U"], { numQuestions: p.b3 }),
                });
            (0, f.tS)(d, [...n, ...r]);
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
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(o.Heading, {
                                                  variant: "heading-md/bold",
                                                  children: h.intl.string(h.t["24Qm4M"]),
                                              }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-sm/normal",
                                                  color: "text-default",
                                                  className: x.subtitle,
                                                  children: h.intl.string(h.t.QvCcYe),
                                              }),
                                          ],
                                      }),
                                y.map((e, t) =>
                                    (0, r.jsx)(
                                        b.Z,
                                        {
                                            guild: d,
                                            prompt: e,
                                            disableAutofocus: n,
                                            includeCount: l,
                                            singleColumn: a,
                                            promptIndex: t,
                                            dragIndex: t,
                                            onPromptDragStart: I,
                                            onPromptDragReset: S,
                                            onPromptDragComplete: _,
                                        },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                  (0, r.jsx)(O, {
                      guild: d,
                      prejoinOnly: n,
                      postjoinOnly: i,
                  }),
                  n
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                N.map((e, t) =>
                                    (0, r.jsx)(
                                        b.Z,
                                        {
                                            guild: d,
                                            prompt: e,
                                            promptIndex: t + y.length,
                                            dragIndex: t + y.length + 1,
                                            onPromptDragStart: I,
                                            onPromptDragReset: S,
                                            onPromptDragComplete: _,
                                        },
                                        e.id,
                                    ),
                                ),
                                C.length < p.YW
                                    ? (0, r.jsxs)(o.P3F, {
                                          className: x.addPrompt,
                                          onClick: () => (0, f.tS)(d, [...C, (0, p.yZ)(!1)], !1),
                                          children: [
                                              (0, r.jsx)(o.oFk, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  className: x.plusIcon,
                                                  width: 20,
                                                  height: 20,
                                              }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-md/medium",
                                                  color: "text-brand",
                                                  children: h.intl.string(h.t.ujFquz),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
              ],
          });
}
