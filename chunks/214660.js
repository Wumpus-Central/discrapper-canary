n.d(t, { A: () => f, H: () => x });
var i,
    l = n(627968);
n(64700);
var s = n(311907),
    a = n(139033),
    r = n(397927),
    o = n(830215),
    d = n(315982),
    c = n(915089),
    u = n(557722),
    h = n(834942),
    A = n(287809),
    g = n(652215),
    m = n(53516),
    p = n(985018),
    _ = n(43310),
    x = (((i = {})[(i.VOICE = 0)] = "VOICE"), i);
let f = (e) => {
    let { type: t, guildId: i, closePopout: x } = e,
        f = (0, c.GV)(),
        {
            notClaimed: E,
            notEmailVerified: C,
            notPhoneVerified: I,
            newAccount: S,
            newMember: b,
        } = (0, s.bG)([h.A], () => h.A.getCheck(i), [i]),
        N = 0 === t ? p.intl.string(p.t["6zY8BI"]) : null,
        T = null,
        j = null;
    return (0 === t &&
        (E
            ? ((T = p.intl.string(p.t.IRxUlG)), (j = p.intl.string(p.t.fiNVin)))
            : I
              ? ((T = p.intl.string(p.t.vW8iUF)), (j = p.intl.string(p.t["50gfOv"])))
              : C
                ? ((T = p.intl.string(p.t.vdSOpz)), (j = p.intl.string(p.t.lm1UKt)))
                : b
                  ? ((T = p.intl.formatToPlainString(p.t.v1ktYb, { min: g.$8o.MEMBER_AGE })),
                    (j = p.intl.string(p.t.BddRzS)))
                  : S &&
                    ((T = p.intl.formatToPlainString(p.t.sncw41, { min: g.$8o.ACCOUNT_AGE })),
                    (j = p.intl.string(p.t.BddRzS)))),
    null == N || null == T)
        ? null
        : (0, l.jsxs)(r.lGe, {
              className: _.kL,
              "aria-labelledby": f,
              children: [
                  (0, l.jsx)("img", { alt: "", className: _.Sl, src: n(303528) }),
                  (0, l.jsxs)("div", {
                      className: _.Qs,
                      children: [
                          (0, l.jsx)(r.Heading, { variant: "heading-md/semibold", id: f, children: N }),
                          (0, l.jsx)(r.Text, { color: "text-default", variant: "text-sm/normal", children: T }),
                          (0, l.jsxs)("div", {
                              className: _.UD,
                              children: [
                                  null != j
                                      ? (0, l.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: _.FS,
                                            children: (0, l.jsx)(r.Button, {
                                                variant: "primary",
                                                text: j,
                                                onClick: () => {
                                                    E
                                                        ? d.R()
                                                        : I
                                                          ? (0, r.mMO)(
                                                                async () => {
                                                                    let { default: e } = await Promise.resolve().then(
                                                                        n.bind(n, 615715),
                                                                    );
                                                                    return (t) =>
                                                                        (0, l.jsx)(e, {
                                                                            reason: u.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: m.V },
                                                            )
                                                          : C &&
                                                            (o.A.verifyResend(),
                                                            (0, a.A)({
                                                                title: p.intl.string(p.t.LykQYk),
                                                                subtitle: p.intl.format(p.t.azKEPy, {
                                                                    email: A.default.getCurrentUser()?.email,
                                                                }),
                                                            })),
                                                        x();
                                                },
                                            }),
                                        })
                                      : null,
                                  E || I || C
                                      ? (0, l.jsx)(r.QWc, {
                                            onClick: x,
                                            text: p.intl.string(p.t.oEAioF),
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
