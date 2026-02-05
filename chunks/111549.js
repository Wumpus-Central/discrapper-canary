"use strict";
n.d(t, { A: () => Y }), n(938796);
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
    f = n(829691),
    A = n(394681),
    E = n(854378),
    x = n(359438),
    v = n(383302),
    I = n(10088),
    N = n(921037),
    S = n(21599),
    j = n(942614),
    C = n(976860),
    y = n(210714),
    T = n(961350),
    b = n(650048),
    R = n(71393),
    O = n(299091),
    L = n(954571),
    w = n(975571),
    k = n(4274),
    D = n(877062),
    B = n(890698),
    P = n(129851),
    U = n(229),
    G = n(652215);
n(436317);
var M = n(172799),
    F = n(771016),
    V = n(396574),
    W = n(985018),
    H = n(473169);
d.Ay.initialize();
let K = "register",
    z = "login";
async function Q(e) {
    let { invite: t } = await p.Ay.resolveInvite(e, G.S3d.INVITE);
    null != t && (0, f.v)(t);
}
class q extends s.PureComponent {
    state = { error: null };
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props,
            i = T.default.getAnalyticsToken();
        if (
            (null != i && _.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: i, userId: T.default.getId() }),
            L.default.track(G.HAw.INVITE_VIEWED, { invite_code: n }, { flush: !0 }),
            (0, y.d)("invite"),
            !V.VP)
        ) {
            let e = this.getInviteKey();
            D.A.launch("discord://" + G.BVt.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, S.y$)(e);
            (0, C.bG)(G.BVt.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: i, transitionTo: s } = this.props,
            r = this.getInviteKey();
        if (r !== this.getInviteKey(e)) Q(r);
        else if (t.state === G.elq.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === z && i !== e.authenticated && i) {
            let e = T.default.getFingerprint();
            if (null != e) {
                let t = (0, c.d)(e);
                this.track(G.HAw.INVITE_LOGIN_SUCCESSFUL, { prev_user_id: t });
            }
            p.Ay.acceptInvite({
                inviteKey: r,
                context: this.getAcceptInviteContext(G.S3d.INVITE),
                skipOnboarding: !0,
                callback: this.handleContinue,
            });
        }
        if (
            (n !== e.nativeAppState &&
                n === G.fAW.OPEN &&
                this.track(G.HAw.INVITE_APP_INVOKED, {
                    user_is_member: null != t.guild && null != R.A.getGuild(t.guild.id),
                    size_total: t.approximate_member_count,
                    invite_type: null != t.type ? M.Xd[t.type] : void 0,
                }),
            this.getMode() === K && i && !e.authenticated)
        ) {
            let { channel: e } = t;
            if (null != e)
                if (((0, j.C)(F.zY.INVITE_UNCLAIMED), null != t.guild)) {
                    let e = (0, o.Lt)(t.flags ?? 0, a.Q.IS_APPLICATION_BYPASS),
                        n =
                            t.guild.features?.includes(G.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
                            t.guild.features?.includes(G.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
                    s(
                        !e && n
                            ? G.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id)
                            : G.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code),
                    );
                } else p.Ay.transitionToInvite(t, s);
        }
    }
    getAcceptInviteContext = (e) => p.Ay.getInviteContext(e, this.props.invite);
    getInviteKey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.inviteKey;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.login ? z : K;
    }
    handleContinue = (e) => {
        let { invite: t, transitionTo: n } = this.props;
        (null != t.channel || e?.channel != null) &&
            (t.guild?.id != null
                ? n(G.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                : p.Ay.transitionToInvite(e ?? t, n));
    };
    track(e, t) {
        let { invite: n } = this.props,
            i = (0, S.m0)(this.getInviteKey());
        L.default.track(e, {
            guild_id: null != n.guild ? n.guild.id : null,
            channel_id: null != n.channel ? n.channel.id : null,
            inviter_id: null != n.inviter ? n.inviter.id : null,
            invite_code: i,
            ...t,
        });
    }
    handleAccept = () => {
        this.setState({ error: null });
        let e = this.getInviteKey();
        p.Ay.acceptInvite({
            inviteKey: e,
            context: this.getAcceptInviteContext(G.S3d.INVITE),
            skipOnboarding: !0,
            callback: (t) => {
                (0, f.v)(t), null != t.channel && p.Ay.openApp(e, t.channel.id);
            },
        }).catch((e) => {
            if (e instanceof g.Wl || e instanceof g.LG) {
                let t = (0, k.s)(e.code);
                this.setState({ error: { code: e.code, message: t } });
            } else this.setState({ error: { code: e.code, message: W.intl.string(W.t.dDZRdy) } });
        });
    };
    handleDefaultTransition = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton = (() => {
        var e = this;
        return function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.handleDefaultTransition,
                { invite: s } = e.props,
                r = null != s.guild_scheduled_event;
            return V.VP
                ? (0, i.jsx)("div", {
                      className: r ? H.QX : H.eT,
                      children: (0, i.jsx)(h.Button, {
                          text: t,
                          onClick: n,
                          variant: r ? "active" : "primary",
                          fullWidth: !0,
                      }),
                  })
                : (0, i.jsx)(E.KE, { className: H.eT });
        };
    })();
    renderSpinner(e) {
        return (0, i.jsxs)(E.Ay, { children: [(0, i.jsx)(E.hE, { children: e }), (0, i.jsx)(E.CK, {})] });
    }
    renderInvalidInvite() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, i.jsxs)(E.Ay, {
            children: [
                (0, i.jsx)(E._V, { src: n(428721), className: H.QB }),
                (0, i.jsx)(E.hE, { className: l()(H.Ot, H.QB), children: W.intl.string(W.t.kux01N) }),
                (0, i.jsx)(E.tK, { children: e ? W.intl.string(W.t["5AkWAd"]) : W.intl.string(W.t["+qUJAj"]) }),
                this.renderButton(W.intl.string(W.t.fIv16B)),
                (0, i.jsx)("div", {
                    className: H.Ot,
                    style: { textAlign: "left" },
                    children: (0, i.jsx)(h.QWc, {
                        size: "sm",
                        textVariant: "text-sm/medium",
                        text: W.intl.string(W.t.urIwn4),
                        onClick: () => window.open(w.A.getArticleURL(G.MVz.INVALID_INVITES), "_blank"),
                    }),
                }),
            ],
        });
    }
    renderErrorInvite() {
        return (0, i.jsx)(E.Ay, {
            children: (0, i.jsxs)(h.BJc, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, i.jsx)(B.A, { invite: this.props.invite, error: this.state.error?.message }),
                    this.state.error?.code === G.t02.INVALID_CANNOT_FRIEND_SELF
                        ? this.renderButton(W.intl.string(W.t.fIv16B))
                        : this.renderButton(W.intl.string(W.t.ohMvm1), this.handleAccept),
                ],
            }),
        });
    }
    renderExpiredInvite() {
        return this.renderInvalidInvite(!1);
    }
    renderBannedInvite() {
        return this.renderInvalidInvite(!0);
    }
    renderAppOpened(e) {
        let { invite: t } = this.props,
            n = () => {
                L.default.track(G.HAw.INVITE_CTA_CLICKED, {
                    action: "continue_in_browser",
                    invite_code: t.code,
                    guild_id: t.guild?.id,
                }),
                    null != e ? e() : this.handleContinue();
            };
        return null != t.guild &&
            A.R.getCurrentConfig({ guildId: t.guild.id, location: "InviteAppOpened" }, { autoTrackExposure: !1 })
                .enabled
            ? (0, i.jsxs)(E.Ay, {
                  children: [
                      (0, i.jsx)(B.A, { invite: t }),
                      V.VP
                          ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: H.QX,
                                        children: (0, i.jsx)(h.Button, {
                                            text: W.intl.string(W.t.UQvCf7),
                                            onClick: () => {
                                                L.default.track(G.HAw.INVITE_CTA_CLICKED, {
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
                                        className: H.Ot,
                                        children: (0, i.jsx)(h.Button, {
                                            text: W.intl.string(W.t["2ixEBi"]),
                                            onClick: n,
                                            variant: "secondary",
                                            fullWidth: !0,
                                        }),
                                    }),
                                ],
                            })
                          : (0, i.jsx)(E.KE, { className: H.eT }),
                  ],
              })
            : (0, i.jsxs)(E.Ay, {
                  children: [
                      (0, i.jsx)(E.hE, { className: H.QB, children: W.intl.string(W.t.csrAMJ) }),
                      (0, i.jsx)(E.tK, { children: W.intl.string(W.t["m1+IBn"]) }),
                      this.renderButton(W.intl.string(W.t.fIv16B), n),
                  ],
              });
    }
    renderAuthenticatedHeader() {
        let { invite: e } = this.props;
        return null != e.guild_scheduled_event
            ? (0, i.jsx)(x.X, { channel: e.channel, guildScheduledEvent: e.guild_scheduled_event })
            : (0, i.jsx)("div", { className: H.S3, children: (0, i.jsx)(B.A, { invite: e }) });
    }
    renderAuthenicatedFooter() {
        let { invite: e } = this.props;
        return null != e.guild_scheduled_event && null != e.guild
            ? (0, i.jsx)(E.Ay, {
                  className: H.QX,
                  children: (0, i.jsx)(v.N, { guild: e.guild, onlineCount: e.approximate_presence_count }),
              })
            : null;
    }
    renderAuthenticatedOrDownload() {
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsxs)(E.Ay, {
                    children: [
                        this.renderAuthenticatedHeader(),
                        this.renderButton(W.intl.string(W.t.ohMvm1), this.handleAccept),
                    ],
                }),
                this.renderAuthenicatedFooter(),
            ],
        });
    }
    renderContinue() {
        return (0, i.jsxs)(E.Ay, {
            children: [
                (0, i.jsx)(E.hE, { children: W.intl.string(W.t.fOc4gn) }),
                this.renderButton(W.intl.string(W.t.fIv16B)),
            ],
        });
    }
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: s, location: r } = this.props;
        if (t === G.fAW.OPEN) return this.renderAppOpened();
        switch (e.state) {
            case G.elq.APP_OPENED:
                return this.renderAppOpened();
            case G.elq.APP_NOT_OPENED:
                return this.renderContinue();
            case G.elq.RESOLVING:
            case G.elq.APP_OPENING:
                return this.renderSpinner(W.intl.string(W.t["Z+hCVU"]));
            case G.elq.RESOLVED:
                if (n && (0, o.Lt)(e.flags ?? 0, a.Q.IS_GUEST_INVITE))
                    return p.Ay.openApp(e.code), u.u.set(N.B, e.code), this.renderAppOpened(() => s(G.BVt.APP));
                if (n || !V.VP) return this.renderAuthenticatedOrDownload();
                if (this.getMode() === z) return (0, i.jsx)(P.A, { invite: e, transitionTo: s, location: r });
                else
                    return (0, i.jsx)(U.A, {
                        invite: e,
                        onLoginStart: () => this.track(G.HAw.INVITE_LOGIN),
                        location: r,
                        transitionTo: s,
                    });
            case G.elq.ACCEPTING:
                return this.renderSpinner(W.intl.string(W.t["6wsY16"]));
            case G.elq.EXPIRED:
                return this.renderExpiredInvite();
            case G.elq.BANNED:
                return this.renderBannedInvite();
            case G.elq.ERROR:
                return this.renderErrorInvite();
            case G.elq.ACCEPTED:
            default:
                return null;
        }
    }
}
let Y = d.Ay.connectStores([O.A, b.A, T.default, I.A, m.A], (e) => {
    let { inviteKey: t } = e;
    return {
        invite: O.A.getInvite(t) ?? {},
        nativeAppState: I.A.getState(t),
        authenticated: T.default.isAuthenticated(),
        defaultRoute: b.A.defaultRoute,
        isUnderage: m.A.isUnderageAnonymous(),
    };
})(q);
