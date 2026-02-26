i.d(e, { A: () => f });
var a = i(627968),
    l = i(64700),
    n = i(503698),
    r = i.n(n),
    s = i(91871),
    o = i.n(s),
    c = i(158954),
    d = i(397927),
    u = i(154672),
    _ = i(198982),
    I = i(573435),
    E = i(263063),
    A = i(486020),
    g = i(860689),
    h = i(330936),
    m = i(985018),
    S = i(191120),
    y = i(906471);
function x(t) {
    let { guildInfo: e, onClick: i, submitting: l } = t,
        n = A.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }) ?? void 0;
    return (0, a.jsxs)(d.DUT, {
        className: S.oG,
        onClick: i,
        children: [
            (0, a.jsx)(I.Ay, {
                mask: I.Ay.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, a.jsx)(E.Ay, {
                    className: S.$f,
                    iconSrc: n,
                    guild: (0, g.yF)({ ...e, features: [] }),
                    size: E.Ay.Sizes.MEDIUM,
                }),
            }),
            (0, a.jsx)(d.Text, { className: S.J5, variant: "text-md/semibold", children: e.name }),
            l ? (0, a.jsx)(d.y$y, { type: d.y$y.Type.PULSING_ELLIPSIS }) : (0, a.jsx)("img", { alt: "", src: y }),
        ],
    });
}
let f = (t) => {
    let { setStep: e, email: i, guildsInfo: n, setGuildId: s, ...I } = t,
        [E, A] = l.useState(null),
        [g, y] = l.useState(void 0),
        [f, L] = l.useState(null),
        p = () => e(h.Di.SUBMIT_SCHOOL),
        C = n;
    return (
        null != g && "" !== g && (C = n.filter((t) => o()(g.toLowerCase(), t.name.toLowerCase()))),
        (0, a.jsx)(c.Modal, {
            ...I,
            title: m.intl.string(m.t.mOMeiR),
            subtitle: m.intl.format(m.t.dZeiTJ, { onJoinWaitlist: p }),
            input: (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(d.IWV, {
                        placeholder: m.intl.string(m.t["5h0QOP"]),
                        onChange: (t) => {
                            y(t);
                        },
                        "aria-label": m.intl.string(m.t["5h0QOP"]),
                        query: g ?? "",
                        onClear: () => {
                            y(void 0);
                        },
                    }),
                    (0, a.jsx)(d.Text, {
                        color: "text-feedback-critical",
                        variant: "text-xs/normal",
                        children: E?.getAnyErrorMessage(),
                    }),
                ],
            }),
            actions: [],
            children:
                C.length > 0
                    ? (0, a.jsx)("div", {
                          className: S.vQ,
                          children: C.map((t) => {
                              let l;
                              return void 0 === t
                                  ? null
                                  : (0, a.jsx)(
                                        x,
                                        {
                                            guildInfo: t,
                                            onClick:
                                                ((l = t.id),
                                                async () => {
                                                    A(null), s(l), L(l);
                                                    try {
                                                        await u.A.sendVerificationEmail(i, !0, l), e(h.Di.VERIFY_PIN);
                                                    } catch (t) {
                                                        A(new _.LG(t));
                                                    } finally {
                                                        L(null);
                                                    }
                                                }),
                                            submitting: f === t.id,
                                        },
                                        t.id,
                                    );
                          }),
                      })
                    : (0, a.jsx)("div", {
                          className: S.pb,
                          children: (0, a.jsxs)("div", {
                              className: S.rv,
                              children: [
                                  (0, a.jsx)(d.Heading, {
                                      className: r()(S.He, S.wx),
                                      variant: "heading-xl/semibold",
                                      children: m.intl.string(m.t["1eUrDc"]),
                                  }),
                                  (0, a.jsx)(d.Text, {
                                      className: S.He,
                                      variant: "text-md/normal",
                                      children: m.intl.format(m.t.flgDKM, { onJoinWaitlist: p }),
                                  }),
                              ],
                          }),
                      }),
        })
    );
};
