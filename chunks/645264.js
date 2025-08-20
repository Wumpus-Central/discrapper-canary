n.d(t, { default: () => j });
var r = n(951288),
    l = n(647438),
    i = n(215569),
    s = n(146187),
    a = n(257465),
    o = n(755721),
    c = n(481060),
    d = n(852860),
    u = n(313201),
    m = n(944163),
    f = n(266395),
    h = n(187565),
    x = n(200305),
    p = n(592286),
    g = n(388032),
    v = n(445609);
let b = () =>
        (0, r.jsx)(d.Z, {
            submitting: !1,
            message: g.intl.string(g.t["8g514e"]),
            onReset: () => {
                (0, f.PE)(!1);
            },
            onResetText: g.intl.string(g.t["ETE/oK"]),
            onSave: () => {
                (0, f.PE)(!1), (0, c.Mr3)(p.Pn);
            },
            onSaveText: g.intl.string(g.t["Xt+UaW"]),
            onSaveButtonColor: o.Tt.RED,
        }),
    j = (e) => {
        let { transitionState: t, guildId: n, onClose: o, onComplete: d, inviteKey: p, isPreview: g = !1 } = e,
            j = (0, f.rb)((e) => e.shouldShowWarning),
            { verificationForm: C, hasFetched: _ } = (0, h.ng)(n, g, p),
            y = (0, u.Dt)();
        return (l.useEffect(() => {
            _ && C === m.t && o();
        }, [_, o, C]),
        C === m.t)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(a.I, {
                          transitionState: t,
                          "aria-labelledby": y,
                          size: "xl",
                          onClose: o,
                          children: [
                              (0, r.jsx)("div", {
                                  className: v.closeButton,
                                  children: (0, r.jsx)(s.P, { onClick: () => o(!1) }),
                              }),
                              (0, r.jsx)("div", {
                                  className: v.container,
                                  children: (0, r.jsx)(x.Z, {
                                      verificationForm: C,
                                      headerId: y,
                                      guildId: n,
                                      onClose: o,
                                      onComplete: d,
                                      isPreview: g,
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)(i.W, {
                          children:
                              !0 === j &&
                              (0, r.jsx)(c.oXn, {
                                  className: v.notice,
                                  children: (0, r.jsx)(b, {}),
                              }),
                      }),
                  ],
              });
    };
