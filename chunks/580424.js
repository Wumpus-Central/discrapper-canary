"use strict";
n.d(t, { Ay: () => en, Sz: () => P, aI: () => M });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(837381),
    c = n(508770),
    d = n(397927),
    _ = n(775602),
    f = n(392054),
    p = n(41329),
    h = n(746388),
    m = n(47167),
    E = n(713654),
    g = n(921661),
    A = n(678473),
    I = n(967144),
    T = n(733509),
    S = n(679382),
    y = n(378058),
    v = n(253932),
    N = n(71393),
    C = n(994500),
    b = n(287809),
    R = n(486020),
    O = n(427262),
    D = n(557158),
    L = n(652215);
n(307731);
var w = n(985018),
    x = n(395410);
function M(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function P(e) {
    return `autocomplete-${e}-title`;
}
let k = i.createContext(null);
class U extends i.PureComponent {
    selectable = !0;
    layoutClass = x.rT;
    constructor(e) {
        super(e), (this.state = { hovered: !1 });
    }
    isSelectable() {
        return this.selectable;
    }
    renderContent() {
        throw Error("AutocompleteRow: renderContent must be extended");
    }
    renderClickable(e) {
        let {
                layoutClass: t,
                props: { className: n, index: i, selected: s },
            } = this,
            o = this.isSelectable();
        return (0, r.jsx)(d.DUT, {
            ...e,
            className: a()(x.vk, n, t),
            id: M(i) ?? void 0,
            onClick: o ? this.handleClick : void 0,
            onMouseMove: o
                ? () => {
                      this.setState({ hovered: !0 }), this.handleMouseEnter();
                  }
                : void 0,
            onMouseLeave: o ? () => this.setState({ hovered: !1 }) : void 0,
            role: "option",
            "aria-disabled": !o,
            "aria-selected": o && s,
            children: (0, r.jsx)("div", { className: x.E3, children: this.renderContent() }),
        });
    }
    render() {
        let { index: e } = this.props;
        return this.isSelectable()
            ? (0, r.jsx)(u.tG, { id: `${e}`, children: (e) => this.renderClickable(e) })
            : this.renderClickable();
    }
    handleMouseEnter = () => {
        let { onHover: e, index: t, selected: n } = this.props;
        null == e || n || "number" != typeof t || e(t);
    };
    handleClick = (e) => {
        let { onClick: t, index: n } = this.props;
        null != t && "number" == typeof n && t(n, e);
    };
}
class G extends U {
    renderContent() {
        let { text: e, description: t, badge: n } = this.props;
        return (0, r.jsxs)(D.Mr, {
            children: [
                (0, r.jsx)(D.oC, {
                    children: (0, r.jsxs)(D.dB, {
                        children: [e, " ", null != n && (0, r.jsx)(c.E, { type: n, variant: "brand" })],
                    }),
                }),
                null != t ? (0, r.jsx)(D.Aq, { children: t }) : null,
            ],
        });
    }
}
function F(e) {
    let t = i.useMemo(() => l().random(60, 120), []);
    return (0, r.jsx)("div", {
        className: x.E3,
        "aria-busy": !0,
        children: (0, r.jsx)(D.Mr, {
            children: (0, r.jsx)(D.oC, {
                children: (0, r.jsx)(D.dB, { children: (0, r.jsx)("div", { className: x.M, style: { width: t } }) }),
            }),
        }),
    });
}
function V(e) {
    let { title: t, className: n, children: s } = e,
        o = i.useContext(k);
    return (0, r.jsx)("div", {
        className: x.E3,
        children: (0, r.jsxs)(d.Heading, {
            id: P(o.id),
            className: a()(x.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, s],
        }),
    });
}
class B extends U {
    layoutClass = x.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, r.jsx)("div", { className: a()(e, x.yF) });
    }
}
class H extends U {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: i, guildId: s } = this.props,
            a = null == s ? C.A.getNickname(e.id) : null;
        return (0, r.jsxs)(D.Mr, {
            children: [
                (0, r.jsx)(D.Ch, {
                    children: (0, r.jsx)(d.euF, {
                        size: d._3J.SIZE_24,
                        src: e.getAvatarURL(s, 24),
                        "aria-hidden": !0,
                        status: n,
                    }),
                }),
                (0, r.jsx)(D.oC, { children: (0, r.jsx)(D.dB, { children: t ?? a ?? O.Ay.getName(e) }) }),
                (0, r.jsxs)(D.Aq, {
                    children: [
                        O.Ay.getUserTag(e, { mode: "username", identifiable: i ? "never" : "always" }),
                        i || e.hasUniqueUsername()
                            ? null
                            : (0, r.jsxs)("span", { className: x.T, children: ["#", e.discriminator] }),
                    ],
                }),
            ],
        });
    }
}
class j extends U {
    layoutClass = x.xF;
    renderContent() {
        let {
                user: e,
                nick: t,
                comparator: n,
                status: i,
                hidePersonalInformation: s,
                guildId: o,
                selected: l,
                layout: u = "horizontal",
            } = this.props,
            c = null == o ? C.A.getNickname(e.id) : null,
            _ = t ?? c ?? O.Ay.getName(e);
        return (0, r.jsxs)(D.Mr, {
            className: a()({ [x.DH]: "vertical-suggestion" === u }),
            children: [
                (0, r.jsx)(D.Ch, {
                    children: (0, r.jsx)(d.euF, {
                        size: d._3J.SIZE_32,
                        src: e.getAvatarURL(o, 32),
                        "aria-hidden": !0,
                        status: i,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: x.H5,
                    "aria-label": w.intl.formatToPlainString(w.t["9v/R+j"], { name: _ }),
                    children: [
                        (0, r.jsx)(D.oC, {
                            children: (0, r.jsx)(d.Text, {
                                className: x.hf,
                                color: "interactive-text-active",
                                variant: "text-sm/medium",
                                children: _,
                            }),
                        }),
                        (0, r.jsx)(D.Aq, {
                            children:
                                null == n || n === _.toLocaleLowerCase() || n === e.username.toLocaleLowerCase()
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              O.Ay.getUserTag(e, {
                                                  mode: "username",
                                                  identifiable: s ? "never" : "always",
                                              }),
                                              s || e.hasUniqueUsername()
                                                  ? null
                                                  : (0, r.jsxs)("span", {
                                                        className: x.T,
                                                        children: ["#", e.discriminator],
                                                    }),
                                          ],
                                      })
                                    : n,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: x.ti,
                    children: l ? (0, r.jsx)(d.e7I, { shortcut: "tab", dim: !0 }) : null,
                }),
            ],
        });
    }
}
class Y extends U {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: i, colorStrings: s } = e,
            o = "dot" === _.A.roleStyle,
            l = "username" === _.A.roleStyle && (null != i || null != s),
            u = (0, I.hH)(n, e, s),
            c = null != u && l,
            { gradientStyle: f, gradientClassname: p } = (0, d.WqX)({
                colorStrings: s,
                useReducedMotion: _.A.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            h = l ? { ...(c ? f : { color: null != i ? i : void 0 }) } : void 0;
        return (0, r.jsxs)(D.Mr, {
            children: [
                (0, r.jsx)(D.oC, {
                    children: (0, r.jsxs)(D.dB, {
                        children: [
                            o && (0, r.jsx)(d.WYI, { className: x.m4, color: i, colors: u, tooltip: !1 }),
                            (0, r.jsxs)("span", {
                                className: a()({ [p]: c }),
                                style: h,
                                "data-text": c ? `@${e.name}` : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, r.jsx)(D.Aq, { children: w.intl.string(w.t["/91tbr"]) }),
            ],
        });
    }
}
class W extends U {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, r.jsxs)(D.Mr, {
            children: [
                (0, r.jsx)(D.oC, {
                    children: (0, r.jsx)(D.dB, { children: (0, r.jsx)(A.A, { node: e, showTooltip: !1 }) }),
                }),
                null != t ? (0, r.jsx)(D.Aq, { children: t }) : null,
            ],
        });
    }
}
class K extends U {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === L.rbe.GUILD_CATEGORY ? d.sjq : (0, E.gU)(e);
        return (0, r.jsxs)(D.Mr, {
            children: [
                null != n && (0, r.jsx)(D.Ch, { children: (0, r.jsx)(n, { className: x.Kk }) }),
                (0, r.jsx)(D.oC, { children: (0, r.jsx)(D.dB, { children: (0, m.m1)(e, b.default, C.A) }) }),
                null != t ? (0, r.jsx)(D.Aq, { children: t.name }) : null,
            ],
        });
    }
}
class z extends U {
    renderContent() {
        let { command: e } = this.props;
        return (0, r.jsxs)(D.Mr, {
            children: [
                (0, r.jsx)(D.Ch, {
                    children: (0, r.jsx)(d.Fb4, {
                        size: "xs",
                        color: "currentColor",
                        className: x.Kk,
                        colorClass: x.t4,
                    }),
                }),
                (0, r.jsx)(D.oC, { children: (0, r.jsx)(D.dB, { children: e.displayName }) }),
                (0, r.jsx)(D.Aq, { children: e.displayDescription }),
            ],
        });
    }
}
class $ extends U {
    isSelectable() {
        return this.props.command.inputType !== f.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: i, selected: s } = this.props,
            { hovered: a } = this.state,
            o = this.isSelectable();
        return e.inputType === f.y$.PLACEHOLDER
            ? (0, r.jsx)(h.A, {})
            : (0, r.jsx)(p.A, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: a || (o && s),
                  section: i,
                  isSelectable: o,
              });
    }
}
class q extends U {
    layoutClass = a()(x.rT, x.Mf);
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            i = v.Sf.getSetting(),
            s =
                null != e.id || "" !== e.url
                    ? (0, r.jsx)("img", {
                          alt: "",
                          className: x.mp,
                          src:
                              null != e.id
                                  ? R.Ay.getEmojiURL({ id: e.id, animated: e.animated && i, size: 48 })
                                  : e.url,
                      })
                    : (0, r.jsx)("span", { className: x.nT, children: e.surrogates }),
            a = null != n ? (0, r.jsx)(D.Aq, { children: n.name }) : null;
        return (0, r.jsxs)(D.Mr, {
            children: [
                (0, r.jsx)(D.Ch, { children: s }),
                (0, r.jsx)(D.oC, { children: (0, r.jsxs)(D.dB, { children: [t, e.name, t] }) }),
                a,
            ],
        });
    }
}
class Z extends U {
    layoutClass = a()(x.rT, x.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: i, sticker: s } = this.props,
            { hovered: a } = this.state;
        return (
            (0, y.FD)(s)
                ? (e = S.A.getStickerPack(s.pack_id)?.name)
                : (0, y.Xw)(s) && (e = N.A.getGuild(s.guild_id)?.name),
            (0, r.jsxs)(D.Mr, {
                children: [
                    (0, r.jsx)(D.Ch, { children: n(s, a || !0 === i) }),
                    (0, r.jsxs)(D.oC, {
                        children: [
                            (0, r.jsx)(D.dB, { children: s.name }),
                            null != t && (0, r.jsx)(D.Nd, { children: w.intl.format(w.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, r.jsx)(D.Aq, { children: e }),
                ],
            })
        );
    }
}
class X extends U {
    layoutClass = x.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, r.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class Q extends U {
    renderContent() {
        return (0, r.jsx)(g.A, { emojis: this.props.emojis });
    }
}
class J extends U {
    renderContent() {
        return (0, r.jsx)(T.A, { ...this.props });
    }
}
class ee extends U {
    renderContent() {
        let { game: e } = this.props,
            t = (0, r.jsx)("img", {
                alt: "",
                className: x.Kk,
                src: R.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 32 }),
            });
        return (0, r.jsxs)(D.Mr, {
            children: [
                (0, r.jsx)(D.Ch, { children: t }),
                (0, r.jsx)(D.oC, { children: (0, r.jsx)(D.dB, { children: e.name }) }),
            ],
        });
    }
}
class et extends i.PureComponent {
    static Generic = G;
    static Loading = F;
    static Title = V;
    static Divider = B;
    static User = H;
    static UserSuggestion = j;
    static Role = Y;
    static Channel = K;
    static Command = z;
    static NewCommand = $;
    static Emoji = q;
    static GIFIntegration = X;
    static Sticker = Z;
    static EmojiUpsell = Q;
    static Soundmoji = J;
    static Game = ee;
    static Timestamp = W;
    render() {
        let { children: e, className: t, innerClassName: n, id: s, ...o } = this.props;
        return i.Children.count(e) > 0
            ? (0, r.jsx)(k.Provider, {
                  value: { id: s ?? "" },
                  children: (0, r.jsx)("div", {
                      className: a()(x.nx, t),
                      children: (0, r.jsx)("div", { className: a()(x.Fv, n), ...o, children: e }),
                  }),
              })
            : null;
    }
}
let en = et;
