n.d(t, { e: () => T, r: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(774300),
    u = n(313961),
    c = n(85448),
    g = n(571694),
    h = n(47167),
    A = n(410876),
    p = n(71393),
    I = n(535820),
    m = n(994500),
    x = n(287809),
    v = n(486020),
    S = n(240248),
    y = n(427262),
    E = n(806931),
    C = n(985018),
    f = n(912579);
let _ = 48;
class T extends l.Component {
    state = { sending: !1, invited: !1, hovered: !1 };
    shouldComponentUpdate(e, t) {
        return (
            this.state.sending !== t.sending ||
            this.state.invited !== t.invited ||
            this.state.hovered !== t.hovered ||
            this.props.user !== e.user ||
            this.props.channel !== e.channel ||
            this.props.shouldRenameButtonCTA !== e.shouldRenameButtonCTA ||
            this.props.ringingEnabled !== e.ringingEnabled ||
            this.props.inviteChannel?.id !== e.inviteChannel?.id
        );
    }
    handleMouseEnter = () => {
        this.setState({ hovered: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    getInviteAnalyticsMetadata = () => {
        let { row: e, source: t } = this.props;
        if (null != e) return { suggestionData: I.A.getSelectedInviteMetadata(e), source: t };
    };
    handleClickInvite = () => {
        let { user: e, channel: t, inviteKey: n, location: i } = this.props;
        null != n &&
            (null != t
                ? (this.setState({ sending: !0 }),
                  d.A.enqueue(
                      {
                          type: d.F.GROUP_DM,
                          channel: t,
                          inviteKey: n,
                          location: i,
                          inviteAnalyticsMetadata: this.getInviteAnalyticsMetadata(),
                      },
                      (e) => {
                          this.setState({ sending: !1, invited: e });
                      },
                  ))
                : null != e &&
                  (this.setState({ sending: !0 }),
                  d.A.enqueue(
                      {
                          type: d.F.USER,
                          user: e,
                          inviteKey: n,
                          location: i,
                          inviteAnalyticsMetadata: this.getInviteAnalyticsMetadata(),
                      },
                      (e) => {
                          this.setState({ sending: !1, invited: e });
                      },
                  )));
    };
    render() {
        let { user: e, channel: t, shouldRenameButtonCTA: n, ringingEnabled: l, inviteChannel: s } = this.props,
            { sending: a, invited: r } = this.state,
            d = (0, i.jsx)(o.Button, {
                variant: "secondary",
                text: r ? C.intl.string(C.t.dVT149) : n ? C.intl.string(C.t.AWLVgR) : C.intl.string(C.t.jYnGPG),
                size: "sm",
                loading: a,
                onClick: this.handleClickInvite,
                disabled: r,
            });
        return (0, i.jsxs)("div", {
            className: f.Og,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            children: [
                (0, i.jsx)(b, { user: e, channel: t, inviteChannel: s, ringingEnabled: l }),
                (0, i.jsxs)("div", {
                    className: f.t$,
                    children: [
                        l && null != e && null != s && (0, i.jsx)(A.A, { user: e, channel: s, location: "InviteRow" }),
                        d,
                    ],
                }),
            ],
        });
    }
}
function b(e) {
    let { user: t, channel: n, inviteChannel: l, ringingEnabled: s } = e,
        d = (0, r.bG)([m.A], () => (null != t ? m.A.getNickname(t.id) : null)),
        A = (0, r.bG)([p.A], () => p.A.getGuild(n?.guild_id)),
        I = (0, r.bG)([u.A], () => (null != l && null != t ? u.A.getParticipant(l.id, t.id) : null)),
        _ = y.Ay.getName(t),
        T = y.Ay.getUserTag(t, { decoration: "never" }),
        b = null != t ? t.getAvatarURL(n?.guild_id, 32) : null,
        N = null != n ? (0, g.Y)(n) : null,
        M =
            null != A && null != n && null == N
                ? v.Ay.getGuildIconURL({ id: n.guild_id, icon: A.icon, size: 32 })
                : null,
        j = b ?? N ?? M,
        R = null != t ? _ : null != n ? (0, h.m1)(n, x.default, m.A) : null,
        G = null != A && null == A.icon ? (0, S.oN)(A.name) : null,
        V = null != j && null != R,
        U = s && null != I && I.type === E.lp.USER && I.ringing;
    return (0, i.jsxs)("div", {
        className: f.mQ,
        children: [
            V && U
                ? (0, i.jsx)(c.A, { size: o._3J.SIZE_32, ringing: U, src: j, className: f.hO })
                : V
                  ? (0, i.jsx)(o.euF, { src: j, "aria-label": R, size: o._3J.SIZE_32, className: f.hO })
                  : null != G
                    ? (0, i.jsx)(o.Text, { variant: "text-md/medium", className: f.q9, "aria-hidden": !0, children: G })
                    : null,
            (0, i.jsxs)("div", {
                className: a()(f.BT, { [f.DF]: U }),
                children: [
                    (0, i.jsxs)(o.Text, {
                        tag: "strong",
                        variant: "text-md/semibold",
                        lineClamp: 1,
                        children: [d ?? _, null != n && null == t ? (0, h.m1)(n, x.default, m.A, !0) : null],
                    }),
                    null != t &&
                        (0, i.jsx)("div", {
                            className: a()(f.J2, { [f.DF]: U }),
                            children: (0, i.jsxs)(o.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                lineClamp: 1,
                                children: [T, U && ` • ${C.intl.string(C.t.sURrjb)}`],
                            }),
                        }),
                ],
            }),
        ],
    });
}
