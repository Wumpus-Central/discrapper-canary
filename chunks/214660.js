n.d(t, { A: () => T, H: () => v });
var i,
    l = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(139033),
    d = n(192308),
    c = n(305866),
    u = n(534514),
    h = n(834730),
    A = n(821609),
    _ = n(123292),
    m = n(830215),
    g = n(315982),
    p = n(915089),
    f = n(557722),
    E = n(834942),
    x = n(287809),
    I = n(652215),
    C = n(53516),
    b = n(985018),
    N = n(725673),
    S = n(824078),
    v = (((i = {})[(i.VOICE = 0)] = "VOICE"), i);
let T = (e) => {
    let { type: t, guildId: i, closePopout: s } = e,
        v = (0, p.GV)(),
        {
            notClaimed: T,
            notEmailVerified: y,
            notPhoneVerified: j,
            newAccount: R,
            newMember: L,
        } = (0, r.bG)([E.A], () => E.A.getCheck(i), [i]),
        O = 0 === t ? b.intl.string(b.t["6zY8BI"]) : null,
        G = null,
        D = null;
    return (0 === t &&
        (T
            ? ((G = b.intl.string(b.t.IRxUlG)), (D = b.intl.string(b.t.fiNVin)))
            : j
              ? ((G = b.intl.string(b.t.vW8iUF)), (D = b.intl.string(b.t["50gfOv"])))
              : y
                ? ((G = b.intl.string(b.t.vdSOpz)), (D = b.intl.string(b.t.lm1UKt)))
                : L
                  ? ((G = b.intl.formatToPlainString(b.t.v1ktYb, { min: I.$8o.MEMBER_AGE })),
                    (D = b.intl.string(b.t.BddRzS)))
                  : R &&
                    ((G = b.intl.formatToPlainString(b.t.sncw41, { min: I.$8o.ACCOUNT_AGE })),
                    (D = b.intl.string(b.t.BddRzS)))),
    null == O || null == G)
        ? null
        : (0, l.jsxs)(c.l, {
              className: a()(S.popover, N.kL),
              "aria-labelledby": v,
              children: [
                  (0, l.jsx)("img", { alt: "", className: N.Sl, src: n(303528) }),
                  (0, l.jsxs)("div", {
                      className: N.Qs,
                      children: [
                          (0, l.jsx)(u.D, { variant: "heading-md/semibold", id: v, children: O }),
                          (0, l.jsx)(h.E, { color: "text-default", variant: "text-sm/normal", children: G }),
                          (0, l.jsxs)("div", {
                              className: N.UD,
                              children: [
                                  null != D
                                      ? (0, l.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: N.FS,
                                            children: (0, l.jsx)(A.$, {
                                                variant: "primary",
                                                text: D,
                                                onClick: () => {
                                                    T
                                                        ? g.R()
                                                        : j
                                                          ? (0, d.openModalLazy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("84704"),
                                                                        n.e("85543"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, l.jsx)(e, {
                                                                            reason: f.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: C.V },
                                                            )
                                                          : y &&
                                                            (m.A.verifyResend(),
                                                            (0, o.A)({
                                                                title: b.intl.string(b.t.LykQYk),
                                                                subtitle: b.intl.format(b.t.azKEPy, {
                                                                    email: x.default.getCurrentUser()?.email,
                                                                }),
                                                            })),
                                                        s();
                                                },
                                            }),
                                        })
                                      : null,
                                  T || j || y
                                      ? (0, l.jsx)(_.Q, {
                                            onClick: s,
                                            text: b.intl.string(b.t.oEAioF),
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
