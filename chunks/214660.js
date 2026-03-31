n.d(t, { A: () => C, H: () => I });
var i,
    l = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(139033),
    c = n(397927),
    d = n(830215),
    u = n(315982),
    h = n(915089),
    A = n(557722),
    _ = n(834942),
    m = n(287809),
    g = n(652215),
    p = n(53516),
    f = n(985018),
    x = n(609657),
    E = n(442078),
    I = (((i = {})[(i.VOICE = 0)] = "VOICE"), i);
let C = (e) => {
    let { type: t, guildId: i, closePopout: s } = e,
        I = (0, h.GV)(),
        {
            notClaimed: C,
            notEmailVerified: N,
            notPhoneVerified: T,
            newAccount: S,
            newMember: b,
        } = (0, r.bG)([_.A], () => _.A.getCheck(i), [i]),
        y = 0 === t ? f.intl.string(f.t["6zY8BI"]) : null,
        v = null,
        j = null;
    return (0 === t &&
        (C
            ? ((v = f.intl.string(f.t.IRxUlG)), (j = f.intl.string(f.t.fiNVin)))
            : T
              ? ((v = f.intl.string(f.t.vW8iUF)), (j = f.intl.string(f.t["50gfOv"])))
              : N
                ? ((v = f.intl.string(f.t.vdSOpz)), (j = f.intl.string(f.t.lm1UKt)))
                : b
                  ? ((v = f.intl.formatToPlainString(f.t.v1ktYb, { min: g.$8o.MEMBER_AGE })),
                    (j = f.intl.string(f.t.BddRzS)))
                  : S &&
                    ((v = f.intl.formatToPlainString(f.t.sncw41, { min: g.$8o.ACCOUNT_AGE })),
                    (j = f.intl.string(f.t.BddRzS)))),
    null == y || null == v)
        ? null
        : (0, l.jsxs)(c.lGe, {
              className: a()(E.popover, x.kL),
              "aria-labelledby": I,
              children: [
                  (0, l.jsx)("img", { alt: "", className: x.Sl, src: n(303528) }),
                  (0, l.jsxs)("div", {
                      className: x.Qs,
                      children: [
                          (0, l.jsx)(c.Heading, { variant: "heading-md/semibold", id: I, children: y }),
                          (0, l.jsx)(c.Text, { color: "text-default", variant: "text-sm/normal", children: v }),
                          (0, l.jsxs)("div", {
                              className: x.UD,
                              children: [
                                  null != j
                                      ? (0, l.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: x.FS,
                                            children: (0, l.jsx)(c.Button, {
                                                variant: "primary",
                                                text: j,
                                                onClick: () => {
                                                    C
                                                        ? u.R()
                                                        : T
                                                          ? (0, c.mMO)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("84704"),
                                                                        n.e("5966"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, l.jsx)(e, {
                                                                            reason: A.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: p.V },
                                                            )
                                                          : N &&
                                                            (d.A.verifyResend(),
                                                            (0, o.A)({
                                                                title: f.intl.string(f.t.LykQYk),
                                                                subtitle: f.intl.format(f.t.azKEPy, {
                                                                    email: m.default.getCurrentUser()?.email,
                                                                }),
                                                            })),
                                                        s();
                                                },
                                            }),
                                        })
                                      : null,
                                  C || T || N
                                      ? (0, l.jsx)(c.QWc, {
                                            onClick: s,
                                            text: f.intl.string(f.t.oEAioF),
                                            variant: "secondary",
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
