"use strict";
n.d(t, { A: () => x, H: () => f });
var i,
    s = n(627968);
n(64700);
var l = n(311907),
    a = n(139033),
    r = n(397927),
    o = n(830215),
    c = n(315982),
    d = n(915089),
    u = n(557722),
    h = n(834942),
    A = n(287809),
    p = n(652215),
    m = n(53516),
    g = n(985018),
    _ = n(43310),
    f = (((i = {})[(i.VOICE = 0)] = "VOICE"), i);
let x = (e) => {
    let { type: t, guildId: i, closePopout: f } = e,
        x = (0, d.GV)(),
        {
            notClaimed: C,
            notEmailVerified: E,
            notPhoneVerified: I,
            newAccount: N,
            newMember: S,
        } = (0, l.bG)([h.A], () => h.A.getCheck(i), [i]),
        b = 0 === t ? g.intl.string(g.t["6zY8BI"]) : null,
        T = null,
        v = null;
    return (0 === t &&
        (C
            ? ((T = g.intl.string(g.t.IRxUlG)), (v = g.intl.string(g.t.fiNVin)))
            : I
              ? ((T = g.intl.string(g.t.vW8iUF)), (v = g.intl.string(g.t["50gfOv"])))
              : E
                ? ((T = g.intl.string(g.t.vdSOpz)), (v = g.intl.string(g.t.lm1UKt)))
                : S
                  ? ((T = g.intl.formatToPlainString(g.t.v1ktYb, { min: p.$8o.MEMBER_AGE })),
                    (v = g.intl.string(g.t.BddRzS)))
                  : N &&
                    ((T = g.intl.formatToPlainString(g.t.sncw41, { min: p.$8o.ACCOUNT_AGE })),
                    (v = g.intl.string(g.t.BddRzS)))),
    null == b || null == T)
        ? null
        : (0, s.jsxs)(r.lGe, {
              className: _.kL,
              "aria-labelledby": x,
              children: [
                  (0, s.jsx)("img", { alt: "", className: _.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: _.Qs,
                      children: [
                          (0, s.jsx)(r.Heading, { variant: "heading-md/semibold", id: x, children: b }),
                          (0, s.jsx)(r.Text, { color: "text-default", variant: "text-sm/normal", children: T }),
                          (0, s.jsxs)("div", {
                              className: _.UD,
                              children: [
                                  null != v
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: _.FS,
                                            children: (0, s.jsx)(r.Button, {
                                                variant: "primary",
                                                text: v,
                                                onClick: () => {
                                                    C
                                                        ? c.R()
                                                        : I
                                                          ? (0, r.mMO)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("84704"),
                                                                        n.e("45668"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, s.jsx)(e, {
                                                                            reason: u.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: m.V },
                                                            )
                                                          : E &&
                                                            (o.A.verifyResend(),
                                                            (0, a.A)({
                                                                title: g.intl.string(g.t.LykQYk),
                                                                subtitle: g.intl.format(g.t.azKEPy, {
                                                                    email: A.default.getCurrentUser()?.email,
                                                                }),
                                                            })),
                                                        f();
                                                },
                                            }),
                                        })
                                      : null,
                                  C || I || E
                                      ? (0, s.jsx)(r.QWc, {
                                            onClick: f,
                                            text: g.intl.string(g.t.oEAioF),
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
