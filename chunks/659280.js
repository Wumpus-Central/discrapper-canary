"use strict";
n.d(t, { Sz: () => ec, Ay: () => ev, aI: () => ed });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(735438),
    o = n.n(l),
    d = n(837381),
    c = n(939249),
    u = n(534514),
    _ = n(97808),
    E = n(778712),
    A = n(36075),
    h = n(545442),
    I = n(678708),
    f = n(88187),
    p = n(775602),
    T = n(392054),
    m = n(17928),
    g = n(990078),
    S = n(834730),
    N = n(556402);
function C(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", { className: s()(N.um, n), children: t });
}
function R(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", { className: s()(N.Ov, n), children: t });
}
function O(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", { className: s()(N.wq, n), children: t });
}
function L(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)(S.E, {
        className: s()(n, N.hf),
        color: "interactive-text-active",
        variant: "text-md/normal",
        children: t,
    });
}
function D(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)(S.E, {
        className: s()(n, N.p3),
        color: "interactive-text-default",
        variant: "text-xs/normal",
        children: t,
    });
}
function y(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)(S.E, {
        className: s()(n, N.I0),
        color: "interactive-text-default",
        variant: "text-xs/normal",
        children: t,
    });
}
var v = n(696451),
    b = n(933589);
function M(e) {
    let { name: t, className: n, state: r, isInline: a, onClick: l } = e,
        o = null;
    r?.isActive && !a
        ? (o = b.vu)
        : r?.lastValidationResult?.success === !1
          ? (o = b.z3)
          : r?.hasValue && !a && (o = b.hZ);
    let d = (0, i.jsx)(S.E, {
        variant: a ? "text-md/normal" : "text-sm/normal",
        color: "text-strong",
        className: s()(b.uK, { [b.mG]: a }, o, n),
        children: t + (a ? ":" : ""),
    });
    return null == l ? d : (0, i.jsx)(c.D, { className: b.vk, onClick: () => l(t), children: d });
}
var P = n(649671);
n(827669);
var U = n(375708),
    w = n(280692);
function G(e, t, n) {
    return (0, i.jsx)(M, { className: w.uK, name: e.displayName, state: t, onClick: n }, e.name);
}
function x(e) {
    let { command: t, optionStates: n, onOptionClick: a } = e,
        {
            requiredOptions: s,
            setOptionalOptions: l,
            unsetOptionalOptions: o,
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
            className: w.$2,
            children: o.map((e) => (0, i.jsx)(S.E, { variant: "text-sm/normal", children: e.displayName }, e.name)),
        }),
        c = s.map((e) => G(e, n?.[e.name], a)),
        _ =
            l.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.D, {
                              className: w.Ki,
                              variant: "heading-deprecated-12/semibold",
                              children: U.intl.string(U.t["5C107K"]),
                          }),
                          l.map((e) => G(e, n?.[e.name], a)),
                      ],
                  })
                : null,
        E =
            o.length > 0
                ? (0, i.jsx)(g.m, {
                      __unsupportedReactNodeAsText: d,
                      "aria-label": !1,
                      delay: 200,
                      children: (0, i.jsx)(S.E, {
                          className: w.kP,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === l.length
                                  ? U.intl.formatToPlainString(U.t["0mI72g"], { count: o.length })
                                  : U.intl.formatToPlainString(U.t.BP8N0K, { count: o.length }),
                      }),
                  })
                : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [c, null != _ || null != E ? (0, i.jsxs)("div", { className: w.gM, children: [_, E] }) : null],
    });
}
function k(e) {
    let t,
        {
            command: n,
            activeOptionName: a,
            channel: l,
            showOptions: o,
            showImage: d,
            optionStates: c,
            onOptionClick: u,
            section: _,
            isSelectable: E = !0,
        } = e,
        A = r.useMemo(() => n?.options?.find((e) => e.name === a), [a, n]),
        h = null != a ? c?.[a] : null;
    t = null != h && h.lastValidationResult?.success === !1 ? (h.lastValidationResult.error ?? "") : null;
    let I = d && null != _ ? (0, P.Rg)(_) : null,
        f = (0, m.bG)([v.Ay], () => {
            if (null != l.guild_id && _?.botId != null) return v.Ay.getMember(l.guild_id, _.botId)?.nick;
        });
    return (0, i.jsxs)("div", {
        className: s()(w.iE, E ? null : w.r9),
        children: [
            null != I ? (0, i.jsx)(I, { className: w.Sl, channel: l, section: _, width: 32, height: 32 }) : null,
            (0, i.jsxs)("div", {
                className: w.QR,
                children: [
                    (0, i.jsxs)("div", {
                        className: w.nY,
                        children: [
                            (0, i.jsx)(L, { className: w.DD, children: "/" + n.displayName }),
                            o ? (0, i.jsx)(x, { command: n, optionStates: c, onOptionClick: u }) : null,
                        ],
                    }),
                    (0, i.jsx)(D, {
                        className: s()(w.h_, null != t ? w.z3 : null),
                        children: t ?? A?.displayDescription ?? n.displayDescription,
                    }),
                ],
            }),
            (0, i.jsx)(y, { className: w.sP, children: f ?? _?.name }),
        ],
    });
}
var F = n(524007),
    V = n(47167),
    B = n(713654),
    H = n(688810),
    j = n(573435),
    W = n(174459),
    Y = n(486020),
    K = n(652215),
    $ = n(307731),
    z = n(202541),
    q = n(9966);
let Z = (e) => {
    let { emojis: t } = e,
        { analyticsLocations: n } = (0, H.Ay)();
    r.useEffect(() => {
        W.default.track(K.HAw.PREMIUM_UPSELL_VIEWED, { type: z.e.EMOJI_AUTOCOMPLETE_INLINE, location_stack: n });
    }, [n]);
    let a = (0, i.jsx)("div", {
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
                        src: Y.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: $.EMOJI_URL_BASE_SIZE }),
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
            (0, i.jsx)(R, { children: (0, i.jsx)(L, { children: U.intl.format(U.t.uEky42, { count: t.length }) }) }),
            (0, i.jsx)(y, { children: a }),
        ],
    });
};
var X = n(106191),
    Q = n(785562),
    J = n(967144),
    ee = n(565645),
    et = n(71393);
function en(e) {
    let { sound: t } = e,
        n = (0, m.bG)([et.A], () => ("0" === t.guildId ? U.intl.string(U.t.Rtvk9X) : et.A.getGuild(t.guildId)?.name));
    return (0, i.jsxs)(C, {
        children: [
            (null != t.emojiId || null != t.emojiName) &&
                (0, i.jsx)(O, { children: (0, i.jsx)(ee.A, { emojiId: t.emojiId, emojiName: t.emojiName }) }),
            (0, i.jsx)(R, { children: (0, i.jsx)(L, { children: t.name }) }),
            null != n && (0, i.jsx)(y, { children: n }),
        ],
    });
}
n(980504);
var ei = n(750385),
    er = n(68935),
    ea = n(885386),
    es = n(994500),
    el = n(287809),
    eo = n(427262);
function ed(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function ec(e) {
    return `autocomplete-${e}-title`;
}
let eu = r.createContext(null);
class e_ extends r.PureComponent {
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
            props: { className: n, index: r, selected: a },
        } = this;
        return this.isSelectable()
            ? (0, i.jsx)(c.D, {
                  ...e,
                  className: s()(N.vk, n, t),
                  id: ed(r) ?? void 0,
                  onClick: this.handleClick,
                  onMouseMove: () => {
                      this.setState({ hovered: !0 }), this.handleMouseEnter();
                  },
                  onMouseLeave: () => this.setState({ hovered: !1 }),
                  role: "option",
                  "aria-selected": a,
                  children: (0, i.jsx)("div", { className: N.E3, children: this.renderContent() }),
              })
            : (0, i.jsx)("div", {
                  className: s()(N.vk, n, t),
                  id: ed(r) ?? void 0,
                  role: "none",
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
class eE extends e_ {
    renderContent() {
        let { text: e, description: t, badge: n } = this.props,
            r = (0, i.jsx)(L, { children: e });
        return (0, i.jsxs)(C, {
            children: [
                (0, i.jsx)(R, { children: null != n ? (0, i.jsxs)("div", { className: N.QN, children: [r, n] }) : r }),
                null != t ? (0, i.jsx)(y, { children: t }) : null,
            ],
        });
    }
}
function eA(e) {
    let t = r.useMemo(() => o().random(60, 120), []);
    return (0, i.jsx)("div", {
        className: N.E3,
        "aria-busy": !0,
        children: (0, i.jsx)(C, {
            children: (0, i.jsx)(R, {
                children: (0, i.jsx)(L, { children: (0, i.jsx)("div", { className: N.M, style: { width: t } }) }),
            }),
        }),
    });
}
function eh(e) {
    let { title: t, className: n, children: a } = e,
        l = r.useContext(eu);
    return (0, i.jsx)("div", {
        className: N.E3,
        children: (0, i.jsxs)(u.D, {
            id: ec(l.id),
            className: s()(N.eu, n),
            variant: "heading-deprecated-12/semibold",
            children: [t, a],
        }),
    });
}
class eI extends e_ {
    layoutClass = N.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, i.jsx)("div", { className: s()(e, N.yF) });
    }
}
class ef extends e_ {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: r, guildId: a } = this.props,
            s = null == a ? es.A.getNickname(e.id) : null;
        return (0, i.jsxs)(C, {
            children: [
                (0, i.jsx)(O, {
                    children: (0, i.jsx)(_.eu, {
                        size: E._3.SIZE_24,
                        src: e.getAvatarURL(a, 24),
                        "aria-hidden": !0,
                        status: n,
                    }),
                }),
                (0, i.jsx)(R, { children: (0, i.jsx)(L, { children: t ?? s ?? eo.Ay.getName(e) }) }),
                (0, i.jsxs)(y, {
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
class ep extends e_ {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: r, colorStrings: a } = e,
            l = "dot" === p.Ay.roleStyle,
            o = "username" === p.Ay.roleStyle && (null != r || null != a),
            d = (0, J.hH)(n, e, a),
            c = null != d && o,
            { gradientStyle: u, gradientClassname: _ } = (0, A.Wq)({
                colorStrings: a,
                useReducedMotion: p.Ay.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            E = o ? { ...(c ? u : { color: null != r ? r : void 0 }) } : void 0;
        return (0, i.jsxs)(C, {
            children: [
                (0, i.jsx)(R, {
                    children: (0, i.jsxs)(L, {
                        children: [
                            l && (0, i.jsx)(h.W, { className: N.m4, color: r, colors: d, tooltip: !1 }),
                            (0, i.jsxs)("span", {
                                className: s()({ [_]: c }),
                                style: E,
                                "data-text": c ? `@${e.name}` : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, i.jsx)(y, { children: U.intl.string(U.t["/91tbr"]) }),
            ],
        });
    }
}
class eT extends e_ {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, i.jsxs)(C, {
            children: [
                (0, i.jsx)(R, { children: (0, i.jsx)(L, { children: (0, i.jsx)(Q.A, { node: e, showTooltip: !1 }) }) }),
                null != t ? (0, i.jsx)(y, { children: t }) : null,
            ],
        });
    }
}
class em extends e_ {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === K.rbe.GUILD_CATEGORY ? I.s : (0, B.gU)(e);
        return (0, i.jsxs)(C, {
            children: [
                null != n && (0, i.jsx)(O, { children: (0, i.jsx)(n, { className: N.Kk }) }),
                (0, i.jsx)(R, { children: (0, i.jsx)(L, { children: (0, V.m1)(e, el.default, es.A) }) }),
                null != t ? (0, i.jsx)(y, { children: t.name }) : null,
            ],
        });
    }
}
class eg extends e_ {
    renderContent() {
        let { command: e } = this.props;
        return (0, i.jsxs)(C, {
            children: [
                (0, i.jsx)(O, {
                    children: (0, i.jsx)(f.F, { size: "xs", color: "currentColor", className: N.Kk, colorClass: N.t4 }),
                }),
                (0, i.jsx)(R, { children: (0, i.jsx)(L, { children: e.displayName }) }),
                (0, i.jsx)(y, { children: e.displayDescription }),
            ],
        });
    }
}
class eS extends e_ {
    isSelectable() {
        return this.props.command.inputType !== T.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: r, selected: a } = this.props,
            { hovered: s } = this.state,
            l = this.isSelectable();
        return e.inputType === T.y$.PLACEHOLDER
            ? (0, i.jsx)(F.A, {})
            : (0, i.jsx)(k, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: s || (l && a),
                  section: r,
                  isSelectable: l,
              });
    }
}
class eN extends e_ {
    layoutClass = s()(N.rT, N.Mf);
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            r = ea.Sf.getSetting(),
            a =
                null != e.id || "" !== e.url
                    ? (0, i.jsx)("img", {
                          alt: "",
                          className: N.mp,
                          src:
                              null != e.id
                                  ? Y.Ay.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && r,
                                        size: $.EMOJI_URL_BASE_SIZE,
                                    })
                                  : e.url,
                      })
                    : (0, i.jsx)("span", { className: N.nT, children: e.surrogates }),
            s = null != n ? (0, i.jsx)(y, { children: n.name }) : null;
        return (0, i.jsxs)(C, {
            children: [
                (0, i.jsx)(O, { children: a }),
                (0, i.jsx)(R, { children: (0, i.jsxs)(L, { children: [t, e.name, t] }) }),
                s,
            ],
        });
    }
}
class eC extends e_ {
    layoutClass = s()(N.rT, N.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: r, sticker: a } = this.props,
            { hovered: s } = this.state;
        return (
            (0, er.FD)(a)
                ? (e = ei.A.getStickerPack(a.pack_id)?.name)
                : (0, er.Xw)(a) && (e = et.A.getGuild(a.guild_id)?.name),
            (0, i.jsxs)(C, {
                children: [
                    (0, i.jsx)(O, { children: n(a, s || !0 === r) }),
                    (0, i.jsxs)(R, {
                        children: [
                            (0, i.jsx)(L, { children: a.name }),
                            null != t && (0, i.jsx)(D, { children: U.intl.format(U.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, i.jsx)(y, { children: e }),
                ],
            })
        );
    }
}
class eR extends e_ {
    layoutClass = N.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, i.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class eO extends e_ {
    renderContent() {
        return (0, i.jsx)(Z, { emojis: this.props.emojis });
    }
}
class eL extends e_ {
    renderContent() {
        return (0, i.jsx)(en, { ...this.props });
    }
}
class eD extends e_ {
    renderContent() {
        return (0, i.jsxs)(C, {
            children: [
                (0, i.jsx)(O, { children: (0, i.jsx)(X.A, { game: this.props.game, iconClassName: N.Kk }) }),
                (0, i.jsx)(R, { children: (0, i.jsx)(L, { children: this.props.game.name }) }),
            ],
        });
    }
}
class ey extends r.PureComponent {
    static Generic = eE;
    static Loading = eA;
    static Title = eh;
    static Divider = eI;
    static User = ef;
    static Role = ep;
    static Channel = em;
    static Command = eg;
    static NewCommand = eS;
    static Emoji = eN;
    static GIFIntegration = eR;
    static Sticker = eC;
    static EmojiUpsell = eO;
    static Soundmoji = eL;
    static Game = eD;
    static Timestamp = eT;
    render() {
        let { children: e, className: t, innerClassName: n, id: a, ...l } = this.props;
        return r.Children.count(e) > 0
            ? (0, i.jsx)(eu.Provider, {
                  value: { id: a ?? "" },
                  children: (0, i.jsx)("div", {
                      className: s()(N.nx, t),
                      children: (0, i.jsx)("div", { className: s()(N.Fv, n), ...l, children: e }),
                  }),
              })
            : null;
    }
}
let ev = ey;
