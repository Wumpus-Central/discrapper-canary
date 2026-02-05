i.d(e, { A: () => x });
var l = i(627968),
    n = i(64700),
    a = i(503698),
    r = i.n(a),
    s = i(91871),
    o = i.n(s),
    d = i(158954),
    c = i(397927),
    u = i(154672),
    I = i(198982),
    E = i(573435),
    A = i(263063),
    _ = i(486020),
    h = i(860689),
    g = i(330936),
    m = i(985018),
    S = i(292750),
    y = i(906471);
function L(t) {
    let { guildInfo: e, onClick: i, submitting: n } = t,
        a = _.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }) ?? void 0;
    return (0, l.jsxs)(c.DUT, {
        className: S.oG,
        onClick: i,
        children: [
            (0, l.jsx)(E.Ay, {
                mask: E.Ay.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, l.jsx)(A.A, {
                    className: S.$f,
                    iconSrc: a,
                    guild: (0, h.yF)({ ...e, features: [] }),
                    size: A.A.Sizes.MEDIUM,
                }),
            }),
            (0, l.jsx)(c.Text, { className: S.J5, variant: "text-md/semibold", children: e.name }),
            n ? (0, l.jsx)(c.y$y, { type: c.y$y.Type.PULSING_ELLIPSIS }) : (0, l.jsx)("img", { alt: "", src: y }),
        ],
    });
}
let x = (t) => {
    let { setStep: e, email: i, guildsInfo: a, setGuildId: s, ...E } = t,
        [A, _] = n.useState(null),
        [h, y] = n.useState(void 0),
        [x, p] = n.useState(null),
        C = () => e(g.Di.SUBMIT_SCHOOL),
        T = a;
    return (
        null != h && "" !== h && (T = a.filter((t) => o()(h.toLowerCase(), t.name.toLowerCase()))),
        (0, l.jsx)(d.Modal, {
            ...E,
            title: m.intl.string(m.t.mOMeiR),
            subtitle: m.intl.format(m.t.dZeiTJ, { onJoinWaitlist: C }),
            input: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(c.IWV, {
                        placeholder: m.intl.string(m.t["5h0QOP"]),
                        onChange: (t) => {
                            y(t);
                        },
                        "aria-label": m.intl.string(m.t["5h0QOP"]),
                        query: h ?? "",
                        onClear: () => {
                            y(void 0);
                        },
                    }),
                    (0, l.jsx)(c.Text, {
                        color: "text-feedback-critical",
                        variant: "text-xs/normal",
                        children: A?.getAnyErrorMessage(),
                    }),
                ],
            }),
            actions: [],
            children:
                T.length > 0
                    ? (0, l.jsx)("div", {
                          className: S.vQ,
                          children: T.map((t) => {
                              let n;
                              return void 0 === t
                                  ? null
                                  : (0, l.jsx)(
                                        L,
                                        {
                                            guildInfo: t,
                                            onClick:
                                                ((n = t.id),
                                                async () => {
                                                    _(null), s(n), p(n);
                                                    try {
                                                        await u.A.sendVerificationEmail(i, !0, n), e(g.Di.VERIFY_PIN);
                                                    } catch (t) {
                                                        _(new I.LG(t));
                                                    } finally {
                                                        p(null);
                                                    }
                                                }),
                                            submitting: x === t.id,
                                        },
                                        t.id,
                                    );
                          }),
                      })
                    : (0, l.jsx)("div", {
                          className: S.pb,
                          children: (0, l.jsxs)("div", {
                              className: S.rv,
                              children: [
                                  (0, l.jsx)(c.Heading, {
                                      className: r()(S.He, S.wx),
                                      variant: "heading-xl/semibold",
                                      children: m.intl.string(m.t["1eUrDc"]),
                                  }),
                                  (0, l.jsx)(c.Text, {
                                      className: S.He,
                                      variant: "text-md/normal",
                                      children: m.intl.format(m.t.flgDKM, { onJoinWaitlist: C }),
                                  }),
                              ],
                          }),
                      }),
        })
    );
};
