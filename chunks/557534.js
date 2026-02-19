"use strict";
n.d(t, { Ay: () => O, Jd: () => v, O6: () => T, gQ: () => y, h$: () => S });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(435183),
    u = n(698441),
    h = n(855687),
    A = n(816662),
    p = n(446600),
    g = n(728321),
    m = n(95701),
    _ = n(616356),
    f = n(71393),
    x = n(576705),
    C = n(967198),
    E = n(343360),
    I = n(652215),
    b = n(985018),
    N = n(728444);
function S(e, t, n) {
    return null != t && !!t && !(0, E.ws)(n, e.type);
}
function T(e, t) {
    return null == t ? N.fx : e > t ? N.mU : N.TR;
}
function v(e) {
    let { channel: t, disableManageChannels: n, tabIndex: s, forceShowButtons: l, hasChannelInfo: u = !1 } = e;
    return (0, a.bG)(
        [x.A, C.A],
        () =>
            n ||
            C.A.getGuildId() === I.YYv ||
            (!x.A.can(I.xBc.MANAGE_CHANNELS, t) &&
                !x.A.can(I.xBc.MANAGE_ROLES, t) &&
                !x.A.can(I.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, m.tr)(t.type) && !x.A.can(I.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !x.A.can(I.xBc.CONNECT, t)) ||
            !m.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, i.jsx)(o.m, {
              asContainer: !0,
              text: b.intl.string(b.t["3gUsJb"]),
              children: (0, i.jsx)(c.DUT, {
                  className: r()(N.Xs, l ? N.Tf : void 0, u ? N.bw : N.UI),
                  onClick: function () {
                      d.Ay.open(t.id);
                  },
                  tabIndex: s,
                  "aria-label": b.intl.string(b.t["3gUsJb"]),
                  children: (0, i.jsx)(c.Zes, { size: "xs", color: "currentColor", className: N.gE }),
              }),
          });
}
function y(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: d,
            tabIndex: A,
            forceShowButtons: m,
            hasChannelInfo: C = !1,
        } = e,
        E = (0, a.bG)([f.A], () => f.A.getGuild(t.getGuildId())),
        S = (0, a.bG)([p.A], () => p.A.getStageInstanceByChannel(t.id), [t.id]),
        T = (0, a.bG)([u.Ay], () => u.Ay.getActiveEventByChannel(t.id), [t.id]),
        v = (0, a.bG)([x.A], () => (0, h.K)(x.A, E, t, S)),
        y = (0, a.bG)([], () =>
            t?.type === I.rbe.GUILD_VOICE ? b.intl.string(b.t["EE+P0H"]) : b.intl.string(b.t["0jeAXt"]),
        ),
        j = s.useRef(null);
    if (d || !v || t.isModeratorReportChannel()) return null;
    let R = (0, i.jsx)(c.Rvf, { size: "xs", className: N.gE, "aria-hidden": !0, color: "currentColor" });
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
                className: r()(N.Xs, m ? N.Tf : void 0, C ? N.bw : N.UI),
                onClick: function () {
                    if (null != E) {
                        let e = _.A.getAllActiveStreams().filter(
                            (e) => e.state !== I.XYD.ENDED && e.channelId === t.id,
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
                                    source: I.PE1.GUILD_CHANNELS,
                                    guildScheduledEvent: T,
                                });
                        });
                    }
                },
                tabIndex: A,
                "aria-label": y,
                children: R,
            }),
        })
    );
}
function j(e) {
    let { channel: t } = e;
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: b.intl.string(b.t["ROh4T+"]),
        children: (0, i.jsx)(c.DUT, {
            className: N.Xs,
            onClick: () => {
                (0, A.Ol)(t.guild_id, t.id);
            },
            "aria-label": b.intl.string(b.t["ROh4T+"]),
            children: (0, i.jsx)(c.PGe, { size: "xs", color: "currentColor", className: N.gE }),
        }),
    });
}
function R(e) {
    let { channel: t } = e;
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: b.intl.string(b.t["N2c/Un"]),
        children: (0, i.jsx)(c.DUT, {
            className: N.Xs,
            onClick: () => {
                (0, A.jA)(t.guild_id, t.id, !0, { section: I.JJy.CHANNEL_LIST });
            },
            "aria-label": b.intl.string(b.t["N2c/Un"]),
            children: (0, i.jsx)(c.A9s, { size: "xs", color: "currentColor", className: N.gE }),
        }),
    });
}
class O extends s.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, i.jsx)(v, { ...this.props });
    }
    renderInviteButton() {
        return (0, i.jsx)(y, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, i.jsx)(j, { ...this.props });
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
        return S(e, t, n);
    }
}
