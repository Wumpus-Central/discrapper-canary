n.d(t, { Ay: () => L, Jd: () => v, O6: () => y, gQ: () => j, h$: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(435183),
    u = n(5180),
    h = n(698441),
    A = n(855687),
    _ = n(816662),
    m = n(446600),
    g = n(728321),
    p = n(95701),
    f = n(616356),
    x = n(71393),
    E = n(576705),
    I = n(967198),
    C = n(343360),
    N = n(652215),
    T = n(985018),
    S = n(99566);
function b(e, t, n) {
    return null != t && !!t && !(0, C.ws)(n, e.type);
}
function y(e, t) {
    return null == t ? S.fx : e > t ? S.mU : S.TR;
}
function v(e) {
    let { channel: t, disableManageChannels: n, tabIndex: l, forceShowButtons: s, hasChannelInfo: h = !1 } = e;
    return (0, r.bG)(
        [E.A, I.A],
        () =>
            n ||
            (0, u.ai)(I.A.getGuildId()) ||
            (!E.A.can(N.xBc.MANAGE_CHANNELS, t) &&
                !E.A.can(N.xBc.MANAGE_ROLES, t) &&
                !E.A.can(N.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, p.tr)(t.type) && !E.A.can(N.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !E.A.can(N.xBc.CONNECT, t)) ||
            !p.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, i.jsx)(o.m, {
              asContainer: !0,
              text: T.intl.string(T.t["3gUsJb"]),
              children: (0, i.jsx)(c.DUT, {
                  className: a()(S.Xs, s ? S.Tf : void 0, h ? S.bw : S.UI),
                  onClick: function () {
                      d.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": T.intl.string(T.t["3gUsJb"]),
                  children: (0, i.jsx)(c.Zes, { size: "xs", color: "currentColor", className: S.gE }),
              }),
          });
}
function j(e) {
    let {
            channel: t,
            isDefaultChannel: s = !1,
            locked: d,
            tabIndex: u,
            forceShowButtons: _,
            hasChannelInfo: p = !1,
        } = e,
        I = (0, r.bG)([x.A], () => x.A.getGuild(t.getGuildId())),
        C = (0, r.bG)([m.A], () => m.A.getStageInstanceByChannel(t.id), [t.id]),
        b = (0, r.bG)([h.Ay], () => h.Ay.getActiveEventByChannel(t.id), [t.id]),
        y = (0, r.bG)([E.A], () => (0, A.K)(E.A, I, t, C)),
        v = (0, r.bG)([], () =>
            t?.type === N.rbe.GUILD_VOICE ? T.intl.string(T.t["EE+P0H"]) : T.intl.string(T.t["0jeAXt"]),
        ),
        j = l.useRef(null);
    if (d || !y || t.isModeratorReportChannel() || t.isThread()) return null;
    let R = (0, i.jsx)(c.Rvf, { size: "xs", className: S.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        s &&
            (R = (0, i.jsx)(g.A, {
                childRef: j,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, i.jsx)("div", { ref: j, children: R }),
            })),
        (0, i.jsx)(o.m, {
            asContainer: !0,
            text: v,
            children: (0, i.jsx)(c.DUT, {
                className: a()(S.Xs, _ ? S.Tf : void 0, p ? S.bw : S.UI),
                onClick: function () {
                    if (null != I) {
                        let e = f.A.getAllActiveStreams().filter(
                            (e) => e.state !== N.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, c.mMO)(async () => {
                            let { default: l } = await Promise.all([n.e("43600"), n.e("71281")]).then(
                                n.bind(n, 234355),
                            );
                            return (n) =>
                                (0, i.jsx)(l, {
                                    ...n,
                                    guild: I,
                                    channel: t,
                                    streamUserId: 1 === e.length ? e[0].ownerId : null,
                                    source: N.PE1.GUILD_CHANNELS,
                                    guildScheduledEvent: b,
                                });
                        });
                    }
                },
                tabIndex: u,
                "aria-label": v,
                children: R,
            }),
        })
    );
}
function R(e) {
    let { channel: t } = e;
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: T.intl.string(T.t["ROh4T+"]),
        children: (0, i.jsx)(c.DUT, {
            className: S.Xs,
            onClick: () => {
                (0, _.Ol)(t.guild_id, t.id);
            },
            "aria-label": T.intl.string(T.t["ROh4T+"]),
            children: (0, i.jsx)(c.PGe, { size: "xs", color: "currentColor", className: S.gE }),
        }),
    });
}
function O(e) {
    let { channel: t } = e;
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: T.intl.string(T.t["N2c/Un"]),
        children: (0, i.jsx)(c.DUT, {
            className: S.Xs,
            onClick: () => {
                (0, _.jA)(t.guild_id, t.id, !0, { section: N.JJy.CHANNEL_LIST });
            },
            "aria-label": T.intl.string(T.t["N2c/Un"]),
            children: (0, i.jsx)(c.A9s, { size: "xs", color: "currentColor", className: S.gE }),
        }),
    });
}
class L extends l.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, i.jsx)(v, { ...this.props });
    }
    renderInviteButton() {
        return (0, i.jsx)(j, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, i.jsx)(R, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, i.jsx)(O, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return y(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return b(e, t, n);
    }
}
