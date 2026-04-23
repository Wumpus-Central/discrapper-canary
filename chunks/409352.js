t.d(s, { default: () => Y });
var n = t(627968),
    i = t(64700),
    r = t(503698),
    a = t.n(r),
    l = t(735438),
    o = t.n(l),
    c = t(17928),
    d = t(636537),
    h = t(189213),
    x = t(778712),
    m = t(834730),
    u = t(289873),
    _ = t(689175),
    j = t(79644),
    p = t(350688);
function v(e) {
    return (0, n.jsx)(j.fh, { ...e, className: p.Hn });
}
function A(e) {
    let { children: s, ...t } = e;
    return (0, n.jsx)(j.VP, {
        ...t,
        className: p.fi,
        children: (0, n.jsx)(m.E, { variant: "eyebrow", className: p.QP, children: s }),
    });
}
function N(e) {
    return (0, n.jsx)(j.fI, { ...e, className: p.nM });
}
function g(e) {
    return (0, n.jsx)(j.BF, { ...e, className: p.rf });
}
function f(e) {
    return (0, n.jsx)(j.A0, { ...e, className: p.wx });
}
function b(e) {
    let { header: s, footer: t, children: i, ...r } = e;
    return (0, n.jsx)("div", {
        className: p.kL,
        children: (0, n.jsxs)(j.XI, {
            ...r,
            className: p.tp,
            children: [
                null != s && (0, n.jsx)("div", { className: p.wx, children: s }),
                i,
                null != t && (0, n.jsx)("div", { className: p.qr, children: t }),
            ],
        }),
    });
}
var C = t(331322),
    E = t(408278),
    y = t(241326),
    I = t(396478),
    k = t(376728),
    w = t(414079),
    M = t(297413),
    R = t(966327),
    D = t(58149),
    S = t(262295),
    P = t(576470),
    L = t(235986),
    T = t(363195),
    X = t(671759),
    B = t(889227),
    W = t(734057),
    z = t(351906),
    G = t(954571),
    H = t(652215),
    q = t(985018),
    F = t(578798),
    K = t(274446),
    O = t(818050);
class Q extends i.PureComponent {
    render() {
        let { invite: e, hideDiscriminator: s, hideInviteCode: t } = this.props,
            i = new B.A(e.inviter);
        return (0, n.jsxs)(L.A, {
            className: a()(F.nM, K.N),
            children: [
                (0, n.jsxs)(L.A, {
                    align: L.A.Align.CENTER,
                    className: F.CE,
                    children: [
                        (0, n.jsx)(R.A, { user: i, size: x._3.SIZE_24, className: F.my }),
                        (0, n.jsx)(M.A, {
                            user: i,
                            hideDiscriminator: s,
                            usernameClass: F.Xh,
                            discriminatorClass: F.OM,
                        }),
                    ],
                }),
                (0, n.jsx)(L.A, {
                    align: L.A.Align.CENTER,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    className: F.Kf,
                    children: (0, n.jsx)(m.E, {
                        className: F.aY,
                        variant: "text-sm/normal",
                        children: t ? "..." : e.code,
                    }),
                }),
                (0, n.jsxs)(L.A, {
                    basis: 100,
                    grow: 0,
                    shrink: 0,
                    align: L.A.Align.CENTER,
                    justify: L.A.Justify.END,
                    className: F.Kf,
                    children: [
                        (0, n.jsx)(m.E, {
                            className: F.qW,
                            variant: "text-sm/normal",
                            children: (0, n.jsx)(P.A, { deadline: e.getExpiresAt(), showDays: !1 }),
                        }),
                        (0, n.jsx)(w.A, { className: F.eb, onClick: this.handleRevokeInvite }),
                    ],
                }),
            ],
        });
    }
    handleRevokeInvite = () => {
        let { onRevoke: e, invite: s } = this.props;
        null != e && e(s);
    };
}
class Z extends i.PureComponent {
    state = { loading: !0, invites: null };
    componentDidMount() {
        let { channelId: e } = this.props;
        d.Bo.get({ url: H.Rsh.INSTANT_INVITES(e), retries: 3, oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            let s = e.body.map(
                (e) => new X.A({ ...e, maxUses: e.max_uses, maxAge: e.max_age, createdAt: e.created_at }),
            );
            this.setState({ loading: !1, invites: s });
        }),
            G.default.track(H.HAw.OPEN_MODAL, {
                ...(0, D.dI)(W.A.getChannel(e)),
                type: "Group DM Invites",
                source: "Group DM Menu",
            });
    }
    renderContent() {
        let { loading: e, invites: s } = this.state,
            { hideDiscriminators: t, hideInviteCodes: i } = this.props;
        if (e || null == s) return (0, n.jsx)(u.y, { className: O.QX, type: u.y.Type.SPINNING_CIRCLE });
        if (o().isEmpty(s)) return this.renderEmpty();
        let r = o()(s)
            .sortBy((e) => (e.inviter.username ?? "").toLocaleLowerCase())
            .value();
        return (0, n.jsx)(_.Gt, {
            orientation: "horizontal",
            children: (0, n.jsxs)(b, {
                "aria-label": q.intl.string(q.t["9F90ic"]),
                selectionMode: "none",
                children: [
                    (0, n.jsxs)(f, {
                        children: [
                            (0, n.jsx)(A, { isRowHeader: !0, children: q.intl.string(q.t.EgHyKy) }),
                            (0, n.jsx)(A, { children: q.intl.string(q.t.LBlFEN) }),
                            (0, n.jsx)(A, { children: q.intl.string(q.t["1aM27d"]) }),
                        ],
                    }),
                    (0, n.jsx)(g, {
                        items: r,
                        children: (e) => {
                            let s = new B.A(e.inviter);
                            return (0, n.jsxs)(N, {
                                id: e.code,
                                children: [
                                    (0, n.jsx)(v, {
                                        children: (0, n.jsx)(S.A, {
                                            avatar: (0, n.jsx)(R.A, { user: s, size: x._3.SIZE_24 }),
                                            name: (0, n.jsx)(M.A, {
                                                user: s,
                                                hideDiscriminator: t,
                                                usernameClass: F.Xh,
                                                discriminatorClass: F.OM,
                                            }),
                                        }),
                                    }),
                                    (0, n.jsx)(v, {
                                        children: (0, n.jsx)(m.E, {
                                            className: F.aY,
                                            variant: "text-sm/normal",
                                            children: i ? "..." : e.code,
                                        }),
                                    }),
                                    (0, n.jsx)(v, {
                                        children: (0, n.jsxs)(C.B, {
                                            direction: "horizontal",
                                            align: "center",
                                            gap: 8,
                                            children: [
                                                (0, n.jsx)(m.E, {
                                                    className: F.qW,
                                                    variant: "text-sm/normal",
                                                    children: (0, n.jsx)(P.A, {
                                                        deadline: e.getExpiresAt(),
                                                        showDays: !1,
                                                    }),
                                                }),
                                                (0, n.jsx)(E.K, {
                                                    size: "sm",
                                                    "aria-label": q.intl.string(q.t.N86XcP),
                                                    variant: "critical-secondary",
                                                    icon: y.u,
                                                    onClick: () => this.handleRevoke(e),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            });
                        },
                    }),
                ],
            }),
        });
    }
    renderEmpty() {
        return (0, n.jsxs)(I.pp, {
            theme: this.props.theme,
            children: [
                (0, n.jsx)(I.G8, {
                    darkSrc: t(774125),
                    lightSrc: t(151803),
                    width: 256,
                    height: 130,
                    style: { marginBottom: 0 },
                }),
                (0, n.jsx)(I.SG, { className: O.QX, children: q.intl.string(q.t["03/rlQ"]) }),
            ],
        });
    }
    renderInvites() {
        let { hideDiscriminators: e, hideInviteCodes: s } = this.props;
        return o()(this.state.invites)
            .sortBy((e) => (e.inviter.username ?? "").toLocaleLowerCase())
            .map((t) =>
                (0, n.jsx)(
                    Q,
                    { invite: t, hideDiscriminator: e, hideInviteCode: s, onRevoke: this.handleRevoke },
                    t.code,
                ),
            )
            .value();
    }
    render() {
        let { onClose: e, transitionState: s } = this.props;
        return (0, n.jsx)(h.Modal, {
            title: q.intl.string(q.t["9F90ic"]),
            subtitle: q.intl.string(q.t.WDw38H),
            actions: [{ text: q.intl.string(q.t.i4jeWR), onClick: this.handleClose }],
            onClose: e,
            transitionState: s,
            children: this.renderContent(),
        });
    }
    handleRevoke = (e) => {
        k.Ay.revokeInvite(e), this.setState({ invites: this.state.invites.filter((s) => s !== e) });
    };
    handleClose = () => {
        let { onClose: e } = this.props;
        e?.();
    };
}
let Y = c.Ay.connectStores([z.A, T.A], () => ({
    hideDiscriminators: z.A.hidePersonalInformation,
    hideInviteCodes: z.A.hideInstantInvites,
    theme: T.A.theme,
}))(Z);
