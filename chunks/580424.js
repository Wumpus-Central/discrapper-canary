"use strict";
n.d(t, { Ay: () => er, Sz: () => k, aI: () => M });
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
    h = n(41329),
    p = n(746388),
    g = n(47167),
    E = n(713654),
    A = n(921661),
    I = n(678473),
    T = n(967144),
    y = n(733509),
    S = n(679382),
    v = n(378058),
    C = n(253932),
    b = n(71393),
    N = n(994500),
    R = n(287809),
    O = n(486020),
    D = n(427262),
    L = n(557158),
    w = n(652215);
n(307731);
var x = n(985018),
    P = n(395410);
function M(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function k(e) {
    return `autocomplete-${e}-title`;
}
let U = i.createContext(null);
class G extends i.PureComponent {
    selectable = !0;
    layoutClass = P.rT;
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
            className: s()(P.vk, n, t),
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
            "aria-selected": o && a,
            children: (0, r.jsx)("div", { className: P.E3, children: this.renderContent() }),
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
class F extends G {
    renderContent() {
        let { text: e, description: t, badge: n } = this.props;
        return (0, r.jsxs)(L.Mr, {
            children: [
                (0, r.jsx)(L.oC, {
                    children: (0, r.jsxs)(L.dB, {
                        children: [e, " ", null != n && (0, r.jsx)(c.E, { type: n, variant: "brand" })],
                    }),
                }),
                null != t ? (0, r.jsx)(L.Aq, { children: t }) : null,
            ],
        });
    }
}
function V(e) {
    let t = i.useMemo(() => l().random(60, 120), []);
    return (0, r.jsx)("div", {
        className: P.E3,
        "aria-busy": !0,
        children: (0, r.jsx)(L.Mr, {
            children: (0, r.jsx)(L.oC, {
                children: (0, r.jsx)(L.dB, { children: (0, r.jsx)("div", { className: P.M, style: { width: t } }) }),
            }),
        }),
    });
}
function B(e) {
    let { title: t, className: n, children: a } = e,
        o = i.useContext(U);
    return (0, r.jsx)("div", {
        className: P.E3,
        children: (0, r.jsxs)(d.Heading, {
            id: k(o.id),
            className: s()(P.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, a],
        }),
    });
}
class j extends G {
    layoutClass = P.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, r.jsx)("div", { className: s()(e, P.yF) });
    }
}
class H extends G {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: i, guildId: a } = this.props,
            s = null == a ? N.A.getNickname(e.id) : null;
        return (0, r.jsxs)(L.Mr, {
            children: [
                (0, r.jsx)(L.Ch, {
                    children: (0, r.jsx)(d.euF, {
                        size: d._3J.SIZE_24,
                        src: e.getAvatarURL(a, 24),
                        "aria-hidden": !0,
                        status: n,
                    }),
                }),
                (0, r.jsx)(L.oC, { children: (0, r.jsx)(L.dB, { children: t ?? s ?? D.Ay.getName(e) }) }),
                (0, r.jsxs)(L.Aq, {
                    children: [
                        D.Ay.getUserTag(e, { mode: "username", identifiable: i ? "never" : "always" }),
                        i || e.hasUniqueUsername()
                            ? null
                            : (0, r.jsxs)("span", { className: P.T, children: ["#", e.discriminator] }),
                    ],
                }),
            ],
        });
    }
}
class Y extends G {
    layoutClass = P.xF;
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
            c = null == o ? N.A.getNickname(e.id) : null,
            _ = t ?? c ?? D.Ay.getName(e);
        return (0, r.jsxs)(L.Mr, {
            className: s()({ [P.DH]: "vertical-suggestion" === u }),
            children: [
                (0, r.jsx)(L.Ch, {
                    children: (0, r.jsx)(d.euF, {
                        size: d._3J.SIZE_32,
                        src: e.getAvatarURL(o, 32),
                        "aria-hidden": !0,
                        status: i,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: P.H5,
                    "aria-label": x.intl.formatToPlainString(x.t["9v/R+j"], { name: _ }),
                    children: [
                        (0, r.jsx)(L.oC, {
                            children: (0, r.jsx)(d.Text, {
                                className: P.hf,
                                color: "interactive-text-active",
                                variant: "text-sm/medium",
                                children: _,
                            }),
                        }),
                        (0, r.jsx)(L.Aq, {
                            children:
                                null == n || n === _.toLocaleLowerCase() || n === e.username.toLocaleLowerCase()
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              D.Ay.getUserTag(e, {
                                                  mode: "username",
                                                  identifiable: a ? "never" : "always",
                                              }),
                                              a || e.hasUniqueUsername()
                                                  ? null
                                                  : (0, r.jsxs)("span", {
                                                        className: P.T,
                                                        children: ["#", e.discriminator],
                                                    }),
                                          ],
                                      })
                                    : n,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: P.ti,
                    children: l ? (0, r.jsx)(d.e7I, { shortcut: "tab", dim: !0 }) : null,
                }),
            ],
        });
    }
}
class W extends G {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: i, colorStrings: a } = e,
            o = "dot" === _.A.roleStyle,
            l = "username" === _.A.roleStyle && (null != i || null != a),
            u = (0, T.hH)(n, e, a),
            c = null != u && l,
            { gradientStyle: f, gradientClassname: h } = (0, d.WqX)({
                colorStrings: a,
                useReducedMotion: _.A.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            p = l ? { ...(c ? f : { color: null != i ? i : void 0 }) } : void 0;
        return (0, r.jsxs)(L.Mr, {
            children: [
                (0, r.jsx)(L.oC, {
                    children: (0, r.jsxs)(L.dB, {
                        children: [
                            o && (0, r.jsx)(d.WYI, { className: P.m4, color: i, colors: u, tooltip: !1 }),
                            (0, r.jsxs)("span", {
                                className: s()({ [h]: c }),
                                style: p,
                                "data-text": c ? `@${e.name}` : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, r.jsx)(L.Aq, { children: x.intl.string(x.t["/91tbr"]) }),
            ],
        });
    }
}
class K extends G {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, r.jsxs)(L.Mr, {
            children: [
                (0, r.jsx)(L.oC, {
                    children: (0, r.jsx)(L.dB, { children: (0, r.jsx)(I.A, { node: e, showTooltip: !1 }) }),
                }),
                null != t ? (0, r.jsx)(L.Aq, { children: t }) : null,
            ],
        });
    }
}
class $ extends G {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === w.rbe.GUILD_CATEGORY ? d.sjq : (0, E.gU)(e);
        return (0, r.jsxs)(L.Mr, {
            children: [
                null != n && (0, r.jsx)(L.Ch, { children: (0, r.jsx)(n, { className: P.Kk }) }),
                (0, r.jsx)(L.oC, { children: (0, r.jsx)(L.dB, { children: (0, g.m1)(e, R.default, N.A) }) }),
                null != t ? (0, r.jsx)(L.Aq, { children: t.name }) : null,
            ],
        });
    }
}
class z extends G {
    renderContent() {
        let { command: e } = this.props;
        return (0, r.jsxs)(L.Mr, {
            children: [
                (0, r.jsx)(L.Ch, {
                    children: (0, r.jsx)(d.Fb4, {
                        size: "xs",
                        color: "currentColor",
                        className: P.Kk,
                        colorClass: P.t4,
                    }),
                }),
                (0, r.jsx)(L.oC, { children: (0, r.jsx)(L.dB, { children: e.displayName }) }),
                (0, r.jsx)(L.Aq, { children: e.displayDescription }),
            ],
        });
    }
}
class q extends G {
    isSelectable() {
        return this.props.command.inputType !== f.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: i, selected: a } = this.props,
            { hovered: s } = this.state,
            o = this.isSelectable();
        return e.inputType === f.y$.PLACEHOLDER
            ? (0, r.jsx)(p.A, {})
            : (0, r.jsx)(h.A, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: s || (o && a),
                  section: i,
                  isSelectable: o,
              });
    }
}
class X extends G {
    layoutClass = s()(P.rT, P.Mf);
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            i = C.Sf.getSetting(),
            a =
                null != e.id || "" !== e.url
                    ? (0, r.jsx)("img", {
                          alt: "",
                          className: P.mp,
                          src:
                              null != e.id
                                  ? O.Ay.getEmojiURL({ id: e.id, animated: e.animated && i, size: 48 })
                                  : e.url,
                      })
                    : (0, r.jsx)("span", { className: P.nT, children: e.surrogates }),
            s = null != n ? (0, r.jsx)(L.Aq, { children: n.name }) : null;
        return (0, r.jsxs)(L.Mr, {
            children: [
                (0, r.jsx)(L.Ch, { children: a }),
                (0, r.jsx)(L.oC, { children: (0, r.jsxs)(L.dB, { children: [t, e.name, t] }) }),
                s,
            ],
        });
    }
}
class Z extends G {
    layoutClass = s()(P.rT, P.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: i, sticker: a } = this.props,
            { hovered: s } = this.state;
        return (
            (0, v.FD)(a)
                ? (e = S.A.getStickerPack(a.pack_id)?.name)
                : (0, v.Xw)(a) && (e = b.A.getGuild(a.guild_id)?.name),
            (0, r.jsxs)(L.Mr, {
                children: [
                    (0, r.jsx)(L.Ch, { children: n(a, s || !0 === i) }),
                    (0, r.jsxs)(L.oC, {
                        children: [
                            (0, r.jsx)(L.dB, { children: a.name }),
                            null != t && (0, r.jsx)(L.Nd, { children: x.intl.format(x.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, r.jsx)(L.Aq, { children: e }),
                ],
            })
        );
    }
}
class Q extends G {
    layoutClass = P.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, r.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class J extends G {
    renderContent() {
        return (0, r.jsx)(A.A, { emojis: this.props.emojis });
    }
}
class ee extends G {
    renderContent() {
        return (0, r.jsx)(y.A, { ...this.props });
    }
}
class et extends G {
    renderContent() {
        let { game: e } = this.props,
            t = (0, r.jsx)("img", {
                alt: "",
                className: P.Kk,
                src: O.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 32 }),
            });
        return (0, r.jsxs)(L.Mr, {
            children: [
                (0, r.jsx)(L.Ch, { children: t }),
                (0, r.jsx)(L.oC, { children: (0, r.jsx)(L.dB, { children: e.name }) }),
            ],
        });
    }
}
class en extends i.PureComponent {
    static Generic = F;
    static Loading = V;
    static Title = B;
    static Divider = j;
    static User = H;
    static UserSuggestion = Y;
    static Role = W;
    static Channel = $;
    static Command = z;
    static NewCommand = q;
    static Emoji = X;
    static GIFIntegration = Q;
    static Sticker = Z;
    static EmojiUpsell = J;
    static Soundmoji = ee;
    static Game = et;
    static Timestamp = K;
    render() {
        let { children: e, className: t, innerClassName: n, id: a, ...o } = this.props;
        return i.Children.count(e) > 0
            ? (0, r.jsx)(U.Provider, {
                  value: { id: a ?? "" },
                  children: (0, r.jsx)("div", {
                      className: s()(P.nx, t),
                      children: (0, r.jsx)("div", { className: s()(P.Fv, n), ...o, children: e }),
                  }),
              })
            : null;
    }
}
let er = en;
