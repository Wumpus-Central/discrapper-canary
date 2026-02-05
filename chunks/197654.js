i.d(e, { A: () => A });
var l = i(627968),
    n = i(64700),
    a = i(158954),
    r = i(397927),
    s = i(154672),
    o = i(198982),
    d = i(734057),
    c = i(330936),
    u = i(652215),
    I = i(985018),
    E = i(182992);
let A = (t) => {
    let { setStep: e, setGuildsInfo: i, email: A, setEmail: _, setGuildId: h, invite: g, ...m } = t,
        [S, y] = n.useState(null),
        [L, x] = n.useState(!1),
        p = async (t) => {
            t.preventDefault(), y(null), x(!0);
            try {
                let t = g?.guild?.id ?? d.A.getChannel(g?.channel?.id)?.getGuildId() ?? void 0;
                t === c.TA && (t = void 0);
                let l = await s.A.sendVerificationEmail(A, !0, t),
                    n = l.guilds_info;
                l.has_matching_guild
                    ? (h(t), e(c.Di.VERIFY_PIN))
                    : 0 === n.length
                      ? e(c.Di.SUBMIT_SCHOOL)
                      : 1 === n.length
                        ? (h(n[0].id), await s.A.sendVerificationEmail(A, !0, n[0].id), e(c.Di.VERIFY_PIN))
                        : (i(n), e(c.Di.SELECT_SCHOOL));
            } catch (t) {
                y(new o.LG(t));
            } finally {
                x(!1);
            }
        },
        C = I.intl.string(I.t.H1jCHH);
    if (g?.guild != null && g.guild.id !== c.TA && g?.approximate_member_count != null) {
        let { name: t } = g.guild;
        C = I.intl.formatToPlainString(I.t["4T4+p1"], { guildName: t, count: g.approximate_member_count });
    }
    return (0, l.jsx)("form", {
        className: E.o,
        onSubmit: p,
        children: (0, l.jsxs)(a.Modal, {
            ...m,
            title: C,
            actions: [{ variant: "primary", type: "submit", loading: L, text: I.intl.string(I.t["8vmKO0"]) }],
            children: [
                (0, l.jsx)(r.ksK, {
                    label: I.intl.string(I.t.kmCxkf),
                    placeholder: I.intl.string(I.t.ImAOh5),
                    onChange: (t) => {
                        _(t);
                    },
                    error: S?.getAnyErrorMessage(),
                }),
                (0, l.jsx)(r.Text, {
                    className: E.V,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: I.intl.format(I.t.cgT481, { termsURL: u.X7G.TERMS, privacyURL: u.X7G.PRIVACY }),
                }),
            ],
        }),
    });
};
