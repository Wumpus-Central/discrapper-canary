"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(599119),
    u = n(219504),
    m = n(961973),
    g = n(147925),
    x = n(403362),
    h = n(863694),
    _ = n(107795),
    p = n(655943),
    A = n(828709),
    f = n(539916),
    j = n(985018),
    N = n(171774);
let E = { optionErrors: [] };
function b(e) {
    let {
            guild: t,
            prompt: n,
            disableAutofocus: l,
            promptIndex: u,
            dragIndex: A,
            includeCount: b,
            singleColumn: I,
            onPromptDragComplete: v,
            onPromptDragStart: S,
            onPromptDragReset: y,
        } = e,
        R = (0, a.bG)([h.A], () => h.A.editedDefaultChannelIds),
        {
            drag: O,
            dragSourcePosition: G,
            drop: L,
            setIsDraggable: D,
        } = (0, c.A)({
            type: "ONBOARDING_PROMPT_CARD",
            index: A,
            optionId: n.id,
            onDragStart: S,
            onDragComplete: v,
            onDragReset: y,
        }),
        M = (0, a.cf)([p.A], () => p.A.errors[u] ?? E),
        [k, U] = s.useState(!1),
        [P, w] = s.useState(!1),
        B = M.options ?? M.optionErrors.filter(x.Vq)[0],
        F = M.config,
        H = n.options.length >= f.Bu,
        V = (0, m.G4)(t.id, Array.from(R), [n]).length - R.size,
        z = s.useRef(null),
        W = s.useRef(u);
    return (s.useEffect(() => {
        W.current = u;
    }),
    s.useLayoutEffect(() => {
        setTimeout(() => {
            0 !== W.current || l || z.current?.focus();
        }, 0);
    }, [l]),
    k)
        ? (0, i.jsx)(d.vN3, {
              children: (0, i.jsxs)("div", {
                  tabIndex: 0,
                  onFocus: () => w(!0),
                  onBlur: () => w(!1),
                  onMouseLeave: () => w(!1),
                  className: r()(N.kL, { [N.A]: null != G && u < G, [N.Ze]: null != G && u > G, [N.tW]: P }),
                  ref: (e) => {
                      O(L(e));
                  },
                  children: [
                      (0, i.jsx)("div", {
                          className: N.cK,
                          onMouseEnter: () => D(!0),
                          onMouseLeave: () => D(!1),
                          children: (0, i.jsx)(d.WP0, { size: "xs", color: "currentColor", className: N.co }),
                      }),
                      (0, i.jsx)(d.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: j.intl.format(j.t.yjS3zs, { index: u + 1 }),
                      }),
                      (0, i.jsx)(d.Text, { variant: "text-lg/semibold", color: "text-default", children: n.title }),
                      (0, i.jsx)(d.DUT, {
                          className: N.cS,
                          onClick: () => U(!1),
                          children: (0, i.jsx)(g.A, { direction: g.A.Directions.DOWN, height: 16, width: 16 }),
                      }),
                      (0, i.jsx)(o.m, {
                          asContainer: !0,
                          text: j.intl.string(j.t["Ku+86R"]),
                          children: (0, i.jsx)("div", {
                              className: N.ut,
                              children: (0, i.jsx)(d.K0, {
                                  size: "sm",
                                  icon: d.ucK,
                                  variant: "icon-only",
                                  onClick: () => (0, _.ME)(t, n.id),
                                  "aria-label": j.intl.string(j.t["Ku+86R"]),
                              }),
                          }),
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(d.vN3, {
              children: (0, i.jsxs)("div", {
                  tabIndex: 0,
                  onFocus: () => w(!0),
                  onBlur: () => w(!1),
                  className: r()(N.kL, { [N.A]: null != G && u < G, [N.Ze]: null != G && u > G, [N.tW]: P }),
                  ref: (e) => {
                      O(L(e));
                  },
                  children: [
                      (0, i.jsx)("div", {
                          className: N.cK,
                          onMouseEnter: () => D(!0),
                          onMouseLeave: () => D(!1),
                          children: (0, i.jsx)(d.WP0, { size: "xs", color: "currentColor", className: N.co }),
                      }),
                      (0, i.jsxs)(d.BJc, {
                          gap: 16,
                          children: [
                              (0, i.jsx)(d.ksK, {
                                  label: j.intl.formatToPlainString(j.t.yjS3zs, { index: u + 1 }),
                                  inputRef: z,
                                  value: n.title,
                                  onChange: (e) => (0, _.NF)(t, n.id, { title: e }),
                                  placeholder: j.intl.string(j.t.QMCuCo),
                                  maxLength: f.kq,
                                  error: M.title,
                              }),
                              (0, i.jsx)(T, { prompt: n, guild: t }),
                              (0, i.jsx)(d.D0$, {
                                  errorMessage: B,
                                  label: H
                                      ? j.intl.formatToPlainString(j.t.AbvhZD, { count: n.options.length, total: f.fs })
                                      : j.intl.formatToPlainString(j.t.b7VxYX, {
                                            count: n.options.length,
                                            total: f.fs,
                                        }),
                                  children: (0, i.jsx)(C, {
                                      guild: t,
                                      prompt: n,
                                      promptIndex: u,
                                      errors: M,
                                      singleColumn: I,
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: N.Uo,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: N.iA,
                                  children: [
                                      (0, i.jsx)(d.Checkbox, {
                                          checked: !n.singleSelect,
                                          onChange: (e) => (0, _.NF)(t, n.id, { singleSelect: !e }),
                                          label: j.intl.string(j.t.uCebZa),
                                      }),
                                      n.inOnboarding
                                          ? (0, i.jsx)(d.Checkbox, {
                                                checked: n.required ?? !1,
                                                onChange: (e) => (0, _.NF)(t, n.id, { required: e }),
                                                disabled: !n.inOnboarding,
                                                label: b
                                                    ? j.intl.formatToPlainString(j.t["0re8T6"], { count: V })
                                                    : j.intl.string(j.t.Ur8Vrt),
                                            })
                                          : null,
                                  ],
                              }),
                              (0, i.jsx)(d.DUT, {
                                  className: N.cS,
                                  onClick: () => U(!0),
                                  children: (0, i.jsx)(g.A, { direction: g.A.Directions.UP, height: 16, width: 16 }),
                              }),
                              (0, i.jsx)(o.m, {
                                  asContainer: !0,
                                  text: j.intl.string(j.t["Ku+86R"]),
                                  children: (0, i.jsx)("div", {
                                      className: N.ut,
                                      children: (0, i.jsx)(d.K0, {
                                          size: "sm",
                                          icon: d.ucK,
                                          variant: "icon-only",
                                          onClick: () => (0, _.ME)(t, n.id),
                                          "aria-label": j.intl.string(j.t["Ku+86R"]),
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      null != F ? (0, i.jsx)(d.dzK, { error: F }) : null,
                  ],
              }),
          });
}
function T(e) {
    let { prompt: t, guild: n } = e,
        [l, r] = s.useState(!1);
    if (
        (s.useEffect(() => {
            !l && t.title.length > 0 && r(!0);
        }, [l, t]),
        l)
    )
        return null;
    function a(e) {
        return (0, i.jsx)(d.DUT, {
            className: N.Fw,
            onClick: () => (0, _.NF)(n, t.id, { title: e }),
            children: (0, i.jsx)(d.Text, { variant: "text-xs/normal", children: e }),
        });
    }
    return (0, i.jsxs)("div", {
        className: N.Pt,
        children: [
            (0, i.jsx)(d.Text, { variant: "text-xs/normal", color: "text-muted", children: j.intl.string(j.t.ECnSLl) }),
            (0, i.jsxs)("div", {
                className: N.K1,
                children: [
                    a(j.intl.string(j.t["7GZMJa"])),
                    a(j.intl.string(j.t.nItydm)),
                    a(j.intl.string(j.t.evuYbq)),
                    a(j.intl.string(j.t.XWRuOp)),
                ],
            }),
        ],
    });
}
function C(e) {
    let { guild: t, prompt: n, promptIndex: s, singleColumn: l, errors: r } = e,
        {
            handleDragStart: a,
            handleDragReset: o,
            handleDragComplete: d,
        } = (0, u.A)(n.options, (e) => (0, _.NF)(t, n.id, { options: e }));
    return (0, i.jsxs)("div", {
        className: N.fF,
        children: [
            n.options.map((e, c) =>
                (0, i.jsx)(
                    A.A,
                    {
                        guild: t,
                        prompt: n,
                        promptIndex: s,
                        singleColumn: l,
                        option: e,
                        onDragStart: a,
                        onDragComplete: d,
                        onDragReset: o,
                        hasError: null != r.optionErrors[c],
                    },
                    e.id,
                ),
            ),
            n.options.length < f.fs ? (0, i.jsx)(A.B, { guild: t, prompt: n, promptIndex: s, singleColumn: l }) : null,
        ],
    });
}
