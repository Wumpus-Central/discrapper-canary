t.d(s, { default: () => Y });
var i = t(627968),
    n = t(64700),
    r = t(503698),
    a = t.n(r),
    l = t(735438),
    o = t.n(l),
    c = t(17928),
    d = t(636537),
    h = t(189213),
    m = t(778712),
    x = t(834730),
    u = t(289873),
    j = t(689175),
    p = t(79644),
    v = t(350688);
function A(e) {
    return (0, i.jsx)(p.fh, { ...e, className: v.Hn });
}
function N(e) {
    let { children: s, ...t } = e;
    return (0, i.jsx)(p.VP, {
        ...t,
        className: v.fi,
        children: (0, i.jsx)(x.E, { variant: "eyebrow", className: v.QP, children: s }),
    });
}
function g(e) {
    return (0, i.jsx)(p.fI, { ...e, className: v.nM });
}
function C(e) {
    return (0, i.jsx)(p.BF, { ...e, className: v.rf });
}
function E(e) {
    return (0, i.jsx)(p.A0, { ...e, className: v.wx });
}
function y(e) {
    let { header: s, footer: t, children: n, ...r } = e;
    return (0, i.jsx)("div", {
        className: v.kL,
        children: (0, i.jsxs)(p.XI, {
            ...r,
            className: v.tp,
            children: [
                null != s && (0, i.jsx)("div", { className: v.wx, children: s }),
                n,
                null != t && (0, i.jsx)("div", { className: v.qr, children: t }),
            ],
        }),
    });
}
var I = t(331322),
    f = t(408278),
    k = t(241326),
    w = t(396478),
    R = t(376728),
    D = t(414079),
    M = t(297413),
    S = t(966327),
    _ = t(95561),
    b = t(262295),
    L = t(576470),
    P = t(235986),
    B = t(363195),
    T = t(671759),
    G = t(889227),
    X = t(734057),
    z = t(351906),
    F = t(174459),
    H = t(652215),
    W = t(375708),
    K = t(578798),
    O = t(274446),
    Q = t(818050);
class q extends n.PureComponent {
    render() {
        let { invite: e, hideDiscriminator: s, hideInviteCode: t } = this.props,
            n = new G.A(e.inviter);
        return (0, i.jsxs)(P.A, {
            className: a()(K.nM, O.N),
            children: [
                (0, i.jsxs)(P.A, {
                    align: P.A.Align.CENTER,
                    className: K.CE,
                    children: [
                        (0, i.jsx)(S.A, { user: n, size: m._3.SIZE_24, className: K.my }),
                        (0, i.jsx)(M.A, {
                            user: n,
                            hideDiscriminator: s,
                            usernameClass: K.Xh,
                            discriminatorClass: K.OM,
                        }),
                    ],
                }),
                (0, i.jsx)(P.A, {
                    align: P.A.Align.CENTER,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    className: K.Kf,
                    children: (0, i.jsx)(x.E, {
                        className: K.aY,
                        variant: "text-sm/normal",
                        children: t ? "..." : e.code,
                    }),
                }),
                (0, i.jsxs)(P.A, {
                    basis: 100,
                    grow: 0,
                    shrink: 0,
                    align: P.A.Align.CENTER,
                    justify: P.A.Justify.END,
                    className: K.Kf,
                    children: [
                        (0, i.jsx)(x.E, {
                            className: K.qW,
                            variant: "text-sm/normal",
                            children: (0, i.jsx)(L.A, { deadline: e.getExpiresAt(), showDays: !1 }),
                        }),
                        (0, i.jsx)(D.A, { className: K.eb, onClick: this.handleRevokeInvite }),
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
class V extends n.PureComponent {
    state = { loading: !0, invites: null };
    componentDidMount() {
        let { channelId: e } = this.props;
        d.Bo.get({ url: H.Rsh.INSTANT_INVITES(e), retries: 3, oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            let s = e.body.map(
                (e) => new T.A({ ...e, maxUses: e.max_uses, maxAge: e.max_age, createdAt: e.created_at }),
            );
            this.setState({ loading: !1, invites: s });
        }),
            F.default.track(H.HAw.OPEN_MODAL, {
                ...(0, _.dI)(X.A.getChannel(e)),
                type: "Group DM Invites",
                source: "Group DM Menu",
            });
    }
    renderContent() {
        let { loading: e, invites: s } = this.state,
            { hideDiscriminators: t, hideInviteCodes: n } = this.props;
        if (e || null == s) return (0, i.jsx)(u.y, { className: Q.QX, type: u.y.Type.SPINNING_CIRCLE });
        if (o().isEmpty(s)) return this.renderEmpty();
        let r = o()(s)
            .sortBy((e) => (e.inviter.username ?? "").toLocaleLowerCase())
            .value();
        return (0, i.jsx)(j.Gt, {
            orientation: "horizontal",
            children: (0, i.jsxs)(y, {
                "aria-label": W.intl.string(W.t["9F90ic"]),
                selectionMode: "none",
                children: [
                    (0, i.jsxs)(E, {
                        children: [
                            (0, i.jsx)(N, { isRowHeader: !0, children: W.intl.string(W.t.EgHyKy) }),
                            (0, i.jsx)(N, { children: W.intl.string(W.t.LBlFEN) }),
                            (0, i.jsx)(N, { children: W.intl.string(W.t["1aM27d"]) }),
                        ],
                    }),
                    (0, i.jsx)(C, {
                        items: r,
                        children: (e) => {
                            let s = new G.A(e.inviter);
                            return (0, i.jsxs)(g, {
                                id: e.code,
                                children: [
                                    (0, i.jsx)(A, {
                                        children: (0, i.jsx)(b.A, {
                                            avatar: (0, i.jsx)(S.A, { user: s, size: m._3.SIZE_24 }),
                                            name: (0, i.jsx)(M.A, {
                                                user: s,
                                                hideDiscriminator: t,
                                                usernameClass: K.Xh,
                                                discriminatorClass: K.OM,
                                            }),
                                        }),
                                    }),
                                    (0, i.jsx)(A, {
                                        children: (0, i.jsx)(x.E, {
                                            className: K.aY,
                                            variant: "text-sm/normal",
                                            children: n ? "..." : e.code,
                                        }),
                                    }),
                                    (0, i.jsx)(A, {
                                        children: (0, i.jsxs)(I.B, {
                                            direction: "horizontal",
                                            align: "center",
                                            gap: 8,
                                            children: [
                                                (0, i.jsx)(x.E, {
                                                    className: K.qW,
                                                    variant: "text-sm/normal",
                                                    children: (0, i.jsx)(L.A, {
                                                        deadline: e.getExpiresAt(),
                                                        showDays: !1,
                                                    }),
                                                }),
                                                (0, i.jsx)(f.K, {
                                                    size: "sm",
                                                    "aria-label": W.intl.string(W.t.N86XcP),
                                                    variant: "critical-secondary",
                                                    icon: k.u,
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
        return (0, i.jsxs)(w.pp, {
            theme: this.props.theme,
            children: [
                (0, i.jsx)(w.G8, {
                    darkSrc: t(774125),
                    lightSrc: t(151803),
                    width: 256,
                    height: 130,
                    style: { marginBottom: 0 },
                }),
                (0, i.jsx)(w.SG, { className: Q.QX, children: W.intl.string(W.t["03/rlQ"]) }),
            ],
        });
    }
    renderInvites() {
        let { hideDiscriminators: e, hideInviteCodes: s } = this.props;
        return o()(this.state.invites)
            .sortBy((e) => (e.inviter.username ?? "").toLocaleLowerCase())
            .map((t) =>
                (0, i.jsx)(
                    q,
                    { invite: t, hideDiscriminator: e, hideInviteCode: s, onRevoke: this.handleRevoke },
                    t.code,
                ),
            )
            .value();
    }
    render() {
        let { onClose: e, transitionState: s } = this.props;
        return (0, i.jsx)(h.Modal, {
            title: W.intl.string(W.t["9F90ic"]),
            subtitle: W.intl.string(W.t.WDw38H),
            actions: [{ text: W.intl.string(W.t.i4jeWR), onClick: this.handleClose }],
            onClose: e,
            transitionState: s,
            children: this.renderContent(),
        });
    }
    handleRevoke = (e) => {
        R.Ay.revokeInvite(e), this.setState({ invites: this.state.invites.filter((s) => s !== e) });
    };
    handleClose = () => {
        let { onClose: e } = this.props;
        e?.();
    };
}
let Y = c.Ay.connectStores([z.A, B.A], () => ({
    hideDiscriminators: z.A.hidePersonalInformation,
    hideInviteCodes: z.A.hideInstantInvites,
    theme: B.A.theme,
}))(V);
