n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    a = n(399606),
    o = n(481060),
    c = n(668781),
    u = n(603211),
    d = n(710344),
    g = n(430824),
    m = n(570961),
    p = n(208665),
    f = n(959508),
    h = n(290511),
    x = n(388032),
    b = n(314160);
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
function _(e, t) {
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
function v(e) {
    let { guild: t, prejoinOnly: n, postjoinOnly: l } = e,
        c = (0, a.e7)([p.Z], () => p.Z.editedOnboardingPrompts),
        d = c.filter((e) => e.inOnboarding),
        g = d.length,
        {
            drag: f,
            drop: j,
            dragSourcePosition: _,
            setIsDraggable: v,
        } = (0, u.Z)({
            type: "ONBOARDING_PROMPT_CARD",
            index: g,
            optionId: "separator",
            onDragStart: () => {},
            onDragComplete: () => {},
            onDragReset: () => {},
        }),
        O = i.useRef(null);
    return (
        i.useEffect(() => {
            v(!1);
        }, [v]),
        i.useEffect(() => {
            f(j(O));
        }, [f, j, O]),
        (0, r.jsxs)("div", {
            ref: O,
            className: s()(b.separatorSection, {
                [b.dropIndicatorBefore]: null != _ && g < _,
                [b.dropIndicatorAfter]: null != _ && g > _,
            }),
            children: [
                !l && d.length < h.b3
                    ? (0, r.jsxs)(o.P3F, {
                          className: b.addPrompt,
                          onClick: () => (0, m.tS)(t, [...c, (0, h.yZ)(!0)], !1),
                          children: [
                              (0, r.jsx)(o.oFk, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: b.plusIcon,
                                  width: 20,
                                  height: 20,
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  color: "text-brand",
                                  children: x.intl.string(x.t.ujFquz),
                              }),
                          ],
                      })
                    : null,
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", { className: b.divider }),
                              (0, r.jsx)(o.Heading, {
                                  variant: "heading-md/bold",
                                  children: x.intl.string(x.t.tjrGcb),
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  className: b.subtitle,
                                  children: x.intl.string(x.t.XFa6Q8),
                              }),
                          ],
                      }),
            ],
        })
    );
}
function O(e) {
    let { guildId: t, prejoinOnly: n, postjoinOnly: i, includeCount: l, singleColumn: s } = e,
        u = (0, a.e7)([g.Z], () => g.Z.getGuild(t)),
        O = (0, a.e7)([p.Z], () => p.Z.editedOnboardingPrompts),
        C = O.filter((e) => e.inOnboarding),
        y = O.filter((e) => !0 !== e.inOnboarding),
        N = [
            ...C.map((e) => ({
                id: e.id,
                data: e,
            })),
            {
                id: "separator",
                data: (0, h.ae)(),
            },
            ...y.map((e) => ({
                id: e.id,
                data: e,
            })),
        ],
        {
            handleDragStart: E,
            handleDragReset: I,
            handleDragComplete: S,
        } = (0, d.Z)(N, (e) => {
            let t = e.findIndex((e) => "separator" === e.id),
                n = e.slice(0, t).map((e) => _(j({}, e.data), { inOnboarding: !0 })),
                r = e.slice(t + 1).map((e) =>
                    _(j({}, e.data), {
                        inOnboarding: !1,
                        required: !1,
                    }),
                );
            if (n.length > h.b3)
                return void c.Z.show({
                    title: x.intl.string(x.t.Cxtq5x),
                    body: x.intl.formatToPlainString(x.t["pkbZ+U"], { numQuestions: h.b3 }),
                });
            (0, m.tS)(u, [...n, ...r]);
        });
    return null == u
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
                                                  children: x.intl.string(x.t["24Qm4M"]),
                                              }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-sm/normal",
                                                  color: "text-default",
                                                  className: b.subtitle,
                                                  children: x.intl.string(x.t.QvCcYe),
                                              }),
                                          ],
                                      }),
                                C.map((e, t) =>
                                    (0, r.jsx)(
                                        f.Z,
                                        {
                                            guild: u,
                                            prompt: e,
                                            disableAutofocus: n,
                                            includeCount: l,
                                            singleColumn: s,
                                            promptIndex: t,
                                            dragIndex: t,
                                            onPromptDragStart: E,
                                            onPromptDragReset: I,
                                            onPromptDragComplete: S,
                                        },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                  (0, r.jsx)(v, {
                      guild: u,
                      prejoinOnly: n,
                      postjoinOnly: i,
                  }),
                  n
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                y.map((e, t) =>
                                    (0, r.jsx)(
                                        f.Z,
                                        {
                                            guild: u,
                                            prompt: e,
                                            promptIndex: t + C.length,
                                            dragIndex: t + C.length + 1,
                                            onPromptDragStart: E,
                                            onPromptDragReset: I,
                                            onPromptDragComplete: S,
                                        },
                                        e.id,
                                    ),
                                ),
                                O.length < h.YW
                                    ? (0, r.jsxs)(o.P3F, {
                                          className: b.addPrompt,
                                          onClick: () => (0, m.tS)(u, [...O, (0, h.yZ)(!1)], !1),
                                          children: [
                                              (0, r.jsx)(o.oFk, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  className: b.plusIcon,
                                                  width: 20,
                                                  height: 20,
                                              }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-md/medium",
                                                  color: "text-brand",
                                                  children: x.intl.string(x.t.ujFquz),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
              ],
          });
}
