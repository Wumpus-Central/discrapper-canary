n.d(t, { default: () => j });
var r = n(54381),
    l = n(473749),
    i = n(793030),
    s = n(215569),
    a = n(796027),
    o = n(159691),
    c = n(755721),
    u = n(481060),
    d = n(313201),
    m = n(944163),
    f = n(266395),
    x = n(187565),
    h = n(200305),
    g = n(592286),
    p = n(388032),
    v = n(445609);
let b = () =>
        (0, r.jsx)(a.Z, {
            submitting: !1,
            message: p.intl.string(p.t["8g514U"]),
            onReset: () => {
                (0, f.PE)(!1);
            },
            onResetText: p.intl.string(p.t["ETE/oC"]),
            onSave: () => {
                (0, f.PE)(!1), (0, u.Mr3)(g.Pn);
            },
            onSaveText: p.intl.string(p.t["Xt+Uab"]),
            onSaveButtonColor: c.Tt.RED,
        }),
    j = (e) => {
        let { transitionState: t, guildId: n, onClose: a, onComplete: c, inviteKey: g, isPreview: p = !1 } = e,
            j = (0, f.rb)((e) => e.shouldShowWarning),
            { verificationForm: C, hasFetched: _ } = (0, x.ng)(n, p, g),
            O = (0, d.Dt)();
        return (l.useEffect(() => {
            _ && C === m.t && a();
        }, [_, a, C]),
        C === m.t)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(i.IX, {
                          transitionState: t,
                          "aria-labelledby": O,
                          size: "xxl",
                          onClose: a,
                          children: [
                              (0, r.jsx)("div", {
                                  className: v.closeButton,
                                  children: (0, r.jsx)(o.PZ7, { onClick: () => a(!1) }),
                              }),
                              (0, r.jsx)("div", {
                                  className: v.container,
                                  children: (0, r.jsx)(h.Z, {
                                      verificationForm: C,
                                      headerId: O,
                                      guildId: n,
                                      onClose: a,
                                      onComplete: c,
                                      isPreview: p,
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)(s.W, {
                          children:
                              !0 === j &&
                              (0, r.jsx)(u.oXn, {
                                  className: v.notice,
                                  children: (0, r.jsx)(b, {}),
                              }),
                      }),
                  ],
              });
    };
