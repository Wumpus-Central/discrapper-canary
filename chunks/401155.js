i.d(e, { default: () => J });
var n = i(627968),
    l = i(64700),
    a = i(224640),
    s = i(289873),
    r = i(17928),
    o = i(376728),
    c = i(299091),
    u = i(189213),
    d = i(292666),
    g = i(834730),
    m = i(154672),
    h = i(913122),
    f = i(734057),
    x = i(330936),
    y = i(652215),
    S = i(375708),
    I = i(840127);
let E = function (t) {
    let { setStep: e, setGuildsInfo: i, email: a, setEmail: s, setGuildId: r, invite: o, ...c } = t,
        [E, v] = l.useState(null),
        [A, j] = l.useState(!1);
    async function p(t) {
        t.preventDefault(), v(null), j(!0);
        try {
            let t = o?.guild?.id ?? f.A.getChannel(o?.channel?.id)?.getGuildId() ?? void 0;
            t === x.TA && (t = void 0);
            let n = await m.A.sendVerificationEmail(a, !0, t),
                l = n.guilds_info;
            n.has_matching_guild
                ? (r(t), e(x.Di.VERIFY_PIN))
                : 0 === l.length
                  ? e(x.Di.SUBMIT_SCHOOL)
                  : 1 === l.length
                    ? (r(l[0].id), await m.A.sendVerificationEmail(a, !0, l[0].id), e(x.Di.VERIFY_PIN))
                    : (i(l), e(x.Di.SELECT_SCHOOL));
        } catch (t) {
            v(new h.LG(t));
        } finally {
            j(!1);
        }
    }
    let C = S.intl.string(S.t.H1jCHH);
    if (o?.guild != null && o.guild.id !== x.TA && o?.approximate_member_count != null) {
        let { name: t } = o.guild;
        C = S.intl.formatToPlainString(S.t["4T4+p1"], { guildName: t, count: o.approximate_member_count });
    }
    return (0, n.jsx)("form", {
        className: I.o,
        onSubmit: p,
        children: (0, n.jsxs)(u.Modal, {
            ...c,
            title: C,
            actions: [{ variant: "primary", type: "submit", loading: A, text: S.intl.string(S.t["8vmKO0"]) }],
            children: [
                (0, n.jsx)(d.k, {
                    label: S.intl.string(S.t.kmCxkf),
                    placeholder: S.intl.string(S.t.ImAOh5),
                    onChange: function (t) {
                        s(t);
                    },
                    error: E?.getAnyErrorMessage(),
                }),
                (0, n.jsx)(g.E, {
                    className: I.V,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: S.intl.format(S.t.cgT481, { termsURL: y.X7G.TERMS, privacyURL: y.X7G.PRIVACY }),
                }),
            ],
        }),
    });
};
var v = i(503698),
    A = i.n(v),
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
    let { guildInfo: e, onClick: i, submitting: l } = t,
        a = M.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }) ?? void 0;
    return (0, n.jsxs)(C.D, {
        className: N.oG,
        onClick: i,
        children: [
            (0, n.jsx)(b.Ay, {
                mask: b.Ay.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, n.jsx)(k.Ay, {
                    className: N.$f,
                    iconSrc: a,
                    guild: (0, D.yF)({ ...e, features: [] }),
                    size: k.Ay.Sizes.MEDIUM,
                }),
            }),
            (0, n.jsx)(g.E, { className: N.J5, variant: "text-md/semibold", children: e.name }),
            l ? (0, n.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS }) : (0, n.jsx)("img", { alt: "", src: T }),
        ],
    });
}
let R = function (t) {
    let { setStep: e, email: i, guildsInfo: a, setGuildId: s, ...r } = t,
        [o, c] = l.useState(null),
        [d, f] = l.useState(void 0),
        [y, I] = l.useState(null);
    function E() {
        return e(x.Di.SUBMIT_SCHOOL);
    }
    let v = a;
    return (
        null != d && "" !== d && (v = a.filter((t) => p()(d.toLowerCase(), t.name.toLowerCase()))),
        (0, n.jsx)(u.Modal, {
            ...r,
            title: S.intl.string(S.t.mOMeiR),
            subtitle: S.intl.format(S.t.dZeiTJ, { onJoinWaitlist: E }),
            input: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(L.I, {
                        placeholder: S.intl.string(S.t["5h0QOP"]),
                        onChange: function (t) {
                            f(t);
                        },
                        "aria-label": S.intl.string(S.t["5h0QOP"]),
                        query: d ?? "",
                        onClear: function () {
                            f(void 0);
                        },
                    }),
                    (0, n.jsx)(g.E, {
                        color: "text-feedback-critical",
                        variant: "text-xs/normal",
                        children: o?.getAnyErrorMessage(),
                    }),
                ],
            }),
            actions: [],
            children:
                v.length > 0
                    ? (0, n.jsx)("div", {
                          className: N.vQ,
                          children: v.map((t) => {
                              var l;
                              return void 0 === t
                                  ? null
                                  : (0, n.jsx)(
                                        w,
                                        {
                                            guildInfo: t,
                                            onClick:
                                                ((l = t.id),
                                                async () => {
                                                    c(null), s(l), I(l);
                                                    try {
                                                        await m.A.sendVerificationEmail(i, !0, l), e(x.Di.VERIFY_PIN);
                                                    } catch (t) {
                                                        c(new h.LG(t));
                                                    } finally {
                                                        I(null);
                                                    }
                                                }),
                                            submitting: y === t.id,
                                        },
                                        t.id,
                                    );
                          }),
                      })
                    : (0, n.jsx)("div", {
                          className: N.pb,
                          children: (0, n.jsxs)("div", {
                              className: N.rv,
                              children: [
                                  (0, n.jsx)(_.D, {
                                      className: A()(N.He, N.wx),
                                      variant: "heading-xl/semibold",
                                      children: S.intl.string(S.t["1eUrDc"]),
                                  }),
                                  (0, n.jsx)(g.E, {
                                      className: N.He,
                                      variant: "text-md/normal",
                                      children: S.intl.format(S.t.flgDKM, { onJoinWaitlist: E }),
                                  }),
                              ],
                          }),
                      }),
        })
    );
};
var O = i(650583);
let G = function (t) {
    let { email: e, setStep: i, onBack: a, school: s, setSchool: r, ...o } = t,
        [c, g] = l.useState(null),
        [f, y] = l.useState(!1);
    async function I() {
        g(null), y(!0);
        try {
            await m.A.signup(e, s), i(x.Di.EMAIL_WAITLIST);
        } catch (t) {
            g(new h.LG(t));
        } finally {
            y(!1);
        }
    }
    async function E(t) {
        null != s && "" !== s && t.key === O.dh.ENTER && (await I());
    }
    return (0, n.jsx)(u.Modal, {
        ...o,
        title: S.intl.string(S.t["2FNWBG"]),
        subtitle: S.intl.string(S.t["/4y6ox"]),
        actions: [
            { variant: "secondary", onClick: a, text: S.intl.string(S.t["13/7kX"]) },
            { variant: "primary", text: S.intl.string(S.t.PDsYAo), onClick: I, loading: f },
        ],
        children: (0, n.jsx)(d.k, {
            label: S.intl.string(S.t["L+AfJr"]),
            onKeyPress: E,
            placeholder: S.intl.string(S.t.Y1btJd),
            onChange: function (t) {
                r(t);
            },
            error: c?.getAnyErrorMessage(),
        }),
    });
};
var V = i(735438),
    P = i.n(V),
    H = i(976860);
let F = function (t) {
    let { email: e, guildId: i, transitionState: a, onClose: s } = t,
        [r, o] = l.useState(""),
        [c, g] = l.useState(null),
        f = l.useCallback(async () => {
            if (null != i)
                try {
                    let t = await m.A.verifyCode(r, i, e);
                    t.guild && (s(), (0, H.pX)(y.BVt.CHANNEL(t.guild.id)));
                } catch (t) {
                    g(new h.LG(t));
                }
        }, [r, e, i, s]),
        x = P().throttle(() => {
            m.A.sendVerificationEmail(e, !0, i);
        }, 1e3);
    async function I(t) {
        null != r && "" !== r && t.key === O.dh.ENTER && (await f());
    }
    return (0, n.jsx)(u.Modal, {
        transitionState: a,
        onClose: s,
        title: S.intl.string(S.t.SJ3Lxc),
        subtitle: S.intl.format(S.t["b+W0oq"], { email: e, onClick: x }),
        actions: [{ variant: "primary", text: S.intl.string(S.t.geKm7t), onClick: f }],
        children: (0, n.jsx)(d.k, {
            label: S.intl.string(S.t.rpWT1s),
            onKeyPress: I,
            onChange: function (t) {
                null != t && "" !== t && o(t);
            },
            error: c?.getAnyErrorMessage(),
        }),
    });
};
var U = i(123292);
let Y = function (t) {
    let { school: e, setStep: i, ...l } = t;
    return (0, n.jsx)(u.Modal, {
        ...l,
        title: S.intl.string(S.t.OaloU5),
        subtitle: S.intl.format(S.t.Rs7MXJ, { school: e }),
        actions: [],
        children: (0, n.jsx)(U.Q, {
            variant: "primary",
            size: "sm",
            text: S.intl.string(S.t.Zg63h4),
            onClick: () => {
                i(x.Di.VERIFY_EMAIL);
            },
        }),
    });
};
var B = i(692603);
function J(t) {
    let { inviteCode: e, ...i } = t,
        [u, d] = l.useState(null != e);
    l.useEffect(() => {
        null != e && o.Ay.resolveInvite(e, "Hub").finally(() => d(!1));
    }, [e]);
    let g = (0, r.bG)([c.A], () => (null != e ? c.A.getInvite(e) : null)),
        [m, h] = l.useState([x.Di.VERIFY_EMAIL]),
        [f, y] = l.useState(""),
        [S, I] = l.useState(""),
        [v, A] = l.useState(void 0),
        [j, p] = l.useState([]);
    function C(t) {
        h(m.concat(t).slice(-4));
    }
    let L = m[m.length - 1];
    if (u) return (0, n.jsx)(a.d, { ...i, children: (0, n.jsx)(s.y, { className: B.u }) });
    switch (L) {
        case x.Di.VERIFY_EMAIL:
            return (0, n.jsx)(E, {
                setGuildsInfo: p,
                setStep: C,
                email: f,
                setEmail: y,
                setGuildId: A,
                invite: g,
                ...i,
            });
        case x.Di.SELECT_SCHOOL:
            return (0, n.jsx)(R, { guildsInfo: j, setStep: C, email: f, setGuildId: A, ...i });
        case x.Di.SUBMIT_SCHOOL:
            return (0, n.jsx)(G, {
                onBack: function () {
                    m.length > 1 && h(m.slice(0, -1).slice(-4));
                },
                setStep: C,
                email: f,
                school: S,
                setSchool: I,
                ...i,
            });
        case x.Di.VERIFY_PIN:
            return (0, n.jsx)(F, { email: f, guildId: v, ...i });
        case x.Di.EMAIL_WAITLIST:
            return (0, n.jsx)(Y, { setStep: C, school: S, ...i });
        default:
            return i.onClose(), null;
    }
}
