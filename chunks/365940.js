i.d(e, { A: () => f });
var l = i(627968),
    n = i(64700),
    a = i(503698),
    r = i.n(a),
    s = i(91871),
    o = i.n(s),
    d = i(189213),
    c = i(939249),
    u = i(834730),
    E = i(289873),
    I = i(892547),
    A = i(534514),
    _ = i(154672),
    h = i(198982),
    g = i(573435),
    m = i(263063),
    S = i(486020),
    y = i(860689),
    L = i(330936),
    x = i(985018),
    p = i(667941),
    C = i(906471);
function v(t) {
    let { guildInfo: e, onClick: i, submitting: n } = t,
        a = S.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }) ?? void 0;
    return (0, l.jsxs)(c.D, {
        className: p.oG,
        onClick: i,
        children: [
            (0, l.jsx)(g.Ay, {
                mask: g.Ay.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, l.jsx)(m.Ay, {
                    className: p.$f,
                    iconSrc: a,
                    guild: (0, y.yF)({ ...e, features: [] }),
                    size: m.Ay.Sizes.MEDIUM,
                }),
            }),
            (0, l.jsx)(u.E, { className: p.J5, variant: "text-md/semibold", children: e.name }),
            n ? (0, l.jsx)(E.y, { type: E.y.Type.PULSING_ELLIPSIS }) : (0, l.jsx)("img", { alt: "", src: C }),
        ],
    });
}
let f = (t) => {
    let { setStep: e, email: i, guildsInfo: a, setGuildId: s, ...c } = t,
        [E, g] = n.useState(null),
        [m, S] = n.useState(void 0),
        [y, C] = n.useState(null),
        f = () => e(L.Di.SUBMIT_SCHOOL),
        M = a;
    return (
        null != m && "" !== m && (M = a.filter((t) => o()(m.toLowerCase(), t.name.toLowerCase()))),
        (0, l.jsx)(d.Modal, {
            ...c,
            title: x.intl.string(x.t.mOMeiR),
            subtitle: x.intl.format(x.t.dZeiTJ, { onJoinWaitlist: f }),
            input: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(I.I, {
                        placeholder: x.intl.string(x.t["5h0QOP"]),
                        onChange: (t) => {
                            S(t);
                        },
                        "aria-label": x.intl.string(x.t["5h0QOP"]),
                        query: m ?? "",
                        onClear: () => {
                            S(void 0);
                        },
                    }),
                    (0, l.jsx)(u.E, {
                        color: "text-feedback-critical",
                        variant: "text-xs/normal",
                        children: E?.getAnyErrorMessage(),
                    }),
                ],
            }),
            actions: [],
            children:
                M.length > 0
                    ? (0, l.jsx)("div", {
                          className: p.vQ,
                          children: M.map((t) => {
                              let n;
                              return void 0 === t
                                  ? null
                                  : (0, l.jsx)(
                                        v,
                                        {
                                            guildInfo: t,
                                            onClick:
                                                ((n = t.id),
                                                async () => {
                                                    g(null), s(n), C(n);
                                                    try {
                                                        await _.A.sendVerificationEmail(i, !0, n), e(L.Di.VERIFY_PIN);
                                                    } catch (t) {
                                                        g(new h.LG(t));
                                                    } finally {
                                                        C(null);
                                                    }
                                                }),
                                            submitting: y === t.id,
                                        },
                                        t.id,
                                    );
                          }),
                      })
                    : (0, l.jsx)("div", {
                          className: p.pb,
                          children: (0, l.jsxs)("div", {
                              className: p.rv,
                              children: [
                                  (0, l.jsx)(A.D, {
                                      className: r()(p.He, p.wx),
                                      variant: "heading-xl/semibold",
                                      children: x.intl.string(x.t["1eUrDc"]),
                                  }),
                                  (0, l.jsx)(u.E, {
                                      className: p.He,
                                      variant: "text-md/normal",
                                      children: x.intl.format(x.t.flgDKM, { onJoinWaitlist: f }),
                                  }),
                              ],
                          }),
                      }),
        })
    );
};
