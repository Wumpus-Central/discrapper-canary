n.d(t, { A: () => A }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    c = n(990078),
    o = n(397927),
    d = n(599119),
    u = n(219504),
    f = n(961973),
    g = n(147925),
    b = n(403362),
    m = n(863694),
    p = n(107795),
    x = n(655943),
    h = n(828709),
    j = n(539916),
    O = n(985018),
    y = n(977612);
let v = { optionErrors: [] };
function A(e) {
    var t;
    let {
            guild: n,
            prompt: l,
            disableAutofocus: u,
            promptIndex: h,
            dragIndex: A,
            includeCount: _,
            singleColumn: S,
            onPromptDragComplete: T,
            onPromptDragStart: I,
            onPromptDragReset: C,
        } = e,
        P = (0, a.bG)([m.A], () => m.A.editedDefaultChannelIds),
        {
            drag: w,
            dragSourcePosition: R,
            drop: D,
            setIsDraggable: G,
        } = (0, d.A)({
            type: "ONBOARDING_PROMPT_CARD",
            index: A,
            optionId: l.id,
            onDragStart: I,
            onDragComplete: T,
            onDragReset: C,
        }),
        L = (0, a.cf)([x.A], () => {
            var e;
            return null != (e = x.A.errors[h]) ? e : v;
        }),
        [k, M] = i.useState(!1),
        [U, F] = i.useState(!1),
        B = null != (t = L.options) ? t : L.optionErrors.filter(b.Vq)[0],
        H = L.config,
        V = l.options.length >= j.Bu,
        K = (0, f.G4)(n.id, Array.from(P), [l]).length - P.size,
        z = i.useRef(null),
        Y = i.useRef(h);
    return (i.useEffect(() => {
        Y.current = h;
    }),
    i.useLayoutEffect(() => {
        setTimeout(() => {
            if (0 === Y.current && !u) {
                var e;
                null == (e = z.current) || e.focus();
            }
        }, 0);
    }, [u]),
    k)
        ? (0, r.jsx)(o.vN3, {
              children: (0, r.jsxs)("div", {
                  tabIndex: 0,
                  onFocus: () => F(!0),
                  onBlur: () => F(!1),
                  onMouseLeave: () => F(!1),
                  className: s()(y.kL, {
                      [y.A]: null != R && h < R,
                      [y.Ze]: null != R && h > R,
                      [y.tW]: U,
                  }),
                  ref: (e) => {
                      w(D(e));
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: y.cK,
                          onMouseEnter: () => G(!0),
                          onMouseLeave: () => G(!1),
                          children: (0, r.jsx)(o.WP0, {
                              size: "xs",
                              color: "currentColor",
                              className: y.co,
                          }),
                      }),
                      (0, r.jsx)(o.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: O.intl.format(O.t.yjS3zs, { index: h + 1 }),
                      }),
                      (0, r.jsx)(o.Text, {
                          variant: "text-lg/semibold",
                          color: "text-default",
                          children: l.title,
                      }),
                      (0, r.jsx)(o.DUT, {
                          className: y.cS,
                          onClick: () => M(!1),
                          children: (0, r.jsx)(g.A, {
                              direction: g.A.Directions.DOWN,
                              height: 16,
                              width: 16,
                          }),
                      }),
                      (0, r.jsx)(c.m, {
                          asContainer: !0,
                          text: O.intl.string(O.t["Ku+86R"]),
                          children: (0, r.jsx)("div", {
                              className: y.ut,
                              children: (0, r.jsx)(o.K0, {
                                  size: "sm",
                                  icon: o.ucK,
                                  variant: "icon-only",
                                  onClick: () => (0, p.ME)(n, l.id),
                                  "aria-label": O.intl.string(O.t["Ku+86R"]),
                              }),
                          }),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(o.vN3, {
              children: (0, r.jsxs)("div", {
                  tabIndex: 0,
                  onFocus: () => F(!0),
                  onBlur: () => F(!1),
                  className: s()(y.kL, {
                      [y.A]: null != R && h < R,
                      [y.Ze]: null != R && h > R,
                      [y.tW]: U,
                  }),
                  ref: (e) => {
                      w(D(e));
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: y.cK,
                          onMouseEnter: () => G(!0),
                          onMouseLeave: () => G(!1),
                          children: (0, r.jsx)(o.WP0, {
                              size: "xs",
                              color: "currentColor",
                              className: y.co,
                          }),
                      }),
                      (0, r.jsxs)(o.BJc, {
                          gap: 16,
                          children: [
                              (0, r.jsx)(o.ksK, {
                                  label: O.intl.formatToPlainString(O.t.yjS3zs, { index: h + 1 }),
                                  inputRef: z,
                                  value: l.title,
                                  onChange: (e) => (0, p.NF)(n, l.id, { title: e }),
                                  placeholder: O.intl.string(O.t.QMCuCo),
                                  maxLength: j.kq,
                                  error: L.title,
                              }),
                              (0, r.jsx)(E, {
                                  prompt: l,
                                  guild: n,
                              }),
                              (0, r.jsx)(o.D0$, {
                                  errorMessage: B,
                                  label: V
                                      ? O.intl.formatToPlainString(O.t.AbvhZD, {
                                            count: l.options.length,
                                            total: j.fs,
                                        })
                                      : O.intl.formatToPlainString(O.t.b7VxYX, {
                                            count: l.options.length,
                                            total: j.fs,
                                        }),
                                  children: (0, r.jsx)(N, {
                                      guild: n,
                                      prompt: l,
                                      promptIndex: h,
                                      errors: L,
                                      singleColumn: S,
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: y.Uo,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: y.iA,
                                  children: [
                                      (0, r.jsx)(o.Checkbox, {
                                          checked: !l.singleSelect,
                                          onChange: (e) => (0, p.NF)(n, l.id, { singleSelect: !e }),
                                          label: O.intl.string(O.t.uCebZa),
                                      }),
                                      l.inOnboarding
                                          ? (0, r.jsx)(o.Checkbox, {
                                                checked: !!(l.inOnboarding && l.required),
                                                onChange: (e) => (0, p.NF)(n, l.id, { required: e }),
                                                disabled: !l.inOnboarding,
                                                label: _
                                                    ? O.intl.formatToPlainString(O.t["0re8T6"], { count: K })
                                                    : O.intl.string(O.t.Ur8Vrt),
                                            })
                                          : null,
                                  ],
                              }),
                              (0, r.jsx)(o.DUT, {
                                  className: y.cS,
                                  onClick: () => M(!0),
                                  children: (0, r.jsx)(g.A, {
                                      direction: g.A.Directions.UP,
                                      height: 16,
                                      width: 16,
                                  }),
                              }),
                              (0, r.jsx)(c.m, {
                                  asContainer: !0,
                                  text: O.intl.string(O.t["Ku+86R"]),
                                  children: (0, r.jsx)("div", {
                                      className: y.ut,
                                      children: (0, r.jsx)(o.K0, {
                                          size: "sm",
                                          icon: o.ucK,
                                          variant: "icon-only",
                                          onClick: () => (0, p.ME)(n, l.id),
                                          "aria-label": O.intl.string(O.t["Ku+86R"]),
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      null != H ? (0, r.jsx)(o.dzK, { error: H }) : null,
                  ],
              }),
          });
}
function E(e) {
    let { prompt: t, guild: n } = e,
        [l, s] = i.useState(!1);
    if (
        (i.useEffect(() => {
            !l && t.title.length > 0 && s(!0);
        }, [l, t]),
        l)
    )
        return null;
    function a(e) {
        return (0, r.jsx)(o.DUT, {
            className: y.Fw,
            onClick: () => (0, p.NF)(n, t.id, { title: e }),
            children: (0, r.jsx)(o.Text, {
                variant: "text-xs/normal",
                children: e,
            }),
        });
    }
    return (0, r.jsxs)("div", {
        className: y.Pt,
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: O.intl.string(O.t.ECnSLl),
            }),
            (0, r.jsxs)("div", {
                className: y.K1,
                children: [
                    a(O.intl.string(O.t["7GZMJa"])),
                    a(O.intl.string(O.t.nItydm)),
                    a(O.intl.string(O.t.evuYbq)),
                    a(O.intl.string(O.t.XWRuOp)),
                ],
            }),
        ],
    });
}
function N(e) {
    let { guild: t, prompt: n, promptIndex: i, singleColumn: l, errors: s } = e,
        {
            handleDragStart: a,
            handleDragReset: c,
            handleDragComplete: o,
        } = (0, u.A)(n.options, (e) => (0, p.NF)(t, n.id, { options: e }));
    return (0, r.jsxs)("div", {
        className: y.fF,
        children: [
            n.options.map((e, d) =>
                (0, r.jsx)(
                    h.A,
                    {
                        guild: t,
                        prompt: n,
                        promptIndex: i,
                        singleColumn: l,
                        option: e,
                        onDragStart: a,
                        onDragComplete: o,
                        onDragReset: c,
                        hasError: null != s.optionErrors[d],
                    },
                    e.id,
                ),
            ),
            n.options.length < j.fs
                ? (0, r.jsx)(h.B, {
                      guild: t,
                      prompt: n,
                      promptIndex: i,
                      singleColumn: l,
                  })
                : null,
        ],
    });
}
