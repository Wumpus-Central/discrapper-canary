n.d(t, {
    DK: () => b,
    Dx: () => E,
    EJ: () => P,
    Ee: () => y,
    Hh: () => C,
    II: () => I,
    MC: () => S,
    Vj: () => v,
    ZP: () => D,
    gO: () => T,
    i_: () => A,
    jQ: () => R,
    qE: () => O,
    v6: () => w,
}),
    n(953529),
    n(472816),
    n(794429);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(43267),
    l = n(905656),
    c = n(600164),
    u = n(313201),
    d = n(565138),
    f = n(361207),
    p = n(63063),
    _ = n(981631),
    m = n(388032),
    h = n(28731);
let g = o.qEK;
null == g && (g = () => null);
let E = (e) => {
        let { className: t, id: n, children: i, variant: s = "heading-xl/semibold" } = e;
        return (0, r.jsx)(o.Heading, {
            variant: s,
            color: "header-primary",
            className: a()(h.title, t),
            id: n,
            children: i,
        });
    },
    b = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-default",
            className: t,
            children: n,
        });
    },
    y = (e) => {
        let { className: t, src: n } = e;
        return (0, r.jsx)("img", {
            alt: "",
            src: n,
            className: a()(h.image, t),
        });
    },
    O = (e) => {
        let { className: t, src: n, size: i } = e;
        return (0, r.jsx)(g, {
            src: n,
            size: i,
            className: a()(h.inviteLargeIcon, t),
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
let S = (e) => {
    let { className: t, channel: n, size: i } = e;
    return (0, r.jsx)(g, {
        src: (0, s.x)(n),
        size: i,
        className: a()(h.inviteIcon, t),
        "aria-hidden": !0,
    });
};
S.Sizes = o.EFr;
let I = (e) => {
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
                autoFocus: p,
                maxLength: _,
                spellCheck: m,
                name: h,
                description: g,
                required: E,
                onFocus: b,
                onBlur: y,
            } = e,
            O = (0, u.Dt)(),
            v = (0, r.jsx)(o.oil, {
                name: h,
                type: c,
                value: a,
                inputRef: l,
                placeholder: i,
                "aria-label": t,
                onChange: d,
                autoComplete: f,
                autoFocus: p,
                maxLength: _,
                spellCheck: m,
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
    T = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)("div", {
            className: a()(h.block, t),
            children: n,
        });
    },
    A = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: a()(h.subText, t),
            children: n,
        });
    },
    C = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: t,
            children: (0, r.jsx)(l.Z, { className: h.spinnerVideo }),
        });
    },
    N = (e) =>
        (0, r.jsx)(o.Text, {
            tag: "span",
            className: null == e ? void 0 : e.className,
            variant: "text-sm/normal",
            color: "text-default",
            children: null == e ? void 0 : e.children,
        }),
    P = (e) => {
        let t,
            { online: n, total: i, className: o, flat: s, textClassName: l, renderText: u = N } = e;
        return null == i
            ? null
            : (null != n &&
                  n > 0 &&
                  (t = (0, r.jsxs)("div", {
                      className: a()(h.pill, h.pillOnline, s && h.pillFlat),
                      children: [
                          (0, r.jsx)("i", { className: h.pillIconOnline }),
                          u({
                              className: l,
                              children: m.intl.format(m.t["LC+S+m"], { membersOnline: n }),
                          }),
                      ],
                  })),
              (0, r.jsxs)(c.Z, {
                  justify: c.Z.Justify.CENTER,
                  className: o,
                  children: [
                      t,
                      (0, r.jsxs)("div", {
                          className: a()(h.pill, s && h.pillFlat),
                          children: [
                              (0, r.jsx)("i", { className: h.pillIconTotal }),
                              u({
                                  className: l,
                                  children: m.intl.format(m.t.zRl6XR, { count: i }),
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
                  className: h.joiningAs,
                  children: [
                      (0, r.jsx)(o.Text, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-default",
                          children: m.intl.string(m.t["/8WWvE"]),
                      }),
                      (0, r.jsx)(O, {
                          className: h.joiningAsAvatar,
                          src: t.getAvatarURL(void 0, 24),
                          size: o.EFr.SIZE_24,
                          "aria-label": t.username,
                      }),
                      (0, r.jsx)(o.Text, {
                          className: h.joiningAsUsername,
                          tag: "span",
                          variant: "text-md/semibold",
                          color: "header-primary",
                          children: t.username,
                      }),
                  ],
              });
    },
    w = (e) => {
        let { className: t } = e;
        return (0, r.jsxs)(T, {
            className: t,
            children: [
                (0, r.jsx)(o.Button, {
                    text: m.intl.format(m.t.JoS1i3, { platform: (0, f.DW)() }),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => window.open((0, f.t3)()),
                }),
                (0, r.jsx)(A, {
                    className: h.downloadButtonSubtext,
                    children: m.intl.format(m.t.wO1VBk, {
                        supportedBrowserURL: p.Z.getArticleURL(_.BhN.SUPPORTED_BROWSERS),
                    }),
                }),
            ],
        });
    },
    D = (e) => {
        let {
            className: t,
            contentClassName: n,
            tag: i = "section",
            onSubmit: s,
            children: l,
            expanded: c = !1,
            theme: u = _.BRd.DARK,
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
                    className: a()(c ? h.authBoxExpanded : h.authBox, e, t),
                    children: [
                        (0, r.jsx)("div", { className: h.discordLogo }),
                        (0, r.jsx)("div", {
                            className: a()(h.centeringWrapper, n),
                            children: l,
                        }),
                    ],
                }),
        });
    };
