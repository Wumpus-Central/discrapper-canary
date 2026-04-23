"use strict";
n.d(t, { Ay: () => el, Sz: () => H, aI: () => B });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(837381),
    c = n(939249),
    d = n(534514),
    _ = n(97808),
    f = n(778712),
    p = n(36075),
    h = n(545442),
    E = n(678708),
    m = n(88187),
    g = n(775602),
    A = n(392054),
    I = n(41329),
    T = n(746388),
    S = n(47167),
    y = n(713654),
    N = n(921661),
    v = n(678473),
    C = n(967144),
    O = n(733509),
    R = n(679382),
    b = n(378058),
    D = n(253932),
    L = n(71393),
    w = n(994500),
    M = n(287809),
    P = n(486020),
    x = n(427262),
    k = n(557158),
    U = n(652215),
    G = n(307731),
    F = n(985018),
    V = n(81093);
function B(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function H(e) {
    return `autocomplete-${e}-title`;
}
let j = i.createContext(null);
class Y extends i.PureComponent {
    selectable = !0;
    layoutClass = V.rT;
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
        return (0, r.jsx)(c.D, {
            ...e,
            className: a()(V.vk, n, t),
            id: B(i) ?? void 0,
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
            children: (0, r.jsx)("div", { className: V.E3, children: this.renderContent() }),
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
class W extends Y {
    renderContent() {
        let { text: e, description: t } = this.props;
        return (0, r.jsxs)(k.Mr, {
            children: [
                (0, r.jsx)(k.oC, { children: (0, r.jsx)(k.dB, { children: e }) }),
                null != t ? (0, r.jsx)(k.Aq, { children: t }) : null,
            ],
        });
    }
}
function K(e) {
    let t = i.useMemo(() => l().random(60, 120), []);
    return (0, r.jsx)("div", {
        className: V.E3,
        "aria-busy": !0,
        children: (0, r.jsx)(k.Mr, {
            children: (0, r.jsx)(k.oC, {
                children: (0, r.jsx)(k.dB, { children: (0, r.jsx)("div", { className: V.M, style: { width: t } }) }),
            }),
        }),
    });
}
function $(e) {
    let { title: t, className: n, children: s } = e,
        o = i.useContext(j);
    return (0, r.jsx)("div", {
        className: V.E3,
        children: (0, r.jsxs)(d.D, {
            id: H(o.id),
            className: a()(V.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, s],
        }),
    });
}
class z extends Y {
    layoutClass = V.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, r.jsx)("div", { className: a()(e, V.yF) });
    }
}
class q extends Y {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: i, guildId: s } = this.props,
            a = null == s ? w.A.getNickname(e.id) : null;
        return (0, r.jsxs)(k.Mr, {
            children: [
                (0, r.jsx)(k.Ch, {
                    children: (0, r.jsx)(_.eu, {
                        size: f._3.SIZE_24,
                        src: e.getAvatarURL(s, 24),
                        "aria-hidden": !0,
                        status: n,
                    }),
                }),
                (0, r.jsx)(k.oC, { children: (0, r.jsx)(k.dB, { children: t ?? a ?? x.Ay.getName(e) }) }),
                (0, r.jsxs)(k.Aq, {
                    children: [
                        x.Ay.getUserTag(e, { mode: "username", identifiable: i ? "never" : "always" }),
                        i || e.hasUniqueUsername()
                            ? null
                            : (0, r.jsxs)("span", { className: V.T, children: ["#", e.discriminator] }),
                    ],
                }),
            ],
        });
    }
}
class X extends Y {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: i, colorStrings: s } = e,
            o = "dot" === g.A.roleStyle,
            l = "username" === g.A.roleStyle && (null != i || null != s),
            u = (0, C.hH)(n, e, s),
            c = null != u && l,
            { gradientStyle: d, gradientClassname: _ } = (0, p.Wq)({
                colorStrings: s,
                useReducedMotion: g.A.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            f = l ? { ...(c ? d : { color: null != i ? i : void 0 }) } : void 0;
        return (0, r.jsxs)(k.Mr, {
            children: [
                (0, r.jsx)(k.oC, {
                    children: (0, r.jsxs)(k.dB, {
                        children: [
                            o && (0, r.jsx)(h.W, { className: V.m4, color: i, colors: u, tooltip: !1 }),
                            (0, r.jsxs)("span", {
                                className: a()({ [_]: c }),
                                style: f,
                                "data-text": c ? `@${e.name}` : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, r.jsx)(k.Aq, { children: F.intl.string(F.t["/91tbr"]) }),
            ],
        });
    }
}
class Q extends Y {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, r.jsxs)(k.Mr, {
            children: [
                (0, r.jsx)(k.oC, {
                    children: (0, r.jsx)(k.dB, { children: (0, r.jsx)(v.A, { node: e, showTooltip: !1 }) }),
                }),
                null != t ? (0, r.jsx)(k.Aq, { children: t }) : null,
            ],
        });
    }
}
class Z extends Y {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === U.rbe.GUILD_CATEGORY ? E.s : (0, y.gU)(e);
        return (0, r.jsxs)(k.Mr, {
            children: [
                null != n && (0, r.jsx)(k.Ch, { children: (0, r.jsx)(n, { className: V.Kk }) }),
                (0, r.jsx)(k.oC, { children: (0, r.jsx)(k.dB, { children: (0, S.m1)(e, M.default, w.A) }) }),
                null != t ? (0, r.jsx)(k.Aq, { children: t.name }) : null,
            ],
        });
    }
}
class J extends Y {
    renderContent() {
        let { command: e } = this.props;
        return (0, r.jsxs)(k.Mr, {
            children: [
                (0, r.jsx)(k.Ch, {
                    children: (0, r.jsx)(m.F, { size: "xs", color: "currentColor", className: V.Kk, colorClass: V.t4 }),
                }),
                (0, r.jsx)(k.oC, { children: (0, r.jsx)(k.dB, { children: e.displayName }) }),
                (0, r.jsx)(k.Aq, { children: e.displayDescription }),
            ],
        });
    }
}
class ee extends Y {
    isSelectable() {
        return this.props.command.inputType !== A.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: i, selected: s } = this.props,
            { hovered: a } = this.state,
            o = this.isSelectable();
        return e.inputType === A.y$.PLACEHOLDER
            ? (0, r.jsx)(T.A, {})
            : (0, r.jsx)(I.A, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: a || (o && s),
                  section: i,
                  isSelectable: o,
              });
    }
}
class et extends Y {
    layoutClass = a()(V.rT, V.Mf);
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            i = D.Sf.getSetting(),
            s =
                null != e.id || "" !== e.url
                    ? (0, r.jsx)("img", {
                          alt: "",
                          className: V.mp,
                          src:
                              null != e.id
                                  ? P.Ay.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && i,
                                        size: G.EMOJI_URL_BASE_SIZE,
                                    })
                                  : e.url,
                      })
                    : (0, r.jsx)("span", { className: V.nT, children: e.surrogates }),
            a = null != n ? (0, r.jsx)(k.Aq, { children: n.name }) : null;
        return (0, r.jsxs)(k.Mr, {
            children: [
                (0, r.jsx)(k.Ch, { children: s }),
                (0, r.jsx)(k.oC, { children: (0, r.jsxs)(k.dB, { children: [t, e.name, t] }) }),
                a,
            ],
        });
    }
}
class en extends Y {
    layoutClass = a()(V.rT, V.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: i, sticker: s } = this.props,
            { hovered: a } = this.state;
        return (
            (0, b.FD)(s)
                ? (e = R.A.getStickerPack(s.pack_id)?.name)
                : (0, b.Xw)(s) && (e = L.A.getGuild(s.guild_id)?.name),
            (0, r.jsxs)(k.Mr, {
                children: [
                    (0, r.jsx)(k.Ch, { children: n(s, a || !0 === i) }),
                    (0, r.jsxs)(k.oC, {
                        children: [
                            (0, r.jsx)(k.dB, { children: s.name }),
                            null != t && (0, r.jsx)(k.Nd, { children: F.intl.format(F.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, r.jsx)(k.Aq, { children: e }),
                ],
            })
        );
    }
}
class er extends Y {
    layoutClass = V.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, r.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class ei extends Y {
    renderContent() {
        return (0, r.jsx)(N.A, { emojis: this.props.emojis });
    }
}
class es extends Y {
    renderContent() {
        return (0, r.jsx)(O.A, { ...this.props });
    }
}
class ea extends Y {
    renderContent() {
        let { game: e } = this.props,
            t = (0, r.jsx)("img", {
                alt: "",
                className: V.Kk,
                src: P.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 32 }),
            });
        return (0, r.jsxs)(k.Mr, {
            children: [
                (0, r.jsx)(k.Ch, { children: t }),
                (0, r.jsx)(k.oC, { children: (0, r.jsx)(k.dB, { children: e.name }) }),
            ],
        });
    }
}
class eo extends i.PureComponent {
    static Generic = W;
    static Loading = K;
    static Title = $;
    static Divider = z;
    static User = q;
    static Role = X;
    static Channel = Z;
    static Command = J;
    static NewCommand = ee;
    static Emoji = et;
    static GIFIntegration = er;
    static Sticker = en;
    static EmojiUpsell = ei;
    static Soundmoji = es;
    static Game = ea;
    static Timestamp = Q;
    render() {
        let { children: e, className: t, innerClassName: n, id: s, ...o } = this.props;
        return i.Children.count(e) > 0
            ? (0, r.jsx)(j.Provider, {
                  value: { id: s ?? "" },
                  children: (0, r.jsx)("div", {
                      className: a()(V.nx, t),
                      children: (0, r.jsx)("div", { className: a()(V.Fv, n), ...o, children: e }),
                  }),
              })
            : null;
    }
}
let el = eo;
