i.d(e, { A: () => v });
var l = i(627968),
    a = i(64700),
    n = i(503698),
    r = i.n(n),
    s = i(91871),
    o = i.n(s),
    c = i(189213),
    d = i(939249),
    u = i(834730),
    _ = i(289873),
    E = i(892547),
    I = i(534514),
    A = i(154672),
    g = i(198982),
    h = i(573435),
    m = i(263063),
    S = i(486020),
    y = i(860689),
    f = i(330936),
    L = i(985018),
    x = i(667941),
    p = i(906471);
function C(t) {
    let { guildInfo: e, onClick: i, submitting: a } = t,
        n = S.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }) ?? void 0;
    return (0, l.jsxs)(d.D, {
        className: x.oG,
        onClick: i,
        children: [
            (0, l.jsx)(h.Ay, {
                mask: h.Ay.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, l.jsx)(m.Ay, {
                    className: x.$f,
                    iconSrc: n,
                    guild: (0, y.yF)({ ...e, features: [] }),
                    size: m.Ay.Sizes.MEDIUM,
                }),
            }),
            (0, l.jsx)(u.E, { className: x.J5, variant: "text-md/semibold", children: e.name }),
            a ? (0, l.jsx)(_.y, { type: _.y.Type.PULSING_ELLIPSIS }) : (0, l.jsx)("img", { alt: "", src: p }),
        ],
    });
}
let v = (t) => {
    let { setStep: e, email: i, guildsInfo: n, setGuildId: s, ...d } = t,
        [_, h] = a.useState(null),
        [m, S] = a.useState(void 0),
        [y, p] = a.useState(null),
        v = () => e(f.Di.SUBMIT_SCHOOL),
        R = n;
    return (
        null != m && "" !== m && (R = n.filter((t) => o()(m.toLowerCase(), t.name.toLowerCase()))),
        (0, l.jsx)(c.Modal, {
            ...d,
            title: L.intl.string(L.t.mOMeiR),
            subtitle: L.intl.format(L.t.dZeiTJ, { onJoinWaitlist: v }),
            input: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(E.I, {
                        placeholder: L.intl.string(L.t["5h0QOP"]),
                        onChange: (t) => {
                            S(t);
                        },
                        "aria-label": L.intl.string(L.t["5h0QOP"]),
                        query: m ?? "",
                        onClear: () => {
                            S(void 0);
                        },
                    }),
                    (0, l.jsx)(u.E, {
                        color: "text-feedback-critical",
                        variant: "text-xs/normal",
                        children: _?.getAnyErrorMessage(),
                    }),
                ],
            }),
            actions: [],
            children:
                R.length > 0
                    ? (0, l.jsx)("div", {
                          className: x.vQ,
                          children: R.map((t) => {
                              let a;
                              return void 0 === t
                                  ? null
                                  : (0, l.jsx)(
                                        C,
                                        {
                                            guildInfo: t,
                                            onClick:
                                                ((a = t.id),
                                                async () => {
                                                    h(null), s(a), p(a);
                                                    try {
                                                        await A.A.sendVerificationEmail(i, !0, a), e(f.Di.VERIFY_PIN);
                                                    } catch (t) {
                                                        h(new g.LG(t));
                                                    } finally {
                                                        p(null);
                                                    }
                                                }),
                                            submitting: y === t.id,
                                        },
                                        t.id,
                                    );
                          }),
                      })
                    : (0, l.jsx)("div", {
                          className: x.pb,
                          children: (0, l.jsxs)("div", {
                              className: x.rv,
                              children: [
                                  (0, l.jsx)(I.D, {
                                      className: r()(x.He, x.wx),
                                      variant: "heading-xl/semibold",
                                      children: L.intl.string(L.t["1eUrDc"]),
                                  }),
                                  (0, l.jsx)(u.E, {
                                      className: x.He,
                                      variant: "text-md/normal",
                                      children: L.intl.format(L.t.flgDKM, { onJoinWaitlist: v }),
                                  }),
                              ],
                          }),
                      }),
        })
    );
};
