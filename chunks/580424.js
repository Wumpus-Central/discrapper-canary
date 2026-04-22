"use strict";
n.d(t, { Ay: () => eo, Sz: () => B, aI: () => F });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    c = n(837381),
    u = n(939249),
    d = n(534514),
    h = n(97808),
    m = n(778712),
    p = n(36075),
    f = n(545442),
    g = n(678708),
    _ = n(88187),
    x = n(775602),
    A = n(392054),
    C = n(41329),
    E = n(746388),
    I = n(47167),
    v = n(713654),
    y = n(921661),
    S = n(678473),
    b = n(967144),
    N = n(733509),
    T = n(679382),
    j = n(378058),
    R = n(253932),
    w = n(71393),
    L = n(994500),
    M = n(287809),
    k = n(486020),
    O = n(427262),
    P = n(557158),
    D = n(652215),
    U = n(307731),
    V = n(985018),
    G = n(334021);
function F(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function B(e) {
    return `autocomplete-${e}-title`;
}
let H = l.createContext(null);
class W extends l.PureComponent {
    selectable = !0;
    layoutClass = G.rT;
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
                props: { className: n, index: l, selected: s },
            } = this,
            a = this.isSelectable();
        return (0, i.jsx)(u.D, {
            ...e,
            className: r()(G.vk, n, t),
            id: F(l) ?? void 0,
            onClick: a ? this.handleClick : void 0,
            onMouseMove: a
                ? () => {
                      this.setState({ hovered: !0 }), this.handleMouseEnter();
                  }
                : void 0,
            onMouseLeave: a ? () => this.setState({ hovered: !1 }) : void 0,
            role: "option",
            "aria-disabled": !a,
            "aria-selected": a && s,
            children: (0, i.jsx)("div", { className: G.E3, children: this.renderContent() }),
        });
    }
    render() {
        let { index: e } = this.props;
        return this.isSelectable()
            ? (0, i.jsx)(c.tG, { id: `${e}`, children: (e) => this.renderClickable(e) })
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
class K extends W {
    renderContent() {
        let { text: e, description: t } = this.props;
        return (0, i.jsxs)(P.Mr, {
            children: [
                (0, i.jsx)(P.oC, { children: (0, i.jsx)(P.dB, { children: e }) }),
                null != t ? (0, i.jsx)(P.Aq, { children: t }) : null,
            ],
        });
    }
}
function z(e) {
    let t = l.useMemo(() => o().random(60, 120), []);
    return (0, i.jsx)("div", {
        className: G.E3,
        "aria-busy": !0,
        children: (0, i.jsx)(P.Mr, {
            children: (0, i.jsx)(P.oC, {
                children: (0, i.jsx)(P.dB, { children: (0, i.jsx)("div", { className: G.M, style: { width: t } }) }),
            }),
        }),
    });
}
function Z(e) {
    let { title: t, className: n, children: s } = e,
        a = l.useContext(H);
    return (0, i.jsx)("div", {
        className: G.E3,
        children: (0, i.jsxs)(d.D, {
            id: B(a.id),
            className: r()(G.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, s],
        }),
    });
}
class q extends W {
    layoutClass = G.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, i.jsx)("div", { className: r()(e, G.yF) });
    }
}
class Y extends W {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: l, guildId: s } = this.props,
            r = null == s ? L.A.getNickname(e.id) : null;
        return (0, i.jsxs)(P.Mr, {
            children: [
                (0, i.jsx)(P.Ch, {
                    children: (0, i.jsx)(h.eu, {
                        size: m._3.SIZE_24,
                        src: e.getAvatarURL(s, 24),
                        "aria-hidden": !0,
                        status: n,
                    }),
                }),
                (0, i.jsx)(P.oC, { children: (0, i.jsx)(P.dB, { children: t ?? r ?? O.Ay.getName(e) }) }),
                (0, i.jsxs)(P.Aq, {
                    children: [
                        O.Ay.getUserTag(e, { mode: "username", identifiable: l ? "never" : "always" }),
                        l || e.hasUniqueUsername()
                            ? null
                            : (0, i.jsxs)("span", { className: G.T, children: ["#", e.discriminator] }),
                    ],
                }),
            ],
        });
    }
}
class J extends W {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: l, colorStrings: s } = e,
            a = "dot" === x.A.roleStyle,
            o = "username" === x.A.roleStyle && (null != l || null != s),
            c = (0, b.hH)(n, e, s),
            u = null != c && o,
            { gradientStyle: d, gradientClassname: h } = (0, p.Wq)({
                colorStrings: s,
                useReducedMotion: x.A.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            m = o ? { ...(u ? d : { color: null != l ? l : void 0 }) } : void 0;
        return (0, i.jsxs)(P.Mr, {
            children: [
                (0, i.jsx)(P.oC, {
                    children: (0, i.jsxs)(P.dB, {
                        children: [
                            a && (0, i.jsx)(f.W, { className: G.m4, color: l, colors: c, tooltip: !1 }),
                            (0, i.jsxs)("span", {
                                className: r()({ [h]: u }),
                                style: m,
                                "data-text": u ? `@${e.name}` : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, i.jsx)(P.Aq, { children: V.intl.string(V.t["/91tbr"]) }),
            ],
        });
    }
}
class $ extends W {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, i.jsxs)(P.Mr, {
            children: [
                (0, i.jsx)(P.oC, {
                    children: (0, i.jsx)(P.dB, { children: (0, i.jsx)(S.A, { node: e, showTooltip: !1 }) }),
                }),
                null != t ? (0, i.jsx)(P.Aq, { children: t }) : null,
            ],
        });
    }
}
class X extends W {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === D.rbe.GUILD_CATEGORY ? g.s : (0, v.gU)(e);
        return (0, i.jsxs)(P.Mr, {
            children: [
                null != n && (0, i.jsx)(P.Ch, { children: (0, i.jsx)(n, { className: G.Kk }) }),
                (0, i.jsx)(P.oC, { children: (0, i.jsx)(P.dB, { children: (0, I.m1)(e, M.default, L.A) }) }),
                null != t ? (0, i.jsx)(P.Aq, { children: t.name }) : null,
            ],
        });
    }
}
class Q extends W {
    renderContent() {
        let { command: e } = this.props;
        return (0, i.jsxs)(P.Mr, {
            children: [
                (0, i.jsx)(P.Ch, {
                    children: (0, i.jsx)(_.F, { size: "xs", color: "currentColor", className: G.Kk, colorClass: G.t4 }),
                }),
                (0, i.jsx)(P.oC, { children: (0, i.jsx)(P.dB, { children: e.displayName }) }),
                (0, i.jsx)(P.Aq, { children: e.displayDescription }),
            ],
        });
    }
}
class ee extends W {
    isSelectable() {
        return this.props.command.inputType !== A.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: l, selected: s } = this.props,
            { hovered: r } = this.state,
            a = this.isSelectable();
        return e.inputType === A.y$.PLACEHOLDER
            ? (0, i.jsx)(E.A, {})
            : (0, i.jsx)(C.A, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: r || (a && s),
                  section: l,
                  isSelectable: a,
              });
    }
}
class et extends W {
    layoutClass = r()(G.rT, G.Mf);
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            l = R.Sf.getSetting(),
            s =
                null != e.id || "" !== e.url
                    ? (0, i.jsx)("img", {
                          alt: "",
                          className: G.mp,
                          src:
                              null != e.id
                                  ? k.Ay.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && l,
                                        size: U.EMOJI_URL_BASE_SIZE,
                                    })
                                  : e.url,
                      })
                    : (0, i.jsx)("span", { className: G.nT, children: e.surrogates }),
            r = null != n ? (0, i.jsx)(P.Aq, { children: n.name }) : null;
        return (0, i.jsxs)(P.Mr, {
            children: [
                (0, i.jsx)(P.Ch, { children: s }),
                (0, i.jsx)(P.oC, { children: (0, i.jsxs)(P.dB, { children: [t, e.name, t] }) }),
                r,
            ],
        });
    }
}
class en extends W {
    layoutClass = r()(G.rT, G.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: l, sticker: s } = this.props,
            { hovered: r } = this.state;
        return (
            (0, j.FD)(s)
                ? (e = T.A.getStickerPack(s.pack_id)?.name)
                : (0, j.Xw)(s) && (e = w.A.getGuild(s.guild_id)?.name),
            (0, i.jsxs)(P.Mr, {
                children: [
                    (0, i.jsx)(P.Ch, { children: n(s, r || !0 === l) }),
                    (0, i.jsxs)(P.oC, {
                        children: [
                            (0, i.jsx)(P.dB, { children: s.name }),
                            null != t && (0, i.jsx)(P.Nd, { children: V.intl.format(V.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, i.jsx)(P.Aq, { children: e }),
                ],
            })
        );
    }
}
class ei extends W {
    layoutClass = G.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, i.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class el extends W {
    renderContent() {
        return (0, i.jsx)(y.A, { emojis: this.props.emojis });
    }
}
class es extends W {
    renderContent() {
        return (0, i.jsx)(N.A, { ...this.props });
    }
}
class er extends W {
    renderContent() {
        let { game: e } = this.props,
            t = (0, i.jsx)("img", {
                alt: "",
                className: G.Kk,
                src: k.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 32 }),
            });
        return (0, i.jsxs)(P.Mr, {
            children: [
                (0, i.jsx)(P.Ch, { children: t }),
                (0, i.jsx)(P.oC, { children: (0, i.jsx)(P.dB, { children: e.name }) }),
            ],
        });
    }
}
class ea extends l.PureComponent {
    static Generic = K;
    static Loading = z;
    static Title = Z;
    static Divider = q;
    static User = Y;
    static Role = J;
    static Channel = X;
    static Command = Q;
    static NewCommand = ee;
    static Emoji = et;
    static GIFIntegration = ei;
    static Sticker = en;
    static EmojiUpsell = el;
    static Soundmoji = es;
    static Game = er;
    static Timestamp = $;
    render() {
        let { children: e, className: t, innerClassName: n, id: s, ...a } = this.props;
        return l.Children.count(e) > 0
            ? (0, i.jsx)(H.Provider, {
                  value: { id: s ?? "" },
                  children: (0, i.jsx)("div", {
                      className: r()(G.nx, t),
                      children: (0, i.jsx)("div", { className: r()(G.Fv, n), ...a, children: e }),
                  }),
              })
            : null;
    }
}
let eo = ea;
