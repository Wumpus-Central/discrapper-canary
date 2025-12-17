n.d(t, {
    DJ: () => B,
    ZP: () => eu,
    rp: () => V,
}),
    n(415506),
    n(953529),
    n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    c = n.n(l),
    u = n(91192),
    d = n(313666),
    f = n(481060),
    p = n(607070),
    _ = n(895924),
    m = n(237375),
    h = n(342687),
    g = n(933557),
    E = n(471445),
    b = n(203247),
    y = n(285063),
    O = n(884902),
    v = n(887120),
    S = n(926491),
    I = n(378233),
    T = n(695346),
    C = n(430824),
    A = n(699516),
    N = n(594174),
    P = n(768581),
    R = n(51144),
    w = n(965386),
    D = n(981631),
    x = n(185923),
    L = n(388032),
    j = n(962051);
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
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = F(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function B(e) {
    return null != e ? "autocomplete-".concat(e) : null;
}
function V(e) {
    return "autocomplete-".concat(e, "-title");
}
let H = a.createContext(null);
class Y extends a.PureComponent {
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
            G(k({}, e), {
                className: s()(j.clickable, r, n),
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
                "aria-selected": l && o,
                children: (0, i.jsx)("div", {
                    className: j.base,
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
            M(this, "layoutClass", j.autocompleteRowVertical),
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
class W extends Y {
    renderContent() {
        let { text: e, description: t, badge: n } = this.props;
        return (0, i.jsxs)(w.RX, {
            children: [
                (0, i.jsx)(w.z5, {
                    children: (0, i.jsxs)(w.BR, {
                        children: [e, " ", null != n && (0, i.jsx)(d.C, { type: n })],
                    }),
                }),
                null != t ? (0, i.jsx)(w.dY, { children: t }) : null,
            ],
        });
    }
}
function K(e) {
    let t = a.useMemo(() => c().random(60, 120), []);
    return (0, i.jsx)("div", {
        className: j.base,
        "aria-busy": !0,
        children: (0, i.jsx)(w.RX, {
            children: (0, i.jsx)(w.z5, {
                children: (0, i.jsx)(w.BR, {
                    children: (0, i.jsx)("div", {
                        className: j.autocompletePlaceholder,
                        style: { width: t },
                    }),
                }),
            }),
        }),
    });
}
function z(e) {
    let { title: t, className: n, children: r } = e,
        o = a.useContext(H);
    return (0, i.jsx)("div", {
        className: j.base,
        children: (0, i.jsxs)(f.Heading, {
            id: V(o.id),
            className: s()(j.contentTitle, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, r],
        }),
    });
}
class q extends Y {
    renderContent() {
        let { className: e } = this.props;
        return (0, i.jsx)("div", { className: s()(e, j.divider) });
    }
    constructor(...e) {
        super(...e), M(this, "layoutClass", j.dividerContainer), M(this, "selectable", !1);
    }
}
class Q extends Y {
    renderContent() {
        var e;
        let { user: t, nick: n, status: r, hidePersonalInformation: a, guildId: o } = this.props,
            s = null == o ? A.Z.getNickname(t.id) : null;
        return (0, i.jsxs)(w.RX, {
            children: [
                (0, i.jsx)(w.Tw, {
                    children: (0, i.jsx)(f.qEK, {
                        size: f.EFr.SIZE_24,
                        src: t.getAvatarURL(o, 24),
                        "aria-hidden": !0,
                        status: r,
                    }),
                }),
                (0, i.jsx)(w.z5, {
                    children: (0, i.jsx)(w.BR, { children: null != (e = null != n ? n : s) ? e : R.ZP.getName(t) }),
                }),
                (0, i.jsxs)(w.dY, {
                    children: [
                        R.ZP.getUserTag(t, {
                            mode: "username",
                            identifiable: a ? "never" : "always",
                        }),
                        a || t.hasUniqueUsername()
                            ? null
                            : (0, i.jsxs)("span", {
                                  className: j.descriptionDiscriminator,
                                  children: ["#", t.discriminator],
                              }),
                    ],
                }),
            ],
        });
    }
}
class X extends Y {
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
            p = null != (e = null != n ? n : d) ? e : R.ZP.getName(t);
        return (0, i.jsxs)(w.RX, {
            className: s()({ [j.verticalLayout]: "vertical-suggestion" === u }),
            children: [
                (0, i.jsx)(w.Tw, {
                    children: (0, i.jsx)(f.qEK, {
                        size: f.EFr.SIZE_32,
                        src: t.getAvatarURL(l, 32),
                        "aria-hidden": !0,
                        status: a,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: j.autocompleteContentWrapper,
                    "aria-label": L.intl.formatToPlainString(L.t["9v/R+j"], { name: p }),
                    children: [
                        (0, i.jsx)(w.z5, {
                            children: (0, i.jsx)(f.Text, {
                                className: j.autocompleteRowHeading,
                                color: "interactive-text-active",
                                variant: "text-sm/medium",
                                children: p,
                            }),
                        }),
                        (0, i.jsx)(w.dY, {
                            children:
                                null == r || r === p.toLocaleLowerCase() || r === t.username.toLocaleLowerCase()
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              R.ZP.getUserTag(t, {
                                                  mode: "username",
                                                  identifiable: o ? "never" : "always",
                                              }),
                                              o || t.hasUniqueUsername()
                                                  ? null
                                                  : (0, i.jsxs)("span", {
                                                        className: j.descriptionDiscriminator,
                                                        children: ["#", t.discriminator],
                                                    }),
                                          ],
                                      })
                                    : r,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: j.keyComboContainer,
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
        super(...e), M(this, "layoutClass", j.autoCompleteRowSuggestion);
    }
}
class J extends Y {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: r, colorStrings: a } = e,
            o = "dot" === p.Z.roleStyle,
            l = "username" === p.Z.roleStyle && (null != r || null != a),
            c = (0, O.AQ)(n, e, a),
            u = null != c && l,
            { gradientStyle: d, gradientClassname: _ } = (0, f.JUn)({
                colorStrings: a,
                useReducedMotion: p.Z.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            m = l ? k({}, u ? d : { color: null != r ? r : void 0 }) : void 0;
        return (0, i.jsxs)(w.RX, {
            children: [
                (0, i.jsx)(w.z5, {
                    children: (0, i.jsxs)(w.BR, {
                        children: [
                            o &&
                                (0, i.jsx)(f.FhE, {
                                    className: j.roleDot,
                                    color: r,
                                    colors: c,
                                    tooltip: !1,
                                }),
                            (0, i.jsxs)("span", {
                                className: s()({ [_]: u }),
                                style: m,
                                "data-text": u ? "@".concat(e.name) : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, i.jsx)(w.dY, { children: L.intl.string(L.t["/91tbr"]) }),
            ],
        });
    }
}
class $ extends Y {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, i.jsxs)(w.RX, {
            children: [
                (0, i.jsx)(w.z5, {
                    children: (0, i.jsx)(w.BR, {
                        children: (0, i.jsx)(y.Z, {
                            node: e,
                            showTooltip: !1,
                        }),
                    }),
                }),
                null != t ? (0, i.jsx)(w.dY, { children: t }) : null,
            ],
        });
    }
}
class ee extends Y {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === D.d4z.GUILD_CATEGORY ? f.ROc : (0, E.KS)(e);
        return (0, i.jsxs)(w.RX, {
            children: [
                null != n && (0, i.jsx)(w.Tw, { children: (0, i.jsx)(n, { className: j.icon }) }),
                (0, i.jsx)(w.z5, { children: (0, i.jsx)(w.BR, { children: (0, g.F6)(e, N.default, A.Z) }) }),
                null != t ? (0, i.jsx)(w.dY, { children: t.name }) : null,
            ],
        });
    }
}
class et extends Y {
    renderContent() {
        let { command: e } = this.props;
        return (0, i.jsxs)(w.RX, {
            children: [
                (0, i.jsx)(w.Tw, {
                    children: (0, i.jsx)(f.XZC, {
                        size: "xs",
                        color: "currentColor",
                        className: j.icon,
                        colorClass: j.iconForeground,
                    }),
                }),
                (0, i.jsx)(w.z5, { children: (0, i.jsx)(w.BR, { children: e.displayName }) }),
                (0, i.jsx)(w.dY, { children: e.displayDescription }),
            ],
        });
    }
}
class en extends Y {
    isSelectable() {
        return this.props.command.inputType !== _.iw.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: r, selected: a } = this.props,
            { hovered: o } = this.state,
            s = this.isSelectable();
        return e.inputType === _.iw.PLACEHOLDER
            ? (0, i.jsx)(h.Z, {})
            : (0, i.jsx)(m.Z, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: o || (s && a),
                  section: r,
                  isSelectable: s,
              });
    }
}
class er extends Y {
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            r = T.Yk.getSetting(),
            a =
                null != e.id || "" !== e.url
                    ? (0, i.jsx)("img", {
                          alt: "",
                          className: j.emojiImage,
                          src:
                              null != e.id
                                  ? P.ZP.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && r,
                                        size: x.$U,
                                    })
                                  : e.url,
                      })
                    : (0, i.jsx)("span", {
                          className: j.emojiRaw,
                          children: e.surrogates,
                      }),
            o = null != n ? (0, i.jsx)(w.dY, { children: n.name }) : null;
        return (0, i.jsxs)(w.RX, {
            children: [
                (0, i.jsx)(w.Tw, { children: a }),
                (0, i.jsx)(w.z5, {
                    children: (0, i.jsxs)(w.BR, {
                        children: [t, e.name, t],
                    }),
                }),
                o,
            ],
        });
    }
    constructor(...e) {
        super(...e), M(this, "layoutClass", s()(j.autocompleteRowVertical, j.autocompleteRowVerticalSmall));
    }
}
class ei extends Y {
    renderContent() {
        var e, t;
        let n,
            { queryMatch: r, renderSticker: a, selected: o, sticker: s } = this.props,
            { hovered: l } = this.state;
        return (
            (0, I.jl)(s)
                ? (n = null == (e = S.Z.getStickerPack(s.pack_id)) ? void 0 : e.name)
                : (0, I.J8)(s) && (n = null == (t = C.Z.getGuild(s.guild_id)) ? void 0 : t.name),
            (0, i.jsxs)(w.RX, {
                children: [
                    (0, i.jsx)(w.Tw, { children: a(s, l || !0 === o) }),
                    (0, i.jsxs)(w.z5, {
                        children: [
                            (0, i.jsx)(w.BR, { children: s.name }),
                            null != r && (0, i.jsx)(w.wL, { children: L.intl.format(L.t.PAutaQ, { queryMatch: r }) }),
                        ],
                    }),
                    null != n && (0, i.jsx)(w.dY, { children: n }),
                ],
            })
        );
    }
    constructor(...e) {
        super(...e), M(this, "layoutClass", s()(j.autocompleteRowVertical, j.autocompleteRowVerticalSmall));
    }
}
class ea extends Y {
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
        super(...e), M(this, "layoutClass", j.autocompleteRowHorizontal);
    }
}
class eo extends Y {
    renderContent() {
        return (0, i.jsx)(b.Z, { emojis: this.props.emojis });
    }
}
class es extends Y {
    renderContent() {
        return (0, i.jsx)(v.Z, k({}, this.props));
    }
}
class el extends Y {
    renderContent() {
        let { game: e } = this.props,
            t = (0, i.jsx)("img", {
                alt: "",
                className: j.icon,
                src: P.ZP.getApplicationIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 32,
                }),
            });
        return (0, i.jsxs)(w.RX, {
            children: [
                (0, i.jsx)(w.Tw, { children: t }),
                (0, i.jsx)(w.z5, { children: (0, i.jsx)(w.BR, { children: e.name }) }),
            ],
        });
    }
}
class ec extends (r = a.PureComponent) {
    render() {
        let e = this.props,
            { children: t, className: n, innerClassName: r, id: o } = e,
            l = Z(e, ["children", "className", "innerClassName", "id"]);
        return a.Children.count(t) > 0
            ? (0, i.jsx)(H.Provider, {
                  value: { id: null != o ? o : "" },
                  children: (0, i.jsx)("div", {
                      className: s()(j.autocomplete, n),
                      children: (0, i.jsx)("div", G(k({ className: s()(j.autocompleteInner, r) }, l), { children: t })),
                  }),
              })
            : null;
    }
}
M(ec, "Generic", W),
    M(ec, "Loading", K),
    M(ec, "Title", z),
    M(ec, "Divider", q),
    M(ec, "User", Q),
    M(ec, "UserSuggestion", X),
    M(ec, "Role", J),
    M(ec, "Channel", ee),
    M(ec, "Command", et),
    M(ec, "NewCommand", en),
    M(ec, "Emoji", er),
    M(ec, "GIFIntegration", ea),
    M(ec, "Sticker", ei),
    M(ec, "EmojiUpsell", eo),
    M(ec, "Soundmoji", es),
    M(ec, "Game", el),
    M(ec, "Timestamp", $);
let eu = ec;
