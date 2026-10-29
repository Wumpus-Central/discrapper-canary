n.d(t, { Sz: () => ef, Ay: () => eP, aI: () => em });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
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
    E = n(775602),
    S = n(392054),
    y = n(17928),
    A = n(834730),
    C = n(866665),
    b = n(364360);
function I(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", { className: s()(b.um, n), children: t });
}
function v(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", { className: s()(b.Ov, n), children: t });
}
function N(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", { className: s()(b.wq, n), children: t });
}
function T(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(A.E, {
        className: s()(n, b.hf),
        color: "interactive-text-active",
        variant: "text-md/normal",
        children: t,
    });
}
function j(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(A.E, {
        className: s()(n, b.p3),
        color: "interactive-text-default",
        variant: "text-xs/normal",
        children: t,
    });
}
function _(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(A.E, {
        className: s()(n, b.I0),
        color: "interactive-text-default",
        variant: "text-xs/normal",
        children: t,
    });
}
var k = n(696451),
    R = n(807094);
function O(e) {
    let { name: t, className: n, state: i, isInline: r, onClick: a } = e,
        o = null;
    i?.isActive && !r
        ? (o = R.vu)
        : i?.lastValidationResult?.success === !1
          ? (o = R.z3)
          : i?.hasValue && !r && (o = R.hZ);
    let u = (0, l.jsx)(A.E, {
        variant: r ? "text-md/normal" : "text-sm/normal",
        color: "text-strong",
        className: s()(R.uK, { [R.mG]: r }, o, n),
        children: t + (r ? ":" : ""),
    });
    return null == a ? u : (0, l.jsx)(c.D, { className: R.vk, onClick: () => a(t), children: u });
}
var w = n(664929);
n(827669);
var L = n(105292),
    M = n(633331);
function P(e, t, n) {
    return (0, l.jsx)(O, { className: M.uK, name: e.displayName, state: t, onClick: n }, e.name);
}
function D(e) {
    let { command: t, optionStates: n, onOptionClick: r } = e,
        {
            requiredOptions: s,
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
            className: M.$2,
            children: o.map((e) => (0, l.jsx)(A.E, { variant: "text-sm/normal", children: e.displayName }, e.name)),
        }),
        c = s.map((e) => P(e, n?.[e.name], r)),
        h =
            a.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(d.D, {
                              className: M.Ki,
                              variant: "heading-deprecated-12/semibold",
                              children: L.intl.string(L.t["5C107K"]),
                          }),
                          a.map((e) => P(e, n?.[e.name], r)),
                      ],
                  })
                : null,
        m =
            o.length > 0
                ? (0, l.jsx)(C.m, {
                      __unsupportedReactNodeAsText: u,
                      "aria-label": !1,
                      delay: 200,
                      children: (0, l.jsx)(A.E, {
                          className: M.kP,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === a.length
                                  ? L.intl.formatToPlainString(L.t["0mI72g"], { count: o.length })
                                  : L.intl.formatToPlainString(L.t.BP8N0K, { count: o.length }),
                      }),
                  })
                : null;
    return (0, l.jsxs)(l.Fragment, {
        children: [c, null != h || null != m ? (0, l.jsxs)("div", { className: M.gM, children: [h, m] }) : null],
    });
}
function U(e) {
    let t,
        {
            command: n,
            activeOptionName: r,
            channel: a,
            showOptions: o,
            showImage: u,
            optionStates: c,
            onOptionClick: d,
            section: h,
            isSelectable: m = !0,
        } = e,
        f = i.useMemo(() => n?.options?.find((e) => e.name === r), [r, n]),
        p = null != r ? c?.[r] : null;
    t = null != p && p.lastValidationResult?.success === !1 ? (p.lastValidationResult.error ?? "") : null;
    let g = u && null != h ? (0, w.Rg)(h) : null,
        x = (0, y.bG)([k.Ay], () => {
            if (null != a.guild_id && h?.botId != null) return k.Ay.getMember(a.guild_id, h.botId)?.nick;
        });
    return (0, l.jsxs)("div", {
        className: s()(M.iE, m ? null : M.r9),
        children: [
            null != g ? (0, l.jsx)(g, { className: M.Sl, channel: a, section: h, width: 32, height: 32 }) : null,
            (0, l.jsxs)("div", {
                className: M.QR,
                children: [
                    (0, l.jsxs)("div", {
                        className: M.nY,
                        children: [
                            (0, l.jsx)(T, { className: M.DD, children: "/" + n.displayName }),
                            o ? (0, l.jsx)(D, { command: n, optionStates: c, onOptionClick: d }) : null,
                        ],
                    }),
                    (0, l.jsx)(j, {
                        className: s()(M.h_, null != t ? M.z3 : null),
                        children: t ?? f?.displayDescription ?? n.displayDescription,
                    }),
                ],
            }),
            (0, l.jsx)(_, { className: M.sP, children: x ?? h?.name }),
        ],
    });
}
var V = n(524007),
    W = n(47167),
    F = n(713654),
    B = n(688810),
    K = n(573435),
    G = n(10392),
    H = n(82498),
    z = n(174459),
    q = n(486020),
    $ = n(652215),
    Q = n(307731),
    Z = n(202541),
    X = n(211319);
let J = function (e) {
    let { emojis: t } = e,
        { analyticsLocations: n } = (0, B.Ay)();
    i.useEffect(() => {
        (z.default.track($.HAw.PREMIUM_UPSELL_VIEWED, { type: Z.e.EMOJI_AUTOCOMPLETE_INLINE, location_stack: n }),
            (0, G.sq)($.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, H.uq)(Z.e.EMOJI_AUTOCOMPLETE_INLINE)));
    }, [n]);
    let r = (0, l.jsx)("div", {
        className: X.gm,
        children: t.slice(0, 3).map((e, t) => {
            if (null == e.id) return null;
            let n = (0, l.jsx)(
                "div",
                {
                    className: X.rT,
                    children: (0, l.jsx)("img", {
                        alt: e.name,
                        className: X.Zg,
                        src: q.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: Q.EMOJI_URL_BASE_SIZE }),
                    }),
                },
                e.id,
            );
            return 2 === t
                ? n
                : (0, l.jsx)(
                      K.Ay,
                      { className: X.j3, mask: K.Ay.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI, children: n },
                      e.id,
                  );
        }),
    });
    return (0, l.jsxs)(I, {
        className: X.UX,
        children: [
            (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: L.intl.format(L.t.uEky42, { count: t.length }) }) }),
            (0, l.jsx)(_, { children: r }),
        ],
    });
};
var Y = n(168017),
    ee = n(106191),
    et = n(719067),
    en = n(785562),
    el = n(967144),
    ei = n(788026),
    er = n(71393);
function es(e) {
    let { sound: t } = e,
        n = (0, y.bG)([er.A], () => ("0" === t.guildId ? L.intl.string(L.t.Rtvk9X) : er.A.getGuild(t.guildId)?.name));
    return (0, l.jsxs)(I, {
        children: [
            (null != t.emojiId || null != t.emojiName) &&
                (0, l.jsx)(N, { children: (0, l.jsx)(ei.A, { emojiId: t.emojiId, emojiName: t.emojiName }) }),
            (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: t.name }) }),
            null != n && (0, l.jsx)(_, { children: n }),
        ],
    });
}
n(980504);
var ea = n(750385),
    eo = n(378058),
    eu = n(253932),
    ec = n(994500),
    ed = n(287809),
    eh = n(427262);
function em(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function ef(e) {
    return `autocomplete-${e}-title`;
}
let ep = i.createContext(null);
class eg extends i.PureComponent {
    selectable = !0;
    layoutClass = b.rT;
    constructor(e) {
        (super(e), (this.state = { hovered: !1 }));
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
            props: { className: n, index: i, selected: r },
        } = this;
        return this.isSelectable()
            ? (0, l.jsx)(c.D, {
                  ...e,
                  className: s()(b.vk, n, t),
                  id: em(i) ?? void 0,
                  onClick: this.handleClick,
                  onMouseMove: () => {
                      (this.setState({ hovered: !0 }), this.handleMouseEnter());
                  },
                  onMouseLeave: () => this.setState({ hovered: !1 }),
                  role: "option",
                  "aria-selected": r,
                  children: (0, l.jsx)("div", { className: b.E3, children: this.renderContent() }),
              })
            : (0, l.jsx)("div", {
                  className: s()(b.vk, n, t),
                  id: em(i) ?? void 0,
                  role: "none",
                  children: (0, l.jsx)("div", { className: b.E3, children: this.renderContent() }),
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
class ex extends eg {
    renderContent() {
        let { text: e, description: t, badge: n, icon: i } = this.props,
            r = (0, l.jsx)(T, { children: e });
        return (0, l.jsxs)(I, {
            children: [
                null != i ? (0, l.jsx)(N, { children: i }) : null,
                (0, l.jsx)(v, { children: null != n ? (0, l.jsxs)("div", { className: b.QN, children: [r, n] }) : r }),
                null != t ? (0, l.jsx)(_, { children: t }) : null,
            ],
        });
    }
}
function eE(e) {
    let t = i.useMemo(() => o().random(60, 120), []);
    return (0, l.jsx)("div", {
        className: b.E3,
        "aria-busy": !0,
        children: (0, l.jsx)(I, {
            children: (0, l.jsx)(v, {
                children: (0, l.jsx)(T, { children: (0, l.jsx)("div", { className: b.M, style: { width: t } }) }),
            }),
        }),
    });
}
function eS(e) {
    let { title: t, className: n, children: r } = e,
        a = i.useContext(ep);
    return (0, l.jsx)("div", {
        className: b.E3,
        children: (0, l.jsxs)(d.D, {
            id: ef(a.id),
            className: s()(b.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, r],
        }),
    });
}
class ey extends eg {
    layoutClass = b.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, l.jsx)("div", { className: s()(e, b.yF) });
    }
}
class eA extends eg {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: i, guildId: r } = this.props,
            s = null == r ? ec.A.getNickname(e.id) : null;
        return (0, l.jsxs)(I, {
            children: [
                (0, l.jsx)(N, {
                    children: (0, l.jsx)(h.eu, {
                        size: m._3.SIZE_24,
                        src: e.getAvatarURL(r, 24),
                        "aria-hidden": !0,
                        status: n,
                    }),
                }),
                (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: t ?? s ?? eh.Ay.getName(e) }) }),
                (0, l.jsxs)(_, {
                    children: [
                        eh.Ay.getUserTag(e, { mode: "username", identifiable: i ? "never" : "always" }),
                        i || e.hasUniqueUsername()
                            ? null
                            : (0, l.jsxs)("span", { className: b.T, children: ["#", e.discriminator] }),
                    ],
                }),
            ],
        });
    }
}
class eC extends eg {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: i, colorStrings: r } = e,
            a = "dot" === E.Ay.roleStyle,
            o = "username" === E.Ay.roleStyle && (null != i || null != r),
            u = (0, el.hH)(n, e, r),
            c = null != u && o,
            { gradientStyle: d, gradientClassname: h } = (0, f.Wq)({
                colorStrings: r,
                useReducedMotion: E.Ay.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            m = o ? { ...(c ? d : { color: null != i ? i : void 0 }) } : void 0;
        return (0, l.jsxs)(I, {
            children: [
                (0, l.jsx)(v, {
                    children: (0, l.jsxs)(T, {
                        children: [
                            a && (0, l.jsx)(p.W, { className: b.m4, color: i, colors: u, tooltip: !1 }),
                            (0, l.jsxs)("span", {
                                className: s()({ [h]: c }),
                                style: m,
                                "data-text": c ? `@${e.name}` : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, l.jsx)(_, { children: L.intl.string(L.t["/91tbr"]) }),
            ],
        });
    }
}
class eb extends eg {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, l.jsxs)(I, {
            children: [
                (0, l.jsx)(v, {
                    children: (0, l.jsx)(T, { children: (0, l.jsx)(en.A, { node: e, showTooltip: !1 }) }),
                }),
                null != t ? (0, l.jsx)(_, { children: t }) : null,
            ],
        });
    }
}
class eI extends eg {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === $.rbe.GUILD_CATEGORY ? g.FolderIcon : (0, F.gU)(e);
        return (0, l.jsxs)(I, {
            children: [
                null != n && (0, l.jsx)(N, { children: (0, l.jsx)(n, { className: b.Kk }) }),
                (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: (0, W.m1)(e, ed.default, ec.A) }) }),
                null != t ? (0, l.jsx)(_, { children: t.name }) : null,
            ],
        });
    }
}
class ev extends eg {
    renderContent() {
        let { command: e } = this.props;
        return (0, l.jsxs)(I, {
            children: [
                (0, l.jsx)(N, {
                    children: (0, l.jsx)(x.F, { size: "xs", color: "currentColor", className: b.Kk, colorClass: b.t4 }),
                }),
                (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: e.displayName }) }),
                (0, l.jsx)(_, { children: e.displayDescription }),
            ],
        });
    }
}
class eN extends eg {
    isSelectable() {
        return this.props.command.inputType !== S.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: i, selected: r } = this.props,
            { hovered: s } = this.state,
            a = this.isSelectable();
        return e.inputType === S.y$.PLACEHOLDER
            ? (0, l.jsx)(V.A, {})
            : (0, l.jsx)(U, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: s || (a && r),
                  section: i,
                  isSelectable: a,
              });
    }
}
class eT extends eg {
    layoutClass = s()(b.rT, b.Mf);
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            i = eu.Sf.getSetting(),
            r =
                null != e.id || "" !== e.url
                    ? (0, l.jsx)("img", {
                          alt: "",
                          className: b.mp,
                          src:
                              null != e.id
                                  ? q.Ay.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && i,
                                        size: Q.EMOJI_URL_BASE_SIZE,
                                    })
                                  : e.url,
                      })
                    : (0, l.jsx)("span", { className: b.nT, children: e.surrogates }),
            s = null != n ? (0, l.jsx)(_, { children: n.name }) : null;
        return (0, l.jsxs)(I, {
            children: [
                (0, l.jsx)(N, { children: r }),
                (0, l.jsx)(v, { children: (0, l.jsxs)(T, { children: [t, e.name, t] }) }),
                s,
            ],
        });
    }
}
class ej extends eg {
    layoutClass = s()(b.rT, b.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: i, sticker: r } = this.props,
            { hovered: s } = this.state;
        return (
            (0, eo.FD)(r)
                ? (e = ea.A.getStickerPack(r.pack_id)?.name)
                : (0, eo.Xw)(r) && (e = er.A.getGuild(r.guild_id)?.name),
            (0, l.jsxs)(I, {
                children: [
                    (0, l.jsx)(N, { children: n(r, s || !0 === i) }),
                    (0, l.jsxs)(v, {
                        children: [
                            (0, l.jsx)(T, { children: r.name }),
                            null != t && (0, l.jsx)(j, { children: L.intl.format(L.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, l.jsx)(_, { children: e }),
                ],
            })
        );
    }
}
class e_ extends eg {
    layoutClass = b.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, l.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class ek extends eg {
    renderContent() {
        return (0, l.jsx)(J, { emojis: this.props.emojis });
    }
}
class eR extends eg {
    renderContent() {
        return (0, l.jsx)(es, { ...this.props });
    }
}
function eO(e) {
    let { game: t } = e,
        { extraChromeEnabled: n } = Y.A.useConfig({ location: "game_mention_autocomplete" });
    return (0, l.jsx)(ee.A, { game: t, iconClassName: b.Kk, withBackground: n });
}
class ew extends eg {
    renderContent() {
        return (0, l.jsxs)(I, {
            children: [
                (0, l.jsx)(N, { children: (0, l.jsx)(eO, { game: this.props.game }) }),
                (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: this.props.game.name }) }),
                (0, l.jsx)(et.A, {
                    platforms: this.props.game.platformAvailability,
                    location: "game_mention_autocomplete",
                }),
            ],
        });
    }
}
function eL(e) {
    let { id: t, children: n } = e,
        r = i.useMemo(() => ({ id: t }), [t]);
    return (0, l.jsx)(ep.Provider, { value: r, children: n });
}
class eM extends i.PureComponent {
    static Generic = ex;
    static Loading = eE;
    static Title = eS;
    static Divider = ey;
    static User = eA;
    static Role = eC;
    static Channel = eI;
    static Command = ev;
    static NewCommand = eN;
    static Emoji = eT;
    static GIFIntegration = e_;
    static Sticker = ej;
    static EmojiUpsell = ek;
    static Soundmoji = eR;
    static Game = ew;
    static Timestamp = eb;
    render() {
        let { children: e, className: t, innerClassName: n, id: r, ...a } = this.props;
        return i.Children.count(e) > 0
            ? (0, l.jsx)(eL, {
                  id: r ?? "",
                  children: (0, l.jsx)("div", {
                      className: s()(b.nx, t),
                      children: (0, l.jsx)("div", { className: s()(b.Fv, n), ...a, children: e }),
                  }),
              })
            : null;
    }
}
let eP = eM;
