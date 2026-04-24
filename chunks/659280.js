"use strict";
n.d(t, { Sz: () => ec, Ay: () => eT, aI: () => eo });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(837381),
    u = n(939249),
    d = n(534514),
    h = n(97808),
    m = n(778712),
    p = n(36075),
    f = n(545442),
    g = n(678708),
    _ = n(88187),
    x = n(775602),
    C = n(392054),
    A = n(17928),
    E = n(990078),
    I = n(834730),
    v = n(81093);
let y = (e) => {
        let { children: t, className: n } = e;
        return (0, l.jsx)("div", { className: a()(v.um, n), children: t });
    },
    b = (e) => {
        let { children: t, className: n } = e;
        return (0, l.jsx)("div", { className: a()(v.Ov, n), children: t });
    },
    S = (e) => {
        let { children: t, className: n } = e;
        return (0, l.jsx)("div", { className: a()(v.wq, n), children: t });
    },
    N = (e) => {
        let { children: t, className: n } = e;
        return (0, l.jsx)(I.E, {
            className: a()(n, v.hf),
            color: "interactive-text-active",
            variant: "text-md/normal",
            children: t,
        });
    },
    j = (e) => {
        let { children: t, className: n } = e;
        return (0, l.jsx)(I.E, {
            className: a()(n, v.p3),
            color: "interactive-text-default",
            variant: "text-xs/normal",
            children: t,
        });
    },
    T = (e) => {
        let { children: t, className: n } = e;
        return (0, l.jsx)(I.E, {
            className: a()(n, v.I0),
            color: "interactive-text-default",
            variant: "text-xs/normal",
            children: t,
        });
    };
var w = n(696451),
    R = n(632533);
function L(e) {
    let { name: t, className: n, state: i, isInline: s, onClick: r } = e,
        o = null;
    i?.isActive && !s
        ? (o = R.vu)
        : i?.lastValidationResult?.success === !1
          ? (o = R.z3)
          : i?.hasValue && !s && (o = R.hZ);
    let c = (0, l.jsx)(I.E, {
        variant: s ? "text-md/normal" : "text-sm/normal",
        color: "text-strong",
        className: a()(R.uK, { [R.mG]: s }, o, n),
        children: t + (s ? ":" : ""),
    });
    return null == r ? c : (0, l.jsx)(u.D, { className: R.vk, onClick: () => r(t), children: c });
}
var k = n(649671);
n(827669);
var M = n(985018),
    O = n(577332);
function P(e, t, n) {
    return (0, l.jsx)(L, { className: O.uK, name: e.displayName, state: t, onClick: n }, e.name);
}
function D(e) {
    let { command: t, optionStates: n, onOptionClick: s } = e,
        {
            requiredOptions: a,
            setOptionalOptions: r,
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
        c = (0, l.jsx)("div", {
            className: O.$2,
            children: o.map((e) => (0, l.jsx)(I.E, { variant: "text-sm/normal", children: e.displayName }, e.name)),
        }),
        u = a.map((e) => P(e, n?.[e.name], s)),
        h =
            r.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(d.D, {
                              className: O.Ki,
                              variant: "heading-deprecated-12/semibold",
                              children: M.intl.string(M.t["5C107K"]),
                          }),
                          r.map((e) => P(e, n?.[e.name], s)),
                      ],
                  })
                : null,
        m =
            o.length > 0
                ? (0, l.jsx)(E.m, {
                      __unsupportedReactNodeAsText: c,
                      "aria-label": !1,
                      delay: 200,
                      children: (0, l.jsx)(I.E, {
                          className: O.kP,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === r.length
                                  ? M.intl.formatToPlainString(M.t["0mI72g"], { count: o.length })
                                  : M.intl.formatToPlainString(M.t.BP8N0K, { count: o.length }),
                      }),
                  })
                : null;
    return (0, l.jsxs)(l.Fragment, {
        children: [u, null != h || null != m ? (0, l.jsxs)("div", { className: O.gM, children: [h, m] }) : null],
    });
}
function U(e) {
    let t,
        {
            command: n,
            activeOptionName: s,
            channel: r,
            showOptions: o,
            showImage: c,
            optionStates: u,
            onOptionClick: d,
            section: h,
            isSelectable: m = !0,
        } = e,
        p = i.useMemo(() => n?.options?.find((e) => e.name === s), [s, n]),
        f = null != s ? u?.[s] : null;
    t = null != f && f.lastValidationResult?.success === !1 ? (f.lastValidationResult.error ?? "") : null;
    let g = c && null != h ? (0, k.Rg)(h) : null,
        _ = (0, A.bG)([w.Ay], () => {
            if (null != r.guild_id && h?.botId != null) return w.Ay.getMember(r.guild_id, h.botId)?.nick;
        });
    return (0, l.jsxs)("div", {
        className: a()(O.iE, m ? null : O.r9),
        children: [
            null != g ? (0, l.jsx)(g, { className: O.Sl, channel: r, section: h, width: 32, height: 32 }) : null,
            (0, l.jsxs)("div", {
                className: O.QR,
                children: [
                    (0, l.jsxs)("div", {
                        className: O.nY,
                        children: [
                            (0, l.jsx)(N, { className: O.DD, children: "/" + n.displayName }),
                            o ? (0, l.jsx)(D, { command: n, optionStates: u, onOptionClick: d }) : null,
                        ],
                    }),
                    (0, l.jsx)(j, {
                        className: a()(O.h_, null != t ? O.z3 : null),
                        children: t ?? p?.displayDescription ?? n.displayDescription,
                    }),
                ],
            }),
            (0, l.jsx)(T, { className: O.sP, children: _ ?? h?.name }),
        ],
    });
}
var V = n(746388),
    G = n(47167),
    F = n(713654),
    B = n(688810),
    H = n(573435),
    W = n(954571),
    K = n(486020),
    z = n(652215),
    Z = n(307731),
    q = n(788868),
    J = n(202606);
let Y = (e) => {
    let { emojis: t } = e,
        { analyticsLocations: n } = (0, B.Ay)();
    i.useEffect(() => {
        W.default.track(z.HAw.PREMIUM_UPSELL_VIEWED, { type: q.e.EMOJI_AUTOCOMPLETE_INLINE, location_stack: n });
    }, [n]);
    let s = (0, l.jsx)("div", {
        className: J.gm,
        children: t.slice(0, 3).map((e, t) => {
            if (null == e.id) return null;
            let n = (0, l.jsx)(
                "div",
                {
                    className: J.rT,
                    children: (0, l.jsx)("img", {
                        alt: e.name,
                        className: J.Zg,
                        src: K.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: Z.EMOJI_URL_BASE_SIZE }),
                    }),
                },
                e.id,
            );
            return 2 === t
                ? n
                : (0, l.jsx)(
                      H.Ay,
                      { className: J.j3, mask: H.Ay.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI, children: n },
                      e.id,
                  );
        }),
    });
    return (0, l.jsxs)(y, {
        className: J.UX,
        children: [
            (0, l.jsx)(b, { children: (0, l.jsx)(N, { children: M.intl.format(M.t.uEky42, { count: t.length }) }) }),
            (0, l.jsx)(T, { children: s }),
        ],
    });
};
var X = n(785562),
    $ = n(967144),
    Q = n(565645),
    ee = n(71393);
function et(e) {
    let { sound: t } = e,
        n = (0, A.bG)([ee.A], () => ("0" === t.guildId ? M.intl.string(M.t.Rtvk9X) : ee.A.getGuild(t.guildId)?.name));
    return (0, l.jsxs)(y, {
        children: [
            (null != t.emojiId || null != t.emojiName) &&
                (0, l.jsx)(S, { children: (0, l.jsx)(Q.A, { emojiId: t.emojiId, emojiName: t.emojiName }) }),
            (0, l.jsx)(b, { children: (0, l.jsx)(N, { children: t.name }) }),
            null != n && (0, l.jsx)(T, { children: n }),
        ],
    });
}
n(980504);
var en = n(750385),
    el = n(68935),
    ei = n(253932),
    es = n(994500),
    ea = n(287809),
    er = n(427262);
function eo(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function ec(e) {
    return `autocomplete-${e}-title`;
}
let eu = i.createContext(null);
class ed extends i.PureComponent {
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
            } = this,
            r = this.isSelectable();
        return (0, l.jsx)(u.D, {
            ...e,
            className: a()(v.vk, n, t),
            id: eo(i) ?? void 0,
            onClick: r ? this.handleClick : void 0,
            onMouseMove: r
                ? () => {
                      this.setState({ hovered: !0 }), this.handleMouseEnter();
                  }
                : void 0,
            onMouseLeave: r ? () => this.setState({ hovered: !1 }) : void 0,
            role: "option",
            "aria-disabled": !r,
            "aria-selected": r && s,
            children: (0, l.jsx)("div", { className: v.E3, children: this.renderContent() }),
        });
    }
    render() {
        let { index: e } = this.props;
        return this.isSelectable()
            ? (0, l.jsx)(c.tG, { id: `${e}`, children: (e) => this.renderClickable(e) })
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
class eh extends ed {
    renderContent() {
        let { text: e, description: t } = this.props;
        return (0, l.jsxs)(y, {
            children: [
                (0, l.jsx)(b, { children: (0, l.jsx)(N, { children: e }) }),
                null != t ? (0, l.jsx)(T, { children: t }) : null,
            ],
        });
    }
}
function em(e) {
    let t = i.useMemo(() => o().random(60, 120), []);
    return (0, l.jsx)("div", {
        className: v.E3,
        "aria-busy": !0,
        children: (0, l.jsx)(y, {
            children: (0, l.jsx)(b, {
                children: (0, l.jsx)(N, { children: (0, l.jsx)("div", { className: v.M, style: { width: t } }) }),
            }),
        }),
    });
}
function ep(e) {
    let { title: t, className: n, children: s } = e,
        r = i.useContext(eu);
    return (0, l.jsx)("div", {
        className: v.E3,
        children: (0, l.jsxs)(d.D, {
            id: ec(r.id),
            className: a()(v.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, s],
        }),
    });
}
class ef extends ed {
    layoutClass = v.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, l.jsx)("div", { className: a()(e, v.yF) });
    }
}
class eg extends ed {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: i, guildId: s } = this.props,
            a = null == s ? es.A.getNickname(e.id) : null;
        return (0, l.jsxs)(y, {
            children: [
                (0, l.jsx)(S, {
                    children: (0, l.jsx)(h.eu, {
                        size: m._3.SIZE_24,
                        src: e.getAvatarURL(s, 24),
                        "aria-hidden": !0,
                        status: n,
                    }),
                }),
                (0, l.jsx)(b, { children: (0, l.jsx)(N, { children: t ?? a ?? er.Ay.getName(e) }) }),
                (0, l.jsxs)(T, {
                    children: [
                        er.Ay.getUserTag(e, { mode: "username", identifiable: i ? "never" : "always" }),
                        i || e.hasUniqueUsername()
                            ? null
                            : (0, l.jsxs)("span", { className: v.T, children: ["#", e.discriminator] }),
                    ],
                }),
            ],
        });
    }
}
class e_ extends ed {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: i, colorStrings: s } = e,
            r = "dot" === x.A.roleStyle,
            o = "username" === x.A.roleStyle && (null != i || null != s),
            c = (0, $.hH)(n, e, s),
            u = null != c && o,
            { gradientStyle: d, gradientClassname: h } = (0, p.Wq)({
                colorStrings: s,
                useReducedMotion: x.A.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            m = o ? { ...(u ? d : { color: null != i ? i : void 0 }) } : void 0;
        return (0, l.jsxs)(y, {
            children: [
                (0, l.jsx)(b, {
                    children: (0, l.jsxs)(N, {
                        children: [
                            r && (0, l.jsx)(f.W, { className: v.m4, color: i, colors: c, tooltip: !1 }),
                            (0, l.jsxs)("span", {
                                className: a()({ [h]: u }),
                                style: m,
                                "data-text": u ? `@${e.name}` : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, l.jsx)(T, { children: M.intl.string(M.t["/91tbr"]) }),
            ],
        });
    }
}
class ex extends ed {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, l.jsxs)(y, {
            children: [
                (0, l.jsx)(b, { children: (0, l.jsx)(N, { children: (0, l.jsx)(X.A, { node: e, showTooltip: !1 }) }) }),
                null != t ? (0, l.jsx)(T, { children: t }) : null,
            ],
        });
    }
}
class eC extends ed {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === z.rbe.GUILD_CATEGORY ? g.s : (0, F.gU)(e);
        return (0, l.jsxs)(y, {
            children: [
                null != n && (0, l.jsx)(S, { children: (0, l.jsx)(n, { className: v.Kk }) }),
                (0, l.jsx)(b, { children: (0, l.jsx)(N, { children: (0, G.m1)(e, ea.default, es.A) }) }),
                null != t ? (0, l.jsx)(T, { children: t.name }) : null,
            ],
        });
    }
}
class eA extends ed {
    renderContent() {
        let { command: e } = this.props;
        return (0, l.jsxs)(y, {
            children: [
                (0, l.jsx)(S, {
                    children: (0, l.jsx)(_.F, { size: "xs", color: "currentColor", className: v.Kk, colorClass: v.t4 }),
                }),
                (0, l.jsx)(b, { children: (0, l.jsx)(N, { children: e.displayName }) }),
                (0, l.jsx)(T, { children: e.displayDescription }),
            ],
        });
    }
}
class eE extends ed {
    isSelectable() {
        return this.props.command.inputType !== C.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: i, selected: s } = this.props,
            { hovered: a } = this.state,
            r = this.isSelectable();
        return e.inputType === C.y$.PLACEHOLDER
            ? (0, l.jsx)(V.A, {})
            : (0, l.jsx)(U, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: a || (r && s),
                  section: i,
                  isSelectable: r,
              });
    }
}
class eI extends ed {
    layoutClass = a()(v.rT, v.Mf);
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            i = ei.Sf.getSetting(),
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
            a = null != n ? (0, l.jsx)(T, { children: n.name }) : null;
        return (0, l.jsxs)(y, {
            children: [
                (0, l.jsx)(S, { children: s }),
                (0, l.jsx)(b, { children: (0, l.jsxs)(N, { children: [t, e.name, t] }) }),
                a,
            ],
        });
    }
}
class ev extends ed {
    layoutClass = a()(v.rT, v.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: i, sticker: s } = this.props,
            { hovered: a } = this.state;
        return (
            (0, el.FD)(s)
                ? (e = en.A.getStickerPack(s.pack_id)?.name)
                : (0, el.Xw)(s) && (e = ee.A.getGuild(s.guild_id)?.name),
            (0, l.jsxs)(y, {
                children: [
                    (0, l.jsx)(S, { children: n(s, a || !0 === i) }),
                    (0, l.jsxs)(b, {
                        children: [
                            (0, l.jsx)(N, { children: s.name }),
                            null != t && (0, l.jsx)(j, { children: M.intl.format(M.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, l.jsx)(T, { children: e }),
                ],
            })
        );
    }
}
class ey extends ed {
    layoutClass = v.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, l.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class eb extends ed {
    renderContent() {
        return (0, l.jsx)(Y, { emojis: this.props.emojis });
    }
}
class eS extends ed {
    renderContent() {
        return (0, l.jsx)(et, { ...this.props });
    }
}
class eN extends ed {
    renderContent() {
        let { game: e } = this.props,
            t = (0, l.jsx)("img", {
                alt: "",
                className: v.Kk,
                src: K.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 32 }),
            });
        return (0, l.jsxs)(y, {
            children: [
                (0, l.jsx)(S, { children: t }),
                (0, l.jsx)(b, { children: (0, l.jsx)(N, { children: e.name }) }),
            ],
        });
    }
}
class ej extends i.PureComponent {
    static Generic = eh;
    static Loading = em;
    static Title = ep;
    static Divider = ef;
    static User = eg;
    static Role = e_;
    static Channel = eC;
    static Command = eA;
    static NewCommand = eE;
    static Emoji = eI;
    static GIFIntegration = ey;
    static Sticker = ev;
    static EmojiUpsell = eb;
    static Soundmoji = eS;
    static Game = eN;
    static Timestamp = ex;
    render() {
        let { children: e, className: t, innerClassName: n, id: s, ...r } = this.props;
        return i.Children.count(e) > 0
            ? (0, l.jsx)(eu.Provider, {
                  value: { id: s ?? "" },
                  children: (0, l.jsx)("div", {
                      className: a()(v.nx, t),
                      children: (0, l.jsx)("div", { className: a()(v.Fv, n), ...r, children: e }),
                  }),
              })
            : null;
    }
}
let eT = ej;
