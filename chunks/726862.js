n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(990078),
    d = n(187322),
    c = n(772838),
    u = n(834730),
    m = n(939249),
    g = n(408278),
    h = n(241326),
    x = n(331322),
    _ = n(292666),
    p = n(452027),
    A = n(150934),
    E = n(511274),
    f = n(599119),
    j = n(219504),
    N = n(961973),
    I = n(147925),
    C = n(403362),
    b = n(863694),
    v = n(107795),
    S = n(655943),
    T = n(828709),
    y = n(539916),
    R = n(985018),
    L = n(502655);
let D = { optionErrors: [] };
function O(e) {
    let {
            guild: t,
            prompt: n,
            disableAutofocus: s,
            promptIndex: j,
            dragIndex: T,
            includeCount: O,
            singleColumn: k,
            onPromptDragComplete: U,
            onPromptDragStart: w,
            onPromptDragReset: P,
        } = e,
        B = (0, a.bG)([b.A], () => b.A.editedDefaultChannelIds),
        {
            drag: F,
            dragSourcePosition: H,
            drop: V,
            setIsDraggable: z,
        } = (0, f.A)({
            type: "ONBOARDING_PROMPT_CARD",
            index: T,
            optionId: n.id,
            onDragStart: w,
            onDragComplete: U,
            onDragReset: P,
        }),
        W = (0, a.cf)([S.A], () => S.A.errors[j] ?? D),
        [Y, K] = l.useState(!1),
        [X, Z] = l.useState(!1),
        J = W.options ?? W.optionErrors.filter(C.Vq)[0],
        q = W.config,
        Q = n.options.length >= y.Bu,
        $ = (0, N.G4)(t.id, Array.from(B), [n]).length - B.size,
        ee = l.useRef(null),
        et = l.useRef(j);
    return (l.useEffect(() => {
        et.current = j;
    }),
    l.useLayoutEffect(() => {
        setTimeout(() => {
            0 !== et.current || s || ee.current?.focus();
        }, 0);
    }, [s]),
    Y)
        ? (0, i.jsx)(d.vN, {
              children: (0, i.jsxs)("div", {
                  tabIndex: 0,
                  onFocus: () => Z(!0),
                  onBlur: () => Z(!1),
                  onMouseLeave: () => Z(!1),
                  className: r()(L.kL, { [L.A]: null != H && j < H, [L.Ze]: null != H && j > H, [L.tW]: X }),
                  ref: (e) => {
                      F(V(e));
                  },
                  children: [
                      (0, i.jsx)("div", {
                          className: L.cK,
                          onMouseEnter: () => z(!0),
                          onMouseLeave: () => z(!1),
                          children: (0, i.jsx)(c.W, { size: "xs", color: "currentColor", className: L.co }),
                      }),
                      (0, i.jsx)(u.E, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: R.intl.format(R.t.yjS3zs, { index: j + 1 }),
                      }),
                      (0, i.jsx)(u.E, { variant: "text-lg/semibold", color: "text-default", children: n.title }),
                      (0, i.jsx)(m.D, {
                          className: L.cS,
                          onClick: () => K(!1),
                          children: (0, i.jsx)(I.A, { direction: I.A.Directions.DOWN, height: 16, width: 16 }),
                      }),
                      (0, i.jsx)(o.m, {
                          asContainer: !0,
                          text: R.intl.string(R.t["Ku+86R"]),
                          children: (0, i.jsx)("div", {
                              className: L.ut,
                              children: (0, i.jsx)(g.K, {
                                  size: "sm",
                                  icon: h.u,
                                  variant: "icon-only",
                                  onClick: () => (0, v.ME)(t, n.id),
                                  "aria-label": R.intl.string(R.t["Ku+86R"]),
                              }),
                          }),
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(d.vN, {
              children: (0, i.jsxs)("div", {
                  tabIndex: 0,
                  onFocus: () => Z(!0),
                  onBlur: () => Z(!1),
                  className: r()(L.kL, { [L.A]: null != H && j < H, [L.Ze]: null != H && j > H, [L.tW]: X }),
                  ref: (e) => {
                      F(V(e));
                  },
                  children: [
                      (0, i.jsx)("div", {
                          className: L.cK,
                          onMouseEnter: () => z(!0),
                          onMouseLeave: () => z(!1),
                          children: (0, i.jsx)(c.W, { size: "xs", color: "currentColor", className: L.co }),
                      }),
                      (0, i.jsxs)(x.B, {
                          gap: 16,
                          children: [
                              (0, i.jsx)(_.k, {
                                  label: R.intl.formatToPlainString(R.t.yjS3zs, { index: j + 1 }),
                                  inputRef: ee,
                                  value: n.title,
                                  onChange: (e) => (0, v.NF)(t, n.id, { title: e }),
                                  placeholder: R.intl.string(R.t.QMCuCo),
                                  maxLength: y.kq,
                                  error: W.title,
                              }),
                              (0, i.jsx)(G, { prompt: n, guild: t }),
                              (0, i.jsx)(p.D, {
                                  errorMessage: J,
                                  label: Q
                                      ? R.intl.formatToPlainString(R.t.AbvhZD, { count: n.options.length, total: y.fs })
                                      : R.intl.formatToPlainString(R.t.b7VxYX, {
                                            count: n.options.length,
                                            total: y.fs,
                                        }),
                                  children: (0, i.jsx)(M, {
                                      guild: t,
                                      prompt: n,
                                      promptIndex: j,
                                      errors: W,
                                      singleColumn: k,
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: L.Uo,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: L.iA,
                                  children: [
                                      (0, i.jsx)(A.S, {
                                          checked: !n.singleSelect,
                                          onChange: (e) => (0, v.NF)(t, n.id, { singleSelect: !e }),
                                          label: R.intl.string(R.t.uCebZa),
                                      }),
                                      n.inOnboarding
                                          ? (0, i.jsx)(A.S, {
                                                checked: n.required ?? !1,
                                                onChange: (e) => (0, v.NF)(t, n.id, { required: e }),
                                                disabled: !n.inOnboarding,
                                                label: O
                                                    ? R.intl.formatToPlainString(R.t["0re8T6"], { count: $ })
                                                    : R.intl.string(R.t.Ur8Vrt),
                                            })
                                          : null,
                                  ],
                              }),
                              (0, i.jsx)(m.D, {
                                  className: L.cS,
                                  onClick: () => K(!0),
                                  children: (0, i.jsx)(I.A, { direction: I.A.Directions.UP, height: 16, width: 16 }),
                              }),
                              (0, i.jsx)(o.m, {
                                  asContainer: !0,
                                  text: R.intl.string(R.t["Ku+86R"]),
                                  children: (0, i.jsx)("div", {
                                      className: L.ut,
                                      children: (0, i.jsx)(g.K, {
                                          size: "sm",
                                          icon: h.u,
                                          variant: "icon-only",
                                          onClick: () => (0, v.ME)(t, n.id),
                                          "aria-label": R.intl.string(R.t["Ku+86R"]),
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      null != q ? (0, i.jsx)(E.U, { error: q }) : null,
                  ],
              }),
          });
}
function G(e) {
    let { prompt: t, guild: n } = e,
        [s, r] = l.useState(!1);
    if (
        (l.useEffect(() => {
            !s && t.title.length > 0 && r(!0);
        }, [s, t]),
        s)
    )
        return null;
    function a(e) {
        return (0, i.jsx)(m.D, {
            className: L.Fw,
            onClick: () => (0, v.NF)(n, t.id, { title: e }),
            children: (0, i.jsx)(u.E, { variant: "text-xs/normal", children: e }),
        });
    }
    return (0, i.jsxs)("div", {
        className: L.Pt,
        children: [
            (0, i.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: R.intl.string(R.t.ECnSLl) }),
            (0, i.jsxs)("div", {
                className: L.K1,
                children: [
                    a(R.intl.string(R.t["7GZMJa"])),
                    a(R.intl.string(R.t.nItydm)),
                    a(R.intl.string(R.t.evuYbq)),
                    a(R.intl.string(R.t.XWRuOp)),
                ],
            }),
        ],
    });
}
function M(e) {
    let { guild: t, prompt: n, promptIndex: l, singleColumn: s, errors: r } = e,
        {
            handleDragStart: a,
            handleDragReset: o,
            handleDragComplete: d,
        } = (0, j.A)(n.options, (e) => (0, v.NF)(t, n.id, { options: e }));
    return (0, i.jsxs)("div", {
        className: L.fF,
        children: [
            n.options.map((e, c) =>
                (0, i.jsx)(
                    T.A,
                    {
                        guild: t,
                        prompt: n,
                        promptIndex: l,
                        singleColumn: s,
                        option: e,
                        onDragStart: a,
                        onDragComplete: d,
                        onDragReset: o,
                        hasError: null != r.optionErrors[c],
                    },
                    e.id,
                ),
            ),
            n.options.length < y.fs ? (0, i.jsx)(T.B, { guild: t, prompt: n, promptIndex: l, singleColumn: s }) : null,
        ],
    });
}
