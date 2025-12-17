n.d(t, { default: () => j });
var r = n(54381),
    l = n(473749),
    i = n(793030),
    a = n(215569),
    s = n(796027),
    o = n(159691),
    c = n(755721),
    u = n(481060),
    d = n(313201),
    m = n(944163),
    f = n(266395),
    b = n(187565),
    x = n(200305),
    h = n(592286),
    g = n(388032),
    p = n(161752);
let v = () =>
        (0, r.jsx)(s.Z, {
            submitting: !1,
            message: g.intl.string(g.t["8g514U"]),
            onReset: () => {
                (0, f.PE)(!1);
            },
            onResetText: g.intl.string(g.t["ETE/oC"]),
            onSave: () => {
                (0, f.PE)(!1), (0, u.Mr3)(h.Pn);
            },
            onSaveText: g.intl.string(g.t["Xt+Uab"]),
            onSaveButtonColor: c.Tt.RED,
        }),
    j = (e) => {
        let { transitionState: t, guildId: n, onClose: s, onComplete: c, inviteKey: h, isPreview: g = !1 } = e,
            j = (0, f.rb)((e) => e.shouldShowWarning),
            { verificationForm: C, hasFetched: O } = (0, b.ng)(n, g, h),
            I = (0, d.Dt)();
        return (l.useEffect(() => {
            O && C === m.t && s();
        }, [O, s, C]),
        C === m.t)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(i.IX, {
                          transitionState: t,
                          "aria-labelledby": I,
                          size: "xxl",
                          onClose: s,
                          children: [
                              (0, r.jsx)("div", {
                                  className: p.closeButton,
                                  children: (0, r.jsx)(o.PZ7, { onClick: () => s(!1) }),
                              }),
                              (0, r.jsx)("div", {
                                  className: p.container,
                                  children: (0, r.jsx)(x.Z, {
                                      verificationForm: C,
                                      headerId: I,
                                      guildId: n,
                                      onClose: s,
                                      onComplete: c,
                                      isPreview: g,
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)(a.W, {
                          children:
                              !0 === j &&
                              (0, r.jsx)(u.oXn, {
                                  className: p.notice,
                                  children: (0, r.jsx)(v, {}),
                              }),
                      }),
                  ],
              });
    };
