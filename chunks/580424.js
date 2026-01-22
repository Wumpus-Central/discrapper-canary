n.d(t, {
    Ay: () => eu,
    Sz: () => H,
    aI: () => B,
}),
    n(65821),
    n(228524),
    n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(735438),
    c = n.n(l),
    u = n(837381),
    d = n(508770),
    f = n(397927),
    p = n(775602),
    _ = n(392054),
    h = n(41329),
    m = n(746388),
    g = n(47167),
    E = n(713654),
    b = n(921661),
    y = n(678473),
    O = n(967144),
    A = n(733509),
    v = n(679382),
    S = n(378058),
    I = n(253932),
    T = n(71393),
    C = n(994500),
    N = n(287809),
    R = n(486020),
    w = n(427262),
    P = n(557158),
    D = n(652215),
    x = n(307731),
    L = n(985018),
    j = n(395410);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = F(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function B(e) {
    return null != e ? "autocomplete-".concat(e) : null;
}
function H(e) {
    return "autocomplete-".concat(e, "-title");
}
let Y = a.createContext(null);
class W extends a.PureComponent {
    isSelectable() {
        return this.selectable;
    }
    renderContent() {
        throw Error("AutocompleteRow: renderContent must be extended");
    }
    renderClickable(e) {
        var t;
        let {
                layoutClass: n,
                props: { className: r, index: a, selected: s },
            } = this,
            l = this.isSelectable();
        return (0, i.jsx)(
            f.DUT,
            G(k({}, e), {
                className: o()(j.vk, r, n),
                id: null != (t = B(a)) ? t : void 0,
                onClick: l ? this.handleClick : void 0,
                onMouseMove: l
                    ? () => {
                          this.setState({ hovered: !0 }), this.handleMouseEnter();
                      }
                    : void 0,
                onMouseLeave: l ? () => this.setState({ hovered: !1 }) : void 0,
                role: "option",
                "aria-disabled": !l,
                "aria-selected": l && s,
                children: (0, i.jsx)("div", {
                    className: j.E3,
                    children: this.renderContent(),
                }),
            }),
        );
    }
    render() {
        let { index: e } = this.props;
        return this.isSelectable()
            ? (0, i.jsx)(u.tG, {
                  id: "".concat(e),
                  children: (e) => this.renderClickable(e),
              })
            : this.renderClickable();
    }
    constructor(e) {
        super(e),
            M(this, "selectable", !0),
            M(this, "layoutClass", j.rT),
            M(this, "handleMouseEnter", () => {
                let { onHover: e, index: t, selected: n } = this.props;
                null == e || n || "number" != typeof t || e(t);
            }),
            M(this, "handleClick", (e) => {
                let { onClick: t, index: n } = this.props;
                null != t && "number" == typeof n && t(n, e);
            }),
            (this.state = { hovered: !1 });
    }
}
class K extends W {
    renderContent() {
        let { text: e, description: t, badge: n } = this.props;
        return (0, i.jsxs)(P.Mr, {
            children: [
                (0, i.jsx)(P.oC, {
                    children: (0, i.jsxs)(P.dB, {
                        children: [e, " ", null != n && (0, i.jsx)(d.E, { type: n })],
                    }),
                }),
                null != t ? (0, i.jsx)(P.Aq, { children: t }) : null,
            ],
        });
    }
}
function z(e) {
    let t = a.useMemo(() => c().random(60, 120), []);
    return (0, i.jsx)("div", {
        className: j.E3,
        "aria-busy": !0,
        children: (0, i.jsx)(P.Mr, {
            children: (0, i.jsx)(P.oC, {
                children: (0, i.jsx)(P.dB, {
                    children: (0, i.jsx)("div", {
                        className: j.M,
                        style: { width: t },
                    }),
                }),
            }),
        }),
    });
}
function q(e) {
    let { title: t, className: n, children: r } = e,
        s = a.useContext(Y);
    return (0, i.jsx)("div", {
        className: j.E3,
        children: (0, i.jsxs)(f.Heading, {
            id: H(s.id),
            className: o()(j.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, r],
        }),
    });
}
class X extends W {
    renderContent() {
        let { className: e } = this.props;
        return (0, i.jsx)("div", { className: o()(e, j.yF) });
    }
    constructor(...e) {
        super(...e), M(this, "layoutClass", j.fF), M(this, "selectable", !1);
    }
}
class Z extends W {
    renderContent() {
        var e;
        let { user: t, nick: n, status: r, hidePersonalInformation: a, guildId: s } = this.props,
            o = null == s ? C.A.getNickname(t.id) : null;
        return (0, i.jsxs)(P.Mr, {
            children: [
                (0, i.jsx)(P.Ch, {
                    children: (0, i.jsx)(f.euF, {
                        size: f._3J.SIZE_24,
                        src: t.getAvatarURL(s, 24),
                        "aria-hidden": !0,
                        status: r,
                    }),
                }),
                (0, i.jsx)(P.oC, {
                    children: (0, i.jsx)(P.dB, { children: null != (e = null != n ? n : o) ? e : w.Ay.getName(t) }),
                }),
                (0, i.jsxs)(P.Aq, {
                    children: [
                        w.Ay.getUserTag(t, {
                            mode: "username",
                            identifiable: a ? "never" : "always",
                        }),
                        a || t.hasUniqueUsername()
                            ? null
                            : (0, i.jsxs)("span", {
                                  className: j.T,
                                  children: ["#", t.discriminator],
                              }),
                    ],
                }),
            ],
        });
    }
}
class Q extends W {
    renderContent() {
        var e;
        let {
                user: t,
                nick: n,
                comparator: r,
                status: a,
                hidePersonalInformation: s,
                guildId: l,
                selected: c,
                layout: u = "horizontal",
            } = this.props,
            d = null == l ? C.A.getNickname(t.id) : null,
            p = null != (e = null != n ? n : d) ? e : w.Ay.getName(t);
        return (0, i.jsxs)(P.Mr, {
            className: o()({ [j.DH]: "vertical-suggestion" === u }),
            children: [
                (0, i.jsx)(P.Ch, {
                    children: (0, i.jsx)(f.euF, {
                        size: f._3J.SIZE_32,
                        src: t.getAvatarURL(l, 32),
                        "aria-hidden": !0,
                        status: a,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: j.H5,
                    "aria-label": L.intl.formatToPlainString(L.t["9v/R+j"], { name: p }),
                    children: [
                        (0, i.jsx)(P.oC, {
                            children: (0, i.jsx)(f.Text, {
                                className: j.hf,
                                color: "interactive-text-active",
                                variant: "text-sm/medium",
                                children: p,
                            }),
                        }),
                        (0, i.jsx)(P.Aq, {
                            children:
                                null == r || r === p.toLocaleLowerCase() || r === t.username.toLocaleLowerCase()
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              w.Ay.getUserTag(t, {
                                                  mode: "username",
                                                  identifiable: s ? "never" : "always",
                                              }),
                                              s || t.hasUniqueUsername()
                                                  ? null
                                                  : (0, i.jsxs)("span", {
                                                        className: j.T,
                                                        children: ["#", t.discriminator],
                                                    }),
                                          ],
                                      })
                                    : r,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: j.ti,
                    children: c
                        ? (0, i.jsx)(f.e7I, {
                              shortcut: "tab",
                              dim: !0,
                          })
                        : null,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e), M(this, "layoutClass", j.xF);
    }
}
class $ extends W {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: r, colorStrings: a } = e,
            s = "dot" === p.A.roleStyle,
            l = "username" === p.A.roleStyle && (null != r || null != a),
            c = (0, O.hH)(n, e, a),
            u = null != c && l,
            { gradientStyle: d, gradientClassname: _ } = (0, f.WqX)({
                colorStrings: a,
                useReducedMotion: p.A.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            h = l ? k({}, u ? d : { color: null != r ? r : void 0 }) : void 0;
        return (0, i.jsxs)(P.Mr, {
            children: [
                (0, i.jsx)(P.oC, {
                    children: (0, i.jsxs)(P.dB, {
                        children: [
                            s &&
                                (0, i.jsx)(f.WYI, {
                                    className: j.m4,
                                    color: r,
                                    colors: c,
                                    tooltip: !1,
                                }),
                            (0, i.jsxs)("span", {
                                className: o()({ [_]: u }),
                                style: h,
                                "data-text": u ? "@".concat(e.name) : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, i.jsx)(P.Aq, { children: L.intl.string(L.t["/91tbr"]) }),
            ],
        });
    }
}
class J extends W {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, i.jsxs)(P.Mr, {
            children: [
                (0, i.jsx)(P.oC, {
                    children: (0, i.jsx)(P.dB, {
                        children: (0, i.jsx)(y.A, {
                            node: e,
                            showTooltip: !1,
                        }),
                    }),
                }),
                null != t ? (0, i.jsx)(P.Aq, { children: t }) : null,
            ],
        });
    }
}
class ee extends W {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === D.rbe.GUILD_CATEGORY ? f.sjq : (0, E.gU)(e);
        return (0, i.jsxs)(P.Mr, {
            children: [
                null != n && (0, i.jsx)(P.Ch, { children: (0, i.jsx)(n, { className: j.Kk }) }),
                (0, i.jsx)(P.oC, { children: (0, i.jsx)(P.dB, { children: (0, g.m1)(e, N.default, C.A) }) }),
                null != t ? (0, i.jsx)(P.Aq, { children: t.name }) : null,
            ],
        });
    }
}
class et extends W {
    renderContent() {
        let { command: e } = this.props;
        return (0, i.jsxs)(P.Mr, {
            children: [
                (0, i.jsx)(P.Ch, {
                    children: (0, i.jsx)(f.Fb4, {
                        size: "xs",
                        color: "currentColor",
                        className: j.Kk,
                        colorClass: j.t4,
                    }),
                }),
                (0, i.jsx)(P.oC, { children: (0, i.jsx)(P.dB, { children: e.displayName }) }),
                (0, i.jsx)(P.Aq, { children: e.displayDescription }),
            ],
        });
    }
}
class en extends W {
    isSelectable() {
        return this.props.command.inputType !== _.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: r, selected: a } = this.props,
            { hovered: s } = this.state,
            o = this.isSelectable();
        return e.inputType === _.y$.PLACEHOLDER
            ? (0, i.jsx)(m.A, {})
            : (0, i.jsx)(h.A, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: s || (o && a),
                  section: r,
                  isSelectable: o,
              });
    }
}
class er extends W {
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            r = I.Sf.getSetting(),
            a =
                null != e.id || "" !== e.url
                    ? (0, i.jsx)("img", {
                          alt: "",
                          className: j.mp,
                          src:
                              null != e.id
                                  ? R.Ay.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && r,
                                        size: x.L4,
                                    })
                                  : e.url,
                      })
                    : (0, i.jsx)("span", {
                          className: j.nT,
                          children: e.surrogates,
                      }),
            s = null != n ? (0, i.jsx)(P.Aq, { children: n.name }) : null;
        return (0, i.jsxs)(P.Mr, {
            children: [
                (0, i.jsx)(P.Ch, { children: a }),
                (0, i.jsx)(P.oC, {
                    children: (0, i.jsxs)(P.dB, {
                        children: [t, e.name, t],
                    }),
                }),
                s,
            ],
        });
    }
    constructor(...e) {
        super(...e), M(this, "layoutClass", o()(j.rT, j.Mf));
    }
}
class ei extends W {
    renderContent() {
        var e, t;
        let n,
            { queryMatch: r, renderSticker: a, selected: s, sticker: o } = this.props,
            { hovered: l } = this.state;
        return (
            (0, S.FD)(o)
                ? (n = null == (e = v.A.getStickerPack(o.pack_id)) ? void 0 : e.name)
                : (0, S.Xw)(o) && (n = null == (t = T.A.getGuild(o.guild_id)) ? void 0 : t.name),
            (0, i.jsxs)(P.Mr, {
                children: [
                    (0, i.jsx)(P.Ch, { children: a(o, l || !0 === s) }),
                    (0, i.jsxs)(P.oC, {
                        children: [
                            (0, i.jsx)(P.dB, { children: o.name }),
                            null != r && (0, i.jsx)(P.Nd, { children: L.intl.format(L.t.PAutaQ, { queryMatch: r }) }),
                        ],
                    }),
                    null != n && (0, i.jsx)(P.Aq, { children: n }),
                ],
            })
        );
    }
    constructor(...e) {
        super(...e), M(this, "layoutClass", o()(j.rT, j.Mf));
    }
}
class ea extends W {
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, i.jsx)("img", {
            alt: "",
            src: n,
            width: e,
            height: t,
        });
    }
    constructor(...e) {
        super(...e), M(this, "layoutClass", j.ju);
    }
}
class es extends W {
    renderContent() {
        return (0, i.jsx)(b.A, { emojis: this.props.emojis });
    }
}
class eo extends W {
    renderContent() {
        return (0, i.jsx)(A.A, k({}, this.props));
    }
}
class el extends W {
    renderContent() {
        let { game: e } = this.props,
            t = (0, i.jsx)("img", {
                alt: "",
                className: j.Kk,
                src: R.Ay.getApplicationIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 32,
                }),
            });
        return (0, i.jsxs)(P.Mr, {
            children: [
                (0, i.jsx)(P.Ch, { children: t }),
                (0, i.jsx)(P.oC, { children: (0, i.jsx)(P.dB, { children: e.name }) }),
            ],
        });
    }
}
class ec extends (r = a.PureComponent) {
    render() {
        let e = this.props,
            { children: t, className: n, innerClassName: r, id: s } = e,
            l = V(e, ["children", "className", "innerClassName", "id"]);
        return a.Children.count(t) > 0
            ? (0, i.jsx)(Y.Provider, {
                  value: { id: null != s ? s : "" },
                  children: (0, i.jsx)("div", {
                      className: o()(j.nx, n),
                      children: (0, i.jsx)("div", G(k({ className: o()(j.Fv, r) }, l), { children: t })),
                  }),
              })
            : null;
    }
}
M(ec, "Generic", K),
    M(ec, "Loading", z),
    M(ec, "Title", q),
    M(ec, "Divider", X),
    M(ec, "User", Z),
    M(ec, "UserSuggestion", Q),
    M(ec, "Role", $),
    M(ec, "Channel", ee),
    M(ec, "Command", et),
    M(ec, "NewCommand", en),
    M(ec, "Emoji", er),
    M(ec, "GIFIntegration", ea),
    M(ec, "Sticker", ei),
    M(ec, "EmojiUpsell", es),
    M(ec, "Soundmoji", eo),
    M(ec, "Game", el),
    M(ec, "Timestamp", J);
let eu = ec;
