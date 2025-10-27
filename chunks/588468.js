n.d(t, {
    DJ: () => Z,
    ZP: () => el,
    rp: () => F,
}),
    n(415506),
    n(953529),
    n(388685);
var r,
    i = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    c = n.n(l),
    u = n(91192),
    d = n(313666),
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
    C = n(594174),
    N = n(768581),
    R = n(51144),
    P = n(965386),
    D = n(981631),
    w = n(185923),
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
function j(e, t) {
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
            : j(Object(t)).forEach(function (n) {
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function Z(e) {
    return null != e ? "autocomplete-".concat(e) : null;
}
function F(e) {
    return "autocomplete-".concat(e, "-title");
}
let V = a.createContext(null);
class H extends a.PureComponent {
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
                props: { className: r, index: a, selected: o },
            } = this,
            l = this.isSelectable();
        return (0, i.jsx)(
            f.P3F,
            U(k({}, e), {
                className: s()(x.clickable, r, n),
                id: null != (t = Z(a)) ? t : void 0,
                onClick: l ? this.handleClick : void 0,
                onMouseMove: l
                    ? () => {
                          this.setState({ hovered: !0 }), this.handleMouseEnter();
                      }
                    : void 0,
                onMouseLeave: l ? () => this.setState({ hovered: !1 }) : void 0,
                role: "option",
                "aria-disabled": !l,
                "aria-selected": l && o,
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
                        children: [e, " ", null != n && (0, i.jsx)(d.C, { type: n })],
                    }),
                }),
                null != t ? (0, i.jsx)(P.dY, { children: t }) : null,
            ],
        });
    }
}
function W(e) {
    let t = a.useMemo(() => c().random(60, 120), []);
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
        o = a.useContext(V);
    return (0, i.jsx)("div", {
        className: x.base,
        children: (0, i.jsxs)(f.Heading, {
            id: F(o.id),
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
        let { user: t, nick: n, status: r, hidePersonalInformation: a, guildId: o } = this.props,
            s = null == o ? A.Z.getNickname(t.id) : null;
        return (0, i.jsxs)(P.RX, {
            children: [
                (0, i.jsx)(P.Tw, {
                    children: (0, i.jsx)(f.qEK, {
                        size: f.EFr.SIZE_24,
                        src: t.getAvatarURL(o, 24),
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
                            identifiable: a ? "never" : "always",
                        }),
                        a || t.hasUniqueUsername()
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
        var e;
        let {
                user: t,
                nick: n,
                comparator: r,
                status: a,
                hidePersonalInformation: o,
                guildId: l,
                selected: c,
                layout: u = "horizontal",
            } = this.props,
            d = null == l ? A.Z.getNickname(t.id) : null,
            _ = null != (e = null != n ? n : d) ? e : R.ZP.getName(t);
        return (0, i.jsxs)(P.RX, {
            className: s()({ [x.verticalLayout]: "vertical-suggestion" === u }),
            children: [
                (0, i.jsx)(P.Tw, {
                    children: (0, i.jsx)(f.qEK, {
                        size: f.EFr.SIZE_32,
                        src: t.getAvatarURL(l, 32),
                        "aria-hidden": !0,
                        status: a,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: x.autocompleteContentWrapper,
                    "aria-label": L.intl.formatToPlainString(L.t["9v/R+j"], { name: _ }),
                    children: [
                        (0, i.jsx)(P.z5, {
                            children: (0, i.jsx)(f.Text, {
                                className: x.autocompleteRowHeading,
                                color: "interactive-active",
                                variant: "text-sm/medium",
                                children: _,
                            }),
                        }),
                        (0, i.jsx)(P.dY, {
                            children:
                                null == r || r === _.toLocaleLowerCase() || r === t.username.toLocaleLowerCase()
                                    ? (0, i.jsxs)(i.Fragment, {
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
                                      })
                                    : r,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: x.keyComboContainer,
                    children: c
                        ? (0, i.jsx)(f.M2$, {
                              shortcut: "tab",
                              dim: !0,
                          })
                        : null,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e), M(this, "layoutClass", x.autoCompleteRowSuggestion);
    }
}
class Q extends H {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: r, colorStrings: a } = e,
            o = "dot" === _.Z.roleStyle,
            l = "username" === _.Z.roleStyle && (null != r || null != a),
            c = (0, y.AQ)(n, e, a),
            u = null != c && l,
            { gradientStyle: d, gradientClassname: p } = (0, f.JUn)({
                colorStrings: a,
                useReducedMotion: _.Z.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            h = l ? k({}, u ? d : { color: null != r ? r : void 0 }) : void 0;
        return (0, i.jsxs)(P.RX, {
            children: [
                (0, i.jsx)(P.z5, {
                    children: (0, i.jsxs)(P.BR, {
                        children: [
                            o &&
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
                t ? null : (0, i.jsx)(P.dY, { children: L.intl.string(L.t["/91tbr"]) }),
            ],
        });
    }
}
class J extends H {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === D.d4z.GUILD_CATEGORY ? f.ROc : (0, E.KS)(e);
        return (0, i.jsxs)(P.RX, {
            children: [
                null != n && (0, i.jsx)(P.Tw, { children: (0, i.jsx)(n, { className: x.icon }) }),
                (0, i.jsx)(P.z5, { children: (0, i.jsx)(P.BR, { children: (0, g.F6)(e, C.default, A.Z) }) }),
                null != t ? (0, i.jsx)(P.dY, { children: t.name }) : null,
            ],
        });
    }
}
class $ extends H {
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
class ee extends H {
    isSelectable() {
        return this.props.command.inputType !== p.iw.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: r, selected: a } = this.props,
            { hovered: o } = this.state,
            s = this.isSelectable();
        return e.inputType === p.iw.PLACEHOLDER
            ? (0, i.jsx)(m.Z, {})
            : (0, i.jsx)(h.Z, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: o || (s && a),
                  section: r,
                  isSelectable: s,
              });
    }
}
class et extends H {
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            r = T.Yk.getSetting(),
            a =
                null != e.id || "" !== e.url
                    ? (0, i.jsx)("img", {
                          alt: "",
                          className: x.emojiImage,
                          src:
                              null != e.id
                                  ? N.ZP.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && r,
                                        size: w.$U,
                                    })
                                  : e.url,
                      })
                    : (0, i.jsx)("span", {
                          className: x.emojiRaw,
                          children: e.surrogates,
                      }),
            o = null != n ? (0, i.jsx)(P.dY, { children: n.name }) : null;
        return (0, i.jsxs)(P.RX, {
            children: [
                (0, i.jsx)(P.Tw, { children: a }),
                (0, i.jsx)(P.z5, {
                    children: (0, i.jsxs)(P.BR, {
                        children: [t, e.name, t],
                    }),
                }),
                o,
            ],
        });
    }
    constructor(...e) {
        super(...e), M(this, "layoutClass", s()(x.autocompleteRowVertical, x.autocompleteRowVerticalSmall));
    }
}
class en extends H {
    renderContent() {
        var e, t;
        let n,
            { queryMatch: r, renderSticker: a, selected: o, sticker: s } = this.props,
            { hovered: l } = this.state;
        return (
            (0, I.jl)(s)
                ? (n = null == (e = v.Z.getStickerPack(s.pack_id)) ? void 0 : e.name)
                : (0, I.J8)(s) && (n = null == (t = S.Z.getGuild(s.guild_id)) ? void 0 : t.name),
            (0, i.jsxs)(P.RX, {
                children: [
                    (0, i.jsx)(P.Tw, { children: a(s, l || !0 === o) }),
                    (0, i.jsxs)(P.z5, {
                        children: [
                            (0, i.jsx)(P.BR, { children: s.name }),
                            null != r && (0, i.jsx)(P.wL, { children: L.intl.format(L.t.PAutaQ, { queryMatch: r }) }),
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
class er extends H {
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
class ei extends H {
    renderContent() {
        return (0, i.jsx)(b.Z, { emojis: this.props.emojis });
    }
}
class ea extends H {
    renderContent() {
        return (0, i.jsx)(O.Z, k({}, this.props));
    }
}
class eo extends H {
    renderContent() {
        let { game: e } = this.props,
            t = (0, i.jsx)("img", {
                alt: "",
                className: x.icon,
                src: N.ZP.getApplicationIconURL({
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
class es extends (r = a.PureComponent) {
    render() {
        let e = this.props,
            { children: t, className: n, innerClassName: r, id: o } = e,
            l = G(e, ["children", "className", "innerClassName", "id"]);
        return a.Children.count(t) > 0
            ? (0, i.jsx)(V.Provider, {
                  value: { id: null != o ? o : "" },
                  children: (0, i.jsx)("div", {
                      className: s()(x.autocomplete, n),
                      children: (0, i.jsx)("div", U(k({ className: s()(x.autocompleteInner, r) }, l), { children: t })),
                  }),
              })
            : null;
    }
}
M(es, "Generic", Y),
    M(es, "Loading", W),
    M(es, "Title", K),
    M(es, "Divider", z),
    M(es, "User", q),
    M(es, "UserSuggestion", X),
    M(es, "Role", Q),
    M(es, "Channel", J),
    M(es, "Command", $),
    M(es, "NewCommand", ee),
    M(es, "Emoji", et),
    M(es, "GIFIntegration", er),
    M(es, "Sticker", en),
    M(es, "EmojiUpsell", ei),
    M(es, "Soundmoji", ea),
    M(es, "Game", eo);
let el = es;
