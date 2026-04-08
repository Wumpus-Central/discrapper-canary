"use strict";
n.d(t, { A: () => et }), n(938796);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(821418),
    o = n(665260),
    c = n(80703),
    d = n(311907),
    u = n(362474),
    h = n(397927),
    _ = n(73153),
    p = n(846293),
    g = n(198982),
    m = n(17841),
    A = n(829691),
    f = n(854378),
    E = n(359438),
    x = n(383302),
    I = n(10088),
    N = n(921037),
    v = n(21599),
    T = n(942614),
    C = n(976860),
    j = n(210714),
    S = n(961350),
    y = n(650048),
    b = n(71393),
    R = n(299091),
    O = n(954571),
    L = n(975571),
    w = n(4274),
    k = n(877062),
    D = n(890698),
    B = n(129851),
    U = n(229),
    P = n(652215);
n(436317);
var G = n(172799),
    F = n(771016),
    M = n(396574),
    V = n(985018),
    W = n(885106);
d.Ay.initialize();
let H = "register",
    K = "login";
async function z(e) {
    let { invite: t } = await p.Ay.resolveInvite(e, P.S3d.INVITE);
    null != t && (0, A.v)(t);
}
function Q(e) {
    let { message: t, onClick: n, invite: s } = e,
        r = s?.guild_scheduled_event != null;
    return M.VP
        ? (0, i.jsx)("div", {
              className: r ? W.QX : W.eT,
              children: (0, i.jsx)(h.Button, { text: t, onClick: n, variant: r ? "active" : "primary", fullWidth: !0 }),
          })
        : (0, i.jsx)(f.KE, { className: W.eT });
}
function q(e) {
    let { invite: t, handleAccept: n } = e,
        s =
            null != t.guild_scheduled_event
                ? (0, i.jsx)(E.X, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
                : (0, i.jsx)("div", { className: W.S3, children: (0, i.jsx)(D.A, { invite: t }) }),
        r =
            null != t.guild_scheduled_event && null != t.guild
                ? (0, i.jsx)(f.Ay, {
                      className: W.QX,
                      children: (0, i.jsx)(x.N, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                  })
                : null;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)(f.Ay, {
                children: [s, (0, i.jsx)(Q, { message: V.intl.string(V.t.ohMvm1), onClick: n, invite: t })],
            }),
            r,
        ],
    });
}
function Y(e) {
    let { invite: t, onContinue: n, handleContinue: s } = e;
    return (0, i.jsxs)(f.Ay, {
        children: [
            (0, i.jsx)(D.A, { invite: t }),
            M.VP
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", {
                              className: W.QX,
                              children: (0, i.jsx)(h.Button, {
                                  text: V.intl.string(V.t.UQvCf7),
                                  onClick: () => {
                                      O.default.track(P.HAw.INVITE_CTA_CLICKED, {
                                          action: "open_app",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          p.Ay.openNativeAppModal(t.code);
                                  },
                                  variant: "primary",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: W.Ot,
                              children: (0, i.jsx)(h.Button, {
                                  text: V.intl.string(V.t["2ixEBi"]),
                                  onClick: () => {
                                      O.default.track(P.HAw.INVITE_CTA_CLICKED, {
                                          action: "continue_in_browser",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          null != n ? n() : s();
                                  },
                                  variant: "secondary",
                                  fullWidth: !0,
                              }),
                          }),
                      ],
                  })
                : (0, i.jsx)(f.KE, { className: W.eT }),
        ],
    });
}
function X(e) {
    let { title: t } = e;
    return (0, i.jsxs)(f.Ay, { children: [(0, i.jsx)(f.hE, { children: t }), (0, i.jsx)(f.CK, {})] });
}
function J(e) {
    let { invite: t, error: n, handleAccept: s, handleDefaultTransition: r } = e;
    return (0, i.jsx)(f.Ay, {
        children: (0, i.jsxs)(h.BJc, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, i.jsx)(D.A, { invite: t, error: n?.message }),
                n?.code === P.t02.INVALID_CANNOT_FRIEND_SELF
                    ? (0, i.jsx)(Q, { invite: t, message: V.intl.string(V.t.fIv16B), onClick: r })
                    : (0, i.jsx)(Q, { invite: t, message: V.intl.string(V.t.ohMvm1), onClick: s }),
            ],
        }),
    });
}
function $(e) {
    let { banned: t, handleDefaultTransition: n } = e;
    return (0, i.jsxs)(f.Ay, {
        children: [
            (0, i.jsx)(f.hE, { className: l()(W.Ot, W.QB), children: V.intl.string(V.t.kux01N) }),
            (0, i.jsx)(f.tK, { children: t ? V.intl.string(V.t["5AkWAd"]) : V.intl.string(V.t["+qUJAj"]) }),
            (0, i.jsx)(Q, { message: V.intl.string(V.t.fIv16B), onClick: n }),
            (0, i.jsx)("div", {
                className: W.Ot,
                style: { textAlign: "left" },
                children: (0, i.jsx)(h.QWc, {
                    size: "sm",
                    textVariant: "text-sm/medium",
                    text: V.intl.string(V.t.urIwn4),
                    onClick: () => window.open(L.A.getArticleURL(P.MVz.INVALID_INVITES), "_blank"),
                }),
            }),
        ],
    });
}
function Z(e) {
    let { handleDefaultTransition: t } = e;
    return (0, i.jsxs)(f.Ay, {
        children: [
            (0, i.jsx)(f.hE, { children: V.intl.string(V.t.fOc4gn) }),
            (0, i.jsx)(Q, { message: V.intl.string(V.t.fIv16B), onClick: t }),
        ],
    });
}
class ee extends s.PureComponent {
    state = { error: null, appHasOpened: !1 };
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props,
            i = S.default.getAnalyticsToken();
        if (
            (null != i && _.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: i, userId: S.default.getId() }),
            O.default.track(P.HAw.INVITE_VIEWED, { invite_code: n }, { flush: !0 }),
            (0, j.d)("invite"),
            !M.VP)
        ) {
            let e = this.getInviteKey();
            k.A.launch("discord://" + P.BVt.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, v.y$)(e);
            (0, C.bG)(P.BVt.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: i, transitionTo: s } = this.props,
            r = this.getInviteKey();
        if (r !== this.getInviteKey(e)) z(r), this.setState({ appHasOpened: !1 });
        else if (t.state === P.elq.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === K && i !== e.authenticated && i) {
            let e = S.default.getFingerprint();
            if (null != e) {
                let n = (0, c.d)(e);
                O.default.track(P.HAw.INVITE_LOGIN_SUCCESSFUL, {
                    invite_code: (0, v.m0)(this.getInviteKey()),
                    guild_id: t.guild?.id,
                    channel_id: t.channel?.id,
                    inviter_id: t.inviter?.id,
                    prev_user_id: n,
                });
            }
            p.Ay.acceptInvite({
                inviteKey: r,
                context: this.getAcceptInviteContext(P.S3d.INVITE),
                skipOnboarding: !0,
                callback: this.handleContinue,
            });
        }
        if (
            (n !== e.nativeAppState &&
                n === P.fAW.OPEN &&
                O.default.track(P.HAw.INVITE_APP_INVOKED, {
                    invite_code: (0, v.m0)(this.getInviteKey()),
                    guild_id: t.guild?.id,
                    channel_id: t.channel?.id,
                    inviter_id: t.inviter?.id,
                    user_is_member: null != t.guild && null != b.A.getGuild(t.guild.id),
                    size_total: t.approximate_member_count,
                    invite_type: null != t.type ? G.Xd[t.type] : void 0,
                }),
            this.getMode() === H && i && !e.authenticated)
        ) {
            let { channel: e } = t;
            if (null != e)
                if (((0, T.C)(F.zY.INVITE_UNCLAIMED), null != t.guild)) {
                    let e = (0, o.Lt)(t.flags ?? 0, a.Q.IS_APPLICATION_BYPASS),
                        n =
                            t.guild.features?.includes(P.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
                            t.guild.features?.includes(P.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
                    s(
                        !e && n
                            ? P.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id)
                            : P.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code),
                    );
                } else p.Ay.transitionToInvite(t, s);
        }
        this.state.appHasOpened ||
            (n !== P.fAW.OPEN && t.state !== P.elq.APP_OPENED) ||
            this.setState({ appHasOpened: !0 });
    }
    getAcceptInviteContext = (e) => p.Ay.getInviteContext(e, this.props.invite);
    getInviteKey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.inviteKey;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.login ? K : H;
    }
    handleContinue = (e) => {
        let { invite: t, transitionTo: n } = this.props;
        (null != t.channel || e?.channel != null) &&
            (t.guild?.id != null
                ? n(P.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                : p.Ay.transitionToInvite(e ?? t, n));
    };
    handleAccept = () => {
        this.setState({ error: null });
        let e = this.getInviteKey();
        p.Ay.acceptInvite({
            inviteKey: e,
            context: this.getAcceptInviteContext(P.S3d.INVITE),
            skipOnboarding: !0,
            callback: (t) => {
                (0, A.v)(t), null != t.channel && p.Ay.openApp(e, t.channel.id);
            },
        }).catch((e) => {
            if (e instanceof g.Wl || e instanceof g.LG) {
                let t = (0, w.s)(e.code);
                this.setState({ error: { code: e.code, message: t } });
            } else this.setState({ error: { code: e.code, message: V.intl.string(V.t.dDZRdy) } });
        });
    };
    handleDefaultTransition = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: s, location: r } = this.props;
        if (this.state.appHasOpened || t === P.fAW.OPEN || e.state === P.elq.APP_OPENED)
            return (0, i.jsx)(Y, { invite: e, handleContinue: this.handleContinue });
        switch (e.state) {
            case P.elq.APP_NOT_OPENED:
                return (0, i.jsx)(Z, { handleDefaultTransition: this.handleDefaultTransition });
            case P.elq.RESOLVING:
            case P.elq.APP_OPENING:
                return (0, i.jsx)(X, { title: V.intl.string(V.t["Z+hCVU"]) });
            case P.elq.RESOLVED:
                if (n && (0, o.Lt)(e.flags ?? 0, a.Q.IS_GUEST_INVITE))
                    return (
                        p.Ay.openApp(e.code),
                        u.u.set(N.B, e.code),
                        (0, i.jsx)(Y, {
                            invite: e,
                            onContinue: () => s(P.BVt.APP),
                            handleContinue: this.handleContinue,
                        })
                    );
                if (n || !M.VP) return (0, i.jsx)(q, { invite: e, handleAccept: this.handleAccept });
                if (this.getMode() === K) return (0, i.jsx)(B.A, { invite: e, transitionTo: s, location: r });
                else
                    return (0, i.jsx)(U.A, {
                        invite: e,
                        onLoginStart: () => {
                            O.default.track(P.HAw.INVITE_LOGIN, {
                                invite_code: e.code,
                                guild_id: e.guild?.id,
                                channel_id: e.channel?.id,
                                inviter_id: e.inviter?.id,
                            });
                        },
                        location: r,
                        transitionTo: s,
                    });
            case P.elq.ACCEPTING:
                return (0, i.jsx)(X, { title: V.intl.string(V.t["6wsY16"]) });
            case P.elq.EXPIRED:
                return (0, i.jsx)($, { banned: !1, handleDefaultTransition: this.handleDefaultTransition });
            case P.elq.BANNED:
                return (0, i.jsx)($, { banned: !0, handleDefaultTransition: this.handleDefaultTransition });
            case P.elq.ERROR:
                return (0, i.jsx)(J, {
                    invite: e,
                    error: this.state.error,
                    handleAccept: this.handleAccept,
                    handleDefaultTransition: this.handleDefaultTransition,
                });
            case P.elq.ACCEPTED:
            default:
                return null;
        }
    }
}
let et = d.Ay.connectStores([R.A, y.A, S.default, I.A, m.A], (e) => {
    let { inviteKey: t } = e;
    return {
        invite: R.A.getInvite(t) ?? {},
        nativeAppState: I.A.getState(t),
        authenticated: S.default.isAuthenticated(),
        defaultRoute: y.A.defaultRoute,
        isUnderage: m.A.isUnderageAnonymous(),
    };
})(ee);
