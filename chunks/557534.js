n.d(t, { Ay: () => P, Jd: () => G, O6: () => O, gQ: () => D, h$: () => L });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    d = n(939249),
    c = n(625903),
    u = n(192308),
    h = n(283973),
    A = n(789645),
    _ = n(933832),
    m = n(435183),
    g = n(5180),
    p = n(698441),
    f = n(855687),
    E = n(816662),
    x = n(446600),
    I = n(728321),
    C = n(95701),
    b = n(616356),
    N = n(71393),
    S = n(576705),
    v = n(967198),
    T = n(343360),
    y = n(652215),
    R = n(985018),
    j = n(907305);
function L(e, t, n) {
    return null != t && !!t && !(0, T.ws)(n, e.type);
}
function O(e, t) {
    return null == t ? j.fx : e > t ? j.mU : j.TR;
}
function G(e) {
    let { channel: t, disableManageChannels: n, tabIndex: l, forceShowButtons: s, hasChannelInfo: u = !1 } = e;
    return (0, r.bG)(
        [S.A, v.A],
        () =>
            n ||
            (0, g.ai)(v.A.getGuildId()) ||
            (!S.A.can(y.xBc.MANAGE_CHANNELS, t) &&
                !S.A.can(y.xBc.MANAGE_ROLES, t) &&
                !S.A.can(y.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, C.tr)(t.type) && !S.A.can(y.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !S.A.can(y.xBc.CONNECT, t)) ||
            !C.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, i.jsx)(o.m, {
              asContainer: !0,
              text: R.intl.string(R.t["3gUsJb"]),
              children: (0, i.jsx)(d.D, {
                  className: a()(j.Xs, s ? j.Tf : void 0, u ? j.bw : j.UI),
                  onClick: function () {
                      m.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": R.intl.string(R.t["3gUsJb"]),
                  children: (0, i.jsx)(c.Z, { size: "xs", color: "currentColor", className: j.gE }),
              }),
          });
}
function D(e) {
    let {
            channel: t,
            isDefaultChannel: s = !1,
            locked: c,
            tabIndex: A,
            forceShowButtons: _,
            hasChannelInfo: m = !1,
        } = e,
        g = (0, r.bG)([N.A], () => N.A.getGuild(t.getGuildId())),
        E = (0, r.bG)([x.A], () => x.A.getStageInstanceByChannel(t.id), [t.id]),
        C = (0, r.bG)([p.Ay], () => p.Ay.getActiveEventByChannel(t.id), [t.id]),
        v = (0, r.bG)([S.A], () => (0, f.K)(S.A, g, t, E)),
        T = (0, r.bG)([], () =>
            t?.type === y.rbe.GUILD_VOICE ? R.intl.string(R.t["EE+P0H"]) : R.intl.string(R.t["0jeAXt"]),
        ),
        L = l.useRef(null);
    if (c || !v || t.isModeratorReportChannel() || t.isThread()) return null;
    let O = (0, i.jsx)(h.R, { size: "xs", className: j.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        s &&
            (O = (0, i.jsx)(I.A, {
                childRef: L,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, i.jsx)("div", { ref: L, children: O }),
            })),
        (0, i.jsx)(o.m, {
            asContainer: !0,
            text: T,
            children: (0, i.jsx)(d.D, {
                className: a()(j.Xs, _ ? j.Tf : void 0, m ? j.bw : j.UI),
                onClick: function () {
                    if (null != g) {
                        let e = b.A.getAllActiveStreams().filter(
                            (e) => e.state !== y.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, u.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([n.e("28136"), n.e("43600"), n.e("42738")]).then(
                                n.bind(n, 234355),
                            );
                            return (n) =>
                                (0, i.jsx)(l, {
                                    ...n,
                                    guild: g,
                                    channel: t,
                                    streamUserId: 1 === e.length ? e[0].ownerId : null,
                                    source: y.PE1.GUILD_CHANNELS,
                                    guildScheduledEvent: C,
                                });
                        });
                    }
                },
                tabIndex: A,
                "aria-label": T,
                children: O,
            }),
        })
    );
}
function M(e) {
    let { channel: t } = e;
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: R.intl.string(R.t["ROh4T+"]),
        children: (0, i.jsx)(d.D, {
            className: j.Xs,
            onClick: () => {
                (0, E.Ol)(t.guild_id, t.id);
            },
            "aria-label": R.intl.string(R.t["ROh4T+"]),
            children: (0, i.jsx)(A.P, { size: "xs", color: "currentColor", className: j.gE }),
        }),
    });
}
function U(e) {
    let { channel: t } = e;
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: R.intl.string(R.t["N2c/Un"]),
        children: (0, i.jsx)(d.D, {
            className: j.Xs,
            onClick: () => {
                (0, E.jA)(t.guild_id, t.id, !0, { section: y.JJy.CHANNEL_LIST });
            },
            "aria-label": R.intl.string(R.t["N2c/Un"]),
            children: (0, i.jsx)(_.A, { size: "xs", color: "currentColor", className: j.gE }),
        }),
    });
}
class P extends l.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, i.jsx)(G, { ...this.props });
    }
    renderInviteButton() {
        return (0, i.jsx)(D, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, i.jsx)(M, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, i.jsx)(U, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return O(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return L(e, t, n);
    }
}
