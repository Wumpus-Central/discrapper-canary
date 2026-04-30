"use strict";
n.d(t, { Sz: () => eu, Ay: () => eb, aI: () => el });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(837381),
    c = n(939249),
    d = n(534514),
    _ = n(97808),
    f = n(778712),
    h = n(521100),
    p = n(545442),
    E = n(678708),
    m = n(88187),
    g = n(775602),
    A = n(392054),
    I = n(17928),
    T = n(990078),
    S = n(834730),
    N = n(81093);
let y = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", { className: a()(N.um, n), children: t });
    },
    C = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", { className: a()(N.Ov, n), children: t });
    },
    v = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", { className: a()(N.wq, n), children: t });
    },
    O = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)(S.E, {
            className: a()(n, N.hf),
            color: "interactive-text-active",
            variant: "text-md/normal",
            children: t,
        });
    },
    R = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)(S.E, {
            className: a()(n, N.p3),
            color: "interactive-text-default",
            variant: "text-xs/normal",
            children: t,
        });
    },
    b = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)(S.E, {
            className: a()(n, N.I0),
            color: "interactive-text-default",
            variant: "text-xs/normal",
            children: t,
        });
    };
var D = n(696451),
    L = n(632533);
function w(e) {
    let { name: t, className: n, state: r, isInline: s, onClick: o } = e,
        l = null;
    r?.isActive && !s
        ? (l = L.vu)
        : r?.lastValidationResult?.success === !1
          ? (l = L.z3)
          : r?.hasValue && !s && (l = L.hZ);
    let u = (0, i.jsx)(S.E, {
        variant: s ? "text-md/normal" : "text-sm/normal",
        color: "text-strong",
        className: a()(L.uK, { [L.mG]: s }, l, n),
        children: t + (s ? ":" : ""),
    });
    return null == o ? u : (0, i.jsx)(c.D, { className: L.vk, onClick: () => o(t), children: u });
}
var M = n(649671);
n(827669);
var P = n(375708),
    x = n(577332);
function U(e, t, n) {
    return (0, i.jsx)(w, { className: x.uK, name: e.displayName, state: t, onClick: n }, e.name);
}
function k(e) {
    let { command: t, optionStates: n, onOptionClick: s } = e,
        {
            requiredOptions: a,
            setOptionalOptions: o,
            unsetOptionalOptions: l,
        } = r.useMemo(() => {
            let e = t.options?.filter((e) => e.required) ?? [],
                i = t.options?.filter((e) => !e.required) ?? [];
            return {
                requiredOptions: e,
                setOptionalOptions: i.filter((e) => n?.[e.name]?.hasValue),
                unsetOptionalOptions: i.filter((e) => !n?.[e.name]?.hasValue),
            };
        }, [t.options, n]),
        u = (0, i.jsx)("div", {
            className: x.$2,
            children: l.map((e) => (0, i.jsx)(S.E, { variant: "text-sm/normal", children: e.displayName }, e.name)),
        }),
        c = a.map((e) => U(e, n?.[e.name], s)),
        _ =
            o.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(d.D, {
                              className: x.Ki,
                              variant: "heading-deprecated-12/semibold",
                              children: P.intl.string(P.t["5C107K"]),
                          }),
                          o.map((e) => U(e, n?.[e.name], s)),
                      ],
                  })
                : null,
        f =
            l.length > 0
                ? (0, i.jsx)(T.m, {
                      __unsupportedReactNodeAsText: u,
                      "aria-label": !1,
                      delay: 200,
                      children: (0, i.jsx)(S.E, {
                          className: x.kP,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === o.length
                                  ? P.intl.formatToPlainString(P.t["0mI72g"], { count: l.length })
                                  : P.intl.formatToPlainString(P.t.BP8N0K, { count: l.length }),
                      }),
                  })
                : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [c, null != _ || null != f ? (0, i.jsxs)("div", { className: x.gM, children: [_, f] }) : null],
    });
}
function G(e) {
    let t,
        {
            command: n,
            activeOptionName: s,
            channel: o,
            showOptions: l,
            showImage: u,
            optionStates: c,
            onOptionClick: d,
            section: _,
            isSelectable: f = !0,
        } = e,
        h = r.useMemo(() => n?.options?.find((e) => e.name === s), [s, n]),
        p = null != s ? c?.[s] : null;
    t = null != p && p.lastValidationResult?.success === !1 ? (p.lastValidationResult.error ?? "") : null;
    let E = u && null != _ ? (0, M.Rg)(_) : null,
        m = (0, I.bG)([D.Ay], () => {
            if (null != o.guild_id && _?.botId != null) return D.Ay.getMember(o.guild_id, _.botId)?.nick;
        });
    return (0, i.jsxs)("div", {
        className: a()(x.iE, f ? null : x.r9),
        children: [
            null != E ? (0, i.jsx)(E, { className: x.Sl, channel: o, section: _, width: 32, height: 32 }) : null,
            (0, i.jsxs)("div", {
                className: x.QR,
                children: [
                    (0, i.jsxs)("div", {
                        className: x.nY,
                        children: [
                            (0, i.jsx)(O, { className: x.DD, children: "/" + n.displayName }),
                            l ? (0, i.jsx)(k, { command: n, optionStates: c, onOptionClick: d }) : null,
                        ],
                    }),
                    (0, i.jsx)(R, {
                        className: a()(x.h_, null != t ? x.z3 : null),
                        children: t ?? h?.displayDescription ?? n.displayDescription,
                    }),
                ],
            }),
            (0, i.jsx)(b, { className: x.sP, children: m ?? _?.name }),
        ],
    });
}
var F = n(746388),
    V = n(47167),
    B = n(713654),
    H = n(688810),
    j = n(573435),
    Y = n(174459),
    W = n(486020),
    K = n(652215),
    z = n(307731),
    $ = n(788868),
    q = n(202606);
let Z = (e) => {
    let { emojis: t } = e,
        { analyticsLocations: n } = (0, H.Ay)();
    r.useEffect(() => {
        Y.default.track(K.HAw.PREMIUM_UPSELL_VIEWED, { type: $.e.EMOJI_AUTOCOMPLETE_INLINE, location_stack: n });
    }, [n]);
    let s = (0, i.jsx)("div", {
        className: q.gm,
        children: t.slice(0, 3).map((e, t) => {
            if (null == e.id) return null;
            let n = (0, i.jsx)(
                "div",
                {
                    className: q.rT,
                    children: (0, i.jsx)("img", {
                        alt: e.name,
                        className: q.Zg,
                        src: W.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: z.EMOJI_URL_BASE_SIZE }),
                    }),
                },
                e.id,
            );
            return 2 === t
                ? n
                : (0, i.jsx)(
                      j.Ay,
                      { className: q.j3, mask: j.Ay.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI, children: n },
                      e.id,
                  );
        }),
    });
    return (0, i.jsxs)(y, {
        className: q.UX,
        children: [
            (0, i.jsx)(C, { children: (0, i.jsx)(O, { children: P.intl.format(P.t.uEky42, { count: t.length }) }) }),
            (0, i.jsx)(b, { children: s }),
        ],
    });
};
var X = n(785562),
    Q = n(967144),
    J = n(565645),
    ee = n(71393);
function et(e) {
    let { sound: t } = e,
        n = (0, I.bG)([ee.A], () => ("0" === t.guildId ? P.intl.string(P.t.Rtvk9X) : ee.A.getGuild(t.guildId)?.name));
    return (0, i.jsxs)(y, {
        children: [
            (null != t.emojiId || null != t.emojiName) &&
                (0, i.jsx)(v, { children: (0, i.jsx)(J.A, { emojiId: t.emojiId, emojiName: t.emojiName }) }),
            (0, i.jsx)(C, { children: (0, i.jsx)(O, { children: t.name }) }),
            null != n && (0, i.jsx)(b, { children: n }),
        ],
    });
}
n(980504);
var en = n(750385),
    ei = n(68935),
    er = n(885386),
    es = n(994500),
    ea = n(287809),
    eo = n(427262);
function el(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function eu(e) {
    return `autocomplete-${e}-title`;
}
let ec = r.createContext(null);
class ed extends r.PureComponent {
    selectable = !0;
    layoutClass = N.rT;
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
            props: { className: n, index: r, selected: s },
        } = this;
        return this.isSelectable()
            ? (0, i.jsx)(c.D, {
                  ...e,
                  className: a()(N.vk, n, t),
                  id: el(r) ?? void 0,
                  onClick: this.handleClick,
                  onMouseMove: () => {
                      this.setState({ hovered: !0 }), this.handleMouseEnter();
                  },
                  onMouseLeave: () => this.setState({ hovered: !1 }),
                  role: "option",
                  "aria-selected": s,
                  children: (0, i.jsx)("div", { className: N.E3, children: this.renderContent() }),
              })
            : (0, i.jsx)("div", {
                  className: a()(N.vk, n, t),
                  id: el(r) ?? void 0,
                  role: "none",
                  children: (0, i.jsx)("div", { className: N.E3, children: this.renderContent() }),
              });
    }
    render() {
        let { index: e } = this.props;
        return this.isSelectable()
            ? (0, i.jsx)(u.tG, { id: `${e}`, children: (e) => this.renderClickable(e) })
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
class e_ extends ed {
    renderContent() {
        let { text: e, description: t } = this.props;
        return (0, i.jsxs)(y, {
            children: [
                (0, i.jsx)(C, { children: (0, i.jsx)(O, { children: e }) }),
                null != t ? (0, i.jsx)(b, { children: t }) : null,
            ],
        });
    }
}
function ef(e) {
    let t = r.useMemo(() => l().random(60, 120), []);
    return (0, i.jsx)("div", {
        className: N.E3,
        "aria-busy": !0,
        children: (0, i.jsx)(y, {
            children: (0, i.jsx)(C, {
                children: (0, i.jsx)(O, { children: (0, i.jsx)("div", { className: N.M, style: { width: t } }) }),
            }),
        }),
    });
}
function eh(e) {
    let { title: t, className: n, children: s } = e,
        o = r.useContext(ec);
    return (0, i.jsx)("div", {
        className: N.E3,
        children: (0, i.jsxs)(d.D, {
            id: eu(o.id),
            className: a()(N.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, s],
        }),
    });
}
class ep extends ed {
    layoutClass = N.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, i.jsx)("div", { className: a()(e, N.yF) });
    }
}
class eE extends ed {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: r, guildId: s } = this.props,
            a = null == s ? es.A.getNickname(e.id) : null;
        return (0, i.jsxs)(y, {
            children: [
                (0, i.jsx)(v, {
                    children: (0, i.jsx)(_.eu, {
                        size: f._3.SIZE_24,
                        src: e.getAvatarURL(s, 24),
                        "aria-hidden": !0,
                        status: n,
                    }),
                }),
                (0, i.jsx)(C, { children: (0, i.jsx)(O, { children: t ?? a ?? eo.Ay.getName(e) }) }),
                (0, i.jsxs)(b, {
                    children: [
                        eo.Ay.getUserTag(e, { mode: "username", identifiable: r ? "never" : "always" }),
                        r || e.hasUniqueUsername()
                            ? null
                            : (0, i.jsxs)("span", { className: N.T, children: ["#", e.discriminator] }),
                    ],
                }),
            ],
        });
    }
}
class em extends ed {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: r, colorStrings: s } = e,
            o = "dot" === g.A.roleStyle,
            l = "username" === g.A.roleStyle && (null != r || null != s),
            u = (0, Q.hH)(n, e, s),
            c = null != u && l,
            { gradientStyle: d, gradientClassname: _ } = (0, h.Wq)({
                colorStrings: s,
                useReducedMotion: g.A.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            f = l ? { ...(c ? d : { color: null != r ? r : void 0 }) } : void 0;
        return (0, i.jsxs)(y, {
            children: [
                (0, i.jsx)(C, {
                    children: (0, i.jsxs)(O, {
                        children: [
                            o && (0, i.jsx)(p.W, { className: N.m4, color: r, colors: u, tooltip: !1 }),
                            (0, i.jsxs)("span", {
                                className: a()({ [_]: c }),
                                style: f,
                                "data-text": c ? `@${e.name}` : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, i.jsx)(b, { children: P.intl.string(P.t["/91tbr"]) }),
            ],
        });
    }
}
class eg extends ed {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, i.jsxs)(y, {
            children: [
                (0, i.jsx)(C, { children: (0, i.jsx)(O, { children: (0, i.jsx)(X.A, { node: e, showTooltip: !1 }) }) }),
                null != t ? (0, i.jsx)(b, { children: t }) : null,
            ],
        });
    }
}
class eA extends ed {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === K.rbe.GUILD_CATEGORY ? E.s : (0, B.gU)(e);
        return (0, i.jsxs)(y, {
            children: [
                null != n && (0, i.jsx)(v, { children: (0, i.jsx)(n, { className: N.Kk }) }),
                (0, i.jsx)(C, { children: (0, i.jsx)(O, { children: (0, V.m1)(e, ea.default, es.A) }) }),
                null != t ? (0, i.jsx)(b, { children: t.name }) : null,
            ],
        });
    }
}
class eI extends ed {
    renderContent() {
        let { command: e } = this.props;
        return (0, i.jsxs)(y, {
            children: [
                (0, i.jsx)(v, {
                    children: (0, i.jsx)(m.F, { size: "xs", color: "currentColor", className: N.Kk, colorClass: N.t4 }),
                }),
                (0, i.jsx)(C, { children: (0, i.jsx)(O, { children: e.displayName }) }),
                (0, i.jsx)(b, { children: e.displayDescription }),
            ],
        });
    }
}
class eT extends ed {
    isSelectable() {
        return this.props.command.inputType !== A.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: r, selected: s } = this.props,
            { hovered: a } = this.state,
            o = this.isSelectable();
        return e.inputType === A.y$.PLACEHOLDER
            ? (0, i.jsx)(F.A, {})
            : (0, i.jsx)(G, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: a || (o && s),
                  section: r,
                  isSelectable: o,
              });
    }
}
class eS extends ed {
    layoutClass = a()(N.rT, N.Mf);
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            r = er.Sf.getSetting(),
            s =
                null != e.id || "" !== e.url
                    ? (0, i.jsx)("img", {
                          alt: "",
                          className: N.mp,
                          src:
                              null != e.id
                                  ? W.Ay.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && r,
                                        size: z.EMOJI_URL_BASE_SIZE,
                                    })
                                  : e.url,
                      })
                    : (0, i.jsx)("span", { className: N.nT, children: e.surrogates }),
            a = null != n ? (0, i.jsx)(b, { children: n.name }) : null;
        return (0, i.jsxs)(y, {
            children: [
                (0, i.jsx)(v, { children: s }),
                (0, i.jsx)(C, { children: (0, i.jsxs)(O, { children: [t, e.name, t] }) }),
                a,
            ],
        });
    }
}
class eN extends ed {
    layoutClass = a()(N.rT, N.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: r, sticker: s } = this.props,
            { hovered: a } = this.state;
        return (
            (0, ei.FD)(s)
                ? (e = en.A.getStickerPack(s.pack_id)?.name)
                : (0, ei.Xw)(s) && (e = ee.A.getGuild(s.guild_id)?.name),
            (0, i.jsxs)(y, {
                children: [
                    (0, i.jsx)(v, { children: n(s, a || !0 === r) }),
                    (0, i.jsxs)(C, {
                        children: [
                            (0, i.jsx)(O, { children: s.name }),
                            null != t && (0, i.jsx)(R, { children: P.intl.format(P.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, i.jsx)(b, { children: e }),
                ],
            })
        );
    }
}
class ey extends ed {
    layoutClass = N.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, i.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class eC extends ed {
    renderContent() {
        return (0, i.jsx)(Z, { emojis: this.props.emojis });
    }
}
class ev extends ed {
    renderContent() {
        return (0, i.jsx)(et, { ...this.props });
    }
}
class eO extends ed {
    renderContent() {
        let { game: e } = this.props,
            t = (0, i.jsx)("img", {
                alt: "",
                className: N.Kk,
                src: W.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 32 }),
            });
        return (0, i.jsxs)(y, {
            children: [
                (0, i.jsx)(v, { children: t }),
                (0, i.jsx)(C, { children: (0, i.jsx)(O, { children: e.name }) }),
            ],
        });
    }
}
class eR extends r.PureComponent {
    static Generic = e_;
    static Loading = ef;
    static Title = eh;
    static Divider = ep;
    static User = eE;
    static Role = em;
    static Channel = eA;
    static Command = eI;
    static NewCommand = eT;
    static Emoji = eS;
    static GIFIntegration = ey;
    static Sticker = eN;
    static EmojiUpsell = eC;
    static Soundmoji = ev;
    static Game = eO;
    static Timestamp = eg;
    render() {
        let { children: e, className: t, innerClassName: n, id: s, ...o } = this.props;
        return r.Children.count(e) > 0
            ? (0, i.jsx)(ec.Provider, {
                  value: { id: s ?? "" },
                  children: (0, i.jsx)("div", {
                      className: a()(N.nx, t),
                      children: (0, i.jsx)("div", { className: a()(N.Fv, n), ...o, children: e }),
                  }),
              })
            : null;
    }
}
let eb = eR;
