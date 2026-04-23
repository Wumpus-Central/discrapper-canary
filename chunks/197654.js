i.d(e, { A: () => A });
var l = i(627968),
    a = i(64700),
    n = i(189213),
    r = i(292666),
    s = i(834730),
    o = i(154672),
    c = i(198982),
    d = i(734057),
    u = i(330936),
    _ = i(652215),
    E = i(985018),
    I = i(840127);
let A = (t) => {
    let { setStep: e, setGuildsInfo: i, email: A, setEmail: g, setGuildId: h, invite: m, ...S } = t,
        [y, f] = a.useState(null),
        [L, x] = a.useState(!1),
        p = async (t) => {
            t.preventDefault(), f(null), x(!0);
            try {
                let t = m?.guild?.id ?? d.A.getChannel(m?.channel?.id)?.getGuildId() ?? void 0;
                t === u.TA && (t = void 0);
                let l = await o.A.sendVerificationEmail(A, !0, t),
                    a = l.guilds_info;
                l.has_matching_guild
                    ? (h(t), e(u.Di.VERIFY_PIN))
                    : 0 === a.length
                      ? e(u.Di.SUBMIT_SCHOOL)
                      : 1 === a.length
                        ? (h(a[0].id), await o.A.sendVerificationEmail(A, !0, a[0].id), e(u.Di.VERIFY_PIN))
                        : (i(a), e(u.Di.SELECT_SCHOOL));
            } catch (t) {
                f(new c.LG(t));
            } finally {
                x(!1);
            }
        },
        C = E.intl.string(E.t.H1jCHH);
    if (m?.guild != null && m.guild.id !== u.TA && m?.approximate_member_count != null) {
        let { name: t } = m.guild;
        C = E.intl.formatToPlainString(E.t["4T4+p1"], { guildName: t, count: m.approximate_member_count });
    }
    return (0, l.jsx)("form", {
        className: I.o,
        onSubmit: p,
        children: (0, l.jsxs)(n.Modal, {
            ...S,
            title: C,
            actions: [{ variant: "primary", type: "submit", loading: L, text: E.intl.string(E.t["8vmKO0"]) }],
            children: [
                (0, l.jsx)(r.k, {
                    label: E.intl.string(E.t.kmCxkf),
                    placeholder: E.intl.string(E.t.ImAOh5),
                    onChange: (t) => {
                        g(t);
                    },
                    error: y?.getAnyErrorMessage(),
                }),
                (0, l.jsx)(s.E, {
                    className: I.V,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: E.intl.format(E.t.cgT481, { termsURL: _.X7G.TERMS, privacyURL: _.X7G.PRIVACY }),
                }),
            ],
        }),
    });
};
