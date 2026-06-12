i.d(e, { default: () => J });
var l = i(627968),
    n = i(64700),
    a = i(224640),
    s = i(289873),
    r = i(17928),
    o = i(376728),
    c = i(299091),
    d = i(189213),
    u = i(292666),
    g = i(834730),
    m = i(154672),
    h = i(913122),
    x = i(734057),
    y = i(330936),
    S = i(652215),
    I = i(375708),
    E = i(840127);
let f = (t) => {
    let { setStep: e, setGuildsInfo: i, email: a, setEmail: s, setGuildId: r, invite: o, ...c } = t,
        [f, A] = n.useState(null),
        [v, j] = n.useState(!1),
        p = async (t) => {
            t.preventDefault(), A(null), j(!0);
            try {
                let t = o?.guild?.id ?? x.A.getChannel(o?.channel?.id)?.getGuildId() ?? void 0;
                t === y.TA && (t = void 0);
                let l = await m.A.sendVerificationEmail(a, !0, t),
                    n = l.guilds_info;
                l.has_matching_guild
                    ? (r(t), e(y.Di.VERIFY_PIN))
                    : 0 === n.length
                      ? e(y.Di.SUBMIT_SCHOOL)
                      : 1 === n.length
                        ? (r(n[0].id), await m.A.sendVerificationEmail(a, !0, n[0].id), e(y.Di.VERIFY_PIN))
                        : (i(n), e(y.Di.SELECT_SCHOOL));
            } catch (t) {
                A(new h.LG(t));
            } finally {
                j(!1);
            }
        },
        C = I.intl.string(I.t.H1jCHH);
    if (o?.guild != null && o.guild.id !== y.TA && o?.approximate_member_count != null) {
        let { name: t } = o.guild;
        C = I.intl.formatToPlainString(I.t["4T4+p1"], { guildName: t, count: o.approximate_member_count });
    }
    return (0, l.jsx)("form", {
        className: E.o,
        onSubmit: p,
        children: (0, l.jsxs)(d.Modal, {
            ...c,
            title: C,
            actions: [{ variant: "primary", type: "submit", loading: v, text: I.intl.string(I.t["8vmKO0"]) }],
            children: [
                (0, l.jsx)(u.k, {
                    label: I.intl.string(I.t.kmCxkf),
                    placeholder: I.intl.string(I.t.ImAOh5),
                    onChange: (t) => {
                        s(t);
                    },
                    error: f?.getAnyErrorMessage(),
                }),
                (0, l.jsx)(g.E, {
                    className: E.V,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: I.intl.format(I.t.cgT481, { termsURL: S.X7G.TERMS, privacyURL: S.X7G.PRIVACY }),
                }),
            ],
        }),
    });
};
var A = i(503698),
    v = i.n(A),
    j = i(91871),
    p = i.n(j),
    C = i(939249),
    L = i(892547),
    _ = i(534514),
    b = i(573435),
    k = i(548118),
    M = i(486020),
    D = i(860689),
    N = i(667941),
    T = i(906471);
function w(t) {
    let { guildInfo: e, onClick: i, submitting: n } = t,
        a = M.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }) ?? void 0;
    return (0, l.jsxs)(C.D, {
        className: N.oG,
        onClick: i,
        children: [
            (0, l.jsx)(b.Ay, {
                mask: b.Ay.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, l.jsx)(k.Ay, {
                    className: N.$f,
                    iconSrc: a,
                    guild: (0, D.yF)({ ...e, features: [] }),
                    size: k.Ay.Sizes.MEDIUM,
                }),
            }),
            (0, l.jsx)(g.E, { className: N.J5, variant: "text-md/semibold", children: e.name }),
            n ? (0, l.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS }) : (0, l.jsx)("img", { alt: "", src: T }),
        ],
    });
}
let R = (t) => {
    let { setStep: e, email: i, guildsInfo: a, setGuildId: s, ...r } = t,
        [o, c] = n.useState(null),
        [u, x] = n.useState(void 0),
        [S, E] = n.useState(null),
        f = () => e(y.Di.SUBMIT_SCHOOL),
        A = a;
    return (
        null != u && "" !== u && (A = a.filter((t) => p()(u.toLowerCase(), t.name.toLowerCase()))),
        (0, l.jsx)(d.Modal, {
            ...r,
            title: I.intl.string(I.t.mOMeiR),
            subtitle: I.intl.format(I.t.dZeiTJ, { onJoinWaitlist: f }),
            input: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(L.I, {
                        placeholder: I.intl.string(I.t["5h0QOP"]),
                        onChange: (t) => {
                            x(t);
                        },
                        "aria-label": I.intl.string(I.t["5h0QOP"]),
                        query: u ?? "",
                        onClear: () => {
                            x(void 0);
                        },
                    }),
                    (0, l.jsx)(g.E, {
                        color: "text-feedback-critical",
                        variant: "text-xs/normal",
                        children: o?.getAnyErrorMessage(),
                    }),
                ],
            }),
            actions: [],
            children:
                A.length > 0
                    ? (0, l.jsx)("div", {
                          className: N.vQ,
                          children: A.map((t) => {
                              let n;
                              return void 0 === t
                                  ? null
                                  : (0, l.jsx)(
                                        w,
                                        {
                                            guildInfo: t,
                                            onClick:
                                                ((n = t.id),
                                                async () => {
                                                    c(null), s(n), E(n);
                                                    try {
                                                        await m.A.sendVerificationEmail(i, !0, n), e(y.Di.VERIFY_PIN);
                                                    } catch (t) {
                                                        c(new h.LG(t));
                                                    } finally {
                                                        E(null);
                                                    }
                                                }),
                                            submitting: S === t.id,
                                        },
                                        t.id,
                                    );
                          }),
                      })
                    : (0, l.jsx)("div", {
                          className: N.pb,
                          children: (0, l.jsxs)("div", {
                              className: N.rv,
                              children: [
                                  (0, l.jsx)(_.D, {
                                      className: v()(N.He, N.wx),
                                      variant: "heading-xl/semibold",
                                      children: I.intl.string(I.t["1eUrDc"]),
                                  }),
                                  (0, l.jsx)(g.E, {
                                      className: N.He,
                                      variant: "text-md/normal",
                                      children: I.intl.format(I.t.flgDKM, { onJoinWaitlist: f }),
                                  }),
                              ],
                          }),
                      }),
        })
    );
};
var O = i(650583);
let G = (t) => {
    let { email: e, setStep: i, onBack: a, school: s, setSchool: r, ...o } = t,
        [c, g] = n.useState(null),
        [x, S] = n.useState(!1),
        E = async () => {
            g(null), S(!0);
            try {
                await m.A.signup(e, s), i(y.Di.EMAIL_WAITLIST);
            } catch (t) {
                g(new h.LG(t));
            } finally {
                S(!1);
            }
        },
        f = async (t) => {
            null != s && "" !== s && t.key === O.dh.ENTER && (await E());
        };
    return (0, l.jsx)(d.Modal, {
        ...o,
        title: I.intl.string(I.t["2FNWBG"]),
        subtitle: I.intl.string(I.t["/4y6ox"]),
        actions: [
            { variant: "secondary", onClick: a, text: I.intl.string(I.t["13/7kX"]) },
            { variant: "primary", text: I.intl.string(I.t.PDsYAo), onClick: E, loading: x },
        ],
        children: (0, l.jsx)(u.k, {
            label: I.intl.string(I.t["L+AfJr"]),
            onKeyPress: f,
            placeholder: I.intl.string(I.t.Y1btJd),
            onChange: (t) => {
                r(t);
            },
            error: c?.getAnyErrorMessage(),
        }),
    });
};
var V = i(735438),
    P = i.n(V),
    H = i(976860);
let F = (t) => {
    let { email: e, guildId: i, transitionState: a, onClose: s } = t,
        [r, o] = n.useState(""),
        [c, g] = n.useState(null),
        x = n.useCallback(async () => {
            if (null != i)
                try {
                    let t = await m.A.verifyCode(r, i, e);
                    t.guild && (s(), (0, H.pX)(S.BVt.CHANNEL(t.guild.id)));
                } catch (t) {
                    g(new h.LG(t));
                }
        }, [r, e, i, s]),
        y = P().throttle(() => {
            m.A.sendVerificationEmail(e, !0, i);
        }, 1e3),
        E = async (t) => {
            null != r && "" !== r && t.key === O.dh.ENTER && (await x());
        };
    return (0, l.jsx)(d.Modal, {
        transitionState: a,
        onClose: s,
        title: I.intl.string(I.t.SJ3Lxc),
        subtitle: I.intl.format(I.t["b+W0oq"], { email: e, onClick: y }),
        actions: [{ variant: "primary", text: I.intl.string(I.t.geKm7t), onClick: x }],
        children: (0, l.jsx)(u.k, {
            label: I.intl.string(I.t.rpWT1s),
            onKeyPress: E,
            onChange: (t) => {
                null != t && "" !== t && o(t);
            },
            error: c?.getAnyErrorMessage(),
        }),
    });
};
var U = i(123292);
let Y = (t) => {
    let { school: e, setStep: i, ...n } = t;
    return (0, l.jsx)(d.Modal, {
        ...n,
        title: I.intl.string(I.t.OaloU5),
        subtitle: I.intl.format(I.t.Rs7MXJ, { school: e }),
        actions: [],
        children: (0, l.jsx)(U.Q, {
            variant: "primary",
            size: "sm",
            text: I.intl.string(I.t.Zg63h4),
            onClick: () => {
                i(y.Di.VERIFY_EMAIL);
            },
        }),
    });
};
var B = i(692603);
function J(t) {
    let { inviteCode: e, ...i } = t,
        [d, u] = n.useState(null != e);
    n.useEffect(() => {
        null != e && o.Ay.resolveInvite(e, "Hub").finally(() => u(!1));
    }, [e]);
    let g = (0, r.bG)([c.A], () => (null != e ? c.A.getInvite(e) : null)),
        [m, h] = n.useState([y.Di.VERIFY_EMAIL]),
        [x, S] = n.useState(""),
        [I, E] = n.useState(""),
        [A, v] = n.useState(void 0),
        [j, p] = n.useState([]),
        C = (t) => {
            h(m.concat(t).slice(-4));
        },
        L = m[m.length - 1];
    if (d) return (0, l.jsx)(a.d, { ...i, children: (0, l.jsx)(s.y, { className: B.u }) });
    switch (L) {
        case y.Di.VERIFY_EMAIL:
            return (0, l.jsx)(f, {
                setGuildsInfo: p,
                setStep: C,
                email: x,
                setEmail: S,
                setGuildId: v,
                invite: g,
                ...i,
            });
        case y.Di.SELECT_SCHOOL:
            return (0, l.jsx)(R, { guildsInfo: j, setStep: C, email: x, setGuildId: v, ...i });
        case y.Di.SUBMIT_SCHOOL:
            return (0, l.jsx)(G, {
                onBack: () => {
                    m.length > 1 && h(m.slice(0, -1).slice(-4));
                },
                setStep: C,
                email: x,
                school: I,
                setSchool: E,
                ...i,
            });
        case y.Di.VERIFY_PIN:
            return (0, l.jsx)(F, { email: x, guildId: A, ...i });
        case y.Di.EMAIL_WAITLIST:
            return (0, l.jsx)(Y, { setStep: C, school: I, ...i });
        default:
            return i.onClose(), null;
    }
}
