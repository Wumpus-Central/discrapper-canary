n.d(t, {
    DJ: () => Z,
    ZP: () => es,
    rp: () => F,
}),
    n(415506),
    n(953529),
    n(388685);
var r,
    i = n(255367),
    o = n(73800),
    a = n(120356),
    s = n.n(a),
    l = n(392711),
    c = n.n(l),
    u = n(91192),
    d = n(446673),
    f = n(481060),
    _ = n(607070),
    p = n(895924),
    h = n(237375),
    m = n(342687),
    g = n(933557),
    E = n(471445),
    b = n(511618),
    y = n(884902),
    O = n(887120),
    v = n(926491),
    I = n(378233),
    T = n(695346),
    S = n(430824),
    A = n(699516),
    N = n(594174),
    C = n(768581),
    R = n(51144),
    P = n(965386),
    w = n(981631),
    D = n(185923),
    L = n(388032),
    x = n(512746);
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
function j(e) {
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
function k(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = B(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function Z(e) {
    return null != e ? "autocomplete-".concat(e) : null;
}
function F(e) {
    return "autocomplete-".concat(e, "-title");
}
let V = o.createContext(null);
class H extends o.PureComponent {
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
                props: { className: r, index: o, selected: a },
            } = this,
            l = this.isSelectable();
        return (0, i.jsx)(
            f.P3F,
            U(j({}, e), {
                className: s()(x.clickable, r, n),
                id: null != (t = Z(o)) ? t : void 0,
                onClick: l ? this.handleClick : void 0,
                onMouseMove: l
                    ? () => {
                          this.setState({ hovered: !0 }), this.handleMouseEnter();
                      }
                    : void 0,
                onMouseLeave: l ? () => this.setState({ hovered: !1 }) : void 0,
                role: "option",
                "aria-disabled": !l,
                "aria-selected": l && a,
                children: (0, i.jsx)("div", {
                    className: x.base,
                    children: this.renderContent(),
                }),
            }),
        );
    }
    render() {
        let { index: e } = this.props;
        return this.isSelectable()
            ? (0, i.jsx)(u.mh, {
                  id: "".concat(e),
                  children: (e) => this.renderClickable(e),
              })
            : this.renderClickable();
    }
    constructor(e) {
        super(e),
            M(this, "selectable", !0),
            M(this, "layoutClass", x.autocompleteRowVertical),
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
class Y extends H {
    renderContent() {
        let { text: e, description: t, badge: n } = this.props;
        return (0, i.jsxs)(P.RX, {
            children: [
                (0, i.jsx)(P.z5, {
                    children: (0, i.jsxs)(P.BR, {
                        children: [e, " ", null != n && (0, i.jsx)(d.C, { badge: n })],
                    }),
                }),
                null != t ? (0, i.jsx)(P.dY, { children: t }) : null,
            ],
        });
    }
}
function W(e) {
    let t = o.useMemo(() => c().random(60, 120), []);
    return (0, i.jsx)("div", {
        className: x.base,
        "aria-busy": !0,
        children: (0, i.jsx)(P.RX, {
            children: (0, i.jsx)(P.z5, {
                children: (0, i.jsx)(P.BR, {
                    children: (0, i.jsx)("div", {
                        className: x.autocompletePlaceholder,
                        style: { width: t },
                    }),
                }),
            }),
        }),
    });
}
function K(e) {
    let { title: t, className: n, children: r } = e,
        a = o.useContext(V);
    return (0, i.jsx)("div", {
        className: x.base,
        children: (0, i.jsxs)(f.X6q, {
            id: F(a.id),
            className: s()(x.contentTitle, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, r],
        }),
    });
}
class z extends H {
    renderContent() {
        let { className: e } = this.props;
        return (0, i.jsx)("div", { className: s()(e, x.divider) });
    }
    constructor(...e) {
        super(...e), M(this, "layoutClass", x.dividerContainer), M(this, "selectable", !1);
    }
}
class q extends H {
    renderContent() {
        var e;
        let { user: t, nick: n, status: r, hidePersonalInformation: o, guildId: a } = this.props,
            s = null == a ? A.Z.getNickname(t.id) : null;
        return (0, i.jsxs)(P.RX, {
            children: [
                (0, i.jsx)(P.Tw, {
                    children: (0, i.jsx)(f.qEK, {
                        size: f.EFr.SIZE_24,
                        src: t.getAvatarURL(a, 24),
                        "aria-hidden": !0,
                        status: r,
                    }),
                }),
                (0, i.jsx)(P.z5, {
                    children: (0, i.jsx)(P.BR, { children: null != (e = null != n ? n : s) ? e : R.ZP.getName(t) }),
                }),
                (0, i.jsxs)(P.dY, {
                    children: [
                        R.ZP.getUserTag(t, {
                            mode: "username",
                            identifiable: o ? "never" : "always",
                        }),
                        o || t.hasUniqueUsername()
                            ? null
                            : (0, i.jsxs)("span", {
                                  className: x.descriptionDiscriminator,
                                  children: ["#", t.discriminator],
                              }),
                    ],
                }),
            ],
        });
    }
}
class X extends H {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: r, colorStrings: o } = e,
            a = "dot" === _.Z.roleStyle,
            l = "username" === _.Z.roleStyle && (null != r || null != o),
            c = (0, y.AQ)(n, e, o),
            u = null != c && l,
            { gradientStyle: d, gradientClassname: p } = (0, f.JUn)({
                colorStrings: o,
                useReducedMotion: _.Z.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            h = l ? j({}, u ? d : { color: null != r ? r : void 0 }) : void 0;
        return (0, i.jsxs)(P.RX, {
            children: [
                (0, i.jsx)(P.z5, {
                    children: (0, i.jsxs)(P.BR, {
                        children: [
                            a &&
                                (0, i.jsx)(f.FhE, {
                                    className: x.roleDot,
                                    color: r,
                                    colors: c,
                                    tooltip: !1,
                                }),
                            (0, i.jsxs)("span", {
                                className: s()({ [p]: u }),
                                style: h,
                                "data-text": u ? "@".concat(e.name) : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, i.jsx)(P.dY, { children: L.intl.string(L.t["/91tbm"]) }),
            ],
        });
    }
}
class Q extends H {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === w.d4z.GUILD_CATEGORY ? f.ROc : (0, E.KS)(e);
        return (0, i.jsxs)(P.RX, {
            children: [
                null != n && (0, i.jsx)(P.Tw, { children: (0, i.jsx)(n, { className: x.icon }) }),
                (0, i.jsx)(P.z5, { children: (0, i.jsx)(P.BR, { children: (0, g.F6)(e, N.default, A.Z) }) }),
                null != t ? (0, i.jsx)(P.dY, { children: t.name }) : null,
            ],
        });
    }
}
class J extends H {
    renderContent() {
        let { command: e } = this.props;
        return (0, i.jsxs)(P.RX, {
            children: [
                (0, i.jsx)(P.Tw, {
                    children: (0, i.jsx)(f.XZC, {
                        size: "xs",
                        color: "currentColor",
                        className: x.icon,
                        colorClass: x.iconForeground,
                    }),
                }),
                (0, i.jsx)(P.z5, { children: (0, i.jsx)(P.BR, { children: e.displayName }) }),
                (0, i.jsx)(P.dY, { children: e.displayDescription }),
            ],
        });
    }
}
class $ extends H {
    isSelectable() {
        return this.props.command.inputType !== p.iw.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: r, selected: o } = this.props,
            { hovered: a } = this.state,
            s = this.isSelectable();
        return e.inputType === p.iw.PLACEHOLDER
            ? (0, i.jsx)(m.Z, {})
            : (0, i.jsx)(h.Z, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: a || (s && o),
                  section: r,
                  isSelectable: s,
              });
    }
}
class ee extends H {
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            r = T.Yk.getSetting(),
            o =
                null != e.id || "" !== e.url
                    ? (0, i.jsx)("img", {
                          alt: "",
                          className: x.emojiImage,
                          src:
                              null != e.id
                                  ? C.ZP.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && r,
                                        size: D.$U,
                                    })
                                  : e.url,
                      })
                    : (0, i.jsx)("span", {
                          className: x.emojiRaw,
                          children: e.surrogates,
                      }),
            a = null != n ? (0, i.jsx)(P.dY, { children: n.name }) : null;
        return (0, i.jsxs)(P.RX, {
            children: [
                (0, i.jsx)(P.Tw, { children: o }),
                (0, i.jsx)(P.z5, {
                    children: (0, i.jsxs)(P.BR, {
                        children: [t, e.name, t],
                    }),
                }),
                a,
            ],
        });
    }
    constructor(...e) {
        super(...e), M(this, "layoutClass", s()(x.autocompleteRowVertical, x.autocompleteRowVerticalSmall));
    }
}
class et extends H {
    renderContent() {
        var e, t;
        let n,
            { queryMatch: r, renderSticker: o, selected: a, sticker: s } = this.props,
            { hovered: l } = this.state;
        return (
            (0, I.jl)(s)
                ? (n = null == (e = v.Z.getStickerPack(s.pack_id)) ? void 0 : e.name)
                : (0, I.J8)(s) && (n = null == (t = S.Z.getGuild(s.guild_id)) ? void 0 : t.name),
            (0, i.jsxs)(P.RX, {
                children: [
                    (0, i.jsx)(P.Tw, { children: o(s, l || !0 === a) }),
                    (0, i.jsxs)(P.z5, {
                        children: [
                            (0, i.jsx)(P.BR, { children: s.name }),
                            null != r && (0, i.jsx)(P.wL, { children: L.intl.format(L.t.PAutaW, { queryMatch: r }) }),
                        ],
                    }),
                    null != n && (0, i.jsx)(P.dY, { children: n }),
                ],
            })
        );
    }
    constructor(...e) {
        super(...e), M(this, "layoutClass", s()(x.autocompleteRowVertical, x.autocompleteRowVerticalSmall));
    }
}
class en extends H {
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
        super(...e), M(this, "layoutClass", x.autocompleteRowHorizontal);
    }
}
class er extends H {
    renderContent() {
        return (0, i.jsx)(b.Z, { emojis: this.props.emojis });
    }
}
class ei extends H {
    renderContent() {
        return (0, i.jsx)(O.Z, j({}, this.props));
    }
}
class eo extends H {
    renderContent() {
        let { game: e } = this.props,
            t = (0, i.jsx)("img", {
                alt: "",
                className: x.icon,
                src: C.ZP.getApplicationIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 32,
                }),
            });
        return (0, i.jsxs)(P.RX, {
            children: [
                (0, i.jsx)(P.Tw, { children: t }),
                (0, i.jsx)(P.z5, { children: (0, i.jsx)(P.BR, { children: e.name }) }),
            ],
        });
    }
}
class ea extends (r = o.PureComponent) {
    render() {
        let e = this.props,
            { children: t, className: n, innerClassName: r, id: a } = e,
            l = G(e, ["children", "className", "innerClassName", "id"]);
        return o.Children.count(t) > 0
            ? (0, i.jsx)(V.Provider, {
                  value: { id: null != a ? a : "" },
                  children: (0, i.jsx)("div", {
                      className: s()(x.autocomplete, n),
                      children: (0, i.jsx)("div", U(j({ className: s()(x.autocompleteInner, r) }, l), { children: t })),
                  }),
              })
            : null;
    }
}
M(ea, "Generic", Y),
    M(ea, "Loading", W),
    M(ea, "Title", K),
    M(ea, "Divider", z),
    M(ea, "User", q),
    M(ea, "Role", X),
    M(ea, "Channel", Q),
    M(ea, "Command", J),
    M(ea, "NewCommand", $),
    M(ea, "Emoji", ee),
    M(ea, "GIFIntegration", en),
    M(ea, "Sticker", et),
    M(ea, "EmojiUpsell", er),
    M(ea, "Soundmoji", ei),
    M(ea, "Game", eo);
let es = ea;
