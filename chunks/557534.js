"use strict";
n.d(t, { Ay: () => L, Jd: () => y, O6: () => v, gQ: () => j, h$: () => T });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(435183),
    u = n(5180),
    h = n(698441),
    A = n(855687),
    m = n(816662),
    p = n(446600),
    g = n(728321),
    _ = n(95701),
    f = n(616356),
    x = n(71393),
    C = n(576705),
    E = n(967198),
    I = n(343360),
    N = n(652215),
    b = n(985018),
    S = n(728444);
function T(e, t, n) {
    return null != t && !!t && !(0, I.ws)(n, e.type);
}
function v(e, t) {
    return null == t ? S.fx : e > t ? S.mU : S.TR;
}
function y(e) {
    let { channel: t, disableManageChannels: n, tabIndex: s, forceShowButtons: l, hasChannelInfo: h = !1 } = e;
    return (0, a.bG)(
        [C.A, E.A],
        () =>
            n ||
            (0, u.ai)(E.A.getGuildId()) ||
            (!C.A.can(N.xBc.MANAGE_CHANNELS, t) &&
                !C.A.can(N.xBc.MANAGE_ROLES, t) &&
                !C.A.can(N.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, _.tr)(t.type) && !C.A.can(N.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !C.A.can(N.xBc.CONNECT, t)) ||
            !_.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, i.jsx)(o.m, {
              asContainer: !0,
              text: b.intl.string(b.t["3gUsJb"]),
              children: (0, i.jsx)(c.DUT, {
                  className: r()(S.Xs, l ? S.Tf : void 0, h ? S.bw : S.UI),
                  onClick: function () {
                      d.Ay.open(t.id);
                  },
                  tabIndex: s,
                  "aria-label": b.intl.string(b.t["3gUsJb"]),
                  children: (0, i.jsx)(c.Zes, { size: "xs", color: "currentColor", className: S.gE }),
              }),
          });
}
function j(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: d,
            tabIndex: u,
            forceShowButtons: m,
            hasChannelInfo: _ = !1,
        } = e,
        E = (0, a.bG)([x.A], () => x.A.getGuild(t.getGuildId())),
        I = (0, a.bG)([p.A], () => p.A.getStageInstanceByChannel(t.id), [t.id]),
        T = (0, a.bG)([h.Ay], () => h.Ay.getActiveEventByChannel(t.id), [t.id]),
        v = (0, a.bG)([C.A], () => (0, A.K)(C.A, E, t, I)),
        y = (0, a.bG)([], () =>
            t?.type === N.rbe.GUILD_VOICE ? b.intl.string(b.t["EE+P0H"]) : b.intl.string(b.t["0jeAXt"]),
        ),
        j = s.useRef(null);
    if (d || !v || t.isModeratorReportChannel() || t.isThread()) return null;
    let R = (0, i.jsx)(c.Rvf, { size: "xs", className: S.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (R = (0, i.jsx)(g.A, {
                childRef: j,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, i.jsx)("div", { ref: j, children: R }),
            })),
        (0, i.jsx)(o.m, {
            asContainer: !0,
            text: y,
            children: (0, i.jsx)(c.DUT, {
                className: r()(S.Xs, m ? S.Tf : void 0, _ ? S.bw : S.UI),
                onClick: function () {
                    if (null != E) {
                        let e = f.A.getAllActiveStreams().filter(
                            (e) => e.state !== N.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, c.mMO)(async () => {
                            let { default: s } = await Promise.all([n.e("43600"), n.e("52537")]).then(
                                n.bind(n, 234355),
                            );
                            return (n) =>
                                (0, i.jsx)(s, {
                                    ...n,
                                    guild: E,
                                    channel: t,
                                    streamUserId: 1 === e.length ? e[0].ownerId : null,
                                    source: N.PE1.GUILD_CHANNELS,
                                    guildScheduledEvent: T,
                                });
                        });
                    }
                },
                tabIndex: u,
                "aria-label": y,
                children: R,
            }),
        })
    );
}
function R(e) {
    let { channel: t } = e;
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: b.intl.string(b.t["ROh4T+"]),
        children: (0, i.jsx)(c.DUT, {
            className: S.Xs,
            onClick: () => {
                (0, m.Ol)(t.guild_id, t.id);
            },
            "aria-label": b.intl.string(b.t["ROh4T+"]),
            children: (0, i.jsx)(c.PGe, { size: "xs", color: "currentColor", className: S.gE }),
        }),
    });
}
function O(e) {
    let { channel: t } = e;
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: b.intl.string(b.t["N2c/Un"]),
        children: (0, i.jsx)(c.DUT, {
            className: S.Xs,
            onClick: () => {
                (0, m.jA)(t.guild_id, t.id, !0, { section: N.JJy.CHANNEL_LIST });
            },
            "aria-label": b.intl.string(b.t["N2c/Un"]),
            children: (0, i.jsx)(c.A9s, { size: "xs", color: "currentColor", className: S.gE }),
        }),
    });
}
class L extends s.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, i.jsx)(y, { ...this.props });
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
        return v(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return T(e, t, n);
    }
}
