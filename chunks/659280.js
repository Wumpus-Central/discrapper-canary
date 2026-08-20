"use strict";
n.d(t, { Sz: () => ec, Ay: () => eR, aI: () => eu });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(435558),
    o = n.n(a),
    u = n(837381),
    c = n(939249),
    d = n(297264),
    h = n(97808),
    m = n(778712),
    f = n(36075),
    p = n(545442),
    g = n(678708),
    x = n(88187),
    A = n(775602),
    C = n(392054),
    E = n(17928),
    I = n(834730),
    y = n(866665),
    v = n(364360);
function S(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", { className: r()(v.um, n), children: t });
}
function N(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", { className: r()(v.Ov, n), children: t });
}
function _(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", { className: r()(v.wq, n), children: t });
}
function T(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(I.E, {
        className: r()(n, v.hf),
        color: "interactive-text-active",
        variant: "text-md/normal",
        children: t,
    });
}
function j(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(I.E, {
        className: r()(n, v.p3),
        color: "interactive-text-default",
        variant: "text-xs/normal",
        children: t,
    });
}
function b(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(I.E, {
        className: r()(n, v.I0),
        color: "interactive-text-default",
        variant: "text-xs/normal",
        children: t,
    });
}
var R = n(696451),
    O = n(807094);
function M(e) {
    let { name: t, className: n, state: i, isInline: s, onClick: a } = e,
        o = null;
    i?.isActive && !s
        ? (o = O.vu)
        : i?.lastValidationResult?.success === !1
          ? (o = O.z3)
          : i?.hasValue && !s && (o = O.hZ);
    let u = (0, l.jsx)(I.E, {
        variant: s ? "text-md/normal" : "text-sm/normal",
        color: "text-strong",
        className: r()(O.uK, { [O.mG]: s }, o, n),
        children: t + (s ? ":" : ""),
    });
    return null == a ? u : (0, l.jsx)(c.D, { className: O.vk, onClick: () => a(t), children: u });
}
var L = n(664929);
n(827669);
var w = n(375708),
    k = n(633331);
function P(e, t, n) {
    return (0, l.jsx)(M, { className: k.uK, name: e.displayName, state: t, onClick: n }, e.name);
}
function D(e) {
    let { command: t, optionStates: n, onOptionClick: s } = e,
        {
            requiredOptions: r,
            setOptionalOptions: a,
            unsetOptionalOptions: o,
        } = i.useMemo(() => {
            let e = t.options?.filter((e) => e.required) ?? [],
                l = t.options?.filter((e) => !e.required) ?? [];
            return {
                requiredOptions: e,
                setOptionalOptions: l.filter((e) => n?.[e.name]?.hasValue),
                unsetOptionalOptions: l.filter((e) => !n?.[e.name]?.hasValue),
            };
        }, [t.options, n]),
        u = (0, l.jsx)("div", {
            className: k.$2,
            children: o.map((e) => (0, l.jsx)(I.E, { variant: "text-sm/normal", children: e.displayName }, e.name)),
        }),
        c = r.map((e) => P(e, n?.[e.name], s)),
        h =
            a.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(d.D, {
                              className: k.Ki,
                              variant: "heading-deprecated-12/semibold",
                              children: w.intl.string(w.t["5C107K"]),
                          }),
                          a.map((e) => P(e, n?.[e.name], s)),
                      ],
                  })
                : null,
        m =
            o.length > 0
                ? (0, l.jsx)(y.m, {
                      __unsupportedReactNodeAsText: u,
                      "aria-label": !1,
                      delay: 200,
                      children: (0, l.jsx)(I.E, {
                          className: k.kP,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === a.length
                                  ? w.intl.formatToPlainString(w.t["0mI72g"], { count: o.length })
                                  : w.intl.formatToPlainString(w.t.BP8N0K, { count: o.length }),
                      }),
                  })
                : null;
    return (0, l.jsxs)(l.Fragment, {
        children: [c, null != h || null != m ? (0, l.jsxs)("div", { className: k.gM, children: [h, m] }) : null],
    });
}
function U(e) {
    let t,
        {
            command: n,
            activeOptionName: s,
            channel: a,
            showOptions: o,
            showImage: u,
            optionStates: c,
            onOptionClick: d,
            section: h,
            isSelectable: m = !0,
        } = e,
        f = i.useMemo(() => n?.options?.find((e) => e.name === s), [s, n]),
        p = null != s ? c?.[s] : null;
    t = null != p && p.lastValidationResult?.success === !1 ? (p.lastValidationResult.error ?? "") : null;
    let g = u && null != h ? (0, L.Rg)(h) : null,
        x = (0, E.bG)([R.Ay], () => {
            if (null != a.guild_id && h?.botId != null) return R.Ay.getMember(a.guild_id, h.botId)?.nick;
        });
    return (0, l.jsxs)("div", {
        className: r()(k.iE, m ? null : k.r9),
        children: [
            null != g ? (0, l.jsx)(g, { className: k.Sl, channel: a, section: h, width: 32, height: 32 }) : null,
            (0, l.jsxs)("div", {
                className: k.QR,
                children: [
                    (0, l.jsxs)("div", {
                        className: k.nY,
                        children: [
                            (0, l.jsx)(T, { className: k.DD, children: "/" + n.displayName }),
                            o ? (0, l.jsx)(D, { command: n, optionStates: c, onOptionClick: d }) : null,
                        ],
                    }),
                    (0, l.jsx)(j, {
                        className: r()(k.h_, null != t ? k.z3 : null),
                        children: t ?? f?.displayDescription ?? n.displayDescription,
                    }),
                ],
            }),
            (0, l.jsx)(b, { className: k.sP, children: x ?? h?.name }),
        ],
    });
}
var G = n(524007),
    V = n(47167),
    F = n(713654),
    H = n(688810),
    B = n(573435),
    W = n(174459),
    K = n(486020),
    z = n(652215),
    Z = n(307731),
    Y = n(202541),
    q = n(211319);
let J = function (e) {
    let { emojis: t } = e,
        { analyticsLocations: n } = (0, H.Ay)();
    i.useEffect(() => {
        W.default.track(z.HAw.PREMIUM_UPSELL_VIEWED, { type: Y.e.EMOJI_AUTOCOMPLETE_INLINE, location_stack: n });
    }, [n]);
    let s = (0, l.jsx)("div", {
        className: q.gm,
        children: t.slice(0, 3).map((e, t) => {
            if (null == e.id) return null;
            let n = (0, l.jsx)(
                "div",
                {
                    className: q.rT,
                    children: (0, l.jsx)("img", {
                        alt: e.name,
                        className: q.Zg,
                        src: K.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: Z.EMOJI_URL_BASE_SIZE }),
                    }),
                },
                e.id,
            );
            return 2 === t
                ? n
                : (0, l.jsx)(
                      B.Ay,
                      { className: q.j3, mask: B.Ay.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI, children: n },
                      e.id,
                  );
        }),
    });
    return (0, l.jsxs)(S, {
        className: q.UX,
        children: [
            (0, l.jsx)(N, { children: (0, l.jsx)(T, { children: w.intl.format(w.t.uEky42, { count: t.length }) }) }),
            (0, l.jsx)(b, { children: s }),
        ],
    });
};
var $ = n(106191),
    X = n(785562),
    Q = n(967144),
    ee = n(565645),
    et = n(71393);
function en(e) {
    let { sound: t } = e,
        n = (0, E.bG)([et.A], () => ("0" === t.guildId ? w.intl.string(w.t.Rtvk9X) : et.A.getGuild(t.guildId)?.name));
    return (0, l.jsxs)(S, {
        children: [
            (null != t.emojiId || null != t.emojiName) &&
                (0, l.jsx)(_, { children: (0, l.jsx)(ee.A, { emojiId: t.emojiId, emojiName: t.emojiName }) }),
            (0, l.jsx)(N, { children: (0, l.jsx)(T, { children: t.name }) }),
            null != n && (0, l.jsx)(b, { children: n }),
        ],
    });
}
n(980504);
var el = n(750385),
    ei = n(68935),
    es = n(885386),
    er = n(994500),
    ea = n(287809),
    eo = n(427262);
function eu(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function ec(e) {
    return `autocomplete-${e}-title`;
}
let ed = i.createContext(null);
class eh extends i.PureComponent {
    selectable = !0;
    layoutClass = v.rT;
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
        } = this;
        return this.isSelectable()
            ? (0, l.jsx)(c.D, {
                  ...e,
                  className: r()(v.vk, n, t),
                  id: eu(i) ?? void 0,
                  onClick: this.handleClick,
                  onMouseMove: () => {
                      this.setState({ hovered: !0 }), this.handleMouseEnter();
                  },
                  onMouseLeave: () => this.setState({ hovered: !1 }),
                  role: "option",
                  "aria-selected": s,
                  children: (0, l.jsx)("div", { className: v.E3, children: this.renderContent() }),
              })
            : (0, l.jsx)("div", {
                  className: r()(v.vk, n, t),
                  id: eu(i) ?? void 0,
                  role: "none",
                  children: (0, l.jsx)("div", { className: v.E3, children: this.renderContent() }),
              });
    }
    render() {
        let { index: e } = this.props;
        return this.isSelectable()
            ? (0, l.jsx)(u.tG, { id: `${e}`, children: (e) => this.renderClickable(e) })
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
class em extends eh {
    renderContent() {
        let { text: e, description: t, badge: n } = this.props,
            i = (0, l.jsx)(T, { children: e });
        return (0, l.jsxs)(S, {
            children: [
                (0, l.jsx)(N, { children: null != n ? (0, l.jsxs)("div", { className: v.QN, children: [i, n] }) : i }),
                null != t ? (0, l.jsx)(b, { children: t }) : null,
            ],
        });
    }
}
function ef(e) {
    let t = i.useMemo(() => o().random(60, 120), []);
    return (0, l.jsx)("div", {
        className: v.E3,
        "aria-busy": !0,
        children: (0, l.jsx)(S, {
            children: (0, l.jsx)(N, {
                children: (0, l.jsx)(T, { children: (0, l.jsx)("div", { className: v.M, style: { width: t } }) }),
            }),
        }),
    });
}
function ep(e) {
    let { title: t, className: n, children: s } = e,
        a = i.useContext(ed);
    return (0, l.jsx)("div", {
        className: v.E3,
        children: (0, l.jsxs)(d.D, {
            id: ec(a.id),
            className: r()(v.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, s],
        }),
    });
}
class eg extends eh {
    layoutClass = v.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, l.jsx)("div", { className: r()(e, v.yF) });
    }
}
class ex extends eh {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: i, guildId: s } = this.props,
            r = null == s ? er.A.getNickname(e.id) : null;
        return (0, l.jsxs)(S, {
            children: [
                (0, l.jsx)(_, {
                    children: (0, l.jsx)(h.eu, {
                        size: m._3.SIZE_24,
                        src: e.getAvatarURL(s, 24),
                        "aria-hidden": !0,
                        status: n,
                    }),
                }),
                (0, l.jsx)(N, { children: (0, l.jsx)(T, { children: t ?? r ?? eo.Ay.getName(e) }) }),
                (0, l.jsxs)(b, {
                    children: [
                        eo.Ay.getUserTag(e, { mode: "username", identifiable: i ? "never" : "always" }),
                        i || e.hasUniqueUsername()
                            ? null
                            : (0, l.jsxs)("span", { className: v.T, children: ["#", e.discriminator] }),
                    ],
                }),
            ],
        });
    }
}
class eA extends eh {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: i, colorStrings: s } = e,
            a = "dot" === A.Ay.roleStyle,
            o = "username" === A.Ay.roleStyle && (null != i || null != s),
            u = (0, Q.hH)(n, e, s),
            c = null != u && o,
            { gradientStyle: d, gradientClassname: h } = (0, f.Wq)({
                colorStrings: s,
                useReducedMotion: A.Ay.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            m = o ? { ...(c ? d : { color: null != i ? i : void 0 }) } : void 0;
        return (0, l.jsxs)(S, {
            children: [
                (0, l.jsx)(N, {
                    children: (0, l.jsxs)(T, {
                        children: [
                            a && (0, l.jsx)(p.W, { className: v.m4, color: i, colors: u, tooltip: !1 }),
                            (0, l.jsxs)("span", {
                                className: r()({ [h]: c }),
                                style: m,
                                "data-text": c ? `@${e.name}` : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, l.jsx)(b, { children: w.intl.string(w.t["/91tbr"]) }),
            ],
        });
    }
}
class eC extends eh {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, l.jsxs)(S, {
            children: [
                (0, l.jsx)(N, { children: (0, l.jsx)(T, { children: (0, l.jsx)(X.A, { node: e, showTooltip: !1 }) }) }),
                null != t ? (0, l.jsx)(b, { children: t }) : null,
            ],
        });
    }
}
class eE extends eh {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === z.rbe.GUILD_CATEGORY ? g.FolderIcon : (0, F.gU)(e);
        return (0, l.jsxs)(S, {
            children: [
                null != n && (0, l.jsx)(_, { children: (0, l.jsx)(n, { className: v.Kk }) }),
                (0, l.jsx)(N, { children: (0, l.jsx)(T, { children: (0, V.m1)(e, ea.default, er.A) }) }),
                null != t ? (0, l.jsx)(b, { children: t.name }) : null,
            ],
        });
    }
}
class eI extends eh {
    renderContent() {
        let { command: e } = this.props;
        return (0, l.jsxs)(S, {
            children: [
                (0, l.jsx)(_, {
                    children: (0, l.jsx)(x.F, { size: "xs", color: "currentColor", className: v.Kk, colorClass: v.t4 }),
                }),
                (0, l.jsx)(N, { children: (0, l.jsx)(T, { children: e.displayName }) }),
                (0, l.jsx)(b, { children: e.displayDescription }),
            ],
        });
    }
}
class ey extends eh {
    isSelectable() {
        return this.props.command.inputType !== C.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: i, selected: s } = this.props,
            { hovered: r } = this.state,
            a = this.isSelectable();
        return e.inputType === C.y$.PLACEHOLDER
            ? (0, l.jsx)(G.A, {})
            : (0, l.jsx)(U, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: r || (a && s),
                  section: i,
                  isSelectable: a,
              });
    }
}
class ev extends eh {
    layoutClass = r()(v.rT, v.Mf);
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            i = es.Sf.getSetting(),
            s =
                null != e.id || "" !== e.url
                    ? (0, l.jsx)("img", {
                          alt: "",
                          className: v.mp,
                          src:
                              null != e.id
                                  ? K.Ay.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && i,
                                        size: Z.EMOJI_URL_BASE_SIZE,
                                    })
                                  : e.url,
                      })
                    : (0, l.jsx)("span", { className: v.nT, children: e.surrogates }),
            r = null != n ? (0, l.jsx)(b, { children: n.name }) : null;
        return (0, l.jsxs)(S, {
            children: [
                (0, l.jsx)(_, { children: s }),
                (0, l.jsx)(N, { children: (0, l.jsxs)(T, { children: [t, e.name, t] }) }),
                r,
            ],
        });
    }
}
class eS extends eh {
    layoutClass = r()(v.rT, v.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: i, sticker: s } = this.props,
            { hovered: r } = this.state;
        return (
            (0, ei.FD)(s)
                ? (e = el.A.getStickerPack(s.pack_id)?.name)
                : (0, ei.Xw)(s) && (e = et.A.getGuild(s.guild_id)?.name),
            (0, l.jsxs)(S, {
                children: [
                    (0, l.jsx)(_, { children: n(s, r || !0 === i) }),
                    (0, l.jsxs)(N, {
                        children: [
                            (0, l.jsx)(T, { children: s.name }),
                            null != t && (0, l.jsx)(j, { children: w.intl.format(w.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, l.jsx)(b, { children: e }),
                ],
            })
        );
    }
}
class eN extends eh {
    layoutClass = v.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, l.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class e_ extends eh {
    renderContent() {
        return (0, l.jsx)(J, { emojis: this.props.emojis });
    }
}
class eT extends eh {
    renderContent() {
        return (0, l.jsx)(en, { ...this.props });
    }
}
class ej extends eh {
    renderContent() {
        return (0, l.jsxs)(S, {
            children: [
                (0, l.jsx)(_, { children: (0, l.jsx)($.A, { game: this.props.game, iconClassName: v.Kk }) }),
                (0, l.jsx)(N, { children: (0, l.jsx)(T, { children: this.props.game.name }) }),
            ],
        });
    }
}
class eb extends i.PureComponent {
    static Generic = em;
    static Loading = ef;
    static Title = ep;
    static Divider = eg;
    static User = ex;
    static Role = eA;
    static Channel = eE;
    static Command = eI;
    static NewCommand = ey;
    static Emoji = ev;
    static GIFIntegration = eN;
    static Sticker = eS;
    static EmojiUpsell = e_;
    static Soundmoji = eT;
    static Game = ej;
    static Timestamp = eC;
    render() {
        let { children: e, className: t, innerClassName: n, id: s, ...a } = this.props;
        return i.Children.count(e) > 0
            ? (0, l.jsx)(ed.Provider, {
                  value: { id: s ?? "" },
                  children: (0, l.jsx)("div", {
                      className: r()(v.nx, t),
                      children: (0, l.jsx)("div", { className: r()(v.Fv, n), ...a, children: e }),
                  }),
              })
            : null;
    }
}
let eR = eb;
