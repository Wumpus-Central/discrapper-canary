i.d(e, { A: () => _ });
var l = i(627968),
    n = i(64700),
    a = i(189213),
    r = i(292666),
    s = i(834730),
    o = i(154672),
    d = i(198982),
    c = i(734057),
    u = i(330936),
    E = i(652215),
    I = i(985018),
    A = i(840127);
let _ = (t) => {
    let { setStep: e, setGuildsInfo: i, email: _, setEmail: h, setGuildId: g, invite: m, ...S } = t,
        [y, L] = n.useState(null),
        [x, p] = n.useState(!1),
        C = async (t) => {
            t.preventDefault(), L(null), p(!0);
            try {
                let t = m?.guild?.id ?? c.A.getChannel(m?.channel?.id)?.getGuildId() ?? void 0;
                t === u.TA && (t = void 0);
                let l = await o.A.sendVerificationEmail(_, !0, t),
                    n = l.guilds_info;
                l.has_matching_guild
                    ? (g(t), e(u.Di.VERIFY_PIN))
                    : 0 === n.length
                      ? e(u.Di.SUBMIT_SCHOOL)
                      : 1 === n.length
                        ? (g(n[0].id), await o.A.sendVerificationEmail(_, !0, n[0].id), e(u.Di.VERIFY_PIN))
                        : (i(n), e(u.Di.SELECT_SCHOOL));
            } catch (t) {
                L(new d.LG(t));
            } finally {
                p(!1);
            }
        },
        v = I.intl.string(I.t.H1jCHH);
    if (m?.guild != null && m.guild.id !== u.TA && m?.approximate_member_count != null) {
        let { name: t } = m.guild;
        v = I.intl.formatToPlainString(I.t["4T4+p1"], { guildName: t, count: m.approximate_member_count });
    }
    return (0, l.jsx)("form", {
        className: A.o,
        onSubmit: C,
        children: (0, l.jsxs)(a.Modal, {
            ...S,
            title: v,
            actions: [{ variant: "primary", type: "submit", loading: x, text: I.intl.string(I.t["8vmKO0"]) }],
            children: [
                (0, l.jsx)(r.k, {
                    label: I.intl.string(I.t.kmCxkf),
                    placeholder: I.intl.string(I.t.ImAOh5),
                    onChange: (t) => {
                        h(t);
                    },
                    error: y?.getAnyErrorMessage(),
                }),
                (0, l.jsx)(s.E, {
                    className: A.V,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: I.intl.format(I.t.cgT481, { termsURL: E.X7G.TERMS, privacyURL: E.X7G.PRIVACY }),
                }),
            ],
        }),
    });
};
