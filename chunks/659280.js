n.d(t, { Sz: () => em, Ay: () => eO, aI: () => eh });
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
    p = n(36075),
    f = n(545442),
    g = n(678708),
    x = n(88187),
    E = n(775602),
    S = n(392054),
    y = n(17928),
    C = n(834730),
    A = n(866665),
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
    return (0, l.jsx)(C.E, {
        className: s()(n, b.hf),
        color: "interactive-text-active",
        variant: "text-md/normal",
        children: t,
    });
}
function j(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(C.E, {
        className: s()(n, b.p3),
        color: "interactive-text-default",
        variant: "text-xs/normal",
        children: t,
    });
}
function k(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(C.E, {
        className: s()(n, b.I0),
        color: "interactive-text-default",
        variant: "text-xs/normal",
        children: t,
    });
}
var _ = n(696451),
    R = n(807094);
function w(e) {
    let { name: t, className: n, state: i, isInline: r, onClick: a } = e,
        o = null;
    i?.isActive && !r
        ? (o = R.vu)
        : i?.lastValidationResult?.success === !1
          ? (o = R.z3)
          : i?.hasValue && !r && (o = R.hZ);
    let u = (0, l.jsx)(C.E, {
        variant: r ? "text-md/normal" : "text-sm/normal",
        color: "text-strong",
        className: s()(R.uK, { [R.mG]: r }, o, n),
        children: t + (r ? ":" : ""),
    });
    return null == a ? u : (0, l.jsx)(c.D, { className: R.vk, onClick: () => a(t), children: u });
}
var O = n(664929);
n(827669);
var L = n(375708),
    P = n(633331);
function M(e, t, n) {
    return (0, l.jsx)(w, { className: P.uK, name: e.displayName, state: t, onClick: n }, e.name);
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
            className: P.$2,
            children: o.map((e) => (0, l.jsx)(C.E, { variant: "text-sm/normal", children: e.displayName }, e.name)),
        }),
        c = s.map((e) => M(e, n?.[e.name], r)),
        h =
            a.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(d.D, {
                              className: P.Ki,
                              variant: "heading-deprecated-12/semibold",
                              children: L.intl.string(L.t["5C107K"]),
                          }),
                          a.map((e) => M(e, n?.[e.name], r)),
                      ],
                  })
                : null,
        m =
            o.length > 0
                ? (0, l.jsx)(A.m, {
                      __unsupportedReactNodeAsText: u,
                      "aria-label": !1,
                      delay: 200,
                      children: (0, l.jsx)(C.E, {
                          className: P.kP,
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
        children: [c, null != h || null != m ? (0, l.jsxs)("div", { className: P.gM, children: [h, m] }) : null],
    });
}
function V(e) {
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
        p = i.useMemo(() => n?.options?.find((e) => e.name === r), [r, n]),
        f = null != r ? c?.[r] : null;
    t = null != f && f.lastValidationResult?.success === !1 ? (f.lastValidationResult.error ?? "") : null;
    let g = u && null != h ? (0, O.Rg)(h) : null,
        x = (0, y.bG)([_.Ay], () => {
            if (null != a.guild_id && h?.botId != null) return _.Ay.getMember(a.guild_id, h.botId)?.nick;
        });
    return (0, l.jsxs)("div", {
        className: s()(P.iE, m ? null : P.r9),
        children: [
            null != g ? (0, l.jsx)(g, { className: P.Sl, channel: a, section: h, width: 32, height: 32 }) : null,
            (0, l.jsxs)("div", {
                className: P.QR,
                children: [
                    (0, l.jsxs)("div", {
                        className: P.nY,
                        children: [
                            (0, l.jsx)(T, { className: P.DD, children: "/" + n.displayName }),
                            o ? (0, l.jsx)(D, { command: n, optionStates: c, onOptionClick: d }) : null,
                        ],
                    }),
                    (0, l.jsx)(j, {
                        className: s()(P.h_, null != t ? P.z3 : null),
                        children: t ?? p?.displayDescription ?? n.displayDescription,
                    }),
                ],
            }),
            (0, l.jsx)(k, { className: P.sP, children: x ?? h?.name }),
        ],
    });
}
var U = n(524007),
    W = n(47167),
    F = n(713654),
    B = n(688810),
    K = n(573435),
    G = n(10392),
    H = n(82498),
    z = n(174459),
    q = n(486020),
    Q = n(652215),
    $ = n(307731),
    Z = n(202541),
    X = n(211319);
let J = function (e) {
    let { emojis: t } = e,
        { analyticsLocations: n } = (0, B.Ay)();
    i.useEffect(() => {
        (z.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, { type: Z.e.EMOJI_AUTOCOMPLETE_INLINE, location_stack: n }),
            (0, G.sq)(Q.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, H.uq)(Z.e.EMOJI_AUTOCOMPLETE_INLINE)));
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
                        src: q.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: $.EMOJI_URL_BASE_SIZE }),
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
            (0, l.jsx)(k, { children: r }),
        ],
    });
};
var Y = n(106191),
    ee = n(719067),
    et = n(785562),
    en = n(967144),
    el = n(565645),
    ei = n(71393);
function er(e) {
    let { sound: t } = e,
        n = (0, y.bG)([ei.A], () => ("0" === t.guildId ? L.intl.string(L.t.Rtvk9X) : ei.A.getGuild(t.guildId)?.name));
    return (0, l.jsxs)(I, {
        children: [
            (null != t.emojiId || null != t.emojiName) &&
                (0, l.jsx)(N, { children: (0, l.jsx)(el.A, { emojiId: t.emojiId, emojiName: t.emojiName }) }),
            (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: t.name }) }),
            null != n && (0, l.jsx)(k, { children: n }),
        ],
    });
}
n(980504);
var es = n(750385),
    ea = n(378058),
    eo = n(885386),
    eu = n(994500),
    ec = n(287809),
    ed = n(427262);
function eh(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function em(e) {
    return `autocomplete-${e}-title`;
}
let ep = i.createContext(null);
class ef extends i.PureComponent {
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
                  id: eh(i) ?? void 0,
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
                  id: eh(i) ?? void 0,
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
class eg extends ef {
    renderContent() {
        let { text: e, description: t, badge: n } = this.props,
            i = (0, l.jsx)(T, { children: e });
        return (0, l.jsxs)(I, {
            children: [
                (0, l.jsx)(v, { children: null != n ? (0, l.jsxs)("div", { className: b.QN, children: [i, n] }) : i }),
                null != t ? (0, l.jsx)(k, { children: t }) : null,
            ],
        });
    }
}
function ex(e) {
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
function eE(e) {
    let { title: t, className: n, children: r } = e,
        a = i.useContext(ep);
    return (0, l.jsx)("div", {
        className: b.E3,
        children: (0, l.jsxs)(d.D, {
            id: em(a.id),
            className: s()(b.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, r],
        }),
    });
}
class eS extends ef {
    layoutClass = b.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, l.jsx)("div", { className: s()(e, b.yF) });
    }
}
class ey extends ef {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: i, guildId: r } = this.props,
            s = null == r ? eu.A.getNickname(e.id) : null;
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
                (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: t ?? s ?? ed.Ay.getName(e) }) }),
                (0, l.jsxs)(k, {
                    children: [
                        ed.Ay.getUserTag(e, { mode: "username", identifiable: i ? "never" : "always" }),
                        i || e.hasUniqueUsername()
                            ? null
                            : (0, l.jsxs)("span", { className: b.T, children: ["#", e.discriminator] }),
                    ],
                }),
            ],
        });
    }
}
class eC extends ef {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: i, colorStrings: r } = e,
            a = "dot" === E.Ay.roleStyle,
            o = "username" === E.Ay.roleStyle && (null != i || null != r),
            u = (0, en.hH)(n, e, r),
            c = null != u && o,
            { gradientStyle: d, gradientClassname: h } = (0, p.Wq)({
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
                            a && (0, l.jsx)(f.W, { className: b.m4, color: i, colors: u, tooltip: !1 }),
                            (0, l.jsxs)("span", {
                                className: s()({ [h]: c }),
                                style: m,
                                "data-text": c ? `@${e.name}` : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, l.jsx)(k, { children: L.intl.string(L.t["/91tbr"]) }),
            ],
        });
    }
}
class eA extends ef {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, l.jsxs)(I, {
            children: [
                (0, l.jsx)(v, {
                    children: (0, l.jsx)(T, { children: (0, l.jsx)(et.A, { node: e, showTooltip: !1 }) }),
                }),
                null != t ? (0, l.jsx)(k, { children: t }) : null,
            ],
        });
    }
}
class eb extends ef {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === Q.rbe.GUILD_CATEGORY ? g.FolderIcon : (0, F.gU)(e);
        return (0, l.jsxs)(I, {
            children: [
                null != n && (0, l.jsx)(N, { children: (0, l.jsx)(n, { className: b.Kk }) }),
                (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: (0, W.m1)(e, ec.default, eu.A) }) }),
                null != t ? (0, l.jsx)(k, { children: t.name }) : null,
            ],
        });
    }
}
class eI extends ef {
    renderContent() {
        let { command: e } = this.props;
        return (0, l.jsxs)(I, {
            children: [
                (0, l.jsx)(N, {
                    children: (0, l.jsx)(x.F, { size: "xs", color: "currentColor", className: b.Kk, colorClass: b.t4 }),
                }),
                (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: e.displayName }) }),
                (0, l.jsx)(k, { children: e.displayDescription }),
            ],
        });
    }
}
class ev extends ef {
    isSelectable() {
        return this.props.command.inputType !== S.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: i, selected: r } = this.props,
            { hovered: s } = this.state,
            a = this.isSelectable();
        return e.inputType === S.y$.PLACEHOLDER
            ? (0, l.jsx)(U.A, {})
            : (0, l.jsx)(V, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: s || (a && r),
                  section: i,
                  isSelectable: a,
              });
    }
}
class eN extends ef {
    layoutClass = s()(b.rT, b.Mf);
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            i = eo.Sf.getSetting(),
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
                                        size: $.EMOJI_URL_BASE_SIZE,
                                    })
                                  : e.url,
                      })
                    : (0, l.jsx)("span", { className: b.nT, children: e.surrogates }),
            s = null != n ? (0, l.jsx)(k, { children: n.name }) : null;
        return (0, l.jsxs)(I, {
            children: [
                (0, l.jsx)(N, { children: r }),
                (0, l.jsx)(v, { children: (0, l.jsxs)(T, { children: [t, e.name, t] }) }),
                s,
            ],
        });
    }
}
class eT extends ef {
    layoutClass = s()(b.rT, b.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: i, sticker: r } = this.props,
            { hovered: s } = this.state;
        return (
            (0, ea.FD)(r)
                ? (e = es.A.getStickerPack(r.pack_id)?.name)
                : (0, ea.Xw)(r) && (e = ei.A.getGuild(r.guild_id)?.name),
            (0, l.jsxs)(I, {
                children: [
                    (0, l.jsx)(N, { children: n(r, s || !0 === i) }),
                    (0, l.jsxs)(v, {
                        children: [
                            (0, l.jsx)(T, { children: r.name }),
                            null != t && (0, l.jsx)(j, { children: L.intl.format(L.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, l.jsx)(k, { children: e }),
                ],
            })
        );
    }
}
class ej extends ef {
    layoutClass = b.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, l.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class ek extends ef {
    renderContent() {
        return (0, l.jsx)(J, { emojis: this.props.emojis });
    }
}
class e_ extends ef {
    renderContent() {
        return (0, l.jsx)(er, { ...this.props });
    }
}
class eR extends ef {
    renderContent() {
        return (0, l.jsxs)(I, {
            children: [
                (0, l.jsx)(N, { children: (0, l.jsx)(Y.A, { game: this.props.game, iconClassName: b.Kk }) }),
                (0, l.jsx)(v, { children: (0, l.jsx)(T, { children: this.props.game.name }) }),
                (0, l.jsx)(ee.A, {
                    platforms: this.props.game.platformAvailability,
                    location: "game_mention_autocomplete",
                }),
            ],
        });
    }
}
class ew extends i.PureComponent {
    static Generic = eg;
    static Loading = ex;
    static Title = eE;
    static Divider = eS;
    static User = ey;
    static Role = eC;
    static Channel = eb;
    static Command = eI;
    static NewCommand = ev;
    static Emoji = eN;
    static GIFIntegration = ej;
    static Sticker = eT;
    static EmojiUpsell = ek;
    static Soundmoji = e_;
    static Game = eR;
    static Timestamp = eA;
    render() {
        let { children: e, className: t, innerClassName: n, id: r, ...a } = this.props;
        return i.Children.count(e) > 0
            ? (0, l.jsx)(ep.Provider, {
                  value: { id: r ?? "" },
                  children: (0, l.jsx)("div", {
                      className: s()(b.nx, t),
                      children: (0, l.jsx)("div", { className: s()(b.Fv, n), ...a, children: e }),
                  }),
              })
            : null;
    }
}
let eO = ew;
