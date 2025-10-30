n.d(t, {
    DK: () => b,
    Dx: () => E,
    EJ: () => N,
    Ee: () => y,
    Hh: () => C,
    II: () => T,
    MC: () => I,
    Vj: () => v,
    ZP: () => w,
    gO: () => S,
    i_: () => A,
    jQ: () => R,
    qE: () => O,
    v6: () => P,
}),
    n(953529),
    n(472816),
    n(794429);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(43267),
    l = n(905656),
    c = n(600164),
    u = n(313201),
    d = n(565138),
    f = n(361207),
    _ = n(63063),
    p = n(981631),
    h = n(388032),
    m = n(646668);
let g = o.qEK;
null == g && (g = () => null);
let E = (e) => {
        let { className: t, id: n, children: i, variant: s = "heading-xl/semibold" } = e;
        return (0, r.jsx)(o.Heading, {
            variant: s,
            color: "header-primary",
            className: a()(m.title, t),
            id: n,
            children: i,
        });
    },
    b = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: t,
            children: n,
        });
    },
    y = (e) => {
        let { className: t, src: n } = e;
        return (0, r.jsx)("img", {
            alt: "",
            src: n,
            className: a()(m.image, t),
        });
    },
    O = (e) => {
        let { className: t, src: n, size: i } = e;
        return (0, r.jsx)(g, {
            src: n,
            size: i,
            className: a()(m.inviteLargeIcon, t),
            "aria-hidden": !0,
        });
    },
    v = (e) => {
        let { guild: t, size: n, animate: i = !1, className: a } = e;
        return (0, r.jsx)(d.Z, {
            active: !0,
            guild: t,
            size: n,
            animate: i,
            className: a,
        });
    };
v.Sizes = d.Z.Sizes;
let I = (e) => {
    let { className: t, channel: n, size: i } = e;
    return (0, r.jsx)(g, {
        src: (0, s.x)(n),
        size: i,
        className: a()(m.inviteIcon, t),
        "aria-hidden": !0,
    });
};
I.Sizes = o.EFr;
let T = (e) => {
        let {
                label: t,
                error: n,
                placeholder: i,
                value: a,
                className: s,
                setRef: l,
                type: c = "text",
                onChange: d,
                autoComplete: f,
                autoFocus: _,
                maxLength: p,
                spellCheck: h,
                name: m,
                description: g,
                required: E,
                onFocus: b,
                onBlur: y,
            } = e,
            O = (0, u.Dt)(),
            v = (0, r.jsx)(o.oil, {
                name: m,
                type: c,
                value: a,
                inputRef: l,
                placeholder: i,
                "aria-label": t,
                onChange: d,
                autoComplete: f,
                autoFocus: _,
                maxLength: p,
                spellCheck: h,
                id: O,
                onFocus: b,
                onBlur: y,
                label: t,
                error: n,
                required: E,
                description: g,
            });
        return null != s
            ? (0, r.jsx)("div", {
                  className: s,
                  children: v,
              })
            : v;
    },
    S = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)("div", {
            className: a()(m.block, t),
            children: n,
        });
    },
    A = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: a()(m.subText, t),
            children: n,
        });
    },
    C = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: t,
            children: (0, r.jsx)(l.Z, { className: m.spinnerVideo }),
        });
    },
    N = (e) => {
        let t,
            { online: n, total: i, className: s, flat: l, textClassName: u } = e;
        return null == i
            ? null
            : (null != n &&
                  n > 0 &&
                  (t = (0, r.jsxs)("div", {
                      className: a()(m.pill, m.pillOnline, l && m.pillFlat),
                      children: [
                          (0, r.jsx)("i", { className: m.pillIconOnline }),
                          (0, r.jsx)(o.Text, {
                              tag: "span",
                              className: u,
                              variant: "text-sm/normal",
                              color: "header-secondary",
                              children: h.intl.format(h.t["LC+S+m"], { membersOnline: n }),
                          }),
                      ],
                  })),
              (0, r.jsxs)(c.Z, {
                  justify: c.Z.Justify.CENTER,
                  className: s,
                  children: [
                      t,
                      (0, r.jsxs)("div", {
                          className: a()(m.pill, l && m.pillFlat),
                          children: [
                              (0, r.jsx)("i", { className: m.pillIconTotal }),
                              (0, r.jsx)(o.Text, {
                                  tag: "span",
                                  className: u,
                                  variant: "text-sm/normal",
                                  color: "header-secondary",
                                  children: h.intl.format(h.t.zRl6XR, { count: i }),
                              }),
                          ],
                      }),
                  ],
              }));
    },
    R = (e) => {
        let { user: t } = e;
        return null == t
            ? null
            : (0, r.jsxs)("div", {
                  className: m.joiningAs,
                  children: [
                      (0, r.jsx)(o.Text, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "header-secondary",
                          children: h.intl.string(h.t["/8WWvE"]),
                      }),
                      (0, r.jsx)(O, {
                          className: m.joiningAsAvatar,
                          src: t.getAvatarURL(void 0, 24),
                          size: o.EFr.SIZE_24,
                          "aria-label": t.username,
                      }),
                      (0, r.jsx)(o.Text, {
                          className: m.joiningAsUsername,
                          tag: "span",
                          variant: "text-md/semibold",
                          color: "header-primary",
                          children: t.username,
                      }),
                  ],
              });
    },
    P = (e) => {
        let { className: t } = e;
        return (0, r.jsxs)(S, {
            className: t,
            children: [
                (0, r.jsx)(o.Button, {
                    text: h.intl.format(h.t.JoS1i3, { platform: (0, f.DW)() }),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => window.open((0, f.t3)()),
                }),
                (0, r.jsx)(A, {
                    className: m.downloadButtonSubtext,
                    children: h.intl.format(h.t.wO1VBk, {
                        supportedBrowserURL: _.Z.getArticleURL(p.BhN.SUPPORTED_BROWSERS),
                    }),
                }),
            ],
        });
    },
    w = (e) => {
        let {
            className: t,
            contentClassName: n,
            tag: i = "section",
            onSubmit: s,
            children: l,
            expanded: c = !1,
            theme: u = p.BRd.DARK,
            style: d,
        } = e;
        return (0, r.jsx)(o.f6W, {
            theme: u,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsxs)(i, {
                    "data-theme": u,
                    onSubmit: s,
                    style: d,
                    className: a()(c ? m.authBoxExpanded : m.authBox, e, t),
                    children: [
                        (0, r.jsx)("div", { className: m.discordLogo }),
                        (0, r.jsx)("div", {
                            className: a()(m.centeringWrapper, n),
                            children: l,
                        }),
                    ],
                }),
        });
    };
