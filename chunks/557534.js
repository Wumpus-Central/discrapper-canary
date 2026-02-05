n.d(t, { Ay: () => O, Jd: () => j, O6: () => T, gQ: () => v, h$: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(435183),
    u = n(698441),
    h = n(855687),
    A = n(816662),
    g = n(446600),
    m = n(728321),
    p = n(95701),
    _ = n(616356),
    x = n(71393),
    f = n(576705),
    E = n(967198),
    C = n(343360),
    I = n(652215),
    S = n(985018),
    b = n(728444);
function N(e, t, n) {
    return null != t && !!t && !(0, C.ws)(n, e.type);
}
function T(e, t) {
    return null == t ? b.fx : e > t ? b.mU : b.TR;
}
function j(e) {
    let { channel: t, disableManageChannels: n, tabIndex: l, forceShowButtons: s, hasChannelInfo: u = !1 } = e;
    return (0, r.bG)(
        [f.A, E.A],
        () =>
            n ||
            E.A.getGuildId() === I.YYv ||
            (!f.A.can(I.xBc.MANAGE_CHANNELS, t) &&
                !f.A.can(I.xBc.MANAGE_ROLES, t) &&
                !f.A.can(I.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, p.tr)(t.type) && !f.A.can(I.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !f.A.can(I.xBc.CONNECT, t)) ||
            !p.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, i.jsx)(o.m, {
              asContainer: !0,
              text: S.intl.string(S.t["3gUsJb"]),
              children: (0, i.jsx)(d.DUT, {
                  className: a()(b.Xs, s ? b.Tf : void 0, u ? b.bw : b.UI),
                  onClick: function () {
                      c.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": S.intl.string(S.t["3gUsJb"]),
                  children: (0, i.jsx)(d.Zes, { size: "xs", color: "currentColor", className: b.gE }),
              }),
          });
}
function v(e) {
    let {
            channel: t,
            isDefaultChannel: s = !1,
            locked: c,
            tabIndex: A,
            forceShowButtons: p,
            hasChannelInfo: E = !1,
        } = e,
        C = (0, r.bG)([x.A], () => x.A.getGuild(t.getGuildId())),
        N = (0, r.bG)([g.A], () => g.A.getStageInstanceByChannel(t.id), [t.id]),
        T = (0, r.bG)([u.Ay], () => u.Ay.getActiveEventByChannel(t.id), [t.id]),
        j = (0, r.bG)([f.A], () => (0, h.K)(f.A, C, t, N)),
        v = (0, r.bG)([], () =>
            t?.type === I.rbe.GUILD_VOICE ? S.intl.string(S.t["EE+P0H"]) : S.intl.string(S.t["0jeAXt"]),
        ),
        y = l.useRef(null);
    if (c || !j || t.isModeratorReportChannel()) return null;
    let R = (0, i.jsx)(d.Rvf, { size: "xs", className: b.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        s &&
            (R = (0, i.jsx)(m.A, {
                childRef: y,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, i.jsx)("div", { ref: y, children: R }),
            })),
        (0, i.jsx)(o.m, {
            asContainer: !0,
            text: v,
            children: (0, i.jsx)(d.DUT, {
                className: a()(b.Xs, p ? b.Tf : void 0, E ? b.bw : b.UI),
                onClick: function () {
                    if (null != C) {
                        let e = _.A.getAllActiveStreams().filter(
                            (e) => e.state !== I.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, d.mMO)(async () => {
                            let { default: l } = await Promise.all([n.e("43600"), n.e("42821")]).then(
                                n.bind(n, 234355),
                            );
                            return (n) =>
                                (0, i.jsx)(l, {
                                    ...n,
                                    guild: C,
                                    channel: t,
                                    streamUserId: 1 === e.length ? e[0].ownerId : null,
                                    source: I.PE1.GUILD_CHANNELS,
                                    guildScheduledEvent: T,
                                });
                        });
                    }
                },
                tabIndex: A,
                "aria-label": v,
                children: R,
            }),
        })
    );
}
function y(e) {
    let { channel: t } = e;
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: S.intl.string(S.t["ROh4T+"]),
        children: (0, i.jsx)(d.DUT, {
            className: b.Xs,
            onClick: () => {
                (0, A.Ol)(t.guild_id, t.id);
            },
            "aria-label": S.intl.string(S.t["ROh4T+"]),
            children: (0, i.jsx)(d.PGe, { size: "xs", color: "currentColor", className: b.gE }),
        }),
    });
}
function R(e) {
    let { channel: t } = e;
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: S.intl.string(S.t["N2c/Un"]),
        children: (0, i.jsx)(d.DUT, {
            className: b.Xs,
            onClick: () => {
                (0, A.jA)(t.guild_id, t.id, !0, { section: I.JJy.CHANNEL_LIST });
            },
            "aria-label": S.intl.string(S.t["N2c/Un"]),
            children: (0, i.jsx)(d.A9s, { size: "xs", color: "currentColor", className: b.gE }),
        }),
    });
}
class O extends l.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, i.jsx)(j, { ...this.props });
    }
    renderInviteButton() {
        return (0, i.jsx)(v, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, i.jsx)(y, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, i.jsx)(R, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return T(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return N(e, t, n);
    }
}
