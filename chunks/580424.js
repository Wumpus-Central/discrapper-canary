"use strict";
n.d(t, { Ay: () => en, Sz: () => M, aI: () => P });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(713654),
    E = n(921661),
    A = n(678473),
    I = n(967144),
    T = n(733509),
    y = n(679382),
    S = n(378058),
    v = n(253932),
    C = n(71393),
    b = n(994500),
    N = n(287809),
    R = n(486020),
    O = n(427262),
    D = n(557158),
    L = n(652215);
n(307731);
var w = n(985018),
    x = n(395410);
function P(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function M(e) {
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
                props: { className: n, index: i, selected: a },
            } = this,
            o = this.isSelectable();
        return (0, r.jsx)(d.DUT, {
            ...e,
            className: s()(x.vk, n, t),
            id: P(i) ?? void 0,
            onClick: o ? this.handleClick : void 0,
            onMouseMove: o
                ? () => {
                      this.setState({ hovered: !0 }), this.handleMouseEnter();
                  }
                : void 0,
            onMouseLeave: o ? () => this.setState({ hovered: !1 }) : void 0,
            role: "option",
            "aria-disabled": !o,
            "aria-selected": o && a,
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
function V(e) {
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
function F(e) {
    let { title: t, className: n, children: a } = e,
        o = i.useContext(k);
    return (0, r.jsx)("div", {
        className: x.E3,
        children: (0, r.jsxs)(d.Heading, {
            id: M(o.id),
            className: s()(x.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, a],
        }),
    });
}
class B extends U {
    layoutClass = x.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, r.jsx)("div", { className: s()(e, x.yF) });
    }
}
class j extends U {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: i, guildId: a } = this.props,
            s = null == a ? b.A.getNickname(e.id) : null;
        return (0, r.jsxs)(D.Mr, {
            children: [
                (0, r.jsx)(D.Ch, {
                    children: (0, r.jsx)(d.euF, {
                        size: d._3J.SIZE_24,
                        src: e.getAvatarURL(a, 24),
                        "aria-hidden": !0,
                        status: n,
                    }),
                }),
                (0, r.jsx)(D.oC, { children: (0, r.jsx)(D.dB, { children: t ?? s ?? O.Ay.getName(e) }) }),
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
class H extends U {
    layoutClass = x.xF;
    renderContent() {
        let {
                user: e,
                nick: t,
                comparator: n,
                status: i,
                hidePersonalInformation: a,
                guildId: o,
                selected: l,
                layout: u = "horizontal",
            } = this.props,
            c = null == o ? b.A.getNickname(e.id) : null,
            _ = t ?? c ?? O.Ay.getName(e);
        return (0, r.jsxs)(D.Mr, {
            className: s()({ [x.DH]: "vertical-suggestion" === u }),
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
                                                  identifiable: a ? "never" : "always",
                                              }),
                                              a || e.hasUniqueUsername()
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
            { colorString: i, colorStrings: a } = e,
            o = "dot" === _.A.roleStyle,
            l = "username" === _.A.roleStyle && (null != i || null != a),
            u = (0, I.hH)(n, e, a),
            c = null != u && l,
            { gradientStyle: f, gradientClassname: p } = (0, d.WqX)({
                colorStrings: a,
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
                                className: s()({ [p]: c }),
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
            n = e.type === L.rbe.GUILD_CATEGORY ? d.sjq : (0, g.gU)(e);
        return (0, r.jsxs)(D.Mr, {
            children: [
                null != n && (0, r.jsx)(D.Ch, { children: (0, r.jsx)(n, { className: x.Kk }) }),
                (0, r.jsx)(D.oC, { children: (0, r.jsx)(D.dB, { children: (0, m.m1)(e, N.default, b.A) }) }),
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
        let { command: e, channel: t, showImage: n, section: i, selected: a } = this.props,
            { hovered: s } = this.state,
            o = this.isSelectable();
        return e.inputType === f.y$.PLACEHOLDER
            ? (0, r.jsx)(h.A, {})
            : (0, r.jsx)(p.A, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: s || (o && a),
                  section: i,
                  isSelectable: o,
              });
    }
}
class q extends U {
    layoutClass = s()(x.rT, x.Mf);
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            i = v.Sf.getSetting(),
            a =
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
            s = null != n ? (0, r.jsx)(D.Aq, { children: n.name }) : null;
        return (0, r.jsxs)(D.Mr, {
            children: [
                (0, r.jsx)(D.Ch, { children: a }),
                (0, r.jsx)(D.oC, { children: (0, r.jsxs)(D.dB, { children: [t, e.name, t] }) }),
                s,
            ],
        });
    }
}
class Z extends U {
    layoutClass = s()(x.rT, x.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: i, sticker: a } = this.props,
            { hovered: s } = this.state;
        return (
            (0, S.FD)(a)
                ? (e = y.A.getStickerPack(a.pack_id)?.name)
                : (0, S.Xw)(a) && (e = C.A.getGuild(a.guild_id)?.name),
            (0, r.jsxs)(D.Mr, {
                children: [
                    (0, r.jsx)(D.Ch, { children: n(a, s || !0 === i) }),
                    (0, r.jsxs)(D.oC, {
                        children: [
                            (0, r.jsx)(D.dB, { children: a.name }),
                            null != t && (0, r.jsx)(D.Nd, { children: w.intl.format(w.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, r.jsx)(D.Aq, { children: e }),
                ],
            })
        );
    }
}
class Q extends U {
    layoutClass = x.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, r.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class X extends U {
    renderContent() {
        return (0, r.jsx)(E.A, { emojis: this.props.emojis });
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
    static Loading = V;
    static Title = F;
    static Divider = B;
    static User = j;
    static UserSuggestion = H;
    static Role = Y;
    static Channel = K;
    static Command = z;
    static NewCommand = $;
    static Emoji = q;
    static GIFIntegration = Q;
    static Sticker = Z;
    static EmojiUpsell = X;
    static Soundmoji = J;
    static Game = ee;
    static Timestamp = W;
    render() {
        let { children: e, className: t, innerClassName: n, id: a, ...o } = this.props;
        return i.Children.count(e) > 0
            ? (0, r.jsx)(k.Provider, {
                  value: { id: a ?? "" },
                  children: (0, r.jsx)("div", {
                      className: s()(x.nx, t),
                      children: (0, r.jsx)("div", { className: s()(x.Fv, n), ...o, children: e }),
                  }),
              })
            : null;
    }
}
let en = et;
