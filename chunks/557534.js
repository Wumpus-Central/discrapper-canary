n.d(t, {
    Ay: () => D,
    Jd: () => T,
    O6: () => N,
    gQ: () => P,
    h$: () => I,
});
var r,
    l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    c = n(990078),
    u = n(397927),
    d = n(435183),
    f = n(698441),
    p = n(855687),
    h = n(816662),
    b = n(446600),
    g = n(728321),
    m = n(95701),
    A = n(616356),
    y = n(71393),
    O = n(576705),
    j = n(967198),
    v = n(343360),
    x = n(652215),
    E = n(985018),
    _ = n(728444);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t, n) {
    return null != t && !!t && !(0, v.ws)(n, e.type);
}
function N(e, t) {
    return null == t ? _.fx : e > t ? _.mU : _.TR;
}
function T(e) {
    let { channel: t, disableManageChannels: n, tabIndex: r, forceShowButtons: i, hasChannelInfo: a = !1 } = e;
    return (0, o.bG)(
        [O.A, j.A],
        () =>
            n ||
            j.A.getGuildId() === x.YYv ||
            (!O.A.can(x.xBc.MANAGE_CHANNELS, t) &&
                !O.A.can(x.xBc.MANAGE_ROLES, t) &&
                !O.A.can(x.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, m.tr)(t.type) && !O.A.can(x.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !O.A.can(x.xBc.CONNECT, t)) ||
            !m.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, l.jsx)(c.m, {
              asContainer: !0,
              text: E.intl.string(E.t["3gUsJb"]),
              children: (0, l.jsx)(u.DUT, {
                  className: s()(_.Xs, i ? _.Tf : void 0, a ? _.bw : _.UI),
                  onClick: function () {
                      d.Ay.open(t.id);
                  },
                  tabIndex: r,
                  "aria-label": E.intl.string(E.t["3gUsJb"]),
                  children: (0, l.jsx)(u.Zes, {
                      size: "xs",
                      color: "currentColor",
                      className: _.gE,
                  }),
              }),
          });
}
function P(e) {
    let {
            channel: t,
            isDefaultChannel: r = !1,
            locked: a,
            tabIndex: d,
            forceShowButtons: h,
            hasChannelInfo: m = !1,
        } = e,
        j = (0, o.bG)([y.A], () => y.A.getGuild(t.getGuildId())),
        v = (0, o.bG)([b.A], () => b.A.getStageInstanceByChannel(t.id), [t.id]),
        C = (0, o.bG)([f.Ay], () => f.Ay.getActiveEventByChannel(t.id), [t.id]),
        I = (0, o.bG)([O.A], () => (0, p.K)(O.A, j, t, v)),
        N = (0, o.bG)([], () =>
            (null == t ? void 0 : t.type) === x.rbe.GUILD_VOICE
                ? E.intl.string(E.t["EE+P0H"])
                : E.intl.string(E.t["0jeAXt"]),
        ),
        T = i.useRef(null);
    if (a || !I || t.isModeratorReportChannel()) return null;
    let P = (0, l.jsx)(u.Rvf, {
        size: "xs",
        className: _.gE,
        "aria-hidden": !0,
        color: "currentColor",
    });
    return (
        r &&
            (P = (0, l.jsx)(g.A, {
                childRef: T,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, l.jsx)("div", {
                    ref: T,
                    children: P,
                }),
            })),
        (0, l.jsx)(c.m, {
            asContainer: !0,
            text: N,
            children: (0, l.jsx)(u.DUT, {
                className: s()(_.Xs, h ? _.Tf : void 0, m ? _.bw : _.UI),
                onClick: function () {
                    if (null != j) {
                        let e = A.A.getAllActiveStreams().filter(
                            (e) => e.state !== x.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, u.mMO)(async () => {
                            let { default: r } = await Promise.all([n.e("43600"), n.e("65202")]).then(
                                n.bind(n, 234355),
                            );
                            return (n) => {
                                var i, a;
                                return (0, l.jsx)(
                                    r,
                                    ((i = S({}, n)),
                                    (a = a =
                                        {
                                            guild: j,
                                            channel: t,
                                            streamUserId: 1 === e.length ? e[0].ownerId : null,
                                            source: x.PE1.GUILD_CHANNELS,
                                            guildScheduledEvent: C,
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(a)).forEach(function (e) {
                                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                          }),
                                    i),
                                );
                            };
                        });
                    }
                },
                tabIndex: d,
                "aria-label": N,
                children: P,
            }),
        })
    );
}
function w(e) {
    let { channel: t } = e;
    return (0, l.jsx)(c.m, {
        asContainer: !0,
        text: E.intl.string(E.t["ROh4T+"]),
        children: (0, l.jsx)(u.DUT, {
            className: _.Xs,
            onClick: () => {
                (0, h.Ol)(t.guild_id, t.id);
            },
            "aria-label": E.intl.string(E.t["ROh4T+"]),
            children: (0, l.jsx)(u.PGe, {
                size: "xs",
                color: "currentColor",
                className: _.gE,
            }),
        }),
    });
}
function R(e) {
    let { channel: t } = e;
    return (0, l.jsx)(c.m, {
        asContainer: !0,
        text: E.intl.string(E.t["N2c/Un"]),
        children: (0, l.jsx)(u.DUT, {
            className: _.Xs,
            onClick: () => {
                (0, h.jA)(t.guild_id, t.id, !0, { section: x.JJy.CHANNEL_LIST });
            },
            "aria-label": E.intl.string(E.t["N2c/Un"]),
            children: (0, l.jsx)(u.A9s, {
                size: "xs",
                color: "currentColor",
                className: _.gE,
            }),
        }),
    });
}
class D extends (r = i.PureComponent) {
    renderEditButton() {
        return (0, l.jsx)(T, S({}, this.props));
    }
    renderInviteButton() {
        return (0, l.jsx)(P, S({}, this.props));
    }
    renderRemoveSuggestionButton() {
        return (0, l.jsx)(w, S({}, this.props));
    }
    renderAcceptSuggestionButton() {
        return (0, l.jsx)(R, S({}, this.props));
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return N(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return I(e, t, n);
    }
}
C(D, "defaultProps", { isDefaultChannel: !1 });
