i.d(e, { default: () => W });
var l = i(627968),
    a = i(64700),
    n = i(224640),
    r = i(289873),
    s = i(17928),
    o = i(376728),
    c = i(299091),
    d = i(189213),
    u = i(292666),
    _ = i(834730),
    E = i(154672),
    I = i(845584),
    g = i(734057),
    h = i(330936),
    m = i(652215),
    A = i(985018),
    S = i(840127);
let y = (t) => {
    let { setStep: e, setGuildsInfo: i, email: n, setEmail: r, setGuildId: s, invite: o, ...c } = t,
        [y, f] = a.useState(null),
        [L, x] = a.useState(!1),
        p = async (t) => {
            t.preventDefault(), f(null), x(!0);
            try {
                let t = o?.guild?.id ?? g.A.getChannel(o?.channel?.id)?.getGuildId() ?? void 0;
                t === h.TA && (t = void 0);
                let l = await E.A.sendVerificationEmail(n, !0, t),
                    a = l.guilds_info;
                l.has_matching_guild
                    ? (s(t), e(h.Di.VERIFY_PIN))
                    : 0 === a.length
                      ? e(h.Di.SUBMIT_SCHOOL)
                      : 1 === a.length
                        ? (s(a[0].id), await E.A.sendVerificationEmail(n, !0, a[0].id), e(h.Di.VERIFY_PIN))
                        : (i(a), e(h.Di.SELECT_SCHOOL));
            } catch (t) {
                f(new I.LG(t));
            } finally {
                x(!1);
            }
        },
        C = A.intl.string(A.t.H1jCHH);
    if (o?.guild != null && o.guild.id !== h.TA && o?.approximate_member_count != null) {
        let { name: t } = o.guild;
        C = A.intl.formatToPlainString(A.t["4T4+p1"], { guildName: t, count: o.approximate_member_count });
    }
    return (0, l.jsx)("form", {
        className: S.o,
        onSubmit: p,
        children: (0, l.jsxs)(d.Modal, {
            ...c,
            title: C,
            actions: [{ variant: "primary", type: "submit", loading: L, text: A.intl.string(A.t["8vmKO0"]) }],
            children: [
                (0, l.jsx)(u.k, {
                    label: A.intl.string(A.t.kmCxkf),
                    placeholder: A.intl.string(A.t.ImAOh5),
                    onChange: (t) => {
                        r(t);
                    },
                    error: y?.getAnyErrorMessage(),
                }),
                (0, l.jsx)(_.E, {
                    className: S.V,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: A.intl.format(A.t.cgT481, { termsURL: m.X7G.TERMS, privacyURL: m.X7G.PRIVACY }),
                }),
            ],
        }),
    });
};
var f = i(503698),
    L = i.n(f),
    x = i(91871),
    p = i.n(x),
    C = i(939249),
    v = i(892547),
    R = i(534514),
    M = i(573435),
    T = i(548118),
    N = i(486020),
    b = i(860689),
    j = i(667941),
    O = i(906471);
function H(t) {
    let { guildInfo: e, onClick: i, submitting: a } = t,
        n = N.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }) ?? void 0;
    return (0, l.jsxs)(C.D, {
        className: j.oG,
        onClick: i,
        children: [
            (0, l.jsx)(M.Ay, {
                mask: M.Ay.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, l.jsx)(T.Ay, {
                    className: j.$f,
                    iconSrc: n,
                    guild: (0, b.yF)({ ...e, features: [] }),
                    size: T.Ay.Sizes.MEDIUM,
                }),
            }),
            (0, l.jsx)(_.E, { className: j.J5, variant: "text-md/semibold", children: e.name }),
            a ? (0, l.jsx)(r.y, { type: r.y.Type.PULSING_ELLIPSIS }) : (0, l.jsx)("img", { alt: "", src: O }),
        ],
    });
}
let k = (t) => {
    let { setStep: e, email: i, guildsInfo: n, setGuildId: r, ...s } = t,
        [o, c] = a.useState(null),
        [u, g] = a.useState(void 0),
        [m, S] = a.useState(null),
        y = () => e(h.Di.SUBMIT_SCHOOL),
        f = n;
    return (
        null != u && "" !== u && (f = n.filter((t) => p()(u.toLowerCase(), t.name.toLowerCase()))),
        (0, l.jsx)(d.Modal, {
            ...s,
            title: A.intl.string(A.t.mOMeiR),
            subtitle: A.intl.format(A.t.dZeiTJ, { onJoinWaitlist: y }),
            input: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(v.I, {
                        placeholder: A.intl.string(A.t["5h0QOP"]),
                        onChange: (t) => {
                            g(t);
                        },
                        "aria-label": A.intl.string(A.t["5h0QOP"]),
                        query: u ?? "",
                        onClear: () => {
                            g(void 0);
                        },
                    }),
                    (0, l.jsx)(_.E, {
                        color: "text-feedback-critical",
                        variant: "text-xs/normal",
                        children: o?.getAnyErrorMessage(),
                    }),
                ],
            }),
            actions: [],
            children:
                f.length > 0
                    ? (0, l.jsx)("div", {
                          className: j.vQ,
                          children: f.map((t) => {
                              let a;
                              return void 0 === t
                                  ? null
                                  : (0, l.jsx)(
                                        H,
                                        {
                                            guildInfo: t,
                                            onClick:
                                                ((a = t.id),
                                                async () => {
                                                    c(null), r(a), S(a);
                                                    try {
                                                        await E.A.sendVerificationEmail(i, !0, a), e(h.Di.VERIFY_PIN);
                                                    } catch (t) {
                                                        c(new I.LG(t));
                                                    } finally {
                                                        S(null);
                                                    }
                                                }),
                                            submitting: m === t.id,
                                        },
                                        t.id,
                                    );
                          }),
                      })
                    : (0, l.jsx)("div", {
                          className: j.pb,
                          children: (0, l.jsxs)("div", {
                              className: j.rv,
                              children: [
                                  (0, l.jsx)(R.D, {
                                      className: L()(j.He, j.wx),
                                      variant: "heading-xl/semibold",
                                      children: A.intl.string(A.t["1eUrDc"]),
                                  }),
                                  (0, l.jsx)(_.E, {
                                      className: j.He,
                                      variant: "text-md/normal",
                                      children: A.intl.format(A.t.flgDKM, { onJoinWaitlist: y }),
                                  }),
                              ],
                          }),
                      }),
        })
    );
};
var U = i(650583);
let D = (t) => {
    let { email: e, setStep: i, onBack: n, school: r, setSchool: s, ...o } = t,
        [c, _] = a.useState(null),
        [g, m] = a.useState(!1),
        S = async () => {
            _(null), m(!0);
            try {
                await E.A.signup(e, r), i(h.Di.EMAIL_WAITLIST);
            } catch (t) {
                _(new I.LG(t));
            } finally {
                m(!1);
            }
        },
        y = async (t) => {
            null != r && "" !== r && t.key === U.dh.ENTER && (await S());
        };
    return (0, l.jsx)(d.Modal, {
        ...o,
        title: A.intl.string(A.t["2FNWBG"]),
        subtitle: A.intl.string(A.t["/4y6ox"]),
        actions: [
            { variant: "secondary", onClick: n, text: A.intl.string(A.t["13/7kX"]) },
            { variant: "primary", text: A.intl.string(A.t.PDsYAo), onClick: S, loading: g },
        ],
        children: (0, l.jsx)(u.k, {
            label: A.intl.string(A.t["L+AfJr"]),
            onKeyPress: y,
            placeholder: A.intl.string(A.t.Y1btJd),
            onChange: (t) => {
                s(t);
            },
            error: c?.getAnyErrorMessage(),
        }),
    });
};
var w = i(735438),
    V = i.n(w),
    F = i(976860);
let Y = (t) => {
    let { email: e, guildId: i, transitionState: n, onClose: r } = t,
        [s, o] = a.useState(""),
        [c, _] = a.useState(null),
        g = a.useCallback(async () => {
            if (null != i)
                try {
                    let t = await E.A.verifyCode(s, i, e);
                    t.guild && (r(), (0, F.pX)(m.BVt.CHANNEL(t.guild.id)));
                } catch (t) {
                    _(new I.LG(t));
                }
        }, [s, e, i, r]),
        h = V().throttle(() => {
            E.A.sendVerificationEmail(e, !0, i);
        }, 1e3),
        S = async (t) => {
            null != s && "" !== s && t.key === U.dh.ENTER && (await g());
        };
    return (0, l.jsx)(d.Modal, {
        transitionState: n,
        onClose: r,
        title: A.intl.string(A.t.SJ3Lxc),
        subtitle: A.intl.format(A.t["b+W0oq"], { email: e, onClick: h }),
        actions: [{ variant: "primary", text: A.intl.string(A.t.geKm7t), onClick: g }],
        children: (0, l.jsx)(u.k, {
            label: A.intl.string(A.t.rpWT1s),
            onKeyPress: S,
            onChange: (t) => {
                null != t && "" !== t && o(t);
            },
            error: c?.getAnyErrorMessage(),
        }),
    });
};
var P = i(123292);
let B = (t) => {
    let { school: e, setStep: i, ...a } = t;
    return (0, l.jsx)(d.Modal, {
        ...a,
        title: A.intl.string(A.t.OaloU5),
        subtitle: A.intl.format(A.t.Rs7MXJ, { school: e }),
        actions: [],
        children: (0, l.jsx)(P.Q, {
            variant: "primary",
            size: "sm",
            text: A.intl.string(A.t.Zg63h4),
            onClick: () => {
                i(h.Di.VERIFY_EMAIL);
            },
        }),
    });
};
var G = i(692603);
function W(t) {
    let { inviteCode: e, ...i } = t,
        [d, u] = a.useState(null != e);
    a.useEffect(() => {
        null != e && o.Ay.resolveInvite(e, "Hub").finally(() => u(!1));
    }, [e]);
    let _ = (0, s.bG)([c.A], () => (null != e ? c.A.getInvite(e) : null)),
        [E, I] = a.useState([h.Di.VERIFY_EMAIL]),
        [g, m] = a.useState(""),
        [A, S] = a.useState(""),
        [f, L] = a.useState(void 0),
        [x, p] = a.useState([]),
        C = (t) => {
            I(E.concat(t).slice(-4));
        },
        v = E[E.length - 1];
    if (d) return (0, l.jsx)(n.d, { ...i, children: (0, l.jsx)(r.y, { className: G.u }) });
    switch (v) {
        case h.Di.VERIFY_EMAIL:
            return (0, l.jsx)(y, {
                setGuildsInfo: p,
                setStep: C,
                email: g,
                setEmail: m,
                setGuildId: L,
                invite: _,
                ...i,
            });
        case h.Di.SELECT_SCHOOL:
            return (0, l.jsx)(k, { guildsInfo: x, setStep: C, email: g, setGuildId: L, ...i });
        case h.Di.SUBMIT_SCHOOL:
            return (0, l.jsx)(D, {
                onBack: () => {
                    E.length > 1 && I(E.slice(0, -1).slice(-4));
                },
                setStep: C,
                email: g,
                school: A,
                setSchool: S,
                ...i,
            });
        case h.Di.VERIFY_PIN:
            return (0, l.jsx)(Y, { email: g, guildId: f, ...i });
        case h.Di.EMAIL_WAITLIST:
            return (0, l.jsx)(B, { setStep: C, school: A, ...i });
        default:
            return i.onClose(), null;
    }
}
