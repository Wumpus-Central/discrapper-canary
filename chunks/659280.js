"use strict";
n.d(t, { Sz: () => ed, Ay: () => eD, aI: () => el });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    d = n(837381),
    _ = n(939249),
    u = n(534514),
    c = n(97808),
    E = n(778712),
    h = n(36075),
    m = n(545442),
    f = n(678708),
    g = n(88187),
    p = n(775602),
    A = n(392054),
    I = n(17928),
    T = n(990078),
    S = n(834730),
    N = n(81093);
let C = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", { className: a()(N.um, n), children: t });
    },
    R = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", { className: a()(N.Ov, n), children: t });
    },
    O = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", { className: a()(N.wq, n), children: t });
    },
    y = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)(S.E, {
            className: a()(n, N.hf),
            color: "interactive-text-active",
            variant: "text-md/normal",
            children: t,
        });
    },
    v = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)(S.E, {
            className: a()(n, N.p3),
            color: "interactive-text-default",
            variant: "text-xs/normal",
            children: t,
        });
    },
    D = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)(S.E, {
            className: a()(n, N.I0),
            color: "interactive-text-default",
            variant: "text-xs/normal",
            children: t,
        });
    };
var L = n(696451),
    b = n(632533);
function w(e) {
    let { name: t, className: n, state: r, isInline: s, onClick: o } = e,
        l = null;
    r?.isActive && !s
        ? (l = b.vu)
        : r?.lastValidationResult?.success === !1
          ? (l = b.z3)
          : r?.hasValue && !s && (l = b.hZ);
    let d = (0, i.jsx)(S.E, {
        variant: s ? "text-md/normal" : "text-sm/normal",
        color: "text-strong",
        className: a()(b.uK, { [b.mG]: s }, l, n),
        children: t + (s ? ":" : ""),
    });
    return null == o ? d : (0, i.jsx)(_.D, { className: b.vk, onClick: () => o(t), children: d });
}
var P = n(649671);
n(827669);
var k = n(985018),
    M = n(577332);
function U(e, t, n) {
    return (0, i.jsx)(w, { className: M.uK, name: e.displayName, state: t, onClick: n }, e.name);
}
function x(e) {
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
        d = (0, i.jsx)("div", {
            className: M.$2,
            children: l.map((e) => (0, i.jsx)(S.E, { variant: "text-sm/normal", children: e.displayName }, e.name)),
        }),
        _ = a.map((e) => U(e, n?.[e.name], s)),
        c =
            o.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.D, {
                              className: M.Ki,
                              variant: "heading-deprecated-12/semibold",
                              children: k.intl.string(k.t["5C107K"]),
                          }),
                          o.map((e) => U(e, n?.[e.name], s)),
                      ],
                  })
                : null,
        E =
            l.length > 0
                ? (0, i.jsx)(T.m, {
                      __unsupportedReactNodeAsText: d,
                      "aria-label": !1,
                      delay: 200,
                      children: (0, i.jsx)(S.E, {
                          className: M.kP,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === o.length
                                  ? k.intl.formatToPlainString(k.t["0mI72g"], { count: l.length })
                                  : k.intl.formatToPlainString(k.t.BP8N0K, { count: l.length }),
                      }),
                  })
                : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [_, null != c || null != E ? (0, i.jsxs)("div", { className: M.gM, children: [c, E] }) : null],
    });
}
function G(e) {
    let t,
        {
            command: n,
            activeOptionName: s,
            channel: o,
            showOptions: l,
            showImage: d,
            optionStates: _,
            onOptionClick: u,
            section: c,
            isSelectable: E = !0,
        } = e,
        h = r.useMemo(() => n?.options?.find((e) => e.name === s), [s, n]),
        m = null != s ? _?.[s] : null;
    t = null != m && m.lastValidationResult?.success === !1 ? (m.lastValidationResult.error ?? "") : null;
    let f = d && null != c ? (0, P.Rg)(c) : null,
        g = (0, I.bG)([L.Ay], () => {
            if (null != o.guild_id && c?.botId != null) return L.Ay.getMember(o.guild_id, c.botId)?.nick;
        });
    return (0, i.jsxs)("div", {
        className: a()(M.iE, E ? null : M.r9),
        children: [
            null != f ? (0, i.jsx)(f, { className: M.Sl, channel: o, section: c, width: 32, height: 32 }) : null,
            (0, i.jsxs)("div", {
                className: M.QR,
                children: [
                    (0, i.jsxs)("div", {
                        className: M.nY,
                        children: [
                            (0, i.jsx)(y, { className: M.DD, children: "/" + n.displayName }),
                            l ? (0, i.jsx)(x, { command: n, optionStates: _, onOptionClick: u }) : null,
                        ],
                    }),
                    (0, i.jsx)(v, {
                        className: a()(M.h_, null != t ? M.z3 : null),
                        children: t ?? h?.displayDescription ?? n.displayDescription,
                    }),
                ],
            }),
            (0, i.jsx)(D, { className: M.sP, children: g ?? c?.name }),
        ],
    });
}
var V = n(746388),
    F = n(47167),
    B = n(713654),
    H = n(688810),
    j = n(573435),
    W = n(954571),
    Y = n(486020),
    K = n(652215),
    z = n(307731),
    $ = n(788868),
    q = n(202606);
let X = (e) => {
    let { emojis: t } = e,
        { analyticsLocations: n } = (0, H.Ay)();
    r.useEffect(() => {
        W.default.track(K.HAw.PREMIUM_UPSELL_VIEWED, { type: $.e.EMOJI_AUTOCOMPLETE_INLINE, location_stack: n });
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
                        src: Y.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: z.EMOJI_URL_BASE_SIZE }),
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
    return (0, i.jsxs)(C, {
        className: q.UX,
        children: [
            (0, i.jsx)(R, { children: (0, i.jsx)(y, { children: k.intl.format(k.t.uEky42, { count: t.length }) }) }),
            (0, i.jsx)(D, { children: s }),
        ],
    });
};
var Z = n(785562),
    Q = n(967144),
    J = n(565645),
    ee = n(71393);
function et(e) {
    let { sound: t } = e,
        n = (0, I.bG)([ee.A], () => ("0" === t.guildId ? k.intl.string(k.t.Rtvk9X) : ee.A.getGuild(t.guildId)?.name));
    return (0, i.jsxs)(C, {
        children: [
            (null != t.emojiId || null != t.emojiName) &&
                (0, i.jsx)(O, { children: (0, i.jsx)(J.A, { emojiId: t.emojiId, emojiName: t.emojiName }) }),
            (0, i.jsx)(R, { children: (0, i.jsx)(y, { children: t.name }) }),
            null != n && (0, i.jsx)(D, { children: n }),
        ],
    });
}
n(980504);
var en = n(750385),
    ei = n(68935),
    er = n(253932),
    es = n(994500),
    ea = n(287809),
    eo = n(427262);
function el(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function ed(e) {
    return `autocomplete-${e}-title`;
}
let e_ = r.createContext(null);
class eu extends r.PureComponent {
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
            } = this,
            o = this.isSelectable();
        return (0, i.jsx)(_.D, {
            ...e,
            className: a()(N.vk, n, t),
            id: el(r) ?? void 0,
            onClick: o ? this.handleClick : void 0,
            onMouseMove: o
                ? () => {
                      this.setState({ hovered: !0 }), this.handleMouseEnter();
                  }
                : void 0,
            onMouseLeave: o ? () => this.setState({ hovered: !1 }) : void 0,
            role: "option",
            "aria-disabled": !o,
            "aria-selected": o && s,
            children: (0, i.jsx)("div", { className: N.E3, children: this.renderContent() }),
        });
    }
    render() {
        let { index: e } = this.props;
        return this.isSelectable()
            ? (0, i.jsx)(d.tG, { id: `${e}`, children: (e) => this.renderClickable(e) })
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
class ec extends eu {
    renderContent() {
        let { text: e, description: t } = this.props;
        return (0, i.jsxs)(C, {
            children: [
                (0, i.jsx)(R, { children: (0, i.jsx)(y, { children: e }) }),
                null != t ? (0, i.jsx)(D, { children: t }) : null,
            ],
        });
    }
}
function eE(e) {
    let t = r.useMemo(() => l().random(60, 120), []);
    return (0, i.jsx)("div", {
        className: N.E3,
        "aria-busy": !0,
        children: (0, i.jsx)(C, {
            children: (0, i.jsx)(R, {
                children: (0, i.jsx)(y, { children: (0, i.jsx)("div", { className: N.M, style: { width: t } }) }),
            }),
        }),
    });
}
function eh(e) {
    let { title: t, className: n, children: s } = e,
        o = r.useContext(e_);
    return (0, i.jsx)("div", {
        className: N.E3,
        children: (0, i.jsxs)(u.D, {
            id: ed(o.id),
            className: a()(N.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, s],
        }),
    });
}
class em extends eu {
    layoutClass = N.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, i.jsx)("div", { className: a()(e, N.yF) });
    }
}
class ef extends eu {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: r, guildId: s } = this.props,
            a = null == s ? es.A.getNickname(e.id) : null;
        return (0, i.jsxs)(C, {
            children: [
                (0, i.jsx)(O, {
                    children: (0, i.jsx)(c.eu, {
                        size: E._3.SIZE_24,
                        src: e.getAvatarURL(s, 24),
                        "aria-hidden": !0,
                        status: n,
                    }),
                }),
                (0, i.jsx)(R, { children: (0, i.jsx)(y, { children: t ?? a ?? eo.Ay.getName(e) }) }),
                (0, i.jsxs)(D, {
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
class eg extends eu {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: r, colorStrings: s } = e,
            o = "dot" === p.A.roleStyle,
            l = "username" === p.A.roleStyle && (null != r || null != s),
            d = (0, Q.hH)(n, e, s),
            _ = null != d && l,
            { gradientStyle: u, gradientClassname: c } = (0, h.Wq)({
                colorStrings: s,
                useReducedMotion: p.A.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            E = l ? { ...(_ ? u : { color: null != r ? r : void 0 }) } : void 0;
        return (0, i.jsxs)(C, {
            children: [
                (0, i.jsx)(R, {
                    children: (0, i.jsxs)(y, {
                        children: [
                            o && (0, i.jsx)(m.W, { className: N.m4, color: r, colors: d, tooltip: !1 }),
                            (0, i.jsxs)("span", {
                                className: a()({ [c]: _ }),
                                style: E,
                                "data-text": _ ? `@${e.name}` : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, i.jsx)(D, { children: k.intl.string(k.t["/91tbr"]) }),
            ],
        });
    }
}
class ep extends eu {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, i.jsxs)(C, {
            children: [
                (0, i.jsx)(R, { children: (0, i.jsx)(y, { children: (0, i.jsx)(Z.A, { node: e, showTooltip: !1 }) }) }),
                null != t ? (0, i.jsx)(D, { children: t }) : null,
            ],
        });
    }
}
class eA extends eu {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === K.rbe.GUILD_CATEGORY ? f.s : (0, B.gU)(e);
        return (0, i.jsxs)(C, {
            children: [
                null != n && (0, i.jsx)(O, { children: (0, i.jsx)(n, { className: N.Kk }) }),
                (0, i.jsx)(R, { children: (0, i.jsx)(y, { children: (0, F.m1)(e, ea.default, es.A) }) }),
                null != t ? (0, i.jsx)(D, { children: t.name }) : null,
            ],
        });
    }
}
class eI extends eu {
    renderContent() {
        let { command: e } = this.props;
        return (0, i.jsxs)(C, {
            children: [
                (0, i.jsx)(O, {
                    children: (0, i.jsx)(g.F, { size: "xs", color: "currentColor", className: N.Kk, colorClass: N.t4 }),
                }),
                (0, i.jsx)(R, { children: (0, i.jsx)(y, { children: e.displayName }) }),
                (0, i.jsx)(D, { children: e.displayDescription }),
            ],
        });
    }
}
class eT extends eu {
    isSelectable() {
        return this.props.command.inputType !== A.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: r, selected: s } = this.props,
            { hovered: a } = this.state,
            o = this.isSelectable();
        return e.inputType === A.y$.PLACEHOLDER
            ? (0, i.jsx)(V.A, {})
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
class eS extends eu {
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
                                  ? Y.Ay.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && r,
                                        size: z.EMOJI_URL_BASE_SIZE,
                                    })
                                  : e.url,
                      })
                    : (0, i.jsx)("span", { className: N.nT, children: e.surrogates }),
            a = null != n ? (0, i.jsx)(D, { children: n.name }) : null;
        return (0, i.jsxs)(C, {
            children: [
                (0, i.jsx)(O, { children: s }),
                (0, i.jsx)(R, { children: (0, i.jsxs)(y, { children: [t, e.name, t] }) }),
                a,
            ],
        });
    }
}
class eN extends eu {
    layoutClass = a()(N.rT, N.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: r, sticker: s } = this.props,
            { hovered: a } = this.state;
        return (
            (0, ei.FD)(s)
                ? (e = en.A.getStickerPack(s.pack_id)?.name)
                : (0, ei.Xw)(s) && (e = ee.A.getGuild(s.guild_id)?.name),
            (0, i.jsxs)(C, {
                children: [
                    (0, i.jsx)(O, { children: n(s, a || !0 === r) }),
                    (0, i.jsxs)(R, {
                        children: [
                            (0, i.jsx)(y, { children: s.name }),
                            null != t && (0, i.jsx)(v, { children: k.intl.format(k.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, i.jsx)(D, { children: e }),
                ],
            })
        );
    }
}
class eC extends eu {
    layoutClass = N.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, i.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class eR extends eu {
    renderContent() {
        return (0, i.jsx)(X, { emojis: this.props.emojis });
    }
}
class eO extends eu {
    renderContent() {
        return (0, i.jsx)(et, { ...this.props });
    }
}
class ey extends eu {
    renderContent() {
        let { game: e } = this.props,
            t = (0, i.jsx)("img", {
                alt: "",
                className: N.Kk,
                src: Y.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 32 }),
            });
        return (0, i.jsxs)(C, {
            children: [
                (0, i.jsx)(O, { children: t }),
                (0, i.jsx)(R, { children: (0, i.jsx)(y, { children: e.name }) }),
            ],
        });
    }
}
class ev extends r.PureComponent {
    static Generic = ec;
    static Loading = eE;
    static Title = eh;
    static Divider = em;
    static User = ef;
    static Role = eg;
    static Channel = eA;
    static Command = eI;
    static NewCommand = eT;
    static Emoji = eS;
    static GIFIntegration = eC;
    static Sticker = eN;
    static EmojiUpsell = eR;
    static Soundmoji = eO;
    static Game = ey;
    static Timestamp = ep;
    render() {
        let { children: e, className: t, innerClassName: n, id: s, ...o } = this.props;
        return r.Children.count(e) > 0
            ? (0, i.jsx)(e_.Provider, {
                  value: { id: s ?? "" },
                  children: (0, i.jsx)("div", {
                      className: a()(N.nx, t),
                      children: (0, i.jsx)("div", { className: a()(N.Fv, n), ...o, children: e }),
                  }),
              })
            : null;
    }
}
let eD = ev;
