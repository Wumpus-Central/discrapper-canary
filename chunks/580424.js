"use strict";
n.d(t, { Ay: () => ee, Sz: () => x, aI: () => M });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(837381),
    c = n(397927),
    d = n(775602),
    _ = n(392054),
    f = n(41329),
    p = n(746388),
    h = n(47167),
    m = n(713654),
    E = n(921661),
    g = n(678473),
    A = n(967144),
    I = n(733509),
    T = n(679382),
    S = n(378058),
    y = n(253932),
    v = n(71393),
    N = n(994500),
    C = n(287809),
    R = n(486020),
    O = n(427262),
    b = n(557158),
    D = n(652215);
n(307731);
var L = n(985018),
    w = n(395410);
function M(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function x(e) {
    return `autocomplete-${e}-title`;
}
let P = i.createContext(null);
class k extends i.PureComponent {
    selectable = !0;
    layoutClass = w.rT;
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
        return (0, r.jsx)(c.DUT, {
            ...e,
            className: a()(w.vk, n, t),
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
            children: (0, r.jsx)("div", { className: w.E3, children: this.renderContent() }),
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
class U extends k {
    renderContent() {
        let { text: e, description: t } = this.props;
        return (0, r.jsxs)(b.Mr, {
            children: [
                (0, r.jsx)(b.oC, { children: (0, r.jsx)(b.dB, { children: e }) }),
                null != t ? (0, r.jsx)(b.Aq, { children: t }) : null,
            ],
        });
    }
}
function G(e) {
    let t = i.useMemo(() => l().random(60, 120), []);
    return (0, r.jsx)("div", {
        className: w.E3,
        "aria-busy": !0,
        children: (0, r.jsx)(b.Mr, {
            children: (0, r.jsx)(b.oC, {
                children: (0, r.jsx)(b.dB, { children: (0, r.jsx)("div", { className: w.M, style: { width: t } }) }),
            }),
        }),
    });
}
function F(e) {
    let { title: t, className: n, children: s } = e,
        o = i.useContext(P);
    return (0, r.jsx)("div", {
        className: w.E3,
        children: (0, r.jsxs)(c.Heading, {
            id: x(o.id),
            className: a()(w.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, s],
        }),
    });
}
class V extends k {
    layoutClass = w.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, r.jsx)("div", { className: a()(e, w.yF) });
    }
}
class B extends k {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: i, guildId: s } = this.props,
            a = null == s ? N.A.getNickname(e.id) : null;
        return (0, r.jsxs)(b.Mr, {
            children: [
                (0, r.jsx)(b.Ch, {
                    children: (0, r.jsx)(c.euF, {
                        size: c._3J.SIZE_24,
                        src: e.getAvatarURL(s, 24),
                        "aria-hidden": !0,
                        status: n,
                    }),
                }),
                (0, r.jsx)(b.oC, { children: (0, r.jsx)(b.dB, { children: t ?? a ?? O.Ay.getName(e) }) }),
                (0, r.jsxs)(b.Aq, {
                    children: [
                        O.Ay.getUserTag(e, { mode: "username", identifiable: i ? "never" : "always" }),
                        i || e.hasUniqueUsername()
                            ? null
                            : (0, r.jsxs)("span", { className: w.T, children: ["#", e.discriminator] }),
                    ],
                }),
            ],
        });
    }
}
class H extends k {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: i, colorStrings: s } = e,
            o = "dot" === d.A.roleStyle,
            l = "username" === d.A.roleStyle && (null != i || null != s),
            u = (0, A.hH)(n, e, s),
            _ = null != u && l,
            { gradientStyle: f, gradientClassname: p } = (0, c.WqX)({
                colorStrings: s,
                useReducedMotion: d.A.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            h = l ? { ...(_ ? f : { color: null != i ? i : void 0 }) } : void 0;
        return (0, r.jsxs)(b.Mr, {
            children: [
                (0, r.jsx)(b.oC, {
                    children: (0, r.jsxs)(b.dB, {
                        children: [
                            o && (0, r.jsx)(c.WYI, { className: w.m4, color: i, colors: u, tooltip: !1 }),
                            (0, r.jsxs)("span", {
                                className: a()({ [p]: _ }),
                                style: h,
                                "data-text": _ ? `@${e.name}` : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, r.jsx)(b.Aq, { children: L.intl.string(L.t["/91tbr"]) }),
            ],
        });
    }
}
class j extends k {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, r.jsxs)(b.Mr, {
            children: [
                (0, r.jsx)(b.oC, {
                    children: (0, r.jsx)(b.dB, { children: (0, r.jsx)(g.A, { node: e, showTooltip: !1 }) }),
                }),
                null != t ? (0, r.jsx)(b.Aq, { children: t }) : null,
            ],
        });
    }
}
class Y extends k {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === D.rbe.GUILD_CATEGORY ? c.sjq : (0, m.gU)(e);
        return (0, r.jsxs)(b.Mr, {
            children: [
                null != n && (0, r.jsx)(b.Ch, { children: (0, r.jsx)(n, { className: w.Kk }) }),
                (0, r.jsx)(b.oC, { children: (0, r.jsx)(b.dB, { children: (0, h.m1)(e, C.default, N.A) }) }),
                null != t ? (0, r.jsx)(b.Aq, { children: t.name }) : null,
            ],
        });
    }
}
class W extends k {
    renderContent() {
        let { command: e } = this.props;
        return (0, r.jsxs)(b.Mr, {
            children: [
                (0, r.jsx)(b.Ch, {
                    children: (0, r.jsx)(c.Fb4, {
                        size: "xs",
                        color: "currentColor",
                        className: w.Kk,
                        colorClass: w.t4,
                    }),
                }),
                (0, r.jsx)(b.oC, { children: (0, r.jsx)(b.dB, { children: e.displayName }) }),
                (0, r.jsx)(b.Aq, { children: e.displayDescription }),
            ],
        });
    }
}
class K extends k {
    isSelectable() {
        return this.props.command.inputType !== _.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: i, selected: s } = this.props,
            { hovered: a } = this.state,
            o = this.isSelectable();
        return e.inputType === _.y$.PLACEHOLDER
            ? (0, r.jsx)(p.A, {})
            : (0, r.jsx)(f.A, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: a || (o && s),
                  section: i,
                  isSelectable: o,
              });
    }
}
class $ extends k {
    layoutClass = a()(w.rT, w.Mf);
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            i = y.Sf.getSetting(),
            s =
                null != e.id || "" !== e.url
                    ? (0, r.jsx)("img", {
                          alt: "",
                          className: w.mp,
                          src:
                              null != e.id
                                  ? R.Ay.getEmojiURL({ id: e.id, animated: e.animated && i, size: 48 })
                                  : e.url,
                      })
                    : (0, r.jsx)("span", { className: w.nT, children: e.surrogates }),
            a = null != n ? (0, r.jsx)(b.Aq, { children: n.name }) : null;
        return (0, r.jsxs)(b.Mr, {
            children: [
                (0, r.jsx)(b.Ch, { children: s }),
                (0, r.jsx)(b.oC, { children: (0, r.jsxs)(b.dB, { children: [t, e.name, t] }) }),
                a,
            ],
        });
    }
}
class z extends k {
    layoutClass = a()(w.rT, w.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: i, sticker: s } = this.props,
            { hovered: a } = this.state;
        return (
            (0, S.FD)(s)
                ? (e = T.A.getStickerPack(s.pack_id)?.name)
                : (0, S.Xw)(s) && (e = v.A.getGuild(s.guild_id)?.name),
            (0, r.jsxs)(b.Mr, {
                children: [
                    (0, r.jsx)(b.Ch, { children: n(s, a || !0 === i) }),
                    (0, r.jsxs)(b.oC, {
                        children: [
                            (0, r.jsx)(b.dB, { children: s.name }),
                            null != t && (0, r.jsx)(b.Nd, { children: L.intl.format(L.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, r.jsx)(b.Aq, { children: e }),
                ],
            })
        );
    }
}
class q extends k {
    layoutClass = w.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, r.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class Z extends k {
    renderContent() {
        return (0, r.jsx)(E.A, { emojis: this.props.emojis });
    }
}
class X extends k {
    renderContent() {
        return (0, r.jsx)(I.A, { ...this.props });
    }
}
class Q extends k {
    renderContent() {
        let { game: e } = this.props,
            t = (0, r.jsx)("img", {
                alt: "",
                className: w.Kk,
                src: R.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 32 }),
            });
        return (0, r.jsxs)(b.Mr, {
            children: [
                (0, r.jsx)(b.Ch, { children: t }),
                (0, r.jsx)(b.oC, { children: (0, r.jsx)(b.dB, { children: e.name }) }),
            ],
        });
    }
}
class J extends i.PureComponent {
    static Generic = U;
    static Loading = G;
    static Title = F;
    static Divider = V;
    static User = B;
    static Role = H;
    static Channel = Y;
    static Command = W;
    static NewCommand = K;
    static Emoji = $;
    static GIFIntegration = q;
    static Sticker = z;
    static EmojiUpsell = Z;
    static Soundmoji = X;
    static Game = Q;
    static Timestamp = j;
    render() {
        let { children: e, className: t, innerClassName: n, id: s, ...o } = this.props;
        return i.Children.count(e) > 0
            ? (0, r.jsx)(P.Provider, {
                  value: { id: s ?? "" },
                  children: (0, r.jsx)("div", {
                      className: a()(w.nx, t),
                      children: (0, r.jsx)("div", { className: a()(w.Fv, n), ...o, children: e }),
                  }),
              })
            : null;
    }
}
let ee = J;
