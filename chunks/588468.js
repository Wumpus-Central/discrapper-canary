n.d(t, {
    DJ: () => F,
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
    _ = n(607070),
    p = n(895924),
    h = n(237375),
    m = n(342687),
    g = n(933557),
    E = n(471445),
    b = n(203247),
    y = n(285063),
    O = n(884902),
    v = n(887120),
    I = n(926491),
    T = n(378233),
    S = n(695346),
    A = n(430824),
    C = n(699516),
    N = n(594174),
    R = n(768581),
    P = n(51144),
    D = n(965386),
    w = n(981631),
    L = n(185923),
    x = n(388032),
    M = n(512746);
function k(e, t, n) {
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
                k(e, t, n[t]);
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
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = Z(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function F(e) {
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
            G(j({}, e), {
                className: s()(M.clickable, r, n),
                id: null != (t = F(a)) ? t : void 0,
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
                    className: M.base,
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
            k(this, "selectable", !0),
            k(this, "layoutClass", M.autocompleteRowVertical),
            k(this, "handleMouseEnter", () => {
                let { onHover: e, index: t, selected: n } = this.props;
                null == e || n || "number" != typeof t || e(t);
            }),
            k(this, "handleClick", (e) => {
                let { onClick: t, index: n } = this.props;
                null != t && "number" == typeof n && t(n, e);
            }),
            (this.state = { hovered: !1 });
    }
}
class W extends Y {
    renderContent() {
        let { text: e, description: t, badge: n } = this.props;
        return (0, i.jsxs)(D.RX, {
            children: [
                (0, i.jsx)(D.z5, {
                    children: (0, i.jsxs)(D.BR, {
                        children: [e, " ", null != n && (0, i.jsx)(d.C, { type: n })],
                    }),
                }),
                null != t ? (0, i.jsx)(D.dY, { children: t }) : null,
            ],
        });
    }
}
function K(e) {
    let t = a.useMemo(() => c().random(60, 120), []);
    return (0, i.jsx)("div", {
        className: M.base,
        "aria-busy": !0,
        children: (0, i.jsx)(D.RX, {
            children: (0, i.jsx)(D.z5, {
                children: (0, i.jsx)(D.BR, {
                    children: (0, i.jsx)("div", {
                        className: M.autocompletePlaceholder,
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
        className: M.base,
        children: (0, i.jsxs)(f.Heading, {
            id: V(o.id),
            className: s()(M.contentTitle, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, r],
        }),
    });
}
class q extends Y {
    renderContent() {
        let { className: e } = this.props;
        return (0, i.jsx)("div", { className: s()(e, M.divider) });
    }
    constructor(...e) {
        super(...e), k(this, "layoutClass", M.dividerContainer), k(this, "selectable", !1);
    }
}
class X extends Y {
    renderContent() {
        var e;
        let { user: t, nick: n, status: r, hidePersonalInformation: a, guildId: o } = this.props,
            s = null == o ? C.Z.getNickname(t.id) : null;
        return (0, i.jsxs)(D.RX, {
            children: [
                (0, i.jsx)(D.Tw, {
                    children: (0, i.jsx)(f.qEK, {
                        size: f.EFr.SIZE_24,
                        src: t.getAvatarURL(o, 24),
                        "aria-hidden": !0,
                        status: r,
                    }),
                }),
                (0, i.jsx)(D.z5, {
                    children: (0, i.jsx)(D.BR, { children: null != (e = null != n ? n : s) ? e : P.ZP.getName(t) }),
                }),
                (0, i.jsxs)(D.dY, {
                    children: [
                        P.ZP.getUserTag(t, {
                            mode: "username",
                            identifiable: a ? "never" : "always",
                        }),
                        a || t.hasUniqueUsername()
                            ? null
                            : (0, i.jsxs)("span", {
                                  className: M.descriptionDiscriminator,
                                  children: ["#", t.discriminator],
                              }),
                    ],
                }),
            ],
        });
    }
}
class Q extends Y {
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
            d = null == l ? C.Z.getNickname(t.id) : null,
            _ = null != (e = null != n ? n : d) ? e : P.ZP.getName(t);
        return (0, i.jsxs)(D.RX, {
            className: s()({ [M.verticalLayout]: "vertical-suggestion" === u }),
            children: [
                (0, i.jsx)(D.Tw, {
                    children: (0, i.jsx)(f.qEK, {
                        size: f.EFr.SIZE_32,
                        src: t.getAvatarURL(l, 32),
                        "aria-hidden": !0,
                        status: a,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: M.autocompleteContentWrapper,
                    "aria-label": x.intl.formatToPlainString(x.t["9v/R+j"], { name: _ }),
                    children: [
                        (0, i.jsx)(D.z5, {
                            children: (0, i.jsx)(f.Text, {
                                className: M.autocompleteRowHeading,
                                color: "interactive-active",
                                variant: "text-sm/medium",
                                children: _,
                            }),
                        }),
                        (0, i.jsx)(D.dY, {
                            children:
                                null == r || r === _.toLocaleLowerCase() || r === t.username.toLocaleLowerCase()
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              P.ZP.getUserTag(t, {
                                                  mode: "username",
                                                  identifiable: o ? "never" : "always",
                                              }),
                                              o || t.hasUniqueUsername()
                                                  ? null
                                                  : (0, i.jsxs)("span", {
                                                        className: M.descriptionDiscriminator,
                                                        children: ["#", t.discriminator],
                                                    }),
                                          ],
                                      })
                                    : r,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: M.keyComboContainer,
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
        super(...e), k(this, "layoutClass", M.autoCompleteRowSuggestion);
    }
}
class J extends Y {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: r, colorStrings: a } = e,
            o = "dot" === _.Z.roleStyle,
            l = "username" === _.Z.roleStyle && (null != r || null != a),
            c = (0, O.AQ)(n, e, a),
            u = null != c && l,
            { gradientStyle: d, gradientClassname: p } = (0, f.JUn)({
                colorStrings: a,
                useReducedMotion: _.Z.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            h = l ? j({}, u ? d : { color: null != r ? r : void 0 }) : void 0;
        return (0, i.jsxs)(D.RX, {
            children: [
                (0, i.jsx)(D.z5, {
                    children: (0, i.jsxs)(D.BR, {
                        children: [
                            o &&
                                (0, i.jsx)(f.FhE, {
                                    className: M.roleDot,
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
                t ? null : (0, i.jsx)(D.dY, { children: x.intl.string(x.t["/91tbr"]) }),
            ],
        });
    }
}
class $ extends Y {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, i.jsxs)(D.RX, {
            children: [
                (0, i.jsx)(D.z5, {
                    children: (0, i.jsx)(D.BR, {
                        children: (0, i.jsx)(y.Z, {
                            node: e,
                            showTooltip: !1,
                        }),
                    }),
                }),
                null != t ? (0, i.jsx)(D.dY, { children: t }) : null,
            ],
        });
    }
}
class ee extends Y {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === w.d4z.GUILD_CATEGORY ? f.ROc : (0, E.KS)(e);
        return (0, i.jsxs)(D.RX, {
            children: [
                null != n && (0, i.jsx)(D.Tw, { children: (0, i.jsx)(n, { className: M.icon }) }),
                (0, i.jsx)(D.z5, { children: (0, i.jsx)(D.BR, { children: (0, g.F6)(e, N.default, C.Z) }) }),
                null != t ? (0, i.jsx)(D.dY, { children: t.name }) : null,
            ],
        });
    }
}
class et extends Y {
    renderContent() {
        let { command: e } = this.props;
        return (0, i.jsxs)(D.RX, {
            children: [
                (0, i.jsx)(D.Tw, {
                    children: (0, i.jsx)(f.XZC, {
                        size: "xs",
                        color: "currentColor",
                        className: M.icon,
                        colorClass: M.iconForeground,
                    }),
                }),
                (0, i.jsx)(D.z5, { children: (0, i.jsx)(D.BR, { children: e.displayName }) }),
                (0, i.jsx)(D.dY, { children: e.displayDescription }),
            ],
        });
    }
}
class en extends Y {
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
class er extends Y {
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            r = S.Yk.getSetting(),
            a =
                null != e.id || "" !== e.url
                    ? (0, i.jsx)("img", {
                          alt: "",
                          className: M.emojiImage,
                          src:
                              null != e.id
                                  ? R.ZP.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && r,
                                        size: L.$U,
                                    })
                                  : e.url,
                      })
                    : (0, i.jsx)("span", {
                          className: M.emojiRaw,
                          children: e.surrogates,
                      }),
            o = null != n ? (0, i.jsx)(D.dY, { children: n.name }) : null;
        return (0, i.jsxs)(D.RX, {
            children: [
                (0, i.jsx)(D.Tw, { children: a }),
                (0, i.jsx)(D.z5, {
                    children: (0, i.jsxs)(D.BR, {
                        children: [t, e.name, t],
                    }),
                }),
                o,
            ],
        });
    }
    constructor(...e) {
        super(...e), k(this, "layoutClass", s()(M.autocompleteRowVertical, M.autocompleteRowVerticalSmall));
    }
}
class ei extends Y {
    renderContent() {
        var e, t;
        let n,
            { queryMatch: r, renderSticker: a, selected: o, sticker: s } = this.props,
            { hovered: l } = this.state;
        return (
            (0, T.jl)(s)
                ? (n = null == (e = I.Z.getStickerPack(s.pack_id)) ? void 0 : e.name)
                : (0, T.J8)(s) && (n = null == (t = A.Z.getGuild(s.guild_id)) ? void 0 : t.name),
            (0, i.jsxs)(D.RX, {
                children: [
                    (0, i.jsx)(D.Tw, { children: a(s, l || !0 === o) }),
                    (0, i.jsxs)(D.z5, {
                        children: [
                            (0, i.jsx)(D.BR, { children: s.name }),
                            null != r && (0, i.jsx)(D.wL, { children: x.intl.format(x.t.PAutaQ, { queryMatch: r }) }),
                        ],
                    }),
                    null != n && (0, i.jsx)(D.dY, { children: n }),
                ],
            })
        );
    }
    constructor(...e) {
        super(...e), k(this, "layoutClass", s()(M.autocompleteRowVertical, M.autocompleteRowVerticalSmall));
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
        super(...e), k(this, "layoutClass", M.autocompleteRowHorizontal);
    }
}
class eo extends Y {
    renderContent() {
        return (0, i.jsx)(b.Z, { emojis: this.props.emojis });
    }
}
class es extends Y {
    renderContent() {
        return (0, i.jsx)(v.Z, j({}, this.props));
    }
}
class el extends Y {
    renderContent() {
        let { game: e } = this.props,
            t = (0, i.jsx)("img", {
                alt: "",
                className: M.icon,
                src: R.ZP.getApplicationIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 32,
                }),
            });
        return (0, i.jsxs)(D.RX, {
            children: [
                (0, i.jsx)(D.Tw, { children: t }),
                (0, i.jsx)(D.z5, { children: (0, i.jsx)(D.BR, { children: e.name }) }),
            ],
        });
    }
}
class ec extends (r = a.PureComponent) {
    render() {
        let e = this.props,
            { children: t, className: n, innerClassName: r, id: o } = e,
            l = B(e, ["children", "className", "innerClassName", "id"]);
        return a.Children.count(t) > 0
            ? (0, i.jsx)(H.Provider, {
                  value: { id: null != o ? o : "" },
                  children: (0, i.jsx)("div", {
                      className: s()(M.autocomplete, n),
                      children: (0, i.jsx)("div", G(j({ className: s()(M.autocompleteInner, r) }, l), { children: t })),
                  }),
              })
            : null;
    }
}
k(ec, "Generic", W),
    k(ec, "Loading", K),
    k(ec, "Title", z),
    k(ec, "Divider", q),
    k(ec, "User", X),
    k(ec, "UserSuggestion", Q),
    k(ec, "Role", J),
    k(ec, "Channel", ee),
    k(ec, "Command", et),
    k(ec, "NewCommand", en),
    k(ec, "Emoji", er),
    k(ec, "GIFIntegration", ea),
    k(ec, "Sticker", ei),
    k(ec, "EmojiUpsell", eo),
    k(ec, "Soundmoji", es),
    k(ec, "Game", el),
    k(ec, "Timestamp", $);
let eu = ec;
