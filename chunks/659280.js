n.d(t, { Sz: () => eh, Ay: () => eM, aI: () => ed });
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
    E = n(392054),
    C = n(17928),
    I = n(834730),
    y = n(866665),
    S = n(364360);
function N(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", { className: r()(S.um, n), children: t });
}
function v(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", { className: r()(S.Ov, n), children: t });
}
function _(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", { className: r()(S.wq, n), children: t });
}
function T(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(I.E, {
        className: r()(n, S.hf),
        color: "interactive-text-active",
        variant: "text-md/normal",
        children: t,
    });
}
function j(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(I.E, {
        className: r()(n, S.p3),
        color: "interactive-text-default",
        variant: "text-xs/normal",
        children: t,
    });
}
function b(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(I.E, {
        className: r()(n, S.I0),
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
var k = n(375708),
    w = n(633331);
function P(e, t, n) {
    return (0, l.jsx)(M, { className: w.uK, name: e.displayName, state: t, onClick: n }, e.name);
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
            className: w.$2,
            children: o.map((e) => (0, l.jsx)(I.E, { variant: "text-sm/normal", children: e.displayName }, e.name)),
        }),
        c = r.map((e) => P(e, n?.[e.name], s)),
        h =
            a.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(d.D, {
                              className: w.Ki,
                              variant: "heading-deprecated-12/semibold",
                              children: k.intl.string(k.t["5C107K"]),
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
                          className: w.kP,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === a.length
                                  ? k.intl.formatToPlainString(k.t["0mI72g"], { count: o.length })
                                  : k.intl.formatToPlainString(k.t.BP8N0K, { count: o.length }),
                      }),
                  })
                : null;
    return (0, l.jsxs)(l.Fragment, {
        children: [c, null != h || null != m ? (0, l.jsxs)("div", { className: w.gM, children: [h, m] }) : null],
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
        x = (0, C.bG)([R.Ay], () => {
            if (null != a.guild_id && h?.botId != null) return R.Ay.getMember(a.guild_id, h.botId)?.nick;
        });
    return (0, l.jsxs)("div", {
        className: r()(w.iE, m ? null : w.r9),
        children: [
            null != g ? (0, l.jsx)(g, { className: w.Sl, channel: a, section: h, width: 32, height: 32 }) : null,
            (0, l.jsxs)("div", {
                className: w.QR,
                children: [
                    (0, l.jsxs)("div", {
                        className: w.nY,
                        children: [
                            (0, l.jsx)(T, { className: w.DD, children: "/" + n.displayName }),
                            o ? (0, l.jsx)(D, { command: n, optionStates: c, onOptionClick: d }) : null,
                        ],
                    }),
                    (0, l.jsx)(j, {
                        className: r()(w.h_, null != t ? w.z3 : null),
                        children: t ?? f?.displayDescription ?? n.displayDescription,
                    }),
                ],
            }),
            (0, l.jsx)(b, { className: w.sP, children: x ?? h?.name }),
        ],
    });
}
var G = n(524007),
    V = n(47167),
    F = n(713654),
    H = n(688810),
    B = n(573435),
    W = n(10392),
    K = n(82498),
    z = n(174459),
    Z = n(486020),
    Y = n(652215),
    q = n(307731),
    J = n(202541),
    $ = n(211319);
let X = function (e) {
    let { emojis: t } = e,
        { analyticsLocations: n } = (0, H.Ay)();
    i.useEffect(() => {
        z.default.track(Y.HAw.PREMIUM_UPSELL_VIEWED, { type: J.e.EMOJI_AUTOCOMPLETE_INLINE, location_stack: n }),
            (0, W.sq)(Y.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, K.uq)(J.e.EMOJI_AUTOCOMPLETE_INLINE));
    }, [n]);
    let s = (0, l.jsx)("div", {
        className: $.gm,
        children: t.slice(0, 3).map((e, t) => {
            if (null == e.id) return null;
            let n = (0, l.jsx)(
                "div",
                {
                    className: $.rT,
                    children: (0, l.jsx)("img", {
                        alt: e.name,
                        className: $.Zg,
                        src: Z.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: q.EMOJI_URL_BASE_SIZE }),
                    }),
                },
                e.id,
            );
            return 2 === t
                ? n
                : (0, l.jsx)(
                      B.Ay,
                      { className: $.j3, mask: B.Ay.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI, children: n },
                      e.id,
                  );
        }),
    });
    return (0, l.jsxs)(N, {
        className: $.UX,
        children: [
            (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: k.intl.format(k.t.uEky42, { count: t.length }) }) }),
            (0, l.jsx)(b, { children: s }),
        ],
    });
};
var Q = n(106191),
    ee = n(785562),
    et = n(967144),
    en = n(565645),
    el = n(71393);
function ei(e) {
    let { sound: t } = e,
        n = (0, C.bG)([el.A], () => ("0" === t.guildId ? k.intl.string(k.t.Rtvk9X) : el.A.getGuild(t.guildId)?.name));
    return (0, l.jsxs)(N, {
        children: [
            (null != t.emojiId || null != t.emojiName) &&
                (0, l.jsx)(_, { children: (0, l.jsx)(en.A, { emojiId: t.emojiId, emojiName: t.emojiName }) }),
            (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: t.name }) }),
            null != n && (0, l.jsx)(b, { children: n }),
        ],
    });
}
n(980504);
var es = n(750385),
    er = n(68935),
    ea = n(885386),
    eo = n(994500),
    eu = n(287809),
    ec = n(427262);
function ed(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function eh(e) {
    return `autocomplete-${e}-title`;
}
let em = i.createContext(null);
class ef extends i.PureComponent {
    selectable = !0;
    layoutClass = S.rT;
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
                  className: r()(S.vk, n, t),
                  id: ed(i) ?? void 0,
                  onClick: this.handleClick,
                  onMouseMove: () => {
                      this.setState({ hovered: !0 }), this.handleMouseEnter();
                  },
                  onMouseLeave: () => this.setState({ hovered: !1 }),
                  role: "option",
                  "aria-selected": s,
                  children: (0, l.jsx)("div", { className: S.E3, children: this.renderContent() }),
              })
            : (0, l.jsx)("div", {
                  className: r()(S.vk, n, t),
                  id: ed(i) ?? void 0,
                  role: "none",
                  children: (0, l.jsx)("div", { className: S.E3, children: this.renderContent() }),
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
class ep extends ef {
    renderContent() {
        let { text: e, description: t, badge: n } = this.props,
            i = (0, l.jsx)(T, { children: e });
        return (0, l.jsxs)(N, {
            children: [
                (0, l.jsx)(v, { children: null != n ? (0, l.jsxs)("div", { className: S.QN, children: [i, n] }) : i }),
                null != t ? (0, l.jsx)(b, { children: t }) : null,
            ],
        });
    }
}
function eg(e) {
    let t = i.useMemo(() => o().random(60, 120), []);
    return (0, l.jsx)("div", {
        className: S.E3,
        "aria-busy": !0,
        children: (0, l.jsx)(N, {
            children: (0, l.jsx)(v, {
                children: (0, l.jsx)(T, { children: (0, l.jsx)("div", { className: S.M, style: { width: t } }) }),
            }),
        }),
    });
}
function ex(e) {
    let { title: t, className: n, children: s } = e,
        a = i.useContext(em);
    return (0, l.jsx)("div", {
        className: S.E3,
        children: (0, l.jsxs)(d.D, {
            id: eh(a.id),
            className: r()(S.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, s],
        }),
    });
}
class eA extends ef {
    layoutClass = S.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, l.jsx)("div", { className: r()(e, S.yF) });
    }
}
class eE extends ef {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: i, guildId: s } = this.props,
            r = null == s ? eo.A.getNickname(e.id) : null;
        return (0, l.jsxs)(N, {
            children: [
                (0, l.jsx)(_, {
                    children: (0, l.jsx)(h.eu, {
                        size: m._3.SIZE_24,
                        src: e.getAvatarURL(s, 24),
                        "aria-hidden": !0,
                        status: n,
                    }),
                }),
                (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: t ?? r ?? ec.Ay.getName(e) }) }),
                (0, l.jsxs)(b, {
                    children: [
                        ec.Ay.getUserTag(e, { mode: "username", identifiable: i ? "never" : "always" }),
                        i || e.hasUniqueUsername()
                            ? null
                            : (0, l.jsxs)("span", { className: S.T, children: ["#", e.discriminator] }),
                    ],
                }),
            ],
        });
    }
}
class eC extends ef {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: i, colorStrings: s } = e,
            a = "dot" === A.Ay.roleStyle,
            o = "username" === A.Ay.roleStyle && (null != i || null != s),
            u = (0, et.hH)(n, e, s),
            c = null != u && o,
            { gradientStyle: d, gradientClassname: h } = (0, f.Wq)({
                colorStrings: s,
                useReducedMotion: A.Ay.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            m = o ? { ...(c ? d : { color: null != i ? i : void 0 }) } : void 0;
        return (0, l.jsxs)(N, {
            children: [
                (0, l.jsx)(v, {
                    children: (0, l.jsxs)(T, {
                        children: [
                            a && (0, l.jsx)(p.W, { className: S.m4, color: i, colors: u, tooltip: !1 }),
                            (0, l.jsxs)("span", {
                                className: r()({ [h]: c }),
                                style: m,
                                "data-text": c ? `@${e.name}` : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, l.jsx)(b, { children: k.intl.string(k.t["/91tbr"]) }),
            ],
        });
    }
}
class eI extends ef {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, l.jsxs)(N, {
            children: [
                (0, l.jsx)(v, {
                    children: (0, l.jsx)(T, { children: (0, l.jsx)(ee.A, { node: e, showTooltip: !1 }) }),
                }),
                null != t ? (0, l.jsx)(b, { children: t }) : null,
            ],
        });
    }
}
class ey extends ef {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === Y.rbe.GUILD_CATEGORY ? g.FolderIcon : (0, F.gU)(e);
        return (0, l.jsxs)(N, {
            children: [
                null != n && (0, l.jsx)(_, { children: (0, l.jsx)(n, { className: S.Kk }) }),
                (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: (0, V.m1)(e, eu.default, eo.A) }) }),
                null != t ? (0, l.jsx)(b, { children: t.name }) : null,
            ],
        });
    }
}
class eS extends ef {
    renderContent() {
        let { command: e } = this.props;
        return (0, l.jsxs)(N, {
            children: [
                (0, l.jsx)(_, {
                    children: (0, l.jsx)(x.F, { size: "xs", color: "currentColor", className: S.Kk, colorClass: S.t4 }),
                }),
                (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: e.displayName }) }),
                (0, l.jsx)(b, { children: e.displayDescription }),
            ],
        });
    }
}
class eN extends ef {
    isSelectable() {
        return this.props.command.inputType !== E.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: i, selected: s } = this.props,
            { hovered: r } = this.state,
            a = this.isSelectable();
        return e.inputType === E.y$.PLACEHOLDER
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
class ev extends ef {
    layoutClass = r()(S.rT, S.Mf);
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            i = ea.Sf.getSetting(),
            s =
                null != e.id || "" !== e.url
                    ? (0, l.jsx)("img", {
                          alt: "",
                          className: S.mp,
                          src:
                              null != e.id
                                  ? Z.Ay.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && i,
                                        size: q.EMOJI_URL_BASE_SIZE,
                                    })
                                  : e.url,
                      })
                    : (0, l.jsx)("span", { className: S.nT, children: e.surrogates }),
            r = null != n ? (0, l.jsx)(b, { children: n.name }) : null;
        return (0, l.jsxs)(N, {
            children: [
                (0, l.jsx)(_, { children: s }),
                (0, l.jsx)(v, { children: (0, l.jsxs)(T, { children: [t, e.name, t] }) }),
                r,
            ],
        });
    }
}
class e_ extends ef {
    layoutClass = r()(S.rT, S.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: i, sticker: s } = this.props,
            { hovered: r } = this.state;
        return (
            (0, er.FD)(s)
                ? (e = es.A.getStickerPack(s.pack_id)?.name)
                : (0, er.Xw)(s) && (e = el.A.getGuild(s.guild_id)?.name),
            (0, l.jsxs)(N, {
                children: [
                    (0, l.jsx)(_, { children: n(s, r || !0 === i) }),
                    (0, l.jsxs)(v, {
                        children: [
                            (0, l.jsx)(T, { children: s.name }),
                            null != t && (0, l.jsx)(j, { children: k.intl.format(k.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, l.jsx)(b, { children: e }),
                ],
            })
        );
    }
}
class eT extends ef {
    layoutClass = S.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, l.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class ej extends ef {
    renderContent() {
        return (0, l.jsx)(X, { emojis: this.props.emojis });
    }
}
class eb extends ef {
    renderContent() {
        return (0, l.jsx)(ei, { ...this.props });
    }
}
class eR extends ef {
    renderContent() {
        return (0, l.jsxs)(N, {
            children: [
                (0, l.jsx)(_, { children: (0, l.jsx)(Q.A, { game: this.props.game, iconClassName: S.Kk }) }),
                (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: this.props.game.name }) }),
            ],
        });
    }
}
class eO extends i.PureComponent {
    static Generic = ep;
    static Loading = eg;
    static Title = ex;
    static Divider = eA;
    static User = eE;
    static Role = eC;
    static Channel = ey;
    static Command = eS;
    static NewCommand = eN;
    static Emoji = ev;
    static GIFIntegration = eT;
    static Sticker = e_;
    static EmojiUpsell = ej;
    static Soundmoji = eb;
    static Game = eR;
    static Timestamp = eI;
    render() {
        let { children: e, className: t, innerClassName: n, id: s, ...a } = this.props;
        return i.Children.count(e) > 0
            ? (0, l.jsx)(em.Provider, {
                  value: { id: s ?? "" },
                  children: (0, l.jsx)("div", {
                      className: r()(S.nx, t),
                      children: (0, l.jsx)("div", { className: r()(S.Fv, n), ...a, children: e }),
                  }),
              })
            : null;
    }
}
let eM = eO;
